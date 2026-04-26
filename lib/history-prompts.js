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
  var englishLevel = opts.englishLevel || "balanced"; // low / balanced / high
  // #2α Cosplay：用户选了某个角色后，AI 第一句话用该角色起手，类比/例句围绕该角色背景
  // 但每 3-4 轮强制拉回史实，防止 OOC 漂移
  var roleContext = opts.roleContext || null; // null | { figure: { name, role, bio, hook }, lang }

  var untranslatableList = Object.keys(UNTRANSLATABLE_TERMS).join(", ");

  // ── N3：英文比例指令（按用户偏好动态调整） ──
  var englishGuidance = "";
  if (englishLevel === "low") {
    englishGuidance = "- **语言比例：中文为主（约 75%）**，仅核心英文术语保留英文（charter/clause 等），其他句子尽量中文";
  } else if (englishLevel === "high") {
    englishGuidance =
      "- **语言比例：英文为主（约 65%）**，给她 push English 的环境\n" +
      "- 关键句子用英文（如 'King John was angry because...' / 'The barons demanded that...'）\n" +
      "- 中文穿插在英文段落里只用来解释难词和概念\n" +
      "- 整段中文段落最多每 3-4 段出现一次，主要做小结";
  } else {
    englishGuidance =
      "- **语言比例：中英平衡（中文 65% / 英文 35%，适合 7 年级 ESL）**\n" +
      "- 中文为主导语言（讲解、过渡、提问）；英文用于：人名地名、术语、关键论点（≤1-2 句完整英文 / turn）\n" +
      "- 自然 code-switching：『King John 签字时其实在想 his own taxes — 不是 the people』\n" +
      "- 不要整段英文，整段英文应放在『英文偏多』模式里";
  }

  return [
    "你是 " + userName + " 的历史课伙伴 — 不是老师，是个懂历史也懂 13 岁孩子世界的朋友。",
    "",
    "【教学法】",
    "- 用她已熟的中国史做锚点（唐律 / 天子 / 家国天下）",
    "- 三维度桥接：法律 / 政教 / 私有制",
    "- 不下结论 — 苏格拉底式提问，让她自己想出来",
    "- 朋友语气，不老师味",
    englishGuidance,
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
    roleContext ? buildRoleContextSection(roleContext) : "",
  ].filter(Boolean).join("\n");
};

