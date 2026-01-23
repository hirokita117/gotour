# Interface values with nil underlying values（nilの具象値を持つインターフェース値）

> **ソースコード**: [11_interface_values_nil.go](../04_methods/11_interface_values_nil.go)

## 概要

インターフェースの具象値が nil でも、インターフェース自体は nil ではありません。メソッド内で nil を適切に処理する必要があります。

## コード解説

```go
func (t *T) M() {
	if t == nil {
		fmt.Println("<nil>")
		return
	}
	fmt.Println(t.S)
}

func main() {
	var i I

	var t *T   // t は nil
	i = t      // i は (nil, *T) を保持
	describe(i) // (<nil>, *main.T)
	i.M()      // メソッドは呼べる（nil チェックで対応）
}
```

- `var t *T` で `t` は nil ポインタ
- `i = t` で `i` は `(nil, *main.T)` を保持
- `i` 自体は nil ではない（型情報を持っている）
- メソッド内で nil チェックを行い、適切に処理している

## ポイント

- 具象値が nil でも、インターフェース値自体は nil ではない
- `(nil, *T)` と `nil` は異なる
- nil レシーバでメソッドを呼ぶことは Go では正常な動作
- メソッド内で nil チェックを行うことで、graceful に処理できる

## 参考

- [A Tour of Go - Interface values with nil underlying values](https://go.dev/tour/methods/12)

## 実行方法

```bash
go run 04_methods/11_interface_values_nil.go
```

---

## ナビゲーション

← 前: [Interface values](10_interface_values.md) | 次: [Nil interface values](12_nil_interface_values.md) →

### 関連トピック
- [Interface values](10_interface_values.md) - インターフェース値の構造
- [Nil slices](../03_moretypes_explanation/11_nil_slices.md) - nil スライス
