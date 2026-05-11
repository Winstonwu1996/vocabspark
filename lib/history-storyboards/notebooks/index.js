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
