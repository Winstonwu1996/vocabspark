// ─── history exam-bank: AP 真题映射 + 原创仿真题 ────────────────────────
// realExamRefs  = College Board 官方真实考过的 FRQ (年份/题型/主题概括), 零原文复制。
// practiceQuestions = 我们按 AP 题型自研的仿真练习, 非真题。
// 数据按 topicId 分文件; 渲染见 components/history-engine/ExamBankSection.js。
// 覆盖全部 5★ + 4★ 课程 (32 门, 2026-06)。

// ── 5★ (12) ──
import * as ageOfExploration1492 from './age-of-exploration-1492.js';
import * as enlightenment from './enlightenment.js';
import * as frenchRevolution1789 from './french-revolution-1789.js';
import * as industrialRevolution1800 from './industrial-revolution-1800.js';
import * as scrambleForAfrica1884 from './scramble-for-africa-1884.js';
import * as worldWarTwo1942 from './world-war-two-1942.js';
import * as coldWar1962 from './cold-war-1962.js';
import * as constitutionalConvention1787 from './constitutional-convention-1787.js';
import * as slaveryAbolition1850 from './slavery-abolition-1850.js';
import * as civilWar1861 from './civil-war-1861.js';
import * as civilRights1965 from './civil-rights-1965.js';
import * as asianImperialism1839 from './asian-imperialism-1839.js';

// ── 4★ (20) ──
import * as islamicRise from './islamic-rise.js';
import * as tangSongChina from './tang-song-china.js';
import * as mongolEmpire from './mongol-empire.js';
import * as renaissance1500 from './renaissance-1500.js';
import * as reformation1517 from './reformation-1517.js';
import * as gunpowderEmpires1600 from './gunpowder-empires-1600.js';
import * as worldWarOne1914 from './world-war-one-1914.js';
import * as decolonization1960 from './decolonization-1960.js';
import * as americanRevolution1776 from './american-revolution-1776.js';
import * as hamiltonJefferson1790s from './hamilton-jefferson-1790s.js';
import * as reconstruction1877 from './reconstruction-1877.js';
import * as gildedAge1890 from './gilded-age-1890.js';
import * as progressiveEra1910 from './progressive-era-1910.js';
import * as greatDepression1933 from './great-depression-1933.js';
import * as haitianRevolution1791 from './haitian-revolution-1791.js';
import * as meijiRestoration1868 from './meiji-restoration-1868.js';
import * as russianRevolution1917 from './russian-revolution-1917.js';
import * as tradeNetworks1200 from './trade-networks-1200.js';
import * as latinAmericanIndependence1810 from './latin-american-independence-1810.js';
import * as vietnamWar1965 from './vietnam-war-1965.js';

var EXAM_BANKS = {
  // 5★
  'age-of-exploration-1492': ageOfExploration1492,
  'enlightenment': enlightenment,
  'french-revolution-1789': frenchRevolution1789,
  'industrial-revolution-1800': industrialRevolution1800,
  'scramble-for-africa-1884': scrambleForAfrica1884,
  'world-war-two-1942': worldWarTwo1942,
  'cold-war-1962': coldWar1962,
  'constitutional-convention-1787': constitutionalConvention1787,
  'slavery-abolition-1850': slaveryAbolition1850,
  'civil-war-1861': civilWar1861,
  'civil-rights-1965': civilRights1965,
  'asian-imperialism-1839': asianImperialism1839,
  // 4★
  'islamic-rise': islamicRise,
  'tang-song-china': tangSongChina,
  'mongol-empire': mongolEmpire,
  'renaissance-1500': renaissance1500,
  'reformation-1517': reformation1517,
  'gunpowder-empires-1600': gunpowderEmpires1600,
  'world-war-one-1914': worldWarOne1914,
  'decolonization-1960': decolonization1960,
  'american-revolution-1776': americanRevolution1776,
  'hamilton-jefferson-1790s': hamiltonJefferson1790s,
  'reconstruction-1877': reconstruction1877,
  'gilded-age-1890': gildedAge1890,
  'progressive-era-1910': progressiveEra1910,
  'great-depression-1933': greatDepression1933,
  'haitian-revolution-1791': haitianRevolution1791,
  'meiji-restoration-1868': meijiRestoration1868,
  'russian-revolution-1917': russianRevolution1917,
  'trade-networks-1200': tradeNetworks1200,
  'latin-american-independence-1810': latinAmericanIndependence1810,
  'vietnam-war-1965': vietnamWar1965,
};

export function hasExamBank(topicId) {
  return !!EXAM_BANKS[topicId];
}

export function loadExamBank(topicId) {
  var m = EXAM_BANKS[topicId];
  if (!m) return null;
  return m.default || m;
}
