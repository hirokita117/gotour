# Short Variable Declarations（短い変数宣言）

> **ソースコード**: [08_short_variable_declarations.go](../01_basics/08_short_variable_declarations.go)

## 概要

関数内では `:=` を使った短い変数宣言が使えます。型は右辺の値から自動的に推論されます。

## コード解説

```go
k := 3
```
- `:=` は `var k int = 3` の短縮形
- 型は右辺の値から推論される（この場合 `int`）

```go
c, python, java := true, false, "no!"
```
- 複数の変数を同時に宣言・初期化
- それぞれ異なる型でも OK（`bool`, `bool`, `string`）

## var と := の使い分け

```go
// 関数の外（パッケージレベル）
var Version = "1.0.0"  // var のみ使用可能

func main() {
	// 関数の中
	name := "Go"        // := が使える（推奨）
	var age int = 10    // var も使える
}
```

| 場所 | var | := |
|---|---|---|
| パッケージレベル | ✓ | ✗ |
| 関数内 | ✓ | ✓ |

## ポイント

- `:=` は**関数内でのみ**使用可能
- パッケージレベルでは `var` を使う必要がある
- 関数内では `:=` を使うのが Go らしいスタイル
- 型を明示したい場合は `var` を使う

## 参考

- [A Tour of Go - Short variable declarations](https://go.dev/tour/basics/10)

## 実行方法

```bash
go run 01_basics/08_short_variable_declarations.go
```

---

## ナビゲーション

← 前: [Variables（変数）](07_variables.md) | 次: [Basic Types（基本型）](09_basic_types.md) →

### 関連トピック
- [Variables（変数）](07_variables.md) - `var` による変数宣言
- [Type Inference（型推論）](12_type_inference.md) - 型の自動推論
