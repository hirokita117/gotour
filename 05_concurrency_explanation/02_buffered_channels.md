# Buffered Channels（バッファ付きチャネル）

> **ソースコード**: [02_buffered_channels.go](../05_concurrency/02_buffered_channels.go)

## 概要

チャネルはバッファを持つことができます。`make` の第 2 引数にバッファサイズを指定すると、バッファ付きチャネルが作成されます。バッファが満杯のときに送信するとブロックし、バッファが空のときに受信するとブロックします。

## コード解説

```go
ch := make(chan int, 2)
```

バッファサイズ 2 の int 型チャネルを作成します。

```go
ch <- 1
ch <- 2
```

バッファに 2 つの値を送信します。バッファに空きがあるため、ブロックせずに送信できます。

```go
fmt.Println(<-ch)
fmt.Println(<-ch)
```

バッファから 2 つの値を受信して出力します。

## ポイント

- バッファなしチャネル: 送受信は常に同期される（相手を待つ）
- バッファ付きチャネル: バッファに空きがあれば送信側はブロックしない
- バッファが満杯のときに送信 → ブロック
- バッファが空のときに受信 → ブロック
- バッファを使いすぎるとデッドロックの原因になることがある

### デッドロックの例

```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
ch <- 3  // バッファが満杯なのでブロック → デッドロック
```

## 参考

- [A Tour of Go - Buffered Channels](https://go.dev/tour/concurrency/3)

## 実行方法

```bash
go run 05_concurrency/02_buffered_channels.go
```

---

## ナビゲーション

← 前: [Channels](01_channels.md) | 次: [Range and Close](03_range_and_close.md) →

### 関連トピック
- [Channels](01_channels.md) - チャネルの基本
- [Range and Close](03_range_and_close.md) - チャネルのクローズと range
