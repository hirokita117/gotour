# Default Selection

> **ソースコード**: [05_default_selection.go](../05_concurrency/05_default_selection.go)

## 概要

`select` の `default` case は、他のどの case も準備ができていないときに実行されます。これにより、ブロックせずにチャネルの送受信を試みることができます。

## コード解説

```go
tick := time.Tick(100 * time.Millisecond)
boom := time.After(500 * time.Millisecond)
```

- `time.Tick` - 指定間隔で現在時刻を送信するチャネルを返す
- `time.After` - 指定時間後に現在時刻を 1 回送信するチャネルを返す

```go
for {
	select {
	case <-tick:
		fmt.Println("tick.")
	case <-boom:
		fmt.Println("BOOM!")
		return
	default:
		fmt.Println("    .")
		time.Sleep(50 * time.Millisecond)
	}
}
```

- `tick` チャネルから受信可能なら "tick." を出力
- `boom` チャネルから受信可能なら "BOOM!" を出力して終了
- どちらも受信できない場合は `default` が実行され、"." を出力

## ポイント

- `default` case はブロックを避けたいときに使用
- ポーリング的な処理に便利
- `default` がないと、いずれかの case が実行可能になるまでブロック

### ノンブロッキング送受信の例

```go
select {
case msg := <-messages:
	fmt.Println("received:", msg)
default:
	fmt.Println("no message received")
}
```

## 参考

- [A Tour of Go - Default Selection](https://go.dev/tour/concurrency/6)

## 実行方法

```bash
go run 05_concurrency/05_default_selection.go
```

---

## ナビゲーション

← 前: [Select](04_select.md) | 次: [Exercise: Equivalent Binary Trees](06_exercise_equivalent_binary_trees.md) →

### 関連トピック
- [Select](04_select.md) - select の基本
- [Goroutines](00_goroutines.md) - ゴルーチンの基本
