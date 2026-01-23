# Map literals continued（マップリテラルの続き）

> **ソースコード**: [20_map_literals_continued.go](../03_moretypes/20_map_literals_continued.go)

## 概要

マップリテラルで、トップレベルの型が型名だけの場合、リテラル要素から型名を省略できます。

## コード解説

```go
var m = map[string]Vertex{
    "Bell Labs": {40.68433, -74.39967},
    "Google":    {37.42202, -122.08408},
}
```

前のトピックでは `Vertex{40.68433, -74.39967}` と書いていましたが、マップの値の型が `Vertex` であることはわかっているので、`Vertex` を省略して `{40.68433, -74.39967}` と書けます。

## 比較

```go
// 省略なし
"Bell Labs": Vertex{40.68433, -74.39967},

// 省略あり（より簡潔）
"Bell Labs": {40.68433, -74.39967},
```

## ポイント

- 型が文脈から推論できる場合は型名を省略可能
- コードがより簡潔で読みやすくなる
- スライスリテラルや構造体リテラルでも同様に省略可能
- Go コンパイラは型推論により正しい型を判断する

## 参考

- [A Tour of Go - Map literals continued](https://go.dev/tour/moretypes/21)

## 実行方法

```bash
go run 03_moretypes/20_map_literals_continued.go
```

---

## ナビゲーション

← 前: [Map literals](19_map_literals.md) | 次: [Mutating Maps](21_mutating_maps.md) →

### 関連トピック
- [Map literals](19_map_literals.md) - マップリテラル
- [Struct Literals](04_struct_literals.md) - 構造体リテラル
