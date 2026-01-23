# Errors（エラー）

> **ソースコード**: [18_errors.go](../04_methods/18_errors.go)

## 概要

Go では、エラー状態を `error` インターフェースで表現します。

## コード解説

```go
type error interface {
	Error() string
}
```

これは組み込みの `error` インターフェースです。

```go
type MyError struct {
	When time.Time
	What string
}

func (e *MyError) Error() string {
	return fmt.Sprintf("at %v, %s", e.When, e.What)
}

func run() error {
	return &MyError{
		time.Now(),
		"it didn't work",
	}
}
```

- `MyError` 型に `Error() string` メソッドを実装
- これにより `MyError` は `error` インターフェースを満たす
- 関数は `error` を返すことでエラー情報を伝える

## ポイント

- `error` は組み込みインターフェース
- `Error() string` メソッドを実装すればカスタムエラー型を作れる
- Go ではエラーは例外ではなく、通常の戻り値として扱う
- `err != nil` でエラーチェックを行う

## 参考

- [A Tour of Go - Errors](https://go.dev/tour/methods/19)

## 実行方法

```bash
go run 04_methods/18_errors.go
```

---

## ナビゲーション

← 前: [Exercise: Stringers](17_exercise_stringers.md) | 次: [Exercise: Errors](19_exercise_errors.md) →

### 関連トピック
- [Stringers](16_stringers.md) - Stringer インターフェース（似た構造）
- [Interfaces](08_interfaces.md) - インターフェースの基本
