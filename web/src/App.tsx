import { useEffect, useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Play, MessageSquare, Terminal, Code } from 'lucide-react'

type Topic = {
  id: string
  section: string
  title: string
  md_path: string
  go_path: string
}

type Section = {
  name: string
  topics: Topic[]
}

type OutputMessage = {
  type: 'log' | 'error' | 'system'
  text: string
}

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

function App() {
  const [sections, setSections] = useState<Section[]>([])
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null)

  const [markdown, setMarkdown] = useState<string>('# Welcome\nSelect a topic from the sidebar.')
  const [code, setCode] = useState<string>('package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}')

  const [output, setOutput] = useState<OutputMessage[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'こんにちは！Goの学習について何か質問はありますか？' }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isChatting, setIsChatting] = useState(false)

  const outputEndRef = useRef<HTMLDivElement>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Fetch topics
  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => {
        setSections(data)
        if (data.length > 0 && data[0].topics.length > 0) {
          loadTopic(data[0].topics[0].id)
        }
      })
      .catch(err => console.error("Failed to load topics:", err))
  }, [])

  // Auto-scroll refs
  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [output])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const loadTopic = async (topicId: string) => {
    try {
      setActiveTopicId(topicId)
      const res = await fetch(`/api/content?topic=${encodeURIComponent(topicId)}`)
      const data = await res.json()
      if (res.ok) {
        setMarkdown(data.markdown)
        setCode(data.go_code)
        setOutput([{ type: 'system', text: `Loaded ${topicId}` }])
      } else {
        setOutput([{ type: 'error', text: data.error || 'Failed to load topic' }])
      }
    } catch (err) {
      console.error(err)
    }
  }

  const runCode = async () => {
    if (isRunning) return
    setIsRunning(true)
    setOutput([{ type: 'system', text: 'Compiling...' }])

    try {
      const res = await fetch('/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      })

      if (res.headers.get('Content-Type')?.includes('application/json')) {
        const errorData = await res.json()
        setOutput(prev => [...prev, { type: 'error', text: errorData.error }])
        setIsRunning(false)
        return
      }

      const wasmBytes = await res.arrayBuffer()

      // Execute the Wasm binary
      const go = new (window as any).Go()

      // Overwrite console.log and console.error to capture output
      const oldLog = console.log
      const oldError = console.error

      console.log = (...args) => {
        setOutput(prev => [...prev, { type: 'log', text: args.join(' ') }])
        oldLog(...args)
      }
      console.error = (...args) => {
        setOutput(prev => [...prev, { type: 'error', text: args.join(' ') }])
        oldError(...args)
      }

      try {
        const result = await WebAssembly.instantiate(wasmBytes, go.importObject)
        await go.run(result.instance)
        setOutput(prev => [...prev, { type: 'system', text: 'Program exited.' }])
      } catch (e) {
        setOutput(prev => [...prev, { type: 'error', text: `Wasm execution error: ${e}` }])
      } finally {
        // Restore console
        console.log = oldLog
        console.error = oldError
      }

    } catch (err) {
      setOutput(prev => [...prev, { type: 'error', text: String(err) }])
    } finally {
      setIsRunning(false)
    }
  }

  const sendChatMessage = async () => {
    if (!chatInput.trim() || isChatting) return

    const userMessage = chatInput.trim()
    setChatInput('')
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsChatting(true)

    try {
      // Build context for LLM
      const systemPrompt = `あなたはGolangの学習をサポートする優秀なAIアシスタントです。
ユーザーは現在以下のトピックを学習しています。
現在のコード:
\`\`\`go
${code}
\`\`\``

      const messages = [
        { role: 'system', content: systemPrompt },
        ...chatMessages.map(m => ({ role: m.role, content: m.content })),
        { role: 'user', content: userMessage }
      ]

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'local-model', // Usually ignored by LM Studio
          messages: messages,
          temperature: 0.7
        })
      })

      if (!res.ok) {
        throw new Error('Failed to connect to local LLM. Is LM Studio running on port 1234?')
      }

      const data = await res.json()
      const assistantMessage = data.choices[0].message.content

      setChatMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }])
    } catch (err) {
      setChatMessages(prev => [...prev, { role: 'assistant', content: `エラーが発生しました: ${err}` }])
    } finally {
      setIsChatting(false)
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-gray-300 flex flex-col h-full border-r border-gray-700 overflow-y-auto">
        <div className="p-4 border-b border-gray-800 flex items-center gap-2 text-white font-bold">
          <Code size={20} />
          <span>Go Interactive Learning</span>
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          {sections.map(section => (
            <div key={section.name} className="mb-4">
              <div className="px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                {section.name}
              </div>
              <ul>
                {section.topics.map(topic => (
                  <li key={topic.id}>
                    <button
                      onClick={() => loadTopic(topic.id)}
                      className={`w-full text-left px-4 py-1.5 text-sm hover:bg-gray-800 hover:text-white transition-colors ${
                        activeTopicId === topic.id ? 'bg-gray-800 text-blue-400 border-r-2 border-blue-500' : ''
                      }`}
                    >
                      {topic.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        <div className="flex-1 flex overflow-hidden">
          {/* Markdown Panel */}
          <div className="w-1/2 overflow-y-auto p-6 bg-white border-r border-gray-200">
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </div>
          </div>

          {/* Editor & Output Panel */}
          <div className="w-1/2 flex flex-col bg-gray-50">
            {/* Editor */}
            <div className="flex-1 flex flex-col min-h-0 border-b border-gray-200">
              <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Code size={16} /> main.go
                </span>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 disabled:opacity-50 transition-colors"
                >
                  <Play size={14} />
                  {isRunning ? 'Running...' : 'Run'}
                </button>
              </div>
              <div className="flex-1 min-h-0 relative">
                <Editor
                  language="go"
                  value={code}
                  onChange={(val) => setCode(val || '')}
                  theme="vs-dark"
                  options={{ minimap: { enabled: false }, fontSize: 14 }}
                />
              </div>
            </div>

            {/* Output */}
            <div className="h-48 bg-gray-900 text-gray-300 flex flex-col font-mono text-sm">
              <div className="bg-gray-800 px-4 py-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                <Terminal size={14} />
                Terminal
              </div>
              <div className="flex-1 overflow-y-auto p-4 whitespace-pre-wrap">
                {output.map((msg, idx) => (
                  <div key={idx} className={`${msg.type === 'error' ? 'text-red-400' : msg.type === 'system' ? 'text-blue-400' : 'text-green-400'}`}>
                    {msg.text}
                  </div>
                ))}
                <div ref={outputEndRef} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 flex flex-col h-full shadow-lg z-10">
        <div className="p-4 border-b border-gray-200 bg-blue-50 flex items-center gap-2 text-blue-800 font-bold">
          <MessageSquare size={20} />
          <span>AI Assistant</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {chatMessages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <span className="text-xs text-gray-500 mb-1 px-1">
                {msg.role === 'user' ? 'You' : 'AI'}
              </span>
              <div className={`px-3 py-2 rounded-lg max-w-[90%] text-sm ${
                msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isChatting && (
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-500 mb-1 px-1">AI</span>
              <div className="px-3 py-2 rounded-lg bg-gray-100 text-gray-800 rounded-bl-none text-sm">
                <span className="animate-pulse">...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <form onSubmit={(e) => { e.preventDefault(); sendChatMessage(); }} className="flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="質問を入力..."
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              disabled={isChatting}
            />
            <button
              type="submit"
              disabled={!chatInput.trim() || isChatting}
              className="bg-blue-600 text-white px-3 py-2 rounded-md disabled:opacity-50 hover:bg-blue-700 transition-colors"
            >
              送信
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
