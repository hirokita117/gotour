# Switch evaluation order

> **ソースコード**: [09_switch_evaluation_order.go](../02_flowcontrol/09_switch_evaluation_order.go)

## 概要

`switch` 文の `case` は上から下へ順番に評価され、最初にマッチしたものだけが実行されます。

## コード解説

```go
today := time.Now().Weekday()
switch time.Saturday {
case today + 0:
    fmt.Println("Today.")
case today + 1:
    fmt.Println("Tomorrow.")
case today + 2:
    fmt.Println("In two days.")
default:
    fmt.Println("Too far away.")
}
```

- `time.Saturday` が `switch` の対象
- 各 `case` で `today + n` を評価し、土曜日との差を判定
- マッチした最初の `case` で実行が止まる

## ポイント

- `case` は上から順に評価される
- 最初にマッチした `case` のみ実行
- マッチしたら、それ以降の `case` は評価されない（短絡評価）
- `case` に関数呼び出しを書くと、評価時に実行される

## 評価順序の重要性

```go
switch x {
case expensive1():  // まず評価
case expensive2():  // expensive1 がマッチしなければ評価
case expensive3():  // expensive2 がマッチしなければ評価
}
```

パフォーマンス上、よくマッチする `case` を上に配置するのが有効です。

## 参考

- [A Tour of Go - Switch evaluation order](https://go.dev/tour/flowcontrol/10)

## 実行方法

```bash
go run 02_flowcontrol/09_switch_evaluation_order.go
```

---

## ナビゲーション

← 前: [Switch](08_switch.md) | 次: [Switch with no condition](10_switch_with_no_condition.md) →

### 関連トピック
- [Switch](08_switch.md) - 基本的な switch
- [Switch with no condition](10_switch_with_no_condition.md) - 条件なし switch
