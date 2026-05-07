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
//   ⏳ 其他 Topic 待 lens 化

import * as magnaCartaModule from './magna-carta-1215.js';
import * as crusadesModule from './crusades-1099.js';
import * as blackDeathModule from './black-death-1347.js';
import * as renaissanceModule from './renaissance-1500.js';
import * as reformationModule from './reformation-1517.js';
import * as ageOfExplorationModule from './age-of-exploration-1492.js';
import * as maliEmpireModule from './mali-empire-1235.js';
import * as tangSongChinaModule from './tang-song-china.js';

export var STORYBOARDS = {
  'magna-carta-1215': magnaCartaModule,
  'crusades-1099': crusadesModule,
  'black-death-1347': blackDeathModule,
  'renaissance-1500': renaissanceModule,
  'reformation-1517': reformationModule,
  'age-of-exploration-1492': ageOfExplorationModule,
  'mali-empire-1235': maliEmpireModule,
  'tang-song-china': tangSongChinaModule,
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
