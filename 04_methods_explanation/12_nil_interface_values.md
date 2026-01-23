# Nil interface values（nilインターフェース値）

> **ソースコード**: [12_nil_interface_values.go](../04_methods/12_nil_interface_values.go)

## 概要

nil インターフェース値は、値も具象型も保持していません。nil インターフェースのメソッドを呼ぶとランタイムエラーになります。

## コード解説

```go
func main() {
	var i I
	describe(i) // (<nil>, <nil>)
	// i.M()    // panic: runtime error
}
```

- `var i I` で `i` は nil インターフェース
- 値も型も持っていない状態
- `describe(i)` は `(<nil>, <nil>)` を出力
- `i.M()` を呼ぶとパニックが発生（どの具象型のメソッドを呼べばいいかわからない）

## 前回との違い

| 状態 | インターフェース値 | メソッド呼び出し |
|------|-------------------|-----------------|
| `i = (*T)(nil)` | `(nil, *T)` | 呼べる（nil チェックで対応）|
| `var i I` | `(<nil>, <nil>)` | パニック |

## ポイント

- nil インターフェース = 値も型も持っていない
- nil インターフェースでメソッドを呼ぶとパニックになる
- `(nil, *T)` と `(<nil>, <nil>)` は異なる
- インターフェース値を使う前に nil チェックが推奨される

## 参考

- [A Tour of Go - Nil interface values](https://go.dev/tour/methods/13)

## 実行方法

```bash
go run 04_methods/12_nil_interface_values.go
```

---

## ナビゲーション

← 前: [Interface values with nil](11_interface_values_nil.md) | 次: [The empty interface](13_empty_interface.md) →

### 関連トピック
- [Interface values with nil](11_interface_values_nil.md) - nil 具象値を持つインターフェース
- [Interface values](10_interface_values.md) - インターフェース値の構造
