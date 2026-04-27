#!/usr/bin/env node
/**
 * scripts/fetch-wikidata-batch.mjs
 *
 * 批量从 Wikidata 拉实体事实，写入 data/history-knowledge-base/{type}/{id}.json
 *
 * 用法：
 *   # 单个：
 *   node scripts/fetch-wikidata-batch.mjs people king-john Q129324
 *
 *   # 从清单文件批量（JSON: [{type, id, qid, civilization?, topicsAppearing?}, ...]）：
 *   node scripts/fetch-wikidata-batch.mjs --manifest data/history-knowledge-base/_manifest.json
 *
 *   # 强制刷新已存在的：
 *   node scripts/fetch-wikidata-batch.mjs ... --force
 *
 * 写入字段说明：
 *   - 自动从 Wikidata 拉的：name (en/cn) / description / aliases / dates / coords / country
 *   - 模板字段（写入但保持 ?）：commonMisconceptions / neutralityNotes / sources
 *   - 这些模板字段需要人工审核 + 填充（这是 Sarah Chen 流程的 entry point）
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const KB_ROOT = path.join(ROOT, 'data', 'history-knowledge-base');

// 直接 inline wikidata SPARQL 而非 import lib/ — 这样脚本可以独立用
const WIKIDATA = 'https://query.wikidata.org/sparql';
const UA = 'VocabSparkAtlasLab/1.0 (kb-build)';

async function sparql(query) {
  const url = WIKIDATA + '?format=json&query=' + encodeURIComponent(query);
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, 'Accept': 'application/sparql-results+json' },
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) throw new Error(`SPARQL ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return (await res.json()).results.bindings;
}

function parseCoord(wkt) {
  if (!wkt) return null;
  const m = wkt.match(/POINT\s*\(\s*(-?\d+\.?\d*)\s+(-?\d+\.?\d*)\s*\)/i);
  return m ? [parseFloat(m[1]), parseFloat(m[2])] : null;
}

async function fetchEntity(qid) {
  const query = `
    SELECT
      ?label ?labelCn ?description ?descriptionCn
      ?birth ?death
      ?startDate ?endDate ?pointInTime
      ?coord
      ?countryLabel ?countryLabelCn
      ?instanceOfLabel ?instanceOfLabelCn
    WHERE {
      OPTIONAL { wd:${qid} rdfs:label ?label.       FILTER(LANG(?label) = "en") }
      OPTIONAL { wd:${qid} rdfs:label ?labelCn.     FILTER(LANG(?labelCn) = "zh") }
      OPTIONAL { wd:${qid} schema:description ?description.   FILTER(LANG(?description) = "en") }
      OPTIONAL { wd:${qid} schema:description ?descriptionCn. FILTER(LANG(?descriptionCn) = "zh") }
      OPTIONAL { wd:${qid} wdt:P569 ?birth. }
      OPTIONAL { wd:${qid} wdt:P570 ?death. }
      OPTIONAL { wd:${qid} wdt:P585 ?pointInTime. }
      OPTIONAL { wd:${qid} wdt:P580 ?startDate. }
      OPTIONAL { wd:${qid} wdt:P582 ?endDate. }
      OPTIONAL { wd:${qid} wdt:P625 ?coord. }
      OPTIONAL { wd:${qid} wdt:P17  ?country. ?country rdfs:label ?countryLabel.   FILTER(LANG(?countryLabel) = "en") }
      OPTIONAL { wd:${qid} wdt:P17  ?country. ?country rdfs:label ?countryLabelCn. FILTER(LANG(?countryLabelCn) = "zh") }
      OPTIONAL { wd:${qid} wdt:P31  ?instanceOf. ?instanceOf rdfs:label ?instanceOfLabel.   FILTER(LANG(?instanceOfLabel) = "en") }
      OPTIONAL { wd:${qid} wdt:P31  ?instanceOf. ?instanceOf rdfs:label ?instanceOfLabelCn. FILTER(LANG(?instanceOfLabelCn) = "zh") }
    } LIMIT 1
  `;
  const rows = await sparql(query);
  if (!rows.length) return null;
  const r = rows[0];
  return {
    label: { en: r.label?.value || '', cn: r.labelCn?.value || '' },
    description: { en: r.description?.value || '', cn: r.descriptionCn?.value || '' },
    birth: r.birth?.value?.slice(0, 10) || null,
    death: r.death?.value?.slice(0, 10) || null,
    pointInTime: r.pointInTime?.value?.slice(0, 10) || null,
    startDate: r.startDate?.value?.slice(0, 10) || null,
    endDate: r.endDate?.value?.slice(0, 10) || null,
    coords: parseCoord(r.coord?.value),
    country: { en: r.countryLabel?.value || '', cn: r.countryLabelCn?.value || '' },
    instanceOf: { en: r.instanceOfLabel?.value || '', cn: r.instanceOfLabelCn?.value || '' },
  };
}

// ── 拉别名 (separate query — Wikidata SPARQL 单查多 GROUP_CONCAT 容易 timeout) ──
async function fetchAliases(qid) {
  const query = `
    SELECT
      (GROUP_CONCAT(DISTINCT ?aliasEn; separator='|') AS ?aliasesEn)
      (GROUP_CONCAT(DISTINCT ?aliasCn; separator='|') AS ?aliasesCn)
    WHERE {
      OPTIONAL { wd:${qid} skos:altLabel ?aliasEn.  FILTER(LANG(?aliasEn) = "en") }
      OPTIONAL { wd:${qid} skos:altLabel ?aliasCn.  FILTER(LANG(?aliasCn) = "zh") }
    }
  `;
  const rows = await sparql(query);
  if (!rows.length) return { en: [], cn: [] };
  const r = rows[0];
  return {
    en: r.aliasesEn?.value ? r.aliasesEn.value.split('|').filter(Boolean).slice(0, 5) : [],
    cn: r.aliasesCn?.value ? r.aliasesCn.value.split('|').filter(Boolean).slice(0, 5) : [],
  };
}

// ── 写文件（合并：保留人工 fields，刷新 Wikidata fields） ──
function writeKbFile({ type, id, qid, wikidata, aliases, civilization, topicsAppearing, force }) {
  const dir = path.join(KB_ROOT, type);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, id + '.json');

  // 现有人工 fields 保留
  let existing = {};
  if (fs.existsSync(file)) {
    try { existing = JSON.parse(fs.readFileSync(file, 'utf-8')); } catch (_) {}
  }

  const isPerson = type === 'people';
  const isEvent = type === 'events';

  const merged = {
    id,
    wikidataId: qid,
    name: {
      en: wikidata?.label?.en || existing.name?.en || '',
      cn: wikidata?.label?.cn || existing.name?.cn || '',
      alternates: [...new Set([...(aliases?.en || []), ...(aliases?.cn || [])])].slice(0, 8),
    },
    ...(isPerson && {
      lifespan: {
        birth: wikidata?.birth || existing.lifespan?.birth || '?',
        death: wikidata?.death || existing.lifespan?.death || '?',
      },
    }),
    ...(isEvent && {
      date: wikidata?.pointInTime || wikidata?.startDate || existing.date || '?',
      dateRange: (wikidata?.startDate && wikidata?.endDate)
        ? { start: wikidata.startDate, end: wikidata.endDate }
        : (existing.dateRange || null),
      place: wikidata?.coords
        ? { lon: wikidata.coords[0], lat: wikidata.coords[1] }
        : (existing.place || null),
    }),
    civilization: civilization || existing.civilization || null,
    topicsAppearing: topicsAppearing || existing.topicsAppearing || [],

    // ── Wikidata 元信息（覆盖刷新）──
    wikidataDescription: wikidata?.description || { en: '', cn: '' },
    wikidataInstanceOf: wikidata?.instanceOf || { en: '', cn: '' },
    wikidataCountry: wikidata?.country || { en: '', cn: '' },

    // ── 人工 fields（保留 existing；新建时填模板等待编辑） ──
    summary: existing.summary || { en: '?', cn: '?' },
    commonMisconceptions: existing.commonMisconceptions || [],
    neutralityNotes: existing.neutralityNotes || '?',
    keyEvents: existing.keyEvents || [],
    primarySourceQuotes: existing.primarySourceQuotes || [],

    sources: [...new Set([
      `https://www.wikidata.org/wiki/${qid}`,
      ...(existing.sources || []),
    ])],

    // 元数据
    fetchedAt: new Date().toISOString(),
    schemaVersion: 1,
  };

  fs.writeFileSync(file, JSON.stringify(merged, null, 2));
  return file;
}

async function processOne({ type, id, qid, civilization, topicsAppearing, force }) {
  const file = path.join(KB_ROOT, type, id + '.json');
  if (fs.existsSync(file) && !force) {
    console.log(`  ⏭  ${type}/${id} (exists, skip — use --force to refresh)`);
    return { skipped: true };
  }
  console.log(`  ▶  ${type}/${id} ← ${qid}`);
  try {
    const wikidata = await fetchEntity(qid);
    if (!wikidata) {
      console.log(`     ⚠️ no data from Wikidata`);
      return { error: 'no-data' };
    }
    await new Promise(r => setTimeout(r, 250));
    const aliases = await fetchAliases(qid);

    const out = writeKbFile({ type, id, qid, wikidata, aliases, civilization, topicsAppearing, force });
    const summary = `${wikidata.label.en || '?'} / ${wikidata.label.cn || '?'}`;
    const dates = type === 'people'
      ? `birth ${wikidata.birth || '?'} / death ${wikidata.death || '?'}`
      : `date ${wikidata.pointInTime || wikidata.startDate || '?'}`;
    console.log(`     ✓  ${summary}  [${dates}]`);
    return { ok: true, file: out };
  } catch (err) {
    console.log(`     ✗  ${err.message}`);
    return { error: err.message };
  }
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const manifestIdx = args.indexOf('--manifest');

  let entries = [];
  if (manifestIdx !== -1) {
    const manifestFile = args[manifestIdx + 1];
    if (!manifestFile) { console.error('--manifest needs a path'); process.exit(1); }
    entries = JSON.parse(fs.readFileSync(manifestFile, 'utf-8'));
  } else {
    // CLI mode: type id qid
    const filtered = args.filter(a => !a.startsWith('--'));
    if (filtered.length < 3 || filtered.length % 3 !== 0) {
      console.error('Usage: node scripts/fetch-wikidata-batch.mjs [type id qid ...] | --manifest path.json | --force');
      console.error('  e.g. node scripts/fetch-wikidata-batch.mjs people king-john Q129324');
      process.exit(1);
    }
    for (let i = 0; i < filtered.length; i += 3) {
      entries.push({ type: filtered[i], id: filtered[i + 1], qid: filtered[i + 2] });
    }
  }

  console.log(`▶ Fetching ${entries.length} entities${force ? ' (force refresh)' : ''}...\n`);
  const results = [];
  for (const e of entries) {
    const r = await processOne({ ...e, force });
    results.push({ ...e, ...r });
    await new Promise(r => setTimeout(r, 250));  // 4 RPS pacing
  }

  console.log('\n──────────────────────────────────────────');
  const ok = results.filter(r => r.ok).length;
  const skip = results.filter(r => r.skipped).length;
  const err = results.filter(r => r.error).length;
  console.log(`Fetched ${ok} · Skipped ${skip} · Errors ${err}`);

  if (err > 0) {
    console.log('\nErrors:');
    results.filter(r => r.error).forEach(r => {
      console.log(`  ${r.type}/${r.id} (${r.qid}): ${r.error}`);
    });
  }
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
