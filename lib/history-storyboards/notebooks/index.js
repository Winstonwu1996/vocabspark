// ─── 同伴笔记本索引 v2 ───────────────────────────
// Registry for Companion Notebook architecture (Xiaowei's Notebook).
//
// 每个 Topic 一个 notebook 文件，导出 { notebook, default }。
// 此处只做 registry 注册 + 三个 helper：hasNotebook / loadNotebook / listNotebookTopics。
//
// 完成状态（14 Topics, 按课纲缺口优先级排序）：
//   ✅ enlightenment          (52% → 95%)
//   ✅ islamic-rise           (38% → 92%)
//   ✅ age-of-exploration-1492(48% → 92%)
//   ✅ scientific-revolution   (63% → 95%)
//   ✅ tang-song-china        (62% → 92%)
//   ✅ crusades-1099          (65% → 95%)
//   ✅ reformation-1517       (72% → 96%)
//   ✅ renaissance-1500       (58% → 95%)
//   ✅ medieval-japan         (63% → 95%)
//   ✅ pre-columbian          (72% → 93%)
//   ✅ magna-carta-1215       (83% → 97%)
//   ✅ black-death-1347       (78% → 95%)
//   ✅ mali-empire-1235       (82% → 96%)
//   ✅ byzantine-rise         (88% → 97%)
//   ✅ mongol-empire          (87% → 96%)

import * as enlightenmentNotebook from './enlightenment.js';
import * as islamicRiseNotebook from './islamic-rise.js';
import * as ageOfExplorationNotebook from './age-of-exploration-1492.js';
import * as scientificRevolutionNotebook from './scientific-revolution.js';
import * as tangSongNotebook from './tang-song-china.js';
import * as crusadesNotebook from './crusades-1099.js';
import * as reformationNotebook from './reformation-1517.js';
import * as medievalJapanNotebook from './medieval-japan.js';
import * as renaissanceNotebook from './renaissance-1500.js';
import * as magnaCarta from './magna-carta-1215.js';
import * as blackDeathNotebook from './black-death-1347.js';
import * as preColumbianNotebook from './pre-columbian.js';
import * as maliEmpireNotebook from './mali-empire-1235.js';
import * as mongolEmpireNotebook from './mongol-empire.js';
import * as byzantineRiseNotebook from './byzantine-rise.js';

// ── G6-G12 扩展 (22 个 base-content topic 的同伴笔记本, 2026-05-23) ──
import * as constitutionalConventionNb from './constitutional-convention-1787.js';
import * as hamiltonJeffersonNb from './hamilton-jefferson-1790s.js';
import * as jacksonIndianRemovalNb from './jackson-indian-removal-1830.js';
import * as slaveryAbolitionNb from './slavery-abolition-1850.js';
import * as civilWarNb from './civil-war-1861.js';
import * as reconstructionNb from './reconstruction-1877.js';
import * as chineseExclusionNb from './chinese-exclusion-1882.js';
import * as gildedAgeNb from './gilded-age-1890.js';
import * as womensSuffrageNb from './womens-suffrage-1920.js';
import * as industrialRevolutionNb from './industrial-revolution-1800.js';
import * as frenchRevolutionNb from './french-revolution-1789.js';
import * as scrambleForAfricaNb from './scramble-for-africa-1884.js';
import * as worldWarOneNb from './world-war-one-1914.js';
import * as progressiveEraNb from './progressive-era-1910.js';
import * as worldWarTwoNb from './world-war-two-1942.js';
import * as coldWarNb from './cold-war-1962.js';
import * as decolonizationNb from './decolonization-1960.js';
import * as civilRightsNb from './civil-rights-1965.js';
import * as greatDepressionNb from './great-depression-1933.js';
import * as hammurabiCodeNb from './hammurabi-code-1754bce.js';
import * as babylonianExileNb from './babylonian-exile-586bce.js';
import * as romanRepublicFallNb from './roman-republic-fall-44bce.js';

