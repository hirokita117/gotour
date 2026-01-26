# Go Tour Webアプリケーション実装計画

## 概要

既存のGo学習リポジトリ（A Tour of Go準拠、88個のGoファイル + 92個の解説mdファイル）をWebアプリケーション化し、ローカルLLMに質問できる機能を追加する。

## 技術スタック

| レイヤー | 技術 | 理由 |
|---------|------|------|
| バックエンド | Go（標準ライブラリ `net/http`） | Go学習の一環、シンプル |
| Markdownパーサー | `github.com/yuin/goldmark` | Go製、高速 |
| シンタックスハイライト | `github.com/alecthomas/chroma` | goldmarkと統合可能 |
| フロントエンド | HTML + CSS + Vanilla JS | ビルドツール不要 |
| ローカルLLM | Ollama（OpenAI互換API） | セットアップが簡単、macOSに最適化 |

## アーキテクチャ

```
Browser
  ├── 解説ドキュメント表示（md → HTML）
  ├── Goコード表示（シンタックスハイライト）
  ├── セクションナビゲーション
  └── LLMチャットパネル
       │
       ▼
Go HTTP Server (:8080)
  ├── GET /                → トップページ
  ├── GET /section/:name   → セクション一覧
  ├── GET /topic/:id       → トピック詳細
  └── POST /api/chat       → LLMチャット
       │
       ▼
Ollama (localhost:11434)
  └── OpenAI互換API (/v1/chat/completions)
```

## ディレクトリ構造（新規作成）

```
gotour/
├── web/
│   ├── cmd/server/main.go          # エントリーポイント
│   ├── internal/
│   │   ├── config/config.go        # 設定管理
│   │   ├── content/
│   │   │   ├── loader.go           # コンテンツ読み込み
│   │   │   ├── parser.go           # Markdownパーサー
│   │   │   └── types.go            # データ型
│   │   ├── handler/
│   │   │   ├── page.go             # ページハンドラー
│   │   │   ├── api.go              # API
│   │   │   └── chat.go             # LLMチャット
│   │   ├── llm/
│   │   │   ├── client.go           # LLMクライアント
│   │   │   └── types.go            # LLM型定義
│   │   └── server/server.go        # HTTPサーバー
│   ├── templates/                   # HTMLテンプレート
│   │   ├── base.html
│   │   ├── index.html
│   │   ├── section.html
│   │   └── topic.html
│   ├── static/                      # CSS/JS
│   │   ├── css/
│   │   │   ├── style.css
│   │   │   └── markdown.css
│   │   └── js/
│   │       ├── main.js
│   │       └── chat.js
│   └── go.mod
└── （既存ファイル）
```

## 実装フェーズ

### Phase 1: 基盤構築

**目標**: プロジェクト構造の作成、基本的なHTTPサーバーの起動

**作成するファイル**:
- `web/go.mod` - Goモジュール定義
- `web/cmd/server/main.go` - エントリーポイント
- `web/internal/config/config.go` - 設定管理
- `web/internal/server/server.go` - HTTPサーバー設定

**実装内容**:
1. `go mod init` でモジュール初期化
2. 基本的なHTTPサーバー起動
3. 設定ファイル読み込み（ポート、LLMエンドポイントなど）
4. 静的ファイル配信の設定

### Phase 2: コンテンツローダー

**目標**: 既存のmd/goファイルを読み込んでパースする機能

**作成するファイル**:
- `web/internal/content/types.go` - データ型定義
- `web/internal/content/loader.go` - ファイル読み込み
- `web/internal/content/parser.go` - Markdownパース

**実装内容**:
1. ディレクトリ構造のスキャン
2. セクション・トピックの抽出
3. Markdownのパースとシンタックスハイライト
4. Goコードの読み込みとハイライト
5. ナビゲーション情報の構築

### Phase 3: Webページ表示

**目標**: ブラウザでコンテンツを閲覧できる状態

**作成するファイル**:
- `web/internal/handler/page.go` - ページハンドラー
- `web/templates/base.html` - ベーステンプレート
- `web/templates/index.html` - トップページ
- `web/templates/section.html` - セクション一覧
- `web/templates/topic.html` - トピック詳細
- `web/static/css/style.css` - メインスタイル
- `web/static/css/markdown.css` - Markdownスタイル
- `web/static/js/main.js` - 基本機能

**実装内容**:
1. HTMLテンプレートの作成
2. ルーティング設定
3. セクション一覧ページ
4. トピック詳細ページ（md + goコード表示）
5. ナビゲーション（前後移動、セクション間移動）
6. レスポンシブデザイン

### Phase 4: REST API

**目標**: フロントエンドから利用するREST API

**作成するファイル**:
- `web/internal/handler/api.go` - APIハンドラー

