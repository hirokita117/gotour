# Constants（定数）

> **ソースコード**: [13_constants.go](../01_basics/13_constants.go)

## 概要

定数は `const` キーワードで宣言します。定数は変数と同様に宣言できますが、`:=` は使えません。

## コード解説

```go
const Pi = 3.14
```
- パッケージレベルで定数を宣言
- 型を指定しない場合、リテラルの型が使われる

```go
const (
	StatusOK       = 200
	StatusNotFound = 404
)
```
- 複数の定数をグループ化して宣言（factored const）
- 関連する定数をまとめると可読性が上がる

```go
const World = "世界"
```
- 関数内でも定数を宣言できる
- 日本語などの Unicode 文字も使用可能

## 定数と変数の違い

```go
const Pi = 3.14
Pi = 3.14159  // エラー！定数は再代入できない

var x = 3.14
x = 3.14159   // OK：変数は再代入できる
```

## 定数で使える型

定数に使える値：
- 数値（整数、浮動小数点、複素数）
- 文字列
- 真偽値

使えない値：
- スライス、マップ、関数など（コンパイル時に値が決まらない）

```go
const slice = []int{1, 2, 3}  // エラー！
const now = time.Now()        // エラー！
```

## ポイント

- 定数は**コンパイル時**に値が決定される
- 定数は再代入できない（イミュータブル）
- `:=` は使えない（`const` を使う）
- 変更されるべきでない値には定数を使う

## 参考

- [A Tour of Go - Constants](https://go.dev/tour/basics/15)

## 実行方法

```bash
go run 01_basics/13_constants.go
```

---

## ナビゲーション

← 前: [Type Inference（型推論）](12_type_inference.md)

### 関連トピック
- [Variables（変数）](07_variables.md) - 変数宣言との違い
- [Basic Types（基本型）](09_basic_types.md) - 定数で使える型
