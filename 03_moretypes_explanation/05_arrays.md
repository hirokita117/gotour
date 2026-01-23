# Arrays（配列）

> **ソースコード**: [05_arrays.go](../03_moretypes/05_arrays.go)

## 概要

`[n]T` 型は、型 `T` の `n` 個の値の配列を表します。配列のサイズは型の一部であり、サイズを変更することはできません。

## コード解説

```go
var a [2]string
```

2つの `string` を持つ配列を宣言しています。ゼロ値は空文字列 `""` です。

```go
a[0] = "Hello"
a[1] = "World"
```

インデックスを使って配列の要素にアクセス・代入しています。インデックスは 0 から始まります。

```go
primes := [6]int{2, 3, 5, 7, 11, 13}
```

配列リテラルを使って宣言と同時に初期化しています。

## ポイント

- 配列のサイズは型の一部（`[2]int` と `[3]int` は別の型）
- 配列のサイズは固定で、後から変更できない
- インデックスは 0 から始まる
- 配列は値型のため、代入や関数への受け渡しでコピーが発生する
- 柔軟なサイズが必要な場合はスライスを使う

## 参考

- [A Tour of Go - Arrays](https://go.dev/tour/moretypes/6)

## 実行方法

```bash
go run 03_moretypes/05_arrays.go
```

---

## ナビゲーション

← 前: [Struct Literals](04_struct_literals.md) | 次: [Slices](06_slices.md) →

### 関連トピック
- [Slices](06_slices.md) - より柔軟な配列
- [Slices are like references](07_slices_are_like_references.md) - 配列とスライスの違い
