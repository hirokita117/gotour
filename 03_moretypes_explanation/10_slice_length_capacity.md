# Slice length and capacity（スライスの長さと容量）

> **ソースコード**: [10_slice_length_capacity.go](../03_moretypes/10_slice_length_capacity.go)

## 概要

スライスには長さ（length）と容量（capacity）の2つの属性があります。これらを理解することは、Go でスライスを効率的に使うために重要です。

## コード解説

```go
s := []int{2, 3, 5, 7, 11, 13}
printSlice(s)  // len=6 cap=6 [2 3 5 7 11 13]
```

長さも容量も 6 のスライス。

```go
s = s[:0]
printSlice(s)  // len=0 cap=6 []
```

長さを 0 にしても容量は変わらない。元の配列はまだ存在する。

```go
s = s[:4]
printSlice(s)  // len=4 cap=6 [2 3 5 7]
```

容量の範囲内なら、スライスを再び拡張できる。

```go
s = s[2:]
printSlice(s)  // len=2 cap=4 [5 7]
```

先頭を切り落とすと容量も減る（先頭の要素は取り戻せない）。

## ポイント

- **長さ（length）**: スライスに含まれる要素の数。`len(s)` で取得。
- **容量（capacity）**: 元の配列の先頭から数えて、スライスの最初の要素から配列の最後までの要素数。`cap(s)` で取得。
- スライスの長さは容量を超えることはできない
- 先頭を切り落とすと容量も減る
- 末尾を切り落とすと長さだけ減る（容量は変わらない）

## 参考

- [A Tour of Go - Slice length and capacity](https://go.dev/tour/moretypes/11)

## 実行方法

```bash
go run 03_moretypes/10_slice_length_capacity.go
```

---

## ナビゲーション

← 前: [Slice defaults](09_slice_defaults.md) | 次: [Nil slices](11_nil_slices.md) →

### 関連トピック
- [Slices](06_slices.md) - スライスの基本
- [Creating a slice with make](12_making_slices.md) - 容量を指定してスライスを作成
