# Channels（チャネル）

> **ソースコード**: [01_channels.go](../05_concurrency/01_channels.go)

## 概要

チャネルは、ゴルーチン間でデータを送受信するための型付きパイプです。チャネル演算子 `<-` を使って値を送受信します。チャネルはデフォルトで、送受信の準備ができるまでブロックするため、明示的なロックや条件変数なしにゴルーチンを同期できます。

## コード解説

```go
func sum(s []int, c chan int) {
	sum := 0
	for _, v := range s {
		sum += v
	}
	c <- sum // send sum to c
}
```

`sum` 関数はスライスの要素を合計し、結果をチャネル `c` に送信します。

```go
c := make(chan int)
```

`make` 関数でチャネルを作成します。マップやスライスと同様に、使用前に作成が必要です。

```go
go sum(s[:len(s)/2], c)
go sum(s[len(s)/2:], c)
```

2 つのゴルーチンを起動し、スライスの前半と後半をそれぞれ計算させます。

```go
x, y := <-c, <-c // receive from c
```

チャネルから 2 つの値を受信します。どちらのゴルーチンが先に完了するかは不定です。

## ポイント

- `ch <- v` - 値 `v` をチャネル `ch` に送信
- `v := <-ch` - チャネル `ch` から値を受信し、`v` に代入
- データは矢印の方向に流れる
- 送信と受信は、相手側の準備ができるまでブロックする
- この性質により、明示的なロックなしに同期が可能

## 参考

- [A Tour of Go - Channels](https://go.dev/tour/concurrency/2)

## 実行方法

```bash
go run 05_concurrency/01_channels.go
```

---

## ナビゲーション

← 前: [Goroutines](00_goroutines.md) | 次: [Buffered Channels](02_buffered_channels.md) →

### 関連トピック
- [Goroutines](00_goroutines.md) - ゴルーチンの基本
- [Buffered Channels](02_buffered_channels.md) - バッファ付きチャネル
- [Range and Close](03_range_and_close.md) - チャネルのクローズと range
