package main

import (
	"bytes"

	"fmt"
	"io"
	"net/http"
	"os"
	"context"
	"os/exec"
	"path/filepath"
	"sort"
	"strings"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Topic struct {
	ID        string `json:"id"`
	Section   string `json:"section"`
	Title     string `json:"title"`
	MdPath    string `json:"md_path"`
	GoPath    string `json:"go_path"`
}

type Section struct {
	Name   string  `json:"name"`
	Topics []Topic `json:"topics"`
}

type RunRequest struct {
	Code string `json:"code"`
}

func main() {
	r := gin.Default()

	// CORS Setup
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"}, // Allow all origins for dev
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	r.GET("/api/topics", getTopics)
	r.GET("/api/content", getContent)
	r.POST("/api/run", runCode)
	r.POST("/api/chat", chatWithLLM)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	fmt.Printf("Starting server on port %s...\n", port)
	r.Run(":" + port)
}

func getTopics(c *gin.Context) {
	rootDir := ".." // Root of the repo

	var sections []Section
	sectionMap := make(map[string]*Section)

	// Scan directories
	entries, err := os.ReadDir(rootDir)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	for _, entry := range entries {
		if !entry.IsDir() {
			continue
		}
		dirName := entry.Name()
		if strings.HasSuffix(dirName, "_explanation") {
			sectionName := strings.TrimSuffix(dirName, "_explanation")

			// Make sure the code section exists
			if _, err := os.Stat(filepath.Join(rootDir, sectionName)); os.IsNotExist(err) {
				continue
			}

			// Read md files
			mdFiles, err := os.ReadDir(filepath.Join(rootDir, dirName))
			if err != nil {
				continue
			}

			var topics []Topic
			for _, mdFile := range mdFiles {
				if !strings.HasSuffix(mdFile.Name(), ".md") {
					continue
				}

				baseName := strings.TrimSuffix(mdFile.Name(), ".md")
				goFile := baseName + ".go"

				goFilePath := filepath.Join(rootDir, sectionName, goFile)
				mdFilePath := filepath.Join(rootDir, dirName, mdFile.Name())

				// Check if corresponding go file exists
				if _, err := os.Stat(goFilePath); err == nil {
					topicID := fmt.Sprintf("%s/%s", sectionName, baseName)

					// Read title from markdown (first H1)
					title := baseName
					content, err := os.ReadFile(mdFilePath)
					if err == nil {
						lines := strings.Split(string(content), "\n")
						for _, line := range lines {
							if strings.HasPrefix(line, "# ") {
								title = strings.TrimSpace(strings.TrimPrefix(line, "# "))
								break
							}
						}
					}

					topics = append(topics, Topic{
						ID:      topicID,
						Section: sectionName,
						Title:   title,
						MdPath:  filepath.Join(dirName, mdFile.Name()),
						GoPath:  filepath.Join(sectionName, goFile),
					})
				}
			}

			if len(topics) > 0 {
				sort.Slice(topics, func(i, j int) bool {
					return topics[i].ID < topics[j].ID
				})
				sec := &Section{
					Name:   sectionName,
					Topics: topics,
				}
				sectionMap[sectionName] = sec
				sections = append(sections, *sec)
			}
		}
	}

	sort.Slice(sections, func(i, j int) bool {
		return sections[i].Name < sections[j].Name
	})

	c.JSON(http.StatusOK, sections)
}

func getContent(c *gin.Context) {
	topicID := c.Query("topic")
	if topicID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "topic parameter is required"})
		return
	}

	parts := strings.Split(topicID, "/")
	if len(parts) != 2 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid topic format"})
		return
	}

	sectionName := parts[0]
	baseName := parts[1]

	rootDir := ".."
	mdPath := filepath.Join(rootDir, sectionName+"_explanation", baseName+".md")
	goPath := filepath.Join(rootDir, sectionName, baseName+".go")

	mdContent, err := os.ReadFile(mdPath)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "markdown file not found"})
		return
	}

	goContent, err := os.ReadFile(goPath)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "go file not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"markdown": string(mdContent),
		"go_code":  string(goContent),
	})
}

func runCode(c *gin.Context) {
	var req RunRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create a temporary directory
	tmpDir, err := os.MkdirTemp("", "go-wasm-*")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to create temp dir"})
		return
	}
	defer os.RemoveAll(tmpDir)

	// Write the code to a file
	srcPath := filepath.Join(tmpDir, "main.go")
	if err := os.WriteFile(srcPath, []byte(req.Code), 0644); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to write code to file"})
		return
	}

	// Output wasm path
	outPath := filepath.Join(tmpDir, "main.wasm")

	// Compile to Wasm with a timeout
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cmd := exec.CommandContext(ctx, "go", "build", "-o", outPath, srcPath)
	cmd.Env = append(os.Environ(), "GOOS=js", "GOARCH=wasm")

	var stderr bytes.Buffer
	cmd.Stderr = &stderr

	if err := cmd.Run(); err != nil {
		if ctx.Err() == context.DeadlineExceeded {
			c.JSON(http.StatusOK, gin.H{
				"success": false,
				"error":   "Compilation timed out after 10 seconds",
			})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"success": false,
			"error":   stderr.String(),
		})
		return
	}

	// Read the compiled Wasm
	wasmBytes, err := os.ReadFile(outPath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to read compiled wasm"})
		return
	}

	// Serve the Wasm file directly
	c.Data(http.StatusOK, "application/wasm", wasmBytes)
}

func chatWithLLM(c *gin.Context) {
	// Proxy request to LM Studio
	// Assuming LM Studio is running on localhost:1234
	lmStudioURL := "http://localhost:1234/v1/chat/completions"

	body, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "failed to read request body"})
		return
	}

	req, err := http.NewRequest("POST", lmStudioURL, bytes.NewBuffer(body))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to create request"})
		return
	}
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("failed to reach LM Studio: %v", err)})
		return
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to read LM Studio response"})
		return
	}

	// Pass through the status code and headers from LM Studio
	for k, v := range resp.Header {
		c.Header(k, v[0])
	}
	c.Data(resp.StatusCode, resp.Header.Get("Content-Type"), respBody)
}
