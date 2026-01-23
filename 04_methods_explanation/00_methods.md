# Methods（メソッド）

> **ソースコード**: [00_methods.go](../04_methods/00_methods.go)

## 概要

Go にはクラスがありませんが、型にメソッドを定義できます。メソッドは特別な**レシーバ**引数を持つ関数です。

## コード解説

```go
type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}
```

- `func` キーワードと関数名の間にある `(v Vertex)` が**レシーバ**です
- `v` はレシーバの変数名、`Vertex` はレシーバの型です
- これにより `Vertex` 型の値に対して `Abs()` メソッドを呼び出せます

```go
v := Vertex{3, 4}
fmt.Println(v.Abs())  // v.Abs() のようにドット記法で呼び出す
```

## ポイント

- メソッドはレシーバを持つ関数である
- レシーバは `func` キーワードと関数名の間に書く
- Go にはクラスがないが、メソッドによってオブジェクト指向的なコードが書ける
- メソッドは `値.メソッド名()` の形式で呼び出す

## 参考

- [A Tour of Go - Methods](https://go.dev/tour/methods/1)

## 実行方法

```bash
go run 04_methods/00_methods.go
```

---

## ナビゲーション

次: [Methods are functions](01_methods_are_functions.md) →

### 関連トピック
- [Structs](../03_moretypes_explanation/01_structs.md) - 構造体の基本
- [Function values](../03_moretypes_explanation/23_function_values.md) - 関数も値である
