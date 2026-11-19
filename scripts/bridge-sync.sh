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
AGENTS_MD="$PROJECT_ROOT/AGENTS.md"

if [[ ! -f "$CLAUDE_MD" ]]; then
  echo "ERROR: $CLAUDE_MD not found" >&2
  exit 1
fi

# --- Extract shared sections from CLAUDE.md ---
# Sections to sync: planning, project context, conventions, utilities, architecture, review, and references.

extract_section() {
  local file="$1"
  local header_pattern="$2"
  # Extract from matching header to the next same-level header outside code fences.
  awk -v pat="$header_pattern" '
    BEGIN { found=0; in_fence=0 }
    /^```/ {
      if (found) print
      in_fence = !in_fence
      next
    }
    !in_fence && $0 ~ pat { found=1; next }
    found && !in_fence && /^## / { found=0 }
    found { print }
  ' "$file"
}

SECTION_PLANNING=$(extract_section "$CLAUDE_MD" "^## Task Planning Rules")
SECTION_CONTEXT=$(extract_section "$CLAUDE_MD" "^## Project Context")
SECTION_CONVENTIONS=$(extract_section "$CLAUDE_MD" "^## Coding Conventions")
SECTION_UTILITIES=$(extract_section "$CLAUDE_MD" "^## Available Utilities")
SECTION_ARCH=$(extract_section "$CLAUDE_MD" "^## Key Architecture Decisions")
SECTION_REVIEW=$(extract_section "$CLAUDE_MD" "^## Review Protocol")
SECTION_REFS=$(extract_section "$CLAUDE_MD" "^## Reference Docs")

require_section() {
  local name="$1"
  local content="$2"
  if [[ -z "${content//[[:space:]]/}" ]]; then
    echo "ERROR: required section '$name' not found or empty in $CLAUDE_MD" >&2
    exit 1
  fi
}

require_section "Task Planning Rules" "$SECTION_PLANNING"
require_section "Project Context" "$SECTION_CONTEXT"
require_section "Coding Conventions" "$SECTION_CONVENTIONS"
require_section "Available Utilities" "$SECTION_UTILITIES"
require_section "Key Architecture Decisions" "$SECTION_ARCH"
require_section "Review Protocol" "$SECTION_REVIEW"
require_section "Reference Docs" "$SECTION_REFS"

# --- Build AGENTS.md ---
# Preserve Codex-specific header + task rules, replace shared sections

cat > "$PROJECT_ROOT/AGENTS.md" << 'HEADER'
# VocabSpark / Know U. Learning — Codex Project Config
# Auto-generated shared sections from CLAUDE.md via scripts/bridge-sync.sh
# Manual edits to [SHARED] sections will be overwritten on next sync.

## Task Execution Rules

- Execute one sub-task at a time. Be specific: file path, function name, parameters.
- Check "Available Utilities" below before adding a helper. Add one only when no existing utility fits.
- Run tests after each change if test files exist.

HEADER

{
  echo "## [SHARED] Task Planning Rules"
  echo ""
  echo "$SECTION_PLANNING"
  echo ""
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
  echo "## [SHARED] Review Protocol — When to Escalate"
  echo ""
  echo "$SECTION_REVIEW"
  echo ""
  echo "## Reference Docs"
  echo ""
  echo "$SECTION_REFS"
} >> "$PROJECT_ROOT/AGENTS.md"

echo "bridge-sync: AGENTS.md updated from CLAUDE.md ($(date '+%Y-%m-%d %H:%M'))"
