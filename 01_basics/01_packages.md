# Packages（パッケージ）

## 概要

Go のプログラムはパッケージで構成されています。プログラムは `main` パッケージから実行を開始します。

## コード解説

```go
package main
```
- すべての Go ファイルは `package` 宣言から始まる
- `main` パッケージは特別で、実行可能なプログラムのエントリーポイントとなる

```go
import (
	"fmt"
	"math/rand"
)
```
- `import` で他のパッケージを読み込む
- `fmt` は標準出力などのフォーマット機能を提供
- `math/rand` は乱数生成機能を提供（パスで指定し、使用時は最後の要素 `rand` で参照）

```go
fmt.Println("My favorite number is", rand.Intn(100))
```
- `rand.Intn(100)` は 0 から 99 までの乱数を返す

## ポイント

- パッケージ名はインポートパスの最後の要素と同じ（`math/rand` → `rand`）
- 慣例として、パッケージ名は小文字の単一の単語
- `main` パッケージと `main` 関数がプログラムの開始点

## 参考

- [A Tour of Go - Packages](https://go.dev/tour/basics/1)

## 実行方法

```bash
go run 01_basics/01_packages.go
```
