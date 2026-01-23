# Zero Values（ゼロ値）

> **ソースコード**: [10_zero_values.go](../01_basics/10_zero_values.go)

## 概要

Go では、初期化されていない変数には「ゼロ値」が自動的に設定されます。他の言語のような「未定義」や「ゴミ値」は存在しません。

## コード解説

```go
var i int
var f float64
var b bool
var s string
fmt.Printf("%v %v %v %q\n", i, f, b, s)
```

出力：
```
0 0 false ""
```

- `int` → `0`
- `float64` → `0`
- `bool` → `false`
- `string` → `""`（空文字）

`%q` は文字列をクォート付きで出力するフォーマット指定子です。

## 型別ゼロ値一覧

| 型 | ゼロ値 |
|---|---|
| 数値型（int, float 等） | `0` |
| bool | `false` |
| string | `""`（空文字列） |
| ポインタ | `nil` |
| スライス | `nil` |
| マップ | `nil` |
| チャネル | `nil` |
| 関数 | `nil` |
| インターフェース | `nil` |

## ポイント

- ゼロ値のおかげで「未初期化変数」によるバグを防げる
- Go では変数を宣言した時点で必ず有効な値を持つ
- 構造体のゼロ値は、各フィールドがゼロ値の構造体
- この設計により、多くの型が初期化なしでそのまま使える

## 参考

- [A Tour of Go - Zero values](https://go.dev/tour/basics/12)

## 実行方法

```bash
go run 01_basics/10_zero_values.go
```

---

## ナビゲーション

← 前: [Basic Types（基本型）](09_basic_types.md) | 次: [Type Conversions（型変換）](11_type_conversions.md) →

### 関連トピック
- [Basic Types（基本型）](09_basic_types.md) - Go の基本データ型
- [Variables（変数）](07_variables.md) - 変数宣言とゼロ値
