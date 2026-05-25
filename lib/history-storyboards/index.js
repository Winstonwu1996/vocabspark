// ─── History Storyboards Index ──────────────────────────────────
//
// Story-First Pedagogy v2 — Lens 模型
// 见 lib/history-storyboards/magna-carta-1215.js + docs/STORY_FIRST_PEDAGOGY.md
//
// 每个 Topic 文件可以 export：
//   - default: storyboard 数组（v1 单 storyboard，向后兼容）
//   - lenses: { [lensId]: { id, name, role, description, storyboard } }（v2 multi-lens）
//   - defaultLens: 字符串 lensId
//
// 当前迁移进度：
//   ✅ magna-carta-1215  v2 lens-based（3 lens：king-john + stephen-langton + tom-villein）
//   ✅ crusades-1099     v2 lens-based（3 lens：roger-toulouse + alexios + aisha-jerusalem）
//   ✅ black-death-1347  v2 lens-based（3 lens：agnolo-siena + konrad-strasbourg + devorah-strasbourg）
//   ✅ renaissance-1500  v2 lens-based（3 lens：lorenzo-medici + savonarola + lucia-widow）
//   ✅ reformation-1517   v2 lens-based（3 lens：martin-luther + erasmus + sister-agnes）
//   ✅ age-of-exploration-1492  v2 lens-based（3 lens：columbus + las-casas + anacaona-jr）
//   ✅ mali-empire-1235  v2 lens-based（3 lens：mansa-musa + ibn-battuta + aisha-1413）
//   ✅ tang-song-china   v2 lens-based（3 lens：emperor-huizong + su-shi + li-qingzhao）
//   ✅ islamic-rise      v2 lens-based（3 lens：al-mamun + al-khwarizmi + fatima-al-fihri）
//   ✅ byzantine-rise    v2 lens-based（3 lens：emperor-justinian + theodora + anna-the-iconographer）
//   ✅ mongol-empire     v2 lens-based（3 lens：genghis-khan + yelu-chucai + sorghaghtani）
//   ✅ scientific-revolution v2 lens-based（3 lens：newton + mersenne + maria-kirch）
//   ✅ pre-columbian     v2 lens-based（3 lens：pachacuti-inca + malintzin-mediator + ix-mutal-weaver）
//   ✅ medieval-japan    v2 lens-based（3 lens：tokimune-defender + sesshu-mediator + masako-widow-nun）
//   ✅ enlightenment     v2 lens-based（3 lens：voltaire-perpetrator + gouges-mediator + toussaint-receiving）

import * as magnaCartaModule from './magna-carta-1215.js';
import * as crusadesModule from './crusades-1099.js';
import * as blackDeathModule from './black-death-1347.js';
import * as renaissanceModule from './renaissance-1500.js';
import * as reformationModule from './reformation-1517.js';
import * as ageOfExplorationModule from './age-of-exploration-1492.js';
import * as maliEmpireModule from './mali-empire-1235.js';
import * as tangSongChinaModule from './tang-song-china.js';
import * as islamicRiseModule from './islamic-rise.js';
import * as byzantineRiseModule from './byzantine-rise.js';
import * as mongolEmpireModule from './mongol-empire.js';
import * as scientificRevolutionModule from './scientific-revolution.js';
import * as preColumbianModule from './pre-columbian.js';
import * as medievalJapanModule from './medieval-japan.js';
import * as enlightenmentModule from './enlightenment.js';

// ── G6-G12 扩展 base-content 草稿 (2026-05-22) — 已注册可加载, 但未进 TOPIC_REGISTRY (dark, 不上线), 待 pipeline 第6-10步 ──
import * as constitutionalConventionModule from './constitutional-convention-1787.js';
import * as hamiltonJeffersonModule from './hamilton-jefferson-1790s.js';
import * as jacksonIndianRemovalModule from './jackson-indian-removal-1830.js';
import * as slaveryAbolitionModule from './slavery-abolition-1850.js';
import * as civilWarModule from './civil-war-1861.js';
import * as reconstructionModule from './reconstruction-1877.js';
import * as chineseExclusionModule from './chinese-exclusion-1882.js';
import * as gildedAgeModule from './gilded-age-1890.js';
import * as womensSuffrageModule from './womens-suffrage-1920.js';
import * as industrialRevolutionModule from './industrial-revolution-1800.js';
import * as frenchRevolutionModule from './french-revolution-1789.js';
import * as scrambleForAfricaModule from './scramble-for-africa-1884.js';
import * as worldWarOneModule from './world-war-one-1914.js';
import * as progressiveEraModule from './progressive-era-1910.js';
import * as worldWarTwoModule from './world-war-two-1942.js';
import * as coldWarModule from './cold-war-1962.js';
import * as decolonizationModule from './decolonization-1960.js';
import * as civilRightsModule from './civil-rights-1965.js';
import * as greatDepressionModule from './great-depression-1933.js';
import * as hammurabiCodeModule from './hammurabi-code-1754bce.js';
import * as babylonianExileModule from './babylonian-exile-586bce.js';
import * as romanRepublicFallModule from './roman-republic-fall-44bce.js';

// ── G6 古代史补缺 (2026-05-24) — 已注册可加载, 未进 TOPIC_REGISTRY (dark), 待 Gate 3 ──
import * as ancientEgyptModule from './ancient-egypt-2550bce.js';
import * as ancientGreeceModule from './ancient-greece-480bce.js';
import * as mauryanIndiaModule from './mauryan-india-261bce.js';
import * as qinChinaModule from './qin-china-221bce.js';

