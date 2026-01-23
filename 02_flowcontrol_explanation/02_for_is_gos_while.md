# For is Go's "while"

> **ソースコード**: [02_for_is_gos_while.go](../02_flowcontrol/02_for_is_gos_while.go)

## 概要

Go には `while` キーワードがありません。代わりに、条件式だけを持つ `for` が `while` の役割を果たします。

## コード解説

```go
for sum < 1000 {
    sum += sum
}
```

C言語や Java での以下のコードと同等です：

```c
while (sum < 1000) {
    sum += sum;
}
```

## ポイント

- Go では `while` を使わず `for` で表現する
- セミコロンなしで条件式だけを書けば、`while` と同じ動作
- シンプルで覚えやすい：繰り返しは常に `for`

## 参考

- [A Tour of Go - For is Go's "while"](https://go.dev/tour/flowcontrol/3)

## 実行方法

```bash
go run 02_flowcontrol/02_for_is_gos_while.go
```

---

## ナビゲーション

← 前: [For continued](01_for_continued.md) | 次: [Forever](03_forever.md) →

### 関連トピック
- [For continued](01_for_continued.md) - 初期化と後処理を省略した for
- [Forever](03_forever.md) - 無限ループ
