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
    "现在是第 " + turn.n + " 轮 / 共 14 轮，move = " + turn.move,
    "",
    "【本轮指令（不要复述，用她的世界自然写出）】",
    ai_seed,
  ];

  if (lastUserAnswer) {
    blocks.push("");
    blocks.push("【她刚才说的话】");
    blocks.push(lastUserAnswer);
    blocks.push("");
    blocks.push("自然衔接她的回答，不要忽略她说的，不要重复她的话。");
  }

  if (turn.expectsInput && turn.inputPrompt) {
    blocks.push("");
    blocks.push("【结尾必须问】这一轮结束时给她一个具体问题：" + turn.inputPrompt);
  }

  if (turn.move === "user-response-evaluate" || turn.move === "source-deep-eval" || turn.move === "roleplay-eval") {
    blocks.push("");
    blocks.push("这是一个评估轮 — 评价她刚才的回答（共情，不评判），然后自然引导到下一轮。");
  }

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
