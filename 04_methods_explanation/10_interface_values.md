# Interface values（インターフェース値）

> **ソースコード**: [10_interface_values.go](../04_methods/10_interface_values.go)

## 概要

インターフェース値は、内部的に `(値, 具象型)` のタプルとして保持されています。

## コード解説

```go
func describe(i I) {
	fmt.Printf("(%v, %T)\n", i, i)
}

func main() {
	var i I

	i = &T{"Hello"}
	describe(i)  // (&{Hello}, *main.T)
	i.M()

	i = F(math.Pi)
	describe(i)  // (3.141592653589793, main.F)
	i.M()
}
```

- インターフェース値は `(具体的な値, その型)` を保持している
- `i = &T{"Hello"}` では `i` は `(&T{"Hello"}, *main.T)` を保持
- `i = F(math.Pi)` では `i` は `(3.14..., main.F)` を保持
- メソッド呼び出し時に、保持している具象型のメソッドが呼ばれる

## ポイント

- インターフェース値 = (具体的な値, 具象型) のペア
- メソッド呼び出しは、具象型のメソッドが実行される
- `%T` フォーマットで具象型を確認できる
- 同じインターフェース変数に異なる型の値を代入できる

## 参考

- [A Tour of Go - Interface values](https://go.dev/tour/methods/11)

## 実行方法

```bash
go run 04_methods/10_interface_values.go
```

---

## ナビゲーション

← 前: [Interfaces are implemented implicitly](09_interfaces_implicit.md) | 次: [Interface values with nil](11_interface_values_nil.md) →

### 関連トピック
- [Interfaces](08_interfaces.md) - インターフェースの基本
- [Interfaces are implemented implicitly](09_interfaces_implicit.md) - 暗黙的実装
