# Numeric Constants（数値定数）

> **ソースコード**: [14_numeric_constants.go](../01_basics/14_numeric_constants.go)

## 概要

数値定数は高精度の値を持ちます。型なしの定数は、その文脈によって必要な型を取ります。

## コード解説

```go
const (
	Big   = 1 << 100
	Small = Big >> 99
)
```
- `Big` は 1 を左に 100 ビットシフトした値（2^100、非常に大きな数）
- `Small` は `Big` を右に 99 ビットシフト（結果は 2）
- これらは型なし定数なので、任意精度で計算される

```go
func needInt(x int) int {
	return x*10 + 1
}
```
- `int` 型を引数に取る関数
- `Small`（= 2）を渡すと、`int` 型として扱われる

```go
func needFloat(x float64) float64 {
	return x * 0.1
}
```
- `float64` 型を引数に取る関数
- `Small` を渡すと `float64` として扱われる
- `Big` を渡すと `float64` として扱われる（int では収まらない）

```go
fmt.Println(needInt(Small))    // 21
fmt.Println(needFloat(Small))  // 0.2
fmt.Println(needFloat(Big))    // 1.2676506002282295e+29
```

## 型なし定数の特徴

```go
const x = 3        // 型なし整数定数
const y = 3.14     // 型なし浮動小数点定数

var a int = x      // OK: x は int として使用
var b float64 = x  // OK: x は float64 として使用
var c float64 = y  // OK
var d int = y      // エラー！3.14 は int に収まらない
```

型なし定数は、使用される文脈に応じて適切な型に変換されます。

## int のオーバーフロー

```go
const Big = 1 << 100

fmt.Println(needInt(Big))  // エラー！
// int は最大 64 ビットなので、2^100 は収まらない
```

`Big` を `int` として使おうとするとコンパイルエラーになります。

## ポイント

- 数値定数は**任意精度**（arbitrary precision）を持つ
- 型なし定数は文脈に応じて型が決まる
- `int` は環境によって 32 ビットまたは 64 ビット
- 定数の計算はコンパイル時に行われる
- 大きな数値も定数として扱えるが、使用時に型の制限を受ける

## 参考

- [A Tour of Go - Numeric Constants](https://go.dev/tour/basics/16)

## 実行方法

```bash
go run 01_basics/14_numeric_constants.go
```

---

## ナビゲーション

← 前: [Constants（定数）](13_constants.md)

### 関連トピック
- [Constants（定数）](13_constants.md) - 定数の基本
- [Basic Types（基本型）](09_basic_types.md) - 数値型の種類
- [Type Conversions（型変換）](11_type_conversions.md) - 型変換との関係
