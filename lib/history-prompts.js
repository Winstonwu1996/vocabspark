/* ─── Know U. Learning — History Module Prompt Builders ────────────────
 *
 * 每个 turn 调 AI 时用到的 prompt 模板。
 * 复用 lib/api.js 的 callAPIStream / callAPI，但有自己的 system prompt 设计。
 *
 * 设计：AI 不复述 ai_seed，而是用它 + profile + history 即兴写出对话。
 */

import { UNTRANSLATABLE_TERMS } from './history-topics';

// ─── 通用 system prompt ──────────────────────────────────────────────
export var buildHistorySystemPrompt = function(opts) {
  opts = opts || {};
  var topic = opts.topic;
  var profile = opts.profile || "";
  var userName = opts.userName || "你";
  var userAge = opts.userAge || 13;
  var userSchool = opts.userSchool || "你的学校";
  var worldview = opts.worldview || null;
  var history = opts.history || [];

  var untranslatableList = Object.keys(UNTRANSLATABLE_TERMS).join(", ");

  return [
    "你是 " + userName + " 的历史课伙伴 — 不是老师，是个懂历史也懂 13 岁孩子世界的朋友。",
    "",
    "【教学法】",
    "- 用她已熟的中国史做锚点（唐律 / 天子 / 家国天下）",
    "- 三维度桥接：法律 / 政教 / 私有制",
    "- 不下结论 — 苏格拉底式提问，让她自己想出来",
    "- 朋友语气，不老师味",
    "- 中文为主（她需要先理解，不是先练英语）",
    "- 关键英文词必须用英文嵌入（charter, clause, baron, monarchy, tyranny, parliament, feudal, rebel, consent, rule of law, due process, law of the land 等）",
    "- 以下词**绝不**给中文翻译，只用情境/类比解释：" + untranslatableList,
    "",
    "【口吻边界】",
    "- 50-150 字 / turn（不要写长篇大论）",
    "- 不要复述指令原文，要用她的世界自然写出",
    "- 不要 cheesy 鸡汤",
    "- 类比要真结构对应（不能因为她喜欢 K-pop 就硬塞 Blackpink）",
    "",
    "【当前 Topic】",
    "- " + (topic ? topic.title.cn + " (" + topic.title.en + ", " + topic.year + ")" : "Magna Carta 1215"),
    "- HSS Standard: " + (topic ? topic.hssStandard : "7.6.5"),
    "",
    "【用户画像】",
    profile || "（暂无 — 用通用 7 年级 ESL 中国学生默认）",
    "",
    "【用户基本信息】",
    "- 姓名: " + userName,
    "- 年龄: " + userAge + " 岁",
    "- 学校: " + userSchool,
    "",
    worldview ? buildWorldviewSection(worldview) : "",
    history && history.length > 0 ? buildHistorySection(history) : "",
  ].filter(Boolean).join("\n");
};

var buildWorldviewSection = function(worldview) {
  if (!worldview) return "";
  var lines = ["【对她的观察 (worldview snapshot)】"];

  if (worldview.initialSeed) {
    lines.push("(这是首次对话，根据 profile 模拟的初始 seed — 谨慎使用，等积累真实回答后再依赖)");
  }

  if (worldview.reasoningStyle && worldview.reasoningStyle.pattern) {
    lines.push("- 思维方式: " + worldview.reasoningStyle.pattern);
  }
  if (worldview.knowledgeAnchors) {
    var anchors = Object.keys(worldview.knowledgeAnchors).map(function(k) {
      var a = worldview.knowledgeAnchors[k];
      return k + " (" + (a.strength || a) + ")";
    }).join(", ");
    if (anchors) lines.push("- 知识锚点强度: " + anchors);
  }
  if (worldview.selfDisclosure && worldview.selfDisclosure.length > 0) {
    lines.push("- 她过去说过的真实生活片段（用引用她原话的方式 callback，不要第三人称分析她）:");
    worldview.selfDisclosure.slice(-3).forEach(function(d) {
      lines.push("  · " + d.content);
    });
  }
  return lines.join("\n");
};

var buildHistorySection = function(history) {
  if (!history || history.length === 0) return "";
  var lines = ["【本次对话历史（最近 6 轮）】"];
  history.slice(-6).forEach(function(h) {
    if (h.role === "user") {
      lines.push("[她说] " + h.content);
    } else if (h.role === "ai") {
      lines.push("[你之前说] " + (h.content || "").substring(0, 120) + "...");
    }
  });
  return lines.join("\n");
};

