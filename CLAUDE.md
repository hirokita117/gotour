# CLAUDE.md

このリポジトリは [A Tour of Go](https://go.dev/tour/) を元に Golang を学ぶためのリポジトリです。

## プロジェクト構造

```
gotour/
├── 01_basics/                # Go ソースコード
├── 01_basics_explanation/    # 解説ファイル（md）
├── 02_flowcontrol/
├── 02_flowcontrol_explanation/
├── 03_moretypes/
├── 03_moretypes_explanation/
├── 04_methods/
├── 04_methods_explanation/
├── 05_concurrency/
└── 05_concurrency_explanation/
```

各セクションは A Tour of Go に対応し、Go ファイルと解説ファイルは別ディレクトリに分離されています。

## ファイル生成ルール

学習トピックごとに以下の2ファイルをセットで生成すること:

1. **Go ファイル** (`<セクション>/<番号>_<topic>.go`)
   - 実行可能なサンプルコード
   - `package main` と `func main()` を含める
   - コード内のコメントは最小限に（詳細は md ファイルに記載）
   - ファイル名の先頭に2桁の番号をつける（A Tour of Go の順序に対応）

2. **解説ファイル** (`<セクション>_explanation/<番号>_<topic>.md`)
   - 日本語で記述
   - 以下の構成で記載:
     - 概要（このトピックで学ぶこと）
     - コードの解説
     - ポイント・注意点
     - A Tour of Go の該当ページへのリンク
     - 実行方法
     - ナビゲーション（前後リンクと関連トピック）

### ファイル名の例

```
01_basics/                     # Go ソースコード
├── 00_hello_world.go
├── 01_packages.go
└── 02_imports.go

01_basics_explanation/         # 解説ファイル
├── 00_hello_world.md
├── 01_packages.md
└── 02_imports.md
```

番号は A Tour of Go の学習順序に対応しており、復習時に順番がわかりやすくなっています。

## 解説ファイル（md）のテンプレート

```markdown
# トピック名

> **ソースコード**: [<番号>_<topic>.go](../<セクション>/<番号>_<topic>.go)

## 概要

このセクションで学ぶ内容の簡潔な説明。

## コード解説

コードの各部分の詳細な説明。

## ポイント

- 重要なポイント1
- 重要なポイント2

## 参考

- [A Tour of Go - トピック名](https://go.dev/tour/xxx/n)

## 実行方法

\`\`\`bash
go run 01_basics/<番号>_<topic>.go
\`\`\`

---

## ナビゲーション

← 前: [前のトピック名](前のファイル.md) | 次: [次のトピック名](次のファイル.md) →

### 関連トピック
- [関連トピック1](ファイル.md) - 簡単な説明
- [関連トピック2](ファイル.md) - 簡単な説明
```

### ナビゲーションのルール

- **前後リンク**: 番号順に前後のファイルへリンク
  - 最初のファイル（00）: 「前」なし、「次」のみ
  - 最後のファイル: 「前」のみ、「次」なし
- **関連トピック**: 内容的に関連する2〜3個のトピックを選定
  - 同じセクション内のファイルを優先
  - 概念的に関連するものを選ぶ

## Go ファイルの実行

```bash
# 単一ファイルの実行
go run 01_basics/00_hello_world.go

# ディレクトリ内で実行
cd 01_basics && go run 00_hello_world.go
```
