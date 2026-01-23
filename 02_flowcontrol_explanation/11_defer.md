# Defer

> **ソースコード**: [11_defer.go](../02_flowcontrol/11_defer.go)

## 概要

`defer` 文は、その関数の実行が終わるまで呼び出しを遅延させます。リソースの解放やクリーンアップ処理によく使われます。

## コード解説

```go
func main() {
    defer fmt.Println("world")

    fmt.Println("hello")
}
```

出力：
```
hello
world
```

- `defer` 文は即座に評価されるが、実行は `main` 関数の終了時まで遅延
- 結果として「hello」が先に出力され、「world」は後に出力される

## ポイント

- `defer` の引数は即座に評価される
- 実行は関数の `return` 後（関数が終了する直前）
- リソース解放に最適（ファイル、ロック、接続など）

## 実用例

```go
func readFile(filename string) error {
    f, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer f.Close()  // 関数終了時に必ずファイルを閉じる

    // ファイル処理...
    return nil
}
```

## 参考

- [A Tour of Go - Defer](https://go.dev/tour/flowcontrol/12)

## 実行方法

```bash
go run 02_flowcontrol/11_defer.go
```

---

## ナビゲーション

← 前: [Switch with no condition](10_switch_with_no_condition.md) | 次: [Stacking defers](12_stacking_defers.md) →

### 関連トピック
- [Stacking defers](12_stacking_defers.md) - 複数の defer のスタック
