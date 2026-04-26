// view: Mesopotamia · BC 1750 · Hammurabi's Babylon
// Grade 6 · HSS-6.1
export const VIEW = {
  id: 'mesopotamia',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-6.1', label: { cn: 'CA HSS-6.1 早期人类与河谷文明', en: 'CA HSS-6.1 Early humans & river-valley civilizations' } },
    { code: 'CA-HSS-6.2', label: { cn: 'CA HSS-6.2 美索不达米亚（汉谟拉比法典）', en: 'CA HSS-6.2 Mesopotamia (Hammurabi\'s Code)' } },
  ],
  title:    { cn: '美索不达米亚', en: 'Mesopotamia' },
  subtitle: { cn: 'BC 1750 · 古巴比伦 · 汉谟拉比法典', en: 'BC 1750 · Old Babylon · Code of Hammurabi' },
  year: -1750,

  camera: {
    projection: 'mercator',
    center: [42, 32],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'mesopotamia-bc1750',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_bc2000',
      highlightId:     'old-babylon',
    },
    F:  { ids: ['tigris', 'euphrates'] },
    L4: {
      pins: ['babylon-bc1750', 'ur-bc1750', 'nineveh-bc1750', 'memphis-bc1750', 'mohenjo-daro'],
    },
  },

  causalSummary: {
    cn: 'L0 底格里斯 + 幼发拉底两河冲积平原（"两河之间"）+ 无天然防线开放四方 + L1 BC 2000 后干旱化 / 灌溉成生死线 + L2 苏美尔城邦集中 50 万人 / 城市化首发 + L3 楔形文字 / 公元前 1754 汉谟拉比法典 282 条「以眼还眼」/ 王权神授 + L4 BC 1894 巴比伦立国 → BC 1792-1750 汉谟拉比统一两河 → BC 1595 赫梯灭巴比伦',
    en: 'L0 Tigris + Euphrates alluvial plain ("between rivers") + no natural defenses, open in all directions + L1 post-BC 2000 aridification / irrigation = life or death + L2 Sumerian city-states ~500k pop / first urbanization + L3 cuneiform / BC 1754 Hammurabi\'s Code 282 laws "eye for eye" / divine kingship + L4 BC 1894 Babylon founded → BC 1792-1750 Hammurabi unifies Mesopotamia → BC 1595 Hittites sack Babylon',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '汉谟拉比', en: 'Hammurabi' },
      role: { cn: '巴比伦王 BC 1792-1750', en: 'King of Babylon BC 1792-1750' },
      bio: {
        cn: '你 30 年间把分裂的两河流域统一起来。BC 1754 你颁布 282 条法律，刻在 2.25 米黑石碑上立在城里 — "国王不再说了算，法律说了算"，但法律也保护贵族多过奴隶。',
        en: 'Over 30 years you unified divided Mesopotamia. In BC 1754 you carved 282 laws onto a 2.25m black stone in your city — "the king no longer decides, the law decides." But the law protected nobles more than slaves.',
      },
      hook: {
        cn: '如果你是汉谟拉比 — 你能写「眼还眼，牙还牙」，但贵族打瞎奴隶眼只罚款。你想真的"公平"还是想稳住贵族支持？',
        en: 'If you were Hammurabi — you wrote "eye for eye," but if a noble blinded a slave it was only a fine. Do you want real fairness, or do you need the nobles on your side?',
      },
    },
    {
      emoji: '📜',
      name: { cn: '神庙抄写员', en: 'Temple Scribe' },
      role: { cn: '楔形文字精英 / 神庙记录官', en: 'Cuneiform-literate temple official' },
      bio: {
        cn: '你从 8 岁起在 edubba（"泥板屋"）学楔形文字 12 年。你记账、记法律、记神话。全国只有 ~5% 男性识字，你是其中之一 — 你的笔头决定谁的债被记录、谁的丰收被报告。',
        en: 'From age 8 you spent 12 years in the edubba ("tablet house") learning cuneiform. You keep ledgers, laws, myths. Only ~5% of men can read; you\'re one of them — your stylus decides whose debt is recorded, whose harvest is reported.',
      },
      hook: {
        cn: '如果你是抄写员 — 国王要你把法典刻成石碑，可你知道有些条款对穷人不公。你会按原文刻还是悄悄改？',
        en: 'If you were a scribe — the king wants the code carved in stone, but you know some clauses are unjust to the poor. Do you carve faithfully, or quietly tweak the wording?',
      },
    },
    {
      emoji: '🛐',
      name: { cn: '马尔杜克祭司', en: 'Priest of Marduk' },
      role: { cn: '巴比伦主神祭司 / 神权代表', en: 'Priest of Babylon\'s chief god' },
      bio: {
        cn: '你管理城里最高的金字形神塔 ziggurat。新年节你主持仪式 — 国王要在 Marduk 神像前被你打耳光、流泪、宣誓善治，否则失去执政合法性。神权 + 王权交织。',
        en: 'You manage the city\'s tallest ziggurat. At New Year, you slap the king before Marduk\'s statue — he must weep and swear good rule, or lose legitimacy. Religion and kingship are interlocked.',
      },
      hook: {
        cn: '如果你是祭司 — 汉谟拉比说"我是从神那里得到法律的"。但你知道法典是他写的。你会戳穿他还是配合他演这场戏？',
        en: 'If you were a priest — Hammurabi claims his laws come from the god. You know he wrote them. Do you expose him, or play along to keep the system stable?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '两河农夫', en: 'Mesopotamian Farmer' },
      role: { cn: '灌溉渠下的小麦农户', en: 'Wheat farmer dependent on irrigation' },
      bio: {
        cn: '你的田离运河 200 米。每年春天你跟邻居为水分配吵架。法典第 53 条说"如果你不修堤导致邻田被淹，要赔偿粮食"— 这跟你直接相关。但要是你欠债还不上，你老婆要被卖去当抵押 3 年。',
        en: 'Your field is 200m from the canal. Every spring you fight neighbors over water. Law 53 says "if you neglect dikes and flood another\'s field, you owe grain" — directly about you. But if you can\'t pay debts, your wife is sold into bondage for 3 years.',
      },
      hook: {
        cn: '如果你是农夫 — 法典是石头上死的字，可你跟邻居争水时官员收谁钱多就听谁的。"法律面前人人平等"对你是真的吗？',
        en: 'If you were a farmer — the code is dead text on stone, but in real disputes the official sides with whoever bribes more. Is "equality before the law" true for you?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Nin（虚构同龄人）', en: 'Nin (fictional peer)' },
      role: { cn: '13 岁，抄写员的女儿', en: '13-year-old, scribe\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是神庙抄写员，破例教你认楔形字（女孩通常不学）。你看着工人把石碑立到城门 — 上面 282 条字你能读 80 条。你想长大后开自己的"泥板屋"教别的女孩。',
        en: 'Same age as Willow. Your father, a scribe, secretly taught you cuneiform (rare for girls). You watch workmen erect the stele at the city gate — you can read 80 of its 282 laws. You dream of opening your own tablet-house for girls.',
      },
      hook: {
        cn: '法典第 195 条：「儿子打父亲，砍手」。可没有一条说「丈夫打妻子要受罚」。你跟 Willow 隔了 3700 年 — "法律保护谁"这个问题在你们之间一直没解决，对吗？',
        en: 'Law 195: "If a son strikes his father, his hand is cut off." But no law punishes a husband who beats his wife. Across 3700 years between you and Willow — "whom does law protect?" remains unanswered, doesn\'t it?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Sumerians 苏美尔人 — 第一个文明（Ur 乌尔等城邦）',
      'Cuneiform 楔形文字 — 已知最早文字系统',
      'Ziggurat 金字形神塔 — 神庙建筑',
      'Hammurabi\'s Code 汉谟拉比法典 BC 1754 — 282 条 / "以眼还眼"',
      'Epic of Gilgamesh《吉尔伽美什史诗》— 已知最早文学作品',
      'Wheel 轮子 + Plow 犁 + Sailboat 帆船 — 早期发明',
      'Babylon 巴比伦 / Assyria 亚述 / Persia 波斯 — 后续帝国',
      'Polytheism 多神教 / Marduk 马尔杜克 — 巴比伦主神',
    ],
    en: [
      'Sumerians — world\'s first civilization (Ur and other city-states)',
      'Cuneiform — earliest known writing system',
      'Ziggurat — stepped temple architecture',
      'Hammurabi\'s Code, BC 1754 — 282 laws / "eye for eye"',
      'Epic of Gilgamesh — earliest known literature',
      'Wheel + plow + sailboat — early inventions',
      'Babylon → Assyria → Persia — successor empires',
      'Polytheism / Marduk — chief god of Babylon',
    ],
  },
};
