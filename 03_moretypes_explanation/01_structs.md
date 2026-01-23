# Structs（構造体）

> **ソースコード**: [01_structs.go](../03_moretypes/01_structs.go)

## 概要

`struct`（構造体）はフィールドの集まりです。複数の値をグループ化して1つの型として扱うことができます。

## コード解説

```go
type Vertex struct {
	X int
	Y int
}
```

`type` キーワードを使って新しい構造体型 `Vertex` を定義しています。この構造体は `X` と `Y` という2つの `int` 型フィールドを持ちます。

```go
fmt.Println(Vertex{1, 2})
```

構造体リテラルを使って `Vertex` のインスタンスを作成しています。フィールドは定義順に値を指定します。

## ポイント

- `type` キーワードで新しい型を定義
- 構造体のフィールドはカンマではなく改行で区切る
- フィールド名は大文字で始めるとエクスポートされる（パッケージ外からアクセス可能）
- 構造体リテラルで初期化時に値を設定できる

## 参考

- [A Tour of Go - Structs](https://go.dev/tour/moretypes/2)

## 実行方法

```bash
go run 03_moretypes/01_structs.go
```

---

## ナビゲーション

← 前: [Pointers](00_pointers.md) | 次: [Struct Fields](02_struct_fields.md) →

### 関連トピック
- [Struct Fields](02_struct_fields.md) - フィールドへのアクセス
- [Struct Literals](04_struct_literals.md) - 構造体の初期化方法
- [Pointers to structs](03_pointers_to_structs.md) - 構造体へのポインタ
