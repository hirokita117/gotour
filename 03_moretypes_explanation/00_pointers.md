# Pointers（ポインタ）

> **ソースコード**: [00_pointers.go](../03_moretypes/00_pointers.go)

## 概要

Go にはポインタがあります。ポインタは値のメモリアドレスを保持します。

## コード解説

```go
p := &i
```

`&` 演算子は、そのオペランドへのポインタを生成します。これは「i のアドレスを取得する」という意味です。

```go
fmt.Println(*p)
```

`*` 演算子は、ポインタが指す先の変数を示します。これは「デリファレンス」または「間接参照」と呼ばれます。

```go
*p = 21
```

ポインタを通じて値を変更できます。この操作で `i` の値が 21 に変わります。

## ポイント

- `*T` 型は `T` 型の値へのポインタを表す
- ゼロ値は `nil`
- `&` 演算子でアドレスを取得
- `*` 演算子でポインタが指す値にアクセス（デリファレンス）
- C言語と異なり、Go にはポインタ演算がない

## 参考

- [A Tour of Go - Pointers](https://go.dev/tour/moretypes/1)

## 実行方法

```bash
go run 03_moretypes/00_pointers.go
```

---

## ナビゲーション

次: [Structs](01_structs.md) →

### 関連トピック
- [Pointers to structs](03_pointers_to_structs.md) - 構造体へのポインタ
- [Slices are like references](07_slices_are_like_references.md) - 参照の概念
