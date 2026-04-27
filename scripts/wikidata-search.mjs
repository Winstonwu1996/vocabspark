#!/usr/bin/env node
/**
 * scripts/wikidata-search.mjs
 *
 * 用 Wikidata search API 找候选 QID（避免 hallucination）。
 * 不写文件，只输出候选列表给人/AI 审。
 *
 * 用法：
 *   node scripts/wikidata-search.mjs "Magna Carta" "King John of England" "Wang Anshi"
 *   node scripts/wikidata-search.mjs --json '[{"name": "Magna Carta", "lang": "en", "expectType": "document"}, ...]'
 *
 * 输出：每个搜索词显示前 5 个候选 + label / description / Q-id
 */

const SEARCH_API = 'https://www.wikidata.org/w/api.php';
const UA = 'VocabSparkAtlasLab/1.0 (kb-search)';

async function searchEntity(name, lang = 'en', limit = 5) {
  const params = new URLSearchParams({
    action: 'wbsearchentities',
    format: 'json',
    search: name,
    language: lang,
    limit: String(limit),
    origin: '*',
  });
  const url = SEARCH_API + '?' + params;
  const res = await fetch(url, {
    headers: { 'User-Agent': UA },
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new Error(`search ${res.status}`);
  const data = await res.json();
  return (data.search || []).map(e => ({
    qid: e.id,
    label: e.label,
    description: e.description || '(no description)',
    url: e.concepturi,
  }));
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: node scripts/wikidata-search.mjs "name1" "name2" ...');
    console.error('   or: node scripts/wikidata-search.mjs --json \'[{"name": "...", "lang": "en"}]\'');
    process.exit(1);
  }

  let queries = [];
  if (args[0] === '--json') {
    queries = JSON.parse(args[1]);
  } else {
    queries = args.map(a => ({ name: a, lang: 'en' }));
  }

  for (const q of queries) {
    console.log('\n══════════════════════════════════════════════════');
    console.log(`▶ ${q.name}` + (q.lang !== 'en' ? ` (${q.lang})` : ''));
    console.log('──────────────────────────────────────────');
    try {
      const results = await searchEntity(q.name, q.lang || 'en', q.limit || 5);
      if (results.length === 0) {
        console.log('  (no results)');
      } else {
        results.forEach((r, i) => {
          console.log(`  ${i + 1}. ${r.qid}  ${r.label}  —  ${r.description.slice(0, 80)}`);
        });
      }
    } catch (e) {
      console.log('  ERROR:', e.message);
    }
    await new Promise(r => setTimeout(r, 200));
  }

  console.log('\n══════════════════════════════════════════════════');
  console.log('Pick the correct QID and use fetch-wikidata-batch.mjs');
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
