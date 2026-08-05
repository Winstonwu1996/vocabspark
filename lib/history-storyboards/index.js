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

// ─── 按需加载（2026-08-05 改造）────────────────────────────────────
// 此前这里是 71 条 `import * as X from './xxx.js'` 静态引入 —— webpack 把全部 71 门课
// 的正文(约 7.4MB)打进 /history/[topicId] 的客户端包。孩子学一门课要先下载并解析全部课程，
// 学校 Chromebook / 旧平板上首屏要等好几秒。
//
// 现在每门课一个 loader，只加载当前这门。
//
// ⚠️ 契约：下游那些**同步** API(loadStoryboard / listLenses / getLensMeta / hasLenses)
// 读的是已加载缓存 —— 调用前必须先 `await preloadStoryboard(topicId)`。
// 页面侧在 urlResolved 那道 shell 闸里预加载，所以渲染时必然已就绪。
// hasStoryboard 不需要加载（只查注册表），可随时同步调用。
var LOADERS = {
  'magna-carta-1215': () => import('./magna-carta-1215.js'),
  'crusades-1099': () => import('./crusades-1099.js'),
  'black-death-1347': () => import('./black-death-1347.js'),
  'renaissance-1500': () => import('./renaissance-1500.js'),
  'reformation-1517': () => import('./reformation-1517.js'),
  'age-of-exploration-1492': () => import('./age-of-exploration-1492.js'),
  'mali-empire-1235': () => import('./mali-empire-1235.js'),
  'tang-song-china': () => import('./tang-song-china.js'),
  'islamic-rise': () => import('./islamic-rise.js'),
  'byzantine-rise': () => import('./byzantine-rise.js'),
  'mongol-empire': () => import('./mongol-empire.js'),
  'scientific-revolution': () => import('./scientific-revolution.js'),
  'pre-columbian': () => import('./pre-columbian.js'),
  'medieval-japan': () => import('./medieval-japan.js'),
  'enlightenment': () => import('./enlightenment.js'),
  'constitutional-convention-1787': () => import('./constitutional-convention-1787.js'),
  'haitian-revolution-1791': () => import('./haitian-revolution-1791.js'),
  'meiji-restoration-1868': () => import('./meiji-restoration-1868.js'),
  'russian-revolution-1917': () => import('./russian-revolution-1917.js'),
  'contemporary-us-1980': () => import('./contemporary-us-1980.js'),
  'hamilton-jefferson-1790s': () => import('./hamilton-jefferson-1790s.js'),
  'jackson-indian-removal-1830': () => import('./jackson-indian-removal-1830.js'),
  'slavery-abolition-1850': () => import('./slavery-abolition-1850.js'),
  'civil-war-1861': () => import('./civil-war-1861.js'),
  'reconstruction-1877': () => import('./reconstruction-1877.js'),
  'chinese-exclusion-1882': () => import('./chinese-exclusion-1882.js'),
  'gilded-age-1890': () => import('./gilded-age-1890.js'),
  'womens-suffrage-1920': () => import('./womens-suffrage-1920.js'),
  'industrial-revolution-1800': () => import('./industrial-revolution-1800.js'),
  'french-revolution-1789': () => import('./french-revolution-1789.js'),
  'scramble-for-africa-1884': () => import('./scramble-for-africa-1884.js'),
  'world-war-one-1914': () => import('./world-war-one-1914.js'),
  'progressive-era-1910': () => import('./progressive-era-1910.js'),
  'world-war-two-1942': () => import('./world-war-two-1942.js'),
  'cold-war-1962': () => import('./cold-war-1962.js'),
  'decolonization-1960': () => import('./decolonization-1960.js'),
  'civil-rights-1965': () => import('./civil-rights-1965.js'),
  'great-depression-1933': () => import('./great-depression-1933.js'),
  'hammurabi-code-1754bce': () => import('./hammurabi-code-1754bce.js'),
  'babylonian-exile-586bce': () => import('./babylonian-exile-586bce.js'),
  'roman-republic-fall-44bce': () => import('./roman-republic-fall-44bce.js'),
  'ancient-egypt-2550bce': () => import('./ancient-egypt-2550bce.js'),
  'ancient-greece-480bce': () => import('./ancient-greece-480bce.js'),
  'mauryan-india-261bce': () => import('./mauryan-india-261bce.js'),
  'qin-china-221bce': () => import('./qin-china-221bce.js'),
  'roman-empire-peak-117': () => import('./roman-empire-peak-117.js'),
  'gunpowder-empires-1600': () => import('./gunpowder-empires-1600.js'),
  'manifest-destiny-1845': () => import('./manifest-destiny-1845.js'),
  'reform-movements-1840': () => import('./reform-movements-1840.js'),
  'thirteen-colonies-1700': () => import('./thirteen-colonies-1700.js'),
  'han-china-130bce': () => import('./han-china-130bce.js'),
  'american-revolution-1776': () => import('./american-revolution-1776.js'),
  'westward-expansion-1869': () => import('./westward-expansion-1869.js'),
  'globalization-1995': () => import('./globalization-1995.js'),
  'native-americans-pre1500': () => import('./native-americans-pre1500.js'),
  'trade-networks-1200': () => import('./trade-networks-1200.js'),
  'asian-imperialism-1839': () => import('./asian-imperialism-1839.js'),
  'mesopotamia-3500bce': () => import('./mesopotamia-3500bce.js'),
  'indus-valley-2600bce': () => import('./indus-valley-2600bce.js'),
  'early-humans-10000bce': () => import('./early-humans-10000bce.js'),
  'ancient-israel-1000bce': () => import('./ancient-israel-1000bce.js'),
  'gupta-india-320': () => import('./gupta-india-320.js'),
  'persian-empire-550bce': () => import('./persian-empire-550bce.js'),
  'latin-american-independence-1810': () => import('./latin-american-independence-1810.js'),
  'interwar-totalitarianism-1919': () => import('./interwar-totalitarianism-1919.js'),
  'vietnam-war-1965': () => import('./vietnam-war-1965.js'),
  'cold-war-home-front-1950': () => import('./cold-war-home-front-1950.js'),
  'spanish-american-war-1898': () => import('./spanish-american-war-1898.js'),
  'road-to-revolution-1763': () => import('./road-to-revolution-1763.js'),
  'colonial-america-1650': () => import('./colonial-america-1650.js'),
  'early-republic-1800': () => import('./early-republic-1800.js'),
};

