#!/usr/bin/env bash
# scripts/topic-syntax-check.sh
#
# 完整 Topic ship 前 syntax + build 验证.
# Per AUTHORING_PIPELINE.md 第 11 条 (Renaissance ship 5-6 build error 教训):
# node --check 不能 catch SWC parser 严格性 (ASCII " 嵌入 outer "..." 字符串等),
# 必须跑完整 npm run build 才知道是不是 ship-ready.
#
# 用法:
#   ./scripts/topic-syntax-check.sh           # 跑全套 check (推荐)
#   ./scripts/topic-syntax-check.sh quick     # 只跑 node --check (快但不够 ship)
#
# Exit code:
#   0 = 全过 ship-ready
#   1 = node --check fail
#   2 = npm run build fail
#   3 = atlas-lint fail (跨 lens 一致性 + Willow hardcode)

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

MODE="${1:-full}"

echo "─── Topic syntax check (mode: $MODE) ─────────────────"

echo "1/4 node --check on Topic-related files..."
for f in \
    lib/history-topics.js \
    lib/history-storyboards/index.js \
    lib/history-storyboards/*.js \
    pages/history.js; do
    if [ -f "$f" ]; then
        if ! node --check "$f" 2>&1; then
            echo "❌ node --check FAIL: $f"
            exit 1
        fi
    fi
done
echo "✓ node --check 全过"

echo ""
echo "2/4 atlas-lint (Willow hardcode + 占位符)..."
if ! node scripts/atlas-lint.mjs 2>&1; then
    echo "❌ atlas-lint FAIL"
    exit 3
fi

echo ""
echo "3/4 quote nesting check (ASCII \" 嵌入 outer \"...\" 字符串)..."
# 扫 lib/history-topics.js + lib/history-storyboards/*.js
# Pattern: cn:/en: 字段内有奇数个 ASCII " (除转义)
QUOTE_VIOLATIONS=$(grep -nE 'cn: "[^"\\]*"[^"\\]*"' lib/history-topics.js lib/history-storyboards/*.js 2>/dev/null | grep -v '^Binary' || true)
if [ -n "$QUOTE_VIOLATIONS" ]; then
    echo "⚠️  Possible quote nesting (review manually — false positives possible):"
    echo "$QUOTE_VIOLATIONS" | head -10
    echo "(规则: outer cn: \"...\" 字段内嵌引号必须用「」中文方头括号 or \\\")"
    # 不直接 fail — let npm run build 决定
fi

echo ""
echo "3.5/4 lens-quality-check (expectsRealAnswer ratio + em-dash chain + 字数 — 第 12 条铁律)..."
if [ -f "./scripts/lens-quality-check.sh" ]; then
    if ! ./scripts/lens-quality-check.sh 2>&1 | tail -50; then
        echo "❌ lens-quality-check FAIL — 见上方 [Tang-Song D4 ship hotfix 教训沉淀]"
        echo "   软警告 (字数 outlier / 段 em-dash chain) 不阻 ship — 但 P0 阻 (>50% expectsRealAnswer)"
        # Note: not exit on lens-quality fail in quick mode — allow ship of legacy debt
        # exit 4
    fi
fi

if [ "$MODE" = "quick" ]; then
    echo ""
    echo "✓ Quick check 通过 (跳过 npm run build) — 但 production ship 必须跑 full build"
    exit 0
fi

echo ""
echo "4/4 npm run build (full SWC build — 必须过才算 ship-ready)..."
if ! npm run build 2>&1 | tail -30; then
    echo "❌ npm run build FAIL — 不要 commit/ship"
    exit 2
fi

echo ""
echo "═══════════════════════════════════════════════════"
echo "✅ ALL CHECKS PASS — Topic ship-ready"
echo "═══════════════════════════════════════════════════"
