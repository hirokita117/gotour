# Named Return Values（名前付き戻り値）

## 概要

Go では戻り値に名前をつけることができます。名前付き戻り値は関数の先頭で宣言された変数として扱われます。

## コード解説

```go
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}
```
- `(x, y int)` で戻り値に `x` と `y` という名前をつける
- `x` と `y` は関数内でローカル変数として使える
- `return` だけで `x` と `y` の現在の値が返される（**naked return**）

## naked return について

```go
// naked return（名前付き戻り値の場合）
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return  // x, y が自動的に返される
}

// 明示的な return
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return x, y  // こう書いても同じ
}
```

## ポイント

- 名前付き戻り値は戻り値の意味を文書化する効果がある
- naked return は**短い関数でのみ使用すべき**
- 長い関数では可読性を損なうため、明示的に値を指定して return する
- 名前付き戻り値はゼロ値で初期化される

## 参考

- [A Tour of Go - Named return values](https://go.dev/tour/basics/7)

## 実行方法

```bash
go run 01_basics/06_named_return_values.go
```

---

## ナビゲーション

← 前: [Multiple Results（複数の戻り値）](05_multiple_results.md) | 次: [Variables（変数）](07_variables.md) →

### 関連トピック
- [Functions（関数）](04_functions.md) - 関数の基本
- [Multiple Results（複数の戻り値）](05_multiple_results.md) - 関数から複数の値を返す