**実装内容**:
1. `GET /api/sections` - セクション一覧
2. `GET /api/topics/:section` - セクション内トピック一覧
3. `GET /api/topic/:section/:num` - 個別トピック詳細
4. JSONレスポンス形式

### Phase 5: LLM連携

**目標**: ローカルLLMへの質問機能

**作成するファイル**:
- `web/internal/llm/types.go` - LLM関連型
- `web/internal/llm/client.go` - LLMクライアント
- `web/internal/handler/chat.go` - チャットハンドラー
- `web/static/js/chat.js` - チャットUI

**実装内容**:
1. OpenAI互換APIクライアント実装
2. ストリーミングレスポンス対応（Server-Sent Events）
3. コンテキスト付きプロンプト生成
4. チャットUIコンポーネント
5. エラーハンドリング（LLM未起動時など）

### Phase 6: 仕上げ・最適化

**目標**: 使い勝手の向上、ドキュメント整備

**作成・更新するファイル**:
- `web/README.md` - 使用方法ドキュメント
- `web/Makefile` - ビルド/実行タスク
- 各種テストファイル

**実装内容**:
1. UIの洗練（アニメーション、フィードバック）
2. キーボードショートカット
3. ダークモード対応
4. ユニットテスト
5. ドキュメント作成

## データモデル

```go
// Section はA Tour of Goの各セクションを表す
type Section struct {
    ID          string   // "01_basics", "02_flowcontrol" など
    Name        string   // "Basics", "Flow Control" など
    DisplayName string   // "基礎", "フロー制御" など
    Topics      []Topic
}

// Topic は各学習トピックを表す
type Topic struct {
    ID           string    // "01_basics/00_hello_world"
    Section      string    // "01_basics"
    Number       int       // 0
    Name         string    // "hello_world"
    Title        string    // "Hello, World"
    MarkdownPath string    // 相対パス
    GoCodePath   string    // 相対パス
    Markdown     string    // レンダリング済みHTML
    GoCode       string    // シンタックスハイライト済み
    Prev         *TopicRef
    Next         *TopicRef
}

// TopicRef はナビゲーション用の参照
type TopicRef struct {
    ID    string
    Title string
}
```

## LLM連携の詳細

### OpenAI互換APIクライアント

```go
// Client はローカルLLMとの通信を管理
type Client struct {
    BaseURL    string
    Model      string
    HTTPClient *http.Client
}

// ChatRequest はOpenAI互換のリクエスト形式
type ChatRequest struct {
    Model    string    `json:"model"`
    Messages []Message `json:"messages"`
    Stream   bool      `json:"stream"`
}

// Message はチャットメッセージ
type Message struct {
    Role    string `json:"role"`    // "system", "user", "assistant"
    Content string `json:"content"`
}
```

### システムプロンプト設計

```go
const systemPromptTemplate = `あなたはGo言語の学習をサポートするアシスタントです。

現在、ユーザーは以下のトピックを学習しています：

## トピック: %s

### 解説内容:
%s

### サンプルコード:
'''go
%s
'''

ユーザーの質問に対して、上記のコンテキストを踏まえて回答してください。
Go言語の初学者にもわかりやすく説明してください。`
```

### 設定例

```yaml
# config.yaml
server:
  port: 8080
  content_dir: ../  # gotour ルートへの相対パス

llm:
  url: http://localhost:11434/v1/chat/completions
  model: llama3.2
  timeout: 60s
```

## 起動方法（完成後）

```bash
# 1. Ollamaをインストール・起動
brew install ollama
ollama serve

# 2. モデルをダウンロード
ollama pull llama3.2

# 3. Webアプリを起動
cd gotour/web
go run ./cmd/server

# 4. ブラウザでアクセス
open http://localhost:8080
```

## 検証方法

1. **コンテンツ表示**: 各セクションのトピックが正しく表示されるか
2. **ナビゲーション**: 前後移動、セクション間移動が動作するか
3. **シンタックスハイライト**: Goコードが正しくハイライトされるか
4. **LLM連携**: チャットで質問し、コンテキストを踏まえた回答が返るか
5. **エラー処理**: LLM未起動時に適切なエラーメッセージが表示されるか

## 必要な依存関係

```
github.com/yuin/goldmark              # Markdownパーサー
github.com/yuin/goldmark-highlighting # シンタックスハイライト統合
github.com/alecthomas/chroma/v2       # シンタックスハイライター
gopkg.in/yaml.v3                      # 設定ファイル読み込み
```

## 決定事項

- **ローカルLLM**: Ollama
- **フロントエンド**: Vanilla JS（ビルドツール不要でシンプル）
- **コード実行機能**: なし（ターミナルで実行する想定）
