# Pointer receivers（ポインタレシーバ）

> **ソースコード**: [03_pointer_receivers.go](../04_methods/03_pointer_receivers.go)

## 概要

ポインタレシーバを使うと、メソッド内でレシーバが指す値を変更できます。

## コード解説

```go
func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}
```

- `(v *Vertex)` がポインタレシーバです
- ポインタレシーバを使うと、元の値を直接変更できます
- 値レシーバ `(v Vertex)` の場合、コピーに対して操作するため元の値は変わりません

```go
func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}
```

- こちらは値レシーバです
- 値を読み取るだけで変更しないので、値レシーバで問題ありません

## ポイント

- **ポインタレシーバ** `(v *Type)`: レシーバの値を変更できる
- **値レシーバ** `(v Type)`: レシーバのコピーに対して操作する
- レシーバの値を変更する必要がある場合はポインタレシーバを使う
- 大きな構造体の場合、コピーを避けるためにポインタレシーバを使うこともある

## 参考

- [A Tour of Go - Pointer receivers](https://go.dev/tour/methods/4)

## 実行方法

```bash
go run 04_methods/03_pointer_receivers.go
```

---

## ナビゲーション

← 前: [Methods continued](02_methods_continued.md) | 次: [Pointers and functions](04_pointers_and_functions.md) →

### 関連トピック
- [Pointers](../03_moretypes_explanation/00_pointers.md) - ポインタの基本
- [Pointers to structs](../03_moretypes_explanation/03_pointers_to_structs.md) - 構造体へのポインタ
