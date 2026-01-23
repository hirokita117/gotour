# sync.Mutex（排他制御）

> **ソースコード**: [07_sync_mutex.go](../05_concurrency/07_sync_mutex.go)

## 概要

チャネルは、ゴルーチン間の通信に優れていますが、単に共有変数へのアクセスを排他制御したい場合は、`sync.Mutex`（ミューテックス）を使います。ミューテックスは「相互排他（mutual exclusion）」の略で、同時に 1 つのゴルーチンだけがクリティカルセクションにアクセスできるようにします。

## コード解説

```go
type SafeCounter struct {
	mu sync.Mutex
	v  map[string]int
}
```

`SafeCounter` は、ミューテックス `mu` とマップ `v` を持つ構造体です。

```go
func (c *SafeCounter) Inc(key string) {
	c.mu.Lock()
	c.v[key]++
	c.mu.Unlock()
}
```

`Lock()` でミューテックスを取得し、クリティカルセクション（`c.v[key]++`）を実行した後、`Unlock()` で解放します。

```go
func (c *SafeCounter) Value(key string) int {
	c.mu.Lock()
	defer c.mu.Unlock()
	return c.v[key]
}
```

`defer` を使うと、関数終了時に自動的に `Unlock()` が呼ばれます。これは、複数の return 文がある場合や、パニックが発生した場合にも安全です。

```go
for i := 0; i < 1000; i++ {
	go c.Inc("somekey")
}
```

1000 個のゴルーチンが並行してカウンタをインクリメントします。ミューテックスがなければ、レースコンディションが発生します。

## ポイント

- `Lock()` - ミューテックスを取得（他がロック中なら待機）
- `Unlock()` - ミューテックスを解放
- `defer` と組み合わせると、ロック解放を忘れない
- Go では「通信で共有する」（チャネル）アプローチが推奨されることが多い
- しかし、単純な排他制御にはミューテックスの方が適切な場合もある

### レースコンディションの検出

```bash
go run -race 07_sync_mutex.go
```

`-race` フラグを使うと、レースコンディションを検出できます。

## 参考

- [A Tour of Go - sync.Mutex](https://go.dev/tour/concurrency/9)

## 実行方法

```bash
go run 05_concurrency/07_sync_mutex.go
```

---

## ナビゲーション

← 前: [Exercise: Equivalent Binary Trees](06_exercise_equivalent_binary_trees.md) | 次: [Exercise: Web Crawler](08_exercise_web_crawler.md) →

### 関連トピック
- [Goroutines](00_goroutines.md) - ゴルーチンの基本
- [Channels](01_channels.md) - チャネルによる同期
