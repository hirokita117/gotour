# Function closures（クロージャ）

> **ソースコード**: [24_function_closures.go](../03_moretypes/24_function_closures.go)

## 概要

Go の関数はクロージャになることができます。クロージャは、関数の外側の変数を参照する関数です。その関数は、参照している変数にアクセスし、変更することができます。

## コード解説

```go
func adder() func(int) int {
    sum := 0
    return func(x int) int {
        sum += x
        return sum
    }
}
```

`adder` 関数は「関数を返す関数」です。返される関数は外側のスコープにある `sum` 変数を参照しています。

- `adder()` が呼ばれるたびに新しい `sum` 変数が作られる
- 返される関数は、その `sum` への参照を保持し続ける
- これがクロージャ

```go
pos, neg := adder(), adder()
```

2つの独立したクロージャを作成。それぞれが自分の `sum` を持ちます。

```go
for i := 0; i < 10; i++ {
    fmt.Println(pos(i), neg(-2*i))
}
```

`pos` と `neg` は独立して動作し、それぞれの `sum` を累積していきます。

## 出力例

```
0 0
1 -2
3 -6
6 -12
...
```

## ポイント

- クロージャは外部の変数を「キャプチャ」する
- キャプチャした変数は参照として保持される（コピーではない）
- 各クロージャは独立した環境を持つ
- 状態を保持する関数を作成するのに便利

## 参考

- [A Tour of Go - Function closures](https://go.dev/tour/moretypes/25)

## 実行方法

```bash
go run 03_moretypes/24_function_closures.go
```

---

## ナビゲーション

← 前: [Function values](23_function_values.md) | 次: [Exercise: Fibonacci closure](25_exercise_fibonacci_closure.md) →

### 関連トピック
- [Function values](23_function_values.md) - 関数値
- [Exercise: Fibonacci closure](25_exercise_fibonacci_closure.md) - クロージャの演習