// ─── Turn-specific user prompt ───────────────────────────────────────
export var buildTurnPrompt = function(turn, opts) {
  opts = opts || {};
  var lastUserAnswer = opts.lastUserAnswer;
  var ai_seed = turn.ai_seed || "";

  var blocks = [
    "现在是第 " + turn.n + " 轮 / 共 13 轮，move = " + turn.move,
    "",
    "【本轮指令（不要复述，用她的世界自然写出）】",
    ai_seed,
  ];

  // ── Winston review #8：必背词必须先在对话里出现 ──
  if (turn.mustIntroduce && turn.mustIntroduce.length > 0) {
    blocks.push("");
    blocks.push("【本轮必须自然引入这些核心词（mustMemorize 词汇）】");
    blocks.push("第一次出现时，**必须按这个格式**：⭐**word**（中文意思）— 例如 ⭐**charter**（特许状）。");
    blocks.push("这是为了她后续要拼写测试 — 在对话里没见过的词不能考。");
    turn.mustIntroduce.forEach(function(item) {
      blocks.push("  - " + item.word + " — 中文: " + item.cn);
    });
    blocks.push("自然嵌入对话流，不要硬塞清单。每个词只在第一次出现时加 ⭐ 标和中文。");
  }

  if (lastUserAnswer) {
    blocks.push("");
    blocks.push("【她刚才说的话】");
    blocks.push(lastUserAnswer);
    blocks.push("");
    blocks.push("【自然衔接她的回答 — 同时按 PEEL 框架评估】");
    blocks.push("PEEL = Point (观点) / Evidence (证据) / Explanation (解释) / Link (联系到主题)");
    blocks.push("- 如果她答案**结构完整 + 多用英语** → 强烈正反馈（'你这个 Point + Evidence 已经像 8 年级写 essay 的水平了'）");
    blocks.push("- 如果她答案**有观点但缺证据/解释** → 中等正反馈 + 引导（'你的观点很对，下次试试加一句 because... 撑住它'）");
    blocks.push("- 如果她答案**很短或纯中文** → 温和提醒（'你这个想法挺好的 — 试试用 1-2 句英文说出来？哪怕错了我帮你修。下次答题加一句 because 解释为什么 — 像写 essay 一样有说服力』）");
    blocks.push("- 不要忽略她说的，不要重复她的话");
  }

  if (turn.expectsInput && turn.inputPrompt) {
    blocks.push("");
    blocks.push("【结尾必须问】这一轮结束时给她一个具体问题：" + turn.inputPrompt);
  }

  if (turn.move === "user-response-evaluate" || turn.move === "source-deep-eval" || turn.move === "roleplay-eval") {
    blocks.push("");
    blocks.push("这是一个评估轮 — 评价她刚才的回答（共情，不评判 + PEEL 引导），然后自然引导到下一轮。");
  }

  // ── Winston review #5：避免提早问到没讲过的内容 ──
  blocks.push("");
  blocks.push("【序列纪律】不要在本轮问需要她已经看过 Magna Carta 实际条款才能答的问题。如果是直觉/对比题，要明确告诉她『先用直觉答，后面我们读真东西验证』。");

  return blocks.join("\n");
};

// ─── Mastery gate evaluation prompts ─────────────────────────────────
export var buildDefinitionEvalPrompt = function(concept, userAnswer) {
  return [
    "评估这个孩子对 \"" + concept.en + "\" (" + concept.cn + ") 概念的回答：",
    "",
    "正确定义：" + concept.defEn + " / " + concept.defCn,
    "",
    "她的回答：「" + userAnswer + "」",
    "",
    "评估原则：",
    "- LENIENT — 抓住核心意思就给过",
    "- 不要求完美英文",
    "- 中英混合 OK",
    "- 错的常见情况：完全空白、明显答非所问、矛盾理解",
    "",
    "输出 JSON：",
    '{"pass": true/false, "feedback": "一句话反馈，朋友语气，30-60 字", "highlightWord": "她答对的关键词，可选"}'
  ].join("\n");
};

export var buildApplicationEvalPrompt = function(item, userAnswer) {
  return [
    "评估这个孩子对应用题的回答：",
    "",
    "题目：" + item.prompt,
    "",
    "期待答案包含的元素之一：" + (item.expectedAnswers || []).join(" / "),
    "",
    "她的回答：「" + userAnswer + "」",
    "",
    "评估原则：",
    "- LENIENT — 抓到正确原则就过",
    "- 中英混合 OK",
    "- 错的常见情况：完全跑题、明显答错、空白",
    "",
    "输出 JSON：",
    '{"pass": true/false, "feedback": "一句话反馈，鼓励但诚实"}'
  ].join("\n");
};

