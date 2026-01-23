# Map literals（マップリテラル）

> **ソースコード**: [19_map_literals.go](../03_moretypes/19_map_literals.go)

## 概要

マップリテラルは構造体リテラルに似ていますが、キーが必要です。

## コード解説

```go
var m = map[string]Vertex{
    "Bell Labs": Vertex{
        40.68433, -74.39967,
    },
    "Google": Vertex{
        37.42202, -122.08408,
    },
}
```

マップリテラルを使って、宣言と同時にマップを初期化しています。

各要素は `キー: 値` の形式で記述します。キーと値のペアはカンマで区切ります。

## ポイント

- マップリテラルの形式: `map[KeyType]ValueType{key1: value1, key2: value2}`
- 最後の要素の後にもカンマが必要（Go のスタイル）
- `make` を使わずに初期化できる
- リテラルで作成したマップは nil ではない

## 参考

- [A Tour of Go - Map literals](https://go.dev/tour/moretypes/20)

## 実行方法

```bash
go run 03_moretypes/19_map_literals.go
```

---

## ナビゲーション

← 前: [Maps](18_maps.md) | 次: [Map literals continued](20_map_literals_continued.md) →

### 関連トピック
- [Maps](18_maps.md) - マップの基本
- [Struct Literals](04_struct_literals.md) - 構造体リテラル
