# CLAUDE.md

このリポジトリは [A Tour of Go](https://go.dev/tour/) を元に Golang を学ぶためのリポジトリです。

## プロジェクト構造

```
gotour/
├── 01_basics/
├── 02_flowcontrol/
├── 03_moretypes/
├── 04_methods/
└── 05_concurrency/
```

各フォルダは A Tour of Go のセクションに対応しています。

## ファイル生成ルール

学習トピックごとに以下の2ファイルをセットで生成すること:

1. **Go ファイル** (`<topic>.go`)
   - 実行可能なサンプルコード
   - `package main` と `func main()` を含める
   - コード内のコメントは最小限に（詳細は md ファイルに記載）

2. **解説ファイル** (`<topic>.md`)
   - 日本語で記述
   - 以下の構成で記載:
     - 概要（このトピックで学ぶこと）
     - コードの解説
     - ポイント・注意点
     - A Tour of Go の該当ページへのリンク
     - 実行方法

### ファイル名の例

```
01_basics/
├── hello_world.go
├── hello_world.md
├── packages.go
├── packages.md
├── imports.go
└── imports.md
```

## 解説ファイル（md）のテンプレート

```markdown
# トピック名

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
go run <filename>.go
\`\`\`
```

## Go ファイルの実行

```bash
# 単一ファイルの実行
go run 01_basics/hello_world.go

# ディレクトリ内で実行
cd 01_basics && go run hello_world.go
```
