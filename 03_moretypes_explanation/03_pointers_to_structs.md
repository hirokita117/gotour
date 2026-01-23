# Pointers to structs（構造体へのポインタ）

> **ソースコード**: [03_pointers_to_structs.go](../03_moretypes/03_pointers_to_structs.go)

## 概要

構造体へのポインタを通じてフィールドにアクセスできます。Go では明示的なデリファレンスなしで簡潔に記述できます。

## コード解説

```go
p := &v
```

`&v` で構造体 `v` へのポインタを取得し、`p` に代入しています。`p` の型は `*Vertex` です。

```go
p.X = 1e9
```

ポインタ `p` を通じて `X` フィールドにアクセスしています。

本来であれば `(*p).X` と書く必要がありますが、Go では `p.X` と簡潔に書くことができます。

## ポイント

- 構造体へのポインタは `*StructType` 型
- `(*p).X` の代わりに `p.X` と書ける（Go の便利な機能）
- ポインタを使うと、関数に構造体を渡す際にコピーを避けられる
- 大きな構造体を扱う場合はポインタを使うことでパフォーマンスが向上する

## 参考

- [A Tour of Go - Pointers to structs](https://go.dev/tour/moretypes/4)

## 実行方法

```bash
go run 03_moretypes/03_pointers_to_structs.go
```

---

## ナビゲーション

← 前: [Struct Fields](02_struct_fields.md) | 次: [Struct Literals](04_struct_literals.md) →

### 関連トピック
- [Pointers](00_pointers.md) - ポインタの基本
- [Struct Fields](02_struct_fields.md) - フィールドへの直接アクセス
