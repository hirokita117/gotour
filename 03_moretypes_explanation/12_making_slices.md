# Creating a slice with make（make でスライスを作成）

> **ソースコード**: [12_making_slices.go](../03_moretypes/12_making_slices.go)

## 概要

スライスは組み込みの `make` 関数で作成できます。これは動的サイズの配列を作成する方法です。

## コード解説

```go
a := make([]int, 5)
printSlice("a", a)  // a len=5 cap=5 [0 0 0 0 0]
```

長さ 5 のスライスを作成。容量は省略されたので長さと同じになります。要素はゼロ値で初期化されます。

```go
b := make([]int, 0, 5)
printSlice("b", b)  // b len=0 cap=5 []
```

長さ 0、容量 5 のスライスを作成。要素は見えないが、容量分のメモリは確保されています。

```go
c := b[:2]
printSlice("c", c)  // c len=2 cap=5 [0 0]
```

`b` から長さ 2 のスライスを切り出し。

```go
d := c[2:5]
printSlice("d", d)  // d len=3 cap=3 [0 0 0]
```

`c` のインデックス 2 から 4 までのスライスを切り出し。

## ポイント

- `make([]T, length)`: 長さと容量が同じスライスを作成
- `make([]T, length, capacity)`: 長さと容量を個別に指定
- 容量は長さ以上でなければならない
- 事前に必要な容量がわかっている場合、`make` で容量を指定すると効率的
- `append` による再割り当てを減らせる

## 参考

- [A Tour of Go - Creating a slice with make](https://go.dev/tour/moretypes/13)

## 実行方法

```bash
go run 03_moretypes/12_making_slices.go
```

---

## ナビゲーション

← 前: [Nil slices](11_nil_slices.md) | 次: [Slices of slices](13_slices_of_slices.md) →

### 関連トピック
- [Slice length and capacity](10_slice_length_capacity.md) - 長さと容量
- [Appending to a slice](14_append.md) - append で要素を追加
