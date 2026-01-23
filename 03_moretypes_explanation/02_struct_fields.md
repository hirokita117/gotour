# Struct Fields（構造体フィールド）

> **ソースコード**: [02_struct_fields.go](../03_moretypes/02_struct_fields.go)

## 概要

構造体のフィールドには、ドット（`.`）を使ってアクセスします。

## コード解説

```go
v := Vertex{1, 2}
```

`Vertex` 構造体のインスタンスを作成し、`X=1`, `Y=2` で初期化しています。

```go
v.X = 4
```

ドット記法を使って `X` フィールドに新しい値を代入しています。

```go
fmt.Println(v.X)
```

同様にドット記法でフィールドの値を読み取っています。

## ポイント

- ドット（`.`）を使ってフィールドにアクセス
- フィールドの読み取りと書き込みの両方が可能
- 構造体の変数が宣言されると、フィールドはそれぞれの型のゼロ値で初期化される

## 参考

- [A Tour of Go - Struct Fields](https://go.dev/tour/moretypes/3)

## 実行方法

```bash
go run 03_moretypes/02_struct_fields.go
```

---

## ナビゲーション

← 前: [Structs](01_structs.md) | 次: [Pointers to structs](03_pointers_to_structs.md) →

### 関連トピック
- [Structs](01_structs.md) - 構造体の基本
- [Pointers to structs](03_pointers_to_structs.md) - ポインタ経由のフィールドアクセス