// ── 全覆盖第一批 (2026-05-25) ──
import * as romanEmpirePeakModule from './roman-empire-peak-117.js';
import * as gunpowderEmpiresModule from './gunpowder-empires-1600.js';
import * as manifestDestinyModule from './manifest-destiny-1845.js';
import * as reformMovementsModule from './reform-movements-1840.js';

export var STORYBOARDS = {
  'magna-carta-1215': magnaCartaModule,
  'crusades-1099': crusadesModule,
  'black-death-1347': blackDeathModule,
  'renaissance-1500': renaissanceModule,
  'reformation-1517': reformationModule,
  'age-of-exploration-1492': ageOfExplorationModule,
  'mali-empire-1235': maliEmpireModule,
  'tang-song-china': tangSongChinaModule,
  'islamic-rise': islamicRiseModule,
  'byzantine-rise': byzantineRiseModule,
  'mongol-empire': mongolEmpireModule,
  'scientific-revolution': scientificRevolutionModule,
  'pre-columbian': preColumbianModule,
  'medieval-japan': medievalJapanModule,
  'enlightenment': enlightenmentModule,
  // ── G6-G12 扩展 base-content 草稿 (dark, 未进 TOPIC_REGISTRY) ──
  'constitutional-convention-1787': constitutionalConventionModule,
  'hamilton-jefferson-1790s': hamiltonJeffersonModule,
  'jackson-indian-removal-1830': jacksonIndianRemovalModule,
  'slavery-abolition-1850': slaveryAbolitionModule,
  'civil-war-1861': civilWarModule,
  'reconstruction-1877': reconstructionModule,
  'chinese-exclusion-1882': chineseExclusionModule,
  'gilded-age-1890': gildedAgeModule,
  'womens-suffrage-1920': womensSuffrageModule,
  'industrial-revolution-1800': industrialRevolutionModule,
  'french-revolution-1789': frenchRevolutionModule,
  'scramble-for-africa-1884': scrambleForAfricaModule,
  'world-war-one-1914': worldWarOneModule,
  'progressive-era-1910': progressiveEraModule,
  'world-war-two-1942': worldWarTwoModule,
  'cold-war-1962': coldWarModule,
  'decolonization-1960': decolonizationModule,
  'civil-rights-1965': civilRightsModule,
  'great-depression-1933': greatDepressionModule,
  'hammurabi-code-1754bce': hammurabiCodeModule,
  'babylonian-exile-586bce': babylonianExileModule,
  'roman-republic-fall-44bce': romanRepublicFallModule,
  // ── G6 古代史补缺 (dark, 未进 TOPIC_REGISTRY) ──
  'ancient-egypt-2550bce': ancientEgyptModule,
  'ancient-greece-480bce': ancientGreeceModule,
  'mauryan-india-261bce': mauryanIndiaModule,
  'qin-china-221bce': qinChinaModule,
  // ── 全覆盖第一批 (2026-05-25) ──
  'roman-empire-peak-117': romanEmpirePeakModule,
  'gunpowder-empires-1600': gunpowderEmpiresModule,
  'manifest-destiny-1845': manifestDestinyModule,
  'reform-movements-1840': reformMovementsModule,
};

// ─── 检查 Topic 是否有 storyboard ──
export var hasStoryboard = function(topicId) {
  return Boolean(STORYBOARDS[topicId]);
};

// ─── 检查 Topic 是否有多 lens（v2）──
export var hasLenses = function(topicId) {
  var mod = STORYBOARDS[topicId];
  return Boolean(mod && mod.lenses);
};

// ─── 列出 Topic 的 lens 选项（给 UI 用）──
// 返回 [{id, name, nameCn, role, description}, ...]
export var listLenses = function(topicId) {
  var mod = STORYBOARDS[topicId];
  if (!mod || !mod.lenses) return [];
  return Object.values(mod.lenses).map(function(lens) {
    return {
      id: lens.id,
      name: lens.name,
      nameCn: lens.nameCn,
      role: lens.role,
      description: lens.description,
      nodeCount: lens.storyboard.length,
    };
  });
};

// ─── 加载 storyboard（支持 lens 选择）──
//   loadStoryboard(topicId)              → default lens 的 storyboard（v2 取 defaultLens / v1 取 default export）
//   loadStoryboard(topicId, 'king-john') → 指定 lens 的 storyboard
export var loadStoryboard = function(topicId, lensId) {
  var mod = STORYBOARDS[topicId];
  if (!mod) {
    throw new Error('Storyboard not found for topic: ' + topicId);
  }
  // v2 lens-based
  if (mod.lenses) {
    var actualLensId = lensId || mod.defaultLens;
    var lens = mod.lenses[actualLensId];
    if (!lens) {
      throw new Error('Lens not found: ' + actualLensId + ' (available: ' + Object.keys(mod.lenses).join(',') + ')');
    }
    return lens.storyboard;
  }
  // v1 单 storyboard fallback
  return mod.default;
};

// ─── 拿到 lens 元信息（给 UI 显示用）──
export var getLensMeta = function(topicId, lensId) {
  var mod = STORYBOARDS[topicId];
  if (!mod || !mod.lenses) return null;
  var actualLensId = lensId || mod.defaultLens;
  var lens = mod.lenses[actualLensId];
  if (!lens) return null;
  return {
    id: lens.id,
    name: lens.name,
    nameCn: lens.nameCn,
    role: lens.role,
    description: lens.description,
    nodeCount: lens.storyboard.length,
  };
};

// ─── 列出所有有 storyboard 的 Topic ──
export var listStoryboards = function() {
  return Object.keys(STORYBOARDS);
};
