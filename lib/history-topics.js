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
export var TOPIC_REGISTRY = [
  { id: "magna-carta-1215", available: true,  unit: "7.6.5",  order: 2 },
  { id: "tang-song-china",  available: true,  unit: "7.4",    order: 1, note: "唐宋盛世 — home advantage" },
  { id: "crusades-1099",    available: true,  unit: "7.6.4",  order: 3, note: "十字军东征 — 三宗教交汇 + 中国对照（中原王朝无宗教战争传统）" },
  // 以下是后续 Topic 的占位（β/γ 阶段填充）
  { id: "black-death-1347", available: false, unit: "7.6.9",  order: 4, note: "黑死病" },
  { id: "renaissance-1500", available: false, unit: "7.8",    order: 5, note: "文艺复兴" },
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

// ─── Topic: Tang & Song China (618-1279) ───────────────────────────
// "反向桥" — 用 Willow 已熟的中国史看世界，建立 home advantage 信心
export var TANG_SONG_CHINA = {
  id: "tang-song-china",
  title: { en: "Tang & Song China", cn: "唐宋盛世" },
  oneLineHook: { cn: "618-1279 年，世界文明的中心 — 你已经认识这一段，今天换个角度看它。" },
  curriculumUnit: "7th-grade/medieval-china",
  hssStandard: "HSS-7.4",
  bridgeStandard: "HSS-7.6.5",  // 桥接到 Magna Carta
  year: 900,
  yearRange: [618, 1279],
  region: "china",
  difficulty: 2,
  throughLine: "who-rules-whom",
  estimatedMinutes: 25,

  // 反向桥 — 中国史是 anchor，欧洲同期是对照
  bridgeAnchor: {
    type: "reverse-bridge",
    dimensions: [
      {
        id: "selection",
        name: "选拔人才",
        cnAnchor: "科举（隋创、唐兴、宋盛）",
        strength: "strong",
        keyDivergence: "中国凭考试选官 — 平民可入仕；同时代欧洲凭出生 — 贵族世袭",
      },
      {
        id: "innovation",
        name: "技术革新",
        cnAnchor: "四大发明（造纸 印术 指南针 火药）",
        strength: "strong",
        keyDivergence: "中国 1000 年前已有的技术，欧洲要等到 1450 印术、1500 火药才追上 — 整整慢半个千年",
      },
      {
        id: "religion",
        name: "宗教结构",
        cnAnchor: "三教并立（儒 释 道）",
        strength: "medium",
        keyDivergence: "中国包容多教共存；同期欧洲一教（天主教）独大且要求臣服",
      },
    ],
    divergenceNote: {
      cn: "唐宋是世界文明的高峰 — 当查理曼在欧洲烧文件时（他不识字），唐太宗在长安修《唐律疏议》。当中世纪欧洲国王凭出生继位，宋代农家子弟可以靠科举当宰相。这个时代的两端是两种完全不同的『谁有权统治谁』的回答。"
    }
  },

  geography: {
    worldOrient: {
      worldMap: "world-base",
      highlightRegion: "east-asia",
      orientNote: {
        cn: "在亚洲东部 — 你的家乡，世界文明的另一极",
        en: "In East Asia — your homeland, the other pole of world civilization"
      }
    },
    primaryMap: "tang-china",
    flipMap: null,
    scaleAnchors: [
      { cn: "唐朝盛期人口约 8000 万，比同期欧洲所有王国加起来还多" },
      { cn: "长安城 30 多平方公里，是同时代世界最大城市，比巴黎大 10 倍" },
      { cn: "丝绸之路从长安到罗马，约 7000 km — 跨欧亚的物流网络" },
    ],
    whyMatters: {
      cn: "中国地理给了它统一的起点：北方平原利于中央集权，南方水稻喂得起多人口，西部高原挡掉游牧入侵的一部分，东海封住后路。这个地理使中国能 2000 年保持中央帝国 — 同时代欧洲被山脉河流分得四分五裂。",
      en: "..."
    },
    chinaCompare: {
      otherMap: null,
      readNote: {
        cn: "今天再看：中国选了集权 + 选贤的路，2000 年王朝循环；欧洲走分权 + 世袭的路，等到 1500 年才慢慢启动文艺复兴 — 但启动后跑得比中国快。两条路都自洽，没有谁'对'。",
        en: "..."
      }
    }
  },

  mustMemorize: {
    vocab: [
      { word: "dynasty",      ipa: "/ˈdaɪnəsti/",     pos: "n.",   cn: "朝代",            example: "The Tang dynasty lasted from 618 to 907.",       exampleCn: "唐朝从 618 持续到 907 年。" },
      { word: "meritocracy",  ipa: "/ˌmerɪˈtɑːkrəsi/",pos: "n.",   cn: "凭真才实学的体制", example: "Imperial China developed a meritocracy through exams.", exampleCn: "中华帝国通过科举发展出了精英选拔体系。", untranslatable: true },
      { word: "bureaucracy",  ipa: "/bjʊˈrɑːkrəsi/",  pos: "n.",   cn: "官僚体系",        example: "Tang built a bureaucracy with thousands of officials.", exampleCn: "唐朝建立了拥有数千官员的官僚体系。" },
      { word: "innovation",   ipa: "/ˌɪnəˈveɪʃn/",    pos: "n.",   cn: "创新",            example: "Gunpowder was a major Chinese innovation.",     exampleCn: "火药是中国的重要创新。" },
      { word: "scholar",      ipa: "/ˈskɑːlər/",      pos: "n.",   cn: "学者；科举出身的官", example: "A scholar in Tang could rise from peasant to minister.", exampleCn: "唐朝学者能从农民升到宰相。" },
      { word: "imperial",     ipa: "/ɪmˈpɪriəl/",     pos: "adj.", cn: "帝国的；皇家的",  example: "The imperial examination chose officials by skill.", exampleCn: "科举考试凭能力选官。" },
      { word: "Confucianism", ipa: "/kənˈfjuːʃənɪzəm/",pos: "n.",  cn: "儒家",            example: "Confucianism shaped Tang governance.",          exampleCn: "儒家塑造了唐代治理。" },
      { word: "compass",      ipa: "/ˈkʌmpəs/",       pos: "n.",   cn: "指南针",          example: "The compass was perfected during Song.",        exampleCn: "指南针在宋代成熟。" },
    ],
    concepts: [
      {
        id: "mandate-of-heaven",
        en: "Mandate of Heaven",
        ipa: "/ˈmændeɪt əv ˈhevn/",
        cn: "天命",
        defEn: "The right to rule given by Heaven. Bad rulers lose it.",
        defCn: "上天授予的统治权；坏的皇帝会失去它（这是合法造反的理由）。"
      },
      {
        id: "merit-vs-birth",
        en: "merit vs birth",
        ipa: "/ˈmerɪt vs bɜːrθ/",
        cn: "凭本事 vs 凭出身",
        defEn: "Tang/Song picked officials by exam (merit). Medieval Europe by family (birth).",
        defCn: "唐宋凭考试选官（本事）；中世纪欧洲凭家族出身（贵族）。这是中西方治理逻辑最深的分野。"
      },
      {
        id: "imperial-exam",
        en: "imperial examination",
        ipa: "/ɪmˈpɪriəl ɪɡˌzæmɪˈneɪʃn/",
        cn: "科举",
        defEn: "Civil service exam open to all classes; allowed peasants to become officials.",
        defCn: "对所有阶层开放的官员选拔考试；让农民也能当官。这是中国 1000 多年的人才上升通道。"
      },
    ]
  },

  primarySources: [
    {
      id: "tang-code-preface",
      title: { en: "Tang Code (Preface, simplified)", cn: "唐律疏议（序言节选，简化）" },
      en: "All officials shall act according to the law. Punishments are graded by intent and severity. The law applies to officers and commoners alike — not above them but among them.",
      enSimplified: "All officials must follow the law. Punishments depend on intent and severity. The law applies to officials and commoners — but not to the emperor.",
      cnGloss: "唐律节录大意：『官吏皆依法行事，处罚视情节轻重定级。法律治官、治民 — 唯独不治皇帝。』",
      lexile: 920,
      keyTerms: [],
      attribution: "Tang Code (651 AD), simplified for modern readers"
    },
    {
      id: "li-bai-poem",
      title: { en: "Li Bai — Quiet Night Thought", cn: "李白《静夜思》" },
      en: "Before my bed, the moonlight glows bright— / I wonder if it's frost upon the ground. / I lift my head to gaze at the bright moon, / Then bow my head and think of home.",
      enSimplified: "...",
      cnGloss: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
      lexile: 850,
      keyTerms: [],
      attribution: "Li Bai (701-762), Tang dynasty"
    }
  ],

  conversationTurns: [
    {
      n: 1,
      move: "hook",
      role: "ai",
      ai_seed:
        "用 home advantage 钩子开场。要点：" +
        "(1) 假设你穿越回公元 800 年，全世界都在干什么？" +
        "(2) 欧洲：查理曼大帝（最强国王）签字时画一个 X — 他不识字；" +
        "(3) 同时代中国：唐玄宗在长安主持科举考试，李白在写《将进酒》，整个城 100 万人；" +
        "(4) 你已经背过的唐宋你以为是普通历史 — 其实是当时的 NASA + Silicon Valley + Harvard 合在一起；" +
        "(5) 设问：『为什么中国当时比欧洲先进这么多？是偶然吗？』",
      mustIntroduce: [
        { word: "dynasty", cn: "朝代" },
      ],
      expectsInput: true,
      inputPrompt: "你觉得是偶然还是有原因？",
    },
    {
      n: 2,
      move: "bridge-selection",
      role: "ai",
      ai_seed:
        "讲第一维度：选官方式。要点：" +
        "(1) 中国从隋朝（605）开始有科举 — 任何农家子弟读书读得好都能考进士当官；" +
        "(2) 同期欧洲：你爹是贵族你才能当官，国王也是世袭来的；" +
        "(3) 问题：『一个农家娃在中国能当宰相，在同时代欧洲连进城的资格都没 — 你觉得这背后的差异是什么？』" +
        "(4) 引出 meritocracy 的概念。",
      mustIntroduce: [
        { word: "meritocracy", cn: "凭真才实学的体制" },
        { word: "imperial examination", cn: "科举" },
      ],
      expectsInput: true,
      inputPrompt: "你觉得 meritocracy 这种制度有什么副作用？",
    },
    {
      n: 3,
      move: "user-eval",
      role: "ai-eval",
      ai_seed:
        "评估她对科举副作用的回答。常见好回答：" +
        "(a) '考试内容太死板会限制思想' → 『对 — 八股文就是这种副作用的极端版本』；" +
        "(b) '没考上的人怎么办' → 『大量「白头举人」是中国社会的隐性悲剧』；" +
        "(c) '这选出来的都是会读书的不会做事的' → 『北宋王安石变法时就讨论过这个』；" +
        "(d) 答不上 → 引导：『科举选出来的都会读同一套书，时间长了思想会不会变同质？』。",
      autoAdvance: true,
    },
    {
      n: 4,
      move: "source-tang-code",
      role: "ai",
      ai_seed:
        "拿出唐律疏议这份文件让她读。要点：" +
        "(1) 唐律疏议 651 AD — 比 Magna Carta 早 564 年；" +
        "(2) 给她节选 + 翻译；" +
        "(3) 关键洞察：『唐律治官、治民 — 但**不治皇帝**』；" +
        "(4) 这是中国法律传统最深的标记 — 法律是皇帝的工具，不是限制皇帝的笼子；" +
        "(5) 设问：『如果法律不能管皇帝，遇到坏皇帝怎么办？中国历史上有没有解决方法？』",
      mustIntroduce: [
        { word: "imperial", cn: "帝国的" },
      ],
      expectsInput: true,
      inputPrompt: "中国遇到坏皇帝怎么办？",
    },
    {
      n: 5,
      move: "user-eval",
      role: "ai-eval",
      ai_seed:
        "她可能答：『改朝换代』『大臣进谏』『起义』。" +
        "评：『对，这就是 Mandate of Heaven 天命的逻辑 — 坏皇帝失去天命，民可革命，新朝起。" +
        "但跟 Magna Carta 的方法很不一样：欧洲是用纸（契约）关皇帝；中国是等到忍不下去整个推翻。" +
        "两种方法都是回答 *who-rules-whom* 这个问题 — 但答案完全相反。』" +
        "引出 Mandate of Heaven 概念。",
      mustIntroduce: [
        { word: "Mandate of Heaven", cn: "天命" },
      ],
      autoAdvance: true,
    },
    {
      n: 6,
      move: "innovation",
      role: "ai",
      ai_seed:
        "讲第二维度：技术革新。要点：" +
        "(1) 四大发明在中国都在唐宋成熟：造纸术（汉成熟）→ 印刷术（唐宋兴起）→ 指南针（宋代用于航海）→ 火药（唐末试出来宋代军用）；" +
        "(2) **欧洲对应时间**：印刷术 1450 古腾堡（晚 600 年）/ 火药 1300+ 才传过去（晚 400 年）/ 指南针 1200 才传过去（晚 200 年）；" +
        "(3) 一段感慨：『1000 年前，你的祖先在搞高科技，欧洲国王还在画 X 签字。』" +
        "(4) 但**反问**：『为什么中国先有这些技术却没发起工业革命？欧洲人接过去后却跑赢了？』",
      mustIntroduce: [
        { word: "innovation", cn: "创新" },
        { word: "compass", cn: "指南针" },
      ],
      expectsInput: true,
      inputPrompt: "为什么中国有技术却没工业革命？",
    },
    {
      n: 7,
      move: "user-eval",
      role: "ai-eval",
      ai_seed:
        "评她的回答。她可能答：" +
        "(a) '皇帝不重视' → 『部分对 — 但根本是制度激励』；" +
        "(b) '没有竞争压力' → 『对 — 中国一统，欧洲多国竞争反而推动创新』；" +
        "(c) '科举把所有聪明人吸去当官' → 『这是李约瑟问题最常见的解释之一 — 中国把最优秀的脑子全引向了考试和当官，欧洲反而把这些脑子留给了商人和工匠』；" +
        "(d) 答不上 → 引导这个『大脑流向』问题。" +
        "强调：这不是中国'落后'，是激励结构不同。",
      autoAdvance: true,
    },
    {
      n: 8,
      move: "roleplay",
      role: "ai",
      ai_seed:
        "Roleplay setup — 用现代类比让她代入。" +
        "(1) **明确告知是虚构** — 让她想象一个跟今天直接相关的场景；" +
        "(2) **现代类比框架**：『假设 {{userAge|13}} 岁的你身边发生了这件事 — 唐朝的科举，今天就像 *SAT + 藤校录取* 但风险更大』；" +
        "(3) 具体场景：你的堂哥 17 岁，全家最有学问的一个，要去美国考 SAT + 申藤校。学费要全家凑、5 年不在家、考好 = 荣耀全家、考不好 = 5 年时间金钱白费；" +
        "(4) 爸妈问你：『你觉得堂哥应该去吗？』" +
        "(5) 设问：『你 {{userAge|13}} 岁，你会怎么劝？』" +
        "(6) 让她体会：唐朝科举家庭的决策跟今天华人家庭推娃考藤校的逻辑**本质上是同一件事** — 投入家族最优秀的人，赌一个上升通道。",
      expectsInput: true,
      inputPrompt: "你会怎么劝爸妈？",
    },
    {
      n: 9,
      move: "user-eval",
      role: "ai-eval",
      ai_seed:
        "评她的回答。共情：" +
        "(a) '让去 — 哪怕考不上也是机会' → 『跟今天美国华人家庭对孩子读藤校的逻辑差不多 — 投资改命的几率』；" +
        "(b) '不让 — 风险太大' → 『也对 — 历史上 90% 的考生确实没考中』；" +
        "(c) '让去但帮他想退路' → 『最聪明的家庭策略』；" +
        "(d) 别的 → 顺着她说。" +
        "结尾：『1000 年后你爸妈让你来美国 push 你学习 — 跟唐朝爸妈让哥哥去考科举，本质是同一件事。』",
      autoAdvance: true,
    },
    {
      n: 10,
      move: "connect",
      role: "ai",
      ai_seed:
        "Connect — 挂回 who-rules-whom 主线 + 跨 Topic 联动。" +
        "(1) 今天的 question：*who rules whom* 谁有权统治谁？" +
        "(2) 中国答：**最有学问的人** — 通过科举筛出来的官僚；皇帝的合法性来自天命，违天命要换；" +
        "(3) 欧洲同期答：**出生最高贵的人** — 国王是上帝任命的，贵族世袭；" +
        "(4) 1215 年，英国贵族**用 Magna Carta 把国王也关进了规则**（你之前学过 — 如果完成了 Topic）；" +
        "(5) 这两个答案 1000 多年来都在演化，今天美国的答案是：**人民选出来的人**（democracy）— 但这个答案才 250 年。" +
        "(6) 总结：你已经认识了一种回答（中国的）。今天学了认识另一种（欧洲的）。世界还在找新答案。",
      mustIntroduce: [
        { word: "scholar", cn: "学者" },
      ],
      autoAdvance: true,
    },
    {
      n: 11,
      move: "seal",
      role: "ai",
      ai_seed:
        "Seal — 晚饭家庭话题。3 选 1：" +
        "(1) '你觉得 meritocracy（凭考试）跟 democracy（凭选举）哪个更公平？为什么？'" +
        "(2) '科举一千多年选出了无数好官也选出了无数书呆子 — 这种制度今天还能用吗？SAT/AP 算不算现代版科举？'" +
        "(3) '你妈/爸是当年凭什么进的大学/工作？跟唐朝考科举有什么相似？'" +
        "结尾：『明天告诉我 {{userParentWord|爸妈}} 怎么说。』",
      autoAdvance: true,
    },
  ],

  perspectives: [
    { id: "tang-emperor",  label: { en: "Tang Taizong",      cn: "唐太宗" }, description: "唐第二代皇帝，盛世奠基者。" },
    { id: "exam-scholar",  label: { en: "Exam scholar",      cn: "科举进士" }, description: "通过考试改变命运的农家子弟。" },
    { id: "peasant-girl",  label: { en: "Peasant girl",      cn: "村女" }, description: "{{userAge}} 岁，跟 Willow 同龄。", isFictional: true },
    { id: "song-merchant", label: { en: "Song merchant",     cn: "宋代商人" }, description: "宋代商业繁荣的受益者。" },
  ],

  masteryChecks: {
    required: [
      {
        type: "spelling",
        label: { cn: "拼写测试", en: "Spelling Test" },
        instruction: { cn: "随机抽 5 题，全对算过", en: "5 random words, all correct to pass" },
        items: [
          { prompt: "A succession of rulers from one family is called a d______y.", answer: "dynasty", hint: "朝代" },
          { prompt: "A system that picks people by ability is called a m_________y.", answer: "meritocracy", hint: "凭真才实学的体制" },
          { prompt: "A government's organized system of officials is called a b_________y.", answer: "bureaucracy", hint: "官僚体系" },
          { prompt: "A new idea or improvement is called an i________n.", answer: "innovation", hint: "创新" },
          { prompt: "A learned person who studies books is called a s______r.", answer: "scholar", hint: "学者" },
          { prompt: "Belonging to an emperor or empire is called i______l.", answer: "imperial", hint: "帝国的" },
          { prompt: "The Chinese ethical system based on Confucius is called C_________m.", answer: "Confucianism", hint: "儒家" },
          { prompt: "A device that points north is called a c_____s.", answer: "compass", hint: "指南针" },
        ],
        sampleSize: 5,
        passThreshold: 5,
      },
      {
        type: "definition",
        label: { cn: "概念定义", en: "Concepts" },
        instruction: { cn: "用你自己的话说明", en: "Explain in your own words" },
        items: [
          { conceptId: "mandate-of-heaven", prompt: "What is the Mandate of Heaven? When does a ruler lose it?" },
          { conceptId: "merit-vs-birth",    prompt: "How did Tang/Song China pick officials differently from medieval Europe?" },
          { conceptId: "imperial-exam",     prompt: "Why was the imperial exam so important to Chinese society?" },
        ],
        sampleSize: 2,
        passThreshold: 2,
        evalMode: "ai-lenient",
      },
      {
        type: "application",
        label: { cn: "应用题", en: "Application" },
        instruction: { cn: "用今天学的原则分析新场景", en: "Apply today's principles" },
        items: [
          {
            prompt: "Today, US universities use SAT/ACT to pick students. China uses 高考 (gaokao). Both come from the imperial exam tradition. Compare with how medieval European universities (Oxford, Cambridge) picked students 1000 years ago. Which model was more open?",
            expectedAnswers: ["imperial exam", "merit", "Chinese exam", "open by exam", "merit-based"]
          },
          {
            prompt: "China invented the compass, gunpowder, paper, and printing — but Europe used these to start the Industrial Revolution and conquer the world. Why didn't China do it first?",
            expectedAnswers: ["incentive", "competition", "scholar-officials", "Confucianism", "no competition"]
          }
        ],
        sampleSize: 1,
        passThreshold: 1,
        evalMode: "ai-lenient",
      }
    ],
    optional: []
  },

  xpRewards: {
    base: 60,  // difficulty 2 = 60 XP（比 Magna Carta 难度 3 的 100 XP 低）
    perVocabPass: 5,
    perConceptPass: 10,
    perApplicationPass: 15,
    optionalChecks: {},
    multipliers: { noChineseHelp: 1.5, onePass: 1.3, voiceInput: 1.1 }
  },

  familyQuestion: {
    closingNarrative: "这是公元 618-1279 年的中国故事。\n你以前学过它，但可能从没意识到 — 1000 年前你的祖先正在搞高科技 + 选贤任能，而欧洲国王还在画 X 签字。",
    question: "你觉得 meritocracy（凭考试）跟 democracy（凭选举）哪个更公平？为什么？",
    callToAction: "明天告诉我你们家的答案 — SAT/AP 算不算现代版科举？",
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
    primaryMap: "europe-1099",
    flipMap: "middle-east-modern",
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
    // T2: Bridge — 用她的中国史 anchor
    {
      n: 2,
      role: "ai",
      move: "bridge-eval",
      ai_seed: "[这一轮根据她上一轮回答分支评估]\n\n如果她说\"宗教/信仰\" → 「对一半 — 宗教是触发器，但不是全部。先记一下。」\n如果她说\"想要财富/土地\" → 「对一半 — 经济也是真的。但纯抢劫不需要教皇喊一嗓子。」\n如果她说\"被洗脑\" → 「这是太现代的解释。中世纪人不是傻 — 他们是在自己的理性框架里做选择。」\n如果她说\"不知道\" → 「正常，这是历史最难的问题之一。我们一起拆。」\n\n然后无论她答什么，自然引到中国对照：「想想同时代的中国 — ⭐**北宋**（北宋）正在搞王安石变法（1069 起）。想象一下，宋神宗会突然喊'去印度抢释迦牟尼出生地'？这种事在宋朝结构上可能发生吗？为什么？」",
      expectsInput: true,
      inputPrompt: "为什么宋朝皇帝不会发动'去印度抢佛祖出生地'的远征？",
    },
    // T3: Three civilizations setup
    {
      n: 3,
      role: "ai",
      move: "frame",
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
    // T5: Source - Urban II's speech
    {
      n: 5,
      role: "ai",
      move: "source",
      ai_seed: "现在读真东西。1095 年 11 月，教皇 Urban II 在 Clermont 演讲。我们手上没有他原话录音 — 五个修士分别记了五个版本（最早的版本写于 11 年后）。这里读最早的 Fulcher of Chartres 版：\n\n[展示 source card — Urban II 演讲精简版]\n\n注意三个动词：\n- **\"come into these parts as an ambassador\"** — 教皇自称'神的大使'\n- **\"accursed race\"** — 把对方非人化（这是后续暴力的语言基础）\n- **\"go against the ⭐infidels\"** — 把欧洲内部互相打仗的精力'外导'\n\n我先问你一个具体的：教皇说'参加十字军的人，所有罪都被赦免'。这个承诺在中世纪有多大吸引力？想象一下 — 中世纪欧洲人相信地狱是真的，相信自己有罪要下地狱。教皇说免你罪 = 直接进天堂。\n\n你觉得这个承诺，对一个 25 岁的二儿子（哥哥继承家产，他没分到地）有多大吸引力？给我打分 1-10。",
      expectsInput: true,
      inputPrompt: "对一个 25 岁没继承权的二儿子，'免罪进天堂'承诺打几分？",
      mustIntroduce: [
        { word: "infidel", cn: "异教徒" },
      ],
    },
    // T6: Counter-narrative - Muslim source
    {
      n: 6,
      role: "ai",
      move: "source-counter",
      ai_seed: "现在读另一面。1099 年 7 月，第一次十字军攻进耶路撒冷。Ibn al-Athir（伊斯兰史学家，130 年后写）记录：\n\n[展示 source card — Ibn al-Athir 版]\n\n70,000 这个数字现代历史学家认为夸大（实际可能 3,000-10,000，本身已经是大屠杀）。但要点不是数字，是**视角**：\n- 拉丁基督教史料（Fulcher of Chartres 等）记成胜利、神迹、'神助我也'\n- 伊斯兰史料记成屠杀、亵渎、'神在考验我们'\n- 拜占庭东正教（Anna Komnene 写《Alexiad》）又是第三个视角 — 她觉得西欧十字军'粗鲁、不可信、来抢东西的'\n\n**同一件事，三个文明三种记忆，都是真的**。这是历史最重要的一课：不要问'谁说真话'，要问'每个人为什么这样记'。\n\n问你：如果你是 1099 年耶路撒冷城里的一个穆斯林居民（不是士兵，是普通家庭），你被屠杀的那天，你会怎么记这件事？怎么传给你的孙子？",
      expectsInput: true,
      inputPrompt: "如果你是 1099 年耶路撒冷的普通穆斯林，你怎么传这件事给后代？",
    },
    // T7: Pivot — what really happened
    {
      n: 7,
      role: "ai",
      move: "pivot",
      ai_seed: "[共情她的回答 — 不评判，引导反思'宗教仇恨怎么形成']\n\n这就是为什么我说历史不是'谁对谁错'。\n\n现在拉到全局：第一次十字军 1099 年占了耶路撒冷，建立 Crusader States 4 个小王国（⭐**Kingdom of Jerusalem** 是最大的）。然后呢？\n\n- 88 年后（1187），Saladin 在 Hattin 战役全歼十字军主力，重夺耶路撒冷\n- 又 100 年后（1291），最后一个十字军据点 Acre 陷落\n- 总共 192 年。十字军走了 4000 km 抢了座城，最后还是被赶回去\n\n这就触到一个超级反直觉的问题：**这件事到底改变了什么？**\n\n表面看 — 没改变多少（耶路撒冷今天还是一样有冲突）。但长期看 — 改变了**欧洲自己**。听过 Marco Polo 1271 年去中国吗？他爸是威尼斯商人。威尼斯能养出商人去中国 — 因为十字军时期意大利商业城邦（威尼斯 / 热那亚 / 比萨）从给十字军运补给开始发财。第三次十字军（1189-1192）就有 ⭐**Richard I**（狮心王，约翰国王的哥哥）参加。\n\n你猜：还有什么是欧洲'通过 Crusades 间接获得'的？给我一个猜测。",
      expectsInput: true,
      inputPrompt: "猜猜：欧洲通过 Crusades 间接获得了什么？（提示：跟阿拉伯世界有关）",
      mustIntroduce: [
        { word: "Kingdom of Jerusalem", cn: "耶路撒冷王国（这里我们大写专有名词）" },
      ],
    },
    // T8: Roleplay - Yusuf (Muslim peer)
    {
      n: 8,
      role: "ai",
      move: "roleplay",
      ai_seed: "[trust contract — 跟她说清楚]\n\n现在做个 roleplay。先给你**两个角色选**（都是虚构的 13 岁同龄人，让你能代入；真实历史中两人大概率会更小或更大）：\n\n**真实历史背景**：1099 年耶路撒冷有大约 30,000-50,000 居民，混居穆斯林 + 犹太人 + 东方基督徒。陷落时数千人被屠杀（具体数字史学界争议 3,000-10,000 之间，本身已是大屠杀）。\n\n**选 A — Yusuf**（13 岁少年）：父亲是 al-Aqsa 清真寺的 imam，他自己在学《古兰经》。1099 年 7 月 15 日下午，他在清真寺帮父亲分发水给老人。听到城墙塌的声音。父亲抓住他的肩膀说：'藏到地窖里，不要出来 — 不管听到什么。'\n\n**选 B — Layla**（14 岁少女，Yusuf 的姐姐）：去年嫁到城南另一个家族。今天回娘家路上听到城墙塌了。她在街上 — 离娘家还有 5 条街。她不知道父亲、弟弟、丈夫现在哪。穿着出门用的长袍，手里只有一个篮子（来娘家送饼）。\n\n**选 A 还是 B？告诉我你选哪个，然后写你接下来 30 秒的第一个具体念头 — 不要写'我很害怕'这种笼统的，写一个具体的感官 / 想法**。",
      expectsInput: true,
      inputPrompt: "你是地窖里的 Yusuf — 写一个具体念头（不要笼统'害怕'）",
    },
    // T9: Roleplay eval + provoke
    {
      n: 9,
      role: "ai",
      move: "roleplay-eval",
      ai_seed: "[评估她的回答，PEEL 框架。无论选 A（Yusuf）还是 B（Layla），如果具体（'我妈在哪' / '声音停了吗' / '篮子摔了' / '丈夫家有没有人'），强烈正反馈。如果笼统（'好害怕'），鼓励她'再想一个具体场景里的具体感官']\n\n然后接：你写的这个念头 — 1099 年那天耶路撒冷城里几千个 Yusuf 和 Layla 都在想类似的事。这就是历史。教科书写'1099 First Crusade captures Jerusalem'是 8 个英文字，地窖里 / 街上这种 30 秒的体验是几千个。\n\n现在跳出角色，问你一个挑战性问题：教皇 Urban II 1095 年喊那一嗓子的时候，他知道几千个 Yusuf 和 Layla 会被杀吗？\n\n这个问题的答案不简单。给我你的想法 — 教皇是'明知会有人死还是喊了'，还是'真的没意识到会这样'？",
      expectsInput: true,
      inputPrompt: "教皇当时知道这种规模的屠杀会发生吗？你的判断 + 一句理由。",
    },
    // T10: Connect to other civilizations - China
    {
      n: 10,
      role: "ai",
      move: "connect-china",
      ai_seed: "[评估她对教皇的判断 — 这是道德哲学题，没有标准答案。她说'知道'强化她的批判性，她说'不知道'引导她想'当时的人怎么想未来'。无论哪个，引导到下一个比较]\n\n现在转回中国对照。同时代的中国（北宋 1099 年）正在做什么？\n\n- 王安石变法（1069 起）刚结束 14 年，朝廷正在搞司马光的旧党 vs 新党党争（**还记得我们聊唐宋时说的'文官集团'吗？这里就是那个集团在党争**）\n- 苏轼在被贬黄州（《赤壁赋》1082 年）\n- 北宋禅宗高僧在传道，但**没有任何一个皇帝/教士会说'去印度抢佛祖故乡'**\n\n为什么？我们 turn 3 说过三条结构性原因。但更深的问题：中国'天命'政治和欧洲'圣战'政治，**解决的是同一个问题吗**？\n\n两边都要解决：'统治者的权威从哪里来？'\n- 欧洲：教皇 + 国王互相牵制 → 教皇有跨国号召力 → 圣战可能\n- 伊斯兰：caliph 兼任宗教 + 政治 → 防御性 jihad\n- 中国：天子一人通天 + 儒家士大夫制衡 → 没有教士阶层独立动员的可能\n\n**三条路径都能稳定运作几百年**。没有'更先进的那条'，只有'各自适应自己处境的那条'。\n\n你跟我说：如果你给三种安排打分 — 哪种'更稳定'？哪种'更危险'？为什么？",
      expectsInput: true,
      inputPrompt: "三种宗教-政治安排（欧洲分权 / 伊斯兰合一 / 中国天子）— 你觉得哪种更稳定？",
    },
    // T11: Connect to modern - cultural exchange
    {
      n: 11,
      role: "ai",
      move: "connect-modern",
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

// ─── 主导出 ───────────────────────────────────────────────────────────
export var HISTORY_TOPICS = {
  "magna-carta-1215": MAGNA_CARTA_1215,
  "tang-song-china":  TANG_SONG_CHINA,
  "crusades-1099":    CRUSADES_1099,
};

export var getTopic = function(id) {
  return HISTORY_TOPICS[id] || null;
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
