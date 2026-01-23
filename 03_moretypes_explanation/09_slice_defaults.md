# Slice defaults（スライスのデフォルト値）

> **ソースコード**: [09_slice_defaults.go](../03_moretypes/09_slice_defaults.go)

## 概要

スライスを作成するとき、上限または下限を省略できます。デフォルトでは、下限は 0、上限はスライスの長さになります。

## コード解説

```go
s := []int{2, 3, 5, 7, 11, 13}
```

6つの要素を持つスライスを作成。

```go
s = s[1:4]  // [3 5 7]
```

インデックス 1 から 3 までの要素。

```go
s = s[:2]   // [3 5]
```

下限を省略。`s[0:2]` と同じ。

```go
s = s[1:]   // [5]
```

上限を省略。`s[1:len(s)]` と同じ。

## ポイント

配列 `a` に対して以下はすべて同じ意味:

```go
a[0:10]
a[:10]
a[0:]
a[:]
```

- `a[:]` は配列全体のスライスを作成
- 省略時のデフォルト値:
  - 下限: `0`
  - 上限: `len(スライス)`

## 参考

- [A Tour of Go - Slice defaults](https://go.dev/tour/moretypes/10)

## 実行方法

```bash
go run 03_moretypes/09_slice_defaults.go
```

---

## ナビゲーション

← 前: [Slice literals](08_slice_literals.md) | 次: [Slice length and capacity](10_slice_length_capacity.md) →

### 関連トピック
- [Slices](06_slices.md) - スライスの基本
- [Slice length and capacity](10_slice_length_capacity.md) - 長さと容量
