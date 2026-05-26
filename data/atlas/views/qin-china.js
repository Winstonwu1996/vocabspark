// view: Qin Unification · 公元前 221 · East Asia
// Grade 6 · CA HSS-6.6 (Ancient China) · 中国课纲 七上 · AP World Period 1
// basemap 注：world_bc200 是最接近的快照（秦 221 BCE → 早期汉 BC200）；
//   秦帝国本身没有单独的 polities 集，借 'maurya-bc250' bloc 里的 han-bc200
//   作为「同一块地理 + 接续政权」的占位（汉承秦制，地理范围近似），并配
//   customPolygon 在 deepLearnUrl 跳转后由深度学课正名为「秦」。
export const VIEW = {
  id: 'qin-china',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/qin-china-221bce?from=atlas&atlasId=qin-china',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-6.6',          label: { cn: 'CA HSS-6.6 古代中国 — 秦统一 / 始皇帝 / 长城 / 中央集权', en: 'CA HSS-6.6 Ancient China — Qin unification / First Emperor / Great Wall / centralized rule' } },
    { code: 'CN-7SHANG-L9-10',     label: { cn: '中国课纲 七上 第 9-10 课 秦统一中国', en: 'PRC Grade 7 (vol.1) Lessons 9-10 — Qin Unification of China' } },
    { code: 'AP-WHAP-1.2',         label: { cn: 'AP World Period 1 (state-building 1200 BCE-c.600 CE)', en: 'AP World Period 1 (state-building 1200 BCE-c.600 CE)' } },
  ],
  title:    { cn: '秦统一中国', en: 'Qin Unification of China' },
  subtitle: { cn: '公元前 221 · 第一个皇帝 · 郡县制 + 书同文 + 夯土长城', en: '221 BCE · First Emperor · commanderies + unified script + rammed-earth wall' },
  year: -221,

  camera: {
    projection: 'mercator',
    center: [110, 35],
    scale: 420,
    yOffset: 5,
  },

  layers: {
    L0: { show: true },
    L3: {
      // world_bc200 是手头最近的基础图（秦 221 BCE 之后仅十余年即入汉）；
      // 借 maurya-bc250 bloc 的 han-bc200 占位区分东亚地理范围。
      polities:        'maurya-bc250',
      modernPolities:  'east-asia-modern',
      yearSnapshot:    'world_bc200',
      highlightId:     'han-bc200',
    },
    C:  { civs: 'classical-bc500' },
    F:  { ids: ['yellow-river', 'yangtze', 'great-wall', 'mongolian-steppe', 'tibetan-plateau', 'himalaya'] },
    L4: {
      // 秦代专属城市 pin（咸阳 / 骊山 / 大泽乡）目前 events.js 没有；
      // 留空数组，主视觉锚点交给 L3 polities + F 长城 / 黄河 / 长江。
      pins: [],
    },
  },

  // 5 层因果（L0 地理 + L1 气候 + L2 民生 + L3 制度 + L4 事件），
  // 数据全部对账 notebook + narrative §1/§2，禁编造。
  causalSummary: {
    cn: 'L0 黄河 + 长江两大流域 + 战国七雄分据 + 秦居最西（紧邻西戎）+ L1 北境苦寒（蒙恬戍边、冬可冻裂手；运粮路长戍卒缺粮）+ L2 法家「耕战社会」编户齐民 + 连坐 + 凭军功授爵；统一后大兴长城 / 驰道 / 阿房宫 / 骊山陵，役使号称七十万 + L3 废分封 + 行郡县（李斯主张，全国设郡县、官由皇帝任免、地兵归中央）+ 书同文（小篆）+ 车同轨 + 度量衡 + 半两钱 + L4 前 230-221 十年灭六国（韩→赵→魏→楚→燕→齐）→ 前 221 称始皇帝 → 前 213 焚书 → 前 212 坑儒（《史记》记 460 余人，学界对规模存疑）→ 前 210 沙丘死 → 前 209 陈胜吴广起义 → 前 206 秦亡（不足十五年）',
    en: 'L0 Yellow + Yangtze twin basins + Seven Warring States divided + Qin in the far west (bordering the Rong) + L1 harsh northern frontier (Meng Tian garrisons; long supply lines, conscripts often short of grain) + L2 Legalist "farm-and-fight" society with household registration + group liability + rank-by-military-merit; after unification massive corvee on the wall / highways / Epang Palace / Mount Li tomb, a reported 700,000 levied + L3 enfeoffment abolished + commandery-county system imposed (Li Si\'s design: commanderies and counties nationwide, officials appointed and removed by the emperor, land and armies held by the center) + unified script (small-seal) + unified axle width + unified weights and measures + ban-liang coinage + L4 230-221 BCE ten-year conquest of the six states (Han, Zhao, Wei, Chu, Yan, Qi) → 221 BCE King Zheng titles himself First Emperor → 213 BCE burning of books → 212 BCE burying of scholars (the Records names ~460 ; modern historians question scale) → 210 BCE death at Shaqiu → 209 BCE Chen Sheng-Wu Guang revolt → 206 BCE Qin falls (under fifteen years from accession)',
  },

  // keyFigures: [] — getEffectiveKeyFiguresSync 会从 storyboard
  //   (qinShiHuangLens / liSiLens / conscriptLaborerLens) 自动派生
  keyFigures: [],

  examPoints: {
    cn: [
      '公元前 221 嬴政灭六国 → 自称「始皇帝」（皇帝称号的发明）',
      '废分封 / 行郡县制 — 中央集权两千年的奠基',
      '法家治国（信赏必罚 / 连坐 / 凭军功授爵）',
      '书同文（小篆，李斯主持）/ 车同轨 / 统一度量衡 / 半两钱',
      '北逐匈奴 + 蒙恬连筑长城（夯土，非明代砖石）',
      '焚书（前 213，李斯奏议，史料确凿）',
      '坑儒（前 212，《史记》记约 460 余人；现代学界对规模存疑）',
      '骊山陵 + 兵马俑（1974 农民打井时发现）',
      '前 210 沙丘之变（赵高、李斯篡改遗诏立胡亥）',
      '前 209 陈胜吴广起义「天下苦秦久矣」→ 前 206 秦亡',
      '汉承秦制 — 朝代二世而亡，制度活两千年',
    ],
    en: [
      '221 BCE: King Zheng destroys the six states → coins the title First Emperor',
      'Enfeoffment abolished; commandery-county system installed — foundation of 2,000 years of centralized rule',
      'Legalism as state ideology (strict reward/punishment, group liability, rank by military merit)',
      'Unified script (small-seal, led by Li Si) / unified axle width / unified weights and measures / ban-liang coin',
      'Meng Tian drives back the Xiongnu and joins the Warring States walls into the rammed-earth Great Wall (not the Ming brick wall)',
      'Burning of books, 213 BCE (Li Si\'s memorial, firmly attested)',
      'Burying of scholars, 212 BCE (the Records names ~460; modern historians question the scale)',
      'Mount Li tomb and the Terracotta Army (unearthed 1974 by farmers digging a well)',
      '210 BCE Shaqiu plot — Zhao Gao and Li Si alter the dying edict, install Huhai',
      '209 BCE Chen Sheng-Wu Guang revolt ("the realm has long suffered under Qin") → 206 BCE Qin falls',
      '"The Han inherited the Qin system" — the dynasty ended at the Second, the system lived 2,000 years',
    ],
  },
};
