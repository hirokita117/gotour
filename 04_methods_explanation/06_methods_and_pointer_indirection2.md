# Methods and pointer indirection (2)（メソッドとポインタ間接参照 その2）

> **ソースコード**: [06_methods_and_pointer_indirection2.go](../04_methods/06_methods_and_pointer_indirection2.go)

## 概要

値レシーバを持つメソッドは、ポインタからでも値からでも呼び出せます。

## コード解説

```go
var v Vertex
fmt.Println(v.Abs())     // OK: 値から呼び出し
fmt.Println(AbsFunc(v))  // OK

p := &Vertex{4, 3}
fmt.Println(p.Abs())     // OK: Go が自動的に (*p).Abs() として解釈
fmt.Println(AbsFunc(*p)) // 関数の場合は *p で間接参照が必要
```

- 値レシーバのメソッド `p.Abs()` は、`p` がポインタでも自動的に `(*p).Abs()` として解釈される
- 関数の場合は明示的に `*p` で値を取り出す必要がある

## ポイント

- 値レシーバのメソッドはポインタからでも呼び出せる（`p.Abs()`）
- Go が自動的に `(*p).Abs()` に変換してくれる
- 前回のポインタレシーバと合わせると：
  - ポインタレシーバ: 値からでもポインタからでも呼べる
  - 値レシーバ: 値からでもポインタからでも呼べる
- メソッドはどちらのレシーバでも柔軟に呼び出せる

## 参考

- [A Tour of Go - Methods and pointer indirection (2)](https://go.dev/tour/methods/7)

## 実行方法

```bash
go run 04_methods/06_methods_and_pointer_indirection2.go
```

---

## ナビゲーション

← 前: [Methods and pointer indirection](05_methods_and_pointer_indirection.md) | 次: [Choosing a value or pointer receiver](07_choosing_receiver.md) →

### 関連トピック
- [Methods and pointer indirection](05_methods_and_pointer_indirection.md) - ポインタレシーバの間接参照
- [Pointer receivers](03_pointer_receivers.md) - ポインタレシーバ
