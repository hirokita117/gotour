# Methods continued（メソッドの続き）

> **ソースコード**: [02_methods_continued.go](../04_methods/02_methods_continued.go)

## 概要

メソッドは構造体だけでなく、同じパッケージ内で定義された任意の型に対して宣言できます。

## コード解説

```go
type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}
```

- `MyFloat` は `float64` を基にした新しい型です
- この型に `Abs()` メソッドを定義しています
- 組み込み型（`float64` など）に直接メソッドを追加することはできませんが、型エイリアスを作成すればメソッドを追加できます

## ポイント

- 構造体以外の型にもメソッドを定義できる
- レシーバの型は同じパッケージ内で定義されている必要がある
- 他のパッケージの型（組み込み型を含む）に直接メソッドを追加することはできない
- 型エイリアス（`type MyFloat float64`）を使えば、組み込み型を拡張できる

## 参考

- [A Tour of Go - Methods continued](https://go.dev/tour/methods/3)

## 実行方法

```bash
go run 04_methods/02_methods_continued.go
```

---

## ナビゲーション

← 前: [Methods are functions](01_methods_are_functions.md) | 次: [Pointer receivers](03_pointer_receivers.md) →

### 関連トピック
- [Methods](00_methods.md) - メソッドの基本
- [Structs](../03_moretypes_explanation/01_structs.md) - 構造体の定義
