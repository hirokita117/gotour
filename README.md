# gotour

[A Tour of Go](https://go.dev/tour/) を元に Golang を学ぶためのリポジトリです。

## プロジェクト構造

```
gotour/
├── 01_basics/                # 基本構文（パッケージ、変数、関数など）
├── 01_basics_explanation/    # 基本構文の解説
├── 01_basics_learning/       # 学習メモ（自動生成）
├── 02_flowcontrol/           # フロー制御（for、if、switch など）
├── 02_flowcontrol_explanation/
├── 02_flowcontrol_learning/
├── 03_moretypes/             # 型（ポインタ、構造体、スライス、マップなど）
├── 03_moretypes_explanation/
├── 03_moretypes_learning/
├── 04_methods/               # メソッドとインターフェース
├── 04_methods_explanation/
├── 04_methods_learning/
├── 05_concurrency/           # 並行処理（goroutine、channel、sync など）
├── 05_concurrency_explanation/
└── 05_concurrency_learning/
```

各セクションは A Tour of Go の章立てに対応しています。

- **Go ファイル** (`XX_section/`): 実行可能なサンプルコード
- **解説ファイル** (`XX_section_explanation/`): 日本語による詳細な解説
- **学習メモ** (`XX_section_learning/`): `/ask-about-topic` コマンドで生成される個人の学習ノート

## 使い方

### 推奨: Cursor エディタでの学習

このリポジトリは **Cursor エディタ**での学習を推奨しています。Cursor を使うと、AI アシスタントに質問しながらインタラクティブに学習できます。

#### `/ask-about-topic` コマンド

解説ファイルを読んでいて分からないことがあれば、Cursor の `/ask-about-topic` コマンドで質問できます。

1. 解説ファイル（`*_explanation/*.md`）を開く
2. `/ask-about-topic` コマンドを実行
3. 質問を入力すると、詳細な回答が得られる
4. 回答は `*_learning/` ディレクトリに学習メモとして自動保存される

```
04_methods_explanation/18_errors.md を開いて質問
  ↓
04_methods_learning/18_errors.md に学習メモが生成される
```

#### 学習ディレクトリ (`*_learning/`)

`/ask-about-topic` コマンドで質問した内容と回答は、対応する学習ディレクトリに自動保存されます。

- 質問ごとに学習メモが追記されていく
- 後から復習する際に便利
- 自分だけの学習ノートとして活用できる

### 基本的な学習の進め方

1. 各セクションの解説ファイル（`*_explanation/*.md`）を読む
2. 対応する Go ファイルを確認・実行する
3. 分からないことは `/ask-about-topic` で質問する
4. コードを変更して動作を確認する

ファイル名の先頭の番号は A Tour of Go の順序に対応しているため、番号順に進めると効率的です。

### Go ファイルの実行

```bash
# 単一ファイルの実行
go run 01_basics/00_hello_world.go

# ディレクトリ内で実行
cd 01_basics && go run 00_hello_world.go
```

## 各セクションの内容

| セクション | 内容 |
|------------|------|
| 01_basics | パッケージ、インポート、変数、定数、関数、型 |
| 02_flowcontrol | for、if、switch、defer |
| 03_moretypes | ポインタ、構造体、配列、スライス、マップ |
| 04_methods | メソッド、インターフェース、型アサーション |
| 05_concurrency | goroutine、channel、select、sync |

## 参考

- [A Tour of Go](https://go.dev/tour/) - 公式チュートリアル
- [Go Documentation](https://go.dev/doc/) - 公式ドキュメント
