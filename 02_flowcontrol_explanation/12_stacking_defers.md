# Stacking defers

> **ソースコード**: [12_stacking_defers.go](../02_flowcontrol/12_stacking_defers.go)

## 概要

複数の `defer` 呼び出しはスタック（LIFO: Last In, First Out）に積まれ、関数終了時に逆順で実行されます。

## コード解説

```go
fmt.Println("counting")

for i := 0; i < 10; i++ {
    defer fmt.Println(i)
}

fmt.Println("done")
```

出力：
```
counting
done
9
8
7
6
5
4
3
2
1
0
```

- `defer` 呼び出しがスタックに積まれる（0, 1, 2, ... 9 の順）
- 関数終了時にスタックから取り出される（9, 8, 7, ... 0 の順）

## ポイント

- `defer` は LIFO（後入れ先出し）で実行される
- リソースを取得した順の逆順で解放するのに適している
- `defer` 時点での引数の値が保持される（`i` はループ時点の値）

## 実用例：複数リソースの解放

```go
func process() {
    m.Lock()
    defer m.Unlock()  // 最後に実行される

    f, _ := os.Open("file.txt")
    defer f.Close()   // 先に実行される

    // 処理...
}
// 実行順: f.Close() → m.Unlock()
```

## 参考

- [A Tour of Go - Stacking defers](https://go.dev/tour/flowcontrol/13)

## 実行方法

```bash
go run 02_flowcontrol/12_stacking_defers.go
```

---

## ナビゲーション

← 前: [Defer](11_defer.md)

### 関連トピック
- [Defer](11_defer.md) - defer の基本
- [For](00_for.md) - for ループ
