# Select

> **ソースコード**: [04_select.go](../05_concurrency/04_select.go)

## 概要

`select` 文は、ゴルーチンが複数の通信操作を待機することを可能にします。`select` は、いずれかの case が実行可能になるまでブロックし、実行可能な case を実行します。複数の case が同時に実行可能な場合は、ランダムに 1 つが選ばれます。

## コード解説

```go
func fibonacci(c, quit chan int) {
	x, y := 0, 1
	for {
		select {
		case c <- x:
			x, y = y, x+y
		case <-quit:
			fmt.Println("quit")
			return
		}
	}
}
```

`select` 文で 2 つのチャネル操作を待機:
- `c <- x` - チャネル `c` への送信が可能なら実行
- `<-quit` - チャネル `quit` から受信可能なら実行して終了

```go
go func() {
	for i := 0; i < 10; i++ {
		fmt.Println(<-c)
	}
	quit <- 0
}()
```

匿名関数のゴルーチンで 10 個の値を受信した後、`quit` チャネルに送信して終了を通知します。

## ポイント

- `select` は `switch` に似ているが、チャネル操作に特化している
- 各 `case` はチャネルの送信または受信操作
- いずれかの case が実行可能になるまでブロック
- 複数の case が実行可能な場合はランダムに選択
- `switch` と異なり、上から順に評価されるわけではない

## 参考

- [A Tour of Go - Select](https://go.dev/tour/concurrency/5)

## 実行方法

```bash
go run 05_concurrency/04_select.go
```

---

## ナビゲーション

← 前: [Range and Close](03_range_and_close.md) | 次: [Default Selection](05_default_selection.md) →

### 関連トピック
- [Channels](01_channels.md) - チャネルの基本
- [Default Selection](05_default_selection.md) - select の default case
