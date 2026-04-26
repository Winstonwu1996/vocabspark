// data/atlas/events.js
//
// L4 事件层 — 跨年代的事件、城市、地标 pin 数据。
// view 配方通过 id 引用，无需手填坐标。

export const EVENTS = {
  // ── 大宪章相关 ──
  'magna-carta': {
    type: 'treaty',
    lon: -0.5642, lat: 51.4444,
    year: 1215,
    label: { cn: '★ Runnymede', en: 'Runnymede' },
    note: { cn: 'King John 在此签字让步', en: 'Magna Carta signed' },
    causality: {
      summary: {
        cn: '不是 John 个人意外 — 是地理 + 气候 + 经济 + 制度合力推出的必然事件',
        en: 'Not an accident of King John — a structural inevitability from geography + climate + economy + institutions',
      },
      L0: {
        cn: '英伦三岛 · 海岛地形让英国早期就能统一，但规模太小走不了集权帝国路线；北海航运给贵族独立财源',
        en: 'British Isles · island geography enabled early unification but too small for centralized empire; North Sea trade gave barons independent wealth',
      },
      L1: {
        cn: '中世纪暖期（950–1250）· 300 年温暖气候让欧洲农业产能翻倍，养出独立于王权的商人 + 教士 + 骑士阶级',
        en: 'Medieval Warm Period (950–1250) · 300 years of warmth doubled Europe\'s agricultural output, supporting merchants/clergy/knights independent of crown',
      },
      L2: {
        cn: '1200 年英国 ~250 万人 · 伦敦 3 万 · 半数非农 — 贵族有独立财源不再完全依附国王',
        en: '1200 AD · England ~2.5M people · London 30k · half non-agrarian — barons had independent income',
      },
      L3: {
        cn: '诺曼征服（1066）植入封建契约传统 + 罗马法复兴 + 教会司法权 — 「王权需要契约约束」是默认认知',
        en: 'Norman Conquest (1066) implanted feudal contract tradition + Roman law revival + Church jurisdiction — "king must be bound by contract" was already common sense',
      },
      L4: {
        cn: 'John 输诺曼底（1204）+ 重税征伐法国 + 教皇逐其出教会（1213）→ 25 位贵族 1215 联合举兵',
        en: 'John lost Normandy (1204) + heavy war taxes + papal excommunication (1213) → 25 barons united in 1215',
      },
      antecedents: [
        { year: 1066, label: { cn: '诺曼征服', en: 'Norman Conquest' } },
        { year: 1100, label: { cn: '亨利一世加冕特许状', en: 'Coronation Charter (Henry I)' } },
        { year: 1204, label: { cn: '失诺曼底', en: 'Loss of Normandy' } },
        { year: 1213, label: { cn: '教皇绝罚 John', en: 'Papal excommunication' } },
      ],
      consequences: [
        { year: 1225, label: { cn: '重颁大宪章', en: 'Magna Carta reissued' } },
        { year: 1265, label: { cn: '西蒙议会', en: 'de Montfort\'s Parliament' } },
        { year: 1628, label: { cn: '权利请愿书', en: 'Petition of Right' } },
        { year: 1689, label: { cn: '权利法案', en: 'Bill of Rights' } },
        { year: 1787, label: { cn: '美国宪法', en: 'US Constitution' } },
      ],
    },
  },
  'london-1215': {
    type: 'city',
    lon: -0.1276, lat: 51.5074,
    year: 1215,
    label: { cn: '伦敦', en: 'London' },
    note: { cn: '~ 30,000 人', en: 'pop. ~30,000' },
    labelDy: 16,   // 推到 pin 下方避开 Runnymede
  },
  'paris-1215': {
    type: 'city',
    lon: 2.3522, lat: 48.8566,
    year: 1215,
    label: { cn: '巴黎', en: 'Paris' },
    note: { cn: '~ 100,000 人', en: 'pop. ~100,000' },
  },
  'rome-1215': {
    type: 'city',
    lon: 12.4964, lat: 41.9028,
    year: 1215,
    label: { cn: '罗马', en: 'Rome' },
    note: { cn: '教皇国首都', en: 'Papal States capital' },
  },
  'constantinople-1215': {
    type: 'city',
    lon: 28.9784, lat: 41.0082,
    year: 1215,
    label: { cn: '君士坦丁堡', en: 'Constantinople' },
    note: { cn: '拜占庭帝国，1453 失陷', en: 'falls 1453' },
  },

  // ── 唐宋盛世相关 ──
  'changan': {
    type: 'capital',
    lon: 108.93, lat: 34.27,
    year: 800,
    label: { cn: '★ 长安', en: "Chang'an" },
    note: { cn: '唐都，~100 万人，世界最大', en: "Tang capital · ~1M people · largest in world" },
    causality: {
      summary: {
        cn: '8 世纪世界第一大城不是偶然 — 关中地形 + 隋唐暖期 + 占城稻 + 科举制四力合一',
        en: '8th-century world\'s largest city was no accident — Guanzhong terrain + Sui-Tang warm period + Champa rice + imperial exam system',
      },
      L0: {
        cn: '关中平原 · 渭水冲积沃土 + 秦岭天然屏障 — 易守难攻又粮食富饶；丝路东端 + 长城以南 = 「天选都城」',
        en: 'Guanzhong Plain · alluvial soil from Wei River + Qinling mountain barrier — defensible AND fertile; eastern terminus of Silk Road, south of Great Wall',
      },
      L1: {
        cn: '隋唐温暖期（600–900）· 年均气温比今天高 1°C — 北方农业极限向北推 100 公里，关中养得起百万人都城',
        en: 'Sui-Tang Warm Period (600–900) · ~1°C warmer than today — northern agricultural frontier pushed 100 km north, supporting 1M-person capital',
      },
      L2: {
        cn: '8 世纪长安 ~100 万人 · 1/3 非农 · 米市棉布丝绸供应全球 — 长江以南占城稻让米产翻倍',
        en: '8th c. Chang\'an ~1M people · 1/3 non-agrarian · global supplier of rice, cotton, silk — Champa rice from south doubled grain output',
      },
      L3: {
        cn: '三省六部 + 科举（隋立 605 · 唐兴）· 帝国能从全国选才汇集长安 — 不靠世袭、靠考试',
        en: 'Three Departments + Six Ministries + Imperial Exam (founded Sui 605, flourished Tang) · empire selected talent from all provinces — not hereditary, by exam',
      },
      L4: {
        cn: '唐太宗贞观之治（627–649）+ 玄奘取经 + 景教传入 + 吐蕃尼婆罗联姻 — 兼容并蓄的文明高峰',
        en: 'Emperor Taizong\'s Reign (627–649) + Xuanzang\'s Buddhist pilgrimage + Nestorian Christianity arrives + marriage alliances with Tibet/Nepal — civilizational peak of inclusivity',
      },
      antecedents: [
        { year: 581, label: { cn: '隋朝统一中国', en: 'Sui reunifies China' } },
        { year: 605, label: { cn: '隋炀帝开运河', en: 'Sui builds Grand Canal' } },
        { year: 605, label: { cn: '科举初立', en: 'Imperial exam founded' } },
        { year: 618, label: { cn: '唐立国', en: 'Tang dynasty founded' } },
        { year: 627, label: { cn: '贞观之治', en: 'Reign of Taizong' } },
      ],
      consequences: [
        { year: 755, label: { cn: '安史之乱', en: 'An Lushan Rebellion' } },
        { year: 907, label: { cn: '唐亡', en: 'Tang collapses' } },
        { year: 960, label: { cn: '宋立国', en: 'Song dynasty founded' } },
        { year: 1000, label: { cn: '北宋鼎盛', en: 'Northern Song peak' } },
        { year: 1271, label: { cn: '元立国', en: 'Yuan founded' } },
      ],
    },
  },
  'kaifeng': {
    type: 'capital',
    lon: 114.34, lat: 34.80,
    year: 1000,
    label: { cn: '开封', en: 'Kaifeng' },
    note: { cn: '北宋都城，~80 万人', en: 'Northern Song capital · ~800k' },
  },
  'hangzhou': {
    type: 'capital',
    lon: 120.16, lat: 30.27,
    year: 1200,
    label: { cn: '杭州', en: 'Hangzhou' },
    note: { cn: '南宋都城，~150 万人', en: 'Southern Song capital · ~1.5M' },
  },
  'guangzhou': {
    type: 'city',
    lon: 113.27, lat: 23.13,
    year: 1000,
    label: { cn: '广州', en: 'Guangzhou' },
    note: { cn: '海上丝路起点', en: 'Maritime Silk Road origin' },
  },
  'dunhuang': {
    type: 'city',
    lon: 94.66, lat: 40.14,
    year: 800,
    label: { cn: '敦煌', en: 'Dunhuang' },
    note: { cn: '丝路重镇', en: 'Silk Road hub' },
  },

  // ── 黑死病相关 ──
  'caffa-siege': {
    type: 'event',
    lon: 35.38, lat: 45.02,
    year: 1346,
    label: { cn: '★ 卡法围城', en: 'Siege of Caffa' },
    note: { cn: '蒙古军把瘟疫尸体抛入城内，黑死病开始西进', en: 'Plague enters Europe' },
    causality: {
      summary: {
        cn: '不是「蒙古恶意武器」，是 200 年地理 + 气候 + 商路 + 制度合谋的瘟疫炸弹',
        en: 'Not Mongol bioweapon — a plague bomb 200 years in the making from geography + climate + trade + institutions',
      },
      L0: {
        cn: '克里米亚卡法 · 黑海北岸贸易枢纽 — 蒙古 vs 欧洲商业的物理接触面，瘟疫天然爆破点',
        en: 'Caffa, Crimea · Black Sea trade hub — physical interface between Mongol world & Europe, natural ignition point',
      },
      L1: {
        cn: '14 世纪小冰期开始 · 中亚干旱 → 老鼠西迁找食物 → 携带鼠疫杆菌进入人类聚居区',
        en: '14th c. Little Ice Age · Central Asian drought → rats migrate west seeking food → bring Yersinia pestis into human zones',
      },
      L2: {
        cn: 'Pax Mongolica（蒙古和平）· 1240–1340 欧亚商路百年畅通 — 商队载着丝绸 + 香料 + 病原体一起走',
        en: 'Pax Mongolica · 1240–1340 century of unimpeded Eurasian trade — caravans carried silk, spices, AND pathogens together',
      },
      L3: {
        cn: '金帐汗国 vs 热那亚商人冲突 · 围攻基督教殖民贸易站 — 蒙古军把瘟尸抛入城内（首次有记录的"生物战"）',
        en: 'Golden Horde vs Genoese merchants conflict · besieging Christian colonial post — Mongols catapulted plague-corpses into city (first recorded "biological warfare")',
      },
      L4: {
        cn: '1346 围城 → 热那亚船带病逃回 → 1347.10 墨西拿登陆 → 1348 春到法国 → 1348.11 到伦敦',
        en: '1346 siege → Genoese ships flee with disease → Oct 1347 lands at Messina → Spring 1348 reaches France → Nov 1348 reaches London',
      },
      antecedents: [
        { year: 1206, label: { cn: '成吉思汗立国', en: 'Genghis Khan founds Mongol Empire' } },
        { year: 1241, label: { cn: '蒙古攻欧洲', en: 'Mongols invade Europe' } },
        { year: 1260, label: { cn: 'Pax Mongolica 启动', en: 'Pax Mongolica begins' } },
        { year: 1300, label: { cn: '中世纪暖期结束', en: 'Medieval Warm ends' } },
      ],
      consequences: [
        { year: 1348, label: { cn: '欧洲全境爆发', en: 'Plague sweeps all Europe' } },
        { year: 1351, label: { cn: '1/3 欧洲人死亡', en: '1/3 of Europe dead' } },
        { year: 1381, label: { cn: '英国农民起义', en: 'English Peasants\' Revolt' } },
        { year: 1400, label: { cn: '农奴制衰落', en: 'Serfdom declines' } },
        { year: 1450, label: { cn: '文艺复兴启动', en: 'Renaissance begins' } },
      ],
    },
  },
  'messina': {
    type: 'event',
    lon: 15.55, lat: 38.18,
    year: 1347,
    label: { cn: '墨西拿', en: 'Messina' },
    note: { cn: '1347.10 黑死病登陆欧洲', en: 'Oct 1347 — first European port' },
  },
  'paris-1348': {
    type: 'event',
    lon: 2.3522, lat: 48.8566,
    year: 1348,
    label: { cn: '巴黎', en: 'Paris' },
    note: { cn: '1348 夏，半数死亡', en: 'Summer 1348 — half dead' },
  },
  'london-1348': {
    type: 'event',
    lon: -0.1276, lat: 51.5074,
    year: 1348,
    label: { cn: '伦敦', en: 'London' },
    note: { cn: '1348.11 抵达；1349 春爆发', en: 'Arrives Nov 1348' },
  },
  // ── 宗教改革 1517 相关 ──
  'wittenberg-1517': {
    type: 'event',
    lon: 12.6437, lat: 51.8669,
    year: 1517,
    label: { cn: '★ 维滕堡', en: 'Wittenberg' },
    note: { cn: '1517.10.31 路德 95 条论纲钉教堂门', en: 'Luther nails 95 Theses, Oct 31, 1517' },
    causality: {
      summary: {
        cn: '路德不是孤胆英雄 — 是印刷术 + 商业资本 + 民族意识 + 教会腐败 + 人文主义 五力催化',
        en: 'Luther was not a lone hero — catalyzed by printing press + capitalism + national identity + church corruption + humanism',
      },
      L0: {
        cn: '北德地形零碎 + 多诸侯 — 教皇 / 皇帝鞭长莫及 → 路德能在萨克森选侯保护下发声',
        en: 'Fragmented North German terrain + many princes — Pope/Emperor can\'t reach → Luther sheltered by Saxony elector',
      },
      L1: {
        cn: '小冰期影响减弱 + 农业繁荣 — 北欧城镇兴起，资产阶级抬头，对教会献金敏感',
        en: 'Easing Little Ice Age + agricultural boom — North European towns rise, bourgeois resentful of indulgence fees',
      },
      L2: {
        cn: '1450 印刷术 → 1500 全欧 200 万册图书 → 路德 95 条 + 德语圣经 (1522) 几周内传遍德语区',
        en: '1450 printing → by 1500, 2M books in Europe → Luther\'s 95 Theses + German Bible (1522) spread across German lands in weeks',
      },
      L3: {
        cn: '中世纪教会层级（教皇 → 大主教 → 主教 → 神职人员）+ 赎罪券财政 + 拉丁文垄断圣经 → 信徒无法直接读经',
        en: 'Medieval Catholic hierarchy (Pope → archbishop → bishop → clergy) + indulgence fees + Latin monopoly on Bible → laity couldn\'t read scripture directly',
      },
      L4: {
        cn: '1515 教皇利奥十世卖赎罪券筹建圣彼得堡 → 1517 Tetzel 在德推销 → 路德反 → 95 条 → 1521 沃尔姆斯帝国会议 → 1525 农民战争',
        en: '1515 Pope Leo X sells indulgences for St Peter\'s → 1517 Tetzel sells in Germany → Luther reacts → 95 Theses → 1521 Diet of Worms → 1525 Peasants\' War',
      },
      antecedents: [
        { year: 1450, label: { cn: '古登堡印刷术', en: 'Gutenberg press' } },
        { year: 1453, label: { cn: '君士坦丁堡陷落', en: 'Fall of Constantinople' } },
        { year: 1492, label: { cn: '哥伦布航行', en: 'Columbus voyage' } },
        { year: 1500, label: { cn: '文艺复兴鼎盛', en: 'Renaissance peak' } },
        { year: 1515, label: { cn: '利奥十世卖赎罪券', en: 'Leo X sells indulgences' } },
      ],
      consequences: [
        { year: 1521, label: { cn: '沃尔姆斯帝国会议', en: 'Diet of Worms' } },
        { year: 1534, label: { cn: '英国脱离罗马', en: 'England breaks from Rome' } },
        { year: 1545, label: { cn: '特伦托大公会议', en: 'Council of Trent' } },
        { year: 1618, label: { cn: '三十年战争', en: 'Thirty Years\' War' } },
        { year: 1648, label: { cn: '威斯特伐利亚和约', en: 'Peace of Westphalia' } },
      ],
    },
  },
  'rome-1517': {
    type: 'city',
    lon: 12.4964, lat: 41.9028,
    year: 1517,
    label: { cn: '罗马（教皇国）', en: 'Rome (Papal States)' },
    note: { cn: '利奥十世建圣彼得堡 → 卖赎罪券筹钱', en: 'Leo X building St Peter\'s → sells indulgences' },
  },
  'worms': {
    type: 'event',
    lon: 8.36, lat: 49.63,
    year: 1521,
    label: { cn: '沃尔姆斯', en: 'Worms' },
    note: { cn: '1521 路德受审 · "Here I stand"', en: '1521 Luther on trial · "Here I stand"' },
  },
  'geneva-calvin': {
    type: 'city',
    lon: 6.14, lat: 46.20,
    year: 1536,
    label: { cn: '日内瓦', en: 'Geneva' },
    note: { cn: '加尔文 1536 起改革 · 宗教改革第二中心', en: 'Calvin\'s reform 1536 · second Reformation center' },
  },

  // ── 蒙古帝国 1241 相关 ──
  'karakorum': {
    type: 'capital',
    lon: 102.83, lat: 47.20,
    year: 1241,
    label: { cn: '★ 哈拉和林', en: 'Karakorum' },
    note: { cn: '蒙古帝国首都 · Ögedei 大汗', en: 'Mongol capital · Great Khan Ögedei' },
    causality: {
      summary: {
        cn: '蒙古横扫欧亚不是"野蛮人偶然" — 是草原地形 + 气候暖期 + 复合弓 + 万户制 + 情报网 五力锁定',
        en: 'Mongol conquest wasn\'t "barbarian accident" — locked by steppe geography + warm climate + composite bow + decimal organization + intelligence net',
      },
      L0: {
        cn: '蒙古高原 + 中亚草原 = 4000 公里马群"高速公路" — 一匹马一天 80 公里，中央机动力远超农耕文明',
        en: 'Mongolian Plateau + Central Asian steppe = 4000-km horse "highway" — 80 km/day mobility crushes sedentary armies',
      },
      L1: {
        cn: '中世纪暖期 1180-1230 草原降水增多 → 牲畜倍增 → 兵源人口暴涨 → Genghis 兵力翻倍',
        en: 'Medieval Warm Period 1180-1230 brought more steppe rain → livestock doubled → military manpower exploded → Genghis\'s armies grew',
      },
      L2: {
        cn: '复合弓射程 350 米 · 战马 4-5 匹一兵 · 攻城术取自征服国家 · "驿站"传讯 — 全欧亚 60 天可达',
        en: 'Composite bow 350m range · 4-5 horses per soldier · siege tech absorbed from conquered · "yam" relay system — info crosses Eurasia in 60 days',
      },
      L3: {
        cn: '万户制（千夫长 / 百夫长）+ 严酷军法 + 实力主义 + 宗教宽容 + Yassa 法典 + 跨族通婚整合',
        en: 'Decimal organization (mingghan/jaghun) + harsh discipline + meritocracy + religious tolerance + Yassa code + inter-tribal marriages',
      },
      L4: {
        cn: '1206 Genghis 立国 → 1219 灭花剌子模 → 1227 Genghis 死 → 1234 灭金 → 1241 Battle of Legnica → Liegnitz/Mohi 击败欧洲联军 → Ögedei 死撤军',
        en: '1206 Genghis founds empire → 1219 destroys Khwarezm → 1227 Genghis dies → 1234 destroys Jin → 1241 Legnica/Mohi defeats European coalition → Ögedei dies → withdraw',
      },
      antecedents: [
        { year: 1206, label: { cn: 'Genghis 立大蒙古国', en: 'Genghis Khan founds Mongol Empire' } },
        { year: 1219, label: { cn: '征花剌子模', en: 'Khwarezm campaign' } },
        { year: 1227, label: { cn: 'Genghis 去世', en: 'Genghis dies' } },
        { year: 1234, label: { cn: '灭金朝', en: 'Conquers Jin Dynasty' } },
        { year: 1240, label: { cn: '攻陷基辅', en: 'Sack of Kiev' } },
      ],
      consequences: [
        { year: 1260, label: { cn: 'Toluid 内战 → 帝国四分', en: 'Toluid Civil War → empire splits' } },
        { year: 1271, label: { cn: 'Yuan 立国', en: 'Yuan founded' } },
        { year: 1279, label: { cn: '灭南宋', en: 'Conquers Southern Song' } },
        { year: 1295, label: { cn: 'Ilkhanate 改伊斯兰', en: 'Ilkhanate Islamizes' } },
        { year: 1347, label: { cn: '黑死病通过 Pax Mongolica 西传', en: 'Black Death spreads via Pax Mongolica' } },
      ],
    },
  },
  'legnica': {
    type: 'event',
    lon: 16.16, lat: 51.21,
    year: 1241,
    label: { cn: '雷格尼察战役', en: 'Battle of Legnica' },
    note: { cn: '1241.4 蒙古击溃波兰德意志联军', en: 'Apr 1241 Mongols crush Polish-German coalition' },
  },
  'mohi': {
    type: 'event',
    lon: 21.17, lat: 47.97,
    year: 1241,
    label: { cn: '莫希战役', en: 'Battle of Mohi' },
    note: { cn: '1241.4 蒙古灭匈牙利军主力', en: 'Apr 1241 Mongols annihilate Hungarian army' },
  },
  'kiev-1240': {
    type: 'event',
    lon: 30.52, lat: 50.45,
    year: 1240,
    label: { cn: '基辅', en: 'Kiev' },
    note: { cn: '1240.12 蒙古屠城 · Kievan Rus 完结', en: 'Dec 1240 Mongol sack · end of Kievan Rus' },
  },
  'samarkand-1219': {
    type: 'city',
    lon: 66.97, lat: 39.65,
    year: 1219,
    label: { cn: '撒马尔罕', en: 'Samarkand' },
    note: { cn: '1219 花剌子模都城被屠 · 30 万死', en: '1219 Khwarezm capital sacked · 300k dead' },
  },

  // ── 美国宪法 1787 相关 ──
  'philadelphia-1787': {
    type: 'event',
    lon: -75.16, lat: 39.95,
    year: 1787,
    label: { cn: '★ 费城制宪会议', en: 'Philadelphia · Constitutional Convention' },
    note: { cn: '1787.5-9 制宪会议 + 9.17 宪法签署', en: 'May-Sept 1787 Convention + Sept 17 Constitution signed' },
    causality: {
      summary: {
        cn: '美国宪法不是"开国之父灵感" — 是 1781 邦联条例失败 + 谢斯起义恐慌 + 大宪章 / 启蒙遗产 + 各州利益博弈 五力锁定',
        en: 'US Constitution wasn\'t "Founding Fathers\' inspiration" — locked by 1781 Articles failure + Shays\'s Rebellion panic + Magna Carta/Enlightenment heritage + interstate interests',
      },
      L0: {
        cn: '13 州地理 + 经济差异 — 北方商业 + 南方种植业 + 西部领土争议 → 必须创新一种"联邦"框架',
        en: '13 states\' geography + economic divergence — Northern commerce + Southern plantations + Western territory disputes → required novel "federal" framework',
      },
      L1: {
        cn: '1780s 北美干旱 + 农业危机 — 农民负债 → 1786 谢斯起义吓坏精英 → 共识"必须加强中央政府"',
        en: '1780s North American drought + agricultural crisis — farmers indebted → 1786 Shays\'s Rebellion alarms elites → consensus "must strengthen central government"',
      },
      L2: {
        cn: '400 万人口 + 东海岸 13 港口 + 战争国债 5400 万美元 + 邦联政府无征税权 + 各州印自家纸币贬值',
        en: '4M population + 13 East Coast ports + $54M war debt + Confederation gov\'t cannot tax + states printing inflated currency',
      },
      L3: {
        cn: 'Magna Carta 1215 → 英国权利法案 1689 → Locke 社会契约 → Montesquieu 三权分立 → Madison Federalist Papers 综合',
        en: 'Magna Carta 1215 → English Bill of Rights 1689 → Locke\'s social contract → Montesquieu\'s separation of powers → Madison synthesizes in Federalist Papers',
      },
      L4: {
        cn: '1781 邦联条例生效（弱）→ 1786 Annapolis 会议 → 1786 Shays 起义 → 1787.5 制宪 → Madison + Hamilton 主导 → "大妥协"州权 + 三/五条款奴隶 → 9.17 签署 → 1788.6 第 9 州 NH 批准生效',
        en: '1781 Articles ratified (weak) → 1786 Annapolis → 1786 Shays\'s Rebellion → May 1787 Convention → Madison + Hamilton lead → "Great Compromise" + 3/5 Clause → Sept 17 signed → June 1788 NH ratifies (9th state)',
      },
      antecedents: [
        { year: 1215, label: { cn: '大宪章', en: 'Magna Carta' } },
        { year: 1689, label: { cn: '英国权利法案', en: 'English Bill of Rights' } },
        { year: 1776, label: { cn: '独立宣言', en: 'Declaration of Independence' } },
        { year: 1781, label: { cn: '邦联条例', en: 'Articles of Confederation' } },
        { year: 1786, label: { cn: '谢斯起义', en: "Shays's Rebellion" } },
      ],
      consequences: [
        { year: 1791, label: { cn: '权利法案（前 10 修正案）', en: 'Bill of Rights (1st 10 Amendments)' } },
        { year: 1803, label: { cn: 'Marbury v. Madison 司法审查', en: 'Marbury v. Madison · judicial review' } },
        { year: 1865, label: { cn: '13 修正案废奴', en: '13th Amendment' } },
        { year: 1920, label: { cn: '19 修正案妇女选举权', en: '19th Amendment · women vote' } },
        { year: 1965, label: { cn: '投票权法案', en: 'Voting Rights Act' } },
      ],
    },
  },
  'mount-vernon': {
    type: 'city',
    lon: -77.09, lat: 38.71,
    year: 1787,
    label: { cn: '弗农山', en: 'Mount Vernon' },
    note: { cn: 'Washington 庄园 · 主持制宪会议前居所', en: 'Washington\'s estate · home before chairing Convention' },
  },
  'shays-rebellion': {
    type: 'event',
    lon: -72.59, lat: 42.33,
    year: 1786,
    label: { cn: '谢斯起义', en: "Shays's Rebellion" },
    note: { cn: '1786 麻省农民武装抗债 · 触发制宪决心', en: '1786 Mass. farmer uprising · triggered Constitutional resolve' },
  },
  'new-york-1787': {
    type: 'city',
    lon: -74.00, lat: 40.71,
    year: 1787,
    label: { cn: '纽约（联邦党人文集）', en: 'NYC (Federalist Papers)' },
    note: { cn: 'Hamilton/Madison/Jay 写联邦党人文集', en: 'Hamilton/Madison/Jay write Federalist Papers' },
  },

  // ── 古希腊 480 BC 相关 ──
  'athens-bc480': {
    type: 'capital',
    lon: 23.7275, lat: 37.9838,
    year: -480,
    label: { cn: '★ 雅典', en: 'Athens' },
    note: { cn: '民主诞生地 · 正与波斯交战', en: 'Birthplace of democracy · at war with Persia' },
    causality: {
      summary: {
        cn: '雅典民主不是"哲学家发明" — 是地形 + 海军 + 平民阶级 + 波斯压力 五力锁定',
        en: 'Athenian democracy was not "invented by philosophers" — locked by geography + navy + citizen class + Persian pressure',
      },
      L0: {
        cn: '阿提卡半岛多山贫瘠 + 三面环海 — 农业养不活贵族集权，只能靠海贸 + 银矿 + 平民',
        en: 'Mountainous Attica + sea on three sides — agriculture too poor for aristocracy, must rely on trade + silver + citizens',
      },
      L1: {
        cn: '地中海气候稳定（minoan warm period）+ 季风规律 — 远洋贸易可预测',
        en: 'Stable Mediterranean climate + predictable monsoons — long-distance trade was reliable',
      },
      L2: {
        cn: '5 世纪雅典 ~25 万人 · 1/3 是公民（含奴隶 / 外邦人）· Laurion 银矿养舰队 200 艘',
        en: '5th c. Athens ~250k · 1/3 citizens (incl. slaves/metics) · Laurion silver financed 200-ship fleet',
      },
      L3: {
        cn: 'Cleisthenes 改革（508 BC）· Demos / Boule / Ekklesia · 直接民主 + 抽签制 + 陶片放逐 + Solon 经济改革遗产',
        en: 'Cleisthenes\' reforms (508 BC) · Demos / Boule / Ekklesia · direct democracy + sortition + ostracism + Solonian heritage',
      },
      L4: {
        cn: '波斯入侵（490 BC Marathon / 480 BC Salamis）→ 海军 = 平民桨手地位↑ → 民主深化 → Pericles 黄金时代（450s BC）',
        en: 'Persian invasions (490 BC Marathon / 480 BC Salamis) → navy = citizen rowers gain status → democracy deepens → Periclean Age (450s)',
      },
      antecedents: [
        { year: -594, label: { cn: 'Solon 改革', en: 'Solonian reforms' } },
        { year: -508, label: { cn: 'Cleisthenes 立宪', en: 'Cleisthenes constitution' } },
        { year: -499, label: { cn: '伊奥尼亚起义', en: 'Ionian Revolt' } },
        { year: -490, label: { cn: '马拉松战役', en: 'Battle of Marathon' } },
        { year: -480, label: { cn: '萨拉米斯海战', en: 'Battle of Salamis' } },
      ],
      consequences: [
        { year: -461, label: { cn: 'Pericles 当选', en: 'Pericles elected' } },
        { year: -431, label: { cn: '伯罗奔尼撒战争', en: 'Peloponnesian War' } },
        { year: -399, label: { cn: 'Socrates 受审', en: 'Trial of Socrates' } },
        { year: -323, label: { cn: 'Alexander 去世', en: 'Death of Alexander' } },
        { year: -146, label: { cn: '罗马吞并希腊', en: 'Rome conquers Greece' } },
      ],
    },
  },
  'salamis': {
    type: 'event',
    lon: 23.55, lat: 37.95,
    year: -480,
    label: { cn: '萨拉米斯海战', en: 'Battle of Salamis' },
    note: { cn: '480 BC 雅典舰队大胜波斯', en: '480 BC Athenian fleet defeats Persia' },
  },
  'marathon': {
    type: 'event',
    lon: 23.97, lat: 38.15,
    year: -490,
    label: { cn: '马拉松', en: 'Marathon' },
    note: { cn: '490 BC 雅典击退波斯陆军', en: '490 BC Athens defeats Persian land army' },
  },
  'sparta-bc500': {
    type: 'capital',
    lon: 22.43, lat: 37.07,
    year: -480,
    label: { cn: '斯巴达', en: 'Sparta' },
    note: { cn: '希腊另一极 · 寡头军国制', en: 'Greek other pole · oligarchic militarism' },
  },
  'persepolis-bc500': {
    type: 'capital',
    lon: 52.89, lat: 29.94,
    year: -480,
    label: { cn: '波斯波利斯', en: 'Persepolis' },
    note: { cn: '阿契美尼德波斯首都', en: 'Achaemenid Persian capital' },
  },

  // ── 文艺复兴 1500 相关 ──
  'florence-1500': {
    type: 'capital',
    lon: 11.2558, lat: 43.7696,
    year: 1500,
    label: { cn: '★ 佛罗伦萨', en: 'Florence' },
    note: { cn: '美第奇家族 · Da Vinci · 文艺复兴之心', en: 'Medici family · Da Vinci · heart of Renaissance' },
    causality: {
      summary: {
        cn: '文艺复兴不是"突然觉醒" — 是黑死病后人口结构 + 银行业 + 古希腊文献 + 印刷术 五力激活',
        en: 'Renaissance was not "sudden awakening" — activated by post-plague demographics + banking + Greek manuscripts + printing',
      },
      L0: {
        cn: '意大利半岛位居地中海中央 — 与拜占庭 + 伊斯兰世界 + 中欧三方贸易枢纽',
        en: 'Italian peninsula at Mediterranean center — trade hub between Byzantine, Islamic, and Central European worlds',
      },
      L1: {
        cn: '小冰期初期但区域性温暖 + 鼠疫后劳动力稀缺 — 工资上涨，城市资本积累',
        en: 'Early Little Ice Age but regionally warm + post-plague labor scarcity — wages rose, urban capital accumulated',
      },
      L2: {
        cn: '黑死病死 1/3 人口 → 农奴稀缺 → 工资翻倍 → 城市消费阶级 → 美第奇 / 富格尔银行业 + 海上贸易资本',
        en: 'Plague killed 1/3 → labor scarce → wages doubled → urban consumer class → Medici/Fugger banking + maritime trade capital',
      },
      L3: {
        cn: '城邦共和制（佛罗伦萨 / 威尼斯 / 米兰）+ 教皇国资助艺术 + 行会工匠制 + 大学传统（Bologna 1088）',
        en: 'City-state republics (Florence/Venice/Milan) + Papal patronage + guild apprenticeship + university tradition (Bologna 1088)',
      },
      L4: {
        cn: '1453 君士坦丁堡陷落 → 拜占庭学者携希腊文献西迁 + 1450 古登堡印刷术 + 1492 哥伦布扩展世界观',
        en: '1453 fall of Constantinople → Byzantine scholars flee with Greek manuscripts + 1450 Gutenberg press + 1492 Columbus expands worldview',
      },
      antecedents: [
        { year: 1347, label: { cn: '黑死病爆发', en: 'Black Death' } },
        { year: 1397, label: { cn: '美第奇银行成立', en: 'Medici Bank founded' } },
        { year: 1450, label: { cn: '古登堡印刷术', en: 'Gutenberg printing' } },
        { year: 1453, label: { cn: '君士坦丁堡陷落', en: 'Fall of Constantinople' } },
        { year: 1492, label: { cn: '哥伦布航行', en: 'Columbus voyage' } },
      ],
      consequences: [
        { year: 1517, label: { cn: '宗教改革', en: 'Protestant Reformation' } },
        { year: 1543, label: { cn: '哥白尼日心说', en: 'Copernican heliocentrism' } },
        { year: 1610, label: { cn: '伽利略望远镜', en: 'Galileo\'s telescope' } },
        { year: 1687, label: { cn: '牛顿原理', en: 'Newton\'s Principia' } },
      ],
    },
  },
  'rome-1500': {
    type: 'city',
    lon: 12.4964, lat: 41.9028,
    year: 1500,
    label: { cn: '罗马', en: 'Rome' },
    note: { cn: '教皇尤利乌斯二世资助米开朗琪罗', en: 'Pope Julius II patron of Michelangelo' },
  },
  'venice-1500': {
    type: 'city',
    lon: 12.3155, lat: 45.4408,
    year: 1500,
    label: { cn: '威尼斯', en: 'Venice' },
    note: { cn: '海上贸易帝国 · 印刷之都', en: 'Maritime trade empire · printing capital' },
  },
  'constantinople-1453': {
    type: 'event',
    lon: 28.9784, lat: 41.0082,
    year: 1453,
    label: { cn: '君士坦丁堡', en: 'Constantinople' },
    note: { cn: '1453 陷落于奥斯曼 · 学者西迁触发文艺复兴', en: 'Fell to Ottomans 1453 · scholars\' westward flight catalyzed Renaissance' },
  },
  'wittenberg': {
    type: 'event',
    lon: 12.6437, lat: 51.8669,
    year: 1517,
    label: { cn: '维滕堡', en: 'Wittenberg' },
    note: { cn: '1517 路德 95 条论纲 · 宗教改革开端', en: '1517 Luther\'s 95 Theses · Reformation begins' },
  },

  // ── 工业革命 1880 相关 ──
  'manchester': {
    type: 'capital',
    lon: -2.2426, lat: 53.4808,
    year: 1880,
    label: { cn: '★ 曼彻斯特', en: 'Manchester' },
    note: { cn: '工业革命纺织业之心 · "Cottonopolis"', en: 'Heart of Industrial Revolution textile · "Cottonopolis"' },
    causality: {
      summary: {
        cn: '工业革命不是"瓦特发明蒸汽机" — 是煤铁地理 + 殖民资本 + 圈地运动 + 科学传统 五力合一',
        en: 'Industrial Revolution wasn\'t "Watt invented steam" — locked by coal/iron geography + colonial capital + enclosure + scientific tradition',
      },
      L0: {
        cn: '英国煤层 + 铁矿 + 河流密集 + 海岸线 — "煤铁与水" 完美组合，运输便利',
        en: 'British coal seams + iron + dense rivers + coastline — perfect "coal/iron/water" combo, easy transport',
      },
      L1: {
        cn: '小冰期结束（~1850）+ 工业化开始改变气候 — 但农业 + 蒸汽机不依赖气候',
        en: 'End of Little Ice Age + industrialization starts altering climate — but agriculture + steam engines no longer climate-dependent',
      },
      L2: {
        cn: '英国 1750 起殖民扩张 → 印度棉花 + 加勒比糖 → 资本积累 / 圈地运动驱赶农民 → 城市廉价劳动力 + 1851 全球 GDP 第一',
        en: 'British colonialism since 1750 → Indian cotton + Caribbean sugar → capital + enclosure displaces farmers → cheap urban labor + 1851 #1 global GDP',
      },
      L3: {
        cn: '议会制 + 普通法保护财产权 + 专利制度（1623 始）+ 皇家学会（1660）+ 银行业（英格兰银行 1694）',
        en: 'Parliament + common law property protection + patent system (since 1623) + Royal Society (1660) + Bank of England (1694)',
      },
      L4: {
        cn: 'Watt 蒸汽机（1769）→ 棉纺机（1779）→ 铁路（1825）→ 大博览会（1851）→ 全球工业化竞赛（德 / 美 / 日跟进）',
        en: 'Watt\'s steam (1769) → spinning mules (1779) → railways (1825) → Great Exhibition (1851) → global industrial race (Germany/US/Japan)',
      },
      antecedents: [
        { year: 1623, label: { cn: '英国专利法', en: 'English Patent Act' } },
        { year: 1769, label: { cn: 'Watt 蒸汽机', en: 'Watt\'s steam engine' } },
        { year: 1825, label: { cn: '第一条铁路', en: 'First railway' } },
        { year: 1851, label: { cn: '伦敦大博览会', en: 'Great Exhibition' } },
      ],
      consequences: [
        { year: 1859, label: { cn: '达尔文物种起源', en: 'Darwin Origin of Species' } },
        { year: 1869, label: { cn: '苏伊士运河', en: 'Suez Canal' } },
        { year: 1885, label: { cn: '汽车发明', en: 'Automobile' } },
        { year: 1914, label: { cn: '第一次世界大战', en: 'World War I' } },
      ],
    },
  },
  'london-1880': {
    type: 'capital',
    lon: -0.1276, lat: 51.5074,
    year: 1880,
    label: { cn: '伦敦', en: 'London' },
    note: { cn: '世界最大城市 ~470 万 · 帝国之心', en: 'World\'s largest city ~4.7M · imperial heart' },
  },
  'berlin-1880': {
    type: 'city',
    lon: 13.4050, lat: 52.5200,
    year: 1880,
    label: { cn: '柏林', en: 'Berlin' },
    note: { cn: '德意志统一首都 · 工业崛起', en: 'United German capital · industrial rise' },
  },
  'pittsburgh-1880': {
    type: 'city',
    lon: -79.99, lat: 40.44,
    year: 1880,
    label: { cn: '匹兹堡', en: 'Pittsburgh' },
    note: { cn: '美国钢铁之都 · 卡内基', en: 'American steel capital · Carnegie' },
  },
  'tokyo-meiji': {
    type: 'capital',
    lon: 139.6917, lat: 35.6895,
    year: 1880,
    label: { cn: '东京（明治维新）', en: 'Tokyo (Meiji Restoration)' },
    note: { cn: '1868 明治维新 · 亚洲第一个工业化国家', en: '1868 Meiji Restoration · first industrialized Asian nation' },
  },

  // ── 拜占庭 500 AD ──
  'constantinople-500': {
    type: 'capital',
    lon: 28.9784, lat: 41.0082,
    year: 500,
    label: { cn: '★ 君士坦丁堡', en: 'Constantinople' },
    note: { cn: '东罗马首都 · 即将进入查士丁尼盛世', en: 'Eastern Roman capital · Justinian\'s era looming' },
    causality: {
      summary: {
        cn: '拜占庭千年存续不是侥幸 — 是地理咽喉 + 罗马法 + 希腊文化 + 基督教 + 城防工程 五力锁定',
        en: 'Byzantium\'s millennium survival wasn\'t luck — locked by geographic chokepoint + Roman law + Greek culture + Christianity + Theodosian Walls',
      },
      L0: {
        cn: '君士坦丁堡踞博斯普鲁斯海峡 · 三面环海 · 控制黑海/地中海贸易咽喉 — 易守难攻天选都城',
        en: 'Constantinople sits on Bosporus · sea on 3 sides · controls Black Sea/Med trade chokepoint — divine defensive site',
      },
      L1: {
        cn: '罗马气候最适期结束 + 4 世纪小冰期 → 西部农业崩溃 + 蛮族南侵；东部地中海稳定',
        en: 'End of Roman Climatic Optimum + 4th c. mini ice age → Western agriculture collapse + barbarian invasions; Eastern Med stable',
      },
      L2: {
        cn: '500 年东罗马 ~3000 万人 · 君士坦丁堡 50 万 · 黄金诺米斯马 (solidus) 主导地中海贸易 · 丝绸 / 香料 / 谷物',
        en: '500 AD E. Roman ~30M pop · Constantinople 500k · Gold solidus dominates Med trade · silk/spice/grain',
      },
      L3: {
        cn: '罗马法《查士丁尼法典》（即将编纂）+ 希腊化希腊语官方 + 东正教国教 + 双重元首制（皇帝 + 牧首）+ 行政官僚（thema 制）',
        en: 'Roman Law (Justinian Code coming) + Greek as official + Orthodox state religion + dual headship (Emperor + Patriarch) + thema bureaucracy',
      },
      L4: {
        cn: '410 西罗马蛮族劫罗马 → 476 西罗马灭 → 500 东罗马独存 → 527 查士丁尼即位 → 533 收复北非 → 537 圣索菲亚大教堂',
        en: '410 Sack of Rome → 476 W. Rome falls → 500 only E. Rome remains → 527 Justinian succeeds → 533 reconquers N. Africa → 537 Hagia Sophia built',
      },
      antecedents: [
        { year: 330, label: { cn: '迁都君士坦丁堡', en: 'Capital moves to Constantinople' } },
        { year: 395, label: { cn: '罗马帝国分裂', en: 'Roman Empire splits' } },
        { year: 410, label: { cn: '西哥特劫掠罗马', en: 'Visigoths sack Rome' } },
        { year: 476, label: { cn: '西罗马帝国灭亡', en: 'Western Roman Empire falls' } },
      ],
      consequences: [
        { year: 537, label: { cn: '圣索菲亚大教堂', en: 'Hagia Sophia consecrated' } },
        { year: 622, label: { cn: '伊斯兰兴起 (Hijra)', en: 'Islamic rise (Hijra)' } },
        { year: 1054, label: { cn: '东西教会大分裂', en: 'East-West Schism' } },
        { year: 1204, label: { cn: '十字军劫君士坦丁堡', en: 'Crusaders sack Constantinople' } },
        { year: 1453, label: { cn: '君士坦丁堡陷落 · 拜占庭亡', en: 'Constantinople falls · Byzantium ends' } },
      ],
    },
  },
  'rome-500': {
    type: 'city',
    lon: 12.4964, lat: 41.9028,
    year: 500,
    label: { cn: '罗马（已被劫）', en: 'Rome (sacked)' },
    note: { cn: '410 哥特劫掠 · 西罗马已灭 · 东哥特统治', en: '410 Gothic sack · Western Empire fell · Ostrogothic rule' },
  },
  'ravenna': {
    type: 'capital',
    lon: 12.20, lat: 44.42,
    year: 500,
    label: { cn: '拉文纳', en: 'Ravenna' },
    note: { cn: '西罗马晚期都城 · 东哥特首都 · 马赛克艺术', en: 'Late W. Roman capital · Ostrogoth capital · mosaic art' },
  },
  'ctesiphon-500': {
    type: 'capital',
    lon: 44.58, lat: 33.09,
    year: 500,
    label: { cn: '泰西封（萨珊都）', en: 'Ctesiphon (Sasanian capital)' },
    note: { cn: '波斯文明中心 · 拜占庭世纪宿敌', en: 'Persian civilization center · Byzantine century rival' },
  },

  // ── 伊斯兰兴起 750 AD ──
  'damascus': {
    type: 'capital',
    lon: 36.30, lat: 33.51,
    year: 750,
    label: { cn: '★ 大马士革（倭马亚都）', en: 'Damascus (Umayyad capital)' },
    note: { cn: '伊斯兰帝国首都 · 即将被阿拔斯取代', en: 'Islamic Empire capital · soon replaced by Abbasids' },
    causality: {
      summary: {
        cn: '伊斯兰百年扩张不是宗教奇迹 — 是阿拉伯地理 + 商路 + 拜占庭/萨珊互耗 + 一神教整合 + 圣战激励 五力锁定',
        en: 'Islam\'s century expansion wasn\'t miracle — locked by Arabian geography + trade routes + Byzantine/Sasanian exhaustion + monotheistic integration + jihad motivation',
      },
      L0: {
        cn: '阿拉伯半岛三面海 + 沙漠屏障 · Mecca/Medina 在贸易要道 · 可控制红海+印度洋商路',
        en: 'Arabia 3-sided sea + desert barrier · Mecca/Medina on trade routes · controls Red Sea + Indian Ocean trade',
      },
      L1: {
        cn: '6-7 世纪温暖期 + 海洋季风规律 — 阿拉伯远洋贸易繁荣',
        en: '6th-7th c. warm period + reliable monsoons — Arabian long-distance trade flourishes',
      },
      L2: {
        cn: '阿拉伯部落骆驼商队 · Mecca 节庆贸易中心 · 香料/丝绸/奴隶/黄金 · 文字早已成熟（古阿拉伯字母）',
        en: 'Arab tribal caravans · Mecca\'s pilgrimage trade · spices/silk/slaves/gold · early Arabic script',
      },
      L3: {
        cn: 'Muhammad 622 Hijra 整合 Umma（信徒共同体）+ Quran + Sharia · 信仰=法律=国家三位一体',
        en: 'Muhammad 622 Hijra unifies Umma · Quran + Sharia · faith=law=state triune',
      },
      L4: {
        cn: '622 Hijra → 632 Muhammad 死 → 4 哈里发 → 661 倭马亚立 → 711 入西班牙 → 732 Tours 战败 → 750 阿拔斯篡',
        en: '622 Hijra → 632 Muhammad dies → 4 Caliphs → 661 Umayyad founded → 711 invades Spain → 732 stopped at Tours → 750 Abbasid takeover',
      },
      antecedents: [
        { year: 570, label: { cn: 'Muhammad 诞生', en: 'Muhammad born' } },
        { year: 610, label: { cn: 'Quran 启示开始', en: 'Quranic revelation begins' } },
        { year: 622, label: { cn: 'Hijra（伊斯兰元年）', en: 'Hijra (Year 1 AH)' } },
        { year: 661, label: { cn: '倭马亚王朝立', en: 'Umayyad Caliphate founded' } },
        { year: 711, label: { cn: '攻入西班牙', en: 'Conquest of Iberia' } },
      ],
      consequences: [
        { year: 750, label: { cn: '阿拔斯王朝 + 巴格达建', en: 'Abbasid Caliphate + Baghdad' } },
        { year: 1095, label: { cn: '十字军开始', en: 'First Crusade' } },
        { year: 1258, label: { cn: '蒙古灭巴格达', en: 'Mongols destroy Baghdad' } },
        { year: 1453, label: { cn: '奥斯曼灭拜占庭', en: 'Ottomans take Constantinople' } },
      ],
    },
  },
  'mecca': {
    type: 'capital',
    lon: 39.83, lat: 21.42,
    year: 750,
    label: { cn: '麦加', en: 'Mecca' },
    note: { cn: '伊斯兰诞生地 · Hajj 朝圣中心', en: 'Birthplace of Islam · Hajj pilgrimage center' },
  },
  'medina': {
    type: 'city',
    lon: 39.61, lat: 24.47,
    year: 750,
    label: { cn: '麦地那', en: 'Medina' },
    note: { cn: 'Muhammad 迁居地（622）· 第一个伊斯兰国家', en: 'Muhammad\'s migration (622) · first Islamic state' },
  },
  'tours-732': {
    type: 'event',
    lon: 0.69, lat: 47.39,
    year: 732,
    label: { cn: '图尔战役', en: 'Battle of Tours' },
    note: { cn: '732 查理·马特挡住伊斯兰扩张到欧洲', en: '732 Charles Martel halts Islamic expansion into Europe' },
  },
  'baghdad-future': {
    type: 'event',
    lon: 44.36, lat: 33.31,
    year: 762,
    label: { cn: '巴格达（即将建）', en: 'Baghdad (coming soon)' },
    note: { cn: '762 阿拔斯建巴格达 · 智慧之家 · 伊斯兰黄金时代', en: '762 Abbasids found Baghdad · House of Wisdom · Islamic Golden Age' },
  },

  // ── 中世纪日本 1200 ──
  'kyoto-1200': {
    type: 'capital',
    lon: 135.77, lat: 35.01,
    year: 1200,
    label: { cn: '★ 京都', en: 'Kyoto' },
    note: { cn: '天皇都城 · 平安京 · 1185 后实权移镰仓', en: 'Imperial capital · Heian-kyō · power shifted to Kamakura after 1185' },
    causality: {
      summary: {
        cn: '日本武士时代不是"野心家篡权" — 是岛国地理 + 庄园经济 + 公家衰落 + 唐宋遗产 + 蒙古威胁 五力锁定',
        en: 'Japan\'s samurai age wasn\'t "ambitious usurpation" — locked by island geography + manor economy + court decline + Tang heritage + Mongol threat',
      },
      L0: {
        cn: '日本群岛 + 海洋天然防线 — 1281 蒙古两次失败、文化得以延续；山地多 → 区域武士化',
        en: 'Japanese archipelago + sea moat — survives Mongol invasions of 1281; mountainous → regional samurai-ization',
      },
      L1: {
        cn: '中世纪暖期（亚洲版）· 农业产能高 — 庄园（shōen）经济独立化加速',
        en: 'Medieval Warm (Asian variant) · high agricultural output — shōen estate economy autonomized',
      },
      L2: {
        cn: '1200 日本 ~700 万人 · 京都 ~10 万 · 庄园税逃避中央 · 武士保护庄园成新阶级 · 禅宗东传',
        en: '1200 Japan ~7M · Kyoto ~100k · shōen tax evades imperial · samurai class protects estates · Zen arrives',
      },
      L3: {
        cn: '律令制衰退 + 庄园（shōen）+ 武士道 + 1185 镰仓幕府（双重权力 · 天皇象征 / 将军实控）',
        en: 'Ritsuryō decline + shōen estates + bushidō + 1185 Kamakura Shogunate (dual power · Emperor symbolic / Shogun real)',
      },
      L4: {
        cn: '794 平安京建 → 1156 保元之乱 → 1185 源平合战 / 坛之浦 → 源赖朝立镰仓幕府 → 1274/1281 蒙古两次入侵 → 神风 → 战胜',
        en: '794 Heian-kyō founded → 1156 Hōgen Rebellion → 1185 Genpei War/Dan-no-ura → Yoritomo founds Kamakura Shogunate → 1274/1281 Mongol invasions → kamikaze → victory',
      },
      antecedents: [
        { year: 794,  label: { cn: '平安京建', en: 'Heian-kyō founded' } },
        { year: 1156, label: { cn: '保元之乱', en: 'Hōgen Rebellion' } },
        { year: 1180, label: { cn: '源平战争', en: 'Genpei War begins' } },
        { year: 1185, label: { cn: '坛之浦决战 + 镰仓幕府', en: 'Dan-no-ura + Kamakura Shogunate' } },
      ],
      consequences: [
        { year: 1274, label: { cn: '蒙古第一次伐日', en: 'First Mongol invasion' } },
        { year: 1281, label: { cn: '蒙古第二次 + 神风', en: 'Second Mongol invasion + kamikaze' } },
        { year: 1333, label: { cn: '镰仓幕府灭', en: 'Kamakura Shogunate falls' } },
        { year: 1467, label: { cn: '应仁之乱（战国开始）', en: 'Ōnin War (Sengoku begins)' } },
        { year: 1603, label: { cn: '德川幕府', en: 'Tokugawa Shogunate' } },
      ],
    },
  },
  'kamakura': {
    type: 'capital',
    lon: 139.55, lat: 35.32,
    year: 1185,
    label: { cn: '镰仓（幕府所在）', en: 'Kamakura (Shogunate seat)' },
    note: { cn: '1185 源赖朝设幕府 · 武士政权中心', en: '1185 Yoritomo founds Shogunate · samurai government center' },
  },
  'dan-no-ura': {
    type: 'event',
    lon: 130.95, lat: 33.96,
    year: 1185,
    label: { cn: '坛之浦（决战）', en: 'Dan-no-ura' },
    note: { cn: '1185.4.25 平氏全军覆没 · 源氏胜', en: 'Apr 25, 1185 · Taira annihilated · Minamoto wins' },
  },
  'hakata-bay': {
    type: 'event',
    lon: 130.40, lat: 33.59,
    year: 1281,
    label: { cn: '博多湾（神风）', en: 'Hakata Bay (kamikaze)' },
    note: { cn: '1281 蒙古舰队遇台风全灭 · 日本侥幸胜', en: '1281 Mongol fleet destroyed by typhoon · Japan miraculously wins' },
  },

  // ── 法国大革命 1789 ──
  'bastille': {
    type: 'event',
    lon: 2.3692, lat: 48.8530,
    year: 1789,
    label: { cn: '★ 巴士底狱', en: 'Bastille' },
    note: { cn: '1789.7.14 攻陷巴士底 · 革命象征日', en: 'Jul 14, 1789 storming · revolution\'s symbolic birth' },
    causality: {
      summary: {
        cn: '法国大革命不是"穷人造反" — 是启蒙思想 + 美独成功 + 财政破产 + 等级矛盾 + 1788-89 饥荒 五力锁定',
        en: 'French Revolution wasn\'t "poor revolt" — locked by Enlightenment + American success + fiscal bankruptcy + estate conflicts + 1788-89 famine',
      },
      L0: {
        cn: '巴黎是欧洲最大都市（60 万人）+ 法国农业地理多样 + 无山河天然分裂 — 中央集权下的不满集中',
        en: 'Paris = Europe\'s largest city (600k) + diverse agricultural geography + no natural divisions — discontent concentrated under absolutism',
      },
      L1: {
        cn: '1788-89 异常严寒冬 + 干旱 → 谷物歉收 → 面包价格翻倍 → 城市贫困加剧',
        en: '1788-89 abnormally cold winter + drought → grain shortage → bread price doubled → urban poverty worsens',
      },
      L2: {
        cn: '法国战争国债 40 亿里弗 + 财政崩溃 + 第三等级 (97% 人口) 缴所有税 / 第一二等级免税 + 美国独立战争耗资进一步加剧',
        en: 'French war debt 4B livres + fiscal collapse + Third Estate (97% pop) bears all tax / 1st-2nd Estates exempt + American war debt aggravation',
      },
      L3: {
        cn: '启蒙思想（Locke 自然权利 / Rousseau 社会契约 / Voltaire 理性）+ 美国独立 1776 实证 + 三级会议 1614 后首次召开（1789.5）',
        en: 'Enlightenment (Locke natural rights / Rousseau social contract / Voltaire reason) + American Revolution 1776 proof + Estates-General first since 1614 (May 1789)',
      },
      L4: {
        cn: '1789.5 三级会议召开 → 6.17 第三等级自宣"国民议会" → 6.20 网球场宣言 → 7.14 巴士底 → 8.4 废封建 → 8.26 人权宣言 → 1793 路易十六上断头台',
        en: 'May 1789 Estates-General → Jun 17 Third Estate self-declares "National Assembly" → Jun 20 Tennis Court Oath → Jul 14 Bastille → Aug 4 abolish feudalism → Aug 26 Declaration of Rights → 1793 Louis XVI guillotined',
      },
      antecedents: [
        { year: 1689, label: { cn: 'Locke 自然权利论', en: 'Locke\'s natural rights' } },
        { year: 1748, label: { cn: 'Montesquieu 三权分立', en: 'Montesquieu separation' } },
        { year: 1762, label: { cn: 'Rousseau 社会契约', en: 'Rousseau Social Contract' } },
        { year: 1776, label: { cn: '美国独立', en: 'American Revolution' } },
        { year: 1788, label: { cn: '法国财政崩溃 + 严冬', en: 'French fiscal collapse + harsh winter' } },
      ],
      consequences: [
        { year: 1793, label: { cn: '路易十六处决 + 恐怖时代', en: 'Louis XVI executed + Reign of Terror' } },
        { year: 1799, label: { cn: '拿破仑政变', en: 'Napoleon\'s coup' } },
        { year: 1804, label: { cn: '拿破仑称帝 + 民法典', en: 'Napoleon Emperor + Code Civil' } },
        { year: 1814, label: { cn: '拿破仑流放 + 维也纳会议', en: 'Napoleon exile + Congress of Vienna' } },
        { year: 1848, label: { cn: '欧洲革命浪潮', en: 'European Revolutions of 1848' } },
        { year: 1871, label: { cn: '巴黎公社', en: 'Paris Commune' } },
      ],
    },
  },
  'versailles-1789': {
    type: 'capital',
    lon: 2.1204, lat: 48.8049,
    year: 1789,
    label: { cn: '凡尔赛（三级会议）', en: 'Versailles (Estates-General)' },
    note: { cn: '1789.5 三级会议召开 · 1789.10 妇女游行回巴黎', en: 'May 1789 Estates-General · Oct 1789 Women\'s March back to Paris' },
  },
  'paris-1789': {
    type: 'capital',
    lon: 2.3522, lat: 48.8566,
    year: 1789,
    label: { cn: '巴黎', en: 'Paris' },
    note: { cn: '革命中心 · 60 万人 · 1793 处决路易十六', en: 'Revolution center · 600k pop · 1793 Louis XVI guillotined' },
  },
  'concorde-guillotine': {
    type: 'event',
    lon: 2.3211, lat: 48.8656,
    year: 1793,
    label: { cn: '协和广场（断头台）', en: 'Place de la Concorde (guillotine)' },
    note: { cn: '1793.1 路易十六处决 · 17000+ 革命死刑', en: 'Jan 1793 Louis XVI executed · 17,000+ revolutionary executions' },
  },
  'london-1789': {
    type: 'capital',
    lon: -0.1276, lat: 51.5074,
    year: 1789,
    label: { cn: '伦敦（反法据点）', en: 'London (anti-French)' },
    note: { cn: '英国领导反法 7 次大同盟战争（1792-1815）', en: 'UK leads 7 anti-French coalitions (1792-1815)' },
  },

  // ── 阿育王 250 BC ──
  'pataliputra': {
    type: 'capital',
    lon: 85.14, lat: 25.61,
    year: -260,
    label: { cn: '★ 华氏城（孔雀都）', en: 'Pataliputra (Mauryan capital)' },
    note: { cn: '阿育王宫廷 · 印度第一大都市', en: 'Ashoka\'s court · India\'s greatest city' },
    causality: {
      summary: {
        cn: '阿育王皈依佛教不是个人觉醒 — 是恒河平原 + 季风 + 铁器农业 + 婆罗门体系 + 卡林伽屠杀创伤 五力锁定',
        en: 'Ashoka\'s Buddhist conversion wasn\'t personal — locked by Ganges plain + monsoon + iron agriculture + Brahmin system + Kalinga trauma',
      },
      L0: {
        cn: '恒河 + 印度河双河谷 + 喜马拉雅北墙 + 大海三面 — 印度次大陆地理上自成一体',
        en: 'Ganges + Indus twin valleys + Himalayas N + sea on 3 sides — Indian subcontinent geographically self-contained',
      },
      L1: {
        cn: '季风规律稳定 + 铁犁推广 → 恒河流域农业产能跃升 → 支撑大型都市 + 中央集权',
        en: 'Stable monsoons + iron plow → Ganges agriculture surges → supports large cities + centralization',
      },
      L2: {
        cn: '帝国人口 ~5000 万 · Pataliputra ~30 万 · 标准化货币 / 度量衡 · 全国驿道',
        en: '~50M imperial population · Pataliputra ~300k · standardized currency/weights · imperial roads',
      },
      L3: {
        cn: '婆罗门-刹帝利等级制 + Kautilya《政事论》中央集权官僚 + Dharma 法治 + 阿育王石柱（最早法律公示）',
        en: 'Brahmin-Kshatriya hierarchy + Kautilya\'s Arthashastra centralized bureaucracy + Dharma rule + Ashokan Pillars (earliest public law)',
      },
      L4: {
        cn: '321 BC Chandragupta 立国 → 268 BC Ashoka 即位 → 261 BC Kalinga 大屠杀（10 万死）→ 阿育王皈依佛教 → 派传教士去希腊化世界 + 锡兰',
        en: '321 BC Chandragupta founds → 268 BC Ashoka succeeds → 261 BC Kalinga slaughter (100k dead) → Ashoka converts to Buddhism → sends missionaries to Hellenistic world + Sri Lanka',
      },
      antecedents: [
        { year: -563, label: { cn: '佛陀诞生', en: 'Buddha born' } },
        { year: -327, label: { cn: '亚历山大入侵印度', en: 'Alexander invades' } },
        { year: -321, label: { cn: 'Chandragupta 立国', en: 'Chandragupta founds Maurya' } },
        { year: -268, label: { cn: 'Ashoka 即位', en: 'Ashoka succeeds' } },
        { year: -261, label: { cn: 'Kalinga 大屠杀', en: 'Kalinga War' } },
      ],
      consequences: [
        { year: -250, label: { cn: '佛教传播至锡兰', en: 'Buddhism reaches Ceylon' } },
        { year: -185, label: { cn: 'Maurya 帝国分裂', en: 'Maurya collapses' } },
        { year: 320,  label: { cn: 'Gupta 帝国黄金时代', en: 'Gupta Golden Age' } },
        { year: 600,  label: { cn: '佛教传入中国', en: 'Buddhism reaches China' } },
        { year: 1192, label: { cn: '伊斯兰统治印度（德里苏丹）', en: 'Delhi Sultanate' } },
      ],
    },
  },
  'kalinga': {
    type: 'event',
    lon: 85.85, lat: 20.27,
    year: -261,
    label: { cn: '羯陵伽（屠杀）', en: 'Kalinga (slaughter)' },
    note: { cn: '阿育王征服羯陵伽 · 10 万死 · 触发皈依', en: 'Ashoka\'s conquest · 100k dead · triggered conversion' },
  },
  'sarnath': {
    type: 'city',
    lon: 83.02, lat: 25.38,
    year: -250,
    label: { cn: '鹿野苑（佛教圣地）', en: 'Sarnath (Buddhist holy site)' },
    note: { cn: '佛陀初转法轮地 · 阿育王立柱', en: 'Where Buddha first taught · Ashoka pillar erected' },
  },
  'taxila': {
    type: 'city',
    lon: 72.83, lat: 33.74,
    year: -250,
    label: { cn: '塔克西拉', en: 'Taxila' },
    note: { cn: '希腊化 + 印度学术中心 · 大学传统', en: 'Hellenistic + Indian scholarly hub · university tradition' },
  },

  // ── 启蒙运动 1750 ──
  'paris-1750': {
    type: 'capital',
    lon: 2.3522, lat: 48.8566,
    year: 1750,
    label: { cn: '★ 巴黎（伏尔泰沙龙）', en: 'Paris (Voltaire\'s salons)' },
    note: { cn: '启蒙思想中心 · Encyclopédie 1751-1772', en: 'Center of Enlightenment · Encyclopédie 1751-1772' },
    causality: {
      summary: {
        cn: '启蒙不是"哲学家个人灵感" — 是印刷术成熟 + 海外财富 + 沙龙 / 咖啡馆 + 牛顿物理范式 + 君主开明专制 五力锁定',
        en: 'Enlightenment wasn\'t "philosophers\' inspiration" — locked by mature printing + colonial wealth + salons/coffee houses + Newtonian paradigm + enlightened despotism',
      },
      L0: {
        cn: '欧洲城市密集 + 都市间通信成本低 + 与殖民地新世界商品 / 思想流通 — 思想可以跨国快速传播',
        en: 'Dense European cities + low communication cost + flow of goods/ideas from colonies — ideas spread fast trans-nationally',
      },
      L1: {
        cn: '小冰期结束 + 农业改良（土豆 / 玉米传入）→ 人口增长 + 都市闲暇 → 沙龙 / 咖啡馆文化',
        en: 'End of Little Ice Age + agricultural improvement (potato/maize) → pop growth + urban leisure → salon/cafe culture',
      },
      L2: {
        cn: '印刷术成熟（每年 5 万册书）+ 殖民地财富回流欧洲 + 咖啡 / 茶 / 巧克力进入日常 + 邮政系统覆盖全欧',
        en: 'Printing mature (50k books/yr) + colonial wealth flowing back + coffee/tea/chocolate everyday + Europe-wide postal system',
      },
      L3: {
        cn: '牛顿《原理》1687 立科学范式 + Locke 1689 自由权利论 + Montesquieu 1748 三权分立 + 卢梭 1762 社会契约 + 开明专制（腓特烈 / 凯瑟琳）',
        en: 'Newton 1687 establishes scientific paradigm + Locke 1689 natural rights + Montesquieu 1748 separation + Rousseau 1762 social contract + enlightened despots (Frederick/Catherine)',
      },
      L4: {
        cn: 'Voltaire 进英国 1726 → Encyclopédie 1751 出版 → 美国独立 1776 + 法国大革命 1789 (启蒙的政治后果)',
        en: 'Voltaire to England 1726 → Encyclopédie 1751 → American 1776 + French 1789 revolutions (Enlightenment\'s political consequence)',
      },
      antecedents: [
        { year: 1450, label: { cn: 'Gutenberg 印刷术', en: 'Gutenberg printing' } },
        { year: 1687, label: { cn: '牛顿《原理》', en: 'Newton\'s Principia' } },
        { year: 1689, label: { cn: 'Locke 政府论', en: 'Locke Two Treatises' } },
        { year: 1748, label: { cn: 'Montesquieu 论法精神', en: 'Spirit of the Laws' } },
        { year: 1751, label: { cn: 'Encyclopédie 第一卷', en: 'Encyclopédie Vol. 1' } },
      ],
      consequences: [
        { year: 1762, label: { cn: 'Rousseau 社会契约', en: 'Rousseau Social Contract' } },
        { year: 1776, label: { cn: '美国独立', en: 'American Revolution' } },
        { year: 1787, label: { cn: '美国宪法', en: 'US Constitution' } },
        { year: 1789, label: { cn: '法国大革命', en: 'French Revolution' } },
        { year: 1804, label: { cn: '海地独立', en: 'Haitian Independence' } },
        { year: 1848, label: { cn: '欧洲革命浪潮', en: 'European Revolutions' } },
      ],
    },
  },
  'london-1750': {
    type: 'capital',
    lon: -0.1276, lat: 51.5074,
    year: 1750,
    label: { cn: '伦敦（咖啡馆 + 皇家学会）', en: 'London (coffee houses + Royal Society)' },
    note: { cn: 'Newton 遗产 · 经验主义 · 政治宽容', en: 'Newton\'s legacy · empiricism · political tolerance' },
  },
  'amsterdam-1750': {
    type: 'city',
    lon: 4.9041, lat: 52.3676,
    year: 1750,
    label: { cn: '阿姆斯特丹（出版自由）', en: 'Amsterdam (free press)' },
    note: { cn: '欧洲出版避难所 · Spinoza 故乡', en: 'European publishing refuge · Spinoza\'s home' },
  },
  'edinburgh-1750': {
    type: 'city',
    lon: -3.1883, lat: 55.9533,
    year: 1750,
    label: { cn: '爱丁堡（苏格兰启蒙）', en: 'Edinburgh (Scottish Enlightenment)' },
    note: { cn: 'Hume / Adam Smith · 苏格兰启蒙', en: 'Hume/Adam Smith · Scottish Enlightenment' },
  },

  // ── 二战 1939 ──
  'gdansk': {
    type: 'event',
    lon: 18.65, lat: 54.35,
    year: 1939,
    label: { cn: '★ 但泽（格但斯克）', en: 'Danzig (Gdańsk)' },
    note: { cn: '1939.9.1 德军入侵波兰 · 二战爆发', en: 'Sept 1, 1939 · Germany invades Poland · WWII begins' },
    causality: {
      summary: {
        cn: '二战不是"希特勒一人作恶" — 是凡尔赛体系崩塌 + 大萧条 + 极权意识形态 + 绥靖政策 + 工业军备 五力 20 年累积',
        en: 'WWII wasn\'t "Hitler alone" — 20-year accumulation of Versailles collapse + Depression + totalitarian ideology + appeasement + industrial armament',
      },
      L0: {
        cn: '欧洲分裂的政治地理 + 殖民地遍全球 — 欧洲战争立即变全球战争',
        en: 'Fragmented European political geography + global colonies — European war became global instantly',
      },
      L1: {
        cn: '气候稳定（无影响）— 但 1930s 美国沙尘暴推动了大萧条加深',
        en: 'Stable climate (no impact) — but 1930s Dust Bowl deepened Depression in US',
      },
      L2: {
        cn: '一战工业基础保留 + 大萧条致 25% 失业 + 极权国家把军工当救济（德 1933-39 军费 10 倍）',
        en: 'WWI industrial base preserved + Depression caused 25% unemployment + totalitarian states used munitions as relief (Germany 1933-39 military spending 10x)',
      },
      L3: {
        cn: '凡尔赛和约（1919）惩罚德国 + 国联失败 + 法西斯（意 1922 / 德 1933）+ 共产苏联 + 民主衰退（极权党席卷）',
        en: 'Treaty of Versailles (1919) punished Germany + League of Nations failed + Fascism (Italy 1922 / Germany 1933) + Communist USSR + democratic recession',
      },
      L4: {
        cn: '1933 希特勒上台 → 1936 莱茵兰复占 → 1938 慕尼黑协定 → 1939.8.23 苏德互不侵犯 → 9.1 入侵波兰 → 9.3 英法宣战',
        en: '1933 Hitler rises → 1936 Rhineland reoccupied → 1938 Munich Agreement → Aug 23, 1939 Nazi-Soviet Pact → Sept 1 invasion of Poland → Sept 3 UK/France declare war',
      },
      antecedents: [
        { year: 1918, label: { cn: '一战结束', en: 'WWI ends' } },
        { year: 1919, label: { cn: '凡尔赛和约', en: 'Treaty of Versailles' } },
        { year: 1929, label: { cn: '大萧条', en: 'Great Depression' } },
        { year: 1933, label: { cn: '希特勒上台', en: 'Hitler rises to power' } },
        { year: 1938, label: { cn: '慕尼黑协定', en: 'Munich Agreement' } },
      ],
      consequences: [
        { year: 1941, label: { cn: '巴巴罗萨 + 珍珠港', en: 'Barbarossa + Pearl Harbor' } },
        { year: 1942, label: { cn: '中途岛战役', en: 'Battle of Midway' } },
        { year: 1944, label: { cn: '诺曼底登陆', en: 'D-Day' } },
        { year: 1945, label: { cn: '广岛长崎 + 二战结束', en: 'Hiroshima/Nagasaki + WWII ends' } },
        { year: 1947, label: { cn: '冷战开始', en: 'Cold War begins' } },
        { year: 1948, label: { cn: '联合国 + 以色列建国', en: 'UN + Israel founded' } },
      ],
    },
  },
  'munich-1938': {
    type: 'event',
    lon: 11.58, lat: 48.14,
    year: 1938,
    label: { cn: '慕尼黑（绥靖）', en: 'Munich (appeasement)' },
    note: { cn: '1938.9 张伯伦签慕尼黑协定 · 出卖捷克斯洛伐克', en: 'Sept 1938 Chamberlain signs Munich · sells out Czechoslovakia' },
  },
  'pearl-harbor': {
    type: 'event',
    lon: -157.95, lat: 21.36,
    year: 1941,
    label: { cn: '珍珠港', en: 'Pearl Harbor' },
    note: { cn: '1941.12.7 日袭美 · 太平洋战争开始', en: 'Dec 7, 1941 · Japan attacks · Pacific War begins' },
  },
  'stalingrad': {
    type: 'event',
    lon: 44.50, lat: 48.71,
    year: 1942,
    label: { cn: '斯大林格勒', en: 'Stalingrad' },
    note: { cn: '1942-43 苏军反攻转折点 · 100 万伤亡', en: '1942-43 Soviet turning point · 1M+ casualties' },
  },
  'normandy': {
    type: 'event',
    lon: -0.45, lat: 49.34,
    year: 1944,
    label: { cn: '诺曼底', en: 'Normandy' },
    note: { cn: '1944.6.6 D-Day 盟军开辟第二战场', en: 'June 6, 1944 D-Day · Allied second front' },
  },
  'hiroshima': {
    type: 'event',
    lon: 132.46, lat: 34.39,
    year: 1945,
    label: { cn: '广岛', en: 'Hiroshima' },
    note: { cn: '1945.8.6 原子弹 · 核时代开端', en: 'Aug 6, 1945 atomic bomb · nuclear age begins' },
  },

  // ── 古埃及古王国 2500 BC ──
  'giza': {
    type: 'capital',
    lon: 31.13, lat: 29.98,
    year: -2500,
    label: { cn: '★ 吉萨金字塔', en: 'Giza Pyramids' },
    note: { cn: '胡夫金字塔 ~2560 BC · 古王国巅峰', en: 'Khufu Pyramid ~2560 BC · Old Kingdom apex' },
    causality: {
      summary: {
        cn: '金字塔不是奴隶建的奇迹 — 是尼罗河 + 中央集权 + 文字 + 太阳历 + 贵族信仰 五力锁定',
        en: 'Pyramids weren\'t built by slaves — locked by Nile + centralization + writing + solar calendar + theocratic ideology',
      },
      L0: {
        cn: '尼罗河每年泛滥沉积沃土 + 撒哈拉 / 红海 / 地中海三面封闭 — 易守难攻 + 自给自足 + 河运全国可达',
        en: 'Nile annual flood + sealed by Sahara/Red Sea/Mediterranean — defensible + self-sufficient + nationwide river transport',
      },
      L1: {
        cn: '气候适宜期 + 北非比今天湿润 — 农业产能远超本地需求，可支撑 100 万人 + 大型公共工程',
        en: 'Climate optimum + N. Africa wetter than today — agricultural surplus supported 1M population + monumental projects',
      },
      L2: {
        cn: '~100 万人口 · 河谷耕作 + 灌溉 · 文字（圣书体 ~3200 BC）· 铜器 · 国家粮仓制度',
        en: '~1M people · floodplain agriculture + irrigation · hieroglyphs (~3200 BC) · copper · state granaries',
      },
      L3: {
        cn: '法老神王（神化君主）+ 中央集权官僚 + 维齐尔 + 神职阶级（拉/普塔崇拜）+ 太阳历 365 天',
        en: 'God-king Pharaoh + centralized bureaucracy + viziers + priestly class (Ra/Ptah cult) + 365-day solar calendar',
      },
      L4: {
        cn: '约 2680 BC 第三王朝 Djoser 阶梯金字塔 → 2560 BC Khufu 大金字塔 → 2530 BC Khafre 第二大 → 2500 BC Menkaure 第三',
        en: 'c. 2680 BC Djoser\'s Step Pyramid → 2560 BC Khufu\'s Great Pyramid → 2530 BC Khafre\'s 2nd → 2500 BC Menkaure\'s 3rd',
      },
      antecedents: [
        { year: -3200, label: { cn: '圣书体文字', en: 'Hieroglyphs' } },
        { year: -3100, label: { cn: 'Narmer 统一上下埃及', en: 'Narmer unifies Egypt' } },
        { year: -2680, label: { cn: '阶梯金字塔', en: 'Step Pyramid' } },
        { year: -2580, label: { cn: '胡夫即位', en: 'Khufu reign begins' } },
      ],
      consequences: [
        { year: -2181, label: { cn: '古王国崩溃', en: 'Old Kingdom collapses' } },
        { year: -2055, label: { cn: '中王国', en: 'Middle Kingdom' } },
        { year: -1550, label: { cn: '新王国', en: 'New Kingdom' } },
        { year: -332,  label: { cn: '亚历山大征服', en: 'Alexander conquers' } },
        { year: -30,   label: { cn: 'Cleopatra 死 · 罗马吞并', en: 'Cleopatra dies · Roman annexation' } },
      ],
    },
  },
  'memphis-egypt': {
    type: 'city',
    lon: 31.25, lat: 29.85,
    year: -2500,
    label: { cn: '孟菲斯', en: 'Memphis' },
    note: { cn: '古王国都城 · Ptah 神主城', en: 'Old Kingdom capital · cult of Ptah' },
  },
  'ur': {
    type: 'capital',
    lon: 46.10, lat: 30.96,
    year: -2500,
    label: { cn: '乌尔', en: 'Ur' },
    note: { cn: '苏美尔最强城邦 · 楔形文字 + 太阴历起源', en: 'Most powerful Sumerian city · cuneiform + lunar calendar' },
  },
  'mohenjo-daro': {
    type: 'capital',
    lon: 68.14, lat: 27.32,
    year: -2500,
    label: { cn: '摩亨佐-达罗', en: 'Mohenjo-Daro' },
    note: { cn: '印度河文明双都之一 · 已有下水道', en: 'Twin capital of Indus Valley · had sewers' },
  },

  // ── 大航海 1492 相关 ──
  'palos-1492': {
    type: 'event',
    lon: -6.89, lat: 37.23,
    year: 1492,
    label: { cn: '★ 帕洛斯港 · 哥伦布起航', en: 'Palos · Columbus departs' },
    note: { cn: '1492.8.3 三艘船 + 90 人出海', en: 'Aug 3, 1492 · 3 ships + 90 men set sail' },
    causality: {
      summary: {
        cn: '哥伦布航行不是孤勇 — 是 Reconquista 完成 + 葡萄牙先例 + 银行业 + 印刷术 + 误算地球周长 五力锁定',
        en: 'Columbus\'s voyage wasn\'t solo bravery — locked by completed Reconquista + Portuguese precedent + banking + printing + miscalculated Earth circumference',
      },
      L0: {
        cn: '伊比利亚伸入大西洋 — 唯一面向"未知西方"的欧洲海岸；Trade winds 信风带帮助横渡',
        en: 'Iberia juts into Atlantic — only European coast facing the "unknown west"; trade winds aided crossing',
      },
      L1: {
        cn: '小冰期初期但季风规律 — 大西洋三角航线（西班牙→加纳利→加勒比 ~ 33 天）可预测',
        en: 'Early Little Ice Age but stable trade winds — Atlantic triangle (Spain→Canary→Caribbean ~33 days) was predictable',
      },
      L2: {
        cn: '葡萄牙 1488 已绕非洲 + 1450 印刷术普及 Marco Polo 游记 + 银行家 / 美第奇资助远航 + 大学渐起',
        en: 'Portugal rounded Africa 1488 + 1450 printing spread Marco Polo + bankers/Medici fund expeditions + universities rising',
      },
      L3: {
        cn: 'Reconquista 1492 完成（Granada 陷落）→ 卡斯蒂利亚需新冒险 + 国家资助探险传统（亨利王子 1418）+ 教皇划界条约',
        en: 'Reconquista completed 1492 (Granada falls) → Castile sought new venture + state-funded exploration (Prince Henry 1418) + papal demarcation',
      },
      L4: {
        cn: 'Granada 1492.1 陷落 → Isabella + Ferdinand 接见哥伦布 → 4.17 签约 → 8.3 起航 → 10.12 圣萨尔瓦多登陆',
        en: 'Jan 1492 Granada falls → Isabella + Ferdinand meet Columbus → Apr 17 contract → Aug 3 sails → Oct 12 lands at San Salvador',
      },
      antecedents: [
        { year: 1418, label: { cn: '亨利王子建航海学院', en: 'Prince Henry founds nautical school' } },
        { year: 1453, label: { cn: '君士坦丁堡陷落（陆路丝路被堵）', en: 'Constantinople falls (Silk Road blocked)' } },
        { year: 1488, label: { cn: '迪亚士绕好望角', en: 'Dias rounds Cape of Good Hope' } },
        { year: 1492, label: { cn: 'Reconquista 完成', en: 'Reconquista completed' } },
      ],
      consequences: [
        { year: 1494, label: { cn: '托尔德西利亚斯条约', en: 'Treaty of Tordesillas' } },
        { year: 1498, label: { cn: '达伽马到印度', en: 'Da Gama reaches India' } },
        { year: 1519, label: { cn: '科尔特斯灭阿兹特克', en: 'Cortés destroys Aztec' } },
        { year: 1532, label: { cn: '皮萨罗灭印加', en: 'Pizarro destroys Inca' } },
        { year: 1607, label: { cn: '英国 Jamestown 殖民', en: 'English Jamestown colony' } },
      ],
    },
  },
  'san-salvador': {
    type: 'event',
    lon: -74.50, lat: 24.05,
    year: 1492,
    label: { cn: '圣萨尔瓦多岛（首次登陆）', en: 'San Salvador (first landfall)' },
    note: { cn: '1492.10.12 哥伦布登岛', en: 'Oct 12, 1492 · Columbus lands' },
  },
  'granada-1492': {
    type: 'event',
    lon: -3.59, lat: 37.18,
    year: 1492,
    label: { cn: '格拉纳达（陷落）', en: 'Granada (fall)' },
    note: { cn: '1492.1.2 Reconquista 终结', en: 'Jan 2, 1492 · Reconquista ends' },
  },
  'lisbon-1492': {
    type: 'capital',
    lon: -9.13, lat: 38.72,
    year: 1488,
    label: { cn: '里斯本', en: 'Lisbon' },
    note: { cn: '1488 迪亚士绕过好望角 · 葡萄牙先开海路', en: '1488 Dias rounds Cape · Portugal\'s lead in maritime' },
  },
  'tordesillas': {
    type: 'event',
    lon: -5.00, lat: 41.50,
    year: 1494,
    label: { cn: '托尔德西利亚斯', en: 'Tordesillas' },
    note: { cn: '1494 教皇划西葡分界线 · 全球被两国分割', en: '1494 papal line dividing globe between Spain/Portugal' },
  },

  // ── 一战 1914 相关 ──
  'sarajevo': {
    type: 'event',
    lon: 18.42, lat: 43.86,
    year: 1914,
    label: { cn: '★ 萨拉热窝', en: 'Sarajevo' },
    note: { cn: '1914.6.28 斐迪南大公遇刺 · 一战导火索', en: 'Jun 28, 1914 · Archduke Franz Ferdinand assassinated · WWI trigger' },
    causality: {
      summary: {
        cn: '一战不是"一颗子弹引发" — 是工业军备 + 同盟 / 协约 + 帝国主义 + 民族主义 + 殖民竞争 五力 50 年累积',
        en: 'WWI wasn\'t "triggered by a bullet" — 50-year accumulation of industrial armament + alliances + imperialism + nationalism + colonial rivalry',
      },
      L0: {
        cn: '欧洲人口稠密 + 工业化国家集中 + 殖民地遍全球 — 战争一打就是世界大战，无回旋余地',
        en: 'Densely populated Europe + concentrated industrial nations + global colonies — any war became world war, no escape',
      },
      L1: {
        cn: '小冰期已结束 + 工业化已改变气候 — 但战争靠工业不靠气候',
        en: 'End of Little Ice Age + industry already changing climate — but war depended on industry, not weather',
      },
      L2: {
        cn: '德国钢产 1.7M 吨 / 1914 英国铁路 22 万公里 + 电报 + 内燃机 — 全面工业化武器（机枪 / 火炮 / 毒气 / 飞机 / 潜艇）',
        en: 'Germany 1.7M tons steel / 1914 UK 220k km railway + telegraph + IC engine — totally industrialized weapons (machine gun/artillery/gas/aircraft/submarine)',
      },
      L3: {
        cn: '同盟国（德 / 奥匈 / 奥斯曼）vs 协约国（英 / 法 / 俄）+ 普选权扩展 + 民族主义教育 + 报刊宣传',
        en: 'Central Powers (Germany/Austria-Hungary/Ottoman) vs Allies (UK/France/Russia) + universal suffrage + nationalist education + mass press',
      },
      L4: {
        cn: '普鲁士统一 1871 + 巴尔干战争 1912-13 + 1914.6.28 萨拉热窝刺杀 → 7 月奥匈最后通牒 → 8.1 德对俄宣战 → 8.4 入侵中立比利时 → 英参战',
        en: 'Prussian unification 1871 + Balkan Wars 1912-13 + Jun 28, 1914 Sarajevo → July Austria ultimatum → Aug 1 Germany declares war → Aug 4 invades neutral Belgium → UK joins',
      },
      antecedents: [
        { year: 1871, label: { cn: '普法战争 + 德意志统一', en: 'Franco-Prussian War + German unification' } },
        { year: 1882, label: { cn: '三国同盟（德奥意）', en: 'Triple Alliance' } },
        { year: 1907, label: { cn: '三国协约（英法俄）', en: 'Triple Entente' } },
        { year: 1912, label: { cn: '巴尔干战争', en: 'Balkan Wars' } },
        { year: 1914, label: { cn: '萨拉热窝刺杀', en: 'Sarajevo assassination' } },
      ],
      consequences: [
        { year: 1917, label: { cn: '俄国革命', en: 'Russian Revolution' } },
        { year: 1918, label: { cn: '一战结束 · 4 帝国崩溃', en: 'WWI ends · 4 empires collapse' } },
        { year: 1919, label: { cn: '凡尔赛和约', en: 'Treaty of Versailles' } },
        { year: 1929, label: { cn: '大萧条', en: 'Great Depression' } },
        { year: 1939, label: { cn: '二战爆发', en: 'WWII begins' } },
      ],
    },
  },
  'verdun': {
    type: 'event',
    lon: 5.38, lat: 49.16,
    year: 1916,
    label: { cn: '凡尔登', en: 'Verdun' },
    note: { cn: '1916 凡尔登战役 · 70 万伤亡', en: '1916 Battle of Verdun · 700k casualties' },
  },
  'somme': {
    type: 'event',
    lon: 2.69, lat: 50.00,
    year: 1916,
    label: { cn: '索姆河', en: 'Somme' },
    note: { cn: '1916.7-11 索姆河 · 100 万伤亡', en: 'Jul-Nov 1916 Somme · 1M casualties' },
  },
  'london-1914': {
    type: 'capital',
    lon: -0.1276, lat: 51.5074,
    year: 1914,
    label: { cn: '伦敦', en: 'London' },
    note: { cn: '大英帝国心脏 · 1914.8.4 对德宣战', en: 'British Empire heart · declares war Aug 4, 1914' },
  },
  'berlin-1914': {
    type: 'capital',
    lon: 13.4050, lat: 52.5200,
    year: 1914,
    label: { cn: '柏林', en: 'Berlin' },
    note: { cn: '德意志帝国首都 · Schlieffen 计划', en: 'German Empire capital · Schlieffen Plan' },
  },
  'st-petersburg-1914': {
    type: 'capital',
    lon: 30.31, lat: 59.94,
    year: 1914,
    label: { cn: '圣彼得堡', en: 'St. Petersburg' },
    note: { cn: '俄罗斯帝国都 · 1917 革命中改 Petrograd', en: 'Russian Empire capital · renamed Petrograd 1917' },
  },

  // ── 汉帝国 100 AD（与罗马同时代）─
  'luoyang-han': {
    type: 'capital',
    lon: 112.45, lat: 34.62,
    year: 100,
    label: { cn: '★ 洛阳', en: 'Luoyang' },
    note: { cn: '东汉都城 ~50 万 · 与罗马同时代东方明珠', en: 'E. Han capital ~500k · Eurasia\'s eastern jewel' },
    causality: {
      summary: {
        cn: '东汉繁荣不是"皇帝英明" — 是黄河-长江双核 + 季风 + 铁犁 + 太学官僚 + 丝路开通 五力锁定',
        en: 'Han prosperity was not "wise emperors" — locked by Yellow+Yangtze rivers + monsoon + iron plow + imperial academy + Silk Road',
      },
      L0: {
        cn: '黄河流域 + 长江流域 = 双农业核心 + 北长城 / 西高原 / 东海 / 南热带 天然边界 — 帝国可扩可守',
        en: 'Yellow + Yangtze valleys = twin agricultural cores + Great Wall N / plateau W / sea E / tropics S — empire could expand or defend',
      },
      L1: {
        cn: '西汉气候最适期延续 + 季风规律 — 农业产能巅峰 + 北方游牧压力可控',
        en: 'Han Climatic Optimum continues + reliable monsoons — peak agricultural output + northern nomadic pressure manageable',
      },
      L2: {
        cn: '人口 6000 万 ≈ 罗马 · 铁犁 / 龙骨水车 / 牛耕 / 桑蚕业 · 冶铁国营 · 五铢钱',
        en: 'Population ~60M ≈ Rome · iron plow/dragon-bone water-pump/ox plowing/silk · state iron monopoly · wuzhu coinage',
      },
      L3: {
        cn: '三公九卿 + 太学（公元前 124 立）+ 察举制（孝廉）+ 罢黜百家独尊儒术（董仲舒）+ 郡县制 + 丝绸之路',
        en: 'Three Lords/Nine Ministers + Imperial Academy (124 BC) + recommendation system + Confucian state orthodoxy (Dong Zhongshu) + commanderies + Silk Road',
      },
      L4: {
        cn: '汉武帝（141-87 BC）拓土 + 张骞 138 BC 通西域 → 9 王莽篡 → 25 光武中兴 → 100 班超经营西域 → 105 蔡伦造纸',
        en: 'Wu Di (141-87 BC) expansion + Zhang Qian 138 BC opens Silk Road → 9 Wang Mang usurps → 25 Han restored → 100 Ban Chao in Western Regions → 105 Cai Lun invents paper',
      },
      antecedents: [
        { year: -221, label: { cn: '秦统一中国', en: 'Qin unifies China' } },
        { year: -202, label: { cn: '汉立国', en: 'Han founded' } },
        { year: -141, label: { cn: '汉武帝即位', en: 'Wu Di succeeds' } },
        { year: -138, label: { cn: '张骞通西域', en: 'Zhang Qian to Western Regions' } },
        { year: -124, label: { cn: '太学创立', en: 'Imperial Academy founded' } },
      ],
      consequences: [
        { year: 105, label: { cn: '蔡伦造纸', en: 'Cai Lun invents paper' } },
        { year: 184, label: { cn: '黄巾起义', en: 'Yellow Turban Rebellion' } },
        { year: 220, label: { cn: '汉亡 · 三国分立', en: 'Han falls · Three Kingdoms' } },
        { year: 581, label: { cn: '隋统一', en: 'Sui reunifies' } },
        { year: 618, label: { cn: '唐立国', en: 'Tang founded' } },
      ],
    },
  },
  'changan-han': {
    type: 'city',
    lon: 108.93, lat: 34.27,
    year: 100,
    label: { cn: '长安（西汉旧都）', en: "Chang'an (former W. Han capital)" },
    note: { cn: '西汉首都 · 丝路东端起点', en: 'W. Han capital · Silk Road eastern terminus' },
  },
  'dunhuang-han': {
    type: 'city',
    lon: 94.66, lat: 40.14,
    year: 100,
    label: { cn: '敦煌', en: 'Dunhuang' },
    note: { cn: '丝路重镇 · 玉门关', en: 'Silk Road outpost · Yumen Pass' },
  },
  'rome-100': {
    type: 'capital',
    lon: 12.4964, lat: 41.9028,
    year: 100,
    label: { cn: '罗马（对照点）', en: 'Rome (compare)' },
    note: { cn: '欧亚两极同时存在的另一个帝国', en: 'Eurasian twin pole · the other empire' },
  },

  // ── 罗马帝国巅峰 117 AD 相关 ──
  'rome-117': {
    type: 'capital',
    lon: 12.4964, lat: 41.9028,
    year: 117,
    label: { cn: '★ 罗马', en: 'Rome' },
    note: { cn: '帝国首都 · ~100 万人 · 图拉真去世', en: 'Imperial capital · ~1M people · Trajan dies 117' },
    causality: {
      summary: {
        cn: '罗马 117 年的"巅峰"不是英雄个人 — 是地中海 + 罗马道 + 公民法 + 军团 + 三元铸币 五力锁定',
        en: 'Rome\'s 117 AD peak was not heroic — five forces locked: Mediterranean + roads + civic law + legions + tripartite coinage',
      },
      L0: {
        cn: '地中海 = 内海贸易超高速公路（"Mare Nostrum 我们的海"）+ 阿尔卑斯 / 撒哈拉天然防线 — 地理给了罗马"不输的底牌"',
        en: 'Mediterranean = high-speed inland trade highway ("Mare Nostrum") + Alps/Sahara defensive walls — geography gave Rome a "can\'t-lose" base',
      },
      L1: {
        cn: '罗马气候最适期（250 BC - 400 AD）· 比今天暖 1°C — 北方农业极限北推到不列颠 / 莱茵河，帝国能养 6000 万人',
        en: 'Roman Climatic Optimum (250 BC - 400 AD) · ~1°C warmer — northern agriculture pushed to Britain/Rhine, sustained 60M population',
      },
      L2: {
        cn: '6000 万人口 = 全人类 1/4 · 罗马城 100 万 · 标准化罗马道 8 万公里 · 公民权扩展 + 三元金/银/铜币',
        en: '60M population = 25% of humanity · Rome 1M · 80,000 km Roman roads · expanding citizenship + tripartite gold/silver/copper currency',
      },
      L3: {
        cn: '罗马法（Ius Civile + Ius Gentium）+ 元老院 / 公民大会 + 行省总督制 + 罗马军团（28 个 legio + auxilia）+ 元首制（Augustus 立）',
        en: 'Roman Law (Ius Civile + Ius Gentium) + Senate / Comitia + provincial governors + 28 legions + auxilia + Principate (founded by Augustus)',
      },
      L4: {
        cn: '图拉真（98-117）征服 Dacia（106）+ Parthia（114-117）→ 帝国版图最大值 → 117 哈德良继位转守',
        en: 'Trajan (98-117) conquers Dacia (106) + Parthia (114-117) → empire reaches max extent → 117 Hadrian succeeds, switches to defense',
      },
      antecedents: [
        { year: -509, label: { cn: '罗马共和国建立', en: 'Roman Republic founded' } },
        { year: -27,  label: { cn: 'Augustus 元首制', en: 'Augustus founds Principate' } },
        { year: 14,   label: { cn: 'Augustus 去世', en: 'Augustus dies' } },
        { year: 96,   label: { cn: '五贤帝时代开启', en: 'Five Good Emperors begin' } },
        { year: 106,  label: { cn: '征服 Dacia', en: 'Conquest of Dacia' } },
      ],
      consequences: [
        { year: 180,  label: { cn: '马可奥勒留去世，五贤帝结束', en: 'Marcus Aurelius dies, end of Five Good Emperors' } },
        { year: 235,  label: { cn: '三世纪危机', en: 'Crisis of the Third Century' } },
        { year: 313,  label: { cn: '米兰敕令（基督教合法）', en: 'Edict of Milan' } },
        { year: 330,  label: { cn: '迁都君士坦丁堡', en: 'Capital moves to Constantinople' } },
        { year: 476,  label: { cn: '西罗马帝国灭亡', en: 'Fall of Western Roman Empire' } },
      ],
    },
  },
  'alexandria-117': {
    type: 'city',
    lon: 29.92, lat: 31.20,
    year: 117,
    label: { cn: '亚历山大', en: 'Alexandria' },
    note: { cn: '罗马第二大城 + 亚历山大图书馆 · 知识中心', en: 'Second largest Roman city · Library of Alexandria · intellectual hub' },
  },
  'antioch-117': {
    type: 'city',
    lon: 36.16, lat: 36.20,
    year: 117,
    label: { cn: '安条克', en: 'Antioch' },
    note: { cn: '叙利亚行省首府 · 东方贸易门户', en: 'Capital of Roman Syria · gateway to East' },
  },
  'londinium': {
    type: 'city',
    lon: -0.1276, lat: 51.5074,
    year: 117,
    label: { cn: '伦蒂尼姆', en: 'Londinium' },
    note: { cn: '罗马不列颠首府（今伦敦）', en: 'Roman London' },
  },
  'luoyang-117': {
    type: 'capital',
    lon: 112.45, lat: 34.62,
    year: 117,
    label: { cn: '洛阳（东汉都城）', en: 'Luoyang (E. Han)' },
    note: { cn: '东汉都城 · 与罗马同时代的另一极', en: 'Eastern Han capital · Eurasia\'s other pole' },
  },
  'persepolis-117': {
    type: 'city',
    lon: 52.89, lat: 29.94,
    year: 117,
    label: { cn: '泰西封', en: 'Ctesiphon' },
    note: { cn: '帕提亚帝国都城（罗马劲敌）', en: 'Parthian capital · Rome\'s rival' },
  },
  // 注：实际坐标用 Ctesiphon 而非 Persepolis（Ctesiphon = 帕提亚都城；Persepolis 是 Achaemenid 老都，已废）

  // ── 美国独立 · Wikidata 候选精选（额外 pins）──
  'boston-tea-party': {
    type: 'event',
    lon: -71.0524, lat: 42.3536,
    year: 1773,
    label: { cn: '波士顿倾茶事件', en: 'Boston Tea Party' },
    note: { cn: '1773.12.16 殖民者倾倒东印度公司茶叶', en: 'Dec 16, 1773 colonists dump East India Co. tea' },
  },
  'long-island': {
    type: 'event',
    lon: -73.981, lat: 40.665,
    year: 1776,
    label: { cn: '长岛战役', en: 'Battle of Long Island' },
    note: { cn: '1776.8 华盛顿败退 · 革命最低谷', en: 'Aug 1776 Washington retreats · revolution\'s nadir' },
  },
  'trenton': {
    type: 'event',
    lon: -74.7647, lat: 40.2258,
    year: 1776,
    label: { cn: '特伦顿战役', en: 'Battle of Trenton' },
    note: { cn: '1776.12.26 圣诞夜过 Delaware 河奇袭 · 提振士气', en: 'Christmas night Delaware crossing · morale revival' },
  },
  'saratoga': {
    type: 'event',
    lon: -73.65, lat: 43.00,
    year: 1777,
    label: { cn: '萨拉托加战役', en: 'Battle of Saratoga' },
    note: { cn: '1777.10 美方决定性胜利 · 法国正式参战', en: 'Oct 1777 decisive American victory · France joins' },
  },

  // ── 美国南北战争相关 ──
  'fort-sumter': {
    type: 'event',
    lon: -79.87, lat: 32.75,
    year: 1861,
    label: { cn: '萨姆特堡', en: 'Fort Sumter' },
    note: { cn: '1861.4.12 内战第一炮（南卡罗来纳）', en: 'First shots Apr 1861' },
  },
  'gettysburg': {
    type: 'event',
    lon: -77.23, lat: 39.83,
    year: 1863,
    label: { cn: '★ 葛底斯堡', en: 'Gettysburg' },
    note: { cn: '1863.7 战争转折点 + 林肯演讲', en: 'July 1863 turning point · Lincoln\'s Address' },
    causality: {
      summary: {
        cn: '不是单纯的"南北分裂" — 是地理 + 棉花经济 + 工业革命 + 联邦/州权宪政 + 道德觉醒的总爆发',
        en: 'Not just "North-South split" — explosion of geography, cotton economy, industrial rev, federalism, and moral awakening',
      },
      L0: {
        cn: '阿巴拉契亚以西广袤土地 + 密西西比河商道 — 北方工业化 vs 南方棉花种植业 — 地理决定经济模式分裂',
        en: 'Vast lands west of Appalachians + Mississippi River trade — North industrializing vs South cotton plantation — geography determined economic divergence',
      },
      L1: {
        cn: '气候带分异 — 南方亚热带适合棉花（"白色金子"）；北方温带适合工业小镇 + 移民耕作',
        en: 'Climate zones diverged — Southern subtropical for cotton ("white gold") · Northern temperate for industry + immigrant farms',
      },
      L2: {
        cn: '1860 北方工业产值 = 南方 10 倍 · 移民 95% 涌入北方 · 南方 400 万奴隶占人口 1/3 · 棉花占 58% 美国出口',
        en: '1860 Northern industry = 10x Southern · 95% immigrants to North · 4M slaves = 1/3 Southern population · cotton = 58% US exports',
      },
      L3: {
        cn: '宪法妥协（3/5 条款 + 蓄奴州 / 自由州平衡）+ 联邦 vs 州权之争 + 1850 妥协 / Dred Scott 1857 / Kansas-Nebraska 1854 失败 + 共和党 1854 立党反扩张',
        en: 'Constitutional compromises (3/5 clause + slave/free balance) + federalism debate + 1850 Compromise · Dred Scott 1857 · Kansas-Nebraska 1854 fail · Republican Party founded 1854',
      },
      L4: {
        cn: 'Lincoln 1860 当选 → 南卡罗来纳 1860.12 脱离 → 11 州组邦联 → Fort Sumter 1861.4 → Gettysburg 1863.7 转折 → Sherman 烧亚特兰大 1864 → Appomattox 1865.4 投降',
        en: 'Lincoln elected 1860 → SC secedes Dec 1860 → 11 states form CSA → Fort Sumter Apr 1861 → Gettysburg Jul 1863 turning point → Sherman burns Atlanta 1864 → Appomattox Apr 1865',
      },
      antecedents: [
        { year: 1787, label: { cn: '宪法 3/5 条款', en: 'Constitution 3/5 Clause' } },
        { year: 1820, label: { cn: '密苏里妥协', en: 'Missouri Compromise' } },
        { year: 1850, label: { cn: '1850 妥协', en: '1850 Compromise' } },
        { year: 1857, label: { cn: 'Dred Scott 案', en: 'Dred Scott v. Sandford' } },
        { year: 1860, label: { cn: 'Lincoln 当选', en: 'Lincoln elected' } },
        { year: 1861, label: { cn: 'Fort Sumter', en: 'Fort Sumter' } },
      ],
      consequences: [
        { year: 1865, label: { cn: '13 修正案废奴', en: '13th Amendment' } },
        { year: 1868, label: { cn: '14 修正案公民权', en: '14th Amendment' } },
        { year: 1870, label: { cn: '15 修正案投票权', en: '15th Amendment' } },
        { year: 1877, label: { cn: '重建结束', en: 'Reconstruction ends' } },
        { year: 1896, label: { cn: 'Plessy v. Ferguson', en: 'Plessy v. Ferguson' } },
        { year: 1964, label: { cn: '民权法案', en: 'Civil Rights Act' } },
      ],
    },
  },
  'atlanta-1864': {
    type: 'event',
    lon: -84.39, lat: 33.75,
    year: 1864,
    label: { cn: '亚特兰大', en: 'Atlanta' },
    note: { cn: '1864.9 谢尔曼焚城 — 总体战开端', en: 'Sherman burns city Sept 1864 · "total war"' },
  },
  'appomattox': {
    type: 'event',
    lon: -78.83, lat: 37.38,
    year: 1865,
    label: { cn: '阿波马托克斯', en: 'Appomattox' },
    note: { cn: '1865.4.9 李将军投降', en: 'Lee surrenders Apr 9, 1865' },
  },
  'washington-dc': {
    type: 'capital',
    lon: -77.04, lat: 38.91,
    year: 1865,
    label: { cn: '华盛顿（联邦首都）', en: 'Washington, D.C.' },
    note: { cn: 'Lincoln 1865.4.14 在福特剧院遇刺', en: 'Lincoln assassinated Apr 14, 1865' },
  },
  'richmond': {
    type: 'capital',
    lon: -77.44, lat: 37.54,
    year: 1865,
    label: { cn: '里士满（邦联首都）', en: 'Richmond (Confederate)' },
    note: { cn: '邦联首都 1861-1865', en: 'Confederate capital' },
  },

  // ── 美国独立战争相关 ──
  'lexington': {
    type: 'event',
    lon: -71.23, lat: 42.45,
    year: 1775,
    label: { cn: '列克星敦', en: 'Lexington' },
    note: { cn: '1775.4.19 第一枪 — Shot heard round the world', en: '"Shot heard round the world" Apr 1775' },
  },
  'philadelphia-1776': {
    type: 'event',
    lon: -75.16, lat: 39.95,
    year: 1776,
    label: { cn: '★ 费城独立厅', en: 'Independence Hall, Philadelphia' },
    note: { cn: '1776.7.4 独立宣言签署', en: 'Declaration of Independence signed Jul 4, 1776' },
    causality: {
      summary: {
        cn: '不是孤立的"自由斗争" — 是地理 + 商业 + 启蒙思想 + 大宪章遗产 + 七年战争债务的合力',
        en: 'Not an isolated "freedom struggle" — confluence of geography, commerce, Enlightenment, Magna Carta legacy, and Seven Years\' War debt',
      },
      L0: {
        cn: '13 殖民地夹在大西洋与阿巴拉契亚山之间 · 海运便利 + 与英国 5000 公里海洋分隔 — 远到管不住，近到能贸易',
        en: '13 colonies between Atlantic and Appalachians · maritime trade + 5000 km from London — too far to govern, close enough to trade',
      },
      L1: {
        cn: '小冰期末期暖回（1715-1815）+ 北美温带 — 农业产能足以养活 250 万非农人口 + 都市精英',
        en: 'End of Little Ice Age + North American temperate zone — agricultural surplus supported 2.5M colonial population including non-agrarian elites',
      },
      L2: {
        cn: '1776 殖民地 250 万人 · 波士顿 / 纽约 / 费城 三大商业港 · 大西洋三角贸易繁荣 · 印刷出版业发达',
        en: '1776 colonies 2.5M · Boston/NY/Philadelphia trade hubs · Atlantic triangular trade · vibrant printing industry',
      },
      L3: {
        cn: '英国普通法 + 议会传统（来自大宪章 1215 → 权利法案 1689）+ 殖民地议会 + 启蒙思想（Locke / Montesquieu）',
        en: 'English common law + parliamentary tradition (Magna Carta 1215 → Bill of Rights 1689) + colonial assemblies + Enlightenment (Locke, Montesquieu)',
      },
      L4: {
        cn: '七年战争（1763）英国负债 + Stamp Act 1765 / Tea Act 1773 重税 + Boston Tea Party 1773 + Lexington 1775 → 1776 宣告独立',
        en: 'Seven Years\' War (1763) British debt + Stamp Act 1765 / Tea Act 1773 + Boston Tea Party 1773 + Lexington 1775 → 1776 Declaration',
      },
      antecedents: [
        { year: 1215, label: { cn: '大宪章', en: 'Magna Carta' } },
        { year: 1689, label: { cn: '英国权利法案', en: 'English Bill of Rights' } },
        { year: 1763, label: { cn: '七年战争结束', en: 'Seven Years\' War ends' } },
        { year: 1765, label: { cn: '印花税法', en: 'Stamp Act' } },
        { year: 1773, label: { cn: '波士顿倾茶', en: 'Boston Tea Party' } },
        { year: 1775, label: { cn: '列克星敦第一枪', en: 'Lexington' } },
      ],
      consequences: [
        { year: 1781, label: { cn: '约克镇胜利', en: 'Yorktown' } },
        { year: 1783, label: { cn: '巴黎和约', en: 'Treaty of Paris' } },
        { year: 1787, label: { cn: '美国宪法', en: 'US Constitution' } },
        { year: 1789, label: { cn: '法国大革命', en: 'French Revolution' } },
        { year: 1804, label: { cn: '海地独立', en: 'Haitian Independence' } },
      ],
    },
  },
  'yorktown': {
    type: 'event',
    lon: -76.51, lat: 37.24,
    year: 1781,
    label: { cn: '约克镇', en: 'Yorktown' },
    note: { cn: '1781.10 康沃利斯投降 — 决定性胜利', en: 'Cornwallis surrenders Oct 1781' },
  },
  'paris-1783': {
    type: 'city',
    lon: 2.3522, lat: 48.8566,
    year: 1783,
    label: { cn: '巴黎（和约）', en: 'Paris (Treaty)' },
    note: { cn: '1783 巴黎和约 — 英国正式承认美国独立', en: 'Treaty of Paris 1783 — UK recognizes US independence' },
  },
  'london-1776': {
    type: 'city',
    lon: -0.1276, lat: 51.5074,
    year: 1776,
    label: { cn: '伦敦', en: 'London' },
    note: { cn: 'King George III · 七年战争债务沉重', en: 'King George III · heavy Seven Years\' War debt' },
  },

  'avignon': {
    type: 'event',
    lon: 4.81, lat: 43.95,
    year: 1348,
    label: { cn: '阿维尼翁', en: 'Avignon' },
    note: { cn: '教皇克莱门特六世坐镇，半数神职死亡', en: 'Papal seat · half clergy dead' },
  },

  // ── Native Americans 1491 ──
  'cahokia': {
    type: 'city',
    lon: -90.06, lat: 38.66,
    year: 1100,
    label: { cn: '★ 卡霍基亚', en: '★ Cahokia' },
    note: { cn: 'BC 1050-1350 密西西比文化中心 · 北美最大城（~2 万人）', en: '1050-1350 AD · Mississippian culture\'s largest city (~20k)' },
    causality: {
      summary: {
        cn: '北美最早的"城市"不是欧洲带来的 — 是密西西比河谷地理 + 玉米传入 + 中世纪暖期 + 太阳神信仰锁定的必然',
        en: 'North America\'s first "city" wasn\'t European — locked by Mississippi valley geography + maize arrival + Medieval Warm + sun-deity belief',
      },
      L0: {
        cn: '密西西比 + 密苏里 + 俄亥俄三河交汇处 · 全北美水运枢纽 + 黑土沃野 + 鹿群迁徙路径',
        en: 'Mississippi + Missouri + Ohio confluence · all-N-America water hub + black-soil floodplain + deer migration paths',
      },
      L1: {
        cn: '中世纪暖期（950-1250）让玉米能种到 38°N + 渔猎丰饶 + 1250 后干旱 → 城市衰落',
        en: 'Medieval Warm (950-1250) let maize grow to 38°N + abundant fish/game + post-1250 drought → city declines',
      },
      L2: {
        cn: '高峰期 ~2 万人 / 周边 4 万 — 北美最大；4 阶级社会（祭司王 / 贵族 / 平民 / 战俘）',
        en: 'Peak ~20k city / 40k metro — largest in N America; 4-class society (priest-king / nobles / commoners / captives)',
      },
      L3: {
        cn: '玉米三姊妹农业（玉米 + 豆 + 南瓜）+ 太阳神信仰 + 100+ 土丘金字塔 + 长程贸易（贝壳 / 铜 / 燧石）',
        en: 'Three Sisters (maize + bean + squash) + sun deity + 100+ earthen pyramids + long-distance trade (shell / copper / flint)',
      },
      L4: {
        cn: 'AD 200-900 玉米北上东部林地 → 1050 卡霍基亚兴起 → 1100 巨型土丘建成 → 1250 干旱 → 1350 弃城 → c. 1450-1600 易洛魁联盟形成（年代有争议）/ 切罗基继承文化',
        en: 'AD 200-900 maize spreads N to eastern woodlands → 1050 Cahokia rises → 1100 monumental mounds → 1250 drought → 1350 abandoned → c. 1450-1600 Iroquois Confederacy forms (date debated) / Cherokee inherit culture',
      },
      antecedents: [
        { year: 200, label: { cn: '玉米北上东部林地（AD 200-900）', en: 'Maize spreads N to eastern woodlands (AD 200-900)' } },
        { year: 950, label: { cn: '中世纪暖期开始', en: 'Medieval Warm Period begins' } },
        { year: 1050, label: { cn: '卡霍基亚立城', en: 'Cahokia founded' } },
      ],
      consequences: [
        { year: 1250, label: { cn: '大干旱开始', en: 'Mega-drought begins' } },
        { year: 1350, label: { cn: '卡霍基亚被弃', en: 'Cahokia abandoned' } },
        { year: 1491, label: { cn: '易洛魁联盟形成（c. 1450-1600，年代有争议）', en: 'Iroquois Confederacy forms (c. 1450-1600, debated)' } },
        { year: 1492, label: { cn: '哥伦布登陆 → 瘟疫', en: 'Columbus → epidemics' } },
      ],
    },
  },
  'tenochtitlan-1491': {
    type: 'city',
    lon: -99.13, lat: 19.43,
    year: 1491,
    label: { cn: '特诺奇蒂特兰', en: 'Tenochtitlan' },
    note: { cn: '阿兹特克都 · ~20 万人 · 比当时伦敦大', en: 'Aztec capital · ~200k · larger than London' },
  },
  'cuzco-1491': {
    type: 'city',
    lon: -71.97, lat: -13.53,
    year: 1491,
    label: { cn: '库斯科', en: 'Cuzco' },
    note: { cn: '印加都 · 海拔 3400 米', en: 'Inca capital · 3400m elevation' },
  },
  'mesa-verde': {
    type: 'city',
    lon: -108.49, lat: 37.18,
    year: 1200,
    label: { cn: '梅萨维德', en: 'Mesa Verde' },
    note: { cn: '阿那萨齐悬崖宅 · 1300 大干旱后弃', en: 'Anasazi cliff dwellings · abandoned post-1300 drought' },
  },
  'iroquois-confederacy': {
    type: 'event',
    lon: -76.15, lat: 43.05,
    year: 1450,
    label: { cn: '易洛魁联盟', en: 'Iroquois Confederacy' },
    note: { cn: '5 部落联盟 · 影响美国宪法分权制（建立年代 c. 1450-1600，口述传统称 1142，存在争议）', en: '5-nation league · influenced US Constitution (founding c. 1450-1600; oral tradition 1142; debated)' },
  },

  // ── Thirteen Colonies 1750 ──
  'jamestown-1607': {
    type: 'city',
    lon: -76.78, lat: 37.21,
    year: 1607,
    label: { cn: '★ 詹姆斯敦', en: '★ Jamestown' },
    note: { cn: '1607 弗吉尼亚 · 英属北美第一个永久殖民地', en: '1607 Virginia · first permanent English colony' },
    causality: {
      summary: {
        cn: '詹姆斯敦不是冒险偶然 — 是西班牙白银财富 + 伊丽莎白海上崛起 + 烟草需求 + 股份公司制度合力推出',
        en: 'Jamestown wasn\'t accident — pushed by Spanish silver wealth + Elizabethan sea power + tobacco demand + joint-stock companies',
      },
      L0: {
        cn: '切萨皮克湾 · 深水港 + 烟草适宜土壤 + 离西班牙佛罗里达远',
        en: 'Chesapeake Bay · deep port + tobacco-suitable soil + far from Spanish Florida',
      },
      L1: {
        cn: '1607 小冰期早冬粮食危机 · 第一冬 70% 死亡',
        en: '1607 Little Ice Age harsh winter · 70% died first winter',
      },
      L2: {
        cn: '初到 104 人 · 1610 年仅剩 60 · 1622 印第安战争 + 1619 首批非洲人到岸',
        en: '104 settlers arrive · only 60 left by 1610 · 1622 native war + 1619 first Africans arrive',
      },
      L3: {
        cn: '弗吉尼亚公司股份制 + 1619 House of Burgesses（北美第一议会）+ 1612 烟草种植引入',
        en: 'Virginia Company joint-stock + 1619 House of Burgesses (first American assembly) + 1612 tobacco introduced',
      },
      L4: {
        cn: '1607 立殖民 → 1612 烟草 → 1619 议会 + 黑奴 → 1622 印第安战争 → 1624 王室直辖 → 1750 已 50 万人',
        en: '1607 founded → 1612 tobacco → 1619 assembly + slaves → 1622 native war → 1624 royal colony → 1750 had 500k',
      },
      antecedents: [
        { year: 1492, label: { cn: '哥伦布', en: 'Columbus' } },
        { year: 1588, label: { cn: '英败西班牙无敌舰队', en: 'England defeats Spanish Armada' } },
        { year: 1606, label: { cn: '弗吉尼亚公司特许', en: 'Virginia Company chartered' } },
      ],
      consequences: [
        { year: 1619, label: { cn: '首批非洲奴隶 + 议会成立', en: 'First Africans + assembly' } },
        { year: 1620, label: { cn: '五月花到普利茅斯', en: 'Mayflower at Plymouth' } },
        { year: 1750, label: { cn: '13 殖民地 ~120 万人', en: '13 Colonies ~1.2M' } },
        { year: 1776, label: { cn: '独立宣言', en: 'Declaration of Independence' } },
      ],
    },
  },
  'plymouth-1620': {
    type: 'event',
    lon: -70.66, lat: 41.96,
    year: 1620,
    label: { cn: '普利茅斯', en: 'Plymouth' },
    note: { cn: '1620 五月花号 · 清教徒 + 五月花公约', en: '1620 Mayflower · Pilgrims + Mayflower Compact' },
  },
  'philadelphia-1750': {
    type: 'city',
    lon: -75.16, lat: 39.95,
    year: 1750,
    label: { cn: '费城', en: 'Philadelphia' },
    note: { cn: '宾州贵格会城 · 1750 北美最大城 ~3 万', en: 'Quaker city · largest in N America 1750 ~30k' },
  },
  'boston-1750': {
    type: 'city',
    lon: -71.06, lat: 42.36,
    year: 1750,
    label: { cn: '波士顿', en: 'Boston' },
    note: { cn: '清教徒商贸中心 · ~1.5 万人', en: 'Puritan trade hub · ~15k pop' },
  },
  'charleston-1750': {
    type: 'city',
    lon: -79.93, lat: 32.78,
    year: 1750,
    label: { cn: '查尔斯顿', en: 'Charleston' },
    note: { cn: '南方种植园 + 奴隶贸易门户', en: 'Southern plantation + slave-trade port' },
  },

  // ── Westward Expansion 1803 ──
  'louisiana-purchase-1803': {
    type: 'treaty',
    lon: -90.07, lat: 29.95,
    year: 1803,
    label: { cn: '★ 路易斯安那购地', en: '★ Louisiana Purchase' },
    note: { cn: '1803 新奥尔良签约 · 1500 万美元 · 美国领土翻倍', en: '1803 New Orleans treaty · $15M · doubled US territory' },
    causality: {
      summary: {
        cn: '美国领土翻倍不是计划好的扩张 — 是拿破仑欧战急需现金 + 海地革命摧毁法属美洲 + 杰斐逊机会主义抓住',
        en: 'US doubling wasn\'t planned — Napoleon\'s European war cash crisis + Haitian Revolution destroyed French America + Jefferson opportunism',
      },
      L0: {
        cn: '密西西比河 = 北美最大水运动脉 · 控制新奥尔良 = 控制中西部出海口',
        en: 'Mississippi = N America\'s greatest waterway · controlling New Orleans = controlling Midwest export',
      },
      L1: {
        cn: '温和气候适合密西西比河谷扩张 · 但西部仍是未知',
        en: 'Mild climate good for Mississippi expansion · but West still unknown',
      },
      L2: {
        cn: '1800 美国 530 万人 / 西部仅 50 万 · 急需土地给小农',
        en: '1800 USA 5.3M / only 500k west · land hunger for yeoman farmers',
      },
      L3: {
        cn: '杰斐逊农业共和国理想 + 拿破仑《亚眠和约》破裂 / 急需战争资金 + 海地 1791-1804 革命让法国丢甘蔗殖民地',
        en: 'Jefferson\'s yeoman ideal + Napoleon\'s Treaty of Amiens collapse / war chest needed + Haiti 1791-1804 Revolution lost France\'s sugar colony',
      },
      L4: {
        cn: '1801 海地黑人反抗 → 1802 法军远征覆灭 → 1803.4.30 拿破仑突然提议卖整个路易斯安那 → 1803.12 转交 → 1804-06 路易斯-克拉克探险',
        en: '1801 Haitian uprising → 1802 French expedition wiped out → Apr 30 1803 Napoleon offers entire Louisiana → Dec 1803 transfer → 1804-06 Lewis & Clark',
      },
      antecedents: [
        { year: 1763, label: { cn: '法印战争结束 / 法失北美', en: '7 Yrs War / France loses N America' } },
        { year: 1791, label: { cn: '海地革命爆发', en: 'Haitian Revolution begins' } },
        { year: 1800, label: { cn: '杰斐逊当选 + 西班牙密约还路易斯安那给法', en: 'Jefferson elected + Spain secretly returns Louisiana to France' } },
      ],
      consequences: [
        { year: 1804, label: { cn: '路易斯-克拉克探险', en: 'Lewis & Clark Expedition' } },
        { year: 1830, label: { cn: '《印第安人迁移法》', en: 'Indian Removal Act' } },
        { year: 1846, label: { cn: '美墨战争 / 西扩高潮', en: 'Mexican-American War / westward peak' } },
        { year: 1862, label: { cn: '宅地法', en: 'Homestead Act' } },
      ],
    },
  },
  'st-louis-1804': {
    type: 'city',
    lon: -90.20, lat: 38.63,
    year: 1804,
    label: { cn: '圣路易斯', en: 'St. Louis' },
    note: { cn: '路易斯-克拉克出发地 · 西扩门户', en: 'Lewis & Clark departure · Gateway to the West' },
  },
  'fort-mandan': {
    type: 'event',
    lon: -101.07, lat: 47.30,
    year: 1804,
    label: { cn: '曼丹堡', en: 'Fort Mandan' },
    note: { cn: '1804-05 路易斯-克拉克过冬营地', en: '1804-05 Lewis & Clark winter camp' },
  },
  'astoria-pacific': {
    type: 'event',
    lon: -123.83, lat: 46.19,
    year: 1805,
    label: { cn: '太平洋岸（阿斯托利亚）', en: 'Pacific Coast (Astoria)' },
    note: { cn: '1805 路易斯-克拉克抵太平洋', en: '1805 Lewis & Clark reach Pacific' },
  },
  'trail-of-tears-1830': {
    type: 'event',
    lon: -88.5, lat: 35.0,
    year: 1838,
    featured: true,
    label: { cn: '★ 血泪之路', en: '★ Trail of Tears' },
    note: { cn: '1838-39 Cherokee 强迁 ~4k 死；广义 1830-50 五大部族 ≥10k 死', en: '1838-39 Cherokee forced removal ~4k die; broader 1830-50 ≥10k across 5 tribes' },
    causality: {
      summary: {
        cn: '不是 Jackson 个人决定 — 是地理 + 棉花经济 + 联邦权力 + 种族意识形态合力推出的种族清洗',
        en: 'Not Jackson\'s personal decision — structural ethnic cleansing from geography + cotton economy + federal power + racial ideology',
      },
      L0: {
        cn: '美国东南部肥沃黑土带（深南部）+ 阿拉巴契亚以东的部族祖地正好与棉花气候带重叠 — 经济价值碰撞最高',
        en: 'Fertile Black Belt of US Southeast + ancestral tribal lands east of Appalachia overlap exactly with cotton climate zone — peak economic-value collision',
      },
      L1: {
        cn: '1820s-30s 全球棉花需求暴涨 — 英国工业革命纺织厂年用棉 100 万包 → 美国南方种植园需要大规模新土地',
        en: '1820s-30s global cotton demand explodes — UK industrial textile mills consume 1M bales/yr → US Southern planters demand vast new land',
      },
      L2: {
        cn: '1830 年五大部族（Cherokee/Creek/Choctaw/Chickasaw/Seminole）~6 万人定居 + 已部分基督化 + Cherokee 自创字母（Sequoyah 1821）+ 拥有黑奴种植园 — 已是"文明"标准下的同化部族，迁徙摧毁巨大社会资本',
        en: '1830 ~60k members of 5 Civilized Tribes (Cherokee/Creek/Choctaw/Chickasaw/Seminole), partly Christianized, Cherokee syllabary (Sequoyah 1821), even owned slave plantations — assimilated by "civilized" standards, removal destroyed huge social capital',
      },
      L3: {
        cn: 'Indian Removal Act 1830（Jackson 推） + Worcester v. Georgia 1832 最高法院判 GA 败但 Jackson 拒执行（"John Marshall 已判，让他自己去执行"传为名言但 apocryphal） + 1835 New Echota 不平等条约 — 仅 ~500 Cherokee 签字代表 1.7 万族人',
        en: 'Indian Removal Act 1830 (Jackson-driven) + Worcester v. Georgia 1832 Supreme Court rules vs GA but Jackson refuses to enforce ("John Marshall has made his decision; now let him enforce it" — apocryphal) + 1835 Treaty of New Echota — only ~500 Cherokee signed for 17k tribe',
      },
      L4: {
        cn: '1830 Indian Removal Act → 1831 Choctaw 强迁 → 1836 Creek 强迁 → 1838.5 Cherokee 集中营 → 1838-39 冬 走 1900 km 至 Oklahoma → ~4000 死途中 → 1842 Seminole 战败 — 五大部族失祖地',
        en: '1830 Removal Act → 1831 Choctaw removed → 1836 Creek removed → May 1838 Cherokee herded into stockades → winter 1838-39 walk 1900 km to Oklahoma → ~4000 die en route → 1842 Seminoles defeated — 5 tribes lose ancestral lands',
      },
      antecedents: [
        { year: 1763, label: { cn: '英王公告划"印第安线"', en: 'Royal Proclamation: Indian Line' } },
        { year: 1789, label: { cn: 'Washington "文明化"政策', en: 'Washington "civilization" policy' } },
        { year: 1828, label: { cn: '佐治亚发现金矿（Cherokee 地）', en: 'Gold found in Georgia (Cherokee land)' } },
        { year: 1830, label: { cn: 'Indian Removal Act', en: 'Indian Removal Act' } },
        { year: 1832, label: { cn: 'Worcester v. Georgia 判决', en: 'Worcester v. Georgia ruling' } },
        { year: 1835, label: { cn: 'New Echota 不平等条约', en: 'Treaty of New Echota' } },
      ],
      consequences: [
        { year: 1842, label: { cn: '第二次 Seminole 战争结束', en: 'Second Seminole War ends' } },
        { year: 1862, label: { cn: 'Homestead Act 给白人发地', en: 'Homestead Act gives land to whites' } },
        { year: 1887, label: { cn: 'Dawes Act 进一步分割保留地', en: 'Dawes Act further breaks reservations' } },
        { year: 1924, label: { cn: 'Indian Citizenship Act', en: 'Indian Citizenship Act' } },
        { year: 1978, label: { cn: 'AIRFA 印第安宗教自由法案', en: 'AIRFA — Indian religious freedom act' } },
      ],
    },
  },

  // ── Slavery Divisions 1850 ──
  'compromise-1850': {
    type: 'treaty',
    lon: -77.04, lat: 38.91,
    year: 1850,
    label: { cn: '★ 1850 妥协', en: '★ Compromise of 1850' },
    note: { cn: '5 法案 · 加州自由 + 逃奴法 · 内战前最后妥协', en: '5 bills · CA free + Fugitive Slave Act · last compromise before war' },
    causality: {
      summary: {
        cn: '1850 妥协不是政治家智慧 — 是加州金矿 + 工业棉花需求 + 道德分歧 + 联邦平衡机制锁定的临时拖延',
        en: '1850 Compromise wasn\'t political wisdom — temporary delay locked by CA gold + industrial cotton demand + moral divergence + federal balance machinery',
      },
      L0: {
        cn: '北方寒冷 + 河流网（运河 + 铁路）= 工厂体系；南方亚热带平原 + 棉花地理 = 种植园奴隶制',
        en: 'Cold North + river/canal/rail network = factory system; subtropical Southern plain + cotton geography = plantation slavery',
      },
      L1: {
        cn: '气候稳定但棉花地理决定南方经济路径锁定',
        en: 'Climate stable but cotton geography locks Southern economic path',
      },
      L2: {
        cn: '1850 北方 1300 万自由人 / 南方 600 万白人 + 320 万奴隶 + 50 万自由黑人',
        en: '1850 · 13M N free / 6M S whites + 3.2M enslaved + 500k free Blacks',
      },
      L3: {
        cn: '1820 密苏里妥协（36°30\') + 北方废奴主义 + 南方种植园寡头 + 国会南北势均力敌（每立新州必平衡）',
        en: '1820 Missouri Compromise (36°30\') + N abolitionism + S planter oligarchy + Congressional NS parity (every new state must balance)',
      },
      L4: {
        cn: '1848 美墨战争得加州 / 黄金潮 → 加州申请自由州 → 平衡破裂 → 1850 Henry Clay 5 法案妥协 → 但更刺激北方反奴',
        en: '1848 Mexican War wins CA / gold rush → CA applies as free → balance broken → 1850 Henry Clay\'s 5 bills → but more inflames N anti-slavery',
      },
      antecedents: [
        { year: 1820, label: { cn: '密苏里妥协', en: 'Missouri Compromise' } },
        { year: 1831, label: { cn: 'Nat Turner 起义', en: 'Nat Turner Rebellion' } },
        { year: 1848, label: { cn: '美墨战争结束 / 加州金矿', en: 'Mexican War ends / CA gold' } },
      ],
      consequences: [
        { year: 1852, label: { cn: '《汤姆叔叔的小屋》', en: 'Uncle Tom\'s Cabin' } },
        { year: 1854, label: { cn: '堪萨斯-内布拉斯加法 + 共和党立党', en: 'Kansas-Nebraska Act + Republican Party' } },
        { year: 1857, label: { cn: 'Dred Scott 判决', en: 'Dred Scott decision' } },
        { year: 1859, label: { cn: 'Harpers Ferry 起义', en: 'Harpers Ferry raid' } },
        { year: 1861, label: { cn: '南北战争爆发', en: 'Civil War begins' } },
      ],
    },
  },
  'missouri-compromise-1820': {
    type: 'treaty',
    lon: -92.18, lat: 38.58,
    year: 1820,
    label: { cn: '密苏里妥协', en: 'Missouri Compromise' },
    note: { cn: '1820 · 36°30\' 以北禁奴 · 第一次平衡尝试', en: '1820 · no slavery N of 36°30\' · first balance' },
  },
  'harpers-ferry-1859': {
    type: 'battle',
    lon: -77.74, lat: 39.32,
    year: 1859,
    label: { cn: 'Harpers Ferry', en: 'Harpers Ferry' },
    note: { cn: 'John Brown 起义 · 内战导火索之一', en: 'John Brown raid · spark of Civil War' },
  },
  'underground-rr': {
    type: 'event',
    lon: -83.0, lat: 41.5,
    year: 1850,
    label: { cn: '地下铁路（俄亥俄渡口）', en: 'Underground Railroad (Ohio crossings)' },
    note: { cn: 'Harriet Tubman 等帮 ~10 万人逃北', en: 'Tubman et al · ~100k escaped N' },
  },
  'bleeding-kansas-1856': {
    type: 'battle',
    lon: -95.69, lat: 38.97,
    year: 1856,
    label: { cn: '"流血的堪萨斯"', en: 'Bleeding Kansas' },
    note: { cn: '1854-58 自由派 vs 蓄奴派武装冲突 · 内战预演', en: '1854-58 free-soilers vs pro-slavery armed clashes · Civil War rehearsal' },
  },

  // ── Mesopotamia BC 1750 ──
  'babylon-bc1750': {
    type: 'capital',
    lon: 44.42, lat: 32.54,
    year: -1750,
    label: { cn: '★ 巴比伦', en: '★ Babylon' },
    note: { cn: '汉谟拉比都 · 282 条法典 · 「以眼还眼」', en: 'Hammurabi\'s capital · 282 laws · "eye for eye"' },
    causality: {
      summary: {
        cn: '汉谟拉比法典不是个人立法天才 — 是两河冲积平原 + 灌溉危机 + 贸易城邦混乱 + 王权神授合力推出的制度必然',
        en: 'Hammurabi\'s Code wasn\'t personal genius — locked by alluvial plains + irrigation crisis + city-state chaos + divine kingship',
      },
      L0: {
        cn: '幼发拉底 + 底格里斯冲积平原 · 极度肥沃但无天然防线 + 灌溉系统决定生死',
        en: 'Euphrates + Tigris alluvial plain · ultra-fertile but no natural defenses + irrigation = life or death',
      },
      L1: {
        cn: 'BC 2200-1750 长期干旱化 → 苏美尔式分散城邦失灵 → 必须中央协调灌溉',
        en: 'BC 2200-1750 long aridification → Sumerian-style decentralized city-states fail → need central irrigation coordination',
      },
      L2: {
        cn: '巴比伦 ~6 万人 / 两河流域 ~50 万 · 城市化 + 多语言（苏美尔 / 阿卡德 / 阿摩利）+ 商人 + 农奴 + 奴隶分层',
        en: 'Babylon ~60k / Mesopotamia ~500k · urbanized + multilingual (Sumerian / Akkadian / Amorite) + merchants + serfs + slaves stratified',
      },
      L3: {
        cn: '楔形文字 250 年成熟 + 神庙经济 + 王权神授（Marduk 神选）+ 之前 Ur-Nammu 法典（BC 2100）+ Lipit-Ishtar 法典（BC 1934）已有先例',
        en: 'Cuneiform 250yrs mature + temple economy + divine kingship (chosen by Marduk) + earlier Ur-Nammu Code (BC 2100) + Lipit-Ishtar Code (BC 1934) as precedents',
      },
      L4: {
        cn: 'BC 1894 巴比伦立国 → BC 1792 汉谟拉比即位 → BC 1763 击败 Larsa 统一两河 → BC 1754 颁《法典》刻玄武岩柱 → BC 1750 卒 → BC 1595 赫梯灭巴比伦',
        en: 'BC 1894 Babylon founded → BC 1792 Hammurabi ascends → BC 1763 defeats Larsa, unifies Mesopotamia → BC 1754 Code carved on basalt stele → BC 1750 dies → BC 1595 Hittites sack Babylon',
      },
      antecedents: [
        { year: -3500, label: { cn: '苏美尔城邦兴起', en: 'Sumerian city-states rise' } },
        { year: -2100, label: { cn: 'Ur-Nammu 法典', en: 'Ur-Nammu Code' } },
        { year: -1894, label: { cn: '巴比伦立国', en: 'Babylon founded' } },
      ],
      consequences: [
        { year: -1595, label: { cn: '赫梯灭巴比伦', en: 'Hittite sack' } },
        { year: -612, label: { cn: '新巴比伦灭亚述', en: 'Neo-Babylonian destroys Assyria' } },
        { year: -539, label: { cn: '波斯居鲁士灭巴比伦', en: 'Persian Cyrus conquers Babylon' } },
        { year: -450, label: { cn: '法典传统影响希腊', en: 'Law tradition reaches Greece' } },
      ],
    },
  },
  'ur-bc1750': {
    type: 'city',
    lon: 46.10, lat: 30.96,
    year: -1750,
    label: { cn: '乌尔', en: 'Ur' },
    note: { cn: '苏美尔古都 · 亚伯拉罕故乡（圣经传说）', en: 'Sumerian capital · Abraham\'s birthplace (Biblical)' },
  },
  'nineveh-bc1750': {
    type: 'city',
    lon: 43.15, lat: 36.36,
    year: -1750,
    label: { cn: '尼尼微', en: 'Nineveh' },
    note: { cn: '亚述兴起前的城市', en: 'Pre-Assyrian city' },
  },
  'memphis-bc1750': {
    type: 'capital',
    lon: 31.25, lat: 29.85,
    year: -1750,
    label: { cn: '孟菲斯（埃及）', en: 'Memphis (Egypt)' },
    note: { cn: '埃及中王国都城', en: 'Egyptian Middle Kingdom capital' },
  },
  'mohenjo-daro': {
    type: 'city',
    lon: 68.14, lat: 27.33,
    year: -1750,
    label: { cn: '摩亨佐-达罗', en: 'Mohenjo-daro' },
    note: { cn: '印度河文明大城 · 棋盘格街道 + 排水系统', en: 'Indus Valley city · grid streets + sewers' },
  },

  // ── Ancient Hebrews BC 950 ──
  'jerusalem-bc950': {
    type: 'capital',
    lon: 35.23, lat: 31.78,
    year: -950,
    label: { cn: '★ 耶路撒冷（第一圣殿）', en: '★ Jerusalem (First Temple)' },
    note: { cn: 'BC 957 所罗门建第一圣殿 · 一神论中心（疆域据圣经传统；考古证据指向较小高地政体）', en: 'BC 957 Solomon builds First Temple · monotheism center (extent per biblical tradition; archaeology suggests smaller polity centered on Jerusalem highlands)' },
    causality: {
      summary: {
        cn: '一神信仰 + 圣殿崇拜不是个人灵感 — 是黎凡特陆桥地理 + 部落联盟 + 大卫王权 + 与周边多神文明对抗合力锁定（疆域据圣经传统；考古证据指向较小高地政体）',
        en: 'Monotheism + Temple worship wasn\'t personal vision — locked by Levantine corridor + tribal confederation + Davidic kingship + opposition to polytheist neighbors (extent per biblical tradition; archaeology suggests smaller polity centered on Jerusalem highlands)',
      },
      L0: {
        cn: '黎凡特狭长走廊 · 埃及 / 美索不达米亚 / 安纳托利亚之间陆桥 · 地中海港 + 山地 + 沙漠分界',
        en: 'Levantine corridor · land-bridge between Egypt / Mesopotamia / Anatolia · Mediterranean ports + hills + desert',
      },
      L1: {
        cn: 'BC 1200 后区域降温 + 海上民族冲击 → 旧帝国崩溃 → 小邦立国窗口',
        en: 'Post-BC 1200 regional cooling + Sea Peoples disruption → old empires collapse → small-state window',
      },
      L2: {
        cn: '12 部落联盟 ~30-50 万人 · 山地农牧 + 对外贸易（推罗腓尼基港）',
        en: '12-tribe confederation ~300-500k · highland farming/herding + external trade (Tyre / Phoenicia)',
      },
      L3: {
        cn: '出埃及 + 西奈圣约（一神 / 十诫）+ 士师时代松散联盟 → 撒母耳膏抹扫罗 BC 1020 立王 → 大卫 BC 1000 建联合王国 → 所罗门集中圣殿崇拜',
        en: 'Exodus + Sinai covenant (monotheism / 10 Commandments) + Judges era loose league → Samuel anoints Saul BC 1020 → David BC 1000 unifies kingdom → Solomon centralizes Temple worship',
      },
      L4: {
        cn: 'BC 1000 大卫定都耶路撒冷 → BC 970 所罗门即位 → BC 957 第一圣殿落成 → BC 931 国分南北犹大 / 以色列 → BC 722 亚述灭以色列 → BC 586 巴比伦毁第一圣殿 → BC 538 波斯允重建',
        en: 'BC 1000 David capitals Jerusalem → BC 970 Solomon ascends → BC 957 First Temple built → BC 931 split N Israel / S Judah → BC 722 Assyria destroys N → BC 586 Babylon destroys 1st Temple → BC 538 Persian return',
      },
      antecedents: [
        { year: -1446, label: { cn: 'BC 1446 出埃及（圣经传统年代）', en: 'BC 1446 Exodus (biblical tradition)' } },
        { year: -1200, label: { cn: '士师时代开始', en: 'Era of Judges begins' } },
        { year: -1000, label: { cn: '大卫立王国（联合王国规模据圣经传统）', en: 'David founds kingdom (united-kingdom scope per biblical tradition)' } },
      ],
      consequences: [
        { year: -931, label: { cn: '王国南北分裂', en: 'Kingdom splits' } },
        { year: -722, label: { cn: '亚述灭北以色列', en: 'Assyria destroys N Israel' } },
        { year: -586, label: { cn: '巴比伦毁圣殿 + 流亡', en: 'Babylonian Exile' } },
        { year: -515, label: { cn: '第二圣殿建成', en: 'Second Temple built' } },
        { year: 30, label: { cn: '基督教兴起', en: 'Christianity emerges' } },
        { year: 632, label: { cn: '伊斯兰教兴起', en: 'Islam emerges' } },
      ],
    },
  },
  'hebron-bc950': {
    type: 'city',
    lon: 35.10, lat: 31.53,
    year: -950,
    label: { cn: '希伯仑', en: 'Hebron' },
    note: { cn: '亚伯拉罕埋葬地 · 大卫早期都城', en: 'Abraham\'s burial · David\'s early capital' },
  },
  'bethel': {
    type: 'city',
    lon: 35.22, lat: 31.93,
    year: -950,
    label: { cn: '伯特利', en: 'Bethel' },
    note: { cn: '雅各梦见天梯之地', en: 'Jacob\'s ladder dream' },
  },
  'tyre-bc950': {
    type: 'city',
    lon: 35.20, lat: 33.27,
    year: -950,
    label: { cn: '推罗（腓尼基）', en: 'Tyre (Phoenicia)' },
    note: { cn: '腓尼基大港 · 帮所罗门建圣殿', en: 'Phoenician port · supplied Solomon\'s Temple' },
  },

  // ── Mali Empire 1324 ──
  'cairo-1324': {
    type: 'event',
    lon: 31.24, lat: 30.04,
    year: 1324,
    label: { cn: '★ 开罗（曼萨穆萨过境）', en: '★ Cairo (Mansa Musa\'s passage)' },
    note: { cn: '1324 朝觐撒金 · 压低开罗金价数年（al-Umari 称 12 年，存在争议）', en: '1324 Hajj gold-dump · depressed Cairo\'s gold market for years (al-Umari claims 12, contested)' },
    causality: {
      summary: {
        cn: '曼萨穆萨开罗撒金不是炫富——是西非黄金 + 跨撒哈拉商路 + 伊斯兰朝觐义务 + 马里王权合力推出的世界级"软实力"输出（开罗金价被压低数年，al-Umari 称 12 年，存在争议）',
        en: 'Mansa Musa\'s gold-dump wasn\'t flex — locked by W African gold + trans-Saharan trade + Islamic pilgrimage + Mali kingship as world-tier soft power (depressed Cairo gold market for years; al-Umari claims 12, contested)',
      },
      L0: {
        cn: '尼日尔河弯沃野 + 班布克 / 布雷金矿 + 撒哈拉沙漠隔绝 → 黄金垄断',
        en: 'Niger River bend fertile + Bambuk / Bure goldfields + Sahara isolation → gold monopoly',
      },
      L1: {
        cn: '中世纪暖期撒哈拉降雨稍多 + 1300 后渐入小冰期但商队仍通',
        en: 'Medieval Warm slightly more Saharan rain + post-1300 cooling but caravans still pass',
      },
      L2: {
        cn: '马里 ~500 万人 / 廷巴克图 ~10 万 / 交易点遍及撒哈拉 + 北非 + 黄金 + 盐 + 奴隶 + 象牙',
        en: 'Mali ~5M / Timbuktu ~100k / trade nodes across Sahara + N Africa · gold + salt + slaves + ivory',
      },
      L3: {
        cn: '伊斯兰教（11 世纪传入）+ 王权神授 + 廷巴克图大学（Sankore）+ 朝觐为穆斯林君主义务',
        en: 'Islam (arrived 11C) + divine kingship + Timbuktu Sankore University + Hajj is Muslim ruler\'s duty',
      },
      L4: {
        cn: '1235 桑迪亚塔立国 → 1312 曼萨穆萨即位 → 1324-25 朝觐 100+ 骆驼载金 → 撒金致开罗通胀 → 1325 抵麦加 → 返程招募西班牙建筑师建廷巴克图清真寺 → 1375 加泰罗尼亚地图标"全球最富之王"',
        en: '1235 Sundiata founds → 1312 Mansa Musa ascends → 1324-25 Hajj with 100+ camels of gold → gold-dump inflates Cairo → 1325 reaches Mecca → returns with Spanish architect → builds Timbuktu mosques → 1375 Catalan Atlas marks "richest king in world"',
      },
      antecedents: [
        { year: 1235, label: { cn: '马里立国（桑迪亚塔）', en: 'Mali founded (Sundiata)' } },
        { year: 1280, label: { cn: '马里皈依伊斯兰', en: 'Mali converts to Islam' } },
        { year: 1312, label: { cn: '曼萨穆萨即位', en: 'Mansa Musa ascends' } },
      ],
      consequences: [
        { year: 1325, label: { cn: '占领桑海首都加奥', en: 'Captures Songhai capital Gao' } },
        { year: 1375, label: { cn: '加泰罗尼亚地图标西非黄金', en: 'Catalan Atlas marks W African gold' } },
        { year: 1450, label: { cn: '葡萄牙开始非洲海岸探险', en: 'Portugal starts African coast exploration' } },
        { year: 1591, label: { cn: '摩洛哥灭桑海 / 西非帝国时代终', en: 'Morocco destroys Songhai / W African empire era ends' } },
      ],
    },
  },
  'timbuktu-1324': {
    type: 'city',
    lon: -3.00, lat: 16.78,
    year: 1324,
    label: { cn: '廷巴克图', en: 'Timbuktu' },
    note: { cn: '马里学问中心 · Sankore 大学 · 万本手稿', en: 'Mali scholarship hub · Sankore University · 10000+ manuscripts' },
  },
  'niani-1324': {
    type: 'capital',
    lon: -8.40, lat: 11.43,
    year: 1324,
    label: { cn: '尼亚尼（马里都）', en: 'Niani (Mali capital)' },
    note: { cn: '曼萨穆萨王宫 · 尼日尔河上游', en: 'Mansa Musa\'s court · upper Niger' },
  },
  'djenne': {
    type: 'city',
    lon: -4.55, lat: 13.91,
    year: 1324,
    label: { cn: '杰内', en: 'Djenné' },
    note: { cn: '泥砖大清真寺 · 商贸 + 学问城', en: 'Mud-brick Great Mosque · trade + scholarship' },
  },
  'mecca-1324': {
    type: 'event',
    lon: 39.83, lat: 21.42,
    year: 1325,
    label: { cn: '麦加（朝觐目的地）', en: 'Mecca (Hajj destination)' },
    note: { cn: '1325 曼萨穆萨抵麦加完成朝觐', en: '1325 Mansa Musa completes Hajj' },
  },

  // ── Pre-Columbian Americas 1450 ──
  'tenochtitlan-1450': {
    type: 'capital',
    lon: -99.13, lat: 19.43,
    year: 1450,
    label: { cn: '★ 特诺奇蒂特兰', en: '★ Tenochtitlan' },
    note: { cn: '阿兹特克都 · 湖中浮岛 · ~20 万人', en: 'Aztec capital · island in lake · ~200k pop' },
    causality: {
      summary: {
        cn: '阿兹特克帝国不是野蛮征服 — 是墨西哥谷地地理 + 玉米农业 + 三联同盟 + 神权贡赋制锁定的中美必然',
        en: 'Aztec Empire wasn\'t barbarian — locked by Mexico Valley geography + maize agriculture + Triple Alliance + theocratic tribute',
      },
      L0: {
        cn: '墨西哥谷地 · 海拔 2200m 高原湖盆 + 火山土沃 + 群山天然防线',
        en: 'Mexico Valley · 2200m highland lake basin + volcanic soil + mountain defenses',
      },
      L1: {
        cn: '后古典暖期降水稳定 + chinampa 浮田 4 季产玉米',
        en: 'Post-Classic Warm stable rain + chinampa floating gardens grow maize 4 seasons',
      },
      L2: {
        cn: '特诺奇蒂特兰 ~20 万 / 三联同盟控制 ~600 万 / 38 个朝贡省 + 复杂阶级（贵族 / 商人 / 平民 / 农奴 / 奴隶）',
        en: 'Tenochtitlan ~200k / Triple Alliance rules ~6M / 38 tribute provinces + complex classes (nobles / merchants / commoners / serfs / slaves)',
      },
      L3: {
        cn: '玉米三姊妹 + chinampa 浮田 + 神权（Huitzilopochtli 太阳战神 / 人祭维持宇宙）+ 贡赋制 / 战争捕俘 + 象形文字 + 太阳历',
        en: 'Maize 3-sisters + chinampa + theocracy (Huitzilopochtli sun-war god / human sacrifice keeps universe) + tribute system / capture-warfare + glyphs + solar calendar',
      },
      L4: {
        cn: '1325 立特诺奇蒂特兰 → 1428 三联同盟（Tenochtitlan + Texcoco + Tlacopan）→ 1440-1469 Moctezuma I 扩张 → 1450 鼎盛 → 1519 Cortés 抵达 → 1521 灭亡',
        en: '1325 Tenochtitlan founded → 1428 Triple Alliance (Tenochtitlan + Texcoco + Tlacopan) → 1440-1469 Moctezuma I expansion → 1450 peak → 1519 Cortés arrives → 1521 falls',
      },
      antecedents: [
        { year: -1500, label: { cn: 'Olmec 母文明', en: 'Olmec mother civilization' } },
        { year: 200, label: { cn: 'Teotihuacan 兴起', en: 'Teotihuacan rises' } },
        { year: 1325, label: { cn: '特诺奇蒂特兰立城', en: 'Tenochtitlan founded' } },
      ],
      consequences: [
        { year: 1519, label: { cn: 'Cortés 登陆', en: 'Cortés arrives' } },
        { year: 1521, label: { cn: '阿兹特克灭亡', en: 'Aztec falls' } },
        { year: 1545, label: { cn: 'cocoliztli 瘟疫 / 美洲人口崩溃', en: 'cocoliztli epidemic / American demographic collapse' } },
        { year: 1810, label: { cn: '墨西哥独立运动', en: 'Mexican independence' } },
      ],
    },
  },
  'cuzco-1450': {
    type: 'capital',
    lon: -71.97, lat: -13.53,
    year: 1450,
    label: { cn: '库斯科（印加都）', en: 'Cuzco (Inca capital)' },
    note: { cn: 'Pachacuti 重建 · 安第斯山 3400m', en: 'Rebuilt by Pachacuti · Andes 3400m' },
  },
  'chichen-itza': {
    type: 'city',
    lon: -88.57, lat: 20.68,
    year: 1100,
    label: { cn: 'Chichén Itzá（玛雅）', en: 'Chichén Itzá (Maya)' },
    note: { cn: '玛雅后古典中心 · El Castillo 金字塔', en: 'Postclassic Maya hub · El Castillo pyramid' },
  },
  'machu-picchu-future': {
    type: 'city',
    lon: -72.55, lat: -13.16,
    year: 1450,
    label: { cn: '马丘比丘', en: 'Machu Picchu' },
    note: { cn: '1450 印加 Pachacuti 修建 · 山顶皇家庄园', en: '1450 built by Inca Pachacuti · royal mountaintop estate' },
  },
  'cahokia-late': {
    type: 'city',
    lon: -90.06, lat: 38.66,
    year: 1350,
    label: { cn: '卡霍基亚（已弃）', en: 'Cahokia (abandoned)' },
    note: { cn: '1350 大干旱后弃城 · 北美土丘文化遗迹', en: 'Abandoned after 1350 drought · N American mound culture remains' },
  },

  // ── Scientific Revolution 1687 ──
  'cambridge-1687': {
    type: 'event',
    lon: 0.12, lat: 52.20,
    year: 1687,
    label: { cn: '★ 剑桥（牛顿《原理》）', en: '★ Cambridge (Newton\'s Principia)' },
    note: { cn: '1687 三大运动定律 + 万有引力 · 现代科学诞生', en: '1687 3 laws of motion + universal gravitation · birth of modern science' },
    causality: {
      summary: {
        cn: '牛顿《原理》不是天才灵光 — 是文艺复兴 + 宗教改革 + 印刷术 + 大学独立 + 哥白尼-伽利略-开普勒积累 + 皇家学会赞助五力锁定',
        en: 'Newton\'s Principia wasn\'t a flash of genius — locked by Renaissance + Reformation + print + university autonomy + Copernicus-Galileo-Kepler accumulation + Royal Society sponsorship',
      },
      L0: {
        cn: '欧洲多核心政治格局 · 没有单一霸主能压制思想 · 英伦三岛 + 海港城市保护知识传播',
        en: 'Europe\'s polycentric polity · no single hegemon can suppress thought · British Isles + port cities protect ideas',
      },
      L1: {
        cn: '小冰期低温 / 异常天象 → 激发观测 + 历法改革需求',
        en: 'Little Ice Age cold / unusual celestial events → spurs observation + calendar reform need',
      },
      L2: {
        cn: '17 世纪欧洲 ~7800 万人 / 城市化 + 中产识字率上升 / 印本书千万册流通',
        en: '17C Europe ~78M / urbanization + middle-class literacy rises / millions of printed books circulate',
      },
      L3: {
        cn: '1543 哥白尼《天体运行论》+ 1517 路德破教廷权威 + 1450 古登堡印刷 + 大学独立 + 1660 皇家学会 / 1666 法国科学院 + 实验方法（Bacon）+ 数学化（Descartes）',
        en: '1543 Copernicus De Revolutionibus + 1517 Luther breaks Church authority + 1450 Gutenberg + university autonomy + 1660 Royal Society / 1666 Académie + experimental method (Bacon) + mathematization (Descartes)',
      },
      L4: {
        cn: '1543 哥白尼日心 → 1572 第谷超新星 → 1610 伽利略望远镜见木星卫星 → 1609 开普勒椭圆轨道 → 1665 牛顿瘟疫年家居发展微积分 + 万有引力 → 1687 Halley 出资出版《原理》',
        en: '1543 Copernicus heliocentric → 1572 Tycho\'s supernova → 1610 Galileo\'s telescope sees Jupiter moons → 1609 Kepler\'s elliptical orbits → 1665 Newton\'s plague-year develops calculus + gravity → 1687 Halley funds Principia\'s publication',
      },
      antecedents: [
        { year: 1450, label: { cn: '古登堡印刷术', en: 'Gutenberg press' } },
        { year: 1517, label: { cn: '宗教改革', en: 'Reformation' } },
        { year: 1543, label: { cn: '哥白尼日心说', en: 'Copernicus heliocentric' } },
        { year: 1610, label: { cn: '伽利略望远镜', en: 'Galileo\'s telescope' } },
        { year: 1660, label: { cn: '皇家学会成立', en: 'Royal Society founded' } },
      ],
      consequences: [
        { year: 1750, label: { cn: '启蒙运动', en: 'Enlightenment' } },
        { year: 1769, label: { cn: '瓦特蒸汽机', en: 'Watt\'s steam engine' } },
        { year: 1776, label: { cn: '美国独立 + Smith 国富论', en: 'American Independence + Smith\'s Wealth of Nations' } },
        { year: 1789, label: { cn: '法国大革命', en: 'French Revolution' } },
        { year: 1859, label: { cn: '达尔文《物种起源》', en: 'Darwin Origin of Species' } },
        { year: 1905, label: { cn: '爱因斯坦相对论', en: 'Einstein relativity' } },
      ],
    },
  },
  'padua-galileo': {
    type: 'event',
    lon: 11.88, lat: 45.41,
    year: 1610,
    label: { cn: '帕多瓦（伽利略）', en: 'Padua (Galileo)' },
    note: { cn: '1610 望远镜见木星卫星 · 1633 罗马审判', en: '1610 telescope spots Jupiter moons · 1633 Rome trial' },
  },
  'paris-academie': {
    type: 'event',
    lon: 2.35, lat: 48.85,
    year: 1666,
    label: { cn: '巴黎科学院', en: 'Académie des Sciences' },
    note: { cn: '1666 路易十四创立 · 法国王室科学赞助', en: '1666 founded by Louis XIV · French royal science patronage' },
  },
  'royal-society-london': {
    type: 'event',
    lon: -0.13, lat: 51.51,
    year: 1660,
    label: { cn: '伦敦皇家学会', en: 'Royal Society (London)' },
    note: { cn: '1660 立 · "Nullius in verba" · 牛顿 1703 任主席', en: '1660 founded · "Nullius in verba" · Newton president 1703' },
  },
  'krakow-copernicus': {
    type: 'event',
    lon: 19.94, lat: 50.06,
    year: 1543,
    label: { cn: '克拉科夫（哥白尼）', en: 'Kraków (Copernicus)' },
    note: { cn: '1543《天体运行论》出版 · 日心说', en: '1543 De Revolutionibus published · heliocentrism' },
  },

  // ── Jacksonian Era 1830 相关 ──
  'nullification-crisis': {
    type: 'treaty',
    lon: -79.9311, lat: 32.7765,
    year: 1832,
    label: { cn: '★ 拒行危机（查尔斯顿）', en: '★ Nullification Crisis (Charleston)' },
    note: { cn: '1832 SC 拒行联邦关税 · Jackson 强硬压制 · 联邦至上确立', en: '1832 SC nullifies federal tariff · Jackson crushes it · federal supremacy upheld' },
    causality: {
      summary: {
        cn: '拒行危机不是 Calhoun 个人野心 — 是棉花地理 + 北方关税保护 + 州权传统 + Jackson 民粹合力推出的宪政摊牌',
        en: 'Nullification Crisis wasn\'t Calhoun\'s ambition — locked by cotton geography + Northern tariff protection + states-rights tradition + Jacksonian populism',
      },
      L0: {
        cn: '南卡查尔斯顿港 · 棉花出口靠英国市场 / 不靠北方工厂 — 关税让南方为北方工业付费',
        en: 'Charleston (SC) port · cotton exported to Britain not to Northern factories — tariffs make South pay for North\'s industry',
      },
      L1: {
        cn: '气候稳定 · 棉花地理决定路径 — 南方经济与北方根本异化',
        en: 'Climate stable · cotton geography locks divergence — South economy fundamentally diverges from North',
      },
      L2: {
        cn: '1830 美国 1280 万人 · 南方棉花出口占全国出口 50%+ · 1828「丑陋关税」让南方地主税负翻倍',
        en: '1830 US 12.8M · cotton 50%+ of US exports · 1828 "Tariff of Abominations" doubles Southern landowner tax burden',
      },
      L3: {
        cn: 'Calhoun《南卡解释》理论 + Jefferson 1798 肯塔基决议传统 + 州主权 vs 联邦至上未决',
        en: 'Calhoun\'s "South Carolina Exposition" + Jefferson\'s 1798 Kentucky Resolutions + unresolved states-rights vs federal supremacy',
      },
      L4: {
        cn: '1828 Tariff → 1832 SC 拒行公告 → Jackson《武力法案》+ 派军舰 → Clay 1833 妥协关税 → 联邦权威立',
        en: '1828 Tariff → 1832 SC Ordinance of Nullification → Jackson\'s Force Bill + warships → Clay\'s 1833 Compromise Tariff → federal authority affirmed',
      },
      antecedents: [
        { year: 1798, label: { cn: 'Kentucky 决议', en: 'Kentucky Resolutions' } },
        { year: 1828, label: { cn: 'Tariff of Abominations', en: 'Tariff of Abominations' } },
        { year: 1828, label: { cn: 'SC Exposition (Calhoun)', en: 'SC Exposition (Calhoun)' } },
      ],
      consequences: [
        { year: 1833, label: { cn: 'Compromise Tariff (Clay)', en: 'Compromise Tariff (Clay)' } },
        { year: 1834, label: { cn: '辉格党立党', en: 'Whig Party formed' } },
        { year: 1861, label: { cn: 'SC 率先脱离联邦', en: 'SC first to secede' } },
      ],
    },
  },
  'andrew-jackson-1828': {
    type: 'event',
    lon: -77.0369, lat: 38.9072,
    year: 1828,
    label: { cn: 'Jackson 当选', en: 'Jackson Elected' },
    note: { cn: '1828「平民总统」· 普选权扩大 · 政党轮替制', en: '1828 "people\'s president" · expanded suffrage · spoils system' },
  },
  'bank-of-us-veto': {
    type: 'event',
    lon: -77.0369, lat: 38.9020,
    year: 1832,
    label: { cn: '银行战争（否决重立）', en: 'Bank War (veto)' },
    note: { cn: '1832 Jackson 否决合众国第二银行重立 · 摧毁中央银行', en: '1832 Jackson vetoes 2nd Bank of US recharter · destroys central bank' },
  },
  'texas-revolution-1836': {
    type: 'battle',
    lon: -95.0633, lat: 29.7494,
    year: 1836,
    label: { cn: '圣哈辛托（德州独立）', en: 'San Jacinto (Texas Indep.)' },
    note: { cn: '1836.4 Houston 击败 Santa Anna · Lone Star 共和国立', en: '1836.4 Houston defeats Santa Anna · Lone Star Republic' },
  },

  // ── Manifest Destiny + Mexican-American War 1848 相关 ──
  'treaty-guadalupe-hidalgo-1848': {
    type: 'treaty',
    lon: -99.1857, lat: 19.4969,
    year: 1848,
    label: { cn: '★ 瓜达卢佩-伊达尔戈条约', en: '★ Treaty of Guadalupe Hidalgo' },
    note: { cn: '1848.2 美付 1500 万 · 墨西哥割 ~135 万 km² · 美国近翻倍', en: '1848.2 $15M · Mexico cedes ~525k mi² · US near-doubles' },
    causality: {
      summary: {
        cn: '美墨战争结果不是 Polk 个人扩张主义 — 是地理边界未定 + 棉花南扩需求 + 「昭昭天命」意识形态 + 墨弱合力推出的领土必然',
        en: 'War outcome not Polk\'s ambition — locked by undefined frontiers + cotton expansion need + Manifest Destiny ideology + Mexican weakness',
      },
      L0: {
        cn: '北美大陆地理 · Rio Grande / Rockies / Pacific 是「自然」边界；中间没有山海阻隔 → 易扩',
        en: 'Continental geography · Rio Grande / Rockies / Pacific are "natural" boundaries; no mountain barriers between → easy expansion',
      },
      L1: {
        cn: '加州 / 俄勒冈温和气候宜农 + 加州金矿即将引爆移民潮',
        en: 'CA / OR mild climate good for farming + CA gold rush about to trigger migration wave',
      },
      L2: {
        cn: '1840 美国 1700 万 / 墨 700 万 · 美工业 + 海军优 + 棉田南扩需新土地养奴',
        en: '1840 US 17M / Mex 7M · US industrial + naval edge + Southern cotton needs new slave land',
      },
      L3: {
        cn: '1845 O\'Sullivan 创「Manifest Destiny」 + Polk 1844 竞选纲领明列扩张 + 国会民主党控',
        en: '1845 O\'Sullivan coins "Manifest Destiny" + Polk\'s 1844 platform explicit expansion + Democrat control of Congress',
      },
      L4: {
        cn: '1845 德州并入 → 1846 Polk 派 Taylor 至 Rio Grande → 5 月开战 → 1847 攻陷墨西哥城 → 1848.2 条约 → 1848 加州金矿',
        en: '1845 Texas annexed → 1846 Polk sends Taylor to Rio Grande → war May → 1847 Mexico City falls → 1848.2 treaty → 1848 CA gold',
      },
      antecedents: [
        { year: 1836, label: { cn: '德州独立', en: 'Texas independence' } },
        { year: 1845, label: { cn: '昭昭天命术语创', en: 'Manifest Destiny coined' } },
        { year: 1845, label: { cn: '德州并入', en: 'Texas annexation' } },
      ],
      consequences: [
        { year: 1846, label: { cn: 'Wilmot Proviso', en: 'Wilmot Proviso' } },
        { year: 1849, label: { cn: '加州金矿淘金潮', en: 'CA Gold Rush' } },
        { year: 1850, label: { cn: '1850 妥协', en: '1850 Compromise' } },
        { year: 1861, label: { cn: '南北战争', en: 'Civil War' } },
      ],
    },
  },
  'alamo-1836': {
    type: 'battle',
    lon: -98.4861, lat: 29.4260,
    year: 1836,
    label: { cn: '阿拉莫之战', en: 'Alamo' },
    note: { cn: '1836.3 Santa Anna 屠 Texan 守军 · "Remember the Alamo"', en: '1836.3 Santa Anna massacres Texans · "Remember the Alamo"' },
  },
  'oregon-trail-1843': {
    type: 'event',
    lon: -94.4155, lat: 39.0911,
    year: 1843,
    label: { cn: '俄勒冈小道（独立城）', en: 'Oregon Trail (Independence MO)' },
    note: { cn: '1843「大迁徙」始 · 32k 移民走 3200 km 至 Oregon', en: '1843 "Great Migration" begins · 32k settlers walk 2000mi to Oregon' },
  },
  'gold-rush-1848-49': {
    type: 'event',
    lon: -120.9, lat: 38.8,
    year: 1849,
    label: { cn: '加州淘金潮（萨特磨坊）', en: 'Gold Rush (Sutter\'s Mill)' },
    note: { cn: '1848.1 发现金 → 1849「49ers」30 万人涌入 → 1850 加州建州', en: '1848.1 gold found → 1849 "49ers" 300k flood in → 1850 CA statehood' },
  },
  'gadsden-purchase-1853': {
    type: 'treaty',
    lon: -110.9, lat: 32.0,
    year: 1853,
    label: { cn: '加兹登购地', en: 'Gadsden Purchase' },
    note: { cn: '1853 美付 1000 万 · 购南 AZ/NM · 修跨陆铁路用', en: '1853 $10M · S. AZ/NM · for transcontinental railroad' },
  },
  'mexican-american-war-1846': {
    type: 'battle',
    lon: -96.1342, lat: 19.1738,
    year: 1846,
    label: { cn: '美墨战争（韦拉克鲁斯）', en: 'Mexican-American War (Veracruz)' },
    note: { cn: '1846-48 · 1847.3 Scott 登陆韦拉克鲁斯 → 9 月攻陷墨城', en: '1846-48 · 1847.3 Scott lands Veracruz → Sep takes Mexico City' },
  },

  // ── Reform Movements 1830-1860 相关 ──
  'seneca-falls-1848': {
    type: 'event',
    lon: -76.8961, lat: 42.9105,
    year: 1848,
    label: { cn: '★ 塞内卡瀑布会议', en: '★ Seneca Falls Convention' },
    note: { cn: '1848.7 Stanton + Mott 主持 ·《情感宣言》· 美国女权起点', en: '1848.7 Stanton + Mott · Declaration of Sentiments · birth of US women\'s rights' },
    causality: {
      summary: {
        cn: '改革运动不是觉醒名人偶然 — 是新英格兰人口密度 + 工业革命中产 + 第二次大觉醒 + 浪漫主义个人主义合力推出的社会实验潮',
        en: 'Reforms not random awakenings — locked by NE population density + industrial middle class + Second Great Awakening + Romantic individualism',
      },
      L0: {
        cn: '新英格兰 + 纽约上州 · 河流 + 运河（伊利 1825）+ 港口密集 → 城镇紧密 → 思想流通快',
        en: 'New England + upstate NY · rivers + canals (Erie 1825) + dense ports → tight towns → ideas flow fast',
      },
      L1: {
        cn: '稳定温带气候 · 工业革命让女性脱离农场 → 中产女性识字率高 + 闲暇',
        en: 'Stable temperate climate · industrialization frees women from farms → literate middle-class women with leisure',
      },
      L2: {
        cn: '1830-50 美国识字爆发 + 中产兴起 + 印刷机便宜 + 工业城镇女工受剥削刺激改革',
        en: '1830-50 literacy boom + middle class rises + cheap printing + factory exploitation of women fuels reform',
      },
      L3: {
        cn: '第二次大觉醒（1790-1840 Charles Finney）→「人可完美」+ 浪漫主义 + Quaker 平等传统 + 废奴运动激励',
        en: 'Second Great Awakening (1790-1840 Charles Finney) → "human perfectibility" + Romanticism + Quaker equality + abolitionism inspires',
      },
      L4: {
        cn: '1831 Garrison《Liberator》→ 1833 Anti-Slavery Society → 1840 伦敦反奴大会拒女代表 → 1848 Stanton + Mott 召开 Seneca Falls',
        en: '1831 Garrison\'s Liberator → 1833 Anti-Slavery Society → 1840 London Anti-Slavery rejects women → 1848 Stanton + Mott convene Seneca Falls',
      },
      antecedents: [
        { year: 1790, label: { cn: '第二次大觉醒始', en: 'Second Great Awakening' } },
        { year: 1825, label: { cn: '伊利运河通', en: 'Erie Canal opens' } },
        { year: 1833, label: { cn: '美国反奴隶制协会', en: 'American Anti-Slavery Society' } },
      ],
      consequences: [
        { year: 1851, label: { cn: 'Sojourner Truth "Ain\'t I a Woman?"', en: 'Sojourner Truth "Ain\'t I a Woman?"' } },
        { year: 1869, label: { cn: '怀俄明给女性投票权', en: 'Wyoming gives women vote' } },
        { year: 1920, label: { cn: '第 19 修正案', en: '19th Amendment' } },
      ],
    },
  },
  'liberator-1831': {
    type: 'event',
    lon: -71.0589, lat: 42.3601,
    year: 1831,
    label: { cn: '《解放者报》（波士顿）', en: 'The Liberator (Boston)' },
    note: { cn: '1831.1 Garrison 创办废奴报 · "I will be heard"', en: '1831.1 Garrison\'s abolitionist paper · "I will be heard"' },
  },
  'oberlin-1833': {
    type: 'event',
    lon: -82.2174, lat: 41.2939,
    year: 1833,
    label: { cn: '欧柏林学院', en: 'Oberlin College' },
    note: { cn: '1833 立 · 美国首所男女同校 + 收黑人学院', en: '1833 founded · 1st US co-ed + Black-admitting college' },
  },
  'walden-pond-1845': {
    type: 'event',
    lon: -71.3372, lat: 42.4385,
    year: 1845,
    label: { cn: '瓦尔登湖（梭罗）', en: 'Walden Pond (Thoreau)' },
    note: { cn: '1845-47 Thoreau 隐居 · 1854《瓦尔登湖》· 超验主义', en: '1845-47 Thoreau lives in cabin · 1854 Walden published · Transcendentalism' },
  },
  'washingtonian-temperance': {
    type: 'event',
    lon: -76.6122, lat: 39.2904,
    year: 1840,
    label: { cn: '华盛顿戒酒会（巴尔的摩）', en: 'Washingtonian Temperance (Baltimore)' },
    note: { cn: '1840 始 · 工人戒酒互助会 → 1851 Maine Law 全州禁酒', en: '1840 founded · workers\' mutual-aid → 1851 Maine Law statewide prohibition' },
  },
  'dorothea-dix-1843': {
    type: 'event',
    lon: -71.0599, lat: 42.3590,
    year: 1843,
    label: { cn: 'Dix 精神病院改革（波士顿）', en: 'Dix Asylum Reform (Boston)' },
    note: { cn: '1843 上书 MA 议会 · 揭精神病人虐待 · 推 30+ 州立人道病院', en: '1843 petitions MA legislature · exposes abuse · 30+ state asylums founded' },
  },

  // ── Gunpowder Empires 1600 相关 ──
  'istanbul-1600': {
    type: 'capital',
    lon: 28.9784, lat: 41.0082,
    year: 1600,
    label: { cn: '★ 伊斯坦布尔（奥斯曼）', en: '★ Istanbul (Ottoman)' },
    note: { cn: '~70 万人世界最大城 · 苏莱曼遗产 + Topkapı 宫', en: '~700k world\'s largest · Süleyman\'s legacy + Topkapı Palace' },
    causality: {
      summary: {
        cn: '三大火药帝国并立不是巧合 — 是火药扩散 + 草原马术 + 突厥-蒙古遗产 + 伊斯兰行政四力合一推出的同代必然',
        en: 'Three gunpowder empires not coincidence — locked by gunpowder diffusion + steppe horsemanship + Turco-Mongol legacy + Islamic administration',
      },
      L0: {
        cn: '欧亚草原 + 海上丝路 + 印度洋季风 — 突厥骑兵 + 印度洋贸易 + 地中海连接构成「火药帝国带」',
        en: 'Eurasian steppe + maritime Silk Road + Indian Ocean monsoons — Turkic cavalry + Indian Ocean trade + Mediterranean form "gunpowder belt"',
      },
      L1: {
        cn: '小冰期（1300-1850）开始施压农业 — 中央大帝国比小邦更能扛灾',
        en: 'Little Ice Age (1300-1850) starts pressuring agriculture — large empires more resilient than small states',
      },
      L2: {
        cn: '1600 奥斯曼 ~2500 万 + 莫卧儿 ~70-100M + 萨非 ~800 万 · 棉花 / 丝 / 香料出口养常备军',
        en: '1600 Ottoman ~25M + Mughal ~70-100M + Safavid ~8M · cotton/silk/spice exports fund standing armies',
      },
      L3: {
        cn: '奥斯曼 millet 制 + 萨非什叶国教 + 莫卧儿 Akbar 宗教宽容 + 加尼塞里禁卫军 + Devshirme 童子兵制',
        en: 'Ottoman millet + Safavid Shi\'a state + Mughal Akbar tolerance + Janissaries + Devshirme child-soldier system',
      },
      L4: {
        cn: '1453 君堡陷 → 1514 Chaldiran 奥胜萨非 → 1517 奥取马穆鲁克埃及 → 1526 Babur 立莫卧儿 → 1588 Shah Abbas 改革萨非',
        en: '1453 Constantinople falls → 1514 Chaldiran (Ottoman beats Safavid) → 1517 Ottoman takes Mamluk Egypt → 1526 Babur founds Mughal → 1588 Shah Abbas reforms Safavid',
      },
      antecedents: [
        { year: 1453, label: { cn: '君堡陷落', en: 'Fall of Constantinople' } },
        { year: 1514, label: { cn: 'Chaldiran 战', en: 'Battle of Chaldiran' } },
        { year: 1526, label: { cn: 'Babur 立莫卧儿', en: 'Babur founds Mughal' } },
      ],
      consequences: [
        { year: 1571, label: { cn: 'Lepanto 海战奥败', en: 'Battle of Lepanto' } },
        { year: 1632, label: { cn: '泰姬陵建', en: 'Taj Mahal built' } },
        { year: 1683, label: { cn: '维也纳之围奥败', en: 'Siege of Vienna fails' } },
        { year: 1707, label: { cn: 'Aurangzeb 死 · 莫卧儿衰', en: 'Aurangzeb dies · Mughal decline' } },
      ],
    },
  },
  'isfahan-1600': {
    type: 'capital',
    lon: 51.6660, lat: 32.6539,
    year: 1600,
    label: { cn: '伊斯法罕（萨非）', en: 'Isfahan (Safavid)' },
    note: { cn: 'Shah Abbas 1598 迁都 · "Isfahan nesf-e jahan"（半个世界）', en: 'Shah Abbas\'s 1598 capital · "Isfahan is half the world"' },
  },
  'agra-1600': {
    type: 'capital',
    lon: 78.0081, lat: 27.1767,
    year: 1600,
    label: { cn: '阿格拉（莫卧儿）', en: 'Agra (Mughal)' },
    note: { cn: 'Akbar（1556-1605）都 · sulh-i kul / 1564 废 jizya · Din-i Ilahi 综合教（小众象征）', en: 'Akbar\'s capital (1556-1605) · sulh-i kul / abolished jizya 1564 · Din-i Ilahi syncretism' },
  },
  'taj-mahal-future': {
    type: 'event',
    lon: 78.0421, lat: 27.1751,
    year: 1632,
    label: { cn: '泰姬陵（即将建）', en: 'Taj Mahal (future 1632)' },
    note: { cn: '1632 Shah Jahan 为爱妻建 · 莫卧儿建筑巅峰', en: '1632 Shah Jahan for his wife · peak of Mughal architecture' },
  },
  'selim-ottoman-1517': {
    type: 'battle',
    lon: 31.2357, lat: 30.0444,
    year: 1517,
    label: { cn: '奥斯曼灭马穆鲁克（开罗）', en: 'Ottoman conquers Mamluks (Cairo)' },
    note: { cn: '1517 Selim I 入开罗 · 兼任哈里发 · 奥斯曼成伊斯兰世界霸主', en: '1517 Selim I takes Cairo · assumes Caliphate · Ottoman becomes Islamic hegemon' },
  },
  'chaldiran-1514': {
    type: 'battle',
    lon: 44.3833, lat: 39.0833,
    year: 1514,
    label: { cn: 'Chaldiran 之战', en: 'Battle of Chaldiran' },
    note: { cn: '1514 奥火炮击败萨非 · 逊尼-什叶东西分界定型', en: '1514 Ottoman cannon beats Safavid · Sunni-Shia E-W border set' },
  },

  // ── 十字军（1099）相关 ───────────────────────────────
  'jerusalem-1099': {
    type: 'battle',
    lon: 35.22, lat: 31.78,
    year: 1099,
    label: { cn: '★ 耶路撒冷 1099', en: '★ Jerusalem 1099' },
    note: { cn: '第一次十字军 7.15 攻陷 · 大屠杀穆斯林 + 犹太人 · 立耶路撒冷王国', en: 'First Crusade takes city Jul 15 · massacre of Muslims + Jews · founds Kingdom of Jerusalem' },
    causality: {
      summary: {
        cn: '不是宗教狂热的偶然 — 是欧洲人口压力 + 教皇政治 + 拜占庭求援 + 朝圣传统四力合一',
        en: 'Not a religious freak event — convergence of European population pressure + papal politics + Byzantine plea + pilgrim tradition',
      },
      L0: {
        cn: '黎凡特狭长海岸 + 圣地集中（耶路撒冷/伯利恒/拿撒勒）+ 朝圣商路 — 欧洲基督徒 4 世纪起就来朝圣',
        en: 'Narrow Levantine coast + concentrated holy sites (Jerusalem/Bethlehem/Nazareth) + pilgrim routes — European Christians had pilgrimaged here since 4th c.',
      },
      L1: {
        cn: '中世纪暖期（950-1250）· 农业产能翻倍 → 人口翻倍 → 二三子无地继承 → 战士过剩寻出路',
        en: 'Medieval Warm Period (950-1250) · doubled crop yields → doubled population → second/third sons land-hungry → surplus warriors seeking opportunity',
      },
      L2: {
        cn: '1100 年欧洲 ~5000 万人 / 意大利商业城邦（威尼斯/热那亚）兴起 / 东方香料 + 丝绸需求强',
        en: '1100 AD · ~50M Europeans / Italian merchant cities (Venice/Genoa) rising / strong demand for Eastern spices + silk',
      },
      L3: {
        cn: '教皇权威巅峰（与皇帝叙任权斗争胜）+ 封建骑士道 + 朝圣赎罪传统 + 拜占庭 1095 求援 = 教皇 Urban II 政治机会',
        en: 'Papal authority at peak (won Investiture Controversy with Emperor) + feudal chivalry + pilgrimage-as-penance + Byzantine 1095 plea = Pope Urban II\'s political opportunity',
      },
      L4: {
        cn: '1071 Manzikert 拜占庭败塞尔柱 → 1095 Alexios I 求援 → Urban II Clermont 演说 → 1096 平民 + 贵族十字军 → 1098 Antioch → 1099.7.15 耶路撒冷',
        en: '1071 Manzikert (Byzantium loses to Seljuks) → 1095 Alexios I appeals → Urban II Clermont speech → 1096 People\'s + Princes\' Crusade → 1098 Antioch → Jul 15, 1099 Jerusalem',
      },
      antecedents: [
        { year: 1071, label: { cn: 'Manzikert 战', en: 'Battle of Manzikert' } },
        { year: 1095, label: { cn: 'Clermont 演说', en: 'Council of Clermont' } },
        { year: 1098, label: { cn: 'Antioch 攻陷', en: 'Siege of Antioch' } },
      ],
      consequences: [
        { year: 1187, label: { cn: '萨拉丁夺回耶城', en: 'Saladin retakes Jerusalem' } },
        { year: 1204, label: { cn: '第四次十字军洗劫君堡', en: 'Sack of Constantinople' } },
        { year: 1291, label: { cn: 'Acre 陷落 · 十字军国终', en: 'Fall of Acre · end of Crusader States' } },
        { year: 1453, label: { cn: '君堡陷落', en: 'Fall of Constantinople' } },
      ],
    },
  },
  'clermont-1095': {
    type: 'event',
    lon: 3.08, lat: 45.78,
    year: 1095,
    label: { cn: 'Clermont 演说 1095', en: 'Council of Clermont 1095' },
    note: { cn: 'Pope Urban II 召集 · "Deus vult"（上帝意旨）· 第一次十字军起点', en: 'Pope Urban II calls First Crusade · "Deus vult" (God wills it)' },
  },
  'constantinople-1095': {
    type: 'capital',
    lon: 28.97, lat: 41.01,
    year: 1095,
    label: { cn: '君士坦丁堡（求援）', en: 'Constantinople (appeal)' },
    note: { cn: 'Alexios I Komnenos 致信教皇求西方雇佣兵援助', en: 'Alexios I Komnenos appeals to Pope for Western mercenaries' },
  },
  'antioch-1098': {
    type: 'battle',
    lon: 36.16, lat: 36.20,
    year: 1098,
    label: { cn: 'Antioch 攻陷 1098', en: 'Siege of Antioch 1098' },
    note: { cn: '十字军围 7 月攻下 · 立 Antioch 公国', en: 'Crusaders take after 7-month siege · founds Principality of Antioch' },
  },
  'acre-1291': {
    type: 'battle',
    lon: 35.08, lat: 32.92,
    year: 1291,
    label: { cn: 'Acre 陷落 1291', en: 'Fall of Acre 1291' },
    note: { cn: '马穆鲁克攻陷 · 十字军国 192 年史终', en: 'Mamluks capture · ends 192 yrs of Crusader States' },
  },
  'manzikert-1071': {
    type: 'battle',
    lon: 42.55, lat: 39.15,
    year: 1071,
    label: { cn: 'Manzikert 战 1071', en: 'Battle of Manzikert 1071' },
    note: { cn: '塞尔柱大败拜占庭 · 安纳托利亚永失 · 十字军前奏', en: 'Seljuks crush Byzantium · permanent loss of Anatolia · prelude to Crusades' },
  },

  // ── 冷战（1962）相关 ─────────────────────────────────
  'cuban-missile-crisis-1962': {
    type: 'event',
    lon: -82.38, lat: 23.13,
    year: 1962,
    label: { cn: '★ 古巴导弹危机 1962', en: '★ Cuban Missile Crisis 1962' },
    note: { cn: '10.16-10.28 · 距核战最近的 13 天 · Kennedy vs Khrushchev', en: 'Oct 16-28 · closest 13 days to nuclear war · Kennedy vs Khrushchev' },
    causality: {
      summary: {
        cn: '不是 Khrushchev 个人冒险 — 是核武对称 + 古巴革命 + 美苏地理隔离的必然',
        en: 'Not a personal Khrushchev gamble — convergence of nuclear parity + Cuban Revolution + US-USSR geographic separation',
      },
      L0: {
        cn: '美苏隔太平洋+大西洋 — 无传统军事对峙路径；古巴距佛州 90 海里 — 苏联唯一近美洲跳板',
        en: 'US-USSR separated by Pacific + Atlantic — no traditional military front; Cuba 90 miles from Florida — only Soviet foothold near Americas',
      },
      L1: {
        cn: '核武器 + 洲际导弹（1957 苏联抢先 ICBM 试射）改变战争逻辑 — 谁先动手都同归于尽',
        en: 'Nukes + ICBMs (USSR\'s 1957 first launch) change war logic — first strike means mutual annihilation',
      },
      L2: {
        cn: '1962 美 GDP ~50% 全球 / 苏 1/3 / 美军费占 GDP 9% / 苏 13% — 双方都全力军备',
        en: '1962 US GDP ~50% of world / USSR 1/3 / US milspend 9% of GDP / USSR 13% — both fully militarized',
      },
      L3: {
        cn: '冷战意识形态 + 1959 古巴革命 + 1961 猪湾失败 → 卡斯特罗投靠苏联 + Khrushchev 想反制美在土耳其的导弹',
        en: 'Cold War ideology + 1959 Cuban Revolution + 1961 Bay of Pigs failure → Castro turns to USSR + Khrushchev wants to counter US missiles in Turkey',
      },
      L4: {
        cn: '1959 古巴革命 → 1961 猪湾 → 1962.8 苏运导弹入古 → 10.14 U-2 拍到 → 10.22 海上封锁 → 10.28 苏撤导弹（美秘撤土耳其导弹）',
        en: '1959 Cuban Revolution → 1961 Bay of Pigs → Aug 1962 USSR ships missiles to Cuba → Oct 14 U-2 photos → Oct 22 naval blockade → Oct 28 USSR removes (US secretly removes Turkey missiles)',
      },
      antecedents: [
        { year: 1947, label: { cn: 'Truman Doctrine', en: 'Truman Doctrine' } },
        { year: 1949, label: { cn: '苏联首颗原子弹 + NATO 立', en: 'USSR A-bomb + NATO founded' } },
        { year: 1959, label: { cn: '古巴革命', en: 'Cuban Revolution' } },
        { year: 1961, label: { cn: '柏林墙建 + 猪湾', en: 'Berlin Wall + Bay of Pigs' } },
      ],
      consequences: [
        { year: 1963, label: { cn: '美苏热线 + 部分核禁试条约', en: 'US-USSR hotline + Test Ban Treaty' } },
        { year: 1972, label: { cn: 'SALT I 限制核武', en: 'SALT I arms limits' } },
        { year: 1989, label: { cn: '柏林墙倒', en: 'Berlin Wall falls' } },
        { year: 1991, label: { cn: '苏联解体', en: 'USSR dissolves' } },
      ],
    },
  },
  'berlin-blockade-1948': {
    type: 'event',
    lon: 13.40, lat: 52.52,
    year: 1948,
    label: { cn: '柏林封锁 1948-49', en: 'Berlin Blockade 1948-49' },
    note: { cn: '苏联陆路封锁西柏林 · 美英空运 11 月运 230 万吨补给', en: 'USSR blocks West Berlin · US-UK airlift delivers 2.3M tons in 11 months' },
  },
  'mao-1949': {
    type: 'event',
    lon: 116.40, lat: 39.90,
    year: 1949,
    label: { cn: '中华人民共和国成立 1949', en: 'PRC founded 1949' },
    note: { cn: '10.1 毛泽东天安门宣告 · 共产主义阵营加 5 亿人', en: 'Oct 1 Mao announces in Tiananmen · adds 500M to communist bloc' },
  },
  'bandung-conference-1955': {
    type: 'event',
    lon: 107.61, lat: -6.92,
    year: 1955,
    label: { cn: 'Bandung 会议 1955', en: 'Bandung Conference 1955' },
    note: { cn: '29 个亚非国家 · 不结盟运动起点 · Nehru / Sukarno / Zhou Enlai', en: '29 Asian-African states · Non-Aligned Movement origins · Nehru / Sukarno / Zhou Enlai' },
  },
  'vietnam-1965': {
    type: 'battle',
    lon: 106.70, lat: 10.78,
    year: 1965,
    label: { cn: '越战美军大规模入越 1965', en: 'US Vietnam War escalation 1965' },
    note: { cn: 'LBJ 派 18 万美军 · 1968 高峰 54 万 · 最终 5.8 万阵亡', en: 'LBJ deploys 180k troops · peaks at 540k in 1968 · 58k US dead total' },
  },
  'berlin-wall-1989': {
    type: 'event',
    lon: 13.40, lat: 52.52,
    year: 1989,
    label: { cn: '柏林墙倒 1989.11.9', en: 'Fall of Berlin Wall Nov 9, 1989' },
    note: { cn: '东德开放边境 · 28 年隔绝结束 · 冷战象征性终结', en: 'East Germany opens border · ends 28-yr divide · symbolic end of Cold War' },
  },
  'india-independence-1947': {
    type: 'event',
    lon: 77.21, lat: 28.61,
    year: 1947,
    label: { cn: '印度独立 1947.8.15', en: 'Indian Independence Aug 15, 1947' },
    note: { cn: '甘地 / 尼赫鲁领导 · 印巴分治 ~1500 万人迁徙 · 50 万-200 万死', en: 'Gandhi / Nehru lead · partition with Pakistan displaces ~15M · 500k-2M deaths' },
  },
  'african-decolonization-1960': {
    type: 'event',
    lon: 36.82, lat: -1.29,
    year: 1960,
    label: { cn: '非洲年 1960', en: 'Year of Africa 1960' },
    note: { cn: '17 个非洲国家独立 · 殖民帝国土崩瓦解', en: '17 African nations independence · colonial empires collapse' },
  },

  // ── 全球化（2000）相关 ───────────────────────────────
  'wto-1995': {
    type: 'event',
    lon: 6.15, lat: 46.20,
    year: 1995,
    label: { cn: '★ WTO 成立 1995', en: '★ WTO founded 1995' },
    note: { cn: 'Geneva · 取代 GATT · 自由贸易体制建立', en: 'Geneva · replaces GATT · establishes free trade regime' },
    causality: {
      summary: {
        cn: '不是政治选择 — 是冷战终结 + 集装箱革命 + 互联网 + 跨国资本四力的制度兑现',
        en: 'Not a political choice — institutional crystallization of Cold War end + container revolution + Internet + transnational capital',
      },
      L0: {
        cn: '卫星 + 海底光缆覆盖全球 / 集装箱港口标准化 — 物理空间不再是贸易瓶颈',
        en: 'Satellites + undersea fiber cover globe / containerized ports standardized — physical space no longer a trade bottleneck',
      },
      L1: {
        cn: '能源廉价（1990s 油价 $20-25/桶）+ 信息成本归零 — 全球分工经济上可行',
        en: 'Cheap energy (1990s oil $20-25/bbl) + information costs near zero — global division of labor becomes economical',
      },
      L2: {
        cn: '1995 全球 GDP $30 万亿 · 跨国公司主导贸易 · 中印 25 亿人口即将加入劳动力市场',
        en: '1995 global GDP $30T · multinationals dominate trade · 2.5B Chinese + Indian workers about to enter labor market',
      },
      L3: {
        cn: '1989 苏联倒 → 资本主义模式胜 + IMF/世行/WTO 三套制度 + 英语作 lingua franca + 知识产权全球化',
        en: '1989 USSR collapse → capitalism wins + IMF/World Bank/WTO triumvirate + English as lingua franca + IP globalized',
      },
      L4: {
        cn: '1986 GATT Uruguay 回合 → 1989 柏林墙 → 1991 苏联解体 → 1994 NAFTA → 1995.1.1 WTO → 2001 中国入 WTO → 2008 金融危机',
        en: '1986 GATT Uruguay Round → 1989 Berlin Wall → 1991 USSR dissolves → 1994 NAFTA → Jan 1, 1995 WTO → 2001 China WTO → 2008 financial crisis',
      },
      antecedents: [
        { year: 1956, label: { cn: '集装箱化', en: 'Containerization begins' } },
        { year: 1986, label: { cn: 'GATT Uruguay 回合', en: 'GATT Uruguay Round' } },
        { year: 1989, label: { cn: '柏林墙倒', en: 'Berlin Wall falls' } },
        { year: 1991, label: { cn: 'WWW 公开发布', en: 'WWW publicly released' } },
      ],
      consequences: [
        { year: 1999, label: { cn: 'Seattle 反全球化抗议', en: 'Seattle anti-WTO protests' } },
        { year: 2001, label: { cn: '中国入 WTO', en: 'China joins WTO' } },
        { year: 2008, label: { cn: '全球金融危机', en: 'Global financial crisis' } },
        { year: 2016, label: { cn: 'Brexit + Trump · 民粹反弹', en: 'Brexit + Trump · populist backlash' } },
      ],
    },
  },
  'internet-www-1991': {
    type: 'event',
    lon: 6.05, lat: 46.23,
    year: 1991,
    label: { cn: '万维网公开 1991', en: 'WWW publicly released 1991' },
    note: { cn: 'CERN · Tim Berners-Lee · 信息成本归零 · 全球化加速器', en: 'CERN · Tim Berners-Lee · information cost → zero · globalization accelerator' },
  },
  'nine-eleven-2001': {
    type: 'event',
    lon: -74.01, lat: 40.71,
    year: 2001,
    label: { cn: '9·11 恐袭 2001', en: '9/11 attacks 2001' },
    note: { cn: '世贸双塔倒 · ~3000 死 · 反恐战争 + 阿富汗+伊拉克战争', en: 'WTC towers fall · ~3000 dead · War on Terror + Afghanistan + Iraq Wars' },
  },
  'china-wto-2001': {
    type: 'event',
    lon: 116.40, lat: 39.90,
    year: 2001,
    label: { cn: '中国入 WTO 2001.12.11', en: 'China joins WTO Dec 11, 2001' },
    note: { cn: '13 亿劳动力进全球市场 · "世界工厂" · 全球贸易格局重塑', en: '1.3B workforce enters global market · "world\'s factory" · reshapes global trade' },
  },
  'eu-euro-1999': {
    type: 'event',
    lon: 4.35, lat: 50.85,
    year: 1999,
    label: { cn: '欧元启动 1999', en: 'Euro launched 1999' },
    note: { cn: 'Brussels · 11 国统一货币 · 2002 实物流通 · 美元最强对手', en: 'Brussels · 11-state currency union · physical 2002 · strongest USD challenger' },
  },
  'seattle-protests-1999': {
    type: 'event',
    lon: -122.33, lat: 47.61,
    year: 1999,
    label: { cn: 'Seattle 反 WTO 抗议 1999', en: 'Seattle anti-WTO protests 1999' },
    note: { cn: '4 万人围堵 WTO 会议 · 反全球化运动登场', en: '40k surround WTO meeting · anti-globalization movement emerges' },
  },
  'paris-climate-2015': {
    type: 'event',
    lon: 2.35, lat: 48.85,
    year: 2015,
    label: { cn: '巴黎气候协定 2015', en: 'Paris Climate Accord 2015' },
    note: { cn: '196 国签 · 限温升 1.5°C · 全球化议程从经济转气候', en: '196 nations sign · cap warming at 1.5°C · agenda shifts from trade to climate' },
  },

  // ── 民权运动（1965）相关 ─────────────────────────────
  'selma-1965': {
    type: 'event',
    lon: -87.02, lat: 32.41,
    year: 1965,
    label: { cn: '★ Selma 游行 1965', en: '★ Selma March 1965' },
    note: { cn: '3.7 "血腥星期日" 警暴打游行者 · 全美电视直播 · 投票权法两月后通过', en: 'Mar 7 "Bloody Sunday" police beat marchers · live on national TV · Voting Rights Act passes 2 months later' },
    causality: {
      summary: {
        cn: '不是 MLK 个人魅力 — 是黑人退伍军人觉醒 + 电视普及 + 教会网络 + 司法突破合力',
        en: 'Not MLK\'s personal charisma — convergence of Black veteran activism + TV ubiquity + church networks + judicial breakthrough',
      },
      L0: {
        cn: '美国南部棉花带 = 黑人聚居区（1960 年 75% 美国黑人在南方）— 民权斗争主战场',
        en: 'US South cotton belt = Black population center (75% of US Blacks in South in 1960) — main battleground',
      },
      L1: {
        cn: '战后经济繁荣 + 电视普及（1960 年 87% 美国家庭有电视）— 北方白人首次直接看见南方暴力',
        en: 'Postwar boom + TV ubiquity (87% US households by 1960) — Northern whites see Southern violence directly for first time',
      },
      L2: {
        cn: '1960 年 1.8 亿人 / ~10% 黑人 / 二战 100 万黑人参军 + 朝鲜战争 60 万 — 退伍后觉醒',
        en: '1960 · 180M people / ~10% Black / 1M Black WWII vets + 600k Korean War vets — returned politically awake',
      },
      L3: {
        cn: 'Brown v. Board 1954 司法突破 + 黑人教会作组织基地 + 甘地非暴力理论 + NAACP 法律团 + SCLC/SNCC/CORE 多组织联动',
        en: 'Brown v. Board 1954 judicial breakthrough + Black churches as organizing base + Gandhi\'s nonviolence + NAACP legal team + SCLC/SNCC/CORE multi-org coalition',
      },
      L4: {
        cn: '1954 Brown → 1955 Montgomery 抵制公交 → 1957 Little Rock → 1960 Greensboro 静坐 → 1961 Freedom Riders → 1963 Birmingham + March on Washington → 1964 Civil Rights Act → 1965 Selma + Voting Rights Act → 1968 MLK 暗杀',
        en: '1954 Brown → 1955 Montgomery boycott → 1957 Little Rock → 1960 Greensboro sit-ins → 1961 Freedom Riders → 1963 Birmingham + March on Washington → 1964 Civil Rights Act → 1965 Selma + Voting Rights Act → 1968 MLK killed',
      },
      antecedents: [
        { year: 1954, label: { cn: 'Brown v. Board', en: 'Brown v. Board' } },
        { year: 1955, label: { cn: 'Montgomery 抵制公交', en: 'Montgomery Bus Boycott' } },
        { year: 1963, label: { cn: 'March on Washington', en: 'March on Washington' } },
        { year: 1964, label: { cn: 'Civil Rights Act', en: 'Civil Rights Act' } },
      ],
      consequences: [
        { year: 1965, label: { cn: 'Voting Rights Act 通过', en: 'Voting Rights Act passed' } },
        { year: 1968, label: { cn: 'MLK 暗杀 + 公平住房法', en: 'MLK assassinated + Fair Housing Act' } },
        { year: 2008, label: { cn: '奥巴马当选首位黑人总统', en: 'Obama elected first Black President' } },
      ],
    },
  },
  'montgomery-bus-1955': {
    type: 'event',
    lon: -86.30, lat: 32.36,
    year: 1955,
    label: { cn: 'Montgomery 抵制公交 1955', en: 'Montgomery Bus Boycott 1955' },
    note: { cn: 'Rosa Parks 12.1 拒让座 · 381 天抵制 · MLK 一战成名', en: 'Rosa Parks refuses to give up seat Dec 1 · 381-day boycott · MLK rises to fame' },
  },
  'little-rock-1957': {
    type: 'event',
    lon: -92.29, lat: 34.74,
    year: 1957,
    label: { cn: 'Little Rock Nine 1957', en: 'Little Rock Nine 1957' },
    note: { cn: '9 名黑人学生入白人中学 · 艾森豪威尔派 101 空降师护送', en: '9 Black students enter white high school · Eisenhower sends 101st Airborne' },
  },
  'birmingham-1963': {
    type: 'event',
    lon: -86.81, lat: 33.52,
    year: 1963,
    label: { cn: 'Birmingham 1963', en: 'Birmingham 1963' },
    note: { cn: '5 月儿童十字军 · Bull Connor 警犬 + 消防水龙 · 全美震惊', en: 'May Children\'s Crusade · Bull Connor\'s dogs + fire hoses · shocks nation' },
  },
  'march-washington-1963': {
    type: 'event',
    lon: -77.04, lat: 38.89,
    year: 1963,
    label: { cn: 'March on Washington 1963', en: 'March on Washington 1963' },
    note: { cn: '8.28 · 25 万人 · MLK "I Have a Dream" 演讲', en: 'Aug 28 · 250,000 march · MLK "I Have a Dream" speech' },
  },
  'mlk-assassination-1968': {
    type: 'event',
    lon: -90.05, lat: 35.15,
    year: 1968,
    label: { cn: 'MLK 暗杀（孟菲斯）1968', en: 'MLK assassinated (Memphis) 1968' },
    note: { cn: '4.4 阳台被狙击 · 100+ 城市暴动 · 公平住房法两周后通过', en: 'Apr 4 sniper on balcony · riots in 100+ cities · Fair Housing Act passes 2 weeks later' },
  },
  'voting-rights-1965': {
    type: 'event',
    lon: -77.04, lat: 38.89,
    year: 1965,
    label: { cn: 'Voting Rights Act 1965', en: 'Voting Rights Act 1965' },
    note: { cn: 'LBJ 8.6 签署 · 终结识字测试 + 人头税 · 黑人选民激增', en: 'LBJ signs Aug 6 · ends literacy tests + poll taxes · Black voter registration surges' },
  },
};