// ─── Worldview snapshot generation prompt ────────────────────────────
export var buildWorldviewSnapshotPrompt = function(topicId, transcript) {
  return [
    "你刚陪一个 13 岁中国学生上完一个 Magna Carta 历史 Topic。读完整次会话记录，输出对她的观察快照。",
    "",
    "原则：",
    "- 中性、双向 — 不能用'倾向中国传统主义' / '倾向西方个人主义'这种带预设标签",
    "- 用'fairness' / 'family-loyalty' / 'analogical-thinker' 这种结构性词汇",
    "- 引用她原话时完整保留，不要总结成第三人称",
    "- 这份快照不会给她看，只用于下次 Topic 时让你（AI）做更好的 callback",
    "",
    "会话记录:",
    transcript,
    "",
    "输出 JSON:",
    "{",
    '  "reasoningStyle": { "pattern": "...", "confidence": "...", "notes": "..." },',
    '  "valueEmphasis": [{"value": "...", "strength": "...", "evidence": "..."}],',
    '  "selfDisclosure": [{"topic": "' + topicId + '", "content": "她原话"}, ...],',
    '  "unansweredHooks": ["..."]',
    "}"
  ].join("\n");
};

// ─── Free chat（Topic 完成后的延伸对话） — Winston review #4 ──────────
//
// 用户上完 Magna Carta 主线后想继续聊：可以问感兴趣的任何 Magna Carta 相关内容。
// AI 用 system prompt 限定主题在 Topic 范围。
// 离题检测：用户问无关内容时，温和拉回。
export var buildFreeChatSystemPrompt = function(opts) {
  opts = opts || {};
  var topic = opts.topic;
  var profile = opts.profile || "";
  var userName = opts.userName || "你";

  return [
    "你是 " + userName + " 的历史学习伙伴。她刚完成 " + (topic ? topic.title.cn + " (" + topic.title.en + ")" : "Magna Carta") + " Topic，现在她想继续聊一些感兴趣的内容。",
    "",
    "【你的角色】",
    "- 朋友语气，不老师下结论",
    "- 中英可以混用，但中国相关概念用中文（英文翻译反而困惑她）",
    "- 50-200 字 / 回复，不要长篇大论",
    "- 用户已经看过原版 Topic 内容，不要重复讲",
    "",
    "【离题保护】",
    "今天她的话题范围是：" + (topic ? topic.title.cn : "Magna Carta") + " 及其历史延伸（如 King John 的故事、Robin Hood、Aristotle 哲学、英国议会、美国独立宣言等所有相关人物/事件/概念）。",
    "",
    "如果她问的内容跟这个 Topic 没有任何合理关联（比如『今天晚饭吃什么』、『K-pop 谁最帅』、『数学题怎么做』），**温和拉回**：",
    "- 第一次：『这个我也想聊，但今天我们的主题是 ' + topic + '。等你下次完成数学/K-pop 主题的 Topic 时再聊？现在要不要继续 Magna Carta 的话题？』",
    "- 第二次：『还是 Magna Carta 相关的故事吧 — 你对哪部分最好奇？』",
    "- 第三次：直接收尾，建议她睡前把今天聊的东西整理一下",
    "",
    "如果她问的内容**跟 Topic 有合理关联**（比如『教皇为什么这么有权力？』『美国宪法跟这有什么关系？』），自由发挥，深入讲。这是产品要鼓励的。",
    "",
    "【用户画像】",
    profile || "（暂无）",
    "",
    "【判断离题与否的灵活原则】",
    "- 历史 / 政治 / 法律 / 哲学 / 中西对比 → 不离题",
    "- 提到的人物 / 地点 / 事件 / 概念 → 不离题",
    "- 完全无关的日常生活 / 流行文化 / 数学物理 → 离题，温和拉回",
    "- 介于两者之间 → 给她一段桥接，看能不能联回 Topic",
  ].join("\n");
};

// ─── Profile-derived initial worldview seed ──────────────────────────
export var buildInitialWorldviewSeed = function(profile, opts) {
  opts = opts || {};
  return {
    initialSeed: true,
    seedDerivedAt: new Date().toISOString(),
    evolveAfterTopics: 0,
    reasoningStyle: {
      pattern: "unknown — typical 7th grader transitioning from Chinese pedagogy",
      confidence: "TBD",
      abstractionTolerance: "medium (assumed based on grade)",
      notes: "首次见，先按 profile 默认值假设"
    },
    knowledgeAnchors: {
      "tang-song-china":  { strength: "likely-strong",  source: "Chinese 6 年级历史课纲必教" },
      "imperial-tianzi":  { strength: "likely-medium",  source: "中国文化常识，但学术细节可能不熟" },
      "western-medieval": { strength: "weak",           source: "中国课纲不教，将首次接触" },
      "us-civics":        { strength: "weak",           source: "刚到美国 1 年内" }
    },
    valueEmphasis: [],
    selfDisclosure: [],
    unansweredHooks: [
      "她的中国 vs 美国身份认同还没探测过",
      "她对集体 vs 个人的直觉是什么 — 待发掘"
    ]
  };
};
