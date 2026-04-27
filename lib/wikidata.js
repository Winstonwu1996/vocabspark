// lib/wikidata.js
//
// Wikidata SPARQL helper — Topic 自动化的核心数据源
// 授权：Wikidata 内容全部 CC0（公共领域）
//
// 用法：
//   import { findEventsInRegion, getEntityRelations } from './lib/wikidata.js';
//   const pins = await findEventsInRegion({ countryQid: 'Q179876', yearFrom: 1210, yearTo: 1220 });

const WIKIDATA_ENDPOINT = 'https://query.wikidata.org/sparql';
const USER_AGENT = 'VocabSparkAtlasLab/1.0 (research)';

async function querySparql(query) {
  const url = WIKIDATA_ENDPOINT + '?format=json&query=' + encodeURIComponent(query);
  const res = await fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
      'Accept': 'application/sparql-results+json',
    },
  });
  if (!res.ok) throw new Error('Wikidata query failed: ' + res.status);
  const data = await res.json();
  return data.results.bindings.map(b => {
    const out = {};
    for (const [k, v] of Object.entries(b)) out[k] = v.value;
    return out;
  });
}

// 解析 WKT POINT(lon lat) → [lon, lat]
function parseCoord(wkt) {
  if (!wkt) return null;
  const m = wkt.match(/POINT\s*\(\s*(-?\d+\.?\d*)\s+(-?\d+\.?\d*)\s*\)/i);
  return m ? [parseFloat(m[1]), parseFloat(m[2])] : null;
}

// 给区域 + 年代窗口，找事件（带坐标的优先）
export async function findEventsInRegion({ countryQid, yearFrom, yearTo, lang = 'en', limit = 30 }) {
  const query = `
    SELECT DISTINCT ?event ?eventLabel ?date ?coord ?article WHERE {
      ?event wdt:P31/wdt:P279* wd:Q1190554.
      ?event wdt:P585 ?date.
      FILTER(YEAR(?date) >= ${yearFrom} && YEAR(?date) <= ${yearTo})
      ?event wdt:P17 wd:${countryQid}.
      OPTIONAL { ?event wdt:P625 ?coord. }
      OPTIONAL { ?article schema:about ?event ; schema:isPartOf <https://${lang}.wikipedia.org/>. }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "${lang},zh". }
    }
    ORDER BY ?date LIMIT ${limit}
  `;
  const rows = await querySparql(query);
  return rows.map(r => ({
    qid: r.event.split('/').pop(),
    label: r.eventLabel,
    date: r.date ? r.date.slice(0, 10) : null,
    year: r.date ? parseInt(r.date.slice(0, 4)) : null,
    coords: parseCoord(r.coord),
    wikipedia: r.article || null,
  })).filter(e => e.coords);   // 只留有坐标的
}

// 给一个实体（如 Magna Carta Q12519），找它的因果关系
export async function getEntityRelations(qid, { lang = 'en' } = {}) {
  const query = `
    SELECT ?prop ?propLabel ?value ?valueLabel ?valueDate WHERE {
      wd:${qid} ?p ?value.
      ?prop wikibase:directClaim ?p.
      FILTER(?p IN (
        wdt:P155, wdt:P156,    # follows / followed by
        wdt:P710, wdt:P1542,   # participant / has effect
        wdt:P361, wdt:P527,    # part of / has part
        wdt:P276, wdt:P17,     # location / country
        wdt:P585               # point in time
      ))
      OPTIONAL { ?value wdt:P585 ?valueDate. }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "${lang},zh". }
    } LIMIT 50
  `;
  const rows = await querySparql(query);
  return rows.map(r => ({
    propQid: r.prop.split('/').pop(),
    propLabel: r.propLabel,
    valueQid: r.value.startsWith('http') ? r.value.split('/').pop() : null,
    valueLabel: r.valueLabel,
    valueDate: r.valueDate ? r.valueDate.slice(0, 10) : null,
  }));
}

// 常用国家 / 区域 QID（备查）
export const COUNTRY_QIDS = {
  england:    'Q179876',     // Kingdom of England
  france:     'Q70972',      // Kingdom of France
  hre:        'Q12548',      // Holy Roman Empire
  song:       'Q49805',      // Song dynasty
  tang:       'Q9903',       // Tang dynasty
  yuan:       'Q7313',       // Yuan dynasty
  byzantine:  'Q12544',      // Byzantine Empire
  rome:       'Q2277',       // Roman Empire
  han:        'Q9295',       // Han dynasty
  usa:        'Q30',         // United States
};
