// view: Black Death · 1347-1353 · Eurasia
//
// 关键验证：这是第三个 Topic — 不画新 SVG，只写一份配方。
export const VIEW = {
  id: 'black-death',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.6.7', label: { cn: 'CA HSS-7.6.7 黑死病社会经济影响', en: 'CA HSS-7.6.7 Plague social and economic impact' } },
    { code: 'AP-WHAP-2.6',  label: { cn: 'AP World Unit 2.6 交流网络的环境后果（含瘟疫）', en: 'AP World Unit 2.6 Environmental Consequences of Connectivity (incl. plague)' } },
  ],
  title:    { cn: '黑死病', en: 'Black Death' },
  subtitle: { cn: '1347-1353 · 欧亚 · 地图为 1300 快照', en: '1347-1353 · Eurasia · map shows 1300 snapshot' },
  year: 1347,

  camera: {
    projection: 'mercator',
    center: [25, 45],     // 地中海中心 — 横跨欧亚
    scale: 480,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities: 'eurasia-1347',
      modernPolities: 'eurasia-modern',
      yearSnapshot: 'world_1300',     // 真实 1300 年边界（距 1347 47 年）
      highlightId: 'great-khanate',
    },
    C:  { civs: 'eurasia-1347' },
    F:  { ids: ['silk-road', 'danube', 'alps', 'roman-roads', 'great-wall',
                'bosporus', 'gibraltar', 'suez-isthmus'] },
    L4: {
      pins: ['caffa-siege', 'messina', 'paris-1348', 'london-1348', 'avignon'],
    },
  },

  causalSummary: {
    cn: 'L0 欧亚草原走廊 + 黑海-地中海-陆路通道（物理通道）+ L1 14 世纪小冰期开始 + L2 高密度都市化 / 商队网络活跃 + L3 蒙古和平把欧亚政治整合 / 商路贯通无阻 + L4 卡法围城瘟尸入欧',
    en: 'L0 Eurasian steppe corridor + Black Sea–Mediterranean–overland routes (physical channels) + L1 Little Ice Age onset + L2 dense urbanization / active caravan networks + L3 Pax Mongolica politically integrates Eurasia / open trade + L4 plague-corpses at Caffa',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '英王 Edward III 爱德华三世', en: 'King Edward III of England' },
      role: { cn: '英格兰王 1327-1377', en: 'King of England 1327-1377' },
      bio: {
        cn: '你 1348 年正打着百年战争 — 跟法国争王位。8 月黑死病到伦敦，你女儿 Joan（15 岁）准备嫁西班牙王子，途中染病死。你的儿女 + 大臣 + 农民同样被瘟疫击倒 — 阶级在死神面前没用。1351 你颁《Statute of Labourers》强制农民工资不许涨 — 但失败了，劳工开始议价。',
        en: 'In 1348 you\'re fighting the Hundred Years\' War — claiming the French throne. In August, the plague hits London. Your 15-year-old daughter Joan, traveling to marry a Spanish prince, dies en route. Your children, advisors, and serfs fall alike — class doesn\'t matter to plague. In 1351 you decreed the Statute of Labourers freezing wages — but it failed; workers began bargaining.',
      },
      hook: {
        cn: '如果你是 Edward III — 黑死病死了你 1/3 子民。你颁法律压工资，但市场说"做工的人少了，工资就涨"。法律 vs 市场，哪个赢？',
        en: 'If you were Edward III — plague killed 1/3 of your subjects. You decree wages frozen, but the market says "fewer workers = higher pay." Law vs market — which wins?',
      },
    },
    {
      emoji: '⛪',
      name: { cn: '教皇 Clement VI 克雷芒六世', en: 'Pope Clement VI' },
      role: { cn: '阿维尼翁教皇 1342-1352', en: 'Pope at Avignon 1342-1352' },
      bio: {
        cn: '你住法国阿维尼翁（不在罗马 — 这时教廷在"巴比伦之囚"期）。瘟疫来时你听医生建议把自己关在两堆火中间 — 没染病。你下令保护犹太人（基督徒指控他们投毒井水然后屠杀）。你也允许集体赦罪 — 因为太多人来不及临终告解。',
        en: 'You live in Avignon, France (the Pope wasn\'t in Rome during the Babylonian Captivity). When plague hit, your doctor told you to stay between two fires — you survived uninfected. You issued bulls protecting Jews (Christians accused them of poisoning wells and massacred). You also authorized mass absolution — too many died without time for last rites.',
      },
      hook: {
        cn: '如果你是教皇 — "上帝惩罚罪人"是教会标准说法。但好人坏人一起死。你私下还信吗？还是你看穿了"瘟疫只是病不是惩罚"？',
        en: 'If you were Pope — "God punishes sinners" is the church\'s standard line. But the good and bad died alike. Do you privately still believe? Or did you see through it — "plague is just disease, not punishment"?',
      },
    },
    {
      emoji: '🏥',
      name: { cn: '佛罗伦萨医生', en: 'Florentine Doctor' },
      role: { cn: '城市医师 / 戴鸟嘴面具的医生', en: 'City physician / "plague doctor" beak-mask' },
      bio: {
        cn: '你受佛罗伦萨市政府雇佣治疗瘟疫患者。你戴鸟嘴面具（嘴里塞香草以为能挡瘴气）、穿黑色长袍。你试放血、敷烤洋葱、念祷告 — 都没用。你的同事 70% 死了。Boccaccio《十日谈》记录你的世界：贵族逃到山庄玩游戏，城里全是尸体。',
        en: 'You\'re hired by Florence to treat plague victims. You wear a beak-mask stuffed with herbs (thought to block "miasma") and a black robe. You try bloodletting, baked-onion poultices, prayers — nothing works. 70% of your colleagues die. Boccaccio\'s Decameron records your world: nobles flee to villas while corpses pile in the city.',
      },
      hook: {
        cn: '如果你是医生 — 你尽全力但救不了人。每天看 50 个人死。这种"无力"摧毁信念还是逼你重新思考"医学到底是什么"？',
        en: 'If you were the doctor — you tried everything; nobody got better. 50 deaths daily. Did this powerlessness destroy your beliefs, or force you to rethink what "medicine" really is?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '英格兰农奴', en: 'English Serf' },
      role: { cn: '庄园主下的世代农奴', en: 'Hereditary serf bound to a manor' },
      bio: {
        cn: '你住英国 Suffolk。你是农奴 — 不能离开庄园，要给领主服徭役 + 上交粮食。1348 瘟疫来了你村 100 户死 35 户。你看着 — 没人种地，领主追着你说"求你来干活，我多给工资"。500 年的"农奴制"在你眼前松动。这是黑死病给穷人的礼物 — 用 1/3 人口换的。',
        en: 'You live in Suffolk. You\'re a serf — can\'t leave the manor, must do labor service and surrender grain. In 1348 plague kills 35 of 100 households in your village. Now nobody is farming; the lord chases you begging "please come work, I\'ll pay more." 500 years of serfdom cracks before your eyes. This is the plague\'s gift to the poor — bought with 1/3 of the population.',
      },
      hook: {
        cn: '如果你是农奴 — 你儿子死了，但你工资涨了 3 倍。这是悲剧还是机会？历史 50% 是悲剧 50% 是机会，你怎么记忆它？',
        en: 'If you were the serf — your son died, but your wages tripled. Tragedy or opportunity? History is half-tragedy, half-opportunity — how do you remember it?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Margery（虚构同龄人）', en: 'Margery (fictional peer)' },
      role: { cn: '13 岁，伦敦商人女儿', en: '13-year-old, London merchant\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是伦敦布商。1348 年 9 月你妈妈和弟弟一周内死了 — 你和爸爸搬到乡下避难。你看着 1/3 邻居消失。你的伯伯继承家产 — 因为没人继承的家庭把财产留给小姐姐。中产女性突然成了"会读会算"的少数 — 这一代女性比之前任何一代都识字、都富裕。',
        en: 'Same age as Willow. Your father is a London cloth merchant. In Sept 1348 your mother and brother died within a week — you and father fled to the country. You watched 1/3 of neighbors vanish. Your uncle inherited his family\'s wealth — childless lines passed wealth to surviving daughters. Middle-class women suddenly become "literate and numerate" minorities — your generation more educated and wealthier than any before.',
      },
      hook: {
        cn: '700 年后 Willow 在加州学校跟男生一样学数学。你 13 岁记账给爸爸看 — 因为弟弟死了你成了继承人。"瘟疫推动女性进步"听起来荒谬，但确实如此。怎么看？',
        en: '700 years later, Willow studies math equal with boys. At 13, you kept books for your father — because your brother died, you became heir. "Plague advanced women" sounds absurd but it\'s true. How do you see it?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Yersinia pestis 鼠疫杆菌（跳蚤 + 黑鼠传播）',
      'Caffa 1346 围城 — 蒙古抛尸入热那亚商站',
      'Messina 1347 黑死病登陆欧洲 → 4 年横扫',
      '欧洲死亡 ~1/3 人口（30-50%）— 约 2500 万人',
      'Flagellants 鞭笞派 / 反犹大屠杀 — 社会恐慌反应',
      'Labor scarcity → 农奴制松动 / 工资上涨',
      '英国 Statute of Labourers 1351 — 强制工资管制',
      'Decameron《十日谈》— Boccaccio 薄伽丘 1353',
    ],
    en: [
      'Yersinia pestis (fleas + black rats as vectors)',
      'Siege of Caffa 1346 — Mongols catapult corpses into Genoese port',
      'Messina 1347 — plague reaches Europe → 4-year sweep',
      'Europe loses ~1/3 of population (~25M dead)',
      'Flagellants / anti-Jewish pogroms — panic responses',
      'Labor scarcity → weakens serfdom / wages rise',
      'English Statute of Labourers 1351 — wage controls',
      'Boccaccio\'s Decameron, 1353',
    ],
  },
};
