/* ─── Know U. Learning — History Module Topic Data ──────────────────────
 *
 * Topic 中枢数据。每个 Topic 是一个完整的教学单元，含：
 *   - 身份元数据 (HSS standard alignment)
 *   - 三维度 bridge anchor（中国史桥接）
 *   - Geography 5 子模块
 *   - mustMemorize（Topic 完成 gate）
 *   - 原始史料三层架（拉丁/BL 英译/Lexile-900 双语）
 *   - 14 轮苏格拉底对话脚本
 *   - 5 角色代入选项
 *   - 6 项 mastery checks
 *
 * 设计原则：
 *   - 数据驱动渲染（pages/history.js 通过 topicId 索引）
 *   - 文案里 {{userName}} {{userSchool}} 等占位符运行时注入
 *   - "AI 文案种子"是写给 AI 的指令，不是直接显示给用户
 *
 * 见 docs/HISTORY_TOPIC_MAGNA_CARTA.md（Topic 内容设计源文件）
 *     docs/HISTORY_PRODUCT_ANALYSIS.md §5.2（Topic schema 规范）
 */

import { buildMasteryFromNotebook, loadNotebook } from './history-storyboards/notebooks/index.js';

// ─── 4 条贯穿主线（through-lines） ──────────────────────────────────────
export var THROUGH_LINES = {
  "power-vs-liberty":   { en: "Power vs Liberty",        cn: "权力 vs 自由",   color: "#c46b30" },
  "religion-vs-state":  { en: "Religion vs State",       cn: "宗教 vs 国家",   color: "#a07cb8" },
  "tech-disruption":    { en: "Technology Disruption",   cn: "技术颠覆社会",   color: "#5fa8a0" },
  "who-rules-whom":     { en: "Who rules whom",          cn: "谁有权统治谁",   color: "#5b8db8" },
};

// ─── 不可翻译的核心概念词列表（产品全局共享） ──────────────────────────
// 出现这些词时，AI prompt 强制英文 + 用情境/类比解释，**绝不**给中文翻译
export var UNTRANSLATABLE_TERMS = {
  "sovereignty": "中世纪 sovereignty 包括国王对附庸 + 教皇对国王的权威，中文'主权'承载不了",
  "liberty":     "政治哲学里有专门语义（消极自由、被法律保护的自由），跟 freedom 不同",
  "republic":    "古罗马 republic 核心是反君主+贵族议政，中文'共和国'触发误联想",
  "feudal":      "欧洲 feudal 是契约性领主-附庸关系，中文'封建'携带近代史贬义包袱",
  "secular":     "西方 secular 是政教分离的中性技术词，中文'世俗'携带'庸俗'色彩",
};

// ─── Topic 注册表 ────────────────────────────────────────────────────
// narrativeRequired 硬门槛：available=true 必须配套 lib/history-narratives/{id}.md
// 防止以后又把没 narrative 的 Topic ship 出去（Crusades 4-27 翻车的教训）。
// 启动时 `assertNarrativeContract()` 检查；缺 narrative 的 Topic 会在 selector 里被禁用。
export var TOPIC_REGISTRY = [
  { id: "magna-carta-1215", available: true,  unit: "7.6.5",  order: 2,                                               narrativeRequired: true },
  { id: "tang-song-china",  available: true,  unit: "7.3",    order: 1, note: "唐宋盛世 — Story-First 3-lens (emperor-huizong + su-shi + li-qingzhao) + Sarah audit (5 P0 + 3 P1, 8.6/10) + 4-agent reviewed (16 P0 + 8 P1) (5-7+)", narrativeRequired: true },
  { id: "crusades-1099",    available: true,  unit: "7.6.4",  order: 3, note: "十字军东征 — 三宗教交汇 + 中国对照", narrativeRequired: true },
  // 以下是后续 Topic 的占位（β/γ 阶段填充）
  { id: "black-death-1347", available: true,  unit: "7.6.9",  order: 4, note: "黑死病 — Story-First 3-lens（Agnolo / Konrad / Devorah）+ narrative kernel + 4-agent reviewed", narrativeRequired: true },
  { id: "renaissance-1500", available: true,  unit: "7.8",    order: 5, note: "文艺复兴 — Story-First 3-lens (lorenzo-medici + savonarola + lucia-widow) + Sarah audit + 4-agent reviewed (5-6)", narrativeRequired: true },
  { id: "reformation-1517", available: true,  unit: "7.9",    order: 6, note: "宗教改革 — Story-First 3-lens (martin-luther + erasmus + sister-agnes) + Sarah audit + 4-agent reviewed (5-7)", narrativeRequired: true },
  { id: "age-of-exploration-1492", available: true,  unit: "7.11", order: 7, note: "大航海时代 — Story-First 3-lens (columbus + las-casas + anacaona-jr) + Sarah audit (4 P0 + 6 P1) + 4-agent reviewed (15 P0 + 8 P1) (5-7)", narrativeRequired: true },
  { id: "mali-empire-1235", available: true,  unit: "7.4", order: 8, note: "马里帝国 — Story-First 3-lens (mansa-musa + ibn-battuta + aisha-1413) + Sarah audit (5 P0 + 5 P1) + 4-agent reviewed (15 P0 + 8 P1) (5-7+)", narrativeRequired: true },
];

// ─── Topic: Magna Carta 1215 ──────────────────────────────────────────
export var MAGNA_CARTA_1215 = {
  id: "magna-carta-1215",
  title: { en: "Magna Carta", cn: "大宪章" },
  oneLineHook: { cn: "1215 年，一群英国贵族用一张纸把国王关进了规则里 — 西方法治的源头" },
  curriculumUnit: "7th-grade/medieval-europe",
  hssStandard: "HSS-7.6.5",  // CA State Standard 直接对应
  bridgeStandard: "HSS-7.11.6",  // 桥接到美国独立宣言
  // #3 教材对照 — Irvine USD 7 年级 HSS 常用教材：Houghton Mifflin Medieval Times
  // 让用户感觉"this is my actual schoolwork"，不是脱节的 AI 内容
  // ⚠️ 我们不抓教材原文（版权），只指向章节让她翻自己的书一起看
  textbookRef: {
    publisher: "Houghton Mifflin · 《Medieval & Early Modern Times》",
    grade: "7",
    chapter: "Ch. 8 The Rise of Europe",
    section: "Lesson 3 King John & the Magna Carta",
    page: "213",
    hint: "翻到课本 p.213 一起读 — AI 会用你已经熟的中国史做对照（唐律 / 天命）"
  },
  year: 1215,
  yearRange: [1215, 1215],
  region: "england",
  difficulty: 3,  // 1-5
  throughLine: "power-vs-liberty",
  estimatedMinutes: 35,

  // ─── 三维度 Bridge Anchor ─────────────────────────────────────────
  bridgeAnchor: {
    type: "multi-dimensional",
    dimensions: [
      {
        id: "legal-system",
        name: "法律体系",
        cnAnchor: "唐律疏议 (651 AD)",
        strength: "weak",
        keyDivergence: "唐律管官员、不管皇帝；Magna Carta 直接约束国王本人",
      },
      {
        id: "church-state",
        name: "政教关系",
        cnAnchor: "天子 + 天命",
        strength: "strong",
        keyDivergence: "中国一条线（天→皇帝→民），欧洲两条线（教皇 + 国王互相牵制）",
      },
      {
        id: "social-unit",
        name: "社会基本单元",
        cnAnchor: "家国天下 + 集体优先",
        strength: "strong",
        keyDivergence: "中国家族嵌套国家，私产服务集体；欧洲个人为基本单元，私产神圣",
      },
    ],
    divergenceNote: {
      cn: "中国和西方在 1215 年那个时代分岔成两条同样自洽的路：" +
          "中国 = 一条线（天→皇帝→万民）+ 家族嵌套 + 集体优先；" +
          "欧洲 = 两条线（教皇 + 国王）+ 个人单元 + 私产神圣。" +
          "Magna Carta 是欧洲那条路上的转折点，不是中国路的'缺失'。"
    }
  },

  // ─── Geography 5 子模块 ───────────────────────────────────────────
  geography: {
    // ① World Orient
    worldOrient: {
      worldMap: "world-base",
      highlightRegion: "western-europe",
      orientNote: {
        cn: "在欧洲西北角的一个小岛 — 英国",
        en: "On a small island in northwestern Europe — England"
      }
    },

    // ② Topic 主图（含 flip）
    primaryMap: "europe-1200",
    flipMap: "europe-modern",
    primaryMapPin: { lon: -0.5642, lat: 51.4444, label: "Runnymede 1215" },

    // ③ Scale Anchors — 用中国地理当尺
    scaleAnchors: [
      { cn: "整个英国 ≈ 中国湖南省的大小", en: "All of England ≈ size of Hunan province" },
      { cn: "伦敦到 Runnymede 约 30 km，相当于北京到通州的距离", en: "London to Runnymede ~30 km, like Beijing to Tongzhou" },
      { cn: "整个英格兰王国比四川盆地还小", en: "Kingdom of England smaller than Sichuan Basin" },
    ],

    // ④ Why Matters — 因果直觉
    whyMatters: {
      cn: "你看英吉利海峡 — 这条窄窄的水把英国跟欧陆隔开。这意味着：(1) 英国不容易被欧陆强国全面入侵；(2) 教皇的影响力到这里减弱了一截；(3) 国王没有大陆军队可以靠 — 必须跟贵族合作。这种'没法独裁'的地理处境，正是 1215 那批贵族敢逼国王签字的物理基础。同时代的法国国王 Philip II 就强势多了 — 因为法国是连陆大国，权力集中得多。",
      en: "Look at the English Channel — this narrow water separates England from continental Europe. This means: (1) England is harder to invade fully; (2) the Pope's influence weakens here; (3) the king has no continental army to rely on — he must work with the barons. This 'cannot be tyrant' geography is the physical basis of the 1215 barons' courage. The contemporary French king Philip II was much stronger — because France is a connected continental power."
    },

    // ⑤ China Compare — 跟中国对照
    chinaCompare: {
      // tang-china-650 地图 α 阶段做，MVP 用文字
      otherMap: null,
      readNote: {
        cn: "中国一个朝代的疆域，能装下整个欧洲所有王国。地理决定了：中国的政治问题是'怎么治理这么大'（→ 倾向集权），欧洲的政治问题是'怎么不被邻居灭掉'（→ 倾向分权 + 制衡）。Magna Carta 是分权传统的早期产物。",
        en: "..."
      }
    }
  },

  // ─── Must-Memorize（Topic 完成 gate — 严格制） ─────────────────────
  // 每条都含 IPA 音标 + 例句 + TTS 用的标准发音 word
  mustMemorize: {
    // 每条词加 sourceStandards — 不再凭感觉，而是有外部锚点（CA HSS / AP / 教材 glossary）
    // 锚点权威性：CA-HSS（学区考点） > AP（进阶/SAT II） > textbook（年级课本 glossary）
    // emphasis: 'high' = 课标高频考点，UI 角标加金色边框
    // CA HSS-7.6.5 课标原文："Magna Carta, parliament, development of habeas corpus, an independent judiciary"
    vocab: [
      { word: "charter",    ipa: "/ˈtʃɑːrtər/",  pos: "n.",    cn: "特许状 / 宪章",  example: "King John signed the Great Charter at Runnymede.", exampleCn: "约翰国王在 Runnymede 签了大宪章。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.6.5", emphasis:"high"}, {code:"textbook-7-3-2"}] },
      { word: "clause",     ipa: "/klɔːz/",       pos: "n.",    cn: "条款",            example: "Clause 39 protects free men from arbitrary arrest.", exampleCn: "第 39 条保护自由人不被任意逮捕。", untranslatable: false,
        sourceStandards: [{code:"textbook-7-3-2"}] },
      { word: "baron",      ipa: "/ˈbærən/",      pos: "n.",    cn: "男爵 / 大贵族",  example: "The barons forced the king to sign the charter.",  exampleCn: "贵族们强迫国王签了那份特许状。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.6.5"}, {code:"textbook-7-3-2"}] },
      { word: "monarchy",   ipa: "/ˈmɑːnərki/",  pos: "n.",    cn: "君主制",          example: "England was a feudal monarchy in 1215.",          exampleCn: "1215 年的英格兰是封建君主制。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.6.5"}, {code:"AP-WHAP-1.5"}] },
      { word: "tyranny",    ipa: "/ˈtɪrəni/",    pos: "n.",    cn: "暴政",            example: "The barons accused King John of tyranny.",        exampleCn: "贵族们指控约翰国王是暴政。",   untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.6.5"}] },
      { word: "parliament", ipa: "/ˈpɑːrləmənt/",pos: "n.",    cn: "议会",            example: "The first English parliament met in 1265.",      exampleCn: "第一届英国议会在 1265 年召开。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.6.5", emphasis:"high"}, {code:"AP-WHAP-1.5"}, {code:"textbook-7-3-2"}] },
      { word: "feudal",     ipa: "/ˈfjuːdəl/",   pos: "adj.",  cn: "封建（契约性领主-附庸关系）", example: "The feudal system tied land to loyalty.", exampleCn: "封建制度把土地和效忠绑在一起。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.6.3"}, {code:"AP-WHAP-1.5"}] },
      { word: "rebel",      ipa: "/ˈrebəl/",     pos: "n./v.", cn: "反叛 / 反叛者",   example: "The rebel barons defied King John.",              exampleCn: "反叛贵族公开违抗约翰国王。",     untranslatable: false,
        sourceStandards: [{code:"textbook-7-3-2"}] },
      { word: "consent",    ipa: "/kənˈsent/",   pos: "n./v.", cn: "同意 / 经过同意", example: "No tax shall be levied without the consent of the kingdom.", exampleCn: "未经王国同意，不得征税。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.6.5"}, {code:"AP-WHAP-3.4"}] },
      // CA HSS-7.6.5 课标点名但之前漏的词："development of habeas corpus"
      { word: "habeas corpus", ipa: "/ˈheɪbiəs ˈkɔːrpəs/", pos: "n.", cn: "人身保护令", example: "Habeas corpus prevents arbitrary imprisonment.", exampleCn: "人身保护令阻止国王随便关押人。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.6.5", emphasis:"high"}] },
    ],
    concepts: [
      {
        id: "rule-of-law",
        en: "rule of law",
        ipa: "/ruːl əv lɔː/",
        cn: "法治",
        defEn: "Even the king must follow the law. No one is above it.",
        defCn: "即使是国王也必须遵守法律。没有人在法律之上。",
        sourceStandards: [{code:"CA-HSS-7.6.5", emphasis:"high"}, {code:"AP-WHAP-3.4"}]
      },
      {
        id: "due-process",
        en: "due process",
        ipa: "/djuː ˈprɑːses/",
        cn: "正当程序",
        defEn: "Before someone is punished, the proper legal steps must be followed.",
        defCn: "在惩罚一个人之前，必须经过合法的步骤（如审判、举证）。",
        sourceStandards: [{code:"CA-HSS-7.6.5", emphasis:"high"}]
      },
      {
        id: "law-of-the-land",
        en: "law of the land",
        ipa: "/lɔː əv ðə lænd/",
        cn: "土地的法律 (lex terrae)",
        defEn: "The traditional laws of a country, which apply to everyone — including the king.",
        defCn: "一个国家世代沿用的法律，所有人（包括国王）都受它约束。不是哪个人临时定的。",
        sourceStandards: [{code:"CA-HSS-7.6.5"}]
      },
      {
        id: "consent-of-governed",
        en: "government by consent",
        ipa: "/ˈɡʌvərnmənt baɪ kənˈsent/",
        cn: "同意而治",
        defEn: "Power belongs to the people; rulers govern only with their permission.",
        defCn: "权力属于人民；统治者只能在人民同意的前提下治理。Magna Carta Clause 12（征税须经议会同意）就是这个原则的种子。",
        sourceStandards: [{code:"CA-HSS-7.6.5"}, {code:"AP-WHAP-3.4"}]
      },
      // CA HSS-7.6.5 课标点名但之前漏的概念："representative institutions" + "independent judiciary"
      {
        id: "representative-institutions",
        en: "representative institutions",
        ipa: "/ˌreprɪˈzentətɪv ˌɪnstɪˈtuːʃənz/",
        cn: "代议制机构",
        defEn: "Bodies (like parliament) where elected or chosen members speak for groups of people.",
        defCn: "由选出来或选派出来的人代表更多人发言的机构（比如议会）。Magna Carta 之后的『大议会』是英国议会的雏形。",
        sourceStandards: [{code:"CA-HSS-7.6.5", emphasis:"high"}, {code:"AP-WHAP-3.4"}]
      },
      {
        id: "independent-judiciary",
        en: "independent judiciary",
        ipa: "/ˌɪndɪˈpendənt dʒuˈdɪʃieri/",
        cn: "独立司法",
        defEn: "Courts that decide cases without orders from the king or government.",
        defCn: "法庭不受国王或政府指挥地审判案子 — Magna Carta Clause 40（『公道不可买卖、拒绝、拖延』）是这个原则的源头。",
        sourceStandards: [{code:"CA-HSS-7.6.5", emphasis:"high"}]
      }
    ]
  },

  // ─── 原始史料三层架 ─────────────────────────────────────────────
  primarySources: [
    {
      id: "clause-39",
      title: { en: "Magna Carta — Clause 39", cn: "大宪章 第 39 条" },
      latin: "Nullus liber homo capiatur, vel imprisonetur... nisi per legale judicium parium suorum vel per legem terrae.",
      en: "No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any other way, nor will we proceed with force against him, or send others to do so, except by the lawful judgment of his equals or by the law of the land.",
      enSimplified: "No free man shall be arrested or imprisoned, or have his rights or things taken away, or be outlawed or exiled. The king shall not act against him with force, except by the lawful judgment of his equals, or by the law of the land.",
      cnGloss: "任何自由人不得被逮捕、监禁、剥夺权利或财产、被驱逐到法外、或被流放。国王不得对他动用武力，除非经过同等地位人的合法审判，或经过这片土地的法律。",
      lexile: 920,
      keyTerms: [
        { word: "seized",      cn: "被抓走",       etym: "动词 seize 的过去分词" },
        { word: "imprisoned",  cn: "被关进监狱",  etym: "im (进) + prison (监狱)" },
        { word: "outlawed",    cn: "被驱逐到法外", etym: "out (之外) + law (法) — 词根可追到 1215" },
        { word: "exiled",      cn: "被流放",       etym: "ex (出) + ile (在哪) — 离开本土" },
        { word: "lawful judgment", cn: "合法审判", etym: "lawful (合法的) + judgment (判决)" },
        { word: "law of the land", cn: "土地的法律 (lex terrae)", etym: "**不可翻译概念** — 详见 mustMemorize.concepts" },
      ],
      attribution: "British Library English Translation, magnacarta.bl.uk"
    },
    {
      id: "clause-40",
      title: { en: "Magna Carta — Clause 40", cn: "大宪章 第 40 条" },
      en: "To no one will we sell, to no one deny or delay right or justice.",
      enSimplified: "The king shall not sell justice. The king shall not refuse justice to anyone. The king shall not delay justice.",
      cnGloss: "国王不能把'公道'卖钱（不能受贿）。国王不能拒绝任何人得到公道。国王不能拖着不给公道。简单说：**司法不能被国王买卖、拒绝、或拖延。**",
      lexile: 880,
      keyTerms: [],
      attribution: "British Library English Translation, magnacarta.bl.uk"
    }
  ],

  // ─── 14 轮苏格拉底对话脚本 ────────────────────────────────────────
  // 每个 turn 是 { n, move, role, ai_seed, expectsInput, inputPrompt }
  // ai_seed 是写给 AI 的"这一轮该说什么"指令；AI 用它 + profile + 历史 生成实际文案
  conversationTurns: [
    {
      n: 1,
      move: "hook",
      role: "ai",
      ai_seed:
        "用 {{userSchool|你的学校}} 校长任意禁闭一周不允许申诉的场景做类比，让她产生『不公平』的本能反应，" +
        "然后立刻指向：『你刚说出了 1215 年英国贵族跟国王 King John 撕破脸的核心原因。今天我们去 Runnymede』。" +
        "口吻：朋友说话，不老师下结论。50-100 字。结尾问『公平吗？』",
      mustIntroduce: [
        { word: "charter", cn: "特许状/宪章" },
      ],
      expectsInput: true,
      inputPrompt: "你怎么觉得？",
      uiHint: { showMap: false }
    },
    {
      n: 2,
      move: "bridge-legal",
      role: "ai",
      ai_seed:
        "上一轮她回应了。现在引入唐律疏议对照。要点：" +
        "(1) 651 AD，比 Magna Carta 早 564 年；" +
        "(2) 规模庞大（30 卷），比 Magna Carta 大 30 倍；" +
        "(3) 关键差异：唐律管官员、管百姓 — 但**不管皇帝**。皇帝就是法。" +
        "结尾抛问：『看出问题了吗？』让她思考。" +
        "口吻：让她有'我们更早！'的自豪感，然后温和揭示分岔。",
      mustIntroduce: [
        { word: "rule of law", cn: "法治" },
        { word: "due process", cn: "正当程序" },
      ],
      expectsInput: true,
      inputPrompt: "你看出问题了吗？",
      uiHint: { showMap: false }
    },
    {
      n: 3,
      move: "user-response-evaluate",
      role: "ai-eval",
      ai_seed:
        "评估她对'唐律不管皇帝'的反应。三种分支：" +
        "(a) 她说'那如果皇帝乱来怎么办' → 肯定『你抓到关键了』；" +
        "(b) 她说'皇帝不会乱来 / 皇帝就是法律不是挺好' → 引导思考反例（11 岁皇帝、疯子皇帝、被太监架空）；" +
        "(c) 她答不上来 → 直接说『就是这样：好皇帝没事，King John 这种贪婪残忍的就出大问题』。" +
        "完成评估后引到下一轮。",
      expectsInput: false,
      autoAdvance: true
    },
    {
      n: 4,
      move: "bridge-religion",
      role: "ai",
      ai_seed:
        "现在讲第二维度：政教关系。**节奏要慢** — 这一轮信息密度大，分两段讲，中间停一下问她有没跟上。要点：" +
        "**第一段：** 一句对比 — 中国一条线（天 → 皇帝 → 万民），欧洲两条线（教皇 + 国王互相牵制）。停一秒，问她『理解中国 vs 欧洲这一层结构差异吗』；" +
        "**第二段（如继续）：** 故事化 — 1077 Henry IV 跪 Canossa 雪地 3 天求教皇原谅（中国不可能发生）；澄清 1215 时教皇站国王那边，但贵族不在意 — 这次他们靠的不是教皇个人，是『国王不是唯一』这个 1000 年观念的传承；" +
        "**结尾设问：** 『头上不只一个老板的世界，跟老板讲条件的胆子是不是更大？』" +
        "C2: 不要一口气把所有点全说出来，给她思考空间。",
      mustIntroduce: [
        { word: "tyranny", cn: "暴政" },
        { word: "monarchy", cn: "君主制" },
      ],
      expectsInput: true,
      inputPrompt: "你的直觉是什么？",
      uiHint: { showMap: false }
    },
    {
      n: 5,
      move: "bridge-property",
      role: "ai",
      ai_seed:
        "讲第三维度：私有制 vs 家国天下。**节奏要慢** — 已经两个 bridge 了，给她喘气。要点：" +
        "**第一句先承上启下：** 『前面讲了法律和政教，最后一个底座差异 — 关于『我的东西』的理解』；" +
        "**核心对比（精炼）：** 中国『家国天下』个人嵌进集体；欧洲『个人为基本单元，私产神圣』。简短就好，不展开 5 个 bullet；" +
        "**直觉测试题（最重要这一段）：** 『先用直觉答，不用想 Magna Carta 内容 — 你是中国某朝代大臣，皇帝要征你三成田，你心里第一反应是什么？换成英国贵族对国王，第一反应又是什么？』" +
        "**告诉她：** 我们等会读到 Clause 39/40 真条款，会验证你的直觉。" +
        "C2/C6: 总字数控制在 100-130 字内，不要长篇 lecture。",
      mustIntroduce: [
        { word: "consent", cn: "同意" },
        { word: "feudal", cn: "封建（契约性领主-附庸）" },
      ],
      expectsInput: true,
      inputPrompt: "这两种本能反应一样吗？为什么？",
      uiHint: { showMap: false }
    },
    {
      n: 6,
      move: "geo",
      role: "ai",
      ai_seed:
        "现在拉地图。提示她看 europe-1200 → 焦点在 England。" +
        "(1) '英国 ≈ 湖南省大小'；" +
        "(2) Runnymede pin 红色印章；" +
        "(3) 邀请她**点击翻转**看 europe-modern；" +
        "(4) 翻转后强调：君士坦丁堡 = 伊斯坦布尔 = 土耳其首都；拜占庭 → 土耳其；HRE → 德国奥地利；英国和匈牙利没变名；" +
        "(5) '翻回 1200 年' 让她回到 historical 视图准备读史料。",
      expectsInput: false,
      autoAdvance: true,
      uiHint: { showMap: true, mapId: "europe-1200", flipEnabled: true }
    },
    {
      n: 7,
      move: "source",
      role: "ai",
      ai_seed:
        "展示 Clause 39。" +
        "(1) 给完整的英文 + 中文释义；" +
        "(2) 标 5 个核心英文词 (shall / seized / imprisoned / lawful judgment / law of the land) + 词根/语义注；" +
        "(3) 让她读两遍；" +
        "(4) 设问：『你觉得这一句话**最关键**的是哪个词？为什么？』" +
        "口吻：仪式感 — 这是 800 年的真东西。",
      expectsInput: true,
      inputPrompt: "你觉得最关键的是哪个词？",
      uiHint: { showSource: "clause-39" }
    },
    {
      n: 8,
      move: "source-deep-eval",
      role: "ai-eval",
      ai_seed:
        "评估她选的关键词，三个分支：" +
        "(a) 她选 'shall' → 『你抓到了形式上的关键 — shall 不是可以，是必须，铁律不是建议』；" +
        "(b) 她选 'law of the land' → 『你抓到了核心 — 把权力从一个人手里转到一套规则里。这就是 rule of law 的种子』；" +
        "(c) 她选 'lawful judgment' → 『你抓到了程序的关键 — 不能上来就抓人。这就是 due process 的种子』；" +
        "(d) 她选别的或答不上 → 引导：『这句话最毒的两个字其实是 shall — 国王不能这么做，不是国王最好别这么做』。",
      expectsInput: false,
      autoAdvance: true
    },
    {
      n: 9,
      move: "provoke",
      role: "ai",
      ai_seed:
        "Provoke move — 揭示反方真相。要点：" +
        "(1) 这群贵族**不是为穷人** — 他们是债主、地主、烦透了被加税；" +
        "(2) 但 Clause 39 措辞用了'**任何自由人**'(any free man)，没限定贵族；" +
        "(3) 这一句话过 800 年从'贵族不被欺负'扩到'所有人不被欺负'；" +
        "(4) 1791 美国宪法第 5 修正案、今天加州法庭都是从这句话长出来的；" +
        "(5) 总结：『**自私的开头，结出了普世的果子。** 西方政治史的一个特点 — 一群人为自己争利，意外地解放了所有人』；" +
        "(6) 设问：『你觉得这是好事还是坏事？』",
      mustIntroduce: [
        { word: "rebel", cn: "反叛者" },
        { word: "baron", cn: "大贵族 / 男爵" },
      ],
      expectsInput: true,
      inputPrompt: "你觉得这是好事还是坏事？",
      uiHint: {}
    },
    {
      n: 10,
      move: "roleplay",
      role: "ai",
      ai_seed:
        "Roleplay setup — 让她代入虚构的 King John 女儿。" +
        "(1) **第一句必须先告知是虚构** — 真实 Joan of England 1215 年才 5 岁，没法跟爸爸辩论。我把她写成 {{userAge|13}} 岁，让她真实代入；" +
        "(2) **建立长期信任契约**：『以后我们做这种假装的练习，我都会先告诉你是虚构 — 不会让你以为是真历史』；" +
        "(3) 场景：6 月 15 日早晨，爸爸（国王）要去 Runnymede 签字，气得来回走，把你叫过来说『这群贵族要造反逼我签字。我签了我就不再是国王了』；" +
        "(4) 给她 prompt：『你 {{userAge|13}} 岁，你会跟爸爸说什么？』；" +
        "(5) 强调：**没有标准答案**，说她真实想说的话。",
      expectsInput: true,
      inputPrompt: "你会怎么跟爸爸说？",
      uiHint: {}
    },
    {
      n: 11,
      move: "roleplay-eval",
      role: "ai-eval",
      ai_seed:
        "Roleplay 共情评估，5 个分支：" +
        "(a) 她说'爸爸应该签 / 不签更糟' → 『你跟历史上 King John 王后 Isabella of Angoulême 想得差不多 — 据说她当时也劝国王让步』；" +
        "(b) 她说'不能签 / 这会让爸爸丢脸' → 『你跟教皇 Innocent III 想的一样 — 几个月后他给 King John 写信宣布宪章无效。但贵族不在意』；" +
        "(c) 她说'我才 {{userAge}} 岁我不知道' → 『{{userAge}} 岁知道这种事真的难。但这就是个把不公道的人逼住的故事，跟你跟同学吵架时的本能差不多』；" +
        "(d) 她说别的 → 顺着她角度共情；" +
        "(e) 不要评判她对错 — 这是开放思考练习。",
      expectsInput: false,
      autoAdvance: true
    },
    {
      n: 12,
      move: "connect",
      role: "ai",
      ai_seed:
        "Connect move — 挂回 power-vs-liberty 主线，加古希腊根 + 三维度回收。" +
        "(1) Aristotle《政治学》引文：『It is more proper that law should govern than any one of the citizens.』 (公元前 4 世纪)；" +
        "(2) '书架上躺了 1500 年没人理，1215 这群贵族用 Runnymede 草地把它从书页搬到现实'；" +
        "(3) 接力链：古希腊（Aristotle）→ 1215 Magna Carta → 1689 English Bill of Rights (注意是 parliament 限制国王的权力法案) → 1776 美国独立 → 1791 美国权利法案（写明政府不能从个人手里随便拿走的）→ 1948 联合国人权宣言（写明国家也不能侵犯的基本人权）；" +
        "(4) 『今天读到的 no free man shall be seized 就是这条 2400 年接力的中间一棒』；" +
        "(5) '等你 8 年级学美国历史，9 年级看 American Revolution，你会回头感激今天画了这条线 — 不然 Jefferson 写 unalienable rights 你会以为只是漂亮话'。",
      mustIntroduce: [
        { word: "parliament", cn: "议会" },
        { word: "government by consent", cn: "同意而治" },
      ],
      expectsInput: false,
      autoAdvance: true,
      uiHint: { showThroughLine: "power-vs-liberty" }
    },
    {
      n: 13,
      move: "seal",
      role: "ai",
      ai_seed:
        "Seal — 晚饭家庭话题。给她 3 个家庭话题选 1（含宗教 / 家国对比）：" +
        "(1) '如果当年中国也有人能逼皇帝签 Magna Carta 这种字，你觉得最适合做这个人的是谁？'" +
        "(2) '中国皇帝是天子，欧洲国王上面还有教皇 — 你觉得这两种结构哪个更稳？'" +
        "(3) '中国说家国天下，欧洲讲私人财产神圣 — 你更认同哪个？为什么？'" +
        "结尾：『明天告诉我你们家的答案 — 我想听听 {{userParentWord|你家长}} 是怎么想的』。" +
        "口吻：不是布置作业，是邀请家庭对话。",
      expectsInput: false,
      autoAdvance: true,
      uiHint: { isFinalTurn: true }
    }
  ],

  // ─── 5 个 Perspectives（角色代入选项） ─────────────────────────────
  perspectives: [
    { id: "king-john",       label: { en: "King John", cn: "约翰国王" }, description: "1215 那天的国王本人 — 害怕、愤怒、被逼。" },
    { id: "rebel-baron",     label: { en: "Rebel Baron", cn: "反叛贵族" }, description: "Robert Fitzwalter — 反叛贵族领袖，要逼国王让步。" },
    { id: "english-peasant", label: { en: "Peasant", cn: "英国农民" }, description: "她对这事一无所知 — 但 800 年后她的后代成了受益者。" },
    { id: "pope-innocent",   label: { en: "Pope Innocent III", cn: "教皇英诺森三世" }, description: "宣布宪章无效 — 站在国王一边，但贵族不在意。" },
    { id: "joan",            label: { en: "Joan, age {{userAge}}", cn: "{{userAge}} 岁的女儿" }, description: "想象出来的、跟你同龄的国王女儿 — 同龄代入入口。", isFictional: true },
  ],

  // ─── Mastery Checks（Topic 完成 gate） ─────────────────────────────
  // 必过 3 项：spelling + definition + application
  // 可选 3 项：teach-back / counterfactual / geo-inference（XP 加成）
  masteryChecks: {
    required: [
      {
        type: "spelling",
        label: { cn: "拼写测试", en: "Spelling Test" },
        instruction: { cn: "随机抽 6 个词，全对才算过", en: "6 random words, all correct to pass" },
        items: [
          { prompt: "The 1215 document signed by King John was called the M____a C____a.",                answer: "Magna Carta",  hint: "宪章" },
          { prompt: "Government by a single ruler (king or queen) is called a m_______y.",                  answer: "monarchy",      hint: "君主制" },
          { prompt: "King John's cruel and unfair rule was called t______y by the barons.",                answer: "tyranny",        hint: "暴政" },
          { prompt: "A noble lord powerful enough to challenge the king is called a b____n.",              answer: "baron",          hint: "大贵族" },
          { prompt: "The English law-making body that grew from these meetings is called p________t.",     answer: "parliament",     hint: "议会" },
          { prompt: "Each rule in the Magna Carta is called a c_____e.",                                    answer: "clause",          hint: "条款" },
          { prompt: "The medieval European system of land-for-loyalty was the f_____l system.",            answer: "feudal",          hint: "封建" },
          { prompt: "The barons who refused to obey King John were called r_____s.",                        answer: "rebels",          hint: "反叛者" },
          { prompt: "Magna Carta says the king cannot tax without the c______t of the kingdom.",           answer: "consent",         hint: "同意" },
        ],
        sampleSize: 6,  // 9 题随机抽 6
        passThreshold: 6  // 6/6 全对
      },
      {
        type: "definition",
        label: { cn: "概念定义复述", en: "Concept Definitions" },
        instruction: { cn: "用你自己的话说明这个概念，可以中英混合", en: "Explain in your own words; bilingual OK" },
        items: [
          { conceptId: "rule-of-law",         prompt: "用你自己的话告诉我什么是 rule of law。一句话就够。" },
          { conceptId: "due-process",         prompt: "Give me an example of due process from your school life." },
          { conceptId: "law-of-the-land",     prompt: "Why is 'law of the land' different from 'the king's command'?" },
          { conceptId: "consent-of-governed", prompt: "What does 'government by consent' mean? Why does Magna Carta Clause 12 (about taxes) connect to this?" },
        ],
        sampleSize: 3,
        passThreshold: 3,
        evalMode: "ai-lenient"  // AI 评估，抓核心意思就过，不要求完美英文
      },
      {
        type: "application",
        label: { cn: "应用题", en: "Application" },
        instruction: { cn: "用今天学的原则分析新场景", en: "Apply today's principles to a new scenario" },
        items: [
          {
            prompt: "Imagine your principal expels you for a week because she heard a rumor that you cheated. No hearing, no chance to explain. Which Magna Carta principle does this break?",
            expectedAnswers: ["due process", "Clause 39", "lawful judgment"]
          },
          {
            prompt: "The US Constitution's 5th Amendment says: 'No person shall be deprived of life, liberty, or property, without due process of law.' Which Magna Carta clause does this directly trace back to?",
            expectedAnswers: ["Clause 39", "39"]
          },
          {
            prompt: "The Pope wrote to King John in late 1215 saying: 'I, the Pope, declare this charter invalid.' Why did the barons NOT care about the Pope's opinion?",
            expectedAnswers: ["lex terrae", "law of the land", "secular", "国家法律高于教皇"]
          }
        ],
        sampleSize: 1,
        passThreshold: 1,
        evalMode: "ai-lenient"
      }
    ],
    optional: [
      {
        type: "teach-back",
        label: { cn: "讲给中国朋友听", en: "Teach a friend in China" },
        xpBonus: 30,
        prompt: "你最好的朋友（中国的同学，没去过美国）今天问你：『什么是 Magna Carta？为什么美国人这么看重？』用 200 字告诉她。中英混合可以，但**关键英文词必须用英文**（charter / clause / due process / rule of law）—— 不要给她翻译，让她也学到。",
        rubric: ["提到 1215 + 英国 + King John", "用了至少 2 个核心英文词", "解释为什么重要 (不只是是什么)", "桥接到美国/今天"]
      },
      {
        type: "counterfactual",
        label: { cn: "反事实推理", en: "Counterfactual" },
        xpBonus: 40,
        prompt: "如果 King John 那天拒绝签字会怎么样？预测 3 件可能不一样的事。可以猜，但要有理由。",
        rubric: ["3 个具体推测", "至少 1 个有合理因果链", "敢推、合理就好"]
      },
      {
        type: "geo-inference",
        label: { cn: "地理推断", en: "Geographic Inference" },
        xpBonus: 30,
        prompt: "为什么这件事发生在英国，不是法国，不是神圣罗马帝国？用地图想 — 英国跟欧陆的地理差异是什么？这种差异如何影响了 1215 那天能不能成功？",
        rubric: ["提到英吉利海峡 / 岛国", "解释地理 → 政治的因果"]
      }
    ]
  },

  // ─── XP 经济（按难度 + gate + 加成） ──────────────────────────────
  xpRewards: {
    base: 100,             // difficulty 3 = 100 XP
    perVocabPass: 5,
    perConceptPass: 10,
    perApplicationPass: 15,
    optionalChecks: { "teach-back": 30, "counterfactual": 40, "geo-inference": 30 },
    multipliers: {
      noChineseHelp: 1.5,
      onePass: 1.3,
      voiceInput: 1.1
    }
  },

  // 完成屏的家庭话题
  familyQuestion: {
    closingNarrative: "这是 1215 年 6 月 15 日的故事。\n800 年后，加州 Irvine 的法庭、美国宪法第 5 修正案，都是从那一刻长出来的。",
    question: "如果当年中国也有人能逼皇帝签 Magna Carta 这种字，你觉得最适合做这个人的是谁？",
    callToAction: "明天告诉我你们家的答案 — 我想听听爸妈是怎么想的。",
  },
};


