# If and else

> **ソースコード**: [06_if_and_else.go](../02_flowcontrol/06_if_and_else.go)

## 概要

`if` の短いステートメントで宣言した変数は、`else` ブロック内でも使用できます。

## コード解説

```go
if v := math.Pow(x, n); v < lim {
    return v
} else {
    fmt.Printf("%g >= %g\n", v, lim)
}
return lim
```

- 変数 `v` は `if` ブロックと `else` ブロックの両方で有効
- `if` の外（`return lim` の行）では `v` は使えない

## ポイント

- 短いステートメントで宣言した変数のスコープは `if-else` 全体
- `else` は `if` の閉じ波括弧と同じ行に書く（Go のスタイル）
- `if-else` の外からは変数にアクセスできない

## スコープの図解

```go
if v := expr; condition {
    // v が使える
} else {
    // v が使える
}
// v は使えない
```

## 参考

- [A Tour of Go - If and else](https://go.dev/tour/flowcontrol/7)

## 実行方法

```bash
go run 02_flowcontrol/06_if_and_else.go
```

---

## ナビゲーション

← 前: [If with a short statement](05_if_with_short_statement.md) | 次: [Exercise: Loops and Functions](07_exercise_loops_and_functions.md) →

### 関連トピック
- [If](04_if.md) - 基本的な if 文
- [If with a short statement](05_if_with_short_statement.md) - if 文での短い変数宣言
