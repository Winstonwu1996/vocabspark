#!/usr/bin/env bash
# bridge-sync.sh — Single source → generate shared sections for AGENTS.md
#
# CLAUDE.md is the source of truth for shared project context.
# This script extracts [SHARED] sections and patches AGENTS.md.
#
# Usage: bash scripts/bridge-sync.sh
# Idempotent — safe to run repeatedly.
#
# Design (P1 memory-as-compilation):
#   CLAUDE.md (source) → bridge-sync.sh (compiler) → AGENTS.md (artifact)
#   Shared sections are marked with [SHARED] in AGENTS.md headers.
#   Non-shared sections (e.g., "Task Execution Rules") are Codex-specific and preserved.

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CLAUDE_MD="$PROJECT_ROOT/CLAUDE.md"
AGENTS_MD="$PROJECT_ROOT/AGENTS.MD"

if [[ ! -f "$CLAUDE_MD" ]]; then
  echo "ERROR: $CLAUDE_MD not found" >&2
  exit 1
fi

# --- Extract shared sections from CLAUDE.md ---
# Sections to sync: "Project Context", "Coding Conventions", "Available Utilities", "Key Architecture Decisions"

extract_section() {
  local file="$1"
  local header_pattern="$2"
  # Extract from matching header to next same-level header (##) or EOF
  awk -v pat="$header_pattern" '
    BEGIN { found=0 }
    $0 ~ pat { found=1; next }
    found && /^## / { found=0 }
    found { print }
  ' "$file"
}

SECTION_CONTEXT=$(extract_section "$CLAUDE_MD" "^## Project Context")
SECTION_CONVENTIONS=$(extract_section "$CLAUDE_MD" "^## Coding Conventions")
SECTION_UTILITIES=$(extract_section "$CLAUDE_MD" "^## Available Utilities")
SECTION_ARCH=$(extract_section "$CLAUDE_MD" "^## Key Architecture Decisions")
SECTION_REFS=$(extract_section "$CLAUDE_MD" "^## Reference Docs")

# --- Build AGENTS.md ---
# Preserve Codex-specific header + task rules, replace shared sections

cat > "$PROJECT_ROOT/AGENTS.md" << 'HEADER'
# VocabSpark / Know U. Learning — Codex Project Config
# Auto-generated shared sections from CLAUDE.md via scripts/bridge-sync.sh
# Manual edits to [SHARED] sections will be overwritten on next sync.

## Task Execution Rules

- Execute one sub-task at a time. Be specific: file path, function name, parameters.
- Do NOT invent helper functions. Check "Available Utilities" below first.
- Run tests after each change if test files exist.

HEADER

{
  echo "## [SHARED] Project Context"
  echo ""
  echo "$SECTION_CONTEXT"
  echo ""
  echo "## [SHARED] Coding Conventions"
  echo ""
  echo "$SECTION_CONVENTIONS"
  echo ""
  echo "## [SHARED] Available Utilities (lib/)"
  echo ""
  echo "$SECTION_UTILITIES"
  echo ""
  echo "## [SHARED] Key Architecture Decisions"
  echo ""
  echo "$SECTION_ARCH"
  echo ""
  echo "## Reference Docs"
  echo ""
  echo "$SECTION_REFS"
} >> "$PROJECT_ROOT/AGENTS.md"

echo "bridge-sync: AGENTS.md updated from CLAUDE.md ($(date '+%Y-%m-%d %H:%M'))"
