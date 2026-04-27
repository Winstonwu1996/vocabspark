#!/usr/bin/env node
/**
 * Wikidata Topic Builder
 * ──────────────────────────────────────────────────────────────────
 * 输入：Topic 配置（区域 QID + 年代窗口 + 视口 bbox）
 * 输出：候选事件清单 JSON，含中英标签 / 坐标 / 维基链接 / 已格式化成 events.js 片段
 *
 * 教育产品商用注意：Wikidata 数据全部 CC0（公共领域）— 无授权风险。
 *
 * 用法：
 *   node scripts/wikidata-topic-builder.mjs > /dev/null
 *   ls data/atlas/wikidata-candidates/
 */

import fs from 'node:fs';
import path from 'node:path';

const WIKIDATA = 'https://query.wikidata.org/sparql';
const UA = 'VocabSparkAtlasLab/1.0 (research)';
const OUT_DIR = path.resolve('data/atlas/wikidata-candidates');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function sparql(query) {
  const url = WIKIDATA + '?format=json&query=' + encodeURIComponent(query);
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, 'Accept': 'application/sparql-results+json' },
  });
  if (!res.ok) throw new Error('SPARQL failed: ' + res.status + ' ' + (await res.text()).slice(0, 200));
  return (await res.json()).results.bindings;
}

function parseCoord(wkt) {
  if (!wkt) return null;
  const m = wkt.match(/POINT\s*\(\s*(-?\d+\.?\d*)\s+(-?\d+\.?\d*)\s*\)/i);
  return m ? [parseFloat(m[1]), parseFloat(m[2])] : null;
}

// 同时拿英 + 中标签 + 描述 + 维基链接（多语言）
async function findEventsRich({ countryQid, yearFrom, yearTo, bbox = null }) {
  const query = `
    SELECT DISTINCT ?event ?eventLabelEn ?eventLabelZh ?descEn ?date ?coord ?article ?type ?typeLabel WHERE {
      ?event wdt:P31/wdt:P279* wd:Q1190554.
      ?event wdt:P585 ?date.
      FILTER(YEAR(?date) >= ${yearFrom} && YEAR(?date) <= ${yearTo})
      ?event wdt:P17 wd:${countryQid}.
      ?event wdt:P625 ?coord.
      OPTIONAL { ?event wdt:P31 ?type. }
      OPTIONAL { ?article schema:about ?event ; schema:isPartOf <https://en.wikipedia.org/>. }
      OPTIONAL { ?event rdfs:label ?eventLabelEn FILTER(LANG(?eventLabelEn) = "en"). }
      OPTIONAL { ?event rdfs:label ?eventLabelZh FILTER(LANG(?eventLabelZh) = "zh"). }
      OPTIONAL { ?event schema:description ?descEn FILTER(LANG(?descEn) = "en"). }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }
    ORDER BY ?date LIMIT 60
  `;
  const rows = await sparql(query);
  // dedupe by qid
  const seen = new Map();
  for (const b of rows) {
    const qid = b.event.value.split('/').pop();
    const coords = parseCoord(b.coord?.value);
    if (!coords) continue;
    if (bbox) {
      const [W, S, E, N] = bbox;
      if (coords[0] < W || coords[0] > E || coords[1] < S || coords[1] > N) continue;
    }
    const key = qid;
    if (!seen.has(key)) {
      seen.set(key, {
        qid,
        labelEn: b.eventLabelEn?.value || b.event.value,
        labelZh: b.eventLabelZh?.value || null,
        descEn: b.descEn?.value || null,
        typeLabel: b.typeLabel?.value || null,
        date: b.date?.value?.slice(0, 10),
        year: b.date?.value ? parseInt(b.date.value.slice(0, 4)) : null,
        coords,
        wikipedia: b.article?.value || null,
      });
    }
  }
  return [...seen.values()];
}

