# Exercise: Readers（演習: Reader）

> **ソースコード**: [21_exercise_readers.go](../04_methods/21_exercise_readers.go)

## 概要

無限に 'A' を出力する `Reader` を実装します。

## 課題

`Read` メソッドを実装し、スライスを ASCII 文字 'A' で埋めます。

## 解答

```go
type MyReader struct{}

func (r MyReader) Read(b []byte) (int, error) {
	for i := range b {
		b[i] = 'A'
	}
	return len(b), nil
}
```

- 与えられたスライス `b` のすべての要素を `'A'` で埋める
- 読み込んだバイト数（`len(b)`）を返す
- エラーは `nil`（無限ストリームなので EOF は返さない）

## ポイント

- `Reader` は必ずしも終了する必要はない
- 無限ストリームを表現できる
- `Read` は呼ばれるたびに与えられたバッファを埋める

## 注意

この例を実行するには `golang.org/x/tour/reader` パッケージが必要です。

```bash
go get golang.org/x/tour/reader
```

## 参考

- [A Tour of Go - Exercise: Readers](https://go.dev/tour/methods/22)

## 実行方法

```bash
go run 04_methods/21_exercise_readers.go
```

---

## ナビゲーション

← 前: [Readers](20_readers.md) | 次: [Exercise: rot13Reader](22_exercise_rot13.md) →

### 関連トピック
- [Readers](20_readers.md) - Reader インターフェース
- [Range](../03_moretypes_explanation/15_range.md) - range の使い方
