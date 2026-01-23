# Images（Image インターフェース）

> **ソースコード**: [23_images.go](../04_methods/23_images.go)

## 概要

`image` パッケージは `Image` インターフェースを定義しています。

## コード解説

```go
type Image interface {
	ColorModel() color.Model
	Bounds() Rectangle
	At(x, y int) color.Color
}
```

これは `image` パッケージで定義されている `Image` インターフェースです。

```go
m := image.NewRGBA(image.Rect(0, 0, 100, 100))
fmt.Println(m.Bounds())       // (0,0)-(100,100)
fmt.Println(m.At(0, 0).RGBA()) // 0 0 0 0 (透明な黒)
```

- `image.NewRGBA` で 100x100 の RGBA イメージを作成
- `Bounds()` は画像の範囲を返す
- `At(x, y)` は指定座標の色を返す

## ポイント

- `Image` インターフェースは 3 つのメソッドを持つ
- `color.Color` と `color.Model` も `image/color` パッケージで定義されたインターフェース
- 標準ライブラリの PNG、JPEG、GIF などのパッケージで使われる

## 参考

- [A Tour of Go - Images](https://go.dev/tour/methods/24)

## 実行方法

```bash
go run 04_methods/23_images.go
```

---

## ナビゲーション

← 前: [Exercise: rot13Reader](22_exercise_rot13.md) | 次: [Exercise: Images](24_exercise_images.md) →

### 関連トピック
- [Interfaces](08_interfaces.md) - インターフェースの基本
- [Readers](20_readers.md) - 別の重要なインターフェース
