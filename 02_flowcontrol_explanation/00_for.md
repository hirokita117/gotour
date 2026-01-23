# For ループ

> **ソースコード**: [00_for.go](../02_flowcontrol/00_for.go)

## 概要

Go には繰り返し処理のための構文が `for` ループしかありません。`while` や `do-while` は存在せず、すべて `for` で表現します。

## コード解説

```go
for i := 0; i < 10; i++ {
    sum += i
}
```

`for` ループは3つの部分で構成されます：

1. **初期化ステートメント** (`i := 0`): ループ開始前に1回だけ実行
2. **条件式** (`i < 10`): 各イテレーション前に評価。`false` になるとループ終了
3. **後処理ステートメント** (`i++`): 各イテレーション後に実行

## ポイント

- C言語や Java と異なり、`for` の3つの部分を囲む括弧 `()` は不要
- 波括弧 `{}` は必須
- 初期化ステートメントで宣言した変数（`i`）はループ内でのみ有効

## 参考

- [A Tour of Go - For](https://go.dev/tour/flowcontrol/1)

## 実行方法

```bash
go run 02_flowcontrol/00_for.go
```

---

## ナビゲーション

次: [For continued](01_for_continued.md) →

### 関連トピック
- [For continued](01_for_continued.md) - 初期化と後処理を省略した for
- [For is Go's "while"](02_for_is_gos_while.md) - while 相当の書き方
