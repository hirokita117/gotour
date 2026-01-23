# Range and Close（チャネルのクローズと range）

> **ソースコード**: [03_range_and_close.go](../05_concurrency/03_range_and_close.go)

## 概要

送信側はチャネルをクローズして、これ以上値を送信しないことを示せます。受信側は、チャネルがクローズされたかどうかを確認できます。また、`for range` を使ってチャネルから値を繰り返し受信できます。

## コード解説

```go
func fibonacci(n int, c chan int) {
	x, y := 0, 1
	for i := 0; i < n; i++ {
		c <- x
		x, y = y, x+y
	}
	close(c)
}
```

フィボナッチ数列を `n` 個生成し、チャネルに送信します。すべての値を送信したら `close(c)` でチャネルをクローズします。

```go
c := make(chan int, 10)
go fibonacci(cap(c), c)
```

バッファサイズ 10 のチャネルを作成し、`cap(c)` で容量を取得してゴルーチンに渡します。

```go
for i := range c {
	fmt.Println(i)
}
```

`for range` はチャネルがクローズされるまで値を受信し続けます。

## ポイント

- `close(c)` - チャネルをクローズ（送信側のみが行う）
- `v, ok := <-ch` - `ok` が `false` の場合、チャネルはクローズされている
- `for i := range c` - チャネルがクローズされるまでループ
- クローズされたチャネルに送信するとパニックが発生する
- チャネルはファイルと異なり、通常はクローズする必要はない
- クローズが必要なのは、受信側に終了を伝える必要がある場合（`range` ループなど）

## 参考

- [A Tour of Go - Range and Close](https://go.dev/tour/concurrency/4)

## 実行方法

```bash
go run 05_concurrency/03_range_and_close.go
```

---

## ナビゲーション

← 前: [Buffered Channels](02_buffered_channels.md) | 次: [Select](04_select.md) →

### 関連トピック
- [Buffered Channels](02_buffered_channels.md) - バッファ付きチャネル
- [Select](04_select.md) - 複数のチャネル操作の待機
