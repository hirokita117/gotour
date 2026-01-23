# Exercise: Images（演習: Image）

> **ソースコード**: [24_exercise_images.go](../04_methods/24_exercise_images.go)

## 概要

`image.Image` インターフェースを実装して、自分だけの画像生成器を作成します。

## 課題

以下のメソッドを実装して `Image` インターフェースを満たすようにします：
- `ColorModel() color.Model`
- `Bounds() image.Rectangle`
- `At(x, y int) color.Color`

## 解答

```go
type Image struct {
	w, h int
}

func (img Image) ColorModel() color.Model {
	return color.RGBAModel
}

func (img Image) Bounds() image.Rectangle {
	return image.Rect(0, 0, img.w, img.h)
}

func (img Image) At(x, y int) color.Color {
	v := uint8(x ^ y)
	return color.RGBA{v, v, 255, 255}
}
```

- `ColorModel()`: RGBA カラーモデルを返す
- `Bounds()`: 画像のサイズを返す
- `At(x, y)`: 座標に応じた色を返す（XOR パターン）

## ポイント

- `image.Image` は 3 つのメソッドを持つインターフェース
- `x ^ y` のビット演算で面白いパターンが生成される
- 他のパターンも試してみよう: `(x+y)/2`, `x*y`, `x^y^(x+y)`

## 注意

この例を実行するには `golang.org/x/tour/pic` パッケージが必要です。

## 参考

- [A Tour of Go - Exercise: Images](https://go.dev/tour/methods/25)

## 実行方法

```bash
go run 04_methods/24_exercise_images.go
```

---

## ナビゲーション

← 前: [Images](23_images.md)

### 関連トピック
- [Images](23_images.md) - Image インターフェース
- [Interfaces](08_interfaces.md) - インターフェースの基本
- [Exercise: Slices](../03_moretypes_explanation/17_exercise_slices.md) - 似た画像生成演習
