# Methods are functions（メソッドは関数である）

> **ソースコード**: [01_methods_are_functions.go](../04_methods/01_methods_are_functions.go)

## 概要

メソッドは単なる関数であり、レシーバを引数に持つ通常の関数として書くこともできます。

## コード解説

```go
func Abs(v Vertex) float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}
```

前回のメソッド版：
```go
func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}
```

この2つは機能的に同じです。メソッドは、レシーバを第一引数として受け取る関数の糖衣構文（シンタックスシュガー）と考えることができます。

## ポイント

- メソッドは特別なレシーバ引数を持つ関数に過ぎない
- `v.Abs()` と `Abs(v)` は機能的に等価
- メソッドを使うとより直感的なAPIが作れる（`v.Abs()` vs `Abs(v)`）

## 参考

- [A Tour of Go - Methods are functions](https://go.dev/tour/methods/2)

## 実行方法

```bash
go run 04_methods/01_methods_are_functions.go
```

---

## ナビゲーション

← 前: [Methods](00_methods.md) | 次: [Methods continued](02_methods_continued.md) →

### 関連トピック
- [Methods](00_methods.md) - メソッドの基本形
- [Function values](../03_moretypes_explanation/23_function_values.md) - 関数も値である
