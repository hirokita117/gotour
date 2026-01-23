# Exercise: Stringers（演習: Stringer）

> **ソースコード**: [17_exercise_stringers.go](../04_methods/17_exercise_stringers.go)

## 概要

`IPAddr` 型に `Stringer` インターフェースを実装し、IPアドレスをドット区切りの形式で出力します。

## 課題

`IPAddr` 型に `String() string` メソッドを実装して、`fmt.Stringer` インターフェースを満たすようにします。

## 解答

```go
type IPAddr [4]byte

func (ip IPAddr) String() string {
	return fmt.Sprintf("%d.%d.%d.%d", ip[0], ip[1], ip[2], ip[3])
}
```

- `IPAddr` は 4 バイトの配列
- 各バイトをドットで区切って出力
- `fmt.Sprintf` で書式化した文字列を返す

## 出力例

```
loopback: 127.0.0.1
googleDNS: 8.8.8.8
```

## ポイント

- 配列にもメソッドを定義できる
- `fmt.Sprintf` で書式化した文字列を作成
- `Stringer` を実装することで、カスタム型を見やすく表示できる

## 参考

- [A Tour of Go - Exercise: Stringers](https://go.dev/tour/methods/18)

## 実行方法

```bash
go run 04_methods/17_exercise_stringers.go
```

---

## ナビゲーション

← 前: [Stringers](16_stringers.md) | 次: [Errors](18_errors.md) →

### 関連トピック
- [Stringers](16_stringers.md) - Stringer インターフェース
- [Arrays](../03_moretypes_explanation/05_arrays.md) - 配列の基本
