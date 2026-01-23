# Slices are like references to arrays（スライスは配列への参照）

> **ソースコード**: [07_slices_are_like_references.go](../03_moretypes/07_slices_are_like_references.go)

## 概要

スライスはデータを格納しません。元の配列の一部分を指し示すだけです。スライスの要素を変更すると、元の配列の対応する要素も変更されます。

## コード解説

```go
names := [4]string{"John", "Paul", "George", "Ringo"}
```

4つの要素を持つ配列を作成しています。

```go
a := names[0:2]  // ["John", "Paul"]
b := names[1:3]  // ["Paul", "George"]
```

同じ配列から2つのスライスを作成しています。`a` と `b` は `names[1]`（"Paul"）を共有しています。

```go
b[0] = "XXX"
```

`b[0]` は `names[1]` を指しているので、この変更は `names[1]` を変更します。

結果として、`a`、`b`、`names` すべてに変更が反映されます。

## ポイント

- スライスは元の配列への「ビュー」または「ウィンドウ」
- 同じ配列を参照する複数のスライスは、データを共有する
- スライスを通じた変更は元の配列に反映される
- この動作はバグの原因になりやすいので注意が必要
- 独立したコピーが必要な場合は `copy()` 関数を使う

## 参考

- [A Tour of Go - Slices are like references to arrays](https://go.dev/tour/moretypes/8)

## 実行方法

```bash
go run 03_moretypes/07_slices_are_like_references.go
```

---

## ナビゲーション

← 前: [Slices](06_slices.md) | 次: [Slice literals](08_slice_literals.md) →

### 関連トピック
- [Slices](06_slices.md) - スライスの基本
- [Pointers](00_pointers.md) - 参照の概念
