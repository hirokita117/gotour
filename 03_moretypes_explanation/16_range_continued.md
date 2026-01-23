# Range continued（レンジの続き）

> **ソースコード**: [16_range_continued.go](../03_moretypes/16_range_continued.go)

## 概要

`range` でインデックスか値のどちらかが不要な場合は、`_`（ブランク識別子）を使って省略できます。

## コード解説

```go
for i := range pow {
    pow[i] = 1 << uint(i)
}
```

値を省略してインデックスだけを使用。`i` は 0, 1, 2, ... と変化します。

`1 << uint(i)` は2のi乗を計算しています（ビットシフト演算）。

```go
for _, value := range pow {
    fmt.Printf("%d\n", value)
}
```

インデックスを `_` で無視し、値だけを使用。Go ではすべての変数を使用しなければならないため、不要な値は `_` で受け取ります。

## ポイント

- `for i := range slice`: インデックスのみ使用
- `for _, v := range slice`: 値のみ使用
- `for i, v := range slice`: 両方使用
- `for range slice`: 両方不要（要素数分ループするだけ）
- `_`（ブランク識別子）は「この値を捨てる」という意味

## 参考

- [A Tour of Go - Range continued](https://go.dev/tour/moretypes/17)

## 実行方法

```bash
go run 03_moretypes/16_range_continued.go
```

---

## ナビゲーション

← 前: [Range](15_range.md) | 次: [Exercise: Slices](17_exercise_slices.md) →

### 関連トピック
- [Range](15_range.md) - range の基本
- [Blank identifier](../01_basics_explanation/02_imports.md) - ブランク識別子について
