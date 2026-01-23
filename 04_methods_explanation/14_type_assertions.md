# Type assertions（型アサーション）

> **ソースコード**: [14_type_assertions.go](../04_methods/14_type_assertions.go)

## 概要

型アサーションは、インターフェース値の具象型にアクセスする方法です。

## コード解説

```go
var i interface{} = "hello"

s := i.(string)      // 型アサーション
fmt.Println(s)       // "hello"

s, ok := i.(string)  // 2つの値を受け取る形式
fmt.Println(s, ok)   // "hello", true

f, ok := i.(float64) // 型が違う場合
fmt.Println(f, ok)   // 0, false

// f = i.(float64)   // ok なしでアサーション失敗するとパニック
```

## 2つの形式

1. **単一値**: `t := i.(T)`
   - 成功: `t` に値が入る
   - 失敗: パニック

2. **2値**: `t, ok := i.(T)`
   - 成功: `t` に値、`ok` は true
   - 失敗: `t` はゼロ値、`ok` は false（パニックしない）

## ポイント

- 型アサーションはインターフェース値から具象型を取り出す
- `ok` を使うことでパニックを避けられる
- 失敗時は型のゼロ値が返される
- 実行時の型チェックに使用する

## 参考

- [A Tour of Go - Type assertions](https://go.dev/tour/methods/15)

## 実行方法

```bash
go run 04_methods/14_type_assertions.go
```

---

## ナビゲーション

← 前: [The empty interface](13_empty_interface.md) | 次: [Type switches](15_type_switches.md) →

### 関連トピック
- [The empty interface](13_empty_interface.md) - 空インターフェース
- [Interface values](10_interface_values.md) - インターフェース値
