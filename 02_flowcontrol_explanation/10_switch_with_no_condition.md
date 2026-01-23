# Switch with no condition

> **ソースコード**: [10_switch_with_no_condition.go](../02_flowcontrol/10_switch_with_no_condition.go)

## 概要

`switch` の条件を省略すると、`switch true` と同じ意味になります。これは長い `if-else-if` チェーンをクリーンに書く方法です。

## コード解説

```go
t := time.Now()
switch {
case t.Hour() < 12:
    fmt.Println("Good morning!")
case t.Hour() < 17:
    fmt.Println("Good afternoon.")
default:
    fmt.Println("Good evening.")
}
```

- `switch` の後に条件がない = `switch true`
- 各 `case` は `bool` 式を評価
- 最初に `true` になった `case` が実行される

## if-else との比較

条件なし `switch` は、以下の `if-else` チェーンと等価です：

```go
if t.Hour() < 12 {
    fmt.Println("Good morning!")
} else if t.Hour() < 17 {
    fmt.Println("Good afternoon.")
} else {
    fmt.Println("Good evening.")
}
```

## ポイント

- 複数の条件分岐を見やすく整理できる
- 各 `case` が独立した条件式を持てる
- `if-else-if` の代替として推奨される書き方

## 参考

- [A Tour of Go - Switch with no condition](https://go.dev/tour/flowcontrol/11)

## 実行方法

```bash
go run 02_flowcontrol/10_switch_with_no_condition.go
```

---

## ナビゲーション

← 前: [Switch evaluation order](09_switch_evaluation_order.md) | 次: [Defer](11_defer.md) →

### 関連トピック
- [Switch](08_switch.md) - 基本的な switch
- [If](04_if.md) - 基本的な if 文
