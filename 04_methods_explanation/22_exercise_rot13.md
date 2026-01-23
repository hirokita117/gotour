# Exercise: rot13Reader（演習: rot13Reader）

> **ソースコード**: [22_exercise_rot13.go](../04_methods/22_exercise_rot13.go)

## 概要

ROT13 置換暗号を適用する `io.Reader` を実装します。

## ROT13 とは

アルファベットを 13 文字シフトする暗号です。A→N, B→O, ..., N→A のように変換します。26 文字のアルファベットの半分（13）シフトするため、2 回適用すると元に戻ります。

## 解答

```go
type rot13Reader struct {
	r io.Reader
}

func rot13(b byte) byte {
	switch {
	case b >= 'A' && b <= 'Z':
		return 'A' + (b-'A'+13)%26
	case b >= 'a' && b <= 'z':
		return 'a' + (b-'a'+13)%26
	default:
		return b
	}
}

func (r rot13Reader) Read(b []byte) (int, error) {
	n, err := r.r.Read(b)
	for i := 0; i < n; i++ {
		b[i] = rot13(b[i])
	}
	return n, err
}
```

- 内部の Reader からデータを読み取り、各バイトに ROT13 を適用
- `"Lbh penpxrq gur pbqr!"` → `"You cracked the code!"`

## ポイント

- Reader をラップして変換処理を追加できる
- ストリーム処理のパイプライン構築に使われるパターン
- Go の標準ライブラリでは圧縮、暗号化などで同様のパターンが使われる

## 参考

- [A Tour of Go - Exercise: rot13Reader](https://go.dev/tour/methods/23)

## 実行方法

```bash
go run 04_methods/22_exercise_rot13.go
```

---

## ナビゲーション

← 前: [Exercise: Readers](21_exercise_readers.md) | 次: [Images](23_images.md) →

### 関連トピック
- [Readers](20_readers.md) - Reader インターフェース
- [Exercise: Readers](21_exercise_readers.md) - 基本的な Reader 実装
