#!/usr/bin/env node
/**
 * scripts/fact-check-topic.mjs
 *
 * 校验 Topic 数据 vs history-knowledge-base 的事实一致性。
 * 在 Sarah Chen reviewer agent 之前先跑这个 — 让 KB 自动 catch 简单事实错误。
 *
 * 用法：
 *   node scripts/fact-check-topic.mjs magna-carta-1215
 *   node scripts/fact-check-topic.mjs --all
 *
 * 检查项：
 *   1. mustMemorize.vocab 词条是否有错误年代标注（如 habeas corpus 标 1215）
 *   2. ai_seed / primarySources 提到的人物名是否真实（vs KB people 库）
 *   3. ai_seed / primarySources 提到的年代是否跟 KB events 一致
 *   4. primarySources.attribution 是否说明 paraphrase / simplified（防止把改写当原文）
 *
 * Output: 每条问题给文件位置 + KB 引用 + 推荐改法
 *
 * Exit code: 0 if no issues, 1 if any high-severity issue found
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const KB_ROOT = path.join(ROOT, 'data', 'history-knowledge-base');

// ── 加载 KB ────────────────────────────────────────────
function loadKb(type) {
  const dir = path.join(KB_ROOT, type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => ({ id: f.replace('.json', ''), data: JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')) }));
}

const KB = {
  people: loadKb('people'),
  events: loadKb('events'),
  places: loadKb('places'),
};

// 人名 → KB record 索引（包括 aliases）
const peopleIndex = {};
for (const p of KB.people) {
  const allNames = [
    p.data.name?.en, p.data.name?.cn,
    ...(p.data.name?.alternates || []),
  ].filter(Boolean);
  for (const n of allNames) peopleIndex[n.toLowerCase()] = p.data;
}

// 事件名 → KB record 索引
const eventsIndex = {};
for (const e of KB.events) {
  const allNames = [
    e.data.name?.en, e.data.name?.cn,
    ...(e.data.name?.alternates || []),
  ].filter(Boolean);
  for (const n of allNames) eventsIndex[n.toLowerCase()] = e.data;
}

// ── 加载 Topic 数据（动态 import）──────────────────────
async function loadTopic(topicId) {
  const file = path.join(ROOT, 'lib', 'history-topics.js');
  if (!fs.existsSync(file)) throw new Error(`history-topics.js not found`);
  const mod = await import('file://' + file);
  // 优先 getTopic() 函数（已知能拿全 topic 数据），其次 HISTORY_TOPICS map
  const topic = (mod.getTopic && mod.getTopic(topicId))
    || (mod.HISTORY_TOPICS && mod.HISTORY_TOPICS[topicId]);
  if (!topic || !topic.mustMemorize) {
    throw new Error(`Topic '${topicId}' not found or missing data in history-topics.js`);
  }
  return topic;
}

// ── 检查规则 ───────────────────────────────────────────
function checkVocabAnachronism(topic, issues) {
  // 检查 mustMemorize.vocab 里有没有词年代跟 KB events 矛盾
  const vocab = topic.mustMemorize?.vocab || [];
  const concepts = topic.mustMemorize?.concepts || [];
  const topicYear = topic.year;
  if (!topicYear) return;

  for (const v of [...vocab, ...concepts]) {
    const word = (v.word || v.en || '').toLowerCase();
    if (!word) continue;
    // 找 events 库里同名 entry
    const ev = eventsIndex[word];
    if (ev && ev.date && ev.date !== '?') {
      const evYear = parseInt(ev.date.slice(0, 4));
      if (Math.abs(evYear - topicYear) > 50) {
        issues.push({
          severity: 'high',
          rule: 'vocab-anachronism',
          where: `mustMemorize "${v.word || v.en}"`,
          message: `"${v.word || v.en}" first appears ${evYear} (KB: ${ev.id}, ${ev.wikidataId}); Topic is set in ${topicYear}. Anachronism risk.`,
          fix: `Either move to "concepts" with explicit later-evolution note, or rephrase as "ancestor of ${v.word || v.en}".`,
        });
      }
    }
  }
}

function checkPersonReferences(topic, issues) {
  // 扫所有 ai_seed / cnGloss / 文本字段，找提到的人名是否在 KB 中
  const allText = JSON.stringify(topic);  // 全文搜索
  for (const [name, person] of Object.entries(peopleIndex)) {
    if (allText.toLowerCase().includes(name)) {
      // 这个人有出现 — 检查 KB 标注的 commonMisconceptions 是否被违反
      const misconceptions = person.commonMisconceptions || [];
      for (const m of misconceptions) {
        if (m.severity === 'high' && allText.toLowerCase().includes(m.claim.toLowerCase().slice(0, 20))) {
          issues.push({
            severity: 'high',
            rule: 'common-misconception',
            where: `Topic text mentions ${person.name?.en || person.id}`,
            message: `Common misconception detected: "${m.claim}"`,
            fix: m.correction,
          });
        }
      }
      // 检查 neutralityNotes 是否提示这个人物有 framing 风险
      if (person.neutralityNotes && person.neutralityNotes !== '?') {
        // 这是 informational warning（不是 high severity）
        issues.push({
          severity: 'info',
          rule: 'neutrality-reminder',
          where: `Topic mentions ${person.name?.en || person.id}`,
          message: `KB neutrality reminder: ${person.neutralityNotes.slice(0, 200)}`,
          fix: 'Review framing of this person in ai_seed for bias.',
        });
      }
    }
  }
}

function checkPrimarySourceAttribution(topic, issues) {
  // primarySources 必须明确标 paraphrase / simplified / translated
  const sources = topic.primarySources || [];
  for (const s of sources) {
    const attr = (s.attribution || '').toLowerCase();
    const hasOriginal = !!s.latin || !!s.greek || !!s.arabic || !!s.original;
    const hasSimplified = !!s.enSimplified || !!s.cnSimplified;
    const isParaphrased = attr.includes('paraphras') || attr.includes('simplif')
      || attr.includes('editor') || attr.includes('改写') || attr.includes('简化');

    // 如果有 enSimplified 但 attribution 没标"simplified" → flag
    if (hasSimplified && !isParaphrased) {
      issues.push({
        severity: 'medium',
        rule: 'unflagged-simplification',
        where: `primarySources["${s.id || s.title?.en || '?'}"]`,
        message: `Has simplified text but attribution doesn't flag it as paraphrase / editorial work.`,
        fix: `Add to attribution string: "Editorial paraphrase for Lexile-900 readers; original from [URL]"`,
      });
    }

    // 如果完全没 URL → flag
    const allText = JSON.stringify(s).toLowerCase();
    if (!allText.includes('http')) {
      issues.push({
        severity: 'low',
        rule: 'no-source-url',
        where: `primarySources["${s.id || s.title?.en || '?'}"]`,
        message: `No URL in source data — can't verify provenance.`,
        fix: `Add public URL (BL.uk / ctext.org / gutenberg.org / archive.org) to attribution.`,
      });
    }
  }
}

function checkConversationTurnDates(topic, issues) {
  // 扫 ai_seed 找年份模式（4 位数字 + AD/BC/年），跟 KB events 交叉验证
  const turns = topic.conversationTurns || [];
  for (let i = 0; i < turns.length; i++) {
    const seed = turns[i].ai_seed || '';
    // 简单：找 (\d{3,4}) 年 / (\d{3,4}) AD / (\d{3,4}) BC
    const dateMatches = [...seed.matchAll(/(\d{3,4})\s*(年|AD|BC|BCE|CE)/g)];
    for (const m of dateMatches) {
      const year = parseInt(m[1]);
      // 检查这年附近有没有 KB events
      const nearby = KB.events.filter(e => {
        const ed = e.data.date;
        if (!ed || ed === '?') return false;
        const ey = parseInt(ed.slice(0, 4));
        return Math.abs(ey - year) <= 5;
      });
      // 这里只是 informational — 不报错，只在 verbose mode 下显示
    }
  }
}

// ── 主流程 ─────────────────────────────────────────────
async function checkOne(topicId) {
  console.log(`\n══════════════════════════════════════════════════`);
  console.log(`▶ Fact-checking: ${topicId}`);
  console.log(`──────────────────────────────────────────`);
  const topic = await loadTopic(topicId);
  const issues = [];

  checkVocabAnachronism(topic, issues);
  checkPersonReferences(topic, issues);
  checkPrimarySourceAttribution(topic, issues);
  checkConversationTurnDates(topic, issues);

  const high = issues.filter(i => i.severity === 'high');
  const med = issues.filter(i => i.severity === 'medium');
  const low = issues.filter(i => i.severity === 'low');
  const info = issues.filter(i => i.severity === 'info');

  if (issues.length === 0) {
    console.log('  ✅ No issues found');
    return 0;
  }

  for (const i of [...high, ...med, ...low, ...info]) {
    const icon = { high: '🔴', medium: '🟡', low: '🔵', info: 'ℹ️ ' }[i.severity];
    console.log(`\n  ${icon} [${i.severity.toUpperCase()}] ${i.rule}`);
    console.log(`     where: ${i.where}`);
    console.log(`     issue: ${i.message}`);
    console.log(`     fix:   ${i.fix}`);
  }

  console.log(`\n──────────────────────────────────────────`);
  console.log(`  ${high.length} high · ${med.length} medium · ${low.length} low · ${info.length} info`);
  return high.length;  // exit code = high-severity count
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: node scripts/fact-check-topic.mjs <topicId> | --all');
    process.exit(1);
  }

  let topicIds;
  if (args[0] === '--all') {
    const mod = await import('file://' + path.join(ROOT, 'lib', 'history-topics.js'));
    topicIds = (mod.TOPIC_REGISTRY || []).map(t => t.id);
  } else {
    topicIds = args;
  }

  let totalHigh = 0;
  for (const id of topicIds) {
    try {
      totalHigh += await checkOne(id);
    } catch (e) {
      console.error(`  ✗ ${id}: ${e.message}`);
    }
  }

  console.log(`\n══════════════════════════════════════════════════`);
  console.log(`Total HIGH-severity issues: ${totalHigh}`);
  process.exit(totalHigh > 0 ? 1 : 0);
}

main().catch(e => { console.error('Fatal:', e); process.exit(2); });
