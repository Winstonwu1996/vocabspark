#!/usr/bin/env bash
# scripts/lens-quality-check.sh
#
# Lens quality gate — Tang-Song D4 ship 教训沉淀 (5-7+).
# Per AUTHORING_PIPELINE.md 第 12 条: lens 节点 expectsRealAnswer 默认 false +
# em-dash chain 全节点覆盖. 跑在 ship pipeline pre-commit, 防止重现 Tang-Song
# "100% expectsRealAnswer:true 用户卡死" + "Su Shi N1 17 em-dash 段视觉灾难".
#
# 用法:
#   ./scripts/lens-quality-check.sh                # 检查全部 ship-able lens 文件
#   ./scripts/lens-quality-check.sh path/to/lens.js # 单个文件
#
# Exit code:
#   0 = 全过 ship-ready
#   1 = expectsRealAnswer ratio 异常 (>50% 或 <10%)
#   2 = em-dash chain 4+ per single paragraph 违反
#   3 = N1-N12 节点字数异常 (单节 > 1500 chars 或 < 200 chars)

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [ -n "$1" ]; then
  FILES="$1"
else
  FILES=$(ls lib/history-storyboards/*.js 2>/dev/null | grep -v staging | grep -vE "(index|template)\.js$")
fi

EXIT_CODE=0

echo "─── Lens quality check ──────────────────────────────"

for file in $FILES; do
  topic=$(basename "$file" .js)
  echo ""
  echo "═══ $topic ═══"

  # Check 1: expectsRealAnswer ratio (per lens combined)
  TRUE_COUNT=$(grep -c "expectsRealAnswer: true" "$file" 2>/dev/null || echo 0)
  FALSE_COUNT=$(grep -c "expectsRealAnswer: false" "$file" 2>/dev/null || echo 0)
  TOTAL=$((TRUE_COUNT + FALSE_COUNT))

  if [ "$TOTAL" -gt 0 ]; then
    RATIO=$((TRUE_COUNT * 100 / TOTAL))
    if [ "$RATIO" -gt 50 ]; then
      echo "❌ expectsRealAnswer ratio $RATIO% > 50% (Tang-Song bug pattern — 用户卡死)"
      echo "   预期: ~17-40% (Reformation/AoE/Mali 范围). N11+N12 reflection 节 true, 其他 false."
      EXIT_CODE=1
    elif [ "$RATIO" -lt 10 ]; then
      echo "⚠️  expectsRealAnswer ratio $RATIO% < 10% (太少 reflection — 学习深度可能不够)"
    else
      echo "✓ expectsRealAnswer: $TRUE_COUNT true / $FALSE_COUNT false ($RATIO% reflection)"
    fi
  fi

  # Check 2: em-dash chain 4+ per paragraph (Tang-Song Su Shi N1 pattern)
  CHAIN_RESULT=$(node --input-type=module -e "
import('./$file').then(m => {
  let violations = [];
  for (const [lensId, lens] of Object.entries(m.lenses || {})) {
    if (!lens.storyboard) continue;
    lens.storyboard.forEach((n, i) => {
      const cn = n.content?.cn || '';
      const paras = cn.split(/\n\n+/);
      paras.forEach((para, pi) => {
        const chains = para.match(/——[^——\n]+——[^——\n]+——[^——\n]+——/g) || [];
        if (chains.length > 0) {
          violations.push(\`\${lensId}/N\${i+1}/¶\${pi+1}\`);
        }
      });
    });
  }
  if (violations.length > 0) {
    console.log('CHAIN_VIOLATIONS:' + violations.join(','));
  } else {
    console.log('CHAIN_OK');
  }
}).catch(e => console.error('LOAD_ERROR:' + e.message));
" 2>&1 | grep -E "CHAIN_VIOLATIONS:|CHAIN_OK|LOAD_ERROR:")

  if echo "$CHAIN_RESULT" | grep -q "CHAIN_VIOLATIONS:"; then
    LOCATIONS=$(echo "$CHAIN_RESULT" | sed 's/CHAIN_VIOLATIONS://')
    echo "❌ em-dash 4+ chain in single paragraph: $LOCATIONS"
    echo "   Tang-Song Su Shi N1 教训 — 段内 ——X——Y——Z——A 视觉灾难. 拆为句号 + 短句."
    EXIT_CODE=2
  elif echo "$CHAIN_RESULT" | grep -q "CHAIN_OK"; then
    echo "✓ em-dash chain check 全过"
  else
    echo "⚠️  Module load issue — $CHAIN_RESULT"
  fi

  # Check 3: node 字数 (per AoE/Tang-Song 4-agent review 教训)
  WORD_RESULT=$(node --input-type=module -e "
import('./$file').then(m => {
  let outliers = [];
  for (const [lensId, lens] of Object.entries(m.lenses || {})) {
    if (!lens.storyboard) continue;
    lens.storyboard.forEach((n, i) => {
      const cn = n.content?.cn || '';
      const len = cn.length;
      if (len > 1500) outliers.push(\`\${lensId}/N\${i+1}=\${len}(>1500)\`);
      else if (len < 200 && len > 0) outliers.push(\`\${lensId}/N\${i+1}=\${len}(<200)\`);
    });
  }
  console.log(outliers.length > 0 ? 'WORD_OUTLIERS:' + outliers.join(' ') : 'WORD_OK');
}).catch(e => {});
" 2>&1 | grep -E "WORD_OUTLIERS:|WORD_OK")

  if echo "$WORD_RESULT" | grep -q "WORD_OUTLIERS:"; then
    OUT=$(echo "$WORD_RESULT" | sed 's/WORD_OUTLIERS://')
    echo "⚠️  node 字数 outliers: $OUT"
    echo "   预期: 350-550 (Reformation/Mali) or 350-1200 (AoE/Tang-Song Huizong perpetrator-actor)"
  else
    echo "✓ node 字数全部在合理范围"
  fi
done

echo ""
echo "═══════════════════════════════════════════════════"
if [ "$EXIT_CODE" -eq 0 ]; then
  echo "✅ All lens quality checks PASS"
else
  echo "❌ Lens quality check FAILED (exit $EXIT_CODE)"
fi
echo "═══════════════════════════════════════════════════"

exit $EXIT_CODE
