# Variables（変数）

## 概要

Go では `var` キーワードで変数を宣言します。変数は初期化しなければゼロ値になります。

## コード解説

```go
var c, python, java bool
```
- パッケージレベルで変数を宣言
- `bool` 型の変数を3つ宣言
- 初期化していないため、ゼロ値 `false` になる

```go
var i, j int = 1, 2
```
- 初期値を指定して宣言
- 複数の変数を同時に初期化できる

```go
var k int
```
- 関数内でも `var` で宣言できる
- 初期化なしなのでゼロ値 `0` になる

## ゼロ値

初期化していない変数はゼロ値が設定されます：

| 型 | ゼロ値 |
|---|---|
| 数値型 | `0` |
| bool | `false` |
| string | `""` (空文字) |
| ポインタ、スライス、マップ等 | `nil` |

## ポイント

- `var` は関数の外でもパッケージレベルで使用できる
- 複数の変数を1行で宣言可能
- 初期化しない場合はゼロ値が設定される（未定義にはならない）
- 変数の型は名前の後ろに書く

## 参考

- [A Tour of Go - Variables](https://go.dev/tour/basics/8)
- [A Tour of Go - Variables with initializers](https://go.dev/tour/basics/9)

## 実行方法

```bash
go run 01_basics/variables.go
```
