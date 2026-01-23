# Slices of slices（スライスのスライス）

> **ソースコード**: [13_slices_of_slices.go](../03_moretypes/13_slices_of_slices.go)

## 概要

スライスは任意の型を含むことができ、他のスライスを含むこともできます。これにより2次元配列のような構造を作成できます。

## コード解説

```go
board := [][]string{
    {"_", "_", "_"},
    {"_", "_", "_"},
    {"_", "_", "_"},
}
```

文字列スライスのスライス（2次元スライス）を作成しています。三目並べのボードを表現しています。

```go
board[0][0] = "X"
board[2][2] = "O"
```

2つのインデックスを使って要素にアクセスしています。`[行][列]` の順序です。

```go
for i := 0; i < len(board); i++ {
    fmt.Printf("%s\n", strings.Join(board[i], " "))
}
```

各行を空白で結合して出力しています。

## ポイント

- `[][]T` は「T 型のスライスのスライス」
- 2次元データ（行列、グリッド、ボード）を表現するのに便利
- 内部の各スライスは異なる長さを持つことができる（ジャグ配列）
- `strings.Join()` でスライスの要素を結合できる

## 出力例

```
X _ X
O _ X
_ _ O
```

## 参考

- [A Tour of Go - Slices of slices](https://go.dev/tour/moretypes/14)

## 実行方法

```bash
go run 03_moretypes/13_slices_of_slices.go
```

---

## ナビゲーション

← 前: [Creating a slice with make](12_making_slices.md) | 次: [Appending to a slice](14_append.md) →

### 関連トピック
- [Slices](06_slices.md) - スライスの基本
- [Arrays](05_arrays.md) - 配列の基本
