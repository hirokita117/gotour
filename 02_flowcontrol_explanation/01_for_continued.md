# For continued（初期化と後処理の省略）

> **ソースコード**: [01_for_continued.go](../02_flowcontrol/01_for_continued.go)

## 概要

Go の `for` ループでは、初期化ステートメントと後処理ステートメントを省略できます。

## コード解説

```go
sum := 1
for sum < 1000 {
    sum += sum
}
```

この例では：
- 初期化ステートメント: 省略（`sum` はループ外で宣言）
- 条件式: `sum < 1000`
- 後処理ステートメント: 省略（ループ内で `sum` を更新）

セミコロン `;` も省略できます。

## ポイント

- 初期化と後処理を省略すると、他言語の `while` ループと同じ動作になる
- 条件式だけを書く場合、セミコロンは不要
- この形式は、ループ変数がループ外で必要な場合によく使われる

## 参考

- [A Tour of Go - For continued](https://go.dev/tour/flowcontrol/2)

## 実行方法

```bash
go run 02_flowcontrol/01_for_continued.go
```

---

## ナビゲーション

← 前: [For](00_for.md) | 次: [For is Go's "while"](02_for_is_gos_while.md) →

### 関連トピック
- [For](00_for.md) - 基本的な for ループ
- [For is Go's "while"](02_for_is_gos_while.md) - while 相当の書き方
- [Forever](03_forever.md) - 無限ループ