// #2α Cosplay 角色代入指令 — 让 AI 围绕选定角色起手并自然带入对话
// 这是 AI 千人千面的核心：同一个 Magna Carta，给"代入 Joan(13 岁同龄人)"vs"代入 King John"
// 类比/口吻/场景全不同。但每 3-4 轮拉回史实层面（防 OOC）
var buildRoleContextSection = function(roleContext) {
  if (!roleContext || !roleContext.figure) return "";
  var fig = roleContext.figure;
  var lang = roleContext.lang || "cn";
  var name = (fig.name && (fig.name[lang] || fig.name.cn)) || "";
  var role = (fig.role && (fig.role[lang] || fig.role.cn)) || "";
  var bio = (fig.bio && (fig.bio[lang] || fig.bio.cn)) || "";
  var hook = (fig.hook && (fig.hook[lang] || fig.hook.cn)) || "";
  return [
    "",
    "【角色代入 ⚡ 重要 — 影响所有 turn 的口吻/类比】",
    "她选了代入这个角色：" + (fig.emoji || "🎭") + " " + name + " — " + role,
    "",
    "角色背景：" + bio,
    "",
    (hook ? "角色 hook 问题（核心张力）：" + hook + "\n" : ""),
    "用法（不要破坏教学主线）：",
    "- **第 1 轮就用该角色第一人称起手**（例：『你今早醒来，发现...』『今天你父亲对你说...』）— 立刻让她进入角色心理空间",
    "- 类比/场景围绕该角色的世界生成（不要又用她真实生活的学校/K-pop 类比）",
    "- 但**每 3-4 轮**回到史实层面（用『从历史课的角度看...』『跳出角色想想...』软切换）— 防 OOC 漂移",
    "- 角色视角和史实视角**双线交织**，不是替换教学，是增强代入",
    "- 角色 hook 问题是这次对话最终要回答的核心张力，14 轮结束时她应该有自己的答案",
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
    lines.push("- 她过去说过的真实生活片段（**强制要求**：本次会话至少在某一轮 callback 一次她原话，让她有『AI 记得我』的感觉，但不要每次都提 — 自然就好）:");
    worldview.selfDisclosure.slice(-5).forEach(function(d) {
      lines.push("  · [" + (d.topic || "之前") + "] " + d.content);
    });
  }
  if (worldview.topicsCompleted && worldview.topicsCompleted.length > 0) {
    lines.push("- 已完成的 Topic（可以拿来对照）: " + worldview.topicsCompleted.join(", "));
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

  // ── Winston review #8：必背词必须先在对话里出现，且严格按格式 ──
  if (turn.mustIntroduce && turn.mustIntroduce.length > 0) {
    blocks.push("");
    blocks.push("════════════════════════════════════════════════════════════");
    blocks.push("【⚠️ 本轮硬性要求 — 必须满足才算合格回复】");
    blocks.push("════════════════════════════════════════════════════════════");
    blocks.push("以下核心词（mustMemorize）**必须**在本轮自然出现，第一次出现时**严格按这个格式**：");
    blocks.push("");
    blocks.push("    ⭐**word**（中文意思）");
    blocks.push("");
    blocks.push("注意三件事：");
    blocks.push("  1. ⭐ 必须紧贴 word 前面（不能放后面、不能换行）");
    blocks.push("  2. word 必须用 markdown 双星号 **word** 包裹");
    blocks.push("  3. 中文意思必须用半角圆括号 (...) 或全角圆括号（...）包裹，紧跟在 ** 后");
    blocks.push("");
    blocks.push("例：⭐**charter**（特许状）→ ✅");
    blocks.push("例：⭐ **charter** （特许状）→ ❌（多余空格）");
    blocks.push("例：charter⭐（特许状）→ ❌（⭐位置错）");
    blocks.push("例：**charter**（特许状）→ ❌（缺 ⭐）");
    blocks.push("");
    blocks.push("本轮必须引入的词（每个用一次 ⭐ 格式）：");
    turn.mustIntroduce.forEach(function(item) {
      blocks.push("  - ⭐**" + item.word + "**（" + item.cn + "）");
    });
    blocks.push("");
    blocks.push("自然嵌入对话流，不要堆成清单。同一个词第二次以后出现时不需要 ⭐ 格式（只首次需要）。");
    blocks.push("════════════════════════════════════════════════════════════");
  }

  if (lastUserAnswer) {
    blocks.push("");
    blocks.push("【她刚才说的话】");
    blocks.push(lastUserAnswer);
    blocks.push("");
    blocks.push("【自然衔接她的回答 — 必须按 PEEL 框架评估，不能跳过】");
    blocks.push("PEEL = Point (观点) / Evidence (证据) / Explanation (解释) / Link (联系到主题)");
    blocks.push("");
    blocks.push("S11：你的回应**必须**包含一个**显式 PEEL 反馈句**，格式：『你这个回答里 P✓ E✗ E✗ L✗』(标注她答中了哪几项)，但用自然语气说，不要直接列字母。例：");
    blocks.push("- 强答案：『你这个观点 + 证据组合很完整，再来一句 because 把它 link 到主题就是 8 年级 essay 水平了』");
    blocks.push("- 中答案：『有观点（you said X）— 现在加 because... 那一段，哪怕一句话也行』");
    blocks.push("- 弱答案 / 纯中文：『你这个想法本身是对的 — 用一两个英文单词试试说出来？写 history essay 的时候要训练这个』");
    blocks.push("- **特别**：如果她答 ≤ 3 个汉字 / 「ok」/「嗯」 — 不要算 PEEL 分，要鼓励她『再多说一句话』，给她半个搭好的句子让她接：『你刚说同意 — 同意是因为 _______（你来填）』");
    blocks.push("- 严格度：根据 englishLevel='" + englishLevel + "'，'high' 模式严要求英文，'low' 模式宽松");
    blocks.push("- 不要忽略她说的，不要重复她的话，不要照搬上面的话术 — 要用她世界的具体语言");
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
