# Type Inference（型推論）

## 概要

`:=` や初期値付きの `var` では、右辺の値から型が自動的に推論されます。

## コード解説

```go
v := 42
fmt.Printf("v is of type %T\n", v)  // int
```
- 整数リテラルは `int` として推論される

```go
f := 3.142
fmt.Printf("f is of type %T\n", f)  // float64
```
- 小数リテラルは `float64` として推論される

```go
g := 0.867 + 0.5i
fmt.Printf("g is of type %T\n", g)  // complex128
```
- 虚数を含むリテラルは `complex128` として推論される

## 推論規則

| リテラル | 推論される型 |
|---|---|
| `42` | `int` |
| `3.14` | `float64` |
| `1 + 2i` | `complex128` |
| `true` | `bool` |
| `"hello"` | `string` |
| `'A'` | `rune` (int32) |

## 変数からの推論

```go
var i int = 42
j := i  // j は int（i の型を引き継ぐ）

var f float64 = 3.14
g := f  // g は float64
```

右辺が変数の場合、その変数の型が引き継がれます。

## ポイント

- 型推論により、コードが簡潔になる
- 整数は `int`、小数は `float64` がデフォルト
- 特定の型（int32、float32 等）が必要な場合は明示的に指定する
- `%T` でプログラム実行時に型を確認できる

## 参考

- [A Tour of Go - Type inference](https://go.dev/tour/basics/14)

## 実行方法

```bash
go run 01_basics/type_inference.go
```
