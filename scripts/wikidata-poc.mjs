#!/usr/bin/env node
/**
 * Wikidata SPARQL POC
 *
 * 演示：给一个 Topic（年代 + 区域），自动从 Wikidata 拉相关事件 pin 候选。
 * 不修改任何代码 — 只输出可以人工/AI 审阅后填进 events.js 的候选。
 *
 * 用法：
 *   node scripts/wikidata-poc.mjs
 */

const WIKIDATA = 'https://query.wikidata.org/sparql';
const UA = 'VocabSparkAtlasLab/1.0 (research POC)';

async function sparql(query) {
  const url = WIKIDATA + '?format=json&query=' + encodeURIComponent(query);
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, 'Accept': 'application/sparql-results+json' },
  });
  if (!res.ok) throw new Error('SPARQL failed: ' + res.status);
  return (await res.json()).results.bindings;
}

function parseCoord(wkt) {
  if (!wkt) return null;
  const m = wkt.match(/POINT\s*\(\s*(-?\d+\.?\d*)\s+(-?\d+\.?\d*)\s*\)/i);
  return m ? [parseFloat(m[1]), parseFloat(m[2])] : null;
}

async function findEvents({ countryQid, yearFrom, yearTo, lang = 'en' }) {
  const query = `
    SELECT DISTINCT ?event ?eventLabel ?date ?coord WHERE {
      ?event wdt:P31/wdt:P279* wd:Q1190554.
      ?event wdt:P585 ?date.
      FILTER(YEAR(?date) >= ${yearFrom} && YEAR(?date) <= ${yearTo})
      ?event wdt:P17 wd:${countryQid}.
      OPTIONAL { ?event wdt:P625 ?coord. }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "${lang},zh". }
    }
    ORDER BY ?date LIMIT 30
  `;
  const rows = await sparql(query);
  return rows.map(b => ({
    qid: b.event.value.split('/').pop(),
    label: b.eventLabel?.value,
    date: b.date?.value?.slice(0, 10),
    coords: parseCoord(b.coord?.value),
  })).filter(e => e.coords);
}

async function main() {
  console.log('='.repeat(70));
  console.log('Wikidata SPARQL POC — Topic 自动化候选生成');
  console.log('='.repeat(70));

  const queries = [
    { name: '大宪章前后（英国 1210-1220）', countryQid: 'Q179876', yearFrom: 1210, yearTo: 1220 },
    { name: '美国独立战争前后（美 / 北美殖民地 1773-1785）', countryQid: 'Q30',  yearFrom: 1773, yearTo: 1785 },
    { name: '南北战争前后（美国 1858-1868）',                    countryQid: 'Q30',  yearFrom: 1858, yearTo: 1868 },
    { name: '北宋立国 + 王安石变法（中国 960-1086）',             countryQid: 'Q12560', yearFrom: 960,  yearTo: 1086 },
    { name: '罗马帝国巅峰（罗马 100-120 AD）',                    countryQid: 'Q2277',  yearFrom: 100,  yearTo: 120 },
  ];

  for (const q of queries) {
    console.log('\n' + '-'.repeat(70));
    console.log('▶', q.name);
    console.log('-'.repeat(70));
    try {
      const events = await findEvents(q);
      if (events.length === 0) {
        console.log('  (no events with coordinates found)');
      } else {
        events.forEach(e => {
          const pinSnippet = `'${e.qid.toLowerCase()}': { type: 'event', lon: ${e.coords[0]}, lat: ${e.coords[1]}, year: ${parseInt(e.date.slice(0,4))}, label: { en: '${(e.label || '').replace(/'/g, "\\'")}', cn: '?' }, note: { en: 'TODO', cn: 'TODO' } },`;
          console.log(`  · ${e.date} | ${e.label} | ${e.coords[0].toFixed(2)},${e.coords[1].toFixed(2)}`);
        });
      }
    } catch (err) {
      console.log('  ERROR:', err.message);
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('完成。可把上述事件作为 events.js 的候选 pin。');
  console.log('注：仅显示有坐标的 — 真实查询返回 50%+ 还包括无坐标条约 / 文件类。');
}

main().catch(e => { console.error(e); process.exit(1); });
