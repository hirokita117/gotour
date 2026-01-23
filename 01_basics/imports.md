# Imports（インポート）

## 概要

Go ではパッケージをインポートする方法が2つあります。括弧でグループ化する「factored import」と、個別に書く方法です。

## コード解説

```go
import (
	"fmt"
	"math"
)
```
- 括弧 `()` でまとめて書く方法を **factored import statement** と呼ぶ
- 複数のパッケージを見やすくグループ化できる

```go
import "fmt"
import "math"
```
- 個別に書くこともできるが、factored import が推奨される

```go
math.Sqrt(7)
```
- `math` パッケージの `Sqrt`（平方根）関数を使用
- `%g` は浮動小数点数を最も簡潔な形式で出力するフォーマット指定子

## ポイント

- **factored import を使うのが Go のスタイル**（gofmt が推奨）
- インポートしたパッケージを使わないとコンパイルエラーになる
- アルファベット順に並べるのが慣例（goimports が自動で整理してくれる）

## 参考

- [A Tour of Go - Imports](https://go.dev/tour/basics/2)

## 実行方法

```bash
go run 01_basics/imports.go
```
