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
  // 以下是后续 Topic 的占位（β/γ 阶段填充）
  { id: "black-death-1347", available: false, unit: "7.6.9",  order: 3, note: "黑死病" },
  { id: "renaissance-1500", available: false, unit: "7.8",    order: 4, note: "文艺复兴" },
];

// ─── Topic: Magna Carta 1215 ──────────────────────────────────────────
export var MAGNA_CARTA_1215 = {
  id: "magna-carta-1215",
  title: { en: "Magna Carta", cn: "大宪章" },
  oneLineHook: { cn: "1215 年，一群英国贵族用一张纸把国王关进了规则里 — 西方法治的源头" },
  curriculumUnit: "7th-grade/medieval-europe",
  hssStandard: "HSS-7.6.5",  // CA State Standard 直接对应
  bridgeStandard: "HSS-7.11.6",  // 桥接到美国独立宣言
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

// ─── 主导出 ───────────────────────────────────────────────────────────
export var HISTORY_TOPICS = {
  "magna-carta-1215": MAGNA_CARTA_1215,
  "tang-song-china":  TANG_SONG_CHINA,
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
