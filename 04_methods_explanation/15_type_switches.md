# Type switches（型switch）

> **ソースコード**: [15_type_switches.go](../04_methods/15_type_switches.go)

## 概要

型 switch は、複数の型アサーションを直列に行うための構文です。

## コード解説

```go
func do(i interface{}) {
	switch v := i.(type) {
	case int:
		fmt.Printf("Twice %v is %v\n", v, v*2)
	case string:
		fmt.Printf("%q is %v bytes long\n", v, len(v))
	default:
		fmt.Printf("I don't know about type %T!\n", v)
	}
}
```

- `i.(type)` は型 switch 専用の構文
- 各 case で `v` はその型の値として使える
- `case int:` では `v` は `int` 型
- `case string:` では `v` は `string` 型
- `default` では元の `interface{}` 型

## ポイント

- `.(type)` は switch 文の中でのみ使用可能
- 複数の型を一つの case でまとめることも可能: `case int, int64:`
- 型アサーションを複数書くより簡潔
- インターフェースの具象型に応じた処理を分岐できる

## 参考

- [A Tour of Go - Type switches](https://go.dev/tour/methods/16)

## 実行方法

```bash
go run 04_methods/15_type_switches.go
```

---

## ナビゲーション

← 前: [Type assertions](14_type_assertions.md) | 次: [Stringers](16_stringers.md) →

### 関連トピック
- [Type assertions](14_type_assertions.md) - 型アサーション
- [Switch](../02_flowcontrol_explanation/03_switch.md) - 通常の switch 文
