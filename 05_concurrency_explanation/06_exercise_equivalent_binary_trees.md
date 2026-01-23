# Exercise: Equivalent Binary Trees（演習: 等価な二分木）

> **ソースコード**: [06_exercise_equivalent_binary_trees.go](../05_concurrency/06_exercise_equivalent_binary_trees.go)

## 概要

異なる二分木が同じ値のシーケンスを持つかどうかを、ゴルーチンとチャネルを使って判定する演習です。この演習では、並行処理を使った実践的な問題解決を学びます。

## 課題

`golang.org/x/tour/tree` パッケージの `tree.Tree` 型を使用します。

1. `Walk(t *tree.Tree, ch chan int)` - 木を走査し、すべての値をチャネルに送信
2. `Same(t1, t2 *tree.Tree) bool` - 2 つの木が同じ値を含むか判定

## コード解説

### Walk 関数

```go
func Walk(t *tree.Tree, ch chan int) {
	var walk func(t *tree.Tree)
	walk = func(t *tree.Tree) {
		if t == nil {
			return
		}
		walk(t.Left)
		ch <- t.Value
		walk(t.Right)
	}
	walk(t)
	close(ch)
}
```

中間順（in-order）で木を走査し、値をチャネルに送信します。走査が完了したらチャネルをクローズします。

### Same 関数

```go
func Same(t1, t2 *tree.Tree) bool {
	ch1 := make(chan int)
	ch2 := make(chan int)
	go Walk(t1, ch1)
	go Walk(t2, ch2)

	for v1 := range ch1 {
		v2, ok := <-ch2
		if !ok || v1 != v2 {
			return false
		}
	}
	_, ok := <-ch2
	return !ok
}
```

2 つの木を並行して走査し、値を順番に比較します。

## ポイント

- `tree.New(k)` は、値 `k`, `2k`, `3k`, ..., `10k` を持つランダムな構造の木を生成
- 異なる構造でも、同じ値を持つ木は等価とみなす
- チャネルを使うことで、木の走査と比較を並行して行える
- 中間順走査により、値がソートされた順序で取得できる

## 参考

- [A Tour of Go - Exercise: Equivalent Binary Trees](https://go.dev/tour/concurrency/7)
- [A Tour of Go - Exercise: Equivalent Binary Trees (続き)](https://go.dev/tour/concurrency/8)

## 実行方法

```bash
go run 05_concurrency/06_exercise_equivalent_binary_trees.go
```

**注意**: このファイルを実行するには `golang.org/x/tour/tree` パッケージが必要です:

```bash
go get golang.org/x/tour/tree
```

---

## ナビゲーション

← 前: [Default Selection](05_default_selection.md) | 次: [sync.Mutex](07_sync_mutex.md) →

### 関連トピック
- [Goroutines](00_goroutines.md) - ゴルーチンの基本
- [Channels](01_channels.md) - チャネルの基本
- [Range and Close](03_range_and_close.md) - チャネルのクローズと range
