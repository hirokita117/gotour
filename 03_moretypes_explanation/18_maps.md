# Maps（マップ）

> **ソースコード**: [18_maps.go](../03_moretypes/18_maps.go)

## 概要

マップはキーと値を関連付けます。他の言語では「辞書」「ハッシュマップ」「連想配列」とも呼ばれます。

## コード解説

```go
var m map[string]Vertex
```

`string` をキー、`Vertex` を値とするマップを宣言。この時点では `nil` マップです。

```go
m = make(map[string]Vertex)
```

`make` 関数でマップを初期化します。nil マップには書き込みができないため、必ず初期化が必要です。

```go
m["Bell Labs"] = Vertex{40.68433, -74.39967}
```

キー `"Bell Labs"` に `Vertex` 構造体を関連付けています。

```go
fmt.Println(m["Bell Labs"])
```

キーを使って値を取得しています。

## ポイント

- `map[KeyType]ValueType` がマップの型
- マップのゼロ値は `nil`
- nil マップには要素を追加できない
- `make(map[KeyType]ValueType)` で初期化が必要
- キーには比較可能な型（`==` が使える型）のみ使用可能
- スライスはキーとして使用できない

## 参考

- [A Tour of Go - Maps](https://go.dev/tour/moretypes/19)

## 実行方法

```bash
go run 03_moretypes/18_maps.go
```

---

## ナビゲーション

← 前: [Exercise: Slices](17_exercise_slices.md) | 次: [Map literals](19_map_literals.md) →

### 関連トピック
- [Map literals](19_map_literals.md) - マップリテラル
- [Mutating Maps](21_mutating_maps.md) - マップの操作
