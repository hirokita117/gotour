# Mutating Maps（マップの操作）

> **ソースコード**: [21_mutating_maps.go](../03_moretypes/21_mutating_maps.go)

## 概要

マップに対する基本的な操作（挿入、更新、削除、取得）について学びます。

## コード解説

```go
m["Answer"] = 42
```

要素の挿入または更新。キーが存在しなければ挿入、存在すれば上書きします。

```go
fmt.Println(m["Answer"])
```

要素の取得。キーが存在しない場合、値の型のゼロ値が返されます。

```go
delete(m, "Answer")
```

要素の削除。組み込み関数 `delete` を使用します。

```go
v, ok := m["Answer"]
```

2つの値を受け取ると、キーの存在確認ができます：
- `v`: 値（キーがない場合はゼロ値）
- `ok`: キーが存在すれば `true`、なければ `false`

## マップ操作のまとめ

| 操作 | 構文 |
|------|------|
| 挿入/更新 | `m[key] = value` |
| 取得 | `value := m[key]` |
| 削除 | `delete(m, key)` |
| 存在確認 | `value, ok := m[key]` |

## ポイント

- キーが存在しない場合、値の型のゼロ値が返される
- 存在確認には2値代入を使う（`v, ok := m[key]`）
- `delete` はキーが存在しなくてもエラーにならない
- 慣例として、存在確認の変数名は `ok` を使う

## 参考

- [A Tour of Go - Mutating Maps](https://go.dev/tour/moretypes/22)

## 実行方法

```bash
go run 03_moretypes/21_mutating_maps.go
```

---

## ナビゲーション

← 前: [Map literals continued](20_map_literals_continued.md) | 次: [Exercise: Maps](22_exercise_maps.md) →

### 関連トピック
- [Maps](18_maps.md) - マップの基本
- [Map literals](19_map_literals.md) - マップリテラル
