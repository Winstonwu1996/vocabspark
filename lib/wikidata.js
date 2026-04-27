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

// 拉一个实体的"事实卡片" — 用于 KB 种子
// 自动识别 person / event 类型，分别拉合适字段
export async function getEntityFacts(qid, { lang = 'en' } = {}) {
  const query = `
    SELECT
      ?label ?labelCn ?description ?descriptionCn
      ?birth ?death ?reignStart ?reignEnd
      ?startDate ?endDate ?pointInTime
      ?coord ?countryLabel ?countryLabelCn
      ?instanceOfLabel ?instanceOfLabelCn
      (GROUP_CONCAT(DISTINCT ?aliasEn; separator='|') AS ?aliasesEn)
      (GROUP_CONCAT(DISTINCT ?aliasCn; separator='|') AS ?aliasesCn)
    WHERE {
      OPTIONAL { wd:${qid} rdfs:label ?label.       FILTER(LANG(?label) = "${lang}") }
      OPTIONAL { wd:${qid} rdfs:label ?labelCn.     FILTER(LANG(?labelCn) = "zh") }
      OPTIONAL { wd:${qid} schema:description ?description.   FILTER(LANG(?description) = "${lang}") }
      OPTIONAL { wd:${qid} schema:description ?descriptionCn. FILTER(LANG(?descriptionCn) = "zh") }
      OPTIONAL { wd:${qid} skos:altLabel ?aliasEn.  FILTER(LANG(?aliasEn) = "${lang}") }
      OPTIONAL { wd:${qid} skos:altLabel ?aliasCn.  FILTER(LANG(?aliasCn) = "zh") }
      # Person fields
      OPTIONAL { wd:${qid} wdt:P569 ?birth. }       # date of birth
      OPTIONAL { wd:${qid} wdt:P570 ?death. }       # date of death
      # Event fields
      OPTIONAL { wd:${qid} wdt:P585 ?pointInTime. } # point in time
      OPTIONAL { wd:${qid} wdt:P580 ?startDate. }   # start time
      OPTIONAL { wd:${qid} wdt:P582 ?endDate. }     # end time
      OPTIONAL { wd:${qid} wdt:P625 ?coord. }       # coordinates
      OPTIONAL { wd:${qid} wdt:P17  ?country. ?country rdfs:label ?countryLabel.   FILTER(LANG(?countryLabel) = "${lang}") }
      OPTIONAL { wd:${qid} wdt:P17  ?country. ?country rdfs:label ?countryLabelCn. FILTER(LANG(?countryLabelCn) = "zh") }
      OPTIONAL { wd:${qid} wdt:P31 ?instanceOf. ?instanceOf rdfs:label ?instanceOfLabel. FILTER(LANG(?instanceOfLabel) = "${lang}") }
      OPTIONAL { wd:${qid} wdt:P31 ?instanceOf. ?instanceOf rdfs:label ?instanceOfLabelCn. FILTER(LANG(?instanceOfLabelCn) = "zh") }
    }
    GROUP BY ?label ?labelCn ?description ?descriptionCn ?birth ?death ?reignStart ?reignEnd ?startDate ?endDate ?pointInTime ?coord ?countryLabel ?countryLabelCn ?instanceOfLabel ?instanceOfLabelCn
    LIMIT 1
  `;
  const rows = await querySparql(query);
  if (!rows.length) return null;
  const r = rows[0];
  return {
    qid: qid,
    label: { en: r.label || '', cn: r.labelCn || '' },
    description: { en: r.description || '', cn: r.descriptionCn || '' },
    aliases: {
      en: r.aliasesEn ? r.aliasesEn.split('|').filter(Boolean).slice(0, 5) : [],
      cn: r.aliasesCn ? r.aliasesCn.split('|').filter(Boolean).slice(0, 5) : [],
    },
    birth: r.birth ? r.birth.slice(0, 10) : null,
    death: r.death ? r.death.slice(0, 10) : null,
    pointInTime: r.pointInTime ? r.pointInTime.slice(0, 10) : null,
    startDate: r.startDate ? r.startDate.slice(0, 10) : null,
    endDate: r.endDate ? r.endDate.slice(0, 10) : null,
    coords: parseCoord(r.coord),
    country: { en: r.countryLabel || '', cn: r.countryLabelCn || '' },
    instanceOf: { en: r.instanceOfLabel || '', cn: r.instanceOfLabelCn || '' },
    fetchedAt: new Date().toISOString(),
  };
}

// 给一个 qid 列表，并行批量拉。Wikidata API 限频 — 每秒 ≤5 请求
export async function getEntityFactsBatch(qids, opts = {}) {
  const out = [];
  for (const qid of qids) {
    try {
      const facts = await getEntityFacts(qid, opts);
      out.push({ qid, facts, error: null });
    } catch (err) {
      out.push({ qid, facts: null, error: err.message });
    }
    await new Promise(r => setTimeout(r, 250));   // 4 RPS pacing
  }
  return out;
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
