# Exported Names（エクスポートされた名前）

## 概要

Go では、大文字で始まる名前は外部パッケージからアクセス可能（エクスポートされている）です。小文字で始まる名前はパッケージ内部でのみ使用できます。

## コード解説

```go
fmt.Println(math.Pi)
```
- `Pi` は大文字で始まるため、`math` パッケージからエクスポートされている
- `math.pi`（小文字）で参照しようとするとエラーになる

## エクスポートの例

```go
math.Pi    // ✓ エクスポートされている（大文字始まり）
math.pi    // ✗ エクスポートされていない（小文字始まり）

fmt.Println  // ✓ エクスポートされている
fmt.println  // ✗ エクスポートされていない
```

## ポイント

- **大文字で始まる = public**（他のパッケージから見える）
- **小文字で始まる = private**（パッケージ内部のみ）
- これは変数、関数、型、定数すべてに適用される
- `public` や `private` キーワードの代わりに命名規則で制御するのが Go の特徴

## 参考

- [A Tour of Go - Exported names](https://go.dev/tour/basics/3)

## 実行方法

```bash
go run 01_basics/exported_names.go
```