// ─── Topic: Crusades 1099 ──────────────────────────────────────────
// 设计原则（Sarah Chen audit + Rule 0 neutrality）：
//   - 三方视角（拉丁基督教 / 拜占庭东正教 / 伊斯兰世界）平等呈现，避免"野蛮十字军 vs 高贵 Saladin"的 Walter Scott 浪漫主义陷阱
//   - 中国对照点：天命/朝贡 vs 圣战 — 不是"中国没有圣战所以中国先进"，而是地理/宗教/政治结构不同导致"军事冲突的解释框架"不同
//   - 13 turns + 1 optional check (跟 Magna Carta 对称，避免"中国侧轻量化"暗示)
//   - 核心 hook：第一次十字军占了耶路撒冷，但 192 年后被赶走 — 这件事到底改变了什么？
export var CRUSADES_1099 = {
  id: "crusades-1099",
  title: { en: "The Crusades", cn: "十字军东征" },
  oneLineHook: { cn: "1095 年教皇喊了一嗓子，西欧 10 万人走了 4000 公里去抢一座城 — 然后 200 年后被赶回来" },
  curriculumUnit: "7th-grade/medieval-europe",
  hssStandard: "HSS-7.6.4",
  bridgeStandard: "HSS-7.2.6",  // 桥接到伊斯兰文明
  textbookRef: {
    publisher: "Houghton Mifflin · 《Medieval & Early Modern Times》",
    grade: "7",
    chapter: "Ch. 10 The Byzantine Empire and the Rise of Russia",
    section: "Lesson 4 The Crusades + Ch. 11 Lesson 1 Muslim Civilization",
    page: "275",
    hint: "翻到课本 p.275 一起读 — AI 用三方视角讲（拉丁/拜占庭/穆斯林），不是教科书常见的'好人 vs 坏人'"
  },
  year: 1099,
  yearRange: [1095, 1291],
  region: "levant",
  difficulty: 5,  // Sarah Chen audit: Crusades 结构上比 Magna Carta 难（3 文明 + 阿拉伯转写 + 宗教史学），定 5
  throughLine: "religion-vs-state",
  estimatedMinutes: 35,

  // ─── 三维度 Bridge Anchor ─────────────────────────────────────────
  bridgeAnchor: {
    type: "multi-dimensional",
    dimensions: [
      {
        id: "war-religion",
        name: "战争与宗教",
        cnAnchor: "中国'天命'战争 / 朝贡体系",
        strength: "weak",
        keyDivergence: "中世纪欧洲发明了'圣战'(crusade)概念 — 教皇为参战者赦罪。同期穆斯林世界有 jihad 概念。中国没有'宗教战争'传统：朝代更替用'天命'解释，但天命不是某个神，是宇宙秩序。地理 + 宗教结构不同导致冲突的解释框架不同 — 不是高低，是各自的内在逻辑。"
      },
      {
        id: "religious-authority",
        name: "宗教权威",
        cnAnchor: "天子（皇帝同时是大祭司）",
        strength: "strong",
        keyDivergence: "中世纪欧洲 = 教皇 vs 国王两条权威线（Investiture Controversy 1076-1122 同时期发生）。伊斯兰世界 = caliph 同时是宗教 + 政治领袖。中国 = 天子一人通天，但儒家士大夫做'天命解释者'制衡。三个文明三条解决路径，没有谁'正确'。"
      },
      {
        id: "pilgrimage",
        name: "朝圣传统",
        cnAnchor: "佛教朝圣（玄奘 / 五台山）+ 道教朝山",
        strength: "medium",
        keyDivergence: "三大一神教都有朝圣（Hajj / 去耶路撒冷 / 朝拜罗马）。中国佛教 / 道教也有朝圣传统（玄奘西天取经 627-645 比第一次十字军早 450 年），但**中国朝圣是个人修行，不是集体军事行动**。这个差异决定了第一次十字军可能 — 中国版'武装朝圣'结构上不会发生。"
      }
    ],
    divergenceNote: {
      cn: "1095 年欧洲走出了'武装朝圣'这条路：朝圣 + 战争 + 教皇赦罪 = 圣战。" +
          "同时代的伊斯兰世界已有 jihad（700 多年传统），同时代的中国（北宋）佛教徒在朝五台山、玄奘的西游记正在民间流传。" +
          "三个文明都有'走很远的宗教旅途'的传统，但只有欧洲把它武装化、组织化、教皇化。" +
          "为什么？地理（欧洲离圣地远 + 当时拜占庭求救）+ 宗教结构（教皇有跨国权威）+ 经济（封建二三子无地需要发泄出口）三个变量同时到位。" +
          "三条路各有逻辑，不是谁更'文明'。"
    }
  },

  // ─── Geography 5 子模块 ───────────────────────────────────────────
  geography: {
    worldOrient: {
      worldMap: "world-base",
      highlightRegion: "levant-eastern-mediterranean",
      orientNote: {
        cn: "在地中海东岸的窄长海岸线上 — 现在的以色列、巴勒斯坦、叙利亚、黎巴嫩",
        en: "Narrow eastern Mediterranean coast — modern Israel, Palestine, Syria, Lebanon"
      }
    },
    // 5-5: useAtlasLink: true → GeographySection 显示 "回 Atlas Lab 看完整地图" link card
    // 不重复画手工 SVG (europe-1099 / middle-east-modern 都没画)
    // atlas-lab/crusades 已有完整地图 (政治多边形 + L4 pins + 历史/现代翻转)
    useAtlasLink: true,
    atlasViewId: "crusades",
    primaryMap: null,
    flipMap: null,
    primaryMapPin: { lon: 35.2137, lat: 31.7683, label: "Jerusalem 1099" },

    scaleAnchors: [
      { cn: "从巴黎到耶路撒冷直线 3300 km — 相当于北京到拉萨", en: "Paris to Jerusalem 3300 km — like Beijing to Lhasa" },
      { cn: "第一次十字军走了 3 年（1096-1099），平均每天 3-4 km", en: "First Crusade took 3 years overland, ~3-4 km/day average" },
      { cn: "整个 Crusader States 巅峰时面积 ≈ 中国浙江省", en: "Crusader States at peak ≈ size of Zhejiang province" },
    ],

    whyMatters: {
      cn: "黎凡特海岸是个**狭长走廊** — 沙漠在东边，海在西边，唯一能通军队的就是这条沿海公路（古罗马 Via Maris）。这条路同时是宗教意义浓缩区：耶路撒冷（三大一神教共同圣地）+ 伯利恒（耶稣出生地）+ 大马士革（保罗皈依）+ 安条克（早期基督教中心）全在 500 km 内。地理把三个文明的神圣地理压缩到一起，注定了这里会反复成为冲突焦点。同时代的中国，地理是另一种逻辑：东西 5000 km 缓冲，没有任何一个'三宗教共同圣地'的压缩区，所以中国的宗教冲突主要是教派内部（佛 vs 道，禅宗 vs 净土），不是国际战争。",
      en: "The Levant coast is a narrow corridor — desert east, sea west, only one north-south road (the ancient Via Maris). This same strip concentrates sacred geography: Jerusalem (holy to 3 monotheisms), Bethlehem (Jesus's birthplace), Damascus (Paul's conversion), Antioch (early Christianity) — all within 500 km. Geography compressed three civilizations' sacred sites into one corridor, predestining recurring conflict. Contemporary China had different geography: 5000 km E-W buffer, no comparable 'tri-faith holy compression', so Chinese religious conflicts were intra-traditional (Buddhism vs Daoism), not international wars."
    },

    chinaCompare: {
      otherMap: null,
      readNote: {
        cn: "1099 年同时代的北宋正在搞'熙宁变法'(王安石 1069-1085) — 解决的是国内官僚 / 财政 / 军备问题。中国没有形成欧洲式'武装朝圣'制度模式 — 这不是说中国没有宗教色彩的战争（吐蕃-唐边境冲突 763 年沙陷长安也有宇宙观框架），而是没有出现'独立教士阶层主导跨国动员'的结构。中国版'远征'是另一条线：唐玄奘 627 年只身去印度取经（个人佛教朝圣）；明初郑和 1405 起 7 下西洋（朝贡 + 贸易展示），都不是教皇式宗教战争。",
        en: "Contemporary Northern Song (1099) was running Wang Anshi's reforms — domestic bureaucracy / fiscal / military, not religious. China didn't develop the European 'armed pilgrimage' institutional pattern — not because China was 'more peaceful', but because no independent clergy class emerged with cross-state mobilization power. Religious-flavored wars did happen (Tang-Tibetan border conflicts had cosmological framing). Chinese versions of 'long expeditions' followed different logic: Xuanzang's solo Buddhist pilgrimage to India (627), Zheng He's tributary voyages (1405-1433) — none are pope-style religious wars."
      }
    }
  },

  // ─── Must-Memorize ─────────────────────────────────────────────────
  mustMemorize: {
    vocab: [
      { word: "crusade",      ipa: "/kruːˈseɪd/",      pos: "n.",  cn: "十字军东征 / 圣战",       example: "Pope Urban II launched the First Crusade in 1095.", exampleCn: "教皇 Urban II 在 1095 年发动第一次十字军东征。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.6.4", emphasis:"high"}, {code:"AP-WHAP-1.6"}, {code:"textbook-7-10-4"}] },
      { word: "pilgrim",      ipa: "/ˈpɪlɡrɪm/",        pos: "n.",  cn: "朝圣者",                  example: "Pilgrims walked thousands of miles to reach Jerusalem.", exampleCn: "朝圣者徒步数千英里到耶路撒冷。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.6.4"}, {code:"textbook-7-10-4"}] },
      { word: "indulgence",   ipa: "/ɪnˈdʌldʒəns/",     pos: "n.",  cn: "赦罪状（教皇免罪承诺）",  example: "The pope offered indulgences to anyone who joined the Crusade.", exampleCn: "教皇承诺：参加十字军可以免除一切罪。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.6.4"}, {code:"AP-WHAP-1.6"}] },
      { word: "infidel",      ipa: "/ˈɪnfɪdel/",        pos: "n.",  cn: "异教徒（带贬义的他者称呼）", example: "Both sides called each other 'infidel' during the Crusades.", exampleCn: "十字军时代，双方都叫对方 'infidel'（不信我教的人）。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.6.4"}] },
      { word: "caliph",       ipa: "/ˈkeɪlɪf/",         pos: "n.",  cn: "哈里发（伊斯兰世界政教合一领袖）", example: "The Abbasid caliph in Baghdad was the religious leader of Sunni Islam.", exampleCn: "巴格达的 Abbasid caliph 是逊尼派伊斯兰世界的宗教领袖。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.2.4", emphasis:"high"}, {code:"AP-WHAP-1.2"}] },
      { word: "sultan",       ipa: "/ˈsʌltən/",         pos: "n.",  cn: "苏丹（伊斯兰王朝军政领袖）", example: "Saladin was sultan of Egypt and Syria.", exampleCn: "Saladin 是埃及和叙利亚的苏丹。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.6.4"}, {code:"AP-WHAP-1.2"}] },
      { word: "siege",        ipa: "/siːdʒ/",           pos: "n.",  cn: "围城战",                  example: "The siege of Jerusalem in 1099 lasted five weeks.", exampleCn: "1099 年围攻耶路撒冷持续了五周。", untranslatable: false,
        sourceStandards: [{code:"textbook-7-10-4"}] },
      { word: "Levant",       ipa: "/ləˈvɑːnt/",        pos: "n.",  cn: "黎凡特（地中海东岸）",     example: "The Crusader states ruled the Levant from 1099 to 1291.", exampleCn: "十字军国家统治黎凡特地区从 1099 到 1291 年。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.6.4"}] },
      { word: "schism",       ipa: "/ˈsɪzəm/",          pos: "n.",  cn: "教派分裂",                example: "The 1054 East-West Schism split the Christian church.", exampleCn: "1054 年东西教会大分裂分裂了基督教会。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.6.4"}, {code:"AP-WHAP-1.5"}] },
    ],
    concepts: [
      {
        id: "holy-war",
        en: "holy war",
        ipa: "/ˈhoʊli wɔːr/",
        cn: "圣战（宗教正当化的战争）",
        defEn: "A war fought in the name of religion, where killing the enemy is framed as religiously meritorious.",
        defCn: "以宗教名义发动的战争 — 杀敌被框架成宗教功德，不是罪。十字军（Crusade）和伊斯兰 jihad 都是这个概念的不同版本。",
        sourceStandards: [{code:"CA-HSS-7.6.4", emphasis:"high"}, {code:"AP-WHAP-1.6"}]
      },
      {
        id: "papal-authority",
        en: "papal authority",
        ipa: "/ˈpeɪpəl əˈθɔːrəti/",
        cn: "教皇权威",
        defEn: "The pope's claim to spiritual authority over all Christians, including over kings — central to medieval European politics.",
        defCn: "教皇宣称对所有基督徒（包括国王）有精神权威。中世纪欧洲政治的核心张力（教皇 vs 国王）。同时代中国不存在 — 因为天子一人通天，没有'独立的宗教权威'。",
        sourceStandards: [{code:"CA-HSS-7.6.4", emphasis:"high"}, {code:"CA-HSS-7.6.5"}]
      },
      {
        id: "jihad",
        en: "jihad",
        ipa: "/dʒɪˈhɑːd/",
        cn: "吉哈德（伊斯兰'奋斗'，含战争 + 个人灵性两层意思）",
        defEn: "Arabic word meaning 'struggle' — has BOTH a 'greater jihad' (inner spiritual struggle) and 'lesser jihad' (military defense of Islamic territory). Western media often collapses to only the second meaning.",
        defCn: "阿拉伯语'奋斗'。包含两层：'大 jihad'是个人灵性自我克服，'小 jihad'是军事防卫伊斯兰领土。西方媒体常常只翻译成'圣战'，丢了第一层。在 Crusades 时代，伊斯兰反应主要是 lesser jihad。",
        sourceStandards: [{code:"CA-HSS-7.2.4"}, {code:"AP-WHAP-2.3"}]
      },
      {
        id: "feudal-pilgrimage",
        en: "armed pilgrimage",
        ipa: "/ɑːrmd ˈpɪlɡrɪmɪdʒ/",
        cn: "武装朝圣（十字军独特发明）",
        defEn: "The medieval European synthesis of religious pilgrimage + military expedition. Pilgrim meets soldier — a hybrid that didn't exist in Buddhism, Daoism, or earlier forms of Christianity.",
        defCn: "中世纪欧洲把朝圣（pilgrimage）+ 军事远征（military expedition）拼成一个东西。这是个独特的合成 — 佛教朝圣（玄奘）、道教朝山、早期基督教朝圣都不带武装。同时代的中国和伊斯兰世界都没有完全对应的概念。",
        sourceStandards: [{code:"CA-HSS-7.6.4"}]
      },
      {
        id: "religious-tolerance",
        en: "religious tolerance",
        ipa: "/rɪˈlɪdʒəs ˈtɑːlərəns/",
        cn: "宗教宽容",
        defEn: "A society's policy or practice of allowing different religions to coexist — varies dramatically across periods and cultures.",
        defCn: "不同宗教并存的政策或实践。要点：在 Crusades 时代，伊斯兰统治下的耶路撒冷允许基督徒 + 犹太人居住（缴 jizya 税即可）；十字军占领后清洗了非基督徒；Saladin 1187 重夺后又恢复多教派共存。'谁更宽容'随时段变化，不是文明本质。",
        sourceStandards: [{code:"CA-HSS-7.2.6"}, {code:"AP-WHAP-2.3"}]
      },
      {
        id: "cultural-exchange",
        en: "cultural exchange",
        ipa: "/ˈkʌltʃərəl ɪksˈtʃeɪndʒ/",
        cn: "文化交流",
        defEn: "Transfer of ideas, technology, foods, and texts between civilizations — happens through trade, conquest, AND war.",
        defCn: "文明之间的思想、技术、食物、文本传递。十字军是个典型例子：尽管初衷是战争，副产品是欧洲学到了伊斯兰世界保留的希腊哲学（亚里士多德经阿拉伯文回到拉丁文）+ 阿拉伯数字 + 蔗糖 + 玻璃工艺。这不是为战争辩护，而是承认历史复杂性。",
        sourceStandards: [{code:"CA-HSS-7.6.4"}, {code:"CA-HSS-7.2.6"}]
      }
    ]
  },

  // ─── 原始史料三层架 ─────────────────────────────────────────────
  primarySources: [
    {
      id: "urban-clermont-speech",
      title: { en: "Pope Urban II's Speech at Clermont (1095) — Fulcher of Chartres version", cn: "教皇 Urban II 在 Clermont 的演讲（1095）— Fulcher of Chartres 记录版" },
      latin: "Deus vult! (God wills it!)",
      en: "Most beloved brethren, urged by necessity, I, Urban, by the permission of God chief bishop and prelate over the whole world, have come into these parts as an ambassador with a divine admonition to you, the servants of God. ... For your brethren who live in the east are in urgent need of your help... an accursed race, utterly alienated from God, has invaded the lands of those Christians and has depopulated them by the sword, pillage and fire. ... Let those who have been accustomed unjustly to wage private warfare against the faithful now go against the infidels and end with victory this war which should have been begun long ago.",
      enSimplified: "Editor's paraphrase for Lexile-900 readers (Fulcher's text is a chronicler's reconstruction, not verbatim): \"My brothers, the Christians in the East need our help. A people who do not believe in our God have taken their lands. Stop fighting each other in Europe — go fight them instead. Anyone who dies on this journey will have all sins forgiven.\"",
      cnGloss: "[编辑改写说明：Fulcher 这个版本是 11 年后的回忆，不是教皇原话；Robert the Monk、Baldric of Dol、Guibert of Nogent、William of Malmesbury 各自记录的版本细节都不同。我们没有真正的演讲词。这里取 Fulcher 版本，因为最早 + 信息最完整。]\n\n大致意思：「我的兄弟们，东方的基督徒需要我们帮助。一群不信我们神的人占了他们的土地。不要再在欧洲互相厮杀了 — 去跟那些人战斗吧。死在路上的人，所有的罪都会被赦免。」",
      lexile: 980,
      keyTerms: [
        { word: "infidel",   cn: "异教徒（带贬义）", etym: "in (不) + fidelis (有信仰的) — 字面意思是'没有信仰的'，但在十字军语境里是侮辱性词汇" },
        { word: "accursed",  cn: "被诅咒的",        etym: "ac- (向) + curse — 教皇用极强的宗教语言把对方非人化，这是后续暴力的语言基础" },
        { word: "private warfare", cn: "私人战争", etym: "11 世纪欧洲贵族无聊就互相打仗 — 教皇把这种内部暴力'外导'到东方" },
      ],
      attribution: "Editor's paraphrase. Original Latin from Fulcher of Chartres' Gesta Francorum (~1106), English from Fordham Internet Medieval Sourcebook. Five chronicler versions exist (Fulcher / Robert the Monk / Baldric of Dol / Guibert of Nogent / William of Malmesbury) — they differ in details. https://sourcebooks.fordham.edu/source/urban2-fulcher.asp"
    },
    {
      id: "ibn-al-athir-jerusalem",
      title: { en: "Ibn al-Athir on the Fall of Jerusalem (1099) — The Complete History", cn: "Ibn al-Athir《历史大全》记 1099 年耶路撒冷陷落" },
      en: "The Franks stormed the town and gained possession of it. ... In the Masjid al-Aqsa the Franks slaughtered more than 70,000 people, among them a large number of Imams and Muslim scholars, devout and ascetic men who had left their homelands to live in pious solitude in the Holy Place. The Franks stripped the Dome of the Rock of more than forty silver candelabra... and a great silver lamp weighing forty-four Syrian pounds, as well as a hundred and fifty smaller silver candelabra and more than twenty gold ones, and a great deal more booty.",
      enSimplified: "Editor's paraphrase: \"The Franks (the European crusaders) stormed Jerusalem and took the city. In the Al-Aqsa Mosque, they killed more than 70,000 people, including imams (Muslim religious teachers) and scholars who had moved to Jerusalem to live a religious life. They also stripped the Dome of the Rock of its silver and gold treasures.\"",
      cnGloss: "[编辑改写说明：Ibn al-Athir 写于事件 130 年后（约 1230 年），70,000 这个数字现代历史学家认为夸大（实际可能 3,000-10,000，本身已经是大屠杀），但这是最重要的伊斯兰一手记录。引用必须配 Fulcher of Chartres 的拉丁基督教版本一起看 — 三方视角才完整。]\n\n大致意思：「Franks（欧洲十字军）攻进耶路撒冷，占了城。在 Al-Aqsa 清真寺里，他们杀了 70,000 多人，包括 imams（穆斯林宗教学者）和苦修者。他们还把 Dome of the Rock 上的金银宝物洗劫一空。」",
      lexile: 920,
      keyTerms: [
        { word: "the Franks", cn: "法兰克人 / 西欧人", etym: "穆斯林对所有西欧基督徒的统称（不分法德英），跟拉丁人自己分'我是诺曼人/法兰克人/普罗旺斯人'不同" },
        { word: "Masjid al-Aqsa", cn: "阿克萨清真寺",  etym: "耶路撒冷的两座主清真寺之一，伊斯兰第三圣地（仅次于麦加、麦地那）" },
        { word: "Imams",      cn: "伊玛目（伊斯兰教士）", etym: "阿拉伯语'领拜者'，伊斯兰宗教学者" },
        { word: "Dome of the Rock", cn: "圆顶清真寺", etym: "建于 691 年的伊斯兰圣建筑，建在传说中亚伯拉罕祭子 + 穆罕默德夜行登霄之处" },
      ],
      attribution: "Editor's paraphrase. Original Arabic from Ibn al-Athir's al-Kāmil fī al-tārīkh (~1230, 130 years after the event). English translation from Francesco Gabrieli, 'Arab Historians of the Crusades' (Routledge 1969). Casualty number 70,000 is debated; modern scholars estimate 3,000-10,000. https://sourcebooks.fordham.edu/halsall/source/cde-jlem.asp"
    }
  ],

  // ─── 14 轮 Socratic 对话 ──────────────────────────────────────────
  conversationTurns: [
    // T1: Hook — 用她的世界打开
    {
      n: 1,
      role: "ai",
      move: "hook",
      ai_seed: "{{userName}}，今天我们聊一件 1000 年前的事 — 但先用 30 秒猜猜：1095 年 11 月，一个老人（教皇 Urban II）在法国 Clermont 的草地上对着 1 万人喊了一嗓子。一年后，10 万欧洲人（贵族 + 农民 + 妇女 + 小孩）打包行李，徒步 4000 公里，走了 3 年，去抢一座他们一辈子没见过的城（耶路撒冷）。他们没有手机、没有汽车、没有 GPS，路上 1/3 死了。\n\n你猜，是什么能让这么多人，干这么疯狂的事？给我一个直觉答案。",
      expectsInput: true,
      inputPrompt: "你的直觉：什么能让 10 万人走 4000 公里去抢一座城？",
    },
    // T2: Bridge — 用她的中国史 anchor 做结构对照（不是 1 对 1，是"为什么没"）
    {
      n: 2,
      role: "ai",
      move: "bridge-china",
      ai_seed: "[narrative-mode 默认派生 — 见 deriveTurnObjective]",
      expectsInput: true,
      inputPrompt: "为什么宋朝皇帝不会发动'去印度抢佛祖出生地'的远征？",
    },
    // T3: Setup-A — 拉丁基督教（只引入这一个文明 + 内部教权 vs 王权张力）
    {
      n: 3,
      role: "ai",
      move: "setup-latin",
      ai_seed: "[评估她的回答 — 多数 7 年级会说'中国不信佛？'或'太远？'。两个都对一半。]\n\n关键差异有三条 — 跟你之前学的中国史对照着记：\n\n1. **宗教权威结构**：欧洲 = 教皇 vs 国王（两条权威线），伊斯兰 = ⭐**caliph**（哈里发）+ ⭐**sultan**（苏丹）一人通天，中国 = 天子一人通天。**教皇能号召跨国战争，因为他不属于任何国王**。中国天子和苏丹都做不到这事。\n\n2. **地理压缩**：耶路撒冷 + 伯利恒 + 大马士革 + 安条克都在 500 km 内，是基督教 + 犹太教 + 伊斯兰教三方共同圣地。中国没有任何对应的'三宗教神圣压缩区' — 五台山 / 普陀山是佛教内部。\n\n3. **武装朝圣的发明**：⭐**pilgrim**（朝圣者）+ 战士 = ⭐**crusade**（十字军）。这是欧洲人独特的合成 — 玄奘西游 627-645 年单枪匹马去印度取经，没武装；麦加 ⭐**Hajj** 是和平朝圣。'武装的朝圣'是欧洲 1095 年发明的新东西。\n\n你跟我说一个：这三条里，哪条对你来说最反直觉 / 最难想象？",
      expectsInput: true,
      inputPrompt: "三条差异里，哪条最让你意外？为什么？",
      mustIntroduce: [
        { word: "caliph",  cn: "哈里发" },
        { word: "sultan",  cn: "苏丹" },
        { word: "pilgrim", cn: "朝圣者" },
        { word: "crusade", cn: "十字军" },
      ],
    },
    // T4: Geography
    {
      n: 4,
      role: "ai",
      move: "geo",
      ai_seed: "看一下地图。耶路撒冷不是个独立的城 — 它是黎凡特海岸（⭐**Levant**）这条**狭长走廊**的中心。东边是阿拉伯沙漠（不能走军队），西边是地中海。从巴黎到耶路撒冷直线 3300 km — 相当于北京到拉萨。\n\n11 世纪没有现代交通，第一次十字军走了 3 年 — 一边走一边打仗（路上还要打 1071 年 ⭐**Manzikert** 战役里崛起的塞尔柱突厥人）。\n\n这个地理告诉你两件事：\n- 同时代中国从没接触过这个空间（隔着中亚 + 沙漠），所以中国史课本里 Crusades 几乎不出现\n- 但 1500 年后，1900 年代的欧洲列强 + 1948 年的以色列建国 + 今天加沙战争 — 都在这条同样的狭长走廊上重演\n\n你看地图，这条狭长走廊上现在有几个国家？",
      expectsInput: true,
      inputPrompt: "数一下：黎凡特走廊（地中海东岸）现在有几个国家？",
      mustIntroduce: [
        { word: "Levant", cn: "黎凡特" },
      ],
    },
    // T5: Source-A — 读 Urban II 演讲（Fulcher 版）
    {
      n: 5,
      role: "ai",
      move: "source-clermont",
      ai_seed: "现在读真东西。1095 年 11 月，教皇 Urban II 在 Clermont 演讲。我们手上没有他原话录音 — 五个修士分别记了五个版本（最早的版本写于 11 年后）。这里读最早的 Fulcher of Chartres 版：\n\n[展示 source card — Urban II 演讲精简版]\n\n注意三个动词：\n- **\"come into these parts as an ambassador\"** — 教皇自称'神的大使'\n- **\"accursed race\"** — 把对方非人化（这是后续暴力的语言基础）\n- **\"go against the ⭐infidels\"** — 把欧洲内部互相打仗的精力'外导'\n\n我先问你一个具体的：教皇说'参加十字军的人，所有罪都被赦免'。这个承诺在中世纪有多大吸引力？想象一下 — 中世纪欧洲人相信地狱是真的，相信自己有罪要下地狱。教皇说免你罪 = 直接进天堂。\n\n你觉得这个承诺，对一个 25 岁的二儿子（哥哥继承家产，他没分到地）有多大吸引力？给我打分 1-10。",
      expectsInput: true,
      inputPrompt: "对一个 25 岁没继承权的二儿子，'免罪进天堂'承诺打几分？",
      mustIntroduce: [
        { word: "infidel", cn: "异教徒" },
      ],
    },
    // T6: Setup-B — 引入伊斯兰世界 + Pin 时刻"我们刚学了 A 现在加 B"
    {
      n: 6,
      role: "ai",
      move: "setup-islam",
      ai_seed: "现在读另一面。1099 年 7 月，第一次十字军攻进耶路撒冷。Ibn al-Athir（伊斯兰史学家，130 年后写）记录：\n\n[展示 source card — Ibn al-Athir 版]\n\n70,000 这个数字现代历史学家认为夸大（实际可能 3,000-10,000，本身已经是大屠杀）。但要点不是数字，是**视角**：\n- 拉丁基督教史料（Fulcher of Chartres 等）记成胜利、神迹、'神助我也'\n- 伊斯兰史料记成屠杀、亵渎、'神在考验我们'\n- 拜占庭东正教（Anna Komnene 写《Alexiad》）又是第三个视角 — 她觉得西欧十字军'粗鲁、不可信、来抢东西的'\n\n**同一件事，三个文明三种记忆，都是真的**。这是历史最重要的一课：不要问'谁说真话'，要问'每个人为什么这样记'。\n\n问你：如果你是 1099 年耶路撒冷城里的一个穆斯林居民（不是士兵，是普通家庭），你被屠杀的那天，你会怎么记这件事？怎么传给你的孙子？",
      expectsInput: true,
      inputPrompt: "如果你是 1099 年耶路撒冷的普通穆斯林，你怎么传这件事给后代？",
    },
    // T7: Source-B — 读 Ibn al-Athir 阿拉伯视角同事件
    {
      n: 7,
      role: "ai",
      move: "source-ibn-athir",
      ai_seed: "[共情她的回答 — 不评判，引导反思'宗教仇恨怎么形成']\n\n这就是为什么我说历史不是'谁对谁错'。\n\n现在拉到全局：第一次十字军 1099 年占了耶路撒冷，建立 Crusader States 4 个小王国（⭐**Kingdom of Jerusalem** 是最大的）。然后呢？\n\n- 88 年后（1187），Saladin 在 Hattin 战役全歼十字军主力，重夺耶路撒冷\n- 又 100 年后（1291），最后一个十字军据点 Acre 陷落\n- 总共 192 年。十字军走了 4000 km 抢了座城，最后还是被赶回去\n\n这就触到一个超级反直觉的问题：**这件事到底改变了什么？**\n\n表面看 — 没改变多少（耶路撒冷今天还是一样有冲突）。但长期看 — 改变了**欧洲自己**。听过 Marco Polo 1271 年去中国吗？他爸是威尼斯商人。威尼斯能养出商人去中国 — 因为十字军时期意大利商业城邦（威尼斯 / 热那亚 / 比萨）从给十字军运补给开始发财。第三次十字军（1189-1192）就有 ⭐**Richard I**（狮心王，约翰国王的哥哥）参加。\n\n你猜：还有什么是欧洲'通过 Crusades 间接获得'的？给我一个猜测。",
      expectsInput: true,
      inputPrompt: "猜猜：欧洲通过 Crusades 间接获得了什么？（提示：跟阿拉伯世界有关）",
      mustIntroduce: [
        { word: "Kingdom of Jerusalem", cn: "耶路撒冷王国（这里我们大写专有名词）" },
      ],
    },
    // T8: Setup-C + Pivot — 引入拜占庭 + 1204 反攻自家（震撼合并轮）
    {
      n: 8,
      role: "ai",
      move: "setup-byzantium-pivot",
      ai_seed: "[trust contract — 跟她说清楚]\n\n现在做个 roleplay。先给你**两个角色选**（都是虚构的 13 岁同龄人，让你能代入；真实历史中两人大概率会更小或更大）：\n\n**真实历史背景**：1099 年耶路撒冷有大约 30,000-50,000 居民，混居穆斯林 + 犹太人 + 东方基督徒。陷落时数千人被屠杀（具体数字史学界争议 3,000-10,000 之间，本身已是大屠杀）。\n\n**选 A — Yusuf**（13 岁少年）：父亲是 al-Aqsa 清真寺的 imam，他自己在学《古兰经》。1099 年 7 月 15 日下午，他在清真寺帮父亲分发水给老人。听到城墙塌的声音。父亲抓住他的肩膀说：'藏到地窖里，不要出来 — 不管听到什么。'\n\n**选 B — Layla**（14 岁少女，Yusuf 的姐姐）：去年嫁到城南另一个家族。今天回娘家路上听到城墙塌了。她在街上 — 离娘家还有 5 条街。她不知道父亲、弟弟、丈夫现在哪。穿着出门用的长袍，手里只有一个篮子（来娘家送饼）。\n\n**选 A 还是 B？告诉我你选哪个，然后写你接下来 30 秒的第一个具体念头 — 不要写'我很害怕'这种笼统的，写一个具体的感官 / 想法**。",
      expectsInput: true,
      inputPrompt: "你是地窖里的 Yusuf — 写一个具体念头（不要笼统'害怕'）",
    },
    // T9: Roleplay — 让她选 Yusuf/Layla/Norman 二儿子/耶路撒冷居民代入
    {
      n: 9,
      role: "ai",
      move: "roleplay",
      ai_seed: "[评估她的回答，PEEL 框架。无论选 A（Yusuf）还是 B（Layla），如果具体（'我妈在哪' / '声音停了吗' / '篮子摔了' / '丈夫家有没有人'），强烈正反馈。如果笼统（'好害怕'），鼓励她'再想一个具体场景里的具体感官']\n\n然后接：你写的这个念头 — 1099 年那天耶路撒冷城里几千个 Yusuf 和 Layla 都在想类似的事。这就是历史。教科书写'1099 First Crusade captures Jerusalem'是 8 个英文字，地窖里 / 街上这种 30 秒的体验是几千个。\n\n现在跳出角色，问你一个挑战性问题：教皇 Urban II 1095 年喊那一嗓子的时候，他知道几千个 Yusuf 和 Layla 会被杀吗？\n\n这个问题的答案不简单。给我你的想法 — 教皇是'明知会有人死还是喊了'，还是'真的没意识到会这样'？",
      expectsInput: true,
      inputPrompt: "教皇当时知道这种规模的屠杀会发生吗？你的判断 + 一句理由。",
    },
    // T10: Roleplay-eval + 现代回响（合并轮）
    {
      n: 10,
      role: "ai",
      move: "roleplay-eval-modern",
      ai_seed: "[评估她对教皇的判断 — 这是道德哲学题，没有标准答案。她说'知道'强化她的批判性，她说'不知道'引导她想'当时的人怎么想未来'。无论哪个，引导到下一个比较]\n\n现在转回中国对照。同时代的中国（北宋 1099 年）正在做什么？\n\n- 王安石变法（1069 起）刚结束 14 年，朝廷正在搞司马光的旧党 vs 新党党争（**还记得我们聊唐宋时说的'文官集团'吗？这里就是那个集团在党争**）\n- 苏轼在被贬黄州（《赤壁赋》1082 年）\n- 北宋禅宗高僧在传道，但**没有任何一个皇帝/教士会说'去印度抢佛祖故乡'**\n\n为什么？我们 turn 3 说过三条结构性原因。但更深的问题：中国'天命'政治和欧洲'圣战'政治，**解决的是同一个问题吗**？\n\n两边都要解决：'统治者的权威从哪里来？'\n- 欧洲：教皇 + 国王互相牵制 → 教皇有跨国号召力 → 圣战可能\n- 伊斯兰：caliph 兼任宗教 + 政治 → 防御性 jihad\n- 中国：天子一人通天 + 儒家士大夫制衡 → 没有教士阶层独立动员的可能\n\n**三条路径都能稳定运作几百年**。没有'更先进的那条'，只有'各自适应自己处境的那条'。\n\n你跟我说：如果你给三种安排打分 — 哪种'更稳定'？哪种'更危险'？为什么？",
      expectsInput: true,
      inputPrompt: "三种宗教-政治安排（欧洲分权 / 伊斯兰合一 / 中国天子）— 你觉得哪种更稳定？",
    },
    // T11: 同时代中国结构对照（narrative §8）
    {
      n: 11,
      role: "ai",
      move: "connect-china",
      ai_seed: "[评估她的判断 — 她可能有偏见（多数 Chinese-American 13 岁会说'中国天子'最稳定，因为那是熟的；要 challenge 她'稳定的代价是什么？'同时不否定她的中国 anchor]\n\n现在第三条线 — Crusades **意外的副产品**：⭐**cultural exchange**（文化交流）。\n\n十字军在中东 200 年，欧洲学到了什么？\n- **数字 0** — 阿拉伯数字（其实印度数字经阿拉伯传入）\n- **代数 algebra** — al-jabr 是阿拉伯词\n- **亚里士多德** — 罗马帝国崩溃后欧洲丢了希腊哲学，伊斯兰世界保留 + 翻译 → 12 世纪经阿拉伯文回到拉丁文\n- **蔗糖、棉花、玻璃工艺、风车、罗盘**\n- **大学制度**（巴黎大学 1150 / 牛津 1167）有部分模仿阿拉伯 madrasa（伊斯兰经学院）\n\n这是个棘手的事实：**毁灭性的战争，副产品是文化革命**。\n\n这不是为战争辩护 — 杀人就是杀人。但这是历史的复杂性：你**不能**说'十字军纯粹是坏事'，也**不能**说'感谢十字军给欧洲带来现代化'。两个都太简单。\n\n问你：如果你是 13 世纪意大利商人，靠跟阿拉伯人贸易致富 — 你怎么向你的孙子解释你做的事？",
      expectsInput: true,
      inputPrompt: "你是因 Crusades 致富的意大利商人 — 怎么向孙子解释你的事业？",
      mustIntroduce: [
        { word: "cultural exchange", cn: "文化交流" },
      ],
    },
    // T12: Through-line - religion-vs-state
    {
      n: 12,
      role: "ai",
      move: "throughline",
      ai_seed: "[评估她的回答，引导]\n\n现在串起整个 Topic 的主线：**religion vs state**（宗教 vs 国家）。这条主线在 Atlas Lab 上贯穿好几个 Topic：\n\n- **Crusades 1099-1291** — 教皇号召跨国战争（宗教权威 > 国家权威）\n- **Magna Carta 1215** — 教皇 Innocent III 废了大宪章（宗教 vs 王权 vs 贵族三方搏斗）\n- **Reformation 1517** — Luther 反对教皇，教皇权威解体\n- **Westphalia 1648** — 30 年宗教战争结束，'国家主权'概念诞生（宗教退出国际政治）\n- **美国宪法 1787** — 第一修正案明确政教分离\n\n这是西方的一条主线，**用了 700 年才走完**。\n\n同时代的中国 / 伊斯兰世界，主线**不是这个**。中国主线是\"中央集权 vs 地方割据\"（秦 / 汉 / 唐 / 宋 / 明 / 清反复），伊斯兰主线是\"caliph 统一 vs 教派分裂\"（Sunni / Shi'a / Sufi）。\n\n**三个文明三条主线，没有谁'走得更对' — 各自的地理 + 历史 + 宗教结构决定了各自要解决的核心矛盾不一样**。\n\n现在最后问你一个：你今天在加州（美国）。美国宪法第一修正案说'政教分离'。你觉得这个安排，跟中国'天子一人通天'比，**两边各自的代价**是什么？",
      expectsInput: true,
      inputPrompt: "美国'政教分离' vs 中国'天子通天' — 各自的代价是什么？",
    },
    // T13: Seal - family question
    {
      n: 13,
      role: "ai",
      move: "seal",
      ai_seed: "[共情她最后回答 — 不评分。这种问题没有标准答案，是她未来 10 年慢慢想的问题]\n\n好，今天聊完了。回顾我们走过的：\n\n1. 1095 教皇喊一嗓子，10 万人走 4000 km\n2. 三个文明三种宗教-政治结构\n3. 黎凡特地理 — 三宗教圣地压缩到一个走廊\n4. Urban II 演讲（拉丁版）\n5. Ibn al-Athir 屠杀记（阿拉伯版） — 同一事件三种记忆\n6. Yusuf 地窖里的 30 秒\n7. 192 年后被赶回去 — 这件事到底改变了什么\n8. 中国对照 — '天子'制度为什么不会发动远征\n9. cultural exchange — 战争的副产品是文化革命\n10. religion-vs-state 主线贯穿 700 年\n\n**今天回家的家庭话题**：\n你跟 {{userParentWord|爸妈}} 聊：'今天美国正在加沙打仗 / 以色列建国 / 巴勒斯坦冲突 — 这些跟 1099 年十字军是同一回事吗？还是完全不同？' 让 {{userParentWord|爸妈}} 给你他们的看法。\n\n明天告诉我他们说了什么。\n\n现在准备好测试了吗？拼写 + 概念 + 应用 — 必须背了才算完成。",
      expectsInput: false,
      autoAdvance: false,
    },
  ],

  // ─── Mastery Checks ───────────────────────────────────────────────
  masteryChecks: {
    required: [
      // C1: Spelling
      {
        type: "spelling",
        sampleSize: 5,
        items: [
          { prompt: "教皇承诺：参加十字军可以免除一切 ___",      hint: "in_____ence", answer: "indulgences" },
          { prompt: "11 世纪欧洲创造的'武装朝圣'叫 ___",         hint: "c_____e",     answer: "crusade" },
          { prompt: "穆斯林圣地的领袖兼政治领袖叫 ___",          hint: "ca____",      answer: "caliph" },
          { prompt: "Saladin 是埃及和叙利亚的 ___",              hint: "su____",      answer: "sultan" },
          { prompt: "围攻一座城叫 ___",                          hint: "s____e",      answer: "siege" },
          { prompt: "1054 年东西教会大分裂叫 East-West ___",     hint: "sc____m",     answer: "schism" },
          { prompt: "黎凡特地区指地中海 ___ 岸",                 hint: "Le____t",     answer: "Levant" },
        ]
      },
      // C2: Definition
      {
        type: "definition",
        sampleSize: 3,
        items: [
          { conceptId: "holy-war",          prompt: "什么是 holy war？为什么这个概念在中国传统里几乎没有？" },
          { conceptId: "papal-authority",   prompt: "什么是 papal authority？跟中国天子比有什么不同？" },
          { conceptId: "armed-pilgrimage",  prompt: "什么是 armed pilgrimage（武装朝圣）？为什么说这是欧洲独特的发明？" },
          { conceptId: "jihad",             prompt: "什么是 jihad？为什么把它简单翻译成'圣战'是不对的？" },
          { conceptId: "cultural-exchange", prompt: "Crusades 时代的 cultural exchange 是什么意思？举一个具体例子。" },
        ]
      },
      // C3: Application
      {
        type: "application",
        sampleSize: 1,
        items: [
          {
            prompt: "假设 1099 年中国北宋的一个皇帝（比如宋哲宗）听说了第一次十字军的事，他会做什么？是否可能模仿欧洲发动一个'佛教远征去印度'？基于你今天学的，给出 3 个理由说明为什么这种事在中国结构上不会发生。",
            expectedAnswers: [
              "天子通天 — 没有独立的宗教权威能号召跨国战争（不像教皇）",
              "中国没有'三宗教神圣压缩区'的地理 — 没有目标可抢",
              "中国朝圣传统是个人修行（玄奘单枪匹马），不是集体武装",
              "宋朝主要矛盾是辽 / 西夏 / 金的边境压力，不是宗教",
              "中国佛教 / 道教里没有'圣战'神学",
            ]
          },
          {
            prompt: "今天的加沙战争、以色列-巴勒斯坦冲突、ISIS — 这些事情在媒体里经常被叫做'十字军的延续'。基于你今天学的，你同意这个说法吗？同意 / 不同意 / 部分同意都行，但要给两个具体理由。",
            expectedAnswers: [
              "部分同意：地理走廊一样（黎凡特），三宗教圣地压缩区一样",
              "部分不同意：今天是民族国家冲突（不再是教皇号召），不是中世纪宗教权威结构",
              "部分同意：'宗教正当化暴力'的语言模式延续",
              "部分不同意：今天有联合国、国际法、媒体监督，不是 1099 屠杀那种规模",
              "复杂性：拒绝简单的'1095 = 2024'类比，但也拒绝'毫无关系'",
            ]
          },
        ]
      },
    ],
    optional: [
      // O1: Counterfactual
      {
        type: "counterfactual",
        prompt: "如果 Saladin 1187 年没赢 Hattin 战役 + 没重夺耶路撒冷，预测 3 件后续历史可能不一样的事。"
      },
    ]
  },

  // ─── Family Question (回家跟爸妈聊) ──────────────────────────────
  familyQuestion: {
    closingNarrative: "这是 1099 年的故事 — 但它有 3 条线还在今天活着：\n1. 黎凡特那条狭长走廊上，今天还在打仗\n2. religion-vs-state 这条主线，西方走了 700 年走出了'政教分离'这条特定路径，中国 / 伊斯兰世界走出了不同的路径（不是落后，是不同的解）\n3. 'cultural exchange 是战争的副产品' — 这个反直觉的事实，今天 globalization 的争论里还在重演",
    question: "你跟 {{userParentWord|爸妈}} 聊：今天的加沙战争、以色列建国、巴勒斯坦冲突 — 跟 1099 年十字军是同一回事吗？让 {{userParentWord|爸妈}} 给你他们的看法。",
    callToAction: "明天告诉我 {{userParentWord|爸妈}} 怎么说 — 三个文明 1000 年后还在同一片土地上，这件事一家人坐下来聊一次很值。"
  }
};

