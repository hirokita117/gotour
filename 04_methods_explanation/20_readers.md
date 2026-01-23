# Readers（Reader インターフェース）

> **ソースコード**: [20_readers.go](../04_methods/20_readers.go)

## 概要

`io` パッケージの `Reader` インターフェースは、データストリームの読み取り端を表します。

## コード解説

```go
type Reader interface {
	Read(p []byte) (n int, err error)
}
```

これは `io` パッケージで定義されている `Reader` インターフェースです。

```go
r := strings.NewReader("Hello, Reader!")

b := make([]byte, 8)
for {
	n, err := r.Read(b)
	fmt.Printf("n = %v err = %v b = %v\n", n, err, b)
	fmt.Printf("b[:n] = %q\n", b[:n])
	if err == io.EOF {
		break
	}
}
```

- `Read` はスライス `b` にデータを読み込む
- `n` は読み込んだバイト数
- データの終わりに達すると `io.EOF` エラーを返す
- 8 バイトずつ読み込んで処理している

## ポイント

- `Reader` は Go で最も重要なインターフェースの一つ
- ファイル、ネットワーク接続、圧縮、暗号化など多くの場所で使われる
- `Read` は与えられたスライスを満たす（または `EOF` まで読む）
- `io.EOF` はエラーではなく、正常な終了を示す

## 参考

- [A Tour of Go - Readers](https://go.dev/tour/methods/21)

## 実行方法

```bash
go run 04_methods/20_readers.go
```

---

## ナビゲーション

← 前: [Exercise: Errors](19_exercise_errors.md) | 次: [Exercise: Readers](21_exercise_readers.md) →

### 関連トピック
- [Slices](../03_moretypes_explanation/06_slices.md) - スライスの基本
- [Errors](18_errors.md) - エラー処理
