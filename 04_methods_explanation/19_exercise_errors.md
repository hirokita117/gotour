# Exercise: Errors（演習: エラー）

> **ソースコード**: [19_exercise_errors.go](../04_methods/19_exercise_errors.go)

## 概要

以前の演習で作成した `Sqrt` 関数を修正し、負の数が与えられた場合にエラーを返すようにします。

## 課題

- `ErrNegativeSqrt` 型を作成
- `error` インターフェースを実装
- `Sqrt` 関数で負の数の場合にエラーを返す

## 解答

```go
type ErrNegativeSqrt float64

func (e ErrNegativeSqrt) Error() string {
	return fmt.Sprintf("cannot Sqrt negative number: %v", float64(e))
}

func Sqrt(x float64) (float64, error) {
	if x < 0 {
		return 0, ErrNegativeSqrt(x)
	}
	// ニュートン法で平方根を計算
	z := 1.0
	for i := 0; i < 10; i++ {
		z -= (z*z - x) / (2 * z)
	}
	return z, nil
}
```

## 注意点

`Error()` メソッド内で `fmt.Sprintf("%v", e)` を使うと無限ループになります。`e` を出力するために `Error()` が呼ばれ、その中でまた `e` を出力しようとして...となるためです。`float64(e)` で型変換することで回避できます。

## ポイント

- カスタムエラー型は基本型をベースに作れる
- `error` インターフェースの実装は `Error() string` メソッドだけ
- Go のエラー処理は戻り値ベース

## 参考

- [A Tour of Go - Exercise: Errors](https://go.dev/tour/methods/20)

## 実行方法

```bash
go run 04_methods/19_exercise_errors.go
```

---

## ナビゲーション

← 前: [Errors](18_errors.md) | 次: [Readers](20_readers.md) →

### 関連トピック
- [Errors](18_errors.md) - エラーの基本
- [Exercise: Loops and Functions](../02_flowcontrol_explanation/08_exercise_loops.md) - 元の Sqrt 演習
