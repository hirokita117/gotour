# Pointers and functions（ポインタと関数）

> **ソースコード**: [04_pointers_and_functions.go](../04_methods/04_pointers_and_functions.go)

## 概要

前回のポインタレシーバを持つメソッドを、通常の関数として書き直してみます。

## コード解説

```go
func Scale(v *Vertex, f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	Scale(&v, 10)  // ポインタを渡す必要がある
	fmt.Println(Abs(v))
}
```

- 関数の場合、ポインタ引数には明示的にポインタを渡す必要があります（`&v`）
- メソッドの場合は `v.Scale(10)` のように書けました（自動変換される）

## ポイント

- 通常の関数では、引数の型と完全に一致する値を渡す必要がある
- ポインタ引数にはポインタを（`&v`）、値引数には値を渡す
- これがメソッドと関数の違いの一つ（次のトピックで詳しく説明）

## 参考

- [A Tour of Go - Pointers and functions](https://go.dev/tour/methods/5)

## 実行方法

```bash
go run 04_methods/04_pointers_and_functions.go
```

---

## ナビゲーション

← 前: [Pointer receivers](03_pointer_receivers.md) | 次: [Methods and pointer indirection](05_methods_and_pointer_indirection.md) →

### 関連トピック
- [Pointer receivers](03_pointer_receivers.md) - ポインタレシーバ
- [Pointers](../03_moretypes_explanation/00_pointers.md) - ポインタの基本
