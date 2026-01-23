# Switch

> **ソースコード**: [08_switch.go](../02_flowcontrol/08_switch.go)

## 概要

Go の `switch` 文は、複数の条件分岐を簡潔に書くための構文です。C言語と異なり、自動的に `break` されます。

## コード解説

```go
switch os := runtime.GOOS; os {
case "darwin":
    fmt.Println("OS X.")
case "linux":
    fmt.Println("Linux.")
default:
    fmt.Printf("%s.\n", os)
}
```

- `switch` の前に短いステートメントを書ける（`if` と同様）
- `runtime.GOOS` で実行中の OS を取得
- マッチした `case` のみ実行され、自動的に終了

## ポイント

- 各 `case` の最後に `break` は不要（自動的に break される）
- 次の `case` も実行したい場合は `fallthrough` を使う
- `case` には複数の値をカンマ区切りで指定可能
- `default` はどの `case` にもマッチしない場合に実行

## 複数の値を持つ case

```go
switch day {
case "Saturday", "Sunday":
    fmt.Println("Weekend!")
case "Monday":
    fmt.Println("Monday...")
}
```

## 参考

- [A Tour of Go - Switch](https://go.dev/tour/flowcontrol/9)

## 実行方法

```bash
go run 02_flowcontrol/08_switch.go
```

---

## ナビゲーション

← 前: [Exercise: Loops and Functions](07_exercise_loops_and_functions.md) | 次: [Switch evaluation order](09_switch_evaluation_order.md) →

### 関連トピック
- [Switch evaluation order](09_switch_evaluation_order.md) - case の評価順序
- [Switch with no condition](10_switch_with_no_condition.md) - 条件なし switch
