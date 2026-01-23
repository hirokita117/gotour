# Basic Types（基本型）

## 概要

Go には以下の基本型があります。型のサイズはアーキテクチャによって異なる場合があります。

## Go の基本型一覧

### 真偽値
- `bool`

### 文字列
- `string`

### 整数型
| 型 | サイズ | 範囲 |
|---|---|---|
| `int8` | 8bit | -128 〜 127 |
| `int16` | 16bit | -32768 〜 32767 |
| `int32` | 32bit | 約±21億 |
| `int64` | 64bit | 約±922京 |
| `int` | 32 or 64bit | 環境依存 |

### 符号なし整数型
| 型 | サイズ |
|---|---|
| `uint8` | 8bit (0〜255) |
| `uint16` | 16bit |
| `uint32` | 32bit |
| `uint64` | 64bit |
| `uint` | 32 or 64bit |
| `uintptr` | ポインタを格納できるサイズ |

### 浮動小数点型
- `float32` - 単精度
- `float64` - 倍精度（通常はこちらを使用）

### 複素数型
- `complex64` - float32 の実部と虚部
- `complex128` - float64 の実部と虚部

### エイリアス
- `byte` = `uint8`
- `rune` = `int32`（Unicode コードポイント）

## コード解説

```go
var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)
```
- `var ()` で複数の変数をグループ化して宣言（factored var declaration）
- `1<<64 - 1` はビットシフト演算で uint64 の最大値を計算
- `12i` は虚数を表す（`i` は虚数単位）

```go
fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
```
- `%T` は変数の型を出力
- `%v` はデフォルトフォーマットで値を出力

## ポイント

- 特に理由がなければ `int` を使う（サイズは環境依存だが、通常は十分）
- 浮動小数点は通常 `float64` を使う
- `byte` と `rune` は可読性のためのエイリアス

## 参考

- [A Tour of Go - Basic types](https://go.dev/tour/basics/11)

## 実行方法

```bash
go run 01_basics/09_basic_types.go
```
