# Appending to a slice（スライスへの追加）

> **ソースコード**: [14_append.go](../03_moretypes/14_append.go)

## 概要

スライスに新しい要素を追加するには、Go の組み込み関数 `append` を使います。

## コード解説

```go
var s []int
printSlice(s)  // len=0 cap=0 []
```

nil スライスから開始。

```go
s = append(s, 0)
printSlice(s)  // len=1 cap=1 [0]
```

nil スライスにも `append` は動作します。新しい配列が確保されます。

```go
s = append(s, 1)
printSlice(s)  // len=2 cap=2 [1]
```

容量が足りなくなると、自動的により大きな配列が確保されます。

```go
s = append(s, 2, 3, 4)
printSlice(s)  // len=5 cap=6 [0 1 2 3 4]
```

複数の要素を一度に追加することもできます。

## ポイント

- `append(slice, elem1, elem2, ...)` で要素を追加
- **戻り値を受け取る必要がある**（`s = append(s, ...)`）
- 容量が足りない場合、新しい配列が割り当てられる
- 新しい配列のサイズは通常2倍に拡張される
- nil スライスにも安全に `append` できる
- 別のスライスを追加: `append(s1, s2...)`（`...` を忘れずに）

## 参考

- [A Tour of Go - Appending to a slice](https://go.dev/tour/moretypes/15)

## 実行方法

```bash
go run 03_moretypes/14_append.go
```

---

## ナビゲーション

← 前: [Slices of slices](13_slices_of_slices.md) | 次: [Range](15_range.md) →

### 関連トピック
- [Slice length and capacity](10_slice_length_capacity.md) - 長さと容量
- [Creating a slice with make](12_making_slices.md) - make で事前に容量を確保
