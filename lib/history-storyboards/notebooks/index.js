// ─── 同伴笔记本索引 v2 ───────────────────────────
// Registry for Companion Notebook architecture (Xiao U's Notebook).
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

// ─── 按需加载（2026-08-05 瘦身）──────────────────────────────────
// 此前 71 条静态 import 把 3.5MB 笔记本全打进包，而且因为 history-topics.js 的
// getTopic→buildPreviewTopic 依赖它，这 4.19MB 同时挂在 /history、/history/[topicId]、
// /atlas-lab 三个页面上。课程列表其实只要每门课的**标题** → 走 light-index.js(8KB)。
//
// ⚠️ 契约：loadNotebook / buildMasteryFromNotebook 是同步的，读已加载缓存。
// 需要完整笔记本的地方(课内复习页/完成页/mastery 门)必须先 await preloadNotebook(topicId)。
// hasNotebook 只查注册表，随时可同步调用。
var LOADERS = {
  'enlightenment': () => import('./enlightenment.js'),
  'islamic-rise': () => import('./islamic-rise.js'),
  'age-of-exploration-1492': () => import('./age-of-exploration-1492.js'),
  'scientific-revolution': () => import('./scientific-revolution.js'),
  'tang-song-china': () => import('./tang-song-china.js'),
  'crusades-1099': () => import('./crusades-1099.js'),
  'reformation-1517': () => import('./reformation-1517.js'),
  'medieval-japan': () => import('./medieval-japan.js'),
  'renaissance-1500': () => import('./renaissance-1500.js'),
  'magna-carta-1215': () => import('./magna-carta-1215.js'),
  'black-death-1347': () => import('./black-death-1347.js'),
  'pre-columbian': () => import('./pre-columbian.js'),
  'mali-empire-1235': () => import('./mali-empire-1235.js'),
  'mongol-empire': () => import('./mongol-empire.js'),
  'byzantine-rise': () => import('./byzantine-rise.js'),
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
  'han-china-130bce': () => import('./han-china-130bce.js'),
  'american-revolution-1776': () => import('./american-revolution-1776.js'),
  'thirteen-colonies-1700': () => import('./thirteen-colonies-1700.js'),
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

var _loaded = {};
var _inflight = {};

export var preloadNotebook = function (topicId) {
  if (!topicId || !LOADERS[topicId]) return Promise.resolve(null);
  if (_loaded[topicId]) return Promise.resolve(_loaded[topicId]);
  if (_inflight[topicId]) return _inflight[topicId];
  _inflight[topicId] = LOADERS[topicId]().then(function (mod) {
    _loaded[topicId] = mod;
    delete _inflight[topicId];
    return mod;
  }).catch(function (err) {
    delete _inflight[topicId];
    throw err;
  });
  return _inflight[topicId];
};

export var isNotebookLoaded = function (topicId) {
  return Boolean(topicId && _loaded[topicId]);
};

// 只查注册表 —— 不触发加载。判断"这门课有没有笔记本"在预加载前也必须正确。
export var hasNotebook = function (topicId) {
  return Boolean(topicId && LOADERS[topicId]);
};

// 同步读缓存。**未预加载则返回 null** —— 调用方要么先 preload，要么按"暂无笔记本"降级
// （复习页/完成页对 null 本来就有处理：不渲染考点卡区块，不会崩）。
export var loadNotebook = function (topicId) {
  var mod = (topicId && _loaded[topicId]) || null;
  if (!mod) return null;
  return mod.default || mod.notebook;
};

export var listNotebookTopics = function () {
  return Object.keys(LOADERS);
};

// ─── 全量加载（**只给 scripts/ 下的审计脚本和生成器用**）──
// 返回 { topicId: module } —— 等价于改造前的 NOTEBOOKS 导出。
// ⚠️ 客户端代码永远不要调：会把 3.5MB 全拉下来。页面侧用 preloadNotebook(当前这门)。
export var loadAllNotebooks = async function () {
  var out = {};
  var ids = Object.keys(LOADERS);
  for (var i = 0; i < ids.length; i++) {
    out[ids[i]] = await preloadNotebook(ids[i]);
  }
  return out;
};

export var buildMasteryFromNotebook = function (topicId) {
  var nb = loadNotebook(topicId);
  if (!nb) return null;
  var cards = Array.isArray(nb.mainConcepts) ? nb.mainConcepts : [];
  var prev = nb.preview || {};
  var tqs = Array.isArray(nb.thinkingQuestions) ? nb.thinkingQuestions : [];

  // 概念表（DefinitionTest 按 conceptId 查）
  var concepts = cards.map(function (c) {
    var sa = c.storyAnchor || {};
    // 必背「定义」优先级: 专门的 defCn/defEn(干净的学生面向定义) > standaloneText(顶层新 schema 或
    // 嵌套旧 schema) > 术语名本身。**绝不用 xiaoweiNote** —— 那是「小 U 批注」/作者 study note,
    // 含「N6 跨视角锚 / 三遍故事 / 我超喜欢这个设计」这类内部 meta, 不是面向用户的定义 (创始人反馈)。
    // 已迁移课(批量改写后)用 defCn/defEn(干净定义); 未迁移课退回 standaloneText, 再退回
    // xiaoweiNote(旧课兼容 —— 它含作者 meta, 但总比只剩术语名好; 批量加 defCn 后此兜底不再触发)。
    var defCn = (typeof c.defCn === 'string' && c.defCn)
      || _nbStr(c.standaloneText) || _nbStr(sa.standaloneText)
      || _nbStr(c.xiaoweiNote) || _nbStr(sa.xiaoweiNote) || (c.termCn || "");
    var defEn = (typeof c.defEn === 'string' && c.defEn)
      || _nbStrEn(c.standaloneText) || _nbStrEn(sa.standaloneText)
      || _nbStrEn(c.xiaoweiNote) || _nbStrEn(sa.xiaoweiNote) || (c.termEn || "");
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