// ── G6 古代史补缺 (2026-05-24) ──
import * as ancientEgyptNb from './ancient-egypt-2550bce.js';
import * as ancientGreeceNb from './ancient-greece-480bce.js';
import * as mauryanIndiaNb from './mauryan-india-261bce.js';
import * as qinChinaNb from './qin-china-221bce.js';

// ── 全覆盖第一批 (2026-05-25) ──
import * as romanEmpirePeakNb from './roman-empire-peak-117.js';
import * as gunpowderEmpiresNb from './gunpowder-empires-1600.js';
import * as manifestDestinyNb from './manifest-destiny-1845.js';
import * as reformMovementsNb from './reform-movements-1840.js';

export var NOTEBOOKS = {
  'enlightenment': enlightenmentNotebook,
  'islamic-rise': islamicRiseNotebook,
  'age-of-exploration-1492': ageOfExplorationNotebook,
  'scientific-revolution': scientificRevolutionNotebook,
  'tang-song-china': tangSongNotebook,
  'crusades-1099': crusadesNotebook,
  'reformation-1517': reformationNotebook,
  'medieval-japan': medievalJapanNotebook,
  'renaissance-1500': renaissanceNotebook,
  'magna-carta-1215': magnaCarta,
  'black-death-1347': blackDeathNotebook,
  'pre-columbian': preColumbianNotebook,
  'mali-empire-1235': maliEmpireNotebook,
  'mongol-empire': mongolEmpireNotebook,
  'byzantine-rise': byzantineRiseNotebook,
  // ── G6-G12 扩展 (22) ──
  'constitutional-convention-1787': constitutionalConventionNb,
  'hamilton-jefferson-1790s': hamiltonJeffersonNb,
  'jackson-indian-removal-1830': jacksonIndianRemovalNb,
  'slavery-abolition-1850': slaveryAbolitionNb,
  'civil-war-1861': civilWarNb,
  'reconstruction-1877': reconstructionNb,
  'chinese-exclusion-1882': chineseExclusionNb,
  'gilded-age-1890': gildedAgeNb,
  'womens-suffrage-1920': womensSuffrageNb,
  'industrial-revolution-1800': industrialRevolutionNb,
  'french-revolution-1789': frenchRevolutionNb,
  'scramble-for-africa-1884': scrambleForAfricaNb,
  'world-war-one-1914': worldWarOneNb,
  'progressive-era-1910': progressiveEraNb,
  'world-war-two-1942': worldWarTwoNb,
  'cold-war-1962': coldWarNb,
  'decolonization-1960': decolonizationNb,
  'civil-rights-1965': civilRightsNb,
  'great-depression-1933': greatDepressionNb,
  'hammurabi-code-1754bce': hammurabiCodeNb,
  'babylonian-exile-586bce': babylonianExileNb,
  'roman-republic-fall-44bce': romanRepublicFallNb,
  // ── G6 古代史补缺 (4) ──
  'ancient-egypt-2550bce': ancientEgyptNb,
  'ancient-greece-480bce': ancientGreeceNb,
  'mauryan-india-261bce': mauryanIndiaNb,
  'qin-china-221bce': qinChinaNb,
  // ── 全覆盖第一批 (2026-05-25) ──
  'roman-empire-peak-117': romanEmpirePeakNb,
  'gunpowder-empires-1600': gunpowderEmpiresNb,
  'manifest-destiny-1845': manifestDestinyNb,
  'reform-movements-1840': reformMovementsNb,
};

export var hasNotebook = function (topicId) {
  return Boolean(NOTEBOOKS[topicId]);
};

export var loadNotebook = function (topicId) {
  var mod = NOTEBOOKS[topicId];
  if (!mod) return null;
  return mod.default || mod.notebook;
};

export var listNotebookTopics = function () {
  return Object.keys(NOTEBOOKS);
};

