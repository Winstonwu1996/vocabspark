// view: Colonial America Takes Shape · 约 1650-1750 · 北美大西洋岸英国殖民地 (舞台 = 整个大西洋三角)
// APUSH Period 2 (1607-1754) Topics 2.4-2.7 · CA HSS Grade 8.1 — 奴隶经济系统 / 立法造奴 / 大觉醒
// keyFigures 留空 — 自动从 lib/history-storyboards/colonial-america-1650.js 的 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'colonial-america',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/colonial-america-1650?from=atlas&atlasId=colonial-america',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [],
  title:    { cn: '殖民地美洲的成形', en: 'Colonial America Takes Shape' },
  subtitle: { cn: '约 1650-1750 · 一串脆弱据点长成一台用掳来的命喂动的机器', en: 'c. 1650-1750 · From fragile outposts to a machine fed by stolen lives' },
  year: 1650,

  camera: {
    projection: 'mercator',
    center: [-77, 38],
    scale: 900,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  causalSummary: {
    cn: 'L0 英国殖民地沿大西洋岸排开, 但真正的舞台是整个大西洋——三角贸易把欧洲(成品/朗姆酒钱)→西非(掳人)→加勒比与北美(糖·烟草·稻米)→回欧洲连成一个赚钱的三角, 北美只是其中一角 + L1 南部湿热烟草田稻田·加勒比沸腾糖厂·新英格兰昼夜蒸馏的朗姆酒坊(Newport「世界朗姆之都」)·隐形舞台 Middle Passage 中段航程死亡率约 12%-15% + L2 到 1750 殖民地约 100 多万人 / 被奴役者约 24 万(几乎全在南部, 南卡低地甚至超过白人) / 顶端种植园主·大西洋商人, 底层被记成「动产」的非洲人 + L3 经济上 mercantilism + Navigation Acts 把殖民地锁成原料供应地, Royal African Company 1672 垄断贩奴、1698 垄断被打破后英国贩奴量爆炸; 法律上奴隶制是被一条条法律造出来的——1662 partus sequitur ventrem(身份随母亲、可继承) → 1705《Servants and Slaves 法案》把种族奴隶制写死成 chattel slavery + L4 三个枢纽: Bacon\'s Rebellion 1676(穷白+黑奴联手吓坏精英→加速用种族划线) · Great Awakening 约 1730s-1740s(Edwards/Whitefield 全殖民地宗教复兴, 教会裂成 New Lights / Old Lights) · Stono Rebellion 1739(英属北美最大奴隶起义, 受奴役者打鼓举旗喊「Liberty」)。同期中国: 1684 康熙平台湾后解除海禁, 靠出口瓷器丝绸、吸纳白银接入同一张世界经济网。',
    en: 'L0 British colonies strung along the Atlantic coast, but the real stage is the whole Atlantic—triangular trade links Europe (finished goods / rum money) → West Africa (captured people) → the Caribbean and North America (sugar, tobacco, rice) → back to Europe in a profitable triangle, with North America as just one corner + L1 humid southern tobacco and rice fields, boiling Caribbean sugar works, New England distilleries running day and night (Newport, the "rum capital of the world"), plus the hidden stage of the Middle Passage with a death rate of ~12%-15% + L2 by 1750 ~1 million+ colonists / ~240k enslaved (almost all in the South, even outnumbering whites in the SC lowcountry) / planters and Atlantic merchants on top, Africans recorded as "chattel" at the bottom + L3 economically, mercantilism + Navigation Acts lock the colonies into supplying raw materials, the Royal African Company monopolizes the slave trade from 1672 and English slaving explodes after the monopoly breaks in 1698; legally, slavery is built law by law—1662 partus sequitur ventrem (status follows the mother, heritable) → the 1705 Act concerning Servants and Slaves hardens race-based chattel slavery + L4 three hinge events: Bacon\'s Rebellion 1676 (poor whites and enslaved blacks ally, terrifying elites → drawing the race line faster), the Great Awakening c. 1730s-1740s (Edwards/Whitefield spark colony-wide revival, splitting churches into New Lights / Old Lights), and the Stono Rebellion 1739 (the largest slave uprising in British North America, the enslaved beating drums, raising flags, shouting "Liberty"). Same era in China: in 1684 the Kangxi Emperor lifts the maritime ban after pacifying Taiwan, plugging into the same world economy by exporting porcelain and silk and absorbing silver.',
  },

  keyFigures: [],
};
