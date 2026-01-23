# Stringers（Stringer インターフェース）

> **ソースコード**: [16_stringers.go](../04_methods/16_stringers.go)

## 概要

`fmt` パッケージの `Stringer` インターフェースは、自身を文字列として表現できる型を定義します。

## コード解説

```go
type Stringer interface {
	String() string
}
```

これは `fmt` パッケージで定義されているインターフェースです。

```go
type Person struct {
	Name string
	Age  int
}

func (p Person) String() string {
	return fmt.Sprintf("%v (%v years)", p.Name, p.Age)
}

func main() {
	a := Person{"Arthur Dent", 42}
	fmt.Println(a)  // "Arthur Dent (42 years)"
}
```

- `Person` に `String()` メソッドを定義
- `fmt.Println` は自動的に `String()` を呼び出す
- カスタムの出力形式を定義できる

## ポイント

- `Stringer` は最もよく使われるインターフェースの一つ
- `fmt.Print` 系の関数は `Stringer` を認識する
- 型のデバッグ出力やログ出力をカスタマイズするのに便利
- Python の `__str__` や Java の `toString()` に相当

## 参考

- [A Tour of Go - Stringers](https://go.dev/tour/methods/17)

## 実行方法

```bash
go run 04_methods/16_stringers.go
```

---

## ナビゲーション

← 前: [Type switches](15_type_switches.md) | 次: [Exercise: Stringers](17_exercise_stringers.md) →

### 関連トピック
- [Interfaces](08_interfaces.md) - インターフェースの基本
- [Interfaces are implemented implicitly](09_interfaces_implicit.md) - 暗黙的実装
