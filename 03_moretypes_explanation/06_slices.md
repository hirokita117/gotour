# Slices（スライス）

> **ソースコード**: [06_slices.go](../03_moretypes/06_slices.go)

## 概要

配列は固定長ですが、スライスは可変長で、配列の要素に対する柔軟なビューを提供します。実際の開発では、配列よりもスライスの方がはるかによく使われます。

## コード解説

```go
primes := [6]int{2, 3, 5, 7, 11, 13}
```

6つの要素を持つ配列を作成しています。

```go
var s []int = primes[1:4]
```

配列 `primes` のインデックス 1 から 3 までの要素を参照するスライスを作成しています。

`a[low:high]` という形式で、`low` から `high-1` までの要素を含むスライスを作成します。

この例では `primes[1]`, `primes[2]`, `primes[3]` つまり `[3 5 7]` が出力されます。

## ポイント

- `[]T` はスライス型（サイズを指定しない）
- `a[low:high]` で配列やスライスの一部を切り出す
- `low` は含む、`high` は含まない（半開区間）
- スライスは配列への参照のようなもの
- スライス自体はデータを格納しない

## 参考

- [A Tour of Go - Slices](https://go.dev/tour/moretypes/7)

## 実行方法

```bash
go run 03_moretypes/06_slices.go
```

---

## ナビゲーション

← 前: [Arrays](05_arrays.md) | 次: [Slices are like references](07_slices_are_like_references.md) →

### 関連トピック
- [Arrays](05_arrays.md) - 配列の基本
- [Slice literals](08_slice_literals.md) - スライスリテラル
- [Creating a slice with make](12_making_slices.md) - make でスライスを作成
