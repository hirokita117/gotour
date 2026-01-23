# Methods and pointer indirection（メソッドとポインタ間接参照）

> **ソースコード**: [05_methods_and_pointer_indirection.go](../04_methods/05_methods_and_pointer_indirection.go)

## 概要

ポインタレシーバを持つメソッドは、値でもポインタでも呼び出せます。Go が自動的に変換してくれます。

## コード解説

```go
var v Vertex
v.Scale(2)    // OK: Go が自動的に (&v).Scale(2) として解釈
ScaleFunc(&v, 10)  // 関数の場合は &v が必要

p := &Vertex{4, 3}
p.Scale(3)    // OK
ScaleFunc(p, 8)   // OK: p は既にポインタ
```

- ポインタレシーバのメソッド `v.Scale(2)` は、`v` が値でも自動的に `(&v).Scale(2)` として解釈される
- 一方、関数 `ScaleFunc` はポインタを明示的に渡す必要がある

## ポイント

- ポインタレシーバのメソッドは値からでも呼び出せる（`v.Scale()`）
- Go が自動的に `(&v).Scale()` に変換してくれる
- 関数の場合はこの自動変換が行われないため、明示的にポインタを渡す必要がある
- これがメソッドの便利な点の一つ

## 参考

- [A Tour of Go - Methods and pointer indirection](https://go.dev/tour/methods/6)

## 実行方法

```bash
go run 04_methods/05_methods_and_pointer_indirection.go
```

---

## ナビゲーション

← 前: [Pointers and functions](04_pointers_and_functions.md) | 次: [Methods and pointer indirection (2)](06_methods_and_pointer_indirection2.md) →

### 関連トピック
- [Pointer receivers](03_pointer_receivers.md) - ポインタレシーバ
- [Pointers and functions](04_pointers_and_functions.md) - ポインタと関数