// 把事件转成 events.js 风格的片段（人工编辑后粘贴）
function toEventsJsSnippet(events) {
  const lines = events.map(e => {
    const id = e.qid.toLowerCase();
    const cn = e.labelZh ? `'${e.labelZh.replace(/'/g, "\\'")}'` : `'?'  /* TODO: translate "${e.labelEn}" */`;
    return `  '${id}': {
    type: '${guessType(e)}',
    lon: ${e.coords[0].toFixed(4)}, lat: ${e.coords[1].toFixed(4)},
    year: ${e.year},
    label: { cn: ${cn}, en: '${(e.labelEn || '').replace(/'/g, "\\'")}' },
    note:  { cn: '?', en: ${e.descEn ? `'${e.descEn.replace(/'/g, "\\'").slice(0, 100)}'` : "''"} },
    // ${e.wikipedia || ''}
  },`;
  });
  return lines.join('\n');
}

function guessType(e) {
  const en = (e.labelEn || '').toLowerCase();
  if (/battle|siege|war/.test(en)) return 'event';
  if (/treaty|convention|charter/.test(en)) return 'treaty';
  if (/election|address|act|declaration/.test(en)) return 'event';
  if (/founding|establishment/.test(en)) return 'event';
  return 'event';
}

// ── 主：批量生成 6 个 Topic 的候选 ────────────────────────────────
const TOPICS = [
  { id: 'magna-carta',        countryQid: 'Q179876', yearFrom: 1200, yearTo: 1220, bbox: [-12, 35, 35, 60] },
  { id: 'tang-song',          countryQid: 'Q12560',  yearFrom: 960,  yearTo: 1100, bbox: [70, 18, 140, 50] },
  { id: 'black-death',        countryQid: 'Q12544',  yearFrom: 1340, yearTo: 1360, bbox: [-15, 30, 70, 65] },
  { id: 'american-revolution', countryQid: 'Q30',    yearFrom: 1773, yearTo: 1785, bbox: [-100, 20, -55, 55] },
  { id: 'civil-war',           countryQid: 'Q30',    yearFrom: 1859, yearTo: 1866, bbox: [-100, 24, -65, 50] },
  { id: 'roman-peak',          countryQid: 'Q2277',  yearFrom: 95,   yearTo: 130,  bbox: [-15, 28, 60, 55] },
];

async function main() {
  console.log('Wikidata Topic Builder · 批量生成候选事件\n');
  for (const t of TOPICS) {
    process.stdout.write(`▶ ${t.id} ... `);
    try {
      const events = await findEventsRich(t);
      // 输出 JSON
      const jsonPath = path.join(OUT_DIR, `${t.id}.candidates.json`);
      fs.writeFileSync(jsonPath, JSON.stringify({
        topicId: t.id,
        query: t,
        generatedAt: new Date().toISOString(),
        eventCount: events.length,
        events,
      }, null, 2));
      // 输出 JS snippet
      const jsPath = path.join(OUT_DIR, `${t.id}.events-snippet.js`);
      const snippet = `// Auto-generated from Wikidata · ${new Date().toISOString()}
// Source: query.wikidata.org · License: CC0
// Topic: ${t.id} · Region QID: ${t.countryQid} · Years: ${t.yearFrom}-${t.yearTo}
// Bbox filter: [${t.bbox.join(', ')}]
// Found ${events.length} events with coordinates.
// 人工 / AI 审核后挑选粘贴到 data/atlas/events.js 即可。
//
// 注：cn 标签若 Wikidata 已有则填好，否则标 ? 待人工翻译。

${toEventsJsSnippet(events)}
`;
      fs.writeFileSync(jsPath, snippet);
      console.log(`${events.length} events → ${path.basename(jsonPath)}`);
    } catch (err) {
      console.log('FAIL:', err.message);
    }
  }
  console.log('\n完成。文件位于：' + OUT_DIR);
}

main().catch(e => { console.error(e); process.exit(1); });
