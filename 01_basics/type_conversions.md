# Type Conversions（型変換）

## 概要

Go では異なる型間の代入には明示的な型変換が必要です。暗黙的な型変換は行われません。

## コード解説

```go
var x, y int = 3, 4
var f float64 = math.Sqrt(float64(x*x + y*y))
var z uint = uint(f)
```

- `float64(x*x + y*y)` - int から float64 への変換
- `math.Sqrt` は float64 を引数に取るため、変換が必要
- `uint(f)` - float64 から uint への変換（小数点以下は切り捨て）

## 型変換の構文

```go
T(v)  // 値 v を型 T に変換
```

例：
```go
i := 42
f := float64(i)    // int → float64
u := uint(f)       // float64 → uint
```

## 暗黙的変換はない

```go
var i int = 42
var f float64 = i  // コンパイルエラー！

var f float64 = float64(i)  // OK：明示的に変換
```

C言語のような自動型変換は行われません。これにより型の不一致によるバグを防ぎます。

## 注意点

```go
// 精度が失われる可能性
var f float64 = 3.9
var i int = int(f)  // i は 3（切り捨て）

// オーバーフローに注意
var big int64 = 1000000
var small int8 = int8(big)  // オーバーフロー！
```

## ポイント

- Go は**明示的な型変換のみ**をサポート
- 暗黙的な型変換は一切行われない
- float → int は小数点以下が切り捨てられる
- サイズの異なる型間の変換はオーバーフローに注意

## 参考

- [A Tour of Go - Type conversions](https://go.dev/tour/basics/13)

## 実行方法

```bash
go run 01_basics/type_conversions.go
```
