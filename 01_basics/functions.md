# Functions（関数）

## 概要

Go の関数は `func` キーワードで定義します。引数の型は変数名の後に書きます。

## コード解説

```go
func add(x int, y int) int {
	return x + y
}
```
- `func` で関数を宣言
- `x int, y int` は引数（型は名前の後ろ）
- 最後の `int` は戻り値の型
- `return` で値を返す

```go
func addShort(x, y int) int {
	return x + y
}
```
- 同じ型の引数が連続する場合、最後以外の型を省略できる
- `x, y int` は `x int, y int` と同じ意味

## Go の型宣言の特徴

```go
// Go（型が後ろ）
func add(x int, y int) int

// C言語（型が前）
int add(int x, int y)
```

Go は「名前: 型」の順で書くことで、複雑な型宣言でも読みやすくなっています。

## ポイント

- 型は変数名の**後ろ**に書く（C/Java とは逆）
- 同じ型の引数は型を省略できる
- 戻り値の型は引数リストの後ろに書く
- 戻り値がない関数は型を省略する

## 参考

- [A Tour of Go - Functions](https://go.dev/tour/basics/4)
- [A Tour of Go - Functions continued](https://go.dev/tour/basics/5)

## 実行方法

```bash
go run 01_basics/functions.go
```