// ─── Topic: Black Death 1347 ──────────────────────────────────────────
// 最小元数据入口——内容主要走 Story-First lens 系统（lib/history-storyboards/black-death-1347.js）
// 3 lens：agnolo-siena（Siena chronicler）+ konrad-strasbourg（屠犹 perpetrator）+ devorah-strasbourg（14 岁犹太女孩 victim）
// 4-agent reviewed，11 处 P0 修复后稳定
export var BLACK_DEATH_1347 = {
  id: "black-death-1347",
  title: { en: "The Black Death", cn: "黑死病" },
  oneLineHook: { cn: "1347 年黑死病 4 年内杀掉欧洲三分之一人口 — 让一切像建在沙上的事都崩了：信仰、社会、邻里" },
  curriculumUnit: "7th-grade/medieval-europe",
  hssStandard: "HSS-7.6.9",
  bridgeStandard: "HSS-7.8.1",  // 桥接到 Renaissance
  textbookRef: {
    publisher: "Houghton Mifflin · 《Medieval & Early Modern Times》",
    grade: "7",
    chapter: "Ch. 10 The Late Middle Ages",
    section: "Lesson 4 The Black Death",
    page: "302",
    hint: "翻到课本 p.302 一起读 — AI 用 3 个真实/虚构人物的视角讲（Siena chronicler 亲手埋 5 子 / Strasbourg 屠犹者 / 14 岁犹太女孩幸存者），让你站进 1348 年那个春天而不是只看时间线"
  },
  year: 1347,
  yearRange: [1347, 1351],
  region: "europe-mediterranean",
  difficulty: 5,
  throughLine: "religion-vs-state",
  estimatedMinutes: 32,

  // ─── Geography（5-5 加,简化版,用 europe-1200 共用图）──
  // 黑死病 1347-53 横扫整个欧洲——欧洲全境地图最贴切
  // 真正深度地图(瘟疫传播路径 / Caffa→Messina→Avignon)在 atlas-lab/black-death
  geography: {
    worldOrient: {
      worldMap: "world-base",
      highlightRegion: "eurasia-mediterranean",
      orientNote: {
        cn: "横扫整个欧亚大陆——从克里米亚 Caffa 港 → 西西里 Messina → 4 年内整个欧洲",
        en: "Swept across all of Eurasia — from Caffa (Crimea) → Messina (Sicily) → all of Europe in 4 years"
      }
    },
    // 5-5: useAtlasLink: true → 不重复画手工 SVG, 直接 link 到 atlas-lab/black-death
    // atlas 已有完整欧亚瘟疫传播地图 (Caffa→Messina→Avignon pins + 蒙古和平商路)
    useAtlasLink: true,
    atlasViewId: "black-death",
    primaryMap: null,
    flipMap: null,
    primaryMapPin: { lon: 14.27, lat: 38.19, label: "Messina 1347" },

    scaleAnchors: [
      { cn: "Caffa(克里米亚)到 Messina(西西里) 海路 ~2200 km — 鼠跳蚤搭船 6 周横渡", en: "Caffa (Crimea) to Messina (Sicily) ~2200 km by sea — fleas/rats crossed in 6 weeks" },
      { cn: "1347 Messina 登陆 → 1348 Marseille → 1349 London → 1350 Bergen — 4 年扫完欧洲", en: "1347 Messina → 1348 Marseille → 1349 London → 1350 Bergen — 4 years to cover all Europe" },
      { cn: "欧洲死亡 ~2500 万人 = 同时代中国宋元易代死亡量级",                 en: "Europe lost ~25M people — comparable to Song-Yuan transition death toll" },
    ],

    whyMatters: {
      cn: "黑死病不是欧洲'区域病'——它是**欧亚整合的副产品**。蒙古和平(Pax Mongolica) 把欧亚商路 1240-1350 年贯通,Yersinia pestis 跟着蒙古商队 + 黑海热那亚商船 + 跳蚤 + 黑鼠一起扩散。地理决定性: 黑海港(Caffa)→ 地中海航线 → 西西里 → 全欧。同时代的中国元末已经爆发瘟疫(1331 鼠疫 + 1351 红巾起义),但中国疆域+人口结构使社会反应不同——欧洲走向'信仰崩溃 → 文艺复兴',中国走向'王朝更替 → 明初恢复'。",
      en: "The Black Death was not a European 'regional disease' — it was the **byproduct of Eurasian integration**. Pax Mongolica (1240-1350) connected Eurasian trade routes; Yersinia pestis traveled with Mongol caravans + Black Sea Genoese ships + fleas + black rats. Geographic determinism: Black Sea ports (Caffa) → Mediterranean shipping → Sicily → all Europe. Late Yuan China had its own plagues (1331 plague + 1351 Red Turban rebellion), but population/territory differences led to different societal reactions — Europe → 'faith collapse + Renaissance', China → 'dynastic transition + early Ming recovery'."
    },

    chinaCompare: {
      otherMap: null,
      readNote: {
        cn: "1347 同期中国处于元末——朱元璋 1328 出生,1351 红巾军起义,1368 明朝建立。中国也有 1331-32 鼠疫(《元史》记河北'死者太半'),但欧洲社会反应'信仰危机 + 反犹屠杀 + 鞭笞派 + 文艺复兴起源'是欧洲特有路径,不是普遍规律。",
        en: "Contemporary China was in late Yuan transition — Zhu Yuanzhang born 1328, Red Turban rebellion 1351, Ming dynasty founded 1368. China had 1331-32 plague too (Yuan Shi records 'half died' in Hebei), but Europe's social reaction — 'faith crisis + anti-Jewish pogroms + Flagellants + Renaissance origins' — was Europe-specific, not universal."
      }
    }
  },

  // ─── XP rewards（mastery 通关用）──
  xpRewards: {
    base: 140,             // difficulty 5 = 140 XP（比 Crusades 难度 5 一致）
    perVocabPass: 5,
    perConceptPass: 10,
    perApplicationPass: 15,
    optionalChecks: { "teach-back": 30, "counterfactual": 40 },
  },

  // ─── 内容主源走 storyboard ──
  // pages/history.js 里 isStoryboardTopic("black-death-1347") = true，
  // 走 lib/history-storyboards/black-death-1347.js，每个 lens 12 节点 prewritten content
  // 此处 conversationTurns 仅做 fallback（如果 storyboard 加载失败）—— 留空，runtime 会用 storyboard
  conversationTurns: [],

  // ─── mustMemorize（必背词列表）——auto-mark + Mastery Gate 用 ──
  // 占位 minimal 表，实际 lens 内容已经显式 gloss 了所有外语术语
  mustMemorize: {
    vocab: [
      { word: "plague",     ipa: "/pleɪɡ/",      pos: "n.", cn: "瘟疫",
        example: "The plague killed about a third of Europe in four years.",
        exampleCn: "黑死病在 4 年里杀掉约欧洲三分之一人口。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.6.9", emphasis:"high"}] },
      { word: "chronicler", ipa: "/ˈkrɒnɪklər/", pos: "n.", cn: "编年史家",
        example: "Agnolo di Tura was a chronicler who recorded the plague in Siena.",
        exampleCn: "Agnolo di Tura 是记录 Siena 黑死病的编年史家。", untranslatable: false },
      { word: "pogrom",     ipa: "/ˈpɒɡrəm/",     pos: "n.", cn: "对少数族群的有组织屠杀（特指针对犹太人）",
        example: "The Strasbourg pogrom of 1349 killed about two thousand Jews.",
        exampleCn: "1349 年 Strasbourg 屠犹事件大约杀了两千个犹太人。", untranslatable: true,
        sourceStandards: [{code:"AP-WHAP-1.5"}] },
    ],
    concepts: [
      {
        id: "banality-of-evil",
        en: "banality of evil",
        ipa: "/bəˈnælɪti əv ˈiːvl/",
        cn: "恶的平庸性",
        definition: {
          en: "Hannah Arendt's term: ordinary people doing terrible things under structural pressure, not because they are unusually evil.",
          cn: "Hannah Arendt 提出的概念：普通人在结构压力下做出极坏的事——不是因为他们格外坏。"
        }
      },
      {
        id: "scapegoat-mechanism",
        en: "scapegoat mechanism",
        ipa: "/ˈskeɪpɡoʊt ˈmekənɪzəm/",
        cn: "替罪羊机制",
        definition: {
          en: "When a society in crisis blames a minority group for the disaster — a recurring structural pattern visible in 1349 Strasbourg, 1881 Russia, 1938 Germany, and many other moments.",
          cn: "社会在灾难中把责任推给少数族群——一个反复出现的结构性 pattern，从 1349 Strasbourg 到 1881 沙俄到 1938 德国。"
        }
      }
    ]
  },

  // ─── Mastery Checks（mastery 通关用）──
  masteryChecks: {
    required: [
      {
        type: "spelling",
        sampleSize: 3,
        items: [
          { prompt: "1347-51 年杀掉欧洲三分之一人口的瘟疫叫 ___", hint: "p____e",      answer: "plague" },
          { prompt: "记录黑死病的 Siena 编年史家叫 ___",          hint: "c__________r", answer: "chronicler" },
          { prompt: "1349 年 Strasbourg 屠杀 2000 个犹太人——这种系统性屠犹叫 ___", hint: "p_____m", answer: "pogrom" },
        ]
      },
      {
        type: "definition",
        items: [
          { conceptId: "banality-of-evil",   prompt: "Hannah Arendt 提出的'恶的平庸性'是什么意思？给我用一句话说出来。" },
          { conceptId: "scapegoat-mechanism", prompt: "什么是'替罪羊机制'？给我从 1349 Strasbourg 举一个例子。" },
        ]
      },
      {
        type: "application",
        items: [
          { prompt: "Konrad of Strasbourg 1349 年 2 月 9 日投赞成票罢免反对屠犹的市长——他真心觉得自己只是'投程序票'。这跟 Hannah Arendt 说的 banality of evil 是同一回事吗？为什么？" },
          { prompt: "黑死病杀了 2500 万欧洲人——但有些历史学家说'这场灾难推动了欧洲进步'（农奴解放、文艺复兴）。另一些历史学家说'这是幸存者的幻觉，死者没有 voice'。你站哪边？给一个具体理由。" },
        ]
      }
    ]
  },

  // ─── primarySources（一手史料）──
  primarySources: [
    {
      title: "Cronaca senese (Agnolo di Tura del Grasso, 1300-1351)",
      year: 1351,
      author: "Agnolo di Tura del Grasso",
      excerpt: "E io, Agnolo di Tura, detto el grasso, soppellii con le mie mane cinque mei figliuoli in una fossa.",
      excerptCn: "我，Agnolo di Tura，绰号'胖子'，亲手把我五个孩子埋进一个坑。",
      note: "黑死病文献中最锋利的一句。Agnolo 是 Siena 真实历史人物 — 鞋匠工会账房 + 业余编年史家。"
    }
  ],

  // ─── 关闭叙事 + 家庭对话 ──
  familyQuestion: {
    closingNarrative: "这是 1347 年的故事 — 但它留下了 3 条线还在今天活着：\n1. plague 改变了整个欧洲社会结构 — 文艺复兴、宗教改革、近代医学，全都从这一波灾难的废墟里长出来\n2. 1349 年 Strasbourg 是反犹屠杀'灾难找替罪羊'机制的早期完整版本——这个机制在 1881 沙俄、1903 Kishinev、1938 Kristallnacht、1942 Wannsee 反复重演——今天还在活，只是替罪羊换人\n3. Agnolo 那句'如果我不写，没人会知道我们活过' — 这是文艺复兴人文主义的起点，也是任何时代'记录'这件事的终极意义",
    question: "你跟 {{userParentWord|爸妈}} 聊：今天我们看到任何一场重大灾难（疫情、经济崩溃、战争）后社会找替罪羊的现象——是不是 Strasbourg 1349 那个机制？让 {{userParentWord|爸妈}} 给你他们的看法。",
    callToAction: "明天告诉我 {{userParentWord|爸妈}} 怎么说 — 这个机制 700 年没变，但它每次出现都靠普通人去识别、拒绝。一家人聊一次值。"
  }
};

