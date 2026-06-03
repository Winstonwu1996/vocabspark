// 考点 concept 复合标题 → 内联派生"多词短语" 的回归测试。
// 设计: 只抽多词短语 (Hagia Sophia / Natural Rights / Federalist No. 10…); 单词 (专名 vs 普通名词无法区分) 不抽。
// 跑: node scripts/test-concept-inline.mjs
import { _deriveConceptInlineTerms as derive, findMustMemorizeHits } from '../lib/history-topics.js';

let pass = 0, fail = 0;
function ok(name, cond) { if (cond) { pass++; console.log('  ✓ ' + name); } else { fail++; console.log('  ✗ FAIL: ' + name); } }
function has(arr, x) { return arr.map((s) => s.toLowerCase()).includes(x.toLowerCase()); }

console.log('[1] 抽多词短语 (含专名短语)');
ok('Hagia Sophia / Church of Holy Wisdom → Hagia Sophia', has(derive('Hagia Sophia / Church of Holy Wisdom'), 'Hagia Sophia'));
ok('Locke / Natural Rights → Natural Rights', has(derive('Locke / Natural Rights'), 'Natural Rights'));
ok('Montesquieu / Separation of Powers → Separation of Powers', has(derive('Montesquieu / Separation of Powers'), 'Separation of Powers'));
ok('括注别名抽出: Great Compromise (Connecticut Compromise) → Connecticut Compromise', has(derive('Great Compromise (Connecticut Compromise)'), 'Connecticut Compromise'));
ok('Unicode 大写: Qhapaq Ñan Road System 整体', has(derive("mit'a / quipu / Qhapaq Ñan Road System"), 'Qhapaq Ñan Road System'));

console.log('[2] 不抽单词 (避免专名 vs 普通词歧义)');
ok('al-Khwarizmi / Algebra → 不抽单词 (两段均单词)', derive('al-Khwarizmi / Algebra').length === 0);
ok('Inca vs Aztec vs Maya 不抽 Inca/Aztec/Maya', (() => { var d = derive('Inca vs Aztec vs Maya: Three-Civilization Comparison'); return !has(d, 'Inca') && !has(d, 'Aztec') && !has(d, 'Maya'); })());
ok('Barriers to Women in Science 不抽 Women/Science 单词', (() => { var d = derive('Barriers to Women in Science'); return !has(d, 'Women') && !has(d, 'Science'); })());
ok('通用主题名不抽: Decolonization & the Cold War / Non-Aligned Movement → 丢 Cold War, 留 Non-Aligned Movement', (() => { var d = derive('Decolonization & the Cold War / Non-Aligned Movement'); return !has(d, 'Cold War') && has(d, 'Non-Aligned Movement'); })());
ok('无残括号 / 残标点', derive('Federalist No. 10 (Factions & the Large Republic)').every((s) => !/[(),"]/.test(s)) && derive('Manifest Destiny (O\'Sullivan, 1845)').every((s) => !/[,"]$/.test(s)));

console.log('[3] 数字/编号');
ok('Federalist No. 10 完整', has(derive('Federalist No. 10 (Factions)'), 'Federalist No. 10'));
ok('15th Amendment 完整 (数字起头)', has(derive('15th Amendment / The 1869 Split'), '15th Amendment'));
ok('Psalm 137 保留 (非年份)', has(derive('Psalm 137 / the Voice of Exile'), 'Psalm 137'));
ok('EO 9066 保留 (非年份)', has(derive('Japanese American Internment (EO 9066 / Executive Order)'), 'EO 9066'));
ok('年份剥离: Great Schism of 1054 → Great Schism (无 1054)', (() => { var d = derive('Great Schism of 1054 / Eastern Orthodox vs Roman Catholic'); return has(d, 'Great Schism') && !d.some((s) => /1054/.test(s)); })());
ok('撇号保留: Uncle Tom\'s Cabin (1852) → Uncle Tom\'s Cabin 整体', has(derive("Uncle Tom's Cabin (1852)"), "Uncle Tom's Cabin"));
ok('小写冠词作连接: An Eye for an Eye 整体 (不裂出 bare "An Eye" 误标每个 an eye)', (() => { var d = derive('Lex Talionis / An Eye for an Eye'); return d.some((s) => /eye for an eye/i.test(s)) && !has(d, 'An Eye'); })());
ok('BCE 日期不抽: Babylonian Exile (586 BCE) → 无 586 BCE 项', !derive('Babylonian Exile (586 BCE)').some((s) => /586|bce/i.test(s)));
ok('c. NNN BCE 不抽: Cleisthenes (c. 508 BCE) → 无日期项', !derive('Cleisthenes Reforms / Athenian Democracy (c. 508 BCE)').some((s) => /508|bce/i.test(s)));

console.log('[3b] 法律案件 / 括注拆分');
ok('Brown v. Board of Education 1954 → 整案名 (v. 连接, 1954 剥)', (() => { var d = derive('Brown v. Board of Education 1954'); return has(d, 'Brown v. Board of Education'); })());
ok('括注内分隔再拆: Federalist No. 10 (Factions & the Large Republic) → Large Republic', has(derive('Federalist No. 10 (Factions & the Large Republic)'), 'Large Republic'));
ok('比较 vs 仍各自抽: Eastern Orthodox vs Roman Catholic → 两个', (() => { var d = derive('Great Schism / Eastern Orthodox vs Roman Catholic'); return has(d, 'Eastern Orthodox') && has(d, 'Roman Catholic'); })());

console.log('[4] 匹配 — 右边界 + 大小写不敏感');
var topic = { mustMemorize: { concepts: [{ id: 'cr', en: 'Civil Rights Act 1964 / Selma / Voting Rights Act 1965', cn: '民权法案' }], vocab: [] } };
ok('"Civil Rights Act" 不吃掉 "civil rights activists"', !findMustMemorizeHits(topic, 'the civil rights activists marched').some((h) => /activist/i.test(h.actualText)));
ok('多词短语小写也命中 (Civil Rights Act)', findMustMemorizeHits(topic, 'the civil rights act of 1964').some((h) => /civil rights act/i.test(h.actualText)));

console.log('\n────────────');
console.log('PASS ' + pass + ' / FAIL ' + fail);
process.exit(fail === 0 ? 0 : 1);
