# Nil slices（nil スライス）

> **ソースコード**: [11_nil_slices.go](../03_moretypes/11_nil_slices.go)

## 概要

スライスのゼロ値は `nil` です。nil スライスの長さと容量は 0 で、元になる配列を持ちません。

## コード解説

```go
var s []int
```

スライスを宣言しただけで初期化していないので、`s` は `nil` になります。

```go
fmt.Println(s, len(s), cap(s))  // [] 0 0
```

nil スライスでも `len()` と `cap()` は安全に呼び出せます。

```go
if s == nil {
    fmt.Println("nil!")
}
```

nil かどうかは `== nil` で確認できます。

## ポイント

- nil スライスの長さと容量は 0
- nil スライスは `== nil` で true
- nil スライスでも `len()`, `cap()`, `append()` は安全に使える
- 空スライス `[]int{}` と nil スライスは異なる（空スライスは `!= nil`）
- 関数から「結果がない」ことを示すために nil スライスを返すことがある

## nil スライスと空スライスの違い

```go
var nilSlice []int           // nil スライス
emptySlice := []int{}        // 空スライス（nil ではない）
emptySlice2 := make([]int, 0) // これも空スライス（nil ではない）
```

## 参考

- [A Tour of Go - Nil slices](https://go.dev/tour/moretypes/12)

## 実行方法

```bash
go run 03_moretypes/11_nil_slices.go
```

---

## ナビゲーション

← 前: [Slice length and capacity](10_slice_length_capacity.md) | 次: [Creating a slice with make](12_making_slices.md) →

### 関連トピック
- [Slices](06_slices.md) - スライスの基本
- [Slice length and capacity](10_slice_length_capacity.md) - 長さと容量
