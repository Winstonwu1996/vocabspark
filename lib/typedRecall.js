/* ─── Know U. Learning — 手填中文回忆测试（typed recall）纯逻辑 ───────────────
 *
 * 背景（创始人女儿反馈）：选择题/词形题可以"凭感觉推理"选对，不需要真记住含义。
 * 加一个【给英文 → 手填中文】的主动产出测试：空输入框没法用排除法，逼出真实回忆。
 *
 * 批改策略：**手填 + 自评**（零 LLM）。
 *   - 中文近义词太多（抗毒素/解毒剂/中和毒素的物质），自动判分要么误判要么得调 LLM
 *     （加重限流/延迟/抽风——这些正是我们这周一直在修的）。
 *   - 我们本地已存标准释义 → 揭晓是免费瞬时的。
 *   - 流程：先手打（强制产出）→ 揭晓时把"她写的 ↔ 标准释义"并排 → 她自评对/模糊/忘。
 *     先打字再揭晓 = 答案锁定后才看参考，没法骗自己；12 岁判断"抓没抓住意思"可靠。
 *
 * 本模块只放纯逻辑（哪些词要手填 + 释义可用性判断），便于单测。UI/自评走 vocab.js
 * 既有的 markQuickReview（自评逻辑不变）。
 * ──────────────────────────────────────────────────────────────────────── */

// quick review 里"释义未就绪"的占位文案（与 vocab.js 内联判断保持一致，集中到此）。
var MEANING_PLACEHOLDERS = [
  "（释义将随学习自动补全）",
  "释义加载失败，请凭印象判断",
  "释义加载中…",
];

/**
 * 释义是否"真实可用"（非空、非占位、含中文字符）。
 * 手填测试要拿它当揭晓的标准答案，所以必须是真释义。
 */
export var hasUsableMeaning = function (meaning) {
  if (!meaning || typeof meaning !== "string") return false;
  var m = meaning.trim();
  if (!m) return false;
  if (MEANING_PLACEHOLDERS.indexOf(m) >= 0) return false;
  // 必须含中文字符（避免拿英文/乱码当标准答案）
  return /[一-鿿]/.test(m);
};

/**
 * 该复习词是否要走"手填中文"测试。
 * MVP 门槛：有可用的标准释义就要手填（复习队列本身 = 已学的重点词）。
 * 没释义的词 → 回退到旧的"翻转查看"闪卡（没标准答案没法对照）。
 *
 * 注：如果将来想进一步收窄到"只有 focus（🟡🔴）词手填"以降摩擦，
 * 在这里加一个 status 白名单即可——调用方已把 status 放进 item（见 vocab.js）。
 * @param {{meaning?: string, status?: string}} item
 */
export var shouldRequireTypedRecall = function (item) {
  if (!item || typeof item !== "object") return false;
  return hasUsableMeaning(item.meaning);
};

/** 手填答案归一化（去首尾空白；仅用于显示 + 可选分析，不参与判分）。*/
export var normalizeTypedAnswer = function (s) {
  if (s == null) return "";
  return String(s).trim();
};

/** 手填答案是否算"有作答"（非空白）。空 → 视作"想不起"，自评走 forgot/fuzzy。*/
export var hasTypedAnswer = function (s) {
  return normalizeTypedAnswer(s).length > 0;
};
