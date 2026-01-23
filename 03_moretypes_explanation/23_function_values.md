# Function values（関数値）

> **ソースコード**: [23_function_values.go](../03_moretypes/23_function_values.go)

## 概要

Go では関数も値です。関数は他の値と同じように、変数に代入したり、他の関数に渡したり、関数から返したりできます。

## コード解説

```go
hypot := func(x, y float64) float64 {
    return math.Sqrt(x*x + y*y)
}
```

無名関数（ラムダ関数）を定義し、変数 `hypot` に代入しています。この関数は三平方の定理を使って斜辺の長さを計算します。

```go
fmt.Println(hypot(5, 12))  // 13
```

変数を通じて関数を呼び出しています。

```go
func compute(fn func(float64, float64) float64) float64 {
    return fn(3, 4)
}
```

関数を引数として受け取る関数です。`fn` は「2つの `float64` を受け取り、`float64` を返す関数」という型です。

```go
fmt.Println(compute(hypot))     // 5
fmt.Println(compute(math.Pow))  // 81
```

`hypot` 関数と `math.Pow` 関数を `compute` に渡しています。

## ポイント

- 関数は「第一級オブジェクト」（first-class citizen）
- 関数を変数に代入できる
- 関数を引数として渡せる
- 関数を戻り値として返せる
- 関数の型は `func(引数の型) 戻り値の型`

## 参考

- [A Tour of Go - Function values](https://go.dev/tour/moretypes/24)

## 実行方法

```bash
go run 03_moretypes/23_function_values.go
```

---

## ナビゲーション

← 前: [Exercise: Maps](22_exercise_maps.md) | 次: [Function closures](24_function_closures.md) →

### 関連トピック
- [Function closures](24_function_closures.md) - クロージャ
- [Functions](../01_basics_explanation/04_functions.md) - 関数の基本
