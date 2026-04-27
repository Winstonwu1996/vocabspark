#!/usr/bin/env node
/**
 * Atlas data validator
 *
 * 在每次提交前运行，确认所有 sourceName 在对应的 yearSnapshot 文件里存在。
 * 防止 silent bug：拼错名字 → 多边形不渲染 → 没人发现。
 *
 * 用法：node scripts/validate-atlas.mjs
 *   exit 0 = 全部通过
 *   exit 1 = 有问题，CI 应该卡住
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// 同步加载（构建脚本不用 ESM 热加载）
const { POLITIES, ISO_NUM } = await import(path.join(ROOT, 'data/atlas/polities.js'));
const { CIVILIZATIONS } = await import(path.join(ROOT, 'data/atlas/civilizations.js'));
const { EVENTS } = await import(path.join(ROOT, 'data/atlas/events.js'));
const { FEATURES } = await import(path.join(ROOT, 'data/atlas/features.js'));

// 已知 polity / civ 集 → year snapshot 映射
const POLITY_TO_YEAR = {
  'east-asia-1000':       'world_1000',
  'east-asia-100ad':      'world_100',
  'classical-bc500':      'world_bc500',
  'eurasia-117ad':        'world_100',
  'europe-1215':          'world_1200',
  'mongol-1241':          'world_1200',
  'eurasia-1347':         'world_1300',
  'renaissance-1500':     'world_1500',
  'reformation-1517':     'world_1530',
  'north-america-1776':   'world_1783',
  'constitution-1787':    'world_1783',
  'north-america-1865':   'world_1880',
  'industrial-1880':      'world_1880',
  'ancient-civs-bc2500':  'world_bc2000',
  'age-of-exploration-1492': 'world_1492',
  'great-war-1914':       'world_1914',
  'maurya-bc250':         'world_bc200',
  'enlightenment-1750':   'world_1715',
  'wwii-1939':            'world_1938',
  'french-revolution-1789': 'world_1800',
  'late-antiquity-500':     'world_500',
  'islamic-rise-750':       'world_700',
  'medieval-japan-1200':    'world_1200',
  'native-americans-1491':  'world_1492',
  'thirteen-colonies-1750': 'world_1715',
  'westward-1803':          'world_1800',
  'slavery-divisions-1850': 'world_1815',
  'mesopotamia-bc1750':     'world_bc2000',
  'ancient-hebrews-bc950':  'world_bc2000',
  'mali-1324':              'world_1300',
  'pre-columbian-1450':     'world_1492',
  'scientific-rev-1687':    'world_1700',
  'usa-1830':               'world_1815',
  'manifest-destiny-1848':  'world_1815',
  'gunpowder-empires-1600': 'world_1700',
  'crusades-1099':          'world_1000',
  'cold-war-1962':          'world_1945',
  // 现代政体不需要验证（用 ISO，不查 sourceName）
};

const CIV_TO_YEAR = {
  'medieval-1215':        'world_1200',
  'east-asia-1000':       'world_1000',
  'eurasia-1347':         'world_1300',
  'classical-bc500':      'world_bc500',
  'classical-100':        'world_100',
  'early-modern-1500':    'world_1500',
  'early-modern-1530':    'world_1530',
  'modern-1783':          'world_1783',
  'modern-1880':          'world_1880',
};

const cache = {};
function loadYearNames(year) {
  if (cache[year]) return cache[year];
  const p = path.join(ROOT, 'data/atlas/historical-basemaps', year + '.geojson');
  if (!fs.existsSync(p)) {
    console.error('  ⚠ year file missing:', p);
    return new Set();
  }
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  const names = new Set(
    data.features
      .filter(f => f.properties && f.properties.NAME)
      .map(f => f.properties.NAME)
  );
  cache[year] = names;
  return names;
}

let issues = 0;
let warnings = 0;

console.log('=== Validating polities ===');
for (const [key, list] of Object.entries(POLITIES)) {
  const yearKey = POLITY_TO_YEAR[key];
  if (yearKey) {
    const names = loadYearNames(yearKey);
    for (const p of list) {
      const sources = Array.isArray(p.sourceName) ? p.sourceName : (p.sourceName ? [p.sourceName] : []);
      for (const s of sources) {
        if (!names.has(s)) {
          console.log(`  ✗ ${key} / ${p.id} → "${s}" not in ${yearKey}`);
          issues++;
        }
      }
    }
  }
  // ISO 引用必须在 ISO_NUM 表中（避免静默 fall-through）
  for (const p of list) {
    if (p.iso) {
      for (const code of p.iso) {
        if (!ISO_NUM[code]) {
          console.log(`  ✗ ${key} / ${p.id} → iso "${code}" not in ISO_NUM (will fail to render)`);
          issues++;
        }
      }
    }
  }
}

console.log('\n=== Validating civilizations ===');
for (const [key, list] of Object.entries(CIVILIZATIONS)) {
  const yearKey = CIV_TO_YEAR[key];
  if (!yearKey) {
    console.log(`  ⚠ no year mapping for civ key: ${key}`);
    warnings++;
    continue;
  }
  const names = loadYearNames(yearKey);
  for (const c of list) {
    if (!c.sourceNames) continue;
    for (const s of c.sourceNames) {
      if (!names.has(s)) {
        console.log(`  ✗ ${key} / ${c.id} → "${s}" not in ${yearKey}`);
        issues++;
      }
    }
  }
}

console.log('\n=== Validating events ===');
for (const [id, e] of Object.entries(EVENTS)) {
  if (typeof e.lon !== 'number' || typeof e.lat !== 'number') {
    console.log(`  ✗ event ${id} missing/invalid coords`);
    issues++;
  }
  if (!e.label || !e.label.cn || !e.label.en) {
    console.log(`  ✗ event ${id} missing label.cn or label.en`);
    issues++;
  }
  // ★ pin causality 块完整性：L0-L4 + summary 都要双语
  const isStarPin = !!e.featured
    || (e.label?.cn || '').includes('★')
    || (e.label?.en || '').includes('★');
  if (isStarPin && e.causality) {
    for (const k of ['summary', 'L0', 'L1', 'L2', 'L3', 'L4']) {
      if (!e.causality[k] || !e.causality[k].cn || !e.causality[k].en) {
        console.log(`  ✗ ★ event ${id} causality.${k} missing cn or en`);
        issues++;
      }
    }
  }
  if (isStarPin && !e.causality) {
    console.log(`  ⚠ ★ event ${id} has no causality block (★ pins should have full causal chain)`);
    warnings++;
  }
}

console.log('\n=== Validating features ===');
for (const [id, f] of Object.entries(FEATURES)) {
  if (!f.label || !f.label.cn || !f.label.en) {
    console.log(`  ✗ feature ${id} missing label`);
    issues++;
  }
}

// ─── 跨文件引用完整性：view 引用的 pins / features 必须存在 ──
console.log('\n=== Validating view references (orphan pins / features) ===');
const viewsDir = path.join(ROOT, 'data/atlas/views');
const viewFiles = fs.readdirSync(viewsDir).filter(f => f.endsWith('.js'));
const viewMetaSeen = new Set();
const requiredViewFields = ['id', 'grade', 'topicTier', 'camera', 'title', 'subtitle', 'causalSummary'];

for (const vf of viewFiles) {
  const mod = await import(path.join(viewsDir, vf));
  const v = mod.VIEW;
  if (!v) {
    console.log(`  ✗ ${vf}: missing default VIEW export`);
    issues++;
    continue;
  }
  // shape check
  for (const k of requiredViewFields) {
    if (v[k] === undefined || v[k] === null) {
      console.log(`  ✗ ${vf}: missing required field "${k}"`);
      issues++;
    }
  }
  // duplicate id check
  if (v.id) {
    if (viewMetaSeen.has(v.id)) {
      console.log(`  ✗ ${vf}: duplicate view id "${v.id}"`);
      issues++;
    } else {
      viewMetaSeen.add(v.id);
    }
  }
  // bilingual title / subtitle / causalSummary
  for (const k of ['title', 'subtitle', 'causalSummary']) {
    const obj = v[k];
    if (obj && (!obj.cn || !obj.en)) {
      console.log(`  ✗ ${vf}: ${k} missing cn or en`);
      issues++;
    }
  }
  // L4 pins refer to events
  const pinIds = (v.layers && v.layers.L4 && v.layers.L4.pins) || [];
  for (const id of pinIds) {
    if (!EVENTS[id]) {
      console.log(`  ✗ ${vf}: L4.pins ref "${id}" — not in EVENTS`);
      issues++;
    }
  }
  // F.ids refer to features
  const featIds = (v.layers && v.layers.F && v.layers.F.ids) || [];
  for (const id of featIds) {
    if (!FEATURES[id]) {
      console.log(`  ✗ ${vf}: F.ids ref "${id}" — not in FEATURES`);
      issues++;
    }
  }
  // standardsAlignment shape
  if (v.standardsAlignment) {
    for (const s of v.standardsAlignment) {
      if (!s.code) {
        console.log(`  ✗ ${vf}: standardsAlignment item missing code`);
        issues++;
      }
      if (!s.label || !s.label.cn || !s.label.en) {
        console.log(`  ✗ ${vf}: standardsAlignment ${s.code || '(no code)'} missing cn or en label`);
        issues++;
      }
    }
  }
  // tierType 字段：仅 supplementary 才允许；只能是 'extended' | 'extended-ap'
  if (v.tierType !== undefined && v.tierType !== null) {
    if (v.topicTier !== 'supplementary') {
      console.log(`  ✗ ${vf}: tierType set but topicTier is "${v.topicTier}" (must be 'supplementary')`);
      issues++;
    }
    if (!['extended', 'extended-ap'].includes(v.tierType)) {
      console.log(`  ✗ ${vf}: invalid tierType "${v.tierType}" (must be 'extended' or 'extended-ap')`);
      issues++;
    }
  }
  // examPoints shape (新增字段，可选)
  if (v.examPoints) {
    if (!Array.isArray(v.examPoints.cn) || !Array.isArray(v.examPoints.en)) {
      console.log(`  ✗ ${vf}: examPoints must have cn[] and en[] arrays`);
      issues++;
    } else if (v.examPoints.cn.length !== v.examPoints.en.length) {
      console.log(`  ✗ ${vf}: examPoints.cn (${v.examPoints.cn.length}) and en (${v.examPoints.en.length}) length mismatch`);
      issues++;
    }
  }
}

console.log('\n══════════════════════════════════════════════════');
console.log(`Issues: ${issues} · Warnings: ${warnings}`);
if (issues > 0) {
  console.log('❌ Validation FAILED');
  process.exit(1);
} else {
  console.log('✅ All validation passed');
}
