# If with a short statement

> **ソースコード**: [05_if_with_short_statement.go](../02_flowcontrol/05_if_with_short_statement.go)

## 概要

Go の `if` 文では、条件式の前に短いステートメントを書くことができます。ここで宣言した変数は `if` のスコープ内でのみ有効です。

## コード解説

```go
if v := math.Pow(x, n); v < lim {
    return v
}
return lim
```

この構文では：
1. `v := math.Pow(x, n)` - 短いステートメント（変数宣言と初期化）
2. `;` - セミコロンで区切る
3. `v < lim` - 条件式

変数 `v` は `if` ブロック内でのみ使用可能です。

## ポイント

- 条件判定に使う値を一時変数として宣言できる
- 変数のスコープが `if` ブロックに限定され、名前空間を汚さない
- エラーハンドリングでよく使われるパターン

## 実用例

```go
if err := doSomething(); err != nil {
    return err
}
```

## 参考

- [A Tour of Go - If with a short statement](https://go.dev/tour/flowcontrol/6)

## 実行方法

```bash
go run 02_flowcontrol/05_if_with_short_statement.go
```

---

## ナビゲーション

← 前: [If](04_if.md) | 次: [If and else](06_if_and_else.md) →

### 関連トピック
- [If](04_if.md) - 基本的な if 文
- [If and else](06_if_and_else.md) - else 節の使い方
- [Short variable declarations](../01_basics_explanation/08_short_variable_declarations.md) - 短い変数宣言
