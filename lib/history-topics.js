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

// ─── Topic 注册表（首版只有 Magna Carta） ──────────────────────────────
export var TOPIC_REGISTRY = [
  { id: "magna-carta-1215", available: true,  unit: "7.6.5",  order: 1 },
  // 以下是后续 Topic 的占位（α 阶段填充）
  { id: "tang-song-china",  available: false, unit: "7.4",    order: 2, note: "唐宋盛世 — home advantage" },
  { id: "black-death-1347", available: false, unit: "7.6.9",  order: 3, note: "黑死病 — 地理因果 + 中国对照" },
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
  mustMemorize: {
    vocab: [
      { word: "charter",    pos: "n.",    cn: "特许状 / 宪章",  example: "King John signed the Great Charter at Runnymede.",  untranslatable: false },
      { word: "clause",     pos: "n.",    cn: "条款",            example: "Clause 39 protects free men from arbitrary arrest.", untranslatable: false },
      { word: "baron",      pos: "n.",    cn: "男爵 / 大贵族",  example: "The barons forced the king to sign the charter.",    untranslatable: false },
      { word: "monarchy",   pos: "n.",    cn: "君主制",          example: "England was a feudal monarchy in 1215.",             untranslatable: false },
      { word: "tyranny",    pos: "n.",    cn: "暴政",            example: "The barons accused King John of tyranny.",            untranslatable: false },
      { word: "parliament", pos: "n.",    cn: "议会",            example: "The first English parliament met in 1265.",          untranslatable: true },
      { word: "feudal",     pos: "adj.",  cn: "封建（契约性领主-附庸关系）", example: "The feudal system tied land to loyalty.", untranslatable: true },
      { word: "rebel",      pos: "n./v.", cn: "反叛 / 反叛者",   example: "The rebel barons defied King John.",                  untranslatable: false },
      { word: "consent",    pos: "n./v.", cn: "同意 / 经过同意", example: "No tax shall be levied without the consent of the kingdom.", untranslatable: true },
    ],
    concepts: [
      {
        id: "rule-of-law",
        en: "rule of law",
        cn: "法治",
        defEn: "Even the king must follow the law. No one is above it.",
        defCn: "即使是国王也必须遵守法律。没有人在法律之上。"
      },
      {
        id: "due-process",
        en: "due process",
        cn: "正当程序",
        defEn: "Before someone is punished, the proper legal steps must be followed.",
        defCn: "在惩罚一个人之前，必须经过合法的步骤（如审判、举证）。"
      },
      {
        id: "law-of-the-land",
        en: "law of the land (lex terrae)",
        cn: "土地的法律",
        defEn: "The traditional laws of a country, which apply to everyone — including the king.",
        defCn: "一个国家世代沿用的法律，所有人（包括国王）都受它约束。不是哪个人临时定的。"
      },
      {
        id: "consent-of-governed",
        en: "government by consent",
        cn: "同意而治",
        defEn: "Power belongs to the people; rulers govern only with their permission.",
        defCn: "权力属于人民；统治者只能在人民同意的前提下治理。Magna Carta Clause 12（征税须经议会同意）就是这个原则的种子。"
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
      expectsInput: true,
      inputPrompt: "你怎么觉得？",
      uiHint: { showMap: false }
    },
    {
      n: 2,
      move: "user-response",
      role: "user",
      ai_seed: null  // 不需要 AI 输出
    },
    {
      n: 3,
      move: "bridge-legal",
      role: "ai",
      ai_seed:
        "上一轮她回应了。现在引入唐律疏议对照。要点：" +
        "(1) 651 AD，比 Magna Carta 早 564 年；" +
        "(2) 规模庞大（30 卷），比 Magna Carta 大 30 倍；" +
        "(3) 关键差异：唐律管官员、管百姓 — 但**不管皇帝**。皇帝就是法。" +
        "结尾抛问：『看出问题了吗？』让她思考。" +
        "口吻：让她有'我们更早！'的自豪感，然后温和揭示分岔。",
      expectsInput: true,
      inputPrompt: "你看出问题了吗？",
      uiHint: { showMap: false }
    },
    {
      n: 4,
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
      n: 5,
      move: "bridge-religion",
      role: "ai",
      ai_seed:
        "现在讲第二维度：政教关系。要点：" +
        "(1) 中国：天 → 皇帝 → 万民，一条线。皇帝 = 天子；" +
        "(2) 欧洲：上帝 → 教皇（精神）+ 上帝 → 国王（世俗），两条线，互相牵制；" +
        "(3) 故事化：1077 Henry IV 跪 Canossa 雪地 3 天求教皇原谅；" +
        "(4) **重要澄清**：1215 教皇实际站国王那边，但贵族干了 — 这次贵族不是借教皇的势，而是『国王不是唯一』这个 1000 年观念的传承；" +
        "(5) 设问：『头上不只一个老板，老板们经常吵架的世界 — 你跟老板讲条件的胆子是不是更大？』",
      expectsInput: true,
      inputPrompt: "你的直觉是什么？",
      uiHint: { showMap: false }
    },
    {
      n: 6,
      move: "bridge-property",
      role: "ai",
      ai_seed:
        "讲第三维度：私有制 vs 家国天下。要点：" +
        "(1) 中国：家国天下，个人/家族/国家层层嵌套，私产服务集体；" +
        "(2) 欧洲：个人是基本单元，私产神圣，国王征税必须经过同意；" +
        "(3) Magna Carta 一半条款都在保护私产 + 限制随意征税；" +
        "(4) 1215 真实动力：贵族的'我的'被国王侵犯（仗打输了不停加税）；" +
        "(5) 反直觉对比题：『你是中国大臣 vs 英国贵族，皇帝/国王要征你三成田，本能反应一样吗？』" +
        "强调：这是中西方政治思想最深的分野。",
      expectsInput: true,
      inputPrompt: "这两种本能反应一样吗？为什么？",
      uiHint: { showMap: false }
    },
    {
      n: 7,
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
      n: 8,
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
      n: 9,
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
      n: 10,
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
      expectsInput: true,
      inputPrompt: "你觉得这是好事还是坏事？",
      uiHint: {}
    },
    {
      n: 11,
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
      n: 12,
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
      n: 13,
      move: "connect",
      role: "ai",
      ai_seed:
        "Connect move — 挂回 power-vs-liberty 主线，加古希腊根 + 三维度回收。" +
        "(1) Aristotle《政治学》引文：『It is more proper that law should govern than any one of the citizens.』 (公元前 4 世纪)；" +
        "(2) '书架上躺了 1500 年没人理，1215 这群贵族用 Runnymede 草地把它从书页搬到现实'；" +
        "(3) 接力链：古希腊（Aristotle）→ 1215 Magna Carta → 1689 English Bill of Rights → 1776 美国独立 → 1791 美国权利法案（写明政府不能从个人手里随便拿走的）→ 1948 联合国人权宣言（写明国家也不能侵犯的基本人权）；" +
        "(4) 『今天读到的 no free man shall be seized 就是这条 2400 年接力的中间一棒』；" +
        "(5) '等你 8 年级学美国历史，9 年级看 American Revolution，你会回头感激今天画了这条线 — 不然 Jefferson 写 unalienable rights 你会以为只是漂亮话'。",
      expectsInput: false,
      autoAdvance: true,
      uiHint: { showThroughLine: "power-vs-liberty" }
    },
    {
      n: 14,
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
  }
};

// ─── 主导出 ───────────────────────────────────────────────────────────
export var HISTORY_TOPICS = {
  "magna-carta-1215": MAGNA_CARTA_1215
};

export var getTopic = function(id) {
  return HISTORY_TOPICS[id] || null;
};

export var getAvailableTopics = function() {
  return TOPIC_REGISTRY.filter(t => t.available).map(t => HISTORY_TOPICS[t.id]).filter(Boolean);
};