// ─── Topic: Renaissance 1500 ──────────────────────────────────────────
// 5-6 ship: Story-First v2 lens 系统 (3 lens: lorenzo-medici + savonarola + lucia-widow)
// 内容主源: lib/history-storyboards/renaissance-1500.js (Sarah audit + 4-agent reviewed)
// 跨 lens micro-detail: 镶金小镜子 (Lorenzo 引进 / Savonarola 火堆 / Lucia 嫁妆)
export var RENAISSANCE_1500 = {
  id: "renaissance-1500",
  title: { en: "The Renaissance", cn: "文艺复兴" },
  oneLineHook: { cn: "1469-1498 Florence 30 年:Lorenzo 用银行钱让城市变成 Renaissance 中心,Savonarola 把它烧了一半,Lucia 这种家庭看不见自己名字。" },
  curriculumUnit: "7th-grade/early-modern-europe",
  hssStandard: "HSS-7.8",
  bridgeStandard: "HSS-7.9",  // 桥接到 Reformation
  textbookRef: {
    publisher: "Houghton Mifflin · 《Medieval & Early Modern Times》",
    grade: "7",
    chapter: "Ch. 11 The Renaissance and Reformation",
    section: "Lesson 1 The Italian Renaissance",
    page: "308",
    hint: "翻到课本 p.308 一起读 — AI 用 3 个视角讲(Lorenzo de' Medici 银行家 patron / Savonarola 反扑修士 / Lucia 28 岁寡妇),让你站进 1497 年那个早晨而不是只看时间线。"
  },
  year: 1500,
  yearRange: [1469, 1498],
  region: "italy-mediterranean",
  difficulty: 4,
  throughLine: "tech-disruption",  // 印刷术 + 透视画法 + 银行业
  estimatedMinutes: 35,

  // ─── Geography (5-5: useAtlasLink, atlas 当 single source) ──
  geography: {
    worldOrient: {
      worldMap: "world-base",
      highlightRegion: "italy-central",
      orientNote: {
        cn: "意大利中部 Florence — 同时代欧洲最富的银行业 + 最密集的艺术家工坊",
        en: "Florence in central Italy — Renaissance Europe's richest banking hub + densest workshop network"
      }
    },
    useAtlasLink: true,
    atlasViewId: "renaissance",
    primaryMap: null,
    flipMap: null,
    primaryMapPin: { lon: 11.2558, lat: 43.7696, label: "Florence 1469-1498" },

    scaleAnchors: [
      { cn: "Florence 1500 年人口 ~7 万 — 当时欧洲第 5 大城,跟同代北京 ~50 万 / 苏州 ~30 万差距大",  en: "Florence c. 1500 had about 70,000 people — Europe's 5th largest city, but small compared to contemporary Beijing (~500K) or Suzhou (~300K)" },
      { cn: "Medici 银行业 1469 年覆盖 5 个分行(Rome/Venice/Geneva/Bruges/London),约占西欧跨国汇款 30%",                  en: "The Medici banking network in 1469 ran five branches (Rome/Venice/Geneva/Bruges/London), about 30% of long-distance payments in western Europe" },
      { cn: "1497 Bonfire of the Vanities 木堆约 30 米高 = 10 层楼,占据整个 Piazza della Signoria",         en: "1497 Bonfire of the Vanities tower stood about 30 meters tall (~10 stories), filling the whole Piazza della Signoria" },
    ],

    whyMatters: {
      cn: "Florence 是 Renaissance 的物理中心——不是因为它最大,是因为它**银行业 + 城邦自治 + 艺术家工坊**三件事密度最高。意大利政治碎片化(数十个城邦互相竞争 + 没统一帝国)让独立艺术家 / 独立教士 / 独立学者**有制度位置存在**,这是同时代明朝大一统帝国不具备的结构条件。Joseph Needham 问过为什么 1400-1600 中国技术领先但科学革命没在中国发生——这一题至今没共识答案,但「碎片化竞争 vs 大一统」的结构差异是其中一个解释维度。",
      en: "Florence was the physical center of the Renaissance — not because it was the largest city, but because it had the highest density of three things: banking, city-state autonomy, and artists' workshops. Italian political fragmentation (dozens of city-states competing, no unified empire) gave independent artists, friars, and scholars institutional room to exist — a structural condition contemporary Ming China did not share. Joseph Needham asked why China led in technology from 1400 to 1600 yet no scientific revolution arose there. The question still has no settled answer, but the 'fragmented competition vs unified empire' structural difference is one dimension of explanation."
    },

    chinaCompare: {
      otherMap: null,
      readNote: {
        cn: "1469-1498 同期中国是明朝成化(1465-1487)和弘治(1488-1505)两朝。这是明朝相对稳定的时期——王阳明 1472 年生(跟 Michelangelo 1475 几乎同代)。中国有海瑞、有方孝孺、有 1402 年靖难之变后被诛十族的儒生,伦理冲突跟欧洲一样深。但中国「皇权统摄宗教」——和尚、道士、儒生都在皇帝管下,没有 Rome 那种独立机构当后盾。所以中国出不了 Savonarola 这种角色:一个独立教士实际接管一座大城。这不是道德高低,是制度结构差异。",
        en: "Contemporary China during 1469-1498 was in the Chenghua (1465-1487) and Hongzhi (1488-1505) reigns — a relatively stable period of the Ming. Wang Yangming was born in 1472, almost the same generation as Michelangelo (b. 1475). China had Hai Rui, Fang Xiaoru, and Confucian scholars whose ten-generation kin were executed after the Jingnan coup of 1402; ethical conflict ran as deep as in Europe. But China's imperial power absorbed religion — monks, Daoists, and Confucians all sat under the emperor, with no Rome-equivalent institution behind them. That is why no Savonarola-figure could appear in Ming China: an independent cleric who actually took over a major city. The difference is not moral; it is structural."
      }
    }
  },

  // ─── XP rewards (难度 4) ──
  xpRewards: {
    base: 120,             // difficulty 4 = 120 XP
    perVocabPass: 5,
    perConceptPass: 10,
    perApplicationPass: 15,
    optionalChecks: { "teach-back": 30, "counterfactual": 40 },
  },

  // ─── 内容主源走 storyboard ──
  // pages/history.js 里 isStoryboardTopic("renaissance-1500") = true,
  // 走 lib/history-storyboards/renaissance-1500.js, 每个 lens 12 节 prewritten
  conversationTurns: [],

  // ─── mustMemorize (从 narrative §11 cheat sheet 派生) ──
  mustMemorize: {
    vocab: [
      { word: "humanism",  ipa: "/ˈhjuːmənɪzəm/", pos: "n.", cn: "人本主义 / 人文主义",
        example: "Renaissance humanism placed humans at the center of inquiry.",
        exampleCn: "Renaissance 人本主义把人放在探究的中心。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.8", emphasis:"high"}, {code:"AP-EURO-1.2"}] },
      { word: "patron",    ipa: "/ˈpeɪtrən/", pos: "n.", cn: "赞助者(出钱让艺术家 / 学者工作的人)",
        example: "Lorenzo de' Medici was the most famous Renaissance patron.",
        exampleCn: "Lorenzo de' Medici 是 Renaissance 最有名的赞助者。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.8"}] },
      { word: "fresco",    ipa: "/ˈfreskoʊ/", pos: "n.", cn: "湿壁画(颜料趁石灰未干画上去)",
        example: "Raphael painted The School of Athens as a fresco in the Vatican.",
        exampleCn: "Raphael 在梵蒂冈画的《雅典学派》是一幅湿壁画。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.8"}, {code:"AP-Art-History"}] },
      { word: "vernacular", ipa: "/vərˈnækjələr/", pos: "n./adj.", cn: "方言 / 当地日常语言(对应拉丁文 — 学者语言)",
        example: "Dante wrote The Divine Comedy in Tuscan vernacular, not Latin.",
        exampleCn: "Dante 用 Tuscan 方言写《神曲》,不用拉丁文。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.8"}] },
      { word: "excommunicate", ipa: "/ˌekskəˈmjuːnɪkeɪt/", pos: "v.", cn: "把…开除教籍(被绝罚后不能讲道、不能领圣礼)",
        example: "Pope Alexander VI excommunicated Savonarola in June 1497.",
        exampleCn: "教皇 Alexander VI 1497 年 6 月把 Savonarola 开除教籍(绝罚)。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.9"}, {code:"AP-EURO-1.4"}] },
    ],
    concepts: [
      {
        id: "humanism",
        en: "humanism",
        ipa: "/ˈhjuːmənɪzəm/",
        cn: "人本主义",
        definition: {
          en: "An intellectual movement of the Renaissance centered on human capability, classical revival (Greek + Latin texts), and study of the world through observation and reason rather than only through theology.",
          cn: "Renaissance 的知识运动 — 把人的能力放中心,复兴希腊罗马古典文献,通过观察和理性研究世界,而不只是通过神学。"
        }
      },
      {
        id: "patronage-system",
        en: "Renaissance patronage system",
        ipa: "/ˈpeɪtrənɪdʒ/",
        cn: "Renaissance 赞助制",
        definition: {
          en: "The economic structure of Renaissance art: wealthy individuals (Medici, popes, princes) paid artists to produce specific works. Artists were not 'free creators' — they made what patrons paid for.",
          cn: "Renaissance 艺术的经济结构 — 富人(Medici、教皇、君主)付钱让艺术家做特定作品。艺术家不是「自由创作者」,做的是赞助人买单的内容。"
        }
      },
      {
        id: "needham-question",
        en: "Joseph Needham Question",
        ipa: "/ˈniːdəm/",
        cn: "李约瑟问题",
        definition: {
          en: "Why did China lead in technology from 1400 to 1600 yet no scientific revolution arose there? Joseph Needham himself warned this is an open question — the 'fragmented competition vs unified empire' structural difference between Renaissance Europe and Ming China is one dimension of explanation, not a settled answer.",
          cn: "为什么 1400-1600 年中国技术领先但科学革命没在中国发生?Joseph Needham 自己警告这是开放问题 — Renaissance 欧洲(碎片化城邦竞争)vs 明朝中国(大一统帝国)的结构差异是其中一个解释维度,不是定论。"
        }
      },
    ]
  },

  // ─── Mastery Checks ──
  masteryChecks: {
    required: [
      {
        type: "spelling",
        sampleSize: 3,
        items: [
          { prompt: "Renaissance 把人放在中心 + 复兴古典文献的知识运动叫 ___",  hint: "h_______m",        answer: "humanism" },
          { prompt: "Lorenzo de' Medici 这种出钱让艺术家工作的人叫 ___",            hint: "p_____",          answer: "patron" },
          { prompt: "Pope Alexander VI 1497 把 Savonarola 开除教籍 — 这个动作叫 ___", hint: "e___________e",   answer: "excommunicate" },
        ]
      },
      {
        type: "definition",
        items: [
          { conceptId: "humanism",          prompt: "什么是 humanism(人本主义)?用一句话说出 Renaissance 这个概念跟中世纪有什么不同。" },
          { conceptId: "patronage-system",  prompt: "什么是 Renaissance 赞助制?给我用 Lorenzo de' Medici 跟 Botticelli 的关系举一个例子。" },
        ]
      },
      {
        type: "application",
        items: [
          { prompt: "Lorenzo 1478 年下令处决约 80 个 Pazzi 阴谋者把尸体挂窗外示众 — 同一双手赞助 Botticelli + Michelangelo + 把镶金小镜子引进中产家庭。'美 + 暴政'能不能并存?给一个具体理由。" },
          { prompt: "Savonarola 1497 年烧'Vanities'时,有人说他是疯子,有人说他抓到了 Renaissance 真实的伦理矛盾(奢华 + 不平等 + 教会腐败)。你站哪边?给一个具体理由。" },
        ]
      }
    ]
  },

  // ─── primarySources ──
  primarySources: [
    {
      title: "Lorenzo de' Medici 临终评 3 个儿子(Florentine chroniclers 记录)",
      year: 1492,
      author: "Lorenzo de' Medici(转引)",
      excerpt: "I have three sons: one is a fool, one is intelligent, and one is good.",
      excerptCn: "我有三个儿子 — 一个是傻子,一个是聪明人,一个是好人。",
      note: "Florentine 编年史里记下的 Lorenzo 临终原话。21 年后那个'聪明人' Giovanni 成为教皇 Leo X,把 Medici 家从流亡里带回 Florence。这一句浓缩了 Lorenzo 对 Medici 家族未来 30 年的清醒判断。"
    },
    {
      title: "Michelangelo 给朋友 Condivi 的信 — 关于 Vittoria Colonna(1547)",
      year: 1547,
      author: "Michelangelo Buonarroti",
      excerpt: "a gran dolore mi rimase, di non aver baciata la fronte",
      excerptCn: "它给我留下巨大的悲痛 — 因为我没能吻她的额头。",
      note: "Michelangelo 72 岁,Vittoria Colonna 57 岁去世。他活了 88 岁 — 这一句话是他一辈子最少见的'软'语言。Renaissance 唯一一段男性大师 + 女性 intellectual 思想平等友谊的史料。"
    }
  ],

  // ─── 关闭叙事 + 家庭对话 ──
  familyQuestion: {
    closingNarrative: "这是 1469-1498 年 Florence 的故事 — 但它留下了 3 条线还在今天活着:\n1. Renaissance 的'美 + 暴政'共存模式 — 任何文化爆发期(科技 / 艺术 / 城市建设)都伴随对底层的压制 + 对反对者的暴力,这个 pattern 700 年没变\n2. Savonarola 抓到的伦理矛盾(奢华 + 不平等 + 制度腐败)是任何盛世都会有的内部张力 — 他的'解药比病猛'模式也是任何'纯粹主义'运动的结构教训\n3. Lucia 这种家庭主妇被'伟大时代'路过的经验 — 历史书里 99% 看不见,但 99% 真实活过 — 这是任何时代'谁的故事被记下'的根本问题",
    question: "你跟 {{userParentWord|爸妈}} 聊:今天我们看见任何'文化爆发期'(硅谷崛起 / 互联网兴起 / AI 时代)— 是不是也有 Lorenzo 式赞助 + Savonarola 式反扑 + Lucia 式被路过?让 {{userParentWord|爸妈}} 给你他们的看法。",
    callToAction: "明天告诉我 {{userParentWord|爸妈}} 怎么说 — 'Lorenzo + Savonarola + Lucia'三角能解释多少今天的事。一家人聊一次值。"
  }
};

