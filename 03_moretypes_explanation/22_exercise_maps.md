# Exercise: Maps（演習: マップ）

> **ソースコード**: [22_exercise_maps.go](../03_moretypes/22_exercise_maps.go)

## 概要

文字列内の各単語の出現回数をカウントする `WordCount` 関数を実装する演習です。

## コード解説

```go
func WordCount(s string) map[string]int {
    words := strings.Fields(s)
    counts := make(map[string]int)
    for _, word := range words {
        counts[word]++
    }
    return counts
}
```

1. `strings.Fields(s)` で文字列を空白で分割してスライスにする
2. `make(map[string]int)` で単語をカウントするマップを作成
3. 各単語に対してカウントをインクリメント
4. マップを返す

## ポイント

- `strings.Fields()` は空白文字（スペース、タブ、改行など）で文字列を分割
- `counts[word]++` はキーが存在しない場合でも動作する（ゼロ値 0 からインクリメント）
- マップは参照型なので、関数から返しても問題なく使える

## `counts[word]++` の動作

```go
counts[word]++
```

この1行は以下と同じ意味です：

```go
counts[word] = counts[word] + 1
```

キーが存在しない場合、`counts[word]` はゼロ値（`int` なので 0）を返すため、結果として 1 になります。

## 注意

このコードを実行するには `golang.org/x/tour/wc` パッケージが必要です：

```bash
go get golang.org/x/tour/wc
```

## 参考

- [A Tour of Go - Exercise: Maps](https://go.dev/tour/moretypes/23)

## 実行方法

```bash
go run 03_moretypes/22_exercise_maps.go
```

---

## ナビゲーション

← 前: [Mutating Maps](21_mutating_maps.md) | 次: [Function values](23_function_values.md) →

### 関連トピック
- [Mutating Maps](21_mutating_maps.md) - マップの操作
- [Range](15_range.md) - range でスライスを反復