// topicId -> 已加载模块
var _loaded = {};
// topicId -> 进行中的 Promise（防同一门课并发重复加载）
var _inflight = {};

// ─── 预加载某门课（异步）──
// 返回模块；未注册的 topicId 返回 null（不抛错，调用方按"没有 storyboard"处理）
export var preloadStoryboard = function(topicId) {
  if (!topicId || !LOADERS[topicId]) return Promise.resolve(null);
  if (_loaded[topicId]) return Promise.resolve(_loaded[topicId]);
  if (_inflight[topicId]) return _inflight[topicId];
  _inflight[topicId] = LOADERS[topicId]().then(function(mod) {
    _loaded[topicId] = mod;
    delete _inflight[topicId];
    return mod;
  }).catch(function(err) {
    delete _inflight[topicId];
    throw err;
  });
  return _inflight[topicId];
};

// 已加载则返回模块，否则 null（同步）
var _mod = function(topicId) {
  return (topicId && _loaded[topicId]) || null;
};

// 供调用方自查是否已就绪（诊断用）
export var isStoryboardLoaded = function(topicId) {
  return Boolean(topicId && _loaded[topicId]);
};

// ─── 检查 Topic 是否有 storyboard ──
// 只查注册表，不触发加载 —— 这样 getEffectiveTurns 的分支判断在预加载前也是对的
export var hasStoryboard = function(topicId) {
  return Boolean(topicId && LOADERS[topicId]);
};

// ─── 检查 Topic 是否有多 lens（v2）──
export var hasLenses = function(topicId) {
  var mod = _mod(topicId);
  return Boolean(mod && mod.lenses);
};

// ─── 列出 Topic 的 lens 选项（给 UI 用）──
// 返回 [{id, name, nameCn, role, description}, ...]
export var listLenses = function(topicId) {
  var mod = _mod(topicId);
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
  var mod = _mod(topicId);
  if (!mod) {
    // 区分"没这门课"和"忘了预加载"——后者是接线 bug，错误信息要能直接定位
    if (LOADERS[topicId]) {
      throw new Error('Storyboard not preloaded: ' + topicId + ' — 调用前需 await preloadStoryboard(topicId)');
    }
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
  var mod = _mod(topicId);
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
  return Object.keys(LOADERS);
};
