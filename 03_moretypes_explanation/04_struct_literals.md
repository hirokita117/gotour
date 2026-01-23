# Struct Literals（構造体リテラル）

> **ソースコード**: [04_struct_literals.go](../03_moretypes/04_struct_literals.go)

## 概要

構造体リテラルは、フィールドの値を列挙することで新しい構造体の値を割り当てます。

## コード解説

```go
v1 = Vertex{1, 2}
```

フィールドの順序通りに値を指定する方法。`X=1`, `Y=2` となります。

```go
v2 = Vertex{X: 1}
```

`Name: value` 構文を使って特定のフィールドだけを指定する方法。指定しなかったフィールド（この場合 `Y`）はゼロ値になります。

```go
v3 = Vertex{}
```

すべてのフィールドがゼロ値になります（`X=0`, `Y=0`）。

```go
p = &Vertex{1, 2}
```

`&` プレフィックスを付けると、新しく割り当てられた構造体へのポインタを返します。

## ポイント

- フィールドの順序で値を指定: `Vertex{1, 2}`
- フィールド名を指定: `Vertex{X: 1, Y: 2}`
- 一部のフィールドだけ指定可能（他はゼロ値）
- `&Vertex{}` でポインタを直接取得できる
- フィールド名を指定する方法は順序に依存しないため、保守性が高い

## 参考

- [A Tour of Go - Struct Literals](https://go.dev/tour/moretypes/5)

## 実行方法

```bash
go run 03_moretypes/04_struct_literals.go
```

---

## ナビゲーション

← 前: [Pointers to structs](03_pointers_to_structs.md) | 次: [Arrays](05_arrays.md) →

### 関連トピック
- [Structs](01_structs.md) - 構造体の基本
- [Slice literals](08_slice_literals.md) - スライスリテラルとの比較
