# Interfaces（インターフェース）

> **ソースコード**: [08_interfaces.go](../04_methods/08_interfaces.go)

## 概要

インターフェース型は、メソッドのシグネチャの集まりとして定義されます。インターフェース型の変数は、それらのメソッドを実装する任意の値を保持できます。

## コード解説

```go
type Abser interface {
	Abs() float64
}
```

- `Abser` インターフェースは `Abs() float64` メソッドを持つ型を表します

```go
var a Abser
f := MyFloat(-math.Sqrt2)
v := Vertex{3, 4}

a = f  // MyFloat は Abser を実装している
a = &v // *Vertex は Abser を実装している
```

- `MyFloat` と `*Vertex` はどちらも `Abs()` メソッドを持っているので、`Abser` 型の変数に代入できます
- `Vertex`（ポインタなし）は `Abs()` を持っていないので代入できません（`*Vertex` が持っている）

## ポイント

- インターフェースはメソッドのシグネチャの集まり
- インターフェースを実装するとは、そのメソッドをすべて持っていること
- 異なる型でも同じインターフェースを実装できる（ポリモーフィズム）
- ポインタレシーバのメソッドは、ポインタ型のみがそのインターフェースを実装する

## 参考

- [A Tour of Go - Interfaces](https://go.dev/tour/methods/9)

## 実行方法

```bash
go run 04_methods/08_interfaces.go
```

---

## ナビゲーション

← 前: [Choosing a value or pointer receiver](07_choosing_receiver.md) | 次: [Interfaces are implemented implicitly](09_interfaces_implicit.md) →

### 関連トピック
- [Methods](00_methods.md) - メソッドの基本
- [Pointer receivers](03_pointer_receivers.md) - ポインタレシーバ
