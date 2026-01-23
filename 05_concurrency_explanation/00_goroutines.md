# Goroutines（ゴルーチン）

> **ソースコード**: [00_goroutines.go](../05_concurrency/00_goroutines.go)

## 概要

ゴルーチン（goroutine）は、Go ランタイムによって管理される軽量なスレッドです。Go の並行処理の基本となる機能で、`go` キーワードを使って簡単に新しいゴルーチンを起動できます。

## コード解説

```go
func say(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}
```

`say` 関数は、渡された文字列を 100 ミリ秒間隔で 5 回出力します。

```go
func main() {
	go say("world")
	say("hello")
}
```

- `go say("world")` - 新しいゴルーチンで `say("world")` を実行
- `say("hello")` - メインゴルーチンで `say("hello")` を実行

`go f(x, y, z)` と書くと、新しいゴルーチンで `f(x, y, z)` が実行されます。`f`、`x`、`y`、`z` の評価は現在のゴルーチンで行われ、`f` の実行は新しいゴルーチンで行われます。

## ポイント

- ゴルーチンは同じアドレス空間で実行されるため、共有メモリへのアクセスは同期が必要
- メインゴルーチンが終了すると、他のゴルーチンも強制終了される
- ゴルーチンは OS スレッドよりも軽量で、数千〜数万のゴルーチンを同時に実行可能
- `go` キーワードの後には関数呼び出しを指定する

## 参考

- [A Tour of Go - Goroutines](https://go.dev/tour/concurrency/1)

## 実行方法

```bash
go run 05_concurrency/00_goroutines.go
```

実行するたびに出力順序が変わる可能性があります（並行実行のため）。

---

## ナビゲーション

次: [Channels](01_channels.md) →

### 関連トピック
- [Channels](01_channels.md) - ゴルーチン間の通信
- [Select](04_select.md) - 複数のチャネル操作の待機
