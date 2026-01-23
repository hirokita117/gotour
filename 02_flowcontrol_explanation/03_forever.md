# Forever（無限ループ）

> **ソースコード**: [03_forever.go](../02_flowcontrol/03_forever.go)

## 概要

`for` ループの条件式を省略すると、無限ループになります。

## コード解説

```go
for {
    // 処理
}
```

条件式が省略されると、常に `true` として扱われ、ループは永遠に続きます。

## ポイント

- 条件式を省略 = 無限ループ
- サーバーやデーモンプログラムでよく使われるパターン
- ループを抜けるには `break` 文や `return` 文を使用
- 実行時は `Ctrl+C` で強制終了できる

## 実用例

```go
for {
    conn, err := listener.Accept()
    if err != nil {
        break
    }
    go handleConnection(conn)
}
```

## 参考

- [A Tour of Go - Forever](https://go.dev/tour/flowcontrol/4)

## 実行方法

```bash
# 注意: このコードは無限ループなので、実行すると止まりません
# Ctrl+C で終了してください
go run 02_flowcontrol/03_forever.go
```

---

## ナビゲーション

← 前: [For is Go's "while"](02_for_is_gos_while.md) | 次: [If](04_if.md) →

### 関連トピック
- [For](00_for.md) - 基本的な for ループ
- [For is Go's "while"](02_for_is_gos_while.md) - while 相当の書き方