// ─── 从同伴笔记本派生 Mastery Gate 数据 ───────────────────────────────
// base-content topic (22 个 G6-G12) 没有手写 masteryChecks。这里把 notebook 的
// keyTerms/keyFigures(拼写) + mainConcepts 考点卡(定义) + thinkingQuestions DBQ(应用)
// 转成 MasteryGateOverlay 需要的结构，让这些 topic 能完整通关。
// 返回 { mustMemorize:{vocab,concepts}, masteryChecks:{required:[spelling,definition,application]} } 或 null。
var _nbStr = function (x) { if (!x) return ""; if (typeof x === "string") return x; return x.cn || x.en || ""; };
var _nbStrEn = function (x) { if (!x) return ""; if (typeof x === "string") return x; return x.en || x.cn || ""; };

export var buildMasteryFromNotebook = function (topicId) {
  var nb = loadNotebook(topicId);
  if (!nb) return null;
  var cards = Array.isArray(nb.mainConcepts) ? nb.mainConcepts : [];
  var prev = nb.preview || {};
  var tqs = Array.isArray(nb.thinkingQuestions) ? nb.thinkingQuestions : [];

  // 概念表（DefinitionTest 按 conceptId 查）
  var concepts = cards.map(function (c) {
    var sa = c.storyAnchor || {};
    var defCn = _nbStr(sa.standaloneText) || (sa.xiaoweiNote ? _nbStr(sa.xiaoweiNote) : "") || (c.termCn || "");
    var defEn = _nbStrEn(sa.standaloneText) || (sa.xiaoweiNote ? _nbStrEn(sa.xiaoweiNote) : "") || (c.termEn || "");
    return {
      id: c.id,
      en: c.termEn || c.termCn || c.id,
      cn: c.termCn || c.termEn || c.id,
      defEn: String(defEn).replace(/\s+/g, " ").slice(0, 300),
      defCn: String(defCn).replace(/\s+/g, " ").slice(0, 300),
    };
  });

  // 拼写题：英文术语 + mustKnow 英文人名
  var spellingItems = [];
  (prev.keyTerms || []).forEach(function (t) {
    if (t && t.en && /[a-zA-Z]/.test(t.en)) {
      spellingItems.push({ prompt: "拼出这个词：" + (t.cn || t.en), hint: t.cn || t.en, answer: t.en });
    }
  });
  (prev.keyFigures || []).forEach(function (f) {
    if (f && f.mustKnow && f.nameEn && /[a-zA-Z]/.test(f.nameEn)) {
      spellingItems.push({
        prompt: "拼出这个人名：" + (f.nameCn || f.nameEn) + (f.roleCn ? "（" + f.roleCn + "）" : ""),
        hint: f.nameCn || f.nameEn, answer: f.nameEn,
      });
    }
  });

  // 定义题：每张考点卡一题
  var defItems = concepts.map(function (c) {
    return { conceptId: c.id, prompt: "用你自己的话解释一下：" + c.en + "（" + c.cn + "）。可以中英混着说。" };
  });

  // 应用题：DBQ 思考题
  var appItems = tqs.map(function (q) {
    return { prompt: q.cn || q.en || "", expectedAnswers: [q.hintCn || q.hintEn].filter(Boolean) };
  }).filter(function (it) { return it.prompt; });

  if (!spellingItems.length && !defItems.length && !appItems.length) return null;

  return {
    mustMemorize: { vocab: [], concepts: concepts },
    masteryChecks: {
      required: [
        { sampleSize: Math.min(5, spellingItems.length) || 1,
          items: spellingItems.length ? spellingItems : [{ prompt: "拼出：history", hint: "历史", answer: "history" }] },
        { sampleSize: Math.min(4, defItems.length) || 1, items: defItems },
        { items: appItems.length ? appItems : [{ prompt: "用今天学到的东西，分析一个你身边的现代例子。", expectedAnswers: ["原理迁移正确即可"] }] },
      ],
    },
  };
};
