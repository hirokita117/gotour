# Exercise: Web Crawler（演習: ウェブクローラー）

> **ソースコード**: [08_exercise_web_crawler.go](../05_concurrency/08_exercise_web_crawler.go)

## 概要

Go の並行処理機能を使って、ウェブをクロール（巡回）するプログラムを作成する演習です。複数の URL を並行してフェッチし、同じ URL を二度フェッチしないようにします。この演習は、ゴルーチン、チャネル、ミューテックス、sync.WaitGroup を組み合わせた実践的な課題です。

## 課題

1. URL を並行してフェッチする
2. 同じ URL を二度フェッチしない
3. すべてのゴルーチンが完了するまで待機する

## コード解説

### SafeCache（安全なキャッシュ）

```go
type SafeCache struct {
	mu      sync.Mutex
	visited map[string]bool
}

func (c *SafeCache) Visit(url string) bool {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.visited[url] {
		return false
	}
	c.visited[url] = true
	return true
}
```

ミューテックスで保護されたマップで、訪問済み URL を追跡します。`Visit` メソッドは、URL が未訪問なら `true` を返し、訪問済みとしてマークします。

### Crawl 関数

```go
func Crawl(url string, depth int, fetcher Fetcher, cache *SafeCache, wg *sync.WaitGroup) {
	defer wg.Done()

	if depth <= 0 {
		return
	}

	if !cache.Visit(url) {
		return
	}

	body, urls, err := fetcher.Fetch(url)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("found: %s %q\n", url, body)

	for _, u := range urls {
		wg.Add(1)
		go Crawl(u, depth-1, fetcher, cache, wg)
	}
}
```

- `sync.WaitGroup` でゴルーチンの完了を追跡
- `cache.Visit` で重複チェック
- 見つかった URL を並行してクロール

### main 関数

```go
func main() {
	cache := &SafeCache{visited: make(map[string]bool)}
	var wg sync.WaitGroup
	wg.Add(1)
	go Crawl("https://golang.org/", 4, fetcher, cache, &wg)
	wg.Wait()
}
```

## ポイント

- `sync.WaitGroup` - ゴルーチンの完了を待機するためのカウンタ
  - `Add(n)` - カウンタを n 増やす
  - `Done()` - カウンタを 1 減らす（`Add(-1)` と同等）
  - `Wait()` - カウンタが 0 になるまでブロック
- 共有データ（visited マップ）へのアクセスはミューテックスで保護
- 各 URL のフェッチは独立したゴルーチンで並行実行

### 別の実装方法

チャネルを使った実装も可能です:
- 結果をチャネルで送受信
- ワーカープールパターンの使用

## 参考

- [A Tour of Go - Exercise: Web Crawler](https://go.dev/tour/concurrency/10)

## 実行方法

```bash
go run 05_concurrency/08_exercise_web_crawler.go
```

---

## ナビゲーション

← 前: [sync.Mutex](07_sync_mutex.md)

### 関連トピック
- [Goroutines](00_goroutines.md) - ゴルーチンの基本
- [Channels](01_channels.md) - チャネルの基本
- [sync.Mutex](07_sync_mutex.md) - 排他制御
