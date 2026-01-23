# Exercise: Slices（演習: スライス）

> **ソースコード**: [17_exercise_slices.go](../03_moretypes/17_exercise_slices.go)

## 概要

`Pic` 関数を実装して、2次元スライスを使って画像を生成する演習です。

## コード解説

```go
func Pic(dx, dy int) [][]uint8 {
    picture := make([][]uint8, dy)
    for y := range picture {
        picture[y] = make([]uint8, dx)
        for x := range picture[y] {
            picture[y][x] = uint8((x + y) / 2)
        }
    }
    return picture
}
```

1. `make([][]uint8, dy)` で `dy` 行のスライスを作成
2. 各行に対して `make([]uint8, dx)` で `dx` 列のスライスを作成
3. 各ピクセルに対して値を計算して代入

この例では `(x + y) / 2` を使用していますが、以下のような式も試すと面白いパターンが生成されます：
- `x * y`
- `x ^ y`（XOR）
- `x * y % 255`

## ポイント

- 2次元スライスは「スライスのスライス」として作成
- 内側のスライスも個別に `make` で作成が必要
- `uint8` は 0-255 の範囲の整数型
- `pic.Show` は Web ブラウザ上の Tour of Go で画像を表示

## 注意

このコードを実行するには `golang.org/x/tour/pic` パッケージが必要です。
ローカルで実行する場合は以下のコマンドでインストールしてください：

```bash
go get golang.org/x/tour/pic
```

## 参考

- [A Tour of Go - Exercise: Slices](https://go.dev/tour/moretypes/18)

## 実行方法

```bash
go run 03_moretypes/17_exercise_slices.go
```

---

## ナビゲーション

← 前: [Range continued](16_range_continued.md) | 次: [Maps](18_maps.md) →

### 関連トピック
- [Slices of slices](13_slices_of_slices.md) - 2次元スライス
- [Creating a slice with make](12_making_slices.md) - make でスライス作成
