# The empty interface（空インターフェース）

> **ソースコード**: [13_empty_interface.go](../04_methods/13_empty_interface.go)

## 概要

空インターフェース `interface{}` はメソッドを一つも持たないインターフェースです。すべての型は空インターフェースを実装しています。

## コード解説

```go
func main() {
	var i interface{}
	describe(i)   // (<nil>, <nil>)

	i = 42
	describe(i)   // (42, int)

	i = "hello"
	describe(i)   // (hello, string)
}

func describe(i interface{}) {
	fmt.Printf("(%v, %T)\n", i, i)
}
```

- `interface{}` は任意の型の値を保持できる
- `int`、`string`、構造体など、どんな型でも代入可能
- `fmt.Println` などの関数は `interface{}` を引数に取ることで任意の値を受け取れる

## ポイント

- 空インターフェース `interface{}` はすべての型が満たす
- 任意の型を扱う必要がある場合に使用する
- Go 1.18 以降は `any` というエイリアスも使える（`type any = interface{}`）
- 型安全性が失われるため、使用は必要最小限に

## 参考

- [A Tour of Go - The empty interface](https://go.dev/tour/methods/14)

## 実行方法

```bash
go run 04_methods/13_empty_interface.go
```

---

## ナビゲーション

← 前: [Nil interface values](12_nil_interface_values.md) | 次: [Type assertions](14_type_assertions.md) →

### 関連トピック
- [Interfaces](08_interfaces.md) - インターフェースの基本
- [Interface values](10_interface_values.md) - インターフェース値
