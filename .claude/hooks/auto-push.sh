#!/bin/bash

# Claude Code Hook: Auto-push Go + MD file pairs
# This hook runs after Write tool execution
# It automatically commits and pushes when a .go/.md pair is complete

set -e

# Read JSON input from stdin
INPUT=$(cat)

# Extract file path from the JSON input using jq
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Exit if no file path
if [ -z "$FILE_PATH" ]; then
    exit 0
fi

# Only process .go and .md files
if [[ ! "$FILE_PATH" =~ \.(go|md)$ ]]; then
    exit 0
fi

# Skip CLAUDE.md and README.md
BASENAME=$(basename "$FILE_PATH")
if [[ "$BASENAME" == "CLAUDE.md" || "$BASENAME" == "README.md" ]]; then
    exit 0
fi

# Get the pair file path
# If FILE_PATH ends with .go, PAIR_PATH ends with .md, and vice versa
if [[ "$FILE_PATH" == *.go ]]; then
    PAIR_PATH="${FILE_PATH%.go}.md"
elif [[ "$FILE_PATH" == *.md ]]; then
    PAIR_PATH="${FILE_PATH%.md}.go"
fi

# Check if pair file exists
if [ ! -f "$PAIR_PATH" ]; then
    exit 0
fi

# Both files exist - proceed with git operations
cd "$(dirname "$FILE_PATH")"

# Get the base name for commit message (without extension)
BASE_NAME=$(basename "${FILE_PATH%.*}")

# Stage both files
git add "$FILE_PATH" "$PAIR_PATH"

# Check if there are staged changes
if git diff --cached --quiet; then
    exit 0
fi

# Commit and push
git commit -m "Add ${BASE_NAME} Go tutorial files

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

git push

echo "Auto-pushed: ${BASE_NAME}.go and ${BASE_NAME}.md"
