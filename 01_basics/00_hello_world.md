# Hello, World

## 概要

Go言語の最も基本的なプログラムです。すべてのGoプログラムは `package` 宣言から始まり、実行可能プログラムは必ず `main` パッケージに属します。

## コード解説

```go
package main
```
- すべてのGoファイルは `package` 宣言から始まる
- 実行可能プログラムは `main` パッケージである必要がある

```go
import "fmt"
```
- `fmt` パッケージをインポート
- `fmt` は "format" の略で、標準入出力を扱う

```go
func main() {
    fmt.Println("Hello, World!")
}
```
- `main` 関数はプログラムのエントリーポイント
- `fmt.Println` は引数を出力し、最後に改行を追加する

## ポイント

- Go のプログラムは必ず `package` 宣言から始まる
- 実行可能ファイルは `package main` と `func main()` が必須
- インデントにはタブを使用する（Goの公式スタイル）
- 文末にセミコロンは不要（コンパイラが自動で補完）

## 参考

- [A Tour of Go - Hello, World](https://go.dev/tour/welcome/1)

## 実行方法

```bash
go run 01_basics/00_hello_world.go
```
