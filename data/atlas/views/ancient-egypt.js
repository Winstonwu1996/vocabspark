// view: Ancient Egypt Old Kingdom · 2500 BC
// Grade 6 · HSS-6.2 (Egypt)
export const VIEW = {
  id: 'ancient-egypt',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-6.2',   label: { cn: 'CA HSS-6.2 古埃及（金字塔/法老/尼罗河）', en: 'CA HSS-6.2 Ancient Egypt (pyramids/pharaohs/Nile)' } },
    { code: 'CA-HSS-6.1',   label: { cn: 'CA HSS-6.1 美索不达米亚（同期）', en: 'CA HSS-6.1 Mesopotamia (contemporary)' } },
    { code: 'CA-HSS-6.5',   label: { cn: 'CA HSS-6.5 印度（同期 Indus Valley）', en: 'CA HSS-6.5 Ancient India (Indus Valley)' } },
  ],
  title:    { cn: '古埃及 + 古文明并立', en: 'Ancient Egypt + parallel civilizations' },
  subtitle: { cn: '2500 BC · 古王国巅峰 · 五大河谷文明同时存在', en: '2500 BC · Old Kingdom peak · five river-valley civilizations' },
  year: -2500,

  camera: {
    projection: 'mercator',
    center: [55, 30],
    scale: 350,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'ancient-civs-bc2500',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_bc2000',
      highlightId:     'egypt-bc2500',
    },
    F:  { ids: ['silk-road', 'great-wall', 'gibraltar', 'bosporus'].filter(() => false).concat(['gibraltar']) },  // 简化，只保留直布罗陀
    L4: {
      pins: ['giza', 'memphis-egypt', 'ur', 'mohenjo-daro'],
    },
  },

  causalSummary: {
    cn: 'L0 尼罗河 + 三面封闭 + L1 北非湿润期 + L2 ~100 万人口 / 圣书体 / 铜器 + L3 法老神王 / 中央官僚 / 太阳历 + L4 第三-第四王朝金字塔工程',
    en: 'L0 Nile + 3-sided isolation + L1 N. African humid period + L2 ~1M pop/hieroglyphs/copper + L3 god-king/central bureaucracy/solar calendar + L4 3rd-4th Dynasty pyramid projects',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '法老胡夫', en: 'Pharaoh Khufu' },
      role: { cn: '第四王朝法老 / 大金字塔建造者', en: '4th Dynasty pharaoh / builder of the Great Pyramid' },
      bio: {
        cn: '你是神王，半神半人。你下令建吉萨大金字塔 — 230 万块石头、每块 2.5 吨、20 年工期。你不是奴役奴隶建的（考古发现工人有面包啤酒+医疗）— 是动员上万自由农民在尼罗河泛滥季劳动。',
        en: 'You are a god-king, half-divine. You ordered the Great Pyramid of Giza — 2.3M blocks, 2.5 tons each, 20-year project. Not built by slaves (archaeology shows workers got bread, beer, medical care) — you mobilized tens of thousands of free farmers during Nile flood season.',
      },
      hook: {
        cn: '如果你是胡夫 — 一座金字塔耗光国库二十年。你真的觉得死后能成神？还是你只是想让 4500 年后的人记住你的名字？（你做到了。）',
        en: 'If you were Khufu — one pyramid drained the treasury for 20 years. Did you truly believe you\'d become a god? Or did you just want people 4500 years later to know your name? (You succeeded.)',
      },
    },
    {
      emoji: '📜',
      name: { cn: '维齐尔（首相）', en: 'Vizier' },
      role: { cn: '法老首席官 / 全国行政长官', en: 'Pharaoh\'s chief administrator' },
      bio: {
        cn: '你是法老下面权力最大的人 — 收税、管法律、管粮仓、管金字塔工程。你每天要看 100+ 块莎草纸文件。著名维齐尔 Imhotep（伊姆霍特普）是建第一座阶梯金字塔的人，死后被神化。',
        en: 'You\'re the second-most powerful person — taxation, law, grain stores, pyramid projects. You read 100+ papyrus documents daily. The famed vizier Imhotep designed the first stepped pyramid and was deified after death.',
      },
      hook: {
        cn: '如果你是维齐尔 — 法老想再建一座更大的金字塔，可国库已空。你是直谏说"不"还是顺意说"我们总能找到办法"？',
        en: 'If you were vizier — Pharaoh wants an even bigger pyramid, but the treasury is empty. Do you say "no" honestly, or "we\'ll find a way" to please him?',
      },
    },
    {
      emoji: '⛵',
      name: { cn: '腓尼基商人', en: 'Phoenician Trader' },
      role: { cn: '从黎巴嫩来卖雪松木的商队头目', en: 'Caravan leader from Lebanon selling cedar' },
      bio: {
        cn: '你从黎凡特海岸坐船来 Memphis 卖雪松木 — 埃及没有大树，建神庙、棺木都靠你这种外贸。你看到金字塔时震惊到说不出话。但你也看到 — 法老用黄金换你的木头，比尼罗河泛滥时的水还慷慨。',
        en: 'You sail from the Levantine coast to Memphis selling cedar — Egypt has no big trees; temples and coffins all need your imports. The pyramid leaves you speechless. You also notice — Pharaoh trades gold for your wood as freely as the Nile floods.',
      },
      hook: {
        cn: '如果你是商人 — 你看到一个文明把全部财富埋在沙漠下让一个死人陪葬。你觉得这是伟大还是愚蠢？',
        en: 'If you were the trader — you see a civilization burying all its wealth in the desert for one dead man. Is that magnificent, or insane?',
      },
    },
    {
      emoji: '🪨',
      name: { cn: '金字塔工人', en: 'Pyramid Worker' },
      role: { cn: '尼罗河泛滥季应召农夫', en: 'Conscripted farmer during Nile flood' },
      bio: {
        cn: '你是从尼罗河三角洲应召来的农夫。每年 7-10 月尼罗河泛滥不能种田，你和 5000 同乡到吉萨工地干 3 个月。每天有面包啤酒大蒜，每月有牛肉。死了的话你的名字会刻在工人墓上 — 这是埃及人最在乎的"留名"。',
        en: 'You\'re a farmer drafted from the Delta. July-October the Nile floods so you can\'t farm — you and 5,000 villagers go to Giza for 3 months. Daily bread, beer, garlic; monthly beef. If you die, your name is carved in the workers\' tomb — Egyptians value being remembered above all.',
      },
      hook: {
        cn: '如果你是工人 — 你不被强迫，但拒绝就拿不到面包。一块石头压死你兄弟，监工说"他现在跟法老一起去来世了"。这话你信吗？',
        en: 'If you were the worker — you\'re not enslaved, but refusing means no bread. A block crushes your brother; the foreman says "he goes to the afterlife with Pharaoh now." Do you believe him?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Khaemwaset（虚构同龄人）', en: 'Khaemwaset (fictional peer)' },
      role: { cn: '13 岁，抄写员学徒', en: '13-year-old, scribe apprentice' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸送你到神庙学校学圣书体（hieroglyphs）— 学 12 年。同班 30 个男孩，没有女孩。老师说"会写字 = 不用搬石头"。你每天练 200 个字，手指起茧。',
        en: 'Same age as Willow. Your father sent you to temple school to learn hieroglyphs — 12-year program. 30 boys in your class, no girls. Teachers say "writing = no stone-hauling." Daily 200 characters; your fingers callous.',
      },
      hook: {
        cn: 'Willow 在 2026 年敲键盘学英语 — 你在 BC 2500 蘸墨学圣书体。两件事都是用文字"逃出体力劳动"。文字真能改变命运吗？',
        en: 'Willow types English in 2026 — you ink hieroglyphs in BC 2500. Both use literacy to escape manual labor. Does writing really change one\'s fate?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Pharaoh 法老 — 神王（god-king），政教合一',
      'Hieroglyphs 圣书体象形文字 / Rosetta Stone 罗塞塔石碑（破译关键）',
      'Great Pyramid of Giza 吉萨大金字塔（Khufu 胡夫王，~BC 2560）',
      'Old / Middle / New Kingdom 古王国 / 中王国 / 新王国分期',
      'Polytheism 多神教：Ra 太阳神 / Osiris 冥王 / Isis',
      'Mummification 木乃伊 + Book of the Dead《亡灵书》',
      'Hatshepsut 女法老 / Tutankhamun 图坦卡蒙 / Ramses II 拉美西斯二世',
      'Nile flood 尼罗河泛滥 → 农业 + 太阳历',
    ],
    en: [
      'Pharaoh — god-king, theocratic ruler',
      'Hieroglyphs / Rosetta Stone (key to decipherment)',
      'Great Pyramid of Giza (Khufu, ~BC 2560)',
      'Old / Middle / New Kingdom periodization',
      'Polytheism: Ra (sun), Osiris, Isis',
      'Mummification + Book of the Dead',
      'Hatshepsut (female pharaoh) / Tutankhamun / Ramses II',
      'Nile flood → agriculture + solar calendar',
    ],
  },
};
