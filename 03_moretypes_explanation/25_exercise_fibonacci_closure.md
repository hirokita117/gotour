# Exercise: Fibonacci closure（演習: フィボナッチクロージャ）

> **ソースコード**: [25_exercise_fibonacci_closure.go](../03_moretypes/25_exercise_fibonacci_closure.go)

## 概要

クロージャを使って、連続するフィボナッチ数を返す関数を実装する演習です。

## コード解説

```go
func fibonacci() func() int {
    a, b := 0, 1
    return func() int {
        result := a
        a, b = b, a+b
        return result
    }
}
```

1. `a` と `b` はフィボナッチ数列の連続する2つの数を保持
2. 返される関数は呼び出されるたびに：
   - 現在の `a` を結果として保存
   - `a` と `b` を次の値に更新
   - 結果を返す

## フィボナッチ数列

```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

各数は前の2つの数の和です。

## ポイント

- クロージャで状態（`a` と `b`）を保持
- Go の多重代入 `a, b = b, a+b` を活用
- 多重代入は同時に評価されるため、一時変数なしでスワップ可能
- ジェネレータパターンの実装例

## 多重代入の動作

```go
a, b = b, a+b
```

これは以下と同等です：

```go
newA := b
newB := a + b
a = newA
b = newB
```

右辺がすべて評価されてから左辺に代入されるため、一時変数なしで値を交換できます。

## 参考

- [A Tour of Go - Exercise: Fibonacci closure](https://go.dev/tour/moretypes/26)

## 実行方法

```bash
go run 03_moretypes/25_exercise_fibonacci_closure.go
```

---

## ナビゲーション

← 前: [Function closures](24_function_closures.md)

### 関連トピック
- [Function closures](24_function_closures.md) - クロージャの基本
- [Function values](23_function_values.md) - 関数値
- [Exercise: Loops and Functions](../02_flowcontrol_explanation/07_exercise_loops_and_functions.md) - 別の演習
