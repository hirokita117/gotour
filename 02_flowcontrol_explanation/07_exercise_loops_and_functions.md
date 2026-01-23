# Exercise: Loops and Functions

> **ソースコード**: [07_exercise_loops_and_functions.go](../02_flowcontrol/07_exercise_loops_and_functions.go)

## 概要

`for` ループと関数を使って、ニュートン法による平方根の計算を実装する演習です。

## コード解説

ニュートン法は、初期値から始めて以下の式を繰り返し適用することで、平方根の近似値を求めます：

```
z = z - (z² - x) / (2z)
```

```go
func Sqrt(x float64) float64 {
    z := 1.0
    for i := 0; i < 10; i++ {
        z -= (z*z - x) / (2 * z)
        fmt.Println(z)
    }
    return z
}
```

- 初期値 `z = 1.0` から開始
- 10回の反復で収束させる
- 各ステップで `z` の値を出力して収束の様子を確認

## ニュートン法の仕組み

`x` の平方根を求めるには、`z² = x` となる `z` を見つけたい。これは `f(z) = z² - x = 0` の解を求めることと同じ。

ニュートン法では：
1. 適当な初期値 `z₀` から始める
2. `z_{n+1} = z_n - f(z_n) / f'(z_n)` で更新
3. `f(z) = z² - x` なので `f'(z) = 2z`
4. よって `z_{n+1} = z_n - (z_n² - x) / (2 * z_n)`

## ポイント

- 初期値の選び方で収束速度が変わる
- 10回の反復で十分な精度が得られる
- 実際の `math.Sqrt` と比較して精度を確認できる

## 参考

- [A Tour of Go - Exercise: Loops and Functions](https://go.dev/tour/flowcontrol/8)

## 実行方法

```bash
go run 02_flowcontrol/07_exercise_loops_and_functions.go
```

---

## ナビゲーション

← 前: [If and else](06_if_and_else.md) | 次: [Switch](08_switch.md) →

### 関連トピック
- [For](00_for.md) - 基本的な for ループ
- [Functions](../01_basics_explanation/04_functions.md) - 関数の定義