// ─── Topic: Reformation 1517 ──────────────────────────────────────────
// 5-7 ship: Story-First v2 lens 系统 (3 lens: martin-luther + erasmus + sister-agnes)
// 内容主源: lib/history-storyboards/reformation-1517.js (Sarah audit + 4-agent reviewed)
// 跨 lens micro-detail: Luther 95 Theses 1521 印刷的德文版小册子 (写者/警告者/被路过的修女)
// AP teacher 高度认可镜子 micro-detail 教学价值 — 三视角对应 AP DBQ rubric producer/interpreter/affected party
export var REFORMATION_1517 = {
  id: "reformation-1517",
  title: { en: "The Protestant Reformation", cn: "宗教改革" },
  oneLineHook: { cn: "1517-1546 30 年:Luther 钉 95 条要的不是分裂——是教会内部 reform。但印刷术 + 民众情绪让一锤变成欧洲分裂。Erasmus 不站他那边,留在天主教内被两边骂。Sister Agnes 这种 1539 修道院解散的修女活下来——但世界对她没准备。" },
  curriculumUnit: "7th-grade/early-modern-europe",
  hssStandard: "HSS-7.9",
  bridgeStandard: "HSS-7.11",  // 桥接到 Age of Exploration
  textbookRef: {
    publisher: "Houghton Mifflin · 《Medieval & Early Modern Times》",
    grade: "7",
    chapter: "Ch. 11 The Renaissance and Reformation",
    section: "Lesson 3 The Protestant Reformation",
    page: "318",
    hint: "翻到课本 p.318 一起读 — AI 用 3 个视角讲(Luther 痛苦先知 / Erasmus 没人要的桥 / Sister Agnes 1539 修女),让你站进 1521 年那个隔夜祷告而不是只看 Here I stand 那一句。"
  },
  year: 1517,
  yearRange: [1517, 1546],
  region: "europe-northern",
  difficulty: 4,
  throughLine: "religion-vs-state",
  estimatedMinutes: 35,

  // ─── Geography (5-5: useAtlasLink, atlas 当 single source) ──
  geography: {
    worldOrient: {
      worldMap: "world-base",
      highlightRegion: "holy-roman-empire",
      orientNote: {
        cn: "Wittenberg + Worms + Geneva 三角 — 北方 Reformation 的物理中心。同一时代意大利还在做 Renaissance,北方在做 Reformation。",
        en: "Wittenberg + Worms + Geneva triangle — the physical center of the northern Reformation. Italy is still doing Renaissance; the North is doing Reformation, in the same decades."
      }
    },
    useAtlasLink: true,
    atlasViewId: "reformation",
    primaryMap: null,
    flipMap: null,
    primaryMapPin: { lon: 12.65, lat: 51.87, label: "Wittenberg 1517" },

    scaleAnchors: [
      { cn: "Luther 95 条 6 周内传遍德国所有大学城 — Renaissance 印刷品 distribution 网的直接 payoff",
        en: "Luther's 95 Theses spread across every German university town in 6 weeks — direct payoff of Renaissance pamphlet distribution network" },
      { cn: "1517-1648 这 131 年欧洲宗教战争累计死亡 800 万-1100 万人(主要 30 Years' War 1618-48)",
        en: "1517-1648, 131 years of European religious war, total death toll roughly 8-11 million (mostly the Thirty Years' War 1618-48)" },
      { cn: "1450-1750 女巫审判高峰 4-6 万女性被处决 — 75-85% 是寡妇/老年妇/边缘妇",
        en: "1450-1750 witch-hunt peak: 40,000-60,000 women executed — 75-85% widows, elderly, marginalized women" },
    ],

    whyMatters: {
      cn: "Reformation 不是凭空冒出来——是 Renaissance 100 年的印刷术 + 人文主义 + 方言文学 + 商业 distribution 4 股力在 1517 年汇集到一个人(Luther)身上。Luther 是「最后那个点燃」的人,但「柴火早已堆好」。同时 Reformation 也是欧洲第一次「个人良心 vs 集体权威」的政治哲学命题——「Here I stand」从 1521 直接传到现代「conscientious objector」(良心反对者)传统(Gandhi / MLK / Snowden 都是 Luther 这一刻的精神后代)。但 Reformation 也撕裂教会、烧 4-6 万「女巫」、屠杀 10 万农民、释放反犹势力——同一个运动同时是解放和暴力。",
      en: "The Reformation did not erupt out of nowhere — it was the convergence of 100 years of Renaissance printing + humanism + vernacular literature + commercial distribution onto one man (Luther) in 1517. Luther was the last to light the spark, but the wood was already stacked. The Reformation was also the first time Europe formalized the political-philosophical proposition «individual conscience vs collective authority» — Luther's «Here I stand» travels straight from 1521 to the modern «conscientious objector» tradition (Gandhi, MLK, Snowden are all spiritual descendants of that moment). But the Reformation also tore the church apart, burned 40,000-60,000 «witches», slaughtered 100,000 peasants, and unleashed antisemitic forces — the same movement is liberation and violence at the same time."
    },

    chinaCompare: {
      otherMap: null,
      readNote: {
        cn: "1517 同时代中国是明朝正德 12 年。王阳明 45 岁——他已 9 年前(1508)在贵州龙场悟道提出「心即理」,这一年正在江西平定地方乱事。1518-1521 完成「知行合一」哲学体系。Wang Yangming 跟 Luther 同代:都说「个人良心是真理来源」,但 Luther 把它变成对抗教会权威的政治行动,Wang 把它变成内在修养的哲学体系。中国「皇权统摄宗教」+ 没有 Rome 那种独立教会权威——没有可对抗的对象。这是同一思想种子在两种文化里走出的不同路径。",
        en: "Contemporary China during 1517 was in Year 12 of the Zhengde reign of the Ming. Wang Yangming was 45 — he had had his enlightenment 9 years earlier (1508) at Longchang in Guizhou, proposing «the mind itself is principle»; that year he was suppressing regional unrest in Jiangxi. By 1518-1521 he had completed the philosophy of «unity of knowing and acting». Wang Yangming and Luther are exact contemporaries: both say «individual conscience is the source of truth», but Luther turns it into political action against church authority, while Wang turns it into a system of inner cultivation. China's «imperial power absorbing religion» + no Rome-equivalent independent church — no opposing target. The same intellectual seed produced two different paths in two cultures."
      }
    }
  },

  // ─── XP rewards (难度 4) ──
  xpRewards: {
    base: 120,
    perVocabPass: 5,
    perConceptPass: 10,
    perApplicationPass: 15,
    optionalChecks: { "teach-back": 30, "counterfactual": 40 },
  },

  // ─── 内容主源走 storyboard ──
  conversationTurns: [],

  // ─── mustMemorize ──
  mustMemorize: {
    vocab: [
      { word: "indulgence",  ipa: "/ɪnˈdʌldʒəns/", pos: "n.", cn: "赎罪券(教会承诺减炼狱时间换钱)",
        example: "Tetzel sold indulgences with the slogan «when the coin rings, the soul springs».",
        exampleCn: "Tetzel 卖赎罪券时喊「钱币掉进盒子,灵魂从炼狱跳出」。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.9", emphasis:"high"}, {code:"AP-EURO-2.2"}] },
      { word: "excommunicate", ipa: "/ˌekskəˈmjuːnɪkeɪt/", pos: "v.", cn: "把…开除教籍(被绝罚后不能讲道、不能领圣礼)",
        example: "Pope Leo X excommunicated Luther in 1521.",
        exampleCn: "教皇 Leo X 1521 年把 Luther 开除教籍(绝罚)。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.9"}, {code:"AP-EURO-2.2"}] },
      { word: "vernacular",  ipa: "/vərˈnækjələr/", pos: "n./adj.", cn: "方言 / 当地日常语言(对应拉丁文 — 学者语言)",
        example: "Luther translated the Bible into German vernacular.",
        exampleCn: "Luther 把圣经翻成德文方言。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.9"}] },
      { word: "heretic",     ipa: "/ˈherətɪk/",      pos: "n.", cn: "异端(被教会判定违背正统教义的人)",
        example: "Servetus was burned in 1553 in Geneva as a heretic against the Trinity.",
        exampleCn: "Servetus 1553 年在 Geneva 因否认三位一体被烧死。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.9"}, {code:"AP-EURO-2.2"}] },
    ],
    concepts: [
      {
        id: "sola-fide",
        en: "Sola Fide",
        ipa: "/ˈsoʊlə ˈfiːdeɪ/",
        cn: "唯靠信仰(Reformation 核心神学)",
        definition: {
          en: "Latin for «by faith alone». Luther's central doctrine: salvation comes from individual faith in God, not from church-mediated good works (like buying indulgences). The text basis came from Erasmus' 1516 Greek New Testament re-checking of Matthew 4:17.",
          cn: "拉丁文「唯靠信仰」。Luther 的核心神学:得救来自个人对上帝的信仰,不是通过教会调解的善功(如买赎罪券)。文本依据来自 Erasmus 1516 Greek 新约对 Matthew 4:17 的校勘。"
        }
      },
      {
        id: "individual-conscience",
        en: "individual conscience vs collective authority",
        ipa: "",
        cn: "个人良心 vs 集体权威",
        definition: {
          en: "The political-philosophical proposition formalized at Diet of Worms 1521: when an individual's conscience conflicts with collective authority (church / state / society), the individual has the standing to refuse. Luther's «Here I stand» becomes the founding moment of the modern «conscientious objector» tradition — Gandhi, MLK, Snowden are all its descendants.",
          cn: "1521 Diet of Worms 沃姆斯帝国会议形式化的政治-哲学命题:当个人良心跟集体权威(教会/国家/社会)冲突时,个人有权拒绝。Luther 的「Here I stand」成为现代「良心反对者」(conscientious objector)传统的起点 — Gandhi、Martin Luther King Jr、Edward Snowden 都是它的精神后代。"
        }
      },
      {
        id: "reformation-paradox",
        en: "Reformation paradox",
        ipa: "",
        cn: "Reformation 悖论(解放与暴力同源)",
        definition: {
          en: "The same Reformation that gave us individual conscience and vernacular Bibles also burned 40,000-60,000 women as witches, slaughtered 100,000 peasants in 1525, and unleashed Luther's antisemitic 1543 pamphlet that the Nazis cited 4 centuries later. Liberation and violence as two faces of the same coin — students must hold both at once.",
          cn: "同一场 Reformation 给我们个人良心 + 方言圣经,也烧了 4-6 万女性为「女巫」、屠杀了 1525 年 10 万农民、释放了 Luther 1543 反犹小册子(纳粹 4 世纪后引用)。解放与暴力是同一枚硬币的两面 — 学生要同时握住这两端。"
        }
      },
    ]
  },

  // ─── Mastery Checks ──
  masteryChecks: {
    required: [
      {
        type: "spelling",
        sampleSize: 3,
        items: [
          { prompt: "Tetzel 1517 年卖的「付钱减炼狱时间」票叫 ___",  hint: "i_________e",      answer: "indulgence" },
          { prompt: "Pope Leo X 1521 把 Luther 开除教籍 — 这个动作叫 ___", hint: "e___________e", answer: "excommunicate" },
          { prompt: "Luther 把圣经翻成普通德语 — 这种方言/当地日常语言叫 ___",  hint: "v_________r",   answer: "vernacular" },
        ]
      },
      {
        type: "definition",
        items: [
          { conceptId: "sola-fide",            prompt: "什么是 Sola Fide(唯靠信仰)?用一句话说出 Luther 这个核心神学跟卖赎罪券有什么矛盾。" },
          { conceptId: "individual-conscience", prompt: "什么是「个人良心 vs 集体权威」?给我用 Luther 1521 Diet of Worms「Here I stand」举一个例子。" },
        ]
      },
      {
        type: "application",
        items: [
          { prompt: "Luther 1521 在 Diet of Worms 说「Here I stand」反对教皇 + 皇帝 — 但他 1525 年又写《反农民帮派》喊贵族屠杀 10 万起义农民。同一个 Luther 反对「上面」的人但不反对「等级」本身 — 你站哪边?给一个具体理由。" },
          { prompt: "Reformation 给了我们个人良心 + 方言圣经 + 现代权利传统 — 同时也烧了 4-6 万女性为「女巫」+ 释放了 Luther 1543 反犹言论(纳粹 4 世纪后引用)。这是「进步」还是「暴力」?还是「同一枚硬币两面必须同时握」?给一个具体理由。" },
        ]
      }
    ]
  },

  // ─── primarySources ──
  primarySources: [
    {
      title: "Luther's 95 Theses (Disputatio pro declaratione virtutis indulgentiarum, 1517)",
      year: 1517,
      author: "Martin Luther",
      excerpt: "When our Lord and Master Jesus Christ said «Repent» (Matt. 4:17), he willed the entire life of believers to be one of repentance.",
      excerptCn: "我们的主和老师耶稣基督说「悔改」时(马太福音 4:17),他要的是信徒整个一生都是悔改 — 不是一次性的仪式。",
      note: "95 条第 1 条。「Repent」对应希腊文 metanoeite(转变内心),Erasmus 1516 校勘 Vulgate 时改正过 — 这给 Luther 的 Sola Fide 提供了文本依据。Reformation 的隐藏起点。"
    },
    {
      title: "Justus Jonas letter on Diet of Worms night (1521/4/17-18)",
      year: 1521,
      author: "Justus Jonas (转引)",
      excerpt: "He knelt at the table all night — the oil lamp never went out — when dawn came through the window he was still there.",
      excerptCn: "他整夜跪在桌前 — 油灯没熄过 — 窗外天亮他还在那儿。",
      note: "Luther 朋友 Justus Jonas 在信里记录的 1521/4/17 晚 Worms 隔夜祷告。Charles V 给 Luther 24 小时考虑,4/18 傍晚 Luther 才说「Here I stand」。这一夜是 Reformation 的最 agonistic moment — Luther 知道说不撤是死刑判决书,说撤是 4 年自我否认,他两边都不能逃。"
    }
  ],

  // ─── 关闭叙事 + 家庭对话 ──
  familyQuestion: {
    closingNarrative: "这是 1517-1546 年 Reformation 的故事 — 但它留下了 4 条线还在今天活着:\n1. 「个人良心 vs 集体权威」从 Luther 1521 Diet of Worms 直接传到现代 conscientious objector 传统(Gandhi / MLK / Snowden)— Reformation 是现代权利哲学的起点之一\n2. 印刷术 + 方言文学的组合让「思想颠覆社会」成为重复 pattern — 1517 Luther 95 条 / 1776 Common Sense / 1848 共产党宣言 / 2010 Twitter 阿拉伯之春,都是同一个机制不同时代版本\n3. Reformation 的 dark side — 烧 4-6 万「女巫」+ 屠杀 10 万农民 + 反犹 — 提醒我们「解放运动」永远伴随「制造新替罪羊」,这个 pattern 700 年没变\n4. Erasmus 这种「桥」角色在革命时代必然没人要 — 是任何「温和派」的命运。今天的 Erasmus 是谁?",
    question: "你跟 {{userParentWord|爸妈}} 聊:今天有没有像 Reformation 那种「思想 + 技术 + 民众情绪」三股力汇集到一个人身上把世界炸开的运动?(AI 时代?气候运动?网红创业?)— 让 {{userParentWord|爸妈}} 给你他们的看法。",
    callToAction: "明天告诉我 {{userParentWord|爸妈}} 怎么说 — 「Reformation 模式」可能在我们这代人眼前再演一次。一家人聊一次值。"
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// AGE OF EXPLORATION 1492-1600 (HSS-7.11 + AP World 1.4-1.5 + AP US pre-1607 + AP Euro 1.4)
// 5-7+: ship-ready (Sarah Chen audit pass + 4 P0 + 6 P1 注入 + 3 lens-author + 4-agent review)
// 3 lens: columbus (perpetrator-actor) / las-casas (lonely-mediator) / anacaona-jr (receiving-end)
// ═══════════════════════════════════════════════════════════════════════════
export var AGE_OF_EXPLORATION_1492 = {
  id: "age-of-exploration-1492",
  title: { en: "Age of Exploration", cn: "大航海时代" },
  oneLineHook: { cn: "1492 三件事同年:1.2 Reconquista 完成 + 3.31 Alhambra Decree 驱逐 10 万犹太人 + 8.3 Columbus 出航——同一笔 Isabella 国库钱——「基督教纯洁化」+「大国扩张」是一个事件链不是三件独立事——接下来 100 年 90% Hispaniola Taíno 死光 + Atlantic slave trade 1502 起点 + Columbian Exchange 改写全球菜单 + Doctrine of Discovery 1493→2023 530 年法理。" },
  curriculumUnit: "7th-grade/early-modern-world",
  hssStandard: "HSS-7.11",
  bridgeStandard: "HSS-8.1",  // 桥接到 American colonization / Manifest Destiny
  textbookRef: {
    publisher: "Houghton Mifflin · 《Medieval & Early Modern Times》",
    grade: "7",
    chapter: "Ch. 12 The Age of Exploration",
    section: "Lesson 1 Europeans Set Sail",
    page: "338",
    hint: "翻到课本 p.338 一起读 — AI 用 3 个视角讲(Columbus 殖民系统奠基者 / las Casas 13 年自己是奴隶主然后剩下 50 年 advocacy / Anacaona Jr. 12 岁 Taíno 女孩 5 年家族灭族),让你站进 1492 三连击 + 1495 Hispaniola 第一线,而不是只看「哥伦布发现新大陆」那一句。"
  },
  year: 1492,
  yearRange: [1492, 1600],
  region: "atlantic-basin",
  difficulty: 4,
  throughLine: "encounter-vs-conquest",
  estimatedMinutes: 35,

  // ─── Geography (5-5: useAtlasLink, atlas 当 single source) ──
  geography: {
    worldOrient: {
      worldMap: "world-base",
      highlightRegion: "atlantic-basin",
      orientNote: {
        cn: "Palos 港 + Hispaniola + Tenochtitlán + Cuzco + Lisbon + Goa + Manila 七点 — 大西洋 + 太平洋 trade network 第一次连成全球闭环。同一时代北方 Reformation 撕裂教会、意大利还在做 Renaissance、Ming 1433 后停下 — 三个区域的相反选择定义了接下来 500 年。",
        en: "Palos + Hispaniola + Tenochtitlán + Cuzco + Lisbon + Goa + Manila — seven nodes that for the first time link Atlantic + Pacific into a global trade network. In the same decades Northern Europe is doing Reformation, Italy is doing Renaissance, Ming China stopped after 1433 — three regions' opposite choices define the next 500 years."
      }
    },
    useAtlasLink: true,
    atlasViewId: "age-of-exploration",
    primaryMap: null,
    flipMap: null,
    primaryMapPin: { lon: -6.89, lat: 37.23, label: "Palos 港 1492.8.3" },

    scaleAnchors: [
      { cn: "Hispaniola Taíno 1492 估算 30 万-100 万 → 1542 剩 200 个 — 50 年 99.9%+ 灭族 (Bartolomé 同代记 300 万被现代学界认为夸大;Cook 800 万被批太高;Rosenblat 10 万被批太低;中道 30-100 万)",
        en: "Hispaniola Taíno 1492 est. 300,000-1 million → 200 left by 1542 — 99.9%+ collapse in 50 years (Bartolomé's contemporary 3M is now considered exaggerated; Cook's 8M too high; Rosenblat's 100K too low; middle range 300K-1M)" },
      { cn: "Atlantic slave trade 1502-1888 386 年 — 1,250 万非洲人被强制运到美洲 — 200 万死在中段 (Middle Passage)",
        en: "Atlantic slave trade 1502-1888, 386 years — 12.5 million Africans forcibly transported to the Americas — 2 million died in the Middle Passage" },
      { cn: "Doctrine of Discovery 1493 Inter Caetera → 1823 Johnson v. M'Intosh (美国最高院引用)→ 2005 Sherrill v. Oneida (RBG 引用)→ 2023.3.30 梵蒂冈正式废除 — 530 年法律框架",
        en: "Doctrine of Discovery 1493 Inter Caetera → 1823 Johnson v. M'Intosh (US Supreme Court cites) → 2005 Sherrill v. Oneida (Justice Ginsburg cites) → 2023.3.30 Vatican formally repudiates — 530 years of legal framework" },
    ],

    whyMatters: {
      cn: "1492 不是一个起点 — 是一个事件链:同一年 1.2 Reconquista 完成 + 3.31 Alhambra Decree 驱犹 + 8.3 Columbus 出航 — 同一笔 Isabella 国库钱 + 同一种「基督教纯洁化」国家逻辑。Palos 港 8 月初挤满 Sephardic Jews 离港的船 + Columbus 三艘船同港同月 — 完全相反的命运但共享同一个国家选择。接下来 500 年的三个 pattern 都从这一刻起:(1) 殖民语言模板 — Columbus 1493 信里发明的「可皈依 + 可工作 + 可奴役」3 件套今天还在「潜在市场——可教育——可服务」语言里。(2) 全球菜单重写 — 西红柿/土豆/玉米/咖啡/糖/辣椒在 1492 年前是地区性食物,1600 年后变成全球标配。(3) 90% great dying + Atlantic slave trade 100 年起点 + Doctrine of Discovery 530 年法律框架 — 这是当代美洲社会三个最深的伤口。同时代 Ming 1433 停下七下西洋(郑和死归途)— 同一片海洋两种相反选择 — 这是 Joseph Needham Question 的核心。",
      en: "1492 is not a starting point — it is a causal chain: same year, 1.2 Reconquista completed + 3.31 Alhambra Decree expelled 100,000 Jews + 8.3 Columbus sailed — same Isabella royal treasury + same «Christian purification» state logic. Palos port in early August was packed with Sephardic Jewish ships leaving + Columbus's three ships same port same month — opposite fates sharing one state choice. Three 500-year patterns start here: (1) the colonial language template Columbus invented in his 1493 letter («convertible + workable + enslavable» trio) still echoes in modern «potential market — educable — servable» language. (2) Global menu rewrite — tomato/potato/corn/coffee/sugar/chili were regional pre-1492, became global standard post-1600. (3) 90% great dying + Atlantic slave trade 100-year origin + Doctrine of Discovery 530-year legal framework — three of the deepest wounds in contemporary Americas. Meanwhile Ming China stopped Zheng He's voyages in 1433 — same ocean, opposite choices — the Joseph Needham Question's core."
    },

    chinaCompare: {
      otherMap: null,
      readNote: {
        cn: "1492 同时代中国是明朝弘治 5 年 — 弘治中兴期。1433 (郑和最后一次下西洋归途死) 之后 60 年,明朝主动放弃远洋。1492 Columbus 船 23 米 / 88 天 / 88 人 — vs 1405-1433 郑和船 137 米 (5x) / 27,800 人 (~318x) / 30 国。同一片海洋两种相反选择:Ming 把全球贸易看成「失血」(reverse 视角:外国人来交易让明朝得到银),欧洲把全球贸易看成「进攻」。Joseph Needham Question:为什么科学技术从 12 世纪中国领先到 18 世纪被欧洲反超 — 不是文明缺陷而是政治选择。一带一路 2013 年是 Ming 决定的反向重启 — 580 年后又一次。",
        en: "Contemporary China during 1492 was Year 5 of the Hongzhi reign of the Ming — the Hongzhi Renaissance. 60 years after Zheng He's last voyage (1433, dying on the return), Ming had actively abandoned ocean voyages. Columbus's ship: 23m / 88 days / 88 men. Zheng He: 137m (5x) / 27,800 men (318x) / 30 countries (1405-1433). Same ocean, opposite choices: Ming saw global trade as «hemorrhage» (reverse view: foreigners coming to trade brought silver to Ming), Europe saw global trade as «offensive». Joseph Needham Question: why did science/tech lead in China 12c-17c then get overtaken by Europe — not civilizational defect but political choice. China's 2013 Belt and Road is the reverse restart of the 1433 decision — 580 years later, the same question reopens."
      }
    }
  },

  // ─── XP rewards (难度 4) ──
  xpRewards: {
    base: 120,
    perVocabPass: 5,
    perConceptPass: 10,
    perApplicationPass: 15,
    optionalChecks: { "teach-back": 30, "counterfactual": 40 },
  },

  // ─── 内容主源走 storyboard ──
  conversationTurns: [],

  // ─── mustMemorize ──
  mustMemorize: {
    vocab: [
      { word: "conquistador", ipa: "/kɒnˈkɪstədɔːr/", pos: "n.", cn: "西班牙征服者(Cortés/Pizarro 等带 100-200 人灭一个帝国的军事冒险家)",
        example: "Cortés led 600 conquistadors and 1,000 Tlaxcalan allies against the Aztec empire of 5 million.",
        exampleCn: "Cortés 带 600 名 conquistadores + 1000 名 Tlaxcala 盟友对抗 500 万人的 Aztec 帝国。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.11", emphasis:"high"}, {code:"AP-WORLD-1.4"}] },
      { word: "encomienda",  ipa: "/ɛnˌkoʊmiˈɛndə/", pos: "n.", cn: "委托监护制(西班牙王室授予殖民者强迫印第安人劳动权的制度 — 名义上是「保护 + 教化」实际是奴役)",
        example: "Bartolomé de las Casas himself held an encomienda for 13 years before his 1514 conversion.",
        exampleCn: "Bartolomé de las Casas 自己拥有 encomienda 13 年才在 1514 年觉醒。", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.11"}, {code:"AP-WORLD-1.5"}] },
      { word: "caravel",     ipa: "/ˈkærəvɛl/",       pos: "n.", cn: "卡拉维尔帆船(15 世纪葡萄牙改良 — 三角帆 + 方帆混搭 — 既能逆风也能顺风 — 大洋航行的 enabling tech)",
        example: "Columbus' three ships in 1492 — Niña, Pinta, Santa María — were caravels and a carrack.",
        exampleCn: "Columbus 1492 年三艘船 — Niña / Pinta / Santa María — 是 caravel + 一艘 carrack。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.11"}, {code:"AP-WORLD-1.4"}] },
      { word: "circumnavigate", ipa: "/ˌsɜːrkəmˈnævɪɡeɪt/", pos: "v.", cn: "环绕航行(地球一圈 — Magellan-Elcano 1519-1522 完成 — 但 Magellan 自己 1521 死菲律宾 Mactan 岛,完成的是 Basque 水手 Elcano)",
        example: "Magellan-Elcano expedition (1519-1522) was the first to circumnavigate the Earth — though Magellan himself died in the Philippines.",
        exampleCn: "Magellan-Elcano 远征 (1519-1522) 是第一次环球航行 — 但 Magellan 自己死在菲律宾。", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.11"}, {code:"AP-WORLD-1.4"}] },
    ],
    concepts: [
      {
        id: "columbian-exchange",
        en: "Columbian Exchange",
        ipa: "/kəˈlʌmbiən ɪksˈtʃeɪndʒ/",
        cn: "哥伦布大交换",
        definition: {
          en: "The bidirectional transfer of plants, animals, diseases, and people between the Americas, Europe, Africa, and Asia after 1492. New World → Old World: tomato, potato, corn, chocolate, tobacco, chili, vanilla, turkey. Old World → New World: horse, cow, pig, wheat, sugar, coffee, smallpox, measles, influenza. The disease vector was catastrophically asymmetric — 90% indigenous American population collapse in the first century. Today's «global menu» is largely the post-1492 product.",
          cn: "1492 年后美洲 + 欧洲 + 非洲 + 亚洲之间植物 / 动物 / 疾病 / 人口的双向转移。新→旧大陆:西红柿、土豆、玉米、可可、烟草、辣椒、香草、火鸡。旧→新大陆:马、牛、猪、小麦、糖、咖啡、天花、麻疹、流感。疾病的方向极不对称 — 第一个 100 年内 90% 美洲原住民人口崩溃。今天「全球菜单」基本上是 1492 后的产物。"
        }
      },
      {
        id: "doctrine-of-discovery",
        en: "Doctrine of Discovery",
        ipa: "/ˈdɒktrɪn əv dɪˈskʌvəri/",
        cn: "「发现」教义(530 年法律框架)",
        definition: {
          en: "The legal-theological framework starting from Pope Alexander VI's 1493.5.4 «Inter Caetera» bull — Christian sovereigns can claim sovereignty over non-Christian lands they «discover». 1823 US Supreme Court (Johnson v. M'Intosh) cited it to justify confiscating tribal lands. 2005 Sherrill v. Oneida — Justice Ginsburg cited it again. 2023.3.30 — the Vatican formally repudiated it after 530 years of indigenous advocacy. The doctrine outlived 16 generations and is the longest-lived colonial legal framework still echoing in 21st-century US law.",
          cn: "从 1493.5.4 教皇 Alexander VI 的「Inter Caetera」敕令开始的法律-神学框架 — 基督教君主可以宣称主权于他们「发现」的非基督教土地。1823 美国最高法院 (Johnson v. M'Intosh) 引用它合法化夺取部落土地。2005 Sherrill v. Oneida — 大法官 Ginsburg 又引用一次。2023.3.30 — 梵蒂冈在 530 年原住民倡议后正式废除。这个 doctrine 活了 16 代人 — 是 21 世纪美国法律里仍在回响的最长命殖民法律框架。"
        }
      },
      {
        id: "great-dying",
        en: "the Great Dying",
        ipa: "",
        cn: "「大死亡」(1492-1600 美洲 90% 人口崩溃)",
        definition: {
          en: "The 1492-1600 collapse of indigenous American population by approximately 90% — from estimated 50-100 million pre-contact to 5-10 million by 1600. Primary cause: smallpox, measles, influenza (no immunity); secondary: forced labor, warfare, famine. Hispaniola Taíno 30万-100万 → 200 in 50 years is the most extreme local case. Recent climate-science research (2019 Koch et al.) suggests the Great Dying caused enough farmland abandonment to measurably cool Earth's climate (Little Ice Age trigger). The single largest demographic event in human history outside the World Wars.",
          cn: "1492-1600 年美洲原住民人口约 90% 崩溃 — 接触前估算 5,000 万-1 亿 → 1600 年只剩 500 万-1,000 万。主因:天花、麻疹、流感 (无免疫力);次因:强制劳动、战争、饥荒。Hispaniola Taíno 30万-100万 → 50 年内剩 200 个是最极端的局部案例。最近气候研究 (Koch et al. 2019) 显示 Great Dying 导致的耕地荒废足以测得地球气候降温 (小冰期触发因素之一)。世界大战之外人类历史最大单一人口事件。"
        }
      },
    ]
  },

  // ─── Mastery Checks ──
  masteryChecks: {
    required: [
      {
        type: "spelling",
        sampleSize: 3,
        items: [
          { prompt: "Cortés 带 600 名西班牙征服者灭 Aztec — 这种带百来人灭一个帝国的军事冒险家叫 ___",   hint: "c__________r",  answer: "conquistador" },
          { prompt: "西班牙王室授予殖民者强迫印第安人劳动权的制度叫 ___",                              hint: "e_________a",  answer: "encomienda" },
          { prompt: "Columbus 1492 年三艘船里两艘是这种 15 世纪葡萄牙改良的帆船 — 叫 ___",            hint: "c______l",     answer: "caravel" },
        ]
      },
      {
        type: "definition",
        items: [
          { conceptId: "columbian-exchange",   prompt: "什么是 Columbian Exchange?给我至少 2 个新→旧大陆食物 + 2 个旧→新大陆疾病。" },
          { conceptId: "doctrine-of-discovery", prompt: "什么是 Doctrine of Discovery?它从 1493 活到哪一年?为什么 530 年这么久才被废除?" },
        ]
      },
      {
        type: "application",
        items: [
          { prompt: "1492 三件事同年 — 1.2 Reconquista 完成 + 3.31 Alhambra Decree 驱犹 + 8.3 Columbus 出航 — 同一笔 Isabella 国库钱。这是三个独立事件还是一个事件链?给一个具体理由 — 为什么这三件事「必须同时发生」或者「可以分开发生」。" },
          { prompt: "Bartolomé de las Casas 1502-1514 自己是 encomendero 13 年,1514 觉醒后 50 年 advocacy 保护 Taíno — 但 1516 建议「用非洲奴隶代替」、1552 反思后悔。如果 las Casas 1516 年没建议非洲奴隶,Taíno 能逃过灭族吗?这两个问题(Taíno 命 + 非洲奴隶系统)能同时回答吗?给一个具体理由。" },
        ]
      }
    ]
  },

  // ─── primarySources ──
  primarySources: [
    {
      title: "Columbus's Letter on the First Voyage (1493 Barcelona edition)",
      year: 1493,
      author: "Christopher Columbus",
      excerpt: "The people are very gentle and timid... they would make excellent servants. With fifty men we could subjugate them all and make them do whatever we want.",
      excerptCn: "这些人非常温和而胆怯……他们会成为绝佳的仆人。我们用五十个人就能征服他们所有人,让他们做任何我们想要的事。",
      note: "Columbus 1493 年 2 月写给 Isabella 报告第一次航行,印 9 个版本流传欧洲 — 这是「殖民语言模板」的奠基文本。「温和 + 可工作 + 可奴役」3 件套从这里开始,500 年后还在「潜在市场——可教育——可服务」的语言里活着。las Casas 1535 年在 *Historia de las Indias* 里转录改写并批判注解。"
    },
    {
      title: "Brevísima Relación de la Destrucción de las Indias (1542)",
      year: 1542,
      author: "Bartolomé de las Casas",
      excerpt: "I saw with my own eyes a Spaniard cut off the nose and ears of an Indian without any provocation, only because he was in his way... I saw great cruelties such as no human tongue can express.",
      excerptCn: "我亲眼看到一个西班牙人切掉一个印第安人的鼻子和耳朵 — 没有任何挑衅 — 只因为他挡了路……我看到的残忍超过任何人类语言可以表达的程度。",
      note: "las Casas 1542 年写给 Charles V 西班牙王 — 直接催生 1542 New Laws (虽然殖民者抵抗导致部分撤回)。这个文本 16 世纪起在欧洲流传 — 是西班牙「黑色传说」(Black Legend) 的源头之一,也是西方「内部良心反对」传统的早期文本。Erasmus 没活到看见(1536 死)— 但他 1516 年的 *metanoeite* 校勘是 Reformation + las Casas 同代 conscience 革命的共同文本基础。"
    }
  ],

  // ─── 关闭叙事 + 家庭对话 ──
  familyQuestion: {
    closingNarrative: "这是 1492-1600 年大航海的故事 — 但它留下了 4 条线还在今天活着:\n1. **1492 三件事同年** — 同一笔 Isabella 国库钱 + 同一种「基督教纯洁化」国家逻辑 — 提醒我们「探险」「驱逐」「殖民」从来不是独立事件 — 国家选择往往是同一逻辑的多面同时发生。\n2. **Columbian Exchange 改写全球菜单** — 西红柿/土豆/玉米/咖啡/糖/辣椒在 1492 年前是地区性食物 — 1600 年后变成全球标配。{{userParentWord|爸妈}}晚饭桌上每一道菜几乎都跨过 1492 这道线。\n3. **「大死亡」+ Atlantic slave trade 386 年 + Doctrine of Discovery 530 年** — 美洲社会三个最深伤口的起点 — 不是「过去」是「还在影响今天」。Standing Rock 2016 / Black Lives Matter / 2023 梵蒂冈废除 Inter Caetera — 这条线 530 年没断。\n4. **Joseph Needham Question** — 1433 Ming 停七下西洋 + 1492 欧洲开始大航海 — 同一片海洋两种相反选择。一带一路 2013 年是 Ming 决定的反向重启 — 580 年后又一次。「做」「不做」都是历史选择,不是命运。",
    question: "你跟 {{userParentWord|爸妈}} 聊:你家族里有没有大航海后果的痕迹? — 比如 {{userParentWord|爸妈}} 移民来美国是大航海 530 年 Doctrine of Discovery 的间接产物吗?今天晚饭桌上哪些食物来自 1492 年后的 Columbian Exchange? — 让 {{userParentWord|爸妈}} 给你他们的看法。",
    callToAction: "明天告诉我 {{userParentWord|爸妈}} 怎么说 — 「1492 那条线」可能离我们家比想象的近很多。一家人聊一次值。"
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// MALI EMPIRE 1235-c.1610 (HSS-7.4 + AP World 1.5 + AP World 2.1)
// 5-7+: ship-ready (Sarah Chen audit pass + 5 P0 + 5 P1 注入 + 3 lens-author + 4-agent review 15 P0 + 8 P1)
// 3 lens: mansa-musa (perpetrator-actor) / ibn-battuta (lonely-mediator) / aisha-1413 (receiving-end)
// ═══════════════════════════════════════════════════════════════════════════
export var MALI_EMPIRE_1235 = {
  id: "mali-empire-1235",
  title: { en: "Mali Empire", cn: "马里帝国" },
  oneLineHook: { cn: "1235 Sundiata 7 岁拔猴面包树后推翻 Sosso 建 Mali —— 1324 Mansa Musa 朝圣 12,000 enslaved + 18 吨黄金 8,000 km Cairo → Mecca, Cairo 黄金价格下降 25% (al-'Umari) —— 1352 Ibn Battuta 8 个月 Rihla 写「Mali 比我去过的任何国家都安全」碎掉欧洲「非洲野蛮」narrative —— 1591 Songhai/摩洛哥 Tondibi → c.1610 Mali 不存在 —— al-Sa'di 1655 写《Tarikh es-Sudan》→ 2012 Timbuktu 30 万手稿被 Haidara 家族 357 年抢救保存。" },
  curriculumUnit: "7th-grade/medieval-africa",
  hssStandard: "HSS-7.4",
  bridgeStandard: "HSS-7.11",  // 桥接到 Age of Exploration (1492 三连击 + Atlantic slave trade 起点)
  textbookRef: {
    publisher: "Houghton Mifflin · 《Medieval & Early Modern Times》",
    grade: "7",
    chapter: "Ch. 5 West African Civilizations",
    section: "Lesson 3 The Mali Empire",
    page: "143",
    hint: "翻到课本 p.143 一起读 — AI 用 3 个视角讲 (Mansa Musa imperial soft-power projector / Ibn Battuta cross-civilization 见证者 + 自己也参与 Islamic 网络奴贩 / 14 岁 Aisha 1413 Mande 女孩 female-literacy-carrier),让你站进 1324 朝圣 + 1352 Battuta 写 Rihla + 1413 Sankoré 旁织布——而不是只看「Mansa Musa 4000 亿美金 比 Bezos 富」那个 Time Magazine 2012 myth。"
  },
  year: 1235,
  yearRange: [1235, 1610],
  region: "west-africa",
  difficulty: 4,
  throughLine: "imperial-projection",
  estimatedMinutes: 35,

  // ─── Geography (5-5: useAtlasLink) ──
  geography: {
    worldOrient: {
      worldMap: "world-base",
      highlightRegion: "west-africa",
      orientNote: {
        cn: "Niani + Walata + Timbuktu + Gao + Bambuk/Bure 黄金森林 + Sahara + Cairo + Mecca 八点 — 14 世纪 trans-Sahara + Islamic 全球网络. 同代欧洲 Black Death 1347-1352 / 中国元末 / 中亚帖木儿崛起.",
        en: "Niani + Walata + Timbuktu + Gao + Bambuk/Bure goldfields + Sahara + Cairo + Mecca — 14th-century trans-Sahara + Islamic global network. Contemporary Europe Black Death 1347-1352, late-Yuan China, rise of Timur in Central Asia."
      }
    },
    useAtlasLink: true,
    atlasViewId: "mali-empire",
    primaryMap: null,
    flipMap: null,
    primaryMapPin: { lon: -8.39, lat: 11.32, label: "Niani 首都 1235-1610" },

    scaleAnchors: [
      { cn: "Mali 1325 年 1,800,000 km² + 5-15 million 人 (Levtzion 1973 / Niane 1984) — 同期面积比英国 + 法国 + 神圣罗马帝国之和大",
        en: "Mali 1325: 1,800,000 km² + 5-15 million people (Levtzion 1973 / Niane 1984) — area larger than England + France + the Holy Roman Empire combined" },
      { cn: "Mansa Musa 1324 朝圣 60,000 人 + 12,000 enslaved 各捧 4 磅黄金 + 80 头骆驼各驮 300 磅 + 18 吨黄金 → Cairo 3 个月 → 黄金价格下降 25% (al-'Umari 个人定性观察, 不是「人类首次通胀」)",
        en: "Mansa Musa 1324 hajj: 60,000 people + 12,000 enslaved each carrying 4 lbs gold + 80 camels each carrying 300 lbs + 18 tons gold → 3 months in Cairo → gold price fell 25% (al-'Umari personal qualitative observation, NOT 'humanity's first inflation')" },
      { cn: "Ibn Battuta 1325-1354 30 年游历 75,000-117,000 km (Dunn 1986 / Mackintosh-Smith 2001 范围) — 是 Marco Polo 15,000-25,000 km 的 3-5 倍 — Rihla 120,000 字阿拉伯文 — 19 世纪欧洲才翻译 — 21 世纪 sub-Saharan Africa 第一手 14 世纪原始材料",
        en: "Ibn Battuta 1325-1354 30 years, 75,000-117,000 km (Dunn 1986 / Mackintosh-Smith 2001 range) — 3-5 times Marco Polo's 15,000-25,000 km — Rihla 120,000 words Arabic — Europeans only translated in the 19th century — 21st-century first-hand sub-Saharan Africa primary material" },
      { cn: "al-Sa'di 1594-c.1655 写《Tarikh es-Sudan》 → Haidara 家族世代保存 → 2012 Timbuktu 危机 30 万手稿被秘密运出 — 357 年知识保存 — 跟 Renaissance 印刷 / Reformation 95 Theses / AoE 1493 信形成「4 Topic information preservation 四面体」",
        en: "al-Sa'di 1594-c.1655 wrote *Tarikh es-Sudan* → Haidara family preserved generations → 2012 Timbuktu crisis 300,000 manuscripts secretly evacuated — 357 years of knowledge preservation — forms a 4-Topic information preservation tetrahedron with Renaissance printing, Reformation 95 Theses, and AoE Columbus's 1493 letter" },
    ],

    whyMatters: {
      cn: "Mali Empire 1235-1610 不是「黑暗非洲部落」—— 是 14 世纪世界 Ibn Battuta 亲眼见过最安全 + Quran 教育普及 + 法治严谨的国家. Mansa Musa 1324 朝圣不是炫耀, 是 14 世纪版「一带一路」+ 「马歇尔计划」—— imperial soft-power projection 模板 700 年没变. 但 12,000 enslaved 也是真的 —— 14 世纪 Islamic 世界奴隶制 normalized practice ≠ 合法. Ibn Battuta 自己买卖奴隶 —— cross-civilization 见证者也是参与者. 21 世纪你课本读 Marco Polo 5 次, Ibn Battuta 0 次 —— 这是 Euro-centric historiography 偏见 —— 21 世纪 cross-cultural turn 慢慢 reset, 你 7 年级现在站在中间. Sundiata 7 岁拔猴面包树 + 12,000 enslaved 三角 + al-Sa'di 沙漠藏书 是 4 Topic arc 三个 thread.",
      en: "Mali Empire 1235-1610 is NOT 'dark African tribes' — it is what Ibn Battuta personally observed in the 14th century: safer than any country he visited, with widespread Quranic education, and rigorous rule of law. Mansa Musa's 1324 hajj was not showing off — it was the 14th-century version of the Belt and Road Initiative + the Marshall Plan — an imperial soft-power projection template that has not changed in 700 years. But the 12,000 enslaved are also real — 14th-century Islamic-world slavery was normalized practice ≠ legitimate. Ibn Battuta himself bought and sold enslaved people — cross-civilization witnesses are also participants. In your 21st-century textbook you read Marco Polo 5 times and Ibn Battuta 0 times — this is Euro-centric historiography bias — the 21st-century cross-cultural turn is slowly resetting it, and you 7th-graders stand in the middle. Sundiata pulling up the baobab tree at 7 + the 12,000 enslaved triangle + al-Sa'di's desert manuscripts are three threads in the 4-Topic arc."
    },

    chinaCompare: {
      otherMap: null,
      readNote: {
        cn: "1325 同代中国是元朝泰定 2 年. 元朝交钞 1350s hyperinflation 比 Mansa Musa 1324 Cairo 25% 下降严重得多 —— 但课本不讲交钞通胀, 只讲 Mansa Musa「人类首次通胀」(其实是 myth — 罗马 3 世纪 Diocletian + 元朝交钞都更早). 1349 同代汪大渊《岛夷志略》写印度洋 + 东南亚 —— 比 Zheng He 1405 早 56 年 —— 跟 Ibn Battuta 1325-1354 同代 —— 14-15 世纪是 Islamic + 中国 + 欧洲 + 非洲 cross-cultural mobility 的黄金时代 —— 不是只 Marco Polo 一人代表. Joseph Needham Question: 14 世纪中国 + Mali 都比同期欧洲先进 —— 18 世纪后欧洲反超 —— 不是文明缺陷, 是政治选择.",
        en: "1325 China was Year 2 of Yuan Dynasty Taiding reign. Yuan jiaochao hyperinflation in the 1350s was far more severe than Mansa Musa's 1324 Cairo 25% gold drop — but textbooks teach Mansa Musa as 'humanity's first inflation' (a myth — Rome 3rd-century Diocletian + Yuan jiaochao both predate). 1349 contemporary Wang Dayuan wrote *Daoyi Zhilüe* on the Indian Ocean and Southeast Asia — 56 years before Zheng He 1405 — same era as Ibn Battuta 1325-1354 — the 14th-15th centuries were the golden age of Islamic + Chinese + European + African cross-cultural mobility — not just Marco Polo. The Joseph Needham Question: in the 14th century China and Mali were both more advanced than contemporary Europe — Europe overtook after the 18th century — not a civilizational defect, but a political choice."
      }
    }
  },

  // ─── XP rewards (难度 4) ──
  xpRewards: {
    base: 120,
    perVocabPass: 5,
    perConceptPass: 10,
    perApplicationPass: 15,
    optionalChecks: { "teach-back": 30, "counterfactual": 40 },
  },

  // ─── 内容主源走 storyboard ──
  conversationTurns: [],

  // ─── mustMemorize ──
  mustMemorize: {
    vocab: [
      { word: "mansa", ipa: "/ˈmɑːnsə/", pos: "n.", cn: "皇帝(Manding 语 — Mali 帝国君主称号 — Mansa Musa 是 Mali 第 9 任 mansa)",
        example: "Mansa Musa was the 9th mansa of the Mali Empire and ruled 1312-1337.",
        exampleCn: "Mansa Musa 是 Mali 帝国第 9 任 mansa, 1312-1337 在位.", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.4", emphasis:"high"}, {code:"AP-WORLD-1.5"}] },
      { word: "hajj",  ipa: "/hædʒ/",     pos: "n.", cn: "朝圣 Mecca(Islam 5 大义务之一 — 每个有能力的 Muslim 一生应做一次)",
        example: "Mansa Musa's 1324 hajj turned a religious pilgrimage into the most lavish imperial soft-power projection in pre-modern history.",
        exampleCn: "Mansa Musa 1324 hajj 把宗教朝圣变成前现代史上最豪华的帝国软实力外交.", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.4"}, {code:"AP-WORLD-1.5"}] },
      { word: "Sankoré", ipa: "/sænˈkɔːreɪ/", pos: "n.", cn: "萨科雷大学(Timbuktu 14-16 世纪 Islamic 学术中心 — 14 世纪 Mansa Musa 时代 5,000-10,000 学者 / 16 世纪 Askia 时代峰值 25,000 / 21 世纪 Timbuktu Manuscripts Project 70 万幸存手稿)",
        example: "Sankoré in Timbuktu was the largest Islamic university in 14th-16th-century West Africa.",
        exampleCn: "Timbuktu 的 Sankoré 是 14-16 世纪西非最大的 Islamic 大学.", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.4"}, {code:"AP-WORLD-1.5"}] },
      { word: "caravan", ipa: "/ˈkærəvæn/", pos: "n.", cn: "驼队商队(trans-Sahara 商路上几十到几百头骆驼 + 商人组成的长途商队 — Mali 跟北非的盐 / 黄金 / 奴隶贸易主要通过 caravan)",
        example: "A 70-camel caravan crossing the Sahara took 90 days from Sijilmasa to Walata.",
        exampleCn: "70 头骆驼商队跨 Sahara 从 Sijilmasa 到 Walata 90 天.", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.4"}, {code:"AP-WORLD-2.1"}] },
    ],
    concepts: [
      {
        id: "trans-saharan-trade",
        en: "trans-Saharan trade",
        ipa: "",
        cn: "跨撒哈拉贸易",
        definition: {
          en: "The 8th-16th-century network of camel-caravan routes linking West Africa (gold, ivory, enslaved people, kola nuts) to North Africa and the Mediterranean (salt, books, copper, textiles). Mali Empire's wealth came from controlling Bambuk and Bure goldfields + the Niger River trade arteries. Trans-Saharan slave trade — about 7-12 million people forced north over 1000 years — predates and parallels the Atlantic slave trade.",
          cn: "8-16 世纪连接西非(黄金 / 象牙 / 奴隶 / 可乐果)跟北非 + 地中海(盐 / 书籍 / 铜 / 纺织)的驼队网络. Mali Empire 财富来自控制 Bambuk + Bure 黄金森林 + Niger 河贸易动脉. 跨撒哈拉奴贸 1000 年间约 700-1200 万人被强制北运 — 比 Atlantic slave trade 早 + 平行."
        }
      },
      {
        id: "imperial-soft-power-projection",
        en: "imperial soft-power projection",
        ipa: "",
        cn: "帝国软实力外交",
        definition: {
          en: "A state strategy of using wealth + culture + goods (rather than direct military force) to make other states recognize one's superior status. Mansa Musa's 1324 hajj — 18 tons of gold scattered across Cairo and Mecca — is the 14th-century template; the 1948 US Marshall Plan, 1990s NBA globalization, and 2013 China Belt and Road Initiative are 20th-21st-century continuations. Same template, 700 years.",
          cn: "国家用财富 + 文化 + 物资(不是直接军事力)让其他国家承认自己优等地位的战略. Mansa Musa 1324 朝圣 — 18 吨黄金散在 Cairo + Mecca — 是 14 世纪模板. 1948 美国马歇尔计划 / 1990s NBA 全球化 / 2013 中国一带一路是 20-21 世纪延续. 同一模板, 700 年."
        }
      },
      {
        id: "joseph-needham-question",
        en: "the Joseph Needham Question",
        ipa: "",
        cn: "李约瑟问题",
        definition: {
          en: "Why did science and technology lead in China and the Islamic world from the 12th to the 17th century, then get overtaken by Europe in the 18th-19th? British biochemist Joseph Needham (1900-1995) raised this in *Science and Civilisation in China*. The same applies to Mali — 14th-century Mali was more literate, safer, and more legally orderly than contemporary Europe — but Mali was 'overtaken' by 1591 (Tondibi) and erased from European textbooks. The answer is not 'civilizational defect' but 'political choices' — Ming China stopped Zheng He's voyages in 1433, Mali was destroyed by Songhai/Morocco war in 1591, while Europe started Atlantic exploration in 1492. Three regions, three different choices, defining 500 years.",
          cn: "为什么 12-17 世纪科学技术在中国 + Islamic 世界领先, 18-19 世纪却被欧洲反超? 英国生化学家 Joseph Needham (1900-1995) 在《中国科学技术史》提出. Mali 同理 — 14 世纪 Mali 比同代欧洲识字率更高 + 更安全 + 法治更严 — 但 Mali 1591 (Tondibi) 后被「反超」, 从欧洲课本里被擦掉. 答案不是「文明缺陷」, 是「政治选择」 — Ming 1433 停 Zheng He 远洋, Mali 1591 被 Songhai/摩洛哥战争毁, 欧洲 1492 开始 Atlantic exploration. 三个地区, 三种选择, 定义 500 年."
        }
      },
    ]
  },

  // ─── Mastery Checks ──
  masteryChecks: {
    required: [
      {
        type: "spelling",
        sampleSize: 3,
        items: [
          { prompt: "Mali 帝国君主的 Manding 语称号是 ___ (Mansa Musa 是 Mali 第 9 任)",  hint: "m___a",   answer: "mansa" },
          { prompt: "Islam 5 大义务之一是去 Mecca 朝圣 — 这个朝圣叫 ___",  hint: "h__j",    answer: "hajj" },
          { prompt: "Mali 跟北非的长途骆驼商队叫 ___",                                hint: "c______n", answer: "caravan" },
        ]
      },
      {
        type: "definition",
        items: [
          { conceptId: "trans-saharan-trade",          prompt: "什么是 trans-Saharan trade? 给我至少 2 个西非 → 北非的商品 + 2 个北非 → 西非的商品." },
          { conceptId: "imperial-soft-power-projection", prompt: "什么是 imperial soft-power projection? 给我 Mansa Musa 1324 + 21 世纪 1 个例子做对比." },
        ]
      },
      {
        type: "application",
        items: [
          { prompt: "Mansa Musa 1324 朝圣队伍有 12,000 enslaved 各捧 4 磅黄金 + Ibn Battuta 自己也买卖奴隶 — 14 世纪 Islamic 世界奴隶制是 normalized practice. 21 世纪你怎么评?「他跟时代一起」是辩护吗? 给一个具体理由 (想 30 秒)." },
          { prompt: "Joseph Needham Question: 14 世纪 Mali + 中国都比同期欧洲先进 — 但 18-19 世纪欧洲反超. 答案不是「文明缺陷」是「政治选择」. Ming 1433 停 Zheng He / Mali 1591 被毁 / 欧洲 1492 出航 — 三种选择. 你怎么评这三种选择? 哪一个对接下来 500 年影响最大?" },
        ]
      }
    ]
  },

  // ─── primarySources ──
  primarySources: [
    {
      title: "al-'Umari, *Masalik al-Absar* (1340)",
      year: 1340,
      author: "Shihab al-Din al-'Umari (Cairo scholar, 1300-1349)",
      excerpt: "His [Mansa Musa's] gifts of gold flooded the city. The price of gold in Cairo fell, and continued to fall about 12 years after, as I write.",
      excerptCn: "他 [Mansa Musa] 给的黄金淹没了 Cairo. 金价下降, 持续到 12 年后我写本书时还在影响.",
      note: "al-'Umari 1340 写于 Cairo — 是 Mansa Musa 1324 朝圣最早一手记录. 'Cairo 25% 黄金价格下降' 来自 al-'Umari 个人定性观察, 不是经济数据. 现代经济史 Goldberg 2012 / Borsch 2005 估实际影响 5-10 年, Black Death 1347-1352 才是 Mamluk 经济真正崩溃."
    },
    {
      title: "Ibn Battuta, *Rihla* (Mali chapter, 1356)",
      year: 1356,
      author: "Ibn Battuta (1304-1369)",
      excerpt: "Of all peoples, the Blacks are those who most abhor injustice... Their sultan shows no mercy to anyone who is guilty of the least act of it. There is complete security in their country. Neither traveler nor inhabitant has anything to fear from robber or violent men.",
      excerptCn: "在所有民族里, 黑人是最憎恶不公的 ... 他们的 sultan 对任何犯一丁点不公的人都不留情. 他们国家里有完整的安全. 旅行者跟居民都不怕强盗或暴徒.",
      note: "Ibn Battuta 1352-1353 在 Mali 8 个月后写的. Maliki 法学者背景 — 自己有 bias (对女性不戴面纱 + 非阿拉伯食物有偏见 + 自己也参与 Islamic 网络奴贩) — 但 Rihla 仍然是 14 世纪 sub-Saharan Africa 第一手记录. 19 世纪欧洲学界才认真翻译. 21 世纪「Mali 是 14 世纪世界最安全国家」直接 quote 来自这一段."
    }
  ],

  // ─── 关闭叙事 + 家庭对话 ──
  familyQuestion: {
    closingNarrative: "这是 1235-1610 年 Mali Empire 的故事 — 但它留下了 4 条线还在今天活着:\n1. **imperial soft-power projection 模板 700 年没变** — Mansa Musa 1324 黄金 → 1948 美国马歇尔计划 → 1990s NBA 全球化 → 2013 中国一带一路. 都是用财富 + 文化 + 物资让别人记住「这个帝国是真的强」.\n2. **historiography 是政治** — Marco Polo 在西方课本里 5 次, Ibn Battuta 0 次 —— 但 Ibn Battuta 走得更远 + Rihla 写得更详细 + 更可靠. 「谁的故事被记得 / 谁的故事被忘」是 21 世纪 cross-cultural turn 才慢慢 reset 的事 — 你 7 年级站在 reset 中间.\n3. **Sundiata 7 岁拔猴面包树 → 12,000 enslaved → al-Sa'di 沙漠藏书 → 2012 Timbuktu 30 万手稿被 Haidara 家族抢救** — 这是 Mali 跟 Renaissance 镜子 / Reformation 95 Theses / AoE 黑曜石镜子 / 1493 信形成的「4 Topic information preservation 四面体」. 357 年知识保存. 不是过去, 是还在活的 thread.\n4. **Joseph Needham Question** — 14 世纪 Mali + 中国 + Islamic 世界都比同代欧洲先进 — 18-19 世纪欧洲反超 — 不是文明缺陷, 是政治选择. Ming 1433 / Mali 1591 / 欧洲 1492 — 三种选择定义 500 年. 你 21 世纪每一个 China + Africa + Islamic 国家的选择, 都在写下一个 500 年.",
    question: "你跟 {{userParentWord|爸妈}} 聊: 你 21 世纪听过 Marco Polo 几次? Ibn Battuta 几次? Mansa Musa 几次? 这种「谁的名字被记得」差别是巧合还是政治? 让 {{userParentWord|爸妈}} 给你他们的看法 — 他们小时候课本读哪些非洲帝国名字?",
    callToAction: "明天告诉我 {{userParentWord|爸妈}} 怎么说 — 「whose story is remembered」是 21 世纪每个孩子能 challenge 的事. 一家人聊一次值."
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// TANG-SONG CHINA 618-1279 (HSS-7.3 + AP World 1.2)
// 5-7+: ship-ready (Sarah Chen audit 8.6/10 + 5 P0 + 3 P1 注入 + 3 lens-author + 4-agent review 16 P0 + 8 P1)
// 3 lens: emperor-huizong (perpetrator-actor) / su-shi (lonely-mediator) / li-qingzhao (receiving-end)
// ═══════════════════════════════════════════════════════════════════════════
export var TANG_SONG_CHINA = {
  id: "tang-song-china",
  title: { en: "Tang-Song China", cn: "唐宋盛世" },
  oneLineHook: { cn: "618 唐建国 → 626 玄武门兄弟相杀 + 23 年贞观之治 → 755 安史之乱 8000 万人口减半 → 960 宋太祖杯酒释兵权 → 1100 徽宗 18 岁意外即位 27 年艺术皇帝盛世 → 1126 闰 11.25 金军陷开封外城 + 1127.4 二帝北迁北宋实质亡 + 翰林图画院 6,396 画 + 1,344 书 全失 → 1129-1135 李清照 46 岁拼命南运《金石录》大部分丢失 → 1279 崖山 8 岁帝昺投海宋亡. 661 年盛衰. 北宋造纸印刷火药指南针领先世界 600 年 — 但 1840 后被欧洲反超. 不是文明缺陷, 是政治选择 (Joseph Needham Question)." },
  curriculumUnit: "7th-grade/medieval-east-asia",
  hssStandard: "HSS-7.3",
  bridgeStandard: "HSS-7.4",  // 桥接到 Mali / 跨撒哈拉网络 (跟 Mali 同代)
  textbookRef: {
    publisher: "Houghton Mifflin · 《Medieval & Early Modern Times》",
    grade: "7",
    chapter: "Ch. 6 Medieval China",
    section: "Lesson 1-3 Tang Dynasty / Song Dynasty / Achievements",
    page: "163",
    hint: "翻到课本 p.163 一起读 — AI 用 3 个视角讲 (徽宗 1100-1126 极致才华 + 系统性盲点 / 苏轼 1037-1101 三度流放但仍中道智者 / 14 岁李清照 1099 山东文学世家 → 1129 寡居 → 1135 50 岁 100 天再婚悲剧 → 终生守《金石录》遗志), 让你站进 1126 翰林图画院全失 + 1129-1135 文物南运的物理时刻, 而不是只看「四大发明炫耀」。"
  },
  year: 618,
  yearRange: [618, 1279],
  region: "east-asia",
  difficulty: 4,
  throughLine: "civilization-peak-collapse",
  estimatedMinutes: 35,

  // ─── Geography (5-5: useAtlasLink) ──
  geography: {
    worldOrient: {
      worldMap: "world-base",
      highlightRegion: "east-asia",
      orientNote: {
        cn: "长安 + 洛阳 + 开封 + 临安 + 泉州 + 扬州 + 敦煌 七点 — 唐宋 661 年东亚网络中心. 同代 Carolingian (Charlemagne 768-814) + Abbasid Baghdad House of Wisdom 813+ + Cordoba 倭马亚 + Crusades 1099 + Mali 1235 Sundiata + Mongol 13 世纪 — 唐宋是 Eurasian 大网络一极, 不是孤立中国 example.",
        en: "Chang'an + Luoyang + Kaifeng + Lin'an + Quanzhou + Yangzhou + Dunhuang — seven nodes of the East Asian network across 661 years. Contemporaries: Carolingian (Charlemagne 768-814) + Abbasid Baghdad House of Wisdom 813+ + Cordoba Umayyads + Crusades 1099 + Mali 1235 Sundiata + 13th-century Mongols — Tang-Song was one pole of the Eurasian network, not an isolated Chinese exception."
      }
    },
    useAtlasLink: true,
    atlasViewId: "tang-song",
    primaryMap: null,
    flipMap: null,
    primaryMapPin: { lon: 114.30, lat: 30.59, label: "开封 / 临安 1126-1279" },

    scaleAnchors: [
      { cn: "唐 1325 万 km² (天宝峰值) + 8000 万人口 → 安史之乱 (755-763) 后 4000 万 — 50% 人口损失 (Bielenstein 1986 + Twitchett 1979 估算: 部分包括逃亡 + 户籍漏登)",
        en: "Tang Empire 13.25M km² (Tianbao peak) + 80M population → Lushan Rebellion (755-763) → 40M — 50% population loss (Bielenstein 1986 / Twitchett 1979 estimates: partly fled + unregistered)" },
      { cn: "北宋 GDP 估占世界 25-30% (Maddison 2007 估算 / 学界争议范围) — 同期欧洲约 20% / 印度约 25% / 阿拉伯世界约 12%",
        en: "Northern Song GDP estimated at 25-30% of world output (Maddison 2007 / scholarly range) — vs Europe ~20% / India ~25% / Arab world ~12%" },
      { cn: "Joseph Needham Question: 12 世纪中国 + Mali + Islamic 世界都比同代欧洲先进 — 18 世纪后欧洲反超 — 不是文明缺陷, 是政治选择. Ming 1433 停 Zheng He 远洋 / Mali 1591 被 Songhai/摩洛哥战争毁 / 欧洲 1492 开始 Atlantic exploration. 三种选择定义 500 年.",
        en: "Joseph Needham Question: in the 12th century, China + Mali + the Islamic world were all more advanced than contemporary Europe — Europe overtook after the 18th century — not a civilizational defect, but a political choice. Ming stopped Zheng He's voyages in 1433 / Mali was destroyed by Songhai-Morocco war in 1591 / Europe started Atlantic exploration in 1492. Three regions, three choices, defining 500 years." },
      { cn: "1126 翰林图画院 6,396 画 + 1,344 书 全失 + 1129-1135 李清照《金石录》26 年收藏大部分丢失 — 跟 Mali al-Sa'di 1655 沙漠藏书 (→ 2012 Timbuktu 30 万手稿) / Renaissance 1440 印刷术 / Reformation 1517 95 Theses / AoE 1493 Columbus 信 = 5 Topic information preservation 五面体. 故宫今存 Huizong 收藏约 1.2%.",
        en: "1126 Hanlin Art Academy lost 6,396 paintings + 1,344 calligraphy works + 1129-1135 Li Qingzhao's 26-year Records on Metal and Stone collection mostly destroyed — these form a 5-Topic information preservation tetrahedron with Mali's al-Sa'di 1655 desert manuscripts (→ 2012 Timbuktu 300,000 evacuated) + Renaissance 1440 printing + Reformation 1517 95 Theses + AoE 1493 Columbus letter. The Forbidden City Museum today holds ~1.2% of Huizong's collection." },
    ],

    whyMatters: {
      cn: "唐宋盛世 661 年 (618-1279) 不是「天朝上国」民族主义 narrative — 是 Eurasian 大网络一极, 跟同代 Carolingian / Abbasid / Cordoba 平行. 北宋造纸 + 印刷 + 火药 + 指南针 + 纸钞 (1005 民间 → 1023 国家化) 领先世界 600 年 — 但 1840 后被欧洲反超. Joseph Needham Question 答案不是「文明缺陷」, 是「政治选择」 — Ming 1433 停 Zheng He / Mali 1591 被毁 / 欧洲 1492 出航. 1126 翰林图画院全失 + 1129 李清照南运《金石录》 = information preservation 五面体. 苏轼 1097 海南诀别诗「与君世世为兄弟」 + 文天祥 1283 大都《正气歌》 = 中文化传承非民族主义本质化, 是 historiography 问题 — 「崖山之后无中华」(钱穆 1942) vs 21 世纪 globalist 史观. 这是给 7 年级华裔孩子读的 medieval China — 不是过去, 是 cross-cultural 网络 + 政治选择 + 文化保存 thread.",
      en: "Tang-Song's 661 years (618-1279) are not a 'celestial empire' nationalist narrative — they are one pole of the Eurasian network, parallel to Carolingian, Abbasid, and Cordoba. Northern Song's papermaking + printing + gunpowder + compass + paper money (1005 private → 1023 state) led the world by 600 years — but Europe overtook after 1840. The Joseph Needham Question's answer is not 'civilizational defect' but 'political choice' — Ming stopped Zheng He in 1433 / Mali was destroyed in 1591 / Europe sailed in 1492. The 1126 Hanlin Art Academy total loss + 1129 Li Qingzhao's southward transport of *Records on Metal and Stone* = the 5-Topic information preservation tetrahedron. Su Shi's 1097 Hainan farewell to his brother «may we be brothers life after life» + Wen Tianxiang's 1283 *Song of Righteousness* in Dadu = Chinese cultural transmission, not nationalist essentialism — but rather a historiography question — 'no Chinese civilization after Mount Yashan' (Qian Mu 1942) vs 21st-century globalist historiography. This is medieval China for 7th-grade Chinese-American children — not the past, but cross-cultural networks + political choices + cultural-preservation threads."
    },

    chinaCompare: {
      otherMap: null,
      readNote: {
        cn: "唐宋本身是 China 主线 — 跨文化对照向外: 唐 (618-907) 同代 Carolingian (Charlemagne 768-814) + Abbasid Baghdad House of Wisdom 813+ + 拜占庭 Heraclius 610-641. 北宋 (960-1126) 同代 Cordoba 倭马亚 + Cluny Catholic 改革 + Maya 古典末期 collapse 800-1000. 南宋 (1127-1279) 同代 Crusades 1099 + Mali 1235 Sundiata + Ibn Rushd 1126-1198 + Maimonides 1138-1204 + 印加 pre-classic. Mongol 1271-1368 元朝建立 → Ibn Battuta 1352 Mali / Mansa Musa 1324 Cairo / Black Death 1347 — 唐宋是 Eurasian 大网络一极不是孤立 example.",
        en: "Tang-Song IS China's main thread — cross-cultural comparisons reach outward: Tang (618-907) was contemporary with Carolingian (Charlemagne 768-814) + Abbasid Baghdad House of Wisdom 813+ + Byzantine Heraclius 610-641. Northern Song (960-1126) overlapped Cordoba Umayyads + Cluny Catholic reform + late Classical Maya collapse 800-1000. Southern Song (1127-1279) overlapped Crusades 1099 + Mali 1235 Sundiata + Ibn Rushd 1126-1198 + Maimonides 1138-1204 + pre-classic Inca. The Mongol Yuan dynasty (1271-1368) emerged contemporary to Ibn Battuta's 1352 Mali / Mansa Musa's 1324 Cairo / Black Death 1347 — Tang-Song was one pole of the Eurasian network, not an isolated example."
      }
    }
  },

  // ─── XP rewards (难度 4) ──
  xpRewards: {
    base: 120,
    perVocabPass: 5,
    perConceptPass: 10,
    perApplicationPass: 15,
    optionalChecks: { "teach-back": 30, "counterfactual": 40 },
  },

  // ─── 内容主源走 storyboard ──
  conversationTurns: [],

  // ─── mustMemorize ──
  mustMemorize: {
    vocab: [
      { word: "jinshi",  ipa: "/dʒɪnˈʃiː/",  pos: "n.", cn: "进士 (科举最高学位 — 始隋 605, 唐宋成熟 — 苏轼 1057 21 岁同弟苏辙同中进士)",
        example: "Su Shi passed the jinshi exam in 1057 at age 21, alongside his brother Su Zhe.",
        exampleCn: "苏轼 1057 年 21 岁与弟苏辙同年中进士.", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.3", emphasis:"high"}, {code:"AP-WORLD-1.2"}] },
      { word: "ci",      ipa: "/tsiː/",       pos: "n.", cn: "词 (sung verse — 宋代主要文学形式 — 李清照「易安体」开创者)",
        example: "Li Qingzhao's ci poems established the «Yi-an style» in Song lyric verse.",
        exampleCn: "李清照的词作开创了宋代词坛「易安体」.", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.3"}, {code:"AP-WORLD-1.2"}] },
      { word: "jiaozi",  ipa: "/dʒiɑːʊdziː/", pos: "n.", cn: "交子 (世界第一种纸钞 — 1005 成都商人首发民间私印 → 1023 政府接管设交子务国家化)",
        example: "Jiaozi, the world's first paper money, began as private notes in Chengdu in 1005 and were nationalized in 1023.",
        exampleCn: "交子 1005 年成都商人民间首发, 1023 年政府接管.", untranslatable: true,
        sourceStandards: [{code:"CA-HSS-7.3"}, {code:"AP-WORLD-1.2"}] },
      { word: "Hanlin",  ipa: "/ˈhænlɪn/",    pos: "n.", cn: "翰林 (唐代起 imperial 学术 + 艺术机构 — Hanlin Academy 翰林学士 + Hanlin Art Academy 翰林图画院)",
        example: "Su Shi served briefly as a Hanlin scholar in 1086 before resuming exile.",
        exampleCn: "苏轼 1086 年短暂任翰林学士后又被外放.", untranslatable: false,
        sourceStandards: [{code:"CA-HSS-7.3"}, {code:"AP-WORLD-1.2"}] },
    ],
    concepts: [
      {
        id: "joseph-needham-question",
        en: "the Joseph Needham Question",
        ipa: "",
        cn: "李约瑟问题",
        definition: {
          en: "Why did science and technology lead in China and the Islamic world from the 12th to the 17th century, then get overtaken by Europe in the 18th-19th? Joseph Needham (1900-1995) raised this in *Science and Civilisation in China*. Tang-Song China is the 'China side' of the answer — paper, printing, gunpowder, the compass, and paper money were all Tang-Song innovations leading the world by 600 years. The answer is not 'civilizational defect' but 'political choices' — Ming stopped Zheng He's voyages in 1433, Mali was destroyed by Songhai-Morocco war in 1591, while Europe started Atlantic exploration in 1492. Three regions, three different choices, defining 500 years.",
          cn: "为什么 12-17 世纪科学技术在中国 + Islamic 世界领先, 18-19 世纪却被欧洲反超? 英国生化学家 Joseph Needham (1900-1995) 在《中国科学技术史》提出. 唐宋中国是答案的「中国一边」 — 造纸 / 印刷 / 火药 / 指南针 / 纸钞都是唐宋发明, 领先世界 600 年. 答案不是「文明缺陷」, 是「政治选择」 — Ming 1433 停 Zheng He 远洋 / Mali 1591 被 Songhai/摩洛哥战争毁 / 欧洲 1492 开始 Atlantic exploration. 三个地区, 三种选择, 定义 500 年."
        }
      },
      {
        id: "imperial-examination",
        en: "imperial examination (keju)",
        ipa: "",
        cn: "科举",
        definition: {
          en: "The imperial examination system began in 605 (Sui Dynasty) and matured in Tang-Song. Candidates competed through prefectural → provincial → palace exams to earn jinshi degrees and government posts. Tang-Song produced ~30,000 jinshi over 661 years, creating a meritocracy that partly bypassed Tang aristocratic clans (men-fa). 21st-century scholarship (Peter Bol, John Chaffee) treats keju as both genuine social mobility and ideological control — neither pure meritocracy nor pure machine.",
          cn: "科举始于 605 (隋朝), 唐宋成熟. 候选人通过县试 → 省试 → 殿试逐级晋升, 获进士学位 + 官职. 唐宋 661 年共产生约 30,000 名进士 — 创造了一种部分绕开唐代门阀 (士族) 的 meritocracy. 21 世纪学者 (Peter Bol / John Chaffee) 把科举视为既是真实社会流动通道, 也是意识形态机器 — 不是纯 meritocracy 也不是纯机器."
        }
      },
      {
        id: "five-topic-information-preservation",
        en: "5-Topic information preservation tetrahedron",
        ipa: "",
        cn: "5 Topic 信息保存五面体",
        definition: {
          en: "A cross-Topic teaching anchor in Story-First v2: Renaissance printing (Gutenberg 1440) + Reformation 95 Theses (Wittenberg 1517) + AoE Columbus's 1493 letter (9 European editions in 5 months) + Mali al-Sa'di's *Tarikh es-Sudan* (1655) → Haidara family preservation → 2012 Timbuktu 300,000 manuscripts evacuated + Tang-Song 1126 Hanlin Art Academy total loss (6,396 paintings + 1,344 calligraphy works gone in one night) + 1129-1135 Li Qingzhao's southward transport of her *Records on Metal and Stone*. Five Topics, five preservation modes (printing / pamphlet / letter / desert manuscripts / private archive), spanning 14th-17th centuries. Tang-Song is the inverse case: extreme concentration without dispersal, leading to total loss in one event.",
          cn: "Story-First v2 跨 Topic 教学锚: Renaissance 印刷 (Gutenberg 1440) + Reformation 95 Theses (Wittenberg 1517) + AoE Columbus 1493 信 (5 个月内 9 版欧洲) + Mali al-Sa'di《Tarikh es-Sudan》(1655) → Haidara 家族保存 → 2012 Timbuktu 30 万手稿抢救 + Tang-Song 1126 翰林图画院全失 (6,396 画 + 1,344 书一夜丢) + 1129-1135 李清照南运《金石录》. 5 Topic 5 种保存方式 (印刷 / 小册子 / 信 / 沙漠藏书 / 私人收藏), 跨 14-17 世纪. 唐宋是反例: 极致集中 + 无分散, 导致一次事件全失."
        }
      },
    ]
  },

  // ─── Mastery Checks ──
  masteryChecks: {
    required: [
      {
        type: "spelling",
        sampleSize: 3,
        items: [
          { prompt: "苏轼 1057 21 岁同弟苏辙中的科举最高学位叫 ___",                          hint: "j_____i",   answer: "jinshi" },
          { prompt: "宋代主要文学形式 sung verse — 李清照「易安体」开创者 — 叫 ___",          hint: "c_",        answer: "ci" },
          { prompt: "1005 成都商人首发的世界第一种纸钞叫 ___",                                 hint: "j_____i",   answer: "jiaozi" },
        ]
      },
      {
        type: "definition",
        items: [
          { conceptId: "joseph-needham-question",      prompt: "什么是 Joseph Needham Question? 给 12 世纪中国领先的 2 个例子 + 18 世纪欧洲反超的 1 个原因." },
          { conceptId: "five-topic-information-preservation", prompt: "5 Topic 信息保存五面体是什么? 给 5 种不同方式 + 哪一个是反例 (extreme concentration without dispersal)." },
        ]
      },
      {
        type: "application",
        items: [
          { prompt: "Joseph Needham Question: 12 世纪中国 + Mali + Islamic 世界都比同代欧洲先进 — 18-19 世纪欧洲反超. 答案不是「文明缺陷」是「政治选择」: Ming 1433 / Mali 1591 / 欧洲 1492 — 三种选择. 你怎么评这三种选择? 哪种对接下来 500 年影响最大? 给一个具体理由." },
          { prompt: "1126 翰林图画院 6,396 画 + 1,344 书一夜全失 vs 1129-1135 李清照拼命南运《金石录》大部分丢失 — 同 1126-1135 同 10 年同样的文物保存 thread. Huizong 极致集中 + Li Qingzhao 拼命分散 — 21 世纪哪一种 information preservation 方式对你的故事更接近? 给一个具体理由 (想 30 秒)." },
        ]
      }
    ]
  },

  // ─── primarySources ──
  primarySources: [
    {
      title: "Su Shi, «Niannujiao · Memories of Red Cliff» (1082)",
      year: 1082,
      author: "Su Shi (Su Dongpo, 1037-1101)",
      excerpt: "The mighty river flows east, washing away all heroes of the past. Life is like a dream — let me pour wine for the moon over the river.",
      excerptCn: "大江东去, 浪淘尽, 千古风流人物 ... 人生如梦, 一樽还酹江月.",
      note: "苏轼 1082 年 46 岁黄州贬官第二年写于赤壁矶下. 婉约 → 豪放 turning point. 21 世纪学界 (Stephen Owen / 王水照) 视为宋词从抒情转哲思的 anchor 文本. 跟 Reformation 1521 Luther «Here I stand» / AoE 1493 Columbus letter / Mali Ibn Battuta 1352 *Rihla* 同代 cross-cultural information moment."
    },
    {
      title: "Li Qingzhao, «Postface to Records on Metal and Stone» (c. 1135)",
      year: 1135,
      author: "Li Qingzhao (1084-1155)",
      excerpt: "Where there is having, there must be not-having; where there is gathering, there must be scattering — this is the natural order.",
      excerptCn: "然有有必有无, 有聚必有散, 乃理之常.",
      note: "李清照 51 岁寡居 6 年后写. 1129.8.18 赵明诚卒 + 1129-1135 文物南运大部分丢失. 这 12 字是 5 Topic information preservation 五面体的 anchor — 跟 Mali al-Sa'di 1655 沙漠藏书 / Renaissance 印刷 / Reformation 95 Theses / AoE 1493 信 形成对照. 21 世纪 Ronald Egan / 张静 把这段视为「中国第一篇书写丧失的女性散文」."
    }
  ],

  // ─── 关闭叙事 + 家庭对话 ──
  familyQuestion: {
    closingNarrative: "这是 618-1279 唐宋盛世 661 年的故事 — 但它留下了 5 条线还在今天活着:\n1. **Joseph Needham Question** — 12 世纪中国 + Mali + Islamic 世界领先 → 18 世纪欧洲反超 — 不是文明缺陷, 是政治选择. Ming 1433 停 Zheng He / Mali 1591 被毁 / 欧洲 1492 出航. 21 世纪你看 China + Africa + Islamic 国家选择 — 都在写下一个 500 年.\n2. **5 Topic information preservation 五面体** — Renaissance 印刷 / Reformation 95 Theses / AoE 1493 信 / Mali 沙漠藏书 + Tang-Song 1126 翰林图画院全失反例 + 1129 李清照拼命南运《金石录》. 5 种保存方式. 你 21 世纪手机 + 云存储 + GitHub 是哪一种?\n3. **科举 vs 门阀** — 605 隋创科举 + 唐宋成熟 + 30,000 进士 vs 唐代士族世袭. 21 世纪 SAT + AP + 顶尖大学申请 = 现代科举. meritocracy 是真还是机器?\n4. **苏轼三度流放仍创作** — 1080 黄州 / 1094 惠州 / 1097 海南 — 流放反而催生最重要词作. 「问汝平生功业, 黄州惠州儋州」. 21 世纪你内卷 / 跳槽 / 创业 / 独立思考者 — 同一种 pattern 还是真不同?\n5. **「崖山之后无中华」争议** — 钱穆 1942 命题 vs 21 世纪 globalist 史观. 中华文明在元 / 明 / 清 / 21 世纪继续 — 不是 1279 突然消失. 你家族里保留的 (语言 / 食物 / 节日 / 价值观) 哪些是 「Tang-Song 时代」的? 哪些是后来加的?",
    question: "你跟 {{userParentWord|爸妈}} 聊: 你家族里有 1126 靖康 + 1279 崖山 那种「文化创伤 + 文物南运 / 移民 / 守住语言」的故事吗? 你 / 爸妈 / 祖父母移民来美国是这种 pattern 的现代版吗? 让 {{userParentWord|爸妈}} 给你他们的看法.",
    callToAction: "明天告诉我 {{userParentWord|爸妈}} 怎么说 — 「Tang-Song 那条线」可能离我们家比想象的近很多. 一家人聊一次值."
  }
};

// ─── 主导出 ───────────────────────────────────────────────────────────
export var HISTORY_TOPICS = {
  "magna-carta-1215": MAGNA_CARTA_1215,
  "tang-song-china":  TANG_SONG_CHINA,
  "crusades-1099":    CRUSADES_1099,
  "black-death-1347": BLACK_DEATH_1347,
  "renaissance-1500": RENAISSANCE_1500,
  "reformation-1517": REFORMATION_1517,
  "age-of-exploration-1492": AGE_OF_EXPLORATION_1492,
  "mali-empire-1235": MALI_EMPIRE_1235,
};

// ─── Gate 3 hidden preview topics ───────────────────────────────────
// 22 个 G6-G12 base-content 草稿只有 storyboard + narrative，没有完整 topic 对象。
// 为让 Gate 3 smoke 能在 app 内直接打开 (仅 /history?topicId= 直链可达，不进
// getAvailableTopics → 不出现在公开 topic 列表)，给白名单内的 preview topic 构造一个
// 最小 topic 对象 (conversation + Learning Receipt 可跑；mastery 跳过——这些 topic 尚无题库)。
// 详见 docs/HISTORY_GATE3_FRAMEWORK.md。
var PREVIEW_TOPIC_META = {
  "constitutional-convention-1787": {
    titleEn: "The Constitutional Convention", titleCn: "费城制宪 1787",
    hook: "1787 年，一群人在费城关起门来，写下一部到今天还在运转的宪法 — 也把一部分人写在了门外。",
    unit: "8 年级 · 美国史", hss: "HSS-8.2 · APUSH Period 3", year: 1787,
  },
  "chinese-exclusion-1882": {
    titleEn: "Chinese Exclusion 1882", titleCn: "铁路华工与排华法案 1882",
    hook: "一群华工用命修起横贯美国的铁路 — 修完，美国用一部法律把他们关在了「美国人」之外。",
    unit: "8 年级 · 美国史", hss: "HSS-8.12 · APUSH Period 6", year: 1882,
  },
};

// id 末尾的年份 → 显示用字符串（BCE 显示「前 N」）
var _previewYear = function (id) {
  var m = String(id).match(/(\d{2,4})(bce)?$/i);
  if (!m) return "";
  return m[2] ? ("前 " + m[1]) : Number(m[1]);
};

export var buildPreviewTopic = function(id) {
  // 任何有同伴笔记本的 base-content topic 都可作 hidden preview 打开（只直链可达，不进公开列表）。
  // mastery gate 数据从 notebook 派生，让这些 topic 能完整通关（拼写/定义/应用）。
  var mastery = buildMasteryFromNotebook(id);
  if (!mastery) return null;                 // 没 notebook → 不是可预览的 base-content topic
  var nb = loadNotebook(id) || {};
  var meta = PREVIEW_TOPIC_META[id] || {};   // 2 个 Gate-3 样板有更精的 hook/unit/hss override
  return {
    id: id,
    title: { en: meta.titleEn || nb.topicNameEn || id, cn: meta.titleCn || nb.topicNameCn || id },
    oneLineHook: { cn: meta.hook || (nb.topicNameCn ? (nb.topicNameCn + (nb.topicNameEn ? "（" + nb.topicNameEn + "）" : "")) : id) },
    curriculumUnit: meta.unit || "历史 · base-content 预览",
    hssStandard: meta.hss || "Gate 3 预览",
    year: meta.year || _previewYear(id),
    difficulty: 3,
    throughLine: "",
    estimatedMinutes: 25,
    textbookRef: null,
    geography: null,
    deepLearnEnabled: true,
    isPreview: true,            // 标记：hidden preview（直链可达，不进 getAvailableTopics）
    mustMemorize: mastery.mustMemorize,
    masteryChecks: mastery.masteryChecks,
    conversationTurns: [],
    xpRewards: { base: 100, perVocabPass: 5, perConceptPass: 10, perApplicationPass: 25 },
  };
};

export var getTopic = function(id) {
  return HISTORY_TOPICS[id] || buildPreviewTopic(id) || null;
};

export var getAvailableTopics = function() {
  return TOPIC_REGISTRY.filter(t => t.available).map(t => HISTORY_TOPICS[t.id]).filter(Boolean);
};

// ─── 必背词查找（给对话里 auto-mark 用） ──────────────────────────────
// 给定 Topic 和文本，返回 [{word/concept, type, start, end, data}]
// 长词优先匹配（避免 "rule of law" 内嵌 "law" 被捷足先登）
export var findMustMemorizeHits = function(topic, text) {
  if (!text || !topic || !topic.mustMemorize) return [];

  // 收集所有目标词（concept 优先 — 通常是短语，更长，匹配更精准）
  var targets = [];
  (topic.mustMemorize.concepts || []).forEach(function(c) {
    targets.push({ key: c.en, type: "concept", data: c });
  });
  (topic.mustMemorize.vocab || []).forEach(function(v) {
    targets.push({ key: v.word, type: "vocab", data: v });
  });
  // 按 key 长度倒序（长的先匹配）
  targets.sort(function(a, b) { return b.key.length - a.key.length; });

  var hits = [];
  targets.forEach(function(t) {
    // 简单大小写不敏感匹配，但保留原文
    var lower = text.toLowerCase();
    var keyLower = t.key.toLowerCase();
    var idx = 0;
    while ((idx = lower.indexOf(keyLower, idx)) !== -1) {
      // 边界检查：不在另一个英文单词中间（baron 不能匹配 "barons" 错位… 实际我们要匹配 baron + barons 都行，所以放宽）
      // 用 word boundary 简化：左侧必须是非字母 OR 文本起点；右侧检查到下一个非字母前
      var before = idx === 0 ? " " : text[idx - 1];
      // 允许前面是空白/标点/中文字符
      if (/[a-zA-Z]/.test(before)) { idx += t.key.length; continue; }

      // 跨越任何 hit 的范围 → 跳过（长的优先抢占）
      var conflict = hits.find(function(h) { return idx < h.end && idx + t.key.length > h.start; });
      if (!conflict) {
        // 找到实际匹配的子字符串（保留原文大小写）
        var matched = text.substr(idx, t.key.length);
        // 但词形可能是 plural（barons），需扩展到包含 's' 等
        var endIdx = idx + t.key.length;
        // 如果下一个字符是 's' 或 'es'，扩展
        while (endIdx < text.length && /[a-zA-Z]/.test(text[endIdx])) endIdx++;
        hits.push({
          term: t.key,
          actualText: text.substring(idx, endIdx),
          type: t.type,
          data: t.data,
          start: idx,
          end: endIdx
        });
      }
      idx += t.key.length;
    }
  });
  hits.sort(function(a, b) { return a.start - b.start; });
  return hits;
};
