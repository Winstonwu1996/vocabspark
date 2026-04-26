// view: Ancient Hebrews · BC 950 · Solomon's Temple
// Grade 6 supplementary · HSS-6.3
export const VIEW = {
  id: 'ancient-hebrews',
  grade: 6,
  topicTier: 'supplementary',
  tierType: 'extended',  // 进阶 — 教材延伸（AP World 实际从 1200 CE 起，1.2 标签仅挂名）
  standardsAlignment: [
    { code: 'CA-HSS-6.3', label: { cn: 'CA HSS-6.3 古代希伯来人与一神论', en: 'CA HSS-6.3 Ancient Hebrews & monotheism' } },
    { code: 'AP-WHAP-1.2', label: { cn: 'AP World Unit 1.2 古代宗教传统', en: 'AP World Unit 1.2 Ancient religious traditions' } },
  ],
  title:    { cn: '古希伯来王国', en: 'Ancient Hebrews' },
  subtitle: { cn: 'BC 950 · 所罗门圣殿', en: 'BC 950 · Solomon\'s Temple' },
  year: -950,

  camera: {
    projection: 'mercator',
    center: [35.5, 32],
    scale: 2400,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'ancient-hebrews-bc950',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_bc2000',
      highlightId:     'united-israel',
    },
    F:  { ids: ['jordan-river'] },
    L4: {
      pins: ['jerusalem-bc950', 'hebron-bc950', 'bethel', 'tyre-bc950'],
    },
  },

  causalSummary: {
    cn: 'L0 黎凡特狭长走廊 · 埃及 / 美索不达米亚 / 安纳托利亚之间陆桥 + L1 地中海气候宜橄榄葡萄 + L2 BC 1000 后铁器农业养活山地小邦 / 部落联盟约 30-50 万人 + L3 一神信仰 + 圣约（出埃及 / 西奈）+ 大卫 BC 1000 立王 / 所罗门 BC 970-931 建第一圣殿 + L4 BC 950 所罗门盛世 → BC 931 国分南北 → BC 586 巴比伦灭犹大 / 第一圣殿被毁（疆域据圣经传统；考古证据指向以耶路撒冷高地为中心的较小政体，Finkelstein 等学者持此观点）',
    en: 'L0 Levantine corridor · land-bridge between Egypt / Mesopotamia / Anatolia + L1 Mediterranean climate good for olives & vines + L2 post-BC 1000 iron-age farming sustains hill statelets ~300-500k pop + L3 monotheism + covenant (Exodus / Sinai) + David BC 1000 kingship / Solomon BC 970-931 builds First Temple + L4 BC 950 Solomon\'s peak → BC 931 split into N & S → BC 586 Babylonian destruction of Judah / First Temple (extent per biblical tradition; archaeology suggests smaller polity centered on Jerusalem highlands, per Finkelstein and others)',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '所罗门王', en: 'King Solomon' },
      role: { cn: '希伯来联合王国王 BC 970-931', en: 'King of United Israel BC 970-931' },
      bio: {
        cn: '你父亲大卫立了王国，你建第一圣殿（耶路撒冷）— 工期 7 年，用黎巴嫩雪松木和黄金。圣经说你"睿智"，曾为两个争婴儿的母亲判案。但你也有 700 个妻子和大批奴工 — 重税让北方 10 部落 BC 931 反叛分裂。',
        en: 'Your father David founded the kingdom; you built the First Temple in Jerusalem — 7 years, cedar from Lebanon, gold. Scripture calls you "wise" — judging two mothers who claimed one baby. But you had 700 wives and forced labor — heavy taxes triggered the 10 northern tribes\' revolt in BC 931.',
      },
      hook: {
        cn: '如果你是所罗门 — 你要建上帝的家，但要征重税逼民工。神圣 vs 公正，哪个更重要？你的子孙因你的选择失国。',
        en: 'If you were Solomon — to build God\'s house, you taxed the poor and conscripted labor. Holiness vs justice — which matters more? Your descendants lost the kingdom because of your choice.',
      },
    },
    {
      emoji: '📖',
      name: { cn: '先知 Nathan', en: 'Prophet Nathan' },
      role: { cn: '王宫先知 / 神的代言人', en: 'Court prophet / God\'s spokesman' },
      bio: {
        cn: '你是 David 时代留下的先知。你曾用一个穷人羊的故事让 David 认罪（杀 Uriah 抢妻 Bathsheba）。希伯来传统中先知 vs 国王是恒常张力 — "国王也得守约，否则神会把权力收回"。',
        en: 'You\'re the prophet from David\'s era. You once shamed David into repentance with a parable about a poor man\'s lamb (after David killed Uriah to take Bathsheba). The prophet-vs-king tension is permanent — "even kings must keep the covenant, or God revokes their throne."',
      },
      hook: {
        cn: '如果你是先知 — 国王盖圣殿用奴工。你公开骂他还是私下劝他？这是"君权"和"道德权威"的第一次对决，你怎么打？',
        en: 'If you were the prophet — the king is building the temple with forced labor. Do you rebuke him publicly, or counsel privately? This is the first showdown between royal power and moral authority — how do you play it?',
      },
    },
    {
      emoji: '⛵',
      name: { cn: '推罗腓尼基商人', en: 'Tyrian Phoenician Trader' },
      role: { cn: '黎巴嫩沿海雪松木供应商', en: 'Lebanese coastal cedar supplier' },
      bio: {
        cn: '你是 Hiram 王（推罗）派来跟所罗门做生意的。你卖雪松木 + 工匠技术给希伯来人建圣殿，换粮食和橄榄油。你的字母表已经简化到 22 个字 — 后来希腊人借去成希腊字母，再到拉丁字母。',
        en: 'You\'re sent by King Hiram of Tyre. You sell cedar + craftsmen to the Hebrews for grain and olive oil. Your alphabet has been simplified to 22 letters — later borrowed by Greeks, then Romans, becoming the Western alphabet.',
      },
      hook: {
        cn: '如果你是商人 — 希伯来人只信一个神，你信几十个海神。你笑他们死板还是觉得"一神"反而让他们交易守信用？',
        en: 'If you were the trader — Hebrews worship one god; you worship dozens of sea gods. Do you find them stiff, or notice that "one god" actually makes their commercial promises more trustworthy?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '山地农户', en: 'Hill-country Farmer' },
      role: { cn: '犹大山地葡萄园橄榄农', en: 'Vine and olive farmer in Judean hills' },
      bio: {
        cn: '你住耶路撒冷以南 30 公里。你每周六（安息日）停工休息 — 这是希伯来独有的。你每年要交十一税给神庙，再交人头税给王。BC 950 你看着耶路撒冷上空塔吊运石头建圣殿，心里既骄傲又愤怒。',
        en: 'You live 30km south of Jerusalem. Every Saturday (Shabbat) you stop working — uniquely Hebrew. You pay tithe to the temple, head tax to the king. In BC 950 you watch cranes hauling stone to build the temple — proud and angry at once.',
      },
      hook: {
        cn: '如果你是农户 — 圣殿建好了，但你得交两份税，儿子被征劳役。"上帝住在你城里"对你是好事还是坏事？',
        en: 'If you were the farmer — the temple is finished, but you pay double taxes and your son is conscripted. Is "God living in your city" a blessing or a burden?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Miriam（虚构同龄人）', en: 'Miriam (fictional peer)' },
      role: { cn: '13 岁，先知家女儿', en: '13-year-old, prophet\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是宫廷先知 Nathan 的助手。你识字，能背摩西五经的开头几章。你看圣殿落成那天，全城十几万人聚在山上唱诗 — 第一次觉得"我们这个民族"是真的存在。',
        en: 'Same age as Willow. Your father assists prophet Nathan. You can read, recite parts of the Torah. On the temple\'s dedication day, 100k+ people gather on the hill singing — the first time you feel "our people" truly exists.',
      },
      hook: {
        cn: '3000 年后，Willow 的同学有信犹太教的、基督教的、伊斯兰教的 — 全都源于你这一刻。你跟 Willow 隔着 3000 年，"一个神"这个想法怎么走到今天的？',
        en: '3000 years later, Willow\'s classmates include Jews, Christians, Muslims — all trace back to your moment. Across 3000 years, how did "one God" travel from your hilltop to her classroom?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Monotheism 一神论 — 区别于古代多神教',
      'Abraham 亚伯拉罕 — 犹太教 / 基督教 / 伊斯兰教共同先祖',
      'Moses 摩西 + Exodus 出埃及 + Ten Commandments 十诫',
      'Covenant 圣约 — 神与希伯来人的契约（西奈山）',
      'David BC 1000 立王 / Solomon 所罗门建第一圣殿',
      'Torah《妥拉》/ Tanakh《希伯来圣经》',
      'Diaspora 大流散 — BC 586 巴比伦之囚 / AD 70 圣殿再毁',
      'Judaism 犹太教伦理观 → 影响基督教 + 西方法律',
    ],
    en: [
      'Monotheism — distinct from ancient polytheism',
      'Abraham — common ancestor of Judaism, Christianity, Islam',
      'Moses + Exodus + Ten Commandments',
      'Covenant between God and Hebrews (Mt. Sinai)',
      'King David ~BC 1000 / Solomon builds First Temple',
      'Torah / Hebrew Bible (Tanakh)',
      'Diaspora — BC 586 Babylonian Exile / AD 70 Temple destroyed',
      'Jewish ethics → shapes Christianity + Western law',
    ],
  },
};
