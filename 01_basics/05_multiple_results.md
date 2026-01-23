# Multiple Results（複数の戻り値）

## 概要

Go の関数は複数の値を返すことができます。これは Go の大きな特徴の一つです。

## コード解説

```go
func swap(x, y string) (string, string) {
	return y, x
}
```
- `(string, string)` で2つの string を返すことを宣言
- `return y, x` で2つの値を同時に返す

```go
a, b := swap("hello", "world")
```
- 複数の戻り値を同時に受け取る
- `:=` は変数宣言と代入を同時に行う短縮記法

## 活用例：エラーハンドリング

```go
func divide(a, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("division by zero")
	}
	return a / b, nil
}

result, err := divide(10, 2)
if err != nil {
	// エラー処理
}
```

Go では「結果, エラー」のパターンが非常に一般的です。

## ポイント

- 複数の戻り値は `(型1, 型2, ...)` で宣言
- Go の慣例では、エラーは最後の戻り値として返す
- 使わない戻り値は `_`（ブランク識別子）で無視できる
  - 例: `result, _ := divide(10, 2)`

## 参考

- [A Tour of Go - Multiple results](https://go.dev/tour/basics/6)

## 実行方法

```bash
go run 01_basics/05_multiple_results.go
```

---

## ナビゲーション

← 前: [Functions（関数）](04_functions.md) | 次: [Named Return Values（名前付き戻り値）](06_named_return_values.md) →

### 関連トピック
- [Functions（関数）](04_functions.md) - 関数の基本
- [Named Return Values（名前付き戻り値）](06_named_return_values.md) - 戻り値に名前をつける
