# Slice literals（スライスリテラル）

> **ソースコード**: [08_slice_literals.go](../03_moretypes/08_slice_literals.go)

## 概要

スライスリテラルは長さのない配列リテラルのようなものです。暗黙的に配列が作成され、その配列を参照するスライスが構築されます。

## コード解説

```go
q := []int{2, 3, 5, 7, 11, 13}
```

サイズを指定しない `[]int` がスライスリテラルです。配列リテラル `[6]int{...}` との違いに注目してください。

```go
r := []bool{true, false, true, true, false, true}
```

`bool` 型のスライスリテラル。

```go
s := []struct {
    i int
    b bool
}{
    {2, true},
    {3, false},
    ...
}
```

無名構造体のスライスリテラル。構造体を型として定義せずに直接使用しています。

## ポイント

- 配列リテラル: `[6]int{1, 2, 3, 4, 5, 6}`（サイズ指定あり）
- スライスリテラル: `[]int{1, 2, 3, 4, 5, 6}`（サイズ指定なし）
- スライスリテラルは内部で配列を作成し、その配列を参照するスライスを返す
- 任意の型のスライスを作成可能

## 参考

- [A Tour of Go - Slice literals](https://go.dev/tour/moretypes/9)

## 実行方法

```bash
go run 03_moretypes/08_slice_literals.go
```

---

## ナビゲーション

← 前: [Slices are like references](07_slices_are_like_references.md) | 次: [Slice defaults](09_slice_defaults.md) →

### 関連トピック
- [Struct Literals](04_struct_literals.md) - 構造体リテラル
- [Arrays](05_arrays.md) - 配列との違い
