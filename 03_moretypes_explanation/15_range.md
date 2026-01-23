# Range（レンジ）

> **ソースコード**: [15_range.go](../03_moretypes/15_range.go)

## 概要

`for` ループで `range` を使うと、スライスやマップを反復処理できます。スライスの場合、各反復で2つの値が返されます。

## コード解説

```go
var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}
```

2のべき乗を含むスライスを定義。

```go
for i, v := range pow {
    fmt.Printf("2**%d = %d\n", i, v)
}
```

`range` はスライスを反復し、各反復で2つの値を返します：
- `i`: インデックス（0, 1, 2, ...）
- `v`: そのインデックスの要素のコピー

## ポイント

- `range` はスライス、配列、マップ、文字列、チャネルで使用可能
- スライスの場合、インデックスと値のコピーが返される
- 値はコピーなので、変更しても元のスライスには影響しない
- `for i, v := range slice` が基本形

## 出力例

```
2**0 = 1
2**1 = 2
2**2 = 4
2**3 = 8
2**4 = 16
2**5 = 32
2**6 = 64
2**7 = 128
```

## 参考

- [A Tour of Go - Range](https://go.dev/tour/moretypes/16)

## 実行方法

```bash
go run 03_moretypes/15_range.go
```

---

## ナビゲーション

← 前: [Appending to a slice](14_append.md) | 次: [Range continued](16_range_continued.md) →

### 関連トピック
- [Range continued](16_range_continued.md) - range の省略形
- [For](../02_flowcontrol_explanation/00_for.md) - for ループの基本
