// view: Pre-Columbian Americas · 1450 · Aztec + Inca peak
// Grade 7 · HSS-7.7
export const VIEW = {
  id: 'pre-columbian',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.7', label: { cn: 'CA HSS-7.7 中南美原生文明（玛雅 / 阿兹特克 / 印加）', en: 'CA HSS-7.7 Meso/South American civilizations (Maya / Aztec / Inca)' } },
    { code: 'AP-WHAP-1.6', label: { cn: 'AP World Unit 1.6 美洲文明发展', en: 'AP World Unit 1.6 American civilizations' } },
  ],
  title:    { cn: '前哥伦布美洲', en: 'Pre-Columbian Americas' },
  subtitle: { cn: '1450 · 阿兹特克 + 印加双峰', en: '1450 · Aztec + Inca twin peaks' },
  year: 1450,

  camera: {
    projection: 'mercator',
    center: [-85, 5],
    scale: 280,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'pre-columbian-1450',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1492',
      highlightId:     'aztec-empire',
    },
    F:  { ids: ['andes'] },
    L4: {
      pins: ['tenochtitlan-1450', 'cuzco-1450', 'chichen-itza', 'machu-picchu-future', 'cahokia-late'],
    },
  },

  causalSummary: {
    cn: 'L0 中美高原（墨西哥谷地 2200m）+ 安第斯山脉（垂直气候带）+ 玛雅雨林 + L1 后古典暖期渐入小冰期 + L2 阿兹特克 ~600 万 / 印加 ~1000 万 / 玛雅各城邦合 ~300 万（估算，区间存在争议）+ L3 玉米 + 神权 + 阶梯金字塔 / 阿兹特克贡赋制 / 印加 quipu 结绳记账 + 米塔劳役 + L4 1428 阿兹特克三联同盟 → 1438 印加帕查库特克帝国扩张 → 1450 双峰期 → 1521 西班牙灭阿兹特克 / 1533 灭印加',
    en: 'L0 Mesoamerican highland (Mexico Valley 2200m) + Andes vertical climate zones + Maya rainforest + L1 Post-Classic Warm fading to Little Ice Age + L2 Aztec ~6M / Inca ~10M / Maya city-states ~3M (estimates, ranges contested) + L3 maize + theocracy + step pyramids / Aztec tribute system / Inca quipu knot-records + mit\'a labor + L4 1428 Aztec Triple Alliance → 1438 Inca Pachacuti\'s expansion → 1450 twin peaks → 1521 Spanish conquer Aztec / 1533 conquer Inca',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '阿兹特克皇帝 Moctezuma II', en: 'Aztec Emperor Moctezuma II' },
      role: { cn: '阿兹特克最后一位独立皇帝', en: 'Last independent Aztec emperor' },
      bio: {
        cn: '你 1502 继位 Tenochtitlan — 一座建在湖中央的 25 万人城市，比同期欧洲任何城市都大。你统治阿兹特克帝国 ~600 万人，征服周边部落收贡品 + 活祭俘虏给太阳神。1519 Cortés 来了你犹豫不决 — 是不是 Quetzalcoatl 神回来？1520 你在自家宫殿里被自己人或西班牙人打死。',
        en: 'You ascended in 1502 to rule Tenochtitlán — a 250,000-person lake city larger than any contemporary European city. You ruled the Aztec Empire of ~6 million, conquering tribes for tribute + human sacrifices to the sun god. In 1519 when Cortés arrived you hesitated — was this Quetzalcoatl returning? In 1520 you died in your own palace, killed by your own people or by the Spanish.',
      },
      hook: {
        cn: '如果你是 Moctezuma — 你统治史上最大的 Mesoamerican 帝国，但 600 个西班牙人加 10 万本地盟友推翻了你。你是被外人灭还是被你自己征服的部落联手反扑？',
        en: 'If you were Moctezuma — you ruled the greatest Mesoamerican empire, but 600 Spaniards plus 100,000 native allies brought you down. Were you destroyed by foreigners, or by your own tributary tribes who finally turned against you?',
      },
    },
    {
      emoji: '⚔️',
      name: { cn: 'Tlaxcalan 部落领主', en: 'Tlaxcalan Chief' },
      role: { cn: '阿兹特克世仇邻国首领', en: 'Leader of Aztec\'s blood-feud rivals' },
      bio: {
        cn: '你是 Tlaxcala — 阿兹特克唯一没征服的邻国。100 年来你的人被阿兹特克抓去活祭。1519 Cortés 来了 — 你判断"敌人的敌人是朋友"，给他 6000 战士跟着打 Tenochtitlan。没你 Cortés 灭不了阿兹特克。你以为换西班牙主子比阿兹特克好 — 但 50 年后你的部落也被殖民。',
        en: 'You\'re Tlaxcala — the one neighbor Aztecs never conquered. For 100 years they grabbed your people for sacrifice. In 1519 Cortés arrived — you reasoned "the enemy of my enemy is my friend," giving him 6,000 warriors to attack Tenochtitlán. Without you, Cortés couldn\'t have conquered Aztec. You thought trading Aztec masters for Spanish ones was better — 50 years later your people were also colonized.',
      },
      hook: {
        cn: '如果你是 Tlaxcalan — 你的"短期理性"（推翻血仇）酿成"长期灾难"（被殖民）。被本地强权打 vs 被外来强权打，怎么选？',
        en: 'If you were Tlaxcalan — your short-term reasoning (overthrow the blood-feud rival) led to long-term catastrophe (colonization). Beaten by a local power, or by a distant one — your call?',
      },
    },
    {
      emoji: '🛐',
      name: { cn: '玛雅祭司天文学家', en: 'Maya Priest-Astronomer' },
      role: { cn: '玛雅古城遗民 / 历法守护者', en: 'Maya remnant / calendar keeper' },
      bio: {
        cn: '玛雅古典期 250-900 已经崩溃 500 年（生态 + 干旱 + 内战），你住后古典 Chichen Itza 末期。你能算出每颗星的位置 — 玛雅独立发明"零"的概念（早于印度）。你看着祖先石刻，一点点失传写法。1450 年你的城邦只剩几千人。',
        en: 'The Classic Maya collapsed 500 years ago (ecology + drought + war); you live in the late Postclassic at Chichen Itzá. You can calculate every planet\'s position — Maya independently invented "zero" before Gupta India. You look at ancestral inscriptions and watch the script slowly slip from memory. By 1450 your city has only a few thousand people.',
      },
      hook: {
        cn: '如果你是玛雅祭司 — 你的文明在没有外人入侵下自己崩溃了 500 年。这告诉你"文明不死于敌人，死于自己"— 这个判断对今天的你（玛雅人后裔活到今天 600 万人）有意义吗？',
        en: 'If you were Maya priest — your civilization collapsed without foreign invasion 500 years ago. "Civilizations die not from enemies but from themselves" — does this lesson still apply today (6 million Maya descendants alive now)?',
      },
    },
    {
      emoji: '⛏️',
      name: { cn: '印加 mit\'a 劳工', en: 'Inca Mit\'a Laborer' },
      role: { cn: '安第斯山民 / 强制轮班劳工', en: 'Andean villager / rotating-corvée laborer' },
      bio: {
        cn: '你住安第斯山 4000 米高地。印加帝国实行 mit\'a 制 — 每个家庭每年要派一人去帝国干活 90 天（修路、矿工、士兵、种皇家田）。回报是国家粮仓在荒年发粮给你。你不识字，但听 quipu（结绳）记账员算你村今年贡献多少。',
        en: 'You live at 4,000m in the Andes. The Inca run mit\'a — each household sends one person yearly for 90 days of state work (roads, mining, military, royal fields). In return, royal granaries feed you in lean years. You can\'t read, but a quipu (knot-cord) recordkeeper tallies your village\'s contributions.',
      },
      hook: {
        cn: '如果你是 mit\'a 劳工 — 印加用强制劳役换粮食保险。这是"原始社会主义"还是"奴役换温饱"？500 年后西班牙殖民用 mit\'a 名义把你送进银矿干到死 — 同一个词不同的含义。',
        en: 'If you were mit\'a laborer — the Inca traded forced labor for famine insurance. "Primitive socialism" or "servitude for survival"? 500 years later Spanish colonizers used the same word "mit\'a" to send you to die in silver mines — the word, two meanings.',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Cuauhtli（虚构同龄人）', en: 'Cuauhtli (fictional peer)' },
      role: { cn: '13 岁，Tenochtitlan 战士学校学生', en: '13-year-old, Tenochtitlán warrior-school student' },
      bio: {
        cn: '你跟 Willow 同龄。你在 telpochcalli 战士学校 — 学战斗、礼仪、历法。你梦想以后当 Eagle 鹰士或 Jaguar 美洲豹士（最高军衔）。你住在 Tenochtitlan 浮岛上 — 25 万人的城市，比 1492 年的塞维利亚大 5 倍。你不知道 28 年后 Cortés 会来，你的世界会消失。',
        en: 'Same age as Willow. You attend telpochcalli warrior school — combat, ritual, calendar. You dream of becoming an Eagle Knight or Jaguar Knight (highest ranks). You live on Tenochtitlán\'s floating island — a 250,000-person city, 5× bigger than Seville in 1492. You don\'t know that in 28 years Cortés will come and your world will end.',
      },
      hook: {
        cn: '500 年后 Willow 在加州学校学"哥伦布发现新大陆"— 但你的城市比哥伦布的家乡还大。"发现"这个词是谁的视角？她跟你之间隔了 500 年和 4500 公里 — 她能怎么补上你？',
        en: '500 years later, Willow learns "Columbus discovered the New World" — but your city was bigger than Columbus\'s hometown. Whose perspective does "discovered" come from? 500 years and 4,500 km separate you — how can she include your story?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Aztec 阿兹特克 — Tenochtitlan（湖中浮城）/ Triple Alliance 1428',
      'Moctezuma II 1519 被擒（1520 死）/ Tenochtitlan 1521 陷于 Cortés（守城者 Cuauhtémoc）',
      'Inca 印加 — Pachacuti 帕查库特克 1438 扩张 / Cuzco 首都',
      'Quipu 结绳记账 / Mit\'a 米塔劳役制（轮值劳动）',
      'Machu Picchu 马丘比丘 — 印加皇家避暑山庄',
      'Maya 玛雅 — Tikal（古典期 250-900）/ Chichen Itza（终末古典-后古典 800-1200）',
      'Maya 数学：独立发明零（约公元 3 世纪 — 西半球早于印度笈多 / 巴比伦传统）/ 长纪历 / 天文历法',
      'Step pyramids 阶梯金字塔 / Human sacrifice 人祭（阿兹特克）',
    ],
    en: [
      'Aztec — Tenochtitlan (lake city) / Triple Alliance 1428',
      'Moctezuma II captured 1519 (dies 1520) / Tenochtitlán falls to Cortés 1521 under Cuauhtémoc',
      'Inca — Pachacuti expansion 1438 / Cuzco capital',
      'Quipu knot-records / Mit\'a labor system (rotating service)',
      'Machu Picchu — Inca royal estate',
      'Maya — Tikal (Classic 250-900) / Chichen Itza (Terminal-Classic-Postclassic 800-1200)',
      'Maya independently developed zero (concept 3rd c. CE — earlier than Gupta India and Babylonia in this hemisphere) / Long Count calendar / astronomy',
      'Step pyramids / human sacrifice (Aztec)',
    ],
  },
};
