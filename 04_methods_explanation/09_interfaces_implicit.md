# Interfaces are implemented implicitly（インターフェースは暗黙的に実装される）

> **ソースコード**: [09_interfaces_implicit.go](../04_methods/09_interfaces_implicit.go)

## 概要

Go では、インターフェースの実装を明示的に宣言する必要はありません。型がインターフェースのメソッドをすべて実装していれば、自動的にそのインターフェースを実装したことになります。

## コード解説

```go
type I interface {
	M()
}

type T struct {
	S string
}

func (t T) M() {
	fmt.Println(t.S)
}
```

- `T` 型は `M()` メソッドを持っています
- `I` インターフェースも `M()` メソッドを要求しています
- したがって `T` は暗黙的に `I` を実装しています
- `implements` のようなキーワードは不要です

## ポイント

- Go のインターフェースは暗黙的に実装される（duck typing）
- 「もしアヒルのように歩き、アヒルのように鳴くなら、それはアヒルである」
- 明示的な宣言が不要なため、インターフェースと実装を別のパッケージで定義できる
- 小さなインターフェースを定義しやすい設計になっている

## 参考

- [A Tour of Go - Interfaces are implemented implicitly](https://go.dev/tour/methods/10)

## 実行方法

```bash
go run 04_methods/09_interfaces_implicit.go
```

---

## ナビゲーション

← 前: [Interfaces](08_interfaces.md) | 次: [Interface values](10_interface_values.md) →

### 関連トピック
- [Interfaces](08_interfaces.md) - インターフェースの基本
- [Methods](00_methods.md) - メソッドの定義
