# Choosing a value or pointer receiver（値レシーバかポインタレシーバか）

> **ソースコード**: [07_choosing_receiver.go](../04_methods/07_choosing_receiver.go)

## 概要

ポインタレシーバを使う理由は主に2つあります。

## コード解説

```go
func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}
```

この例では `Abs()` も `Scale()` もポインタレシーバを使っています。

## ポインタレシーバを使う理由

1. **レシーバが指す値を変更するため**
   - `Scale()` は元の値を変更する必要がある

2. **メソッド呼び出しごとの値のコピーを避けるため**
   - 大きな構造体の場合、コピーのコストが高くなる
   - ポインタレシーバならポインタのコピーだけで済む

## ポイント

- 一般的に、ある型のすべてのメソッドは値レシーバかポインタレシーバのどちらかに統一すべき
- 混在させると混乱の原因になる
- 値を変更する必要がある場合はポインタレシーバ
- 大きな構造体の場合もポインタレシーバが効率的
- 迷ったらポインタレシーバを使う

## 参考

- [A Tour of Go - Choosing a value or pointer receiver](https://go.dev/tour/methods/8)

## 実行方法

```bash
go run 04_methods/07_choosing_receiver.go
```

---

## ナビゲーション

← 前: [Methods and pointer indirection (2)](06_methods_and_pointer_indirection2.md) | 次: [Interfaces](08_interfaces.md) →

### 関連トピック
- [Pointer receivers](03_pointer_receivers.md) - ポインタレシーバの基本
- [Methods and pointer indirection](05_methods_and_pointer_indirection.md) - 間接参照
