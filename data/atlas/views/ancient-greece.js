// view: Classical Athens vs Persia · 480 BC
// Grade 6 · HSS-6.4 (Ancient Greece)
export const VIEW = {
  id: 'ancient-greece',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-6.4',   label: { cn: 'CA HSS-6.4 古希腊 — 雅典民主 / 哲学 / 艺术', en: 'CA HSS-6.4 Ancient Greece — Athenian democracy / philosophy / arts' } },
  ],
  title:    { cn: '希腊 vs 波斯', en: 'Athens vs Persia' },
  subtitle: { cn: '480 BC · 民主诞生与生存之战', en: '480 BC · Birth of democracy + war for survival' },
  year: -480,

  camera: {
    projection: 'mercator',
    center: [30, 38],     // 地中海东
    scale: 600,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'classical-bc500',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_bc500',
      highlightId:     'greek-city-states',
    },
    C:  { civs: 'classical-bc500' },
    F:  { ids: ['bosporus', 'gibraltar'] },
    L4: {
      pins: ['athens-bc480', 'salamis', 'marathon', 'sparta-bc500', 'persepolis-bc500'],
    },
  },

  causalSummary: {
    cn: 'L0 山地 + 海岛地形（地理是背景而非决定因素）+ L2 劳里乌姆银矿 / 海贸 / 桨手 thetes 平民阶级 / 25 万都市 + L3 公民议会 / Cleisthenes BC 508 立宪 + L4 波斯军事压力推动海军扩张 — 民主形成多因合力',
    en: 'L0 mountainous archipelago (geography as backdrop, not determinant) + L2 Laurium silver mines / sea trade / thetes naval rower class / 250k city + L3 Cleisthenes\' constitution BC 508 + L4 Persian military pressure drove naval expansion — democracy emerged from multi-causal convergence',
  },

  keyFigures: [
    {
      emoji: '🏛️',
      name: { cn: 'Pericles 伯利克里', en: 'Pericles' },
      role: { cn: '雅典将军 / 民主黄金期领袖', en: 'Athenian general / leader of democratic golden age' },
      bio: {
        cn: '你 30 年间主导雅典民主（BC 461-429）— 给穷公民发"开会津贴"让他们能停工去公民大会投票。你下令建帕特农神庙。你在大瘟疫中死去（BC 429）— 你死后雅典走向民粹和败亡。',
        en: 'For 30 years you led Athens (BC 461-429) — paying poor citizens to attend the assembly. You commissioned the Parthenon. You died in the plague (BC 429) — after which Athens fell to populism and defeat.',
      },
      hook: {
        cn: '如果你是 Pericles — 民主好但慢，遇到斯巴达战争你想要 30 个聪明人快决策还是 5000 个普通人投票？快 vs 公平，你怎么选？',
        en: 'If you were Pericles — democracy is good but slow. In war with Sparta, do you want 30 smart men deciding fast, or 5,000 ordinary men voting? Speed vs fairness — your call?',
      },
    },
    {
      emoji: '🛡️',
      name: { cn: '斯巴达战士', en: 'Spartan Warrior' },
      role: { cn: '从 7 岁开始训练的职业军人', en: 'Career soldier trained from age 7' },
      bio: {
        cn: '你在 Sparta 长大。7 岁离家进 agoge 军训学校 — 鞭打、饿肚子、偷食物训练。20 岁入军队，30 岁能结婚但要继续住兵营。Sparta 公民只占 1/10，奴役 9/10 黑劳士（helots）— 你必须强壮，否则黑劳士会反叛杀你。',
        en: 'Raised in Sparta. At 7 you entered the agoge — beatings, hunger, stealing-food drills. Joined the army at 20; could marry at 30 but lived in barracks. Spartans are 10% of the population enslaving 90% helots — you must stay strong or they revolt and kill you.',
      },
      hook: {
        cn: '如果你是斯巴达人 — 雅典人骄傲于"民主投票"，可你骄傲于"我们 300 人能挡住波斯 10 万"。你觉得"自由人"的定义是议会发言还是战场赴死？',
        en: 'If you were Spartan — Athenians boast of voting; you boast that "300 of us held off 100,000 Persians." Is "free man" defined by speaking in assembly, or dying on the battlefield?',
      },
    },
    {
      emoji: '📜',
      name: { cn: 'Delphi 德尔斐神谕', en: 'Oracle of Delphi' },
      role: { cn: '阿波罗神庙女祭司 / 最高权威神谕', en: 'Priestess of Apollo / supreme religious authority' },
      bio: {
        cn: '你是 Pythia — 在德尔斐神庙地缝旁吸入气体进入恍惚状态，传达阿波罗的话。城邦决定打仗、立法、远征前都来问你。BC 480 雅典问"波斯打来了怎么办"，你说"躲到木墙后面"— 后来 Themistocles 解读为"造船"，雅典海军建成赢了 Salamis。',
        en: 'You are the Pythia — at Delphi you inhale fumes from a fissure, enter trance, speak Apollo\'s words. City-states consult you before war, lawmaking, expeditions. In BC 480 Athens asked about Persia; you said "trust the wooden walls" — Themistocles read it as "ships," built the navy, won Salamis.',
      },
      hook: {
        cn: '如果你是神谕 — 你的话故意模糊（"木墙"既能是堡垒也能是船）。你是真听到神还是政治高手把控局势？',
        en: 'If you were the Oracle — your words are deliberately ambiguous ("wooden walls" = fort or ship). Do you actually hear the god, or are you a political genius shaping events?',
      },
    },
    {
      emoji: '⚔️',
      name: { cn: '雅典 hoplite 重装步兵', en: 'Athenian Hoplite' },
      role: { cn: '中产公民 / 自费武装的步兵', en: 'Middle-class citizen-soldier (self-armed)' },
      bio: {
        cn: '你是中产公民 — 有自己的农场，能买得起 25 公斤的青铜盔甲、长矛、圆盾（hoplon）。打仗时你跟邻居站成 phalanx 方阵。你既种地又打仗又投票 — "公民兵 = 民主政治"。',
        en: 'You\'re middle-class — own a farm, can afford 25kg of bronze armor, spear, round shield (hoplon). In war you stand in phalanx beside your neighbors. You farm, fight, and vote — "citizen-soldier = democracy."',
      },
      hook: {
        cn: '如果你是 hoplite — 民主好，但每年得停 30 天去打仗。你儿子不用付盔甲费就能投票（穷划桨手 thetes 阶级）— 你心里平衡吗？',
        en: 'If you were hoplite — democracy is good, but you spend 30 days a year fighting. Your poor neighbor (thetes class, oarsmen) votes without buying armor. Does that feel fair?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Hippias（虚构同龄人）', en: 'Hippias (fictional peer)' },
      role: { cn: '13 岁，hoplite 的儿子', en: '13-year-old, hoplite\'s son' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是 hoplite，BC 480 出征 Salamis。你在雅典学校学几何、修辞、音乐。你妹妹不上学（女孩 ~14 岁就嫁人）。你想当哲学家但爸爸说"先去当公民兵证明你是真男人"。',
        en: 'Same age as Willow. Your father is a hoplite, off to Salamis BC 480. You learn geometry, rhetoric, music at school. Your sister doesn\'t go (girls marry at ~14). You want to be a philosopher but father says "first prove yourself as a citizen-soldier."',
      },
      hook: {
        cn: '2500 年后 Willow 在加州学雅典民主 — 但她在班上跟男生平等发言。你妹妹在 BC 480 不能投票、不能上学。"民主"这个礼物为什么花了 2500 年才到她妹妹手里？',
        en: '2500 years later, Willow studies Athenian democracy in California, debating boys as equals. Your sister in BC 480 can\'t vote or attend school. Why did democracy\'s gift take 2500 years to reach her?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Polis 城邦 — Athens 雅典 vs Sparta 斯巴达',
      'Direct democracy 直接民主（Cleisthenes 改革 BC 508）',
      'Persian Wars 希波战争：Marathon BC 490 / Salamis BC 480',
      'Pericles 伯利克里 — 雅典黄金时代 / Parthenon 帕特农神庙',
      'Peloponnesian War 伯罗奔尼撒战争 BC 431-404（雅典败）',
      'Socrates / Plato《理想国》/ Aristotle — 三大哲人',
      'Alexander the Great 亚历山大大帝 BC 336-323 / Hellenistic 希腊化',
      'Homer《伊利亚特》《奥德赛》/ Olympic Games BC 776',
    ],
    en: [
      'Polis (city-state) — Athens vs Sparta',
      'Direct democracy (Cleisthenes\' reforms, BC 508)',
      'Persian Wars: Marathon BC 490 / Salamis BC 480',
      'Pericles — Athenian Golden Age / Parthenon',
      'Peloponnesian War BC 431-404 (Athens loses)',
      'Socrates / Plato (Republic) / Aristotle',
      'Alexander the Great BC 336-323 / Hellenistic culture',
      'Homer (Iliad, Odyssey) / Olympic Games BC 776',
    ],
  },
};
