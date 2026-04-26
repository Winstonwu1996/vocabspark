// view: Protestant Reformation · 1517 · Holy Roman Empire
// Grade 7 · HSS-7.9 (Reformation)
export const VIEW = {
  id: 'reformation',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.9',   label: { cn: 'CA HSS-7.9 宗教改革（路德 / 加尔文 / 英国国教）', en: 'CA HSS-7.9 Reformation (Luther/Calvin/Anglican)' } },
    { code: 'AP-EURO-2.2',  label: { cn: 'AP European Unit 2.2 路德与新教改革', en: 'AP European Unit 2.2 Luther and the Reformation' } },
  ],
  title:    { cn: '宗教改革', en: 'Protestant Reformation' },
  subtitle: { cn: '1517 · 维滕堡 · 路德 95 条', en: '1517 · Wittenberg · Luther\'s 95 Theses' },
  year: 1517,

  camera: {
    projection: 'mercator',
    center: [10, 50],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'reformation-1517',
      modernPolities:  'europe-modern',
      yearSnapshot:    'world_1530',
      highlightId:     'hre-1517',
    },
    C:  { civs: 'early-modern-1530' },
    F:  { ids: ['rhine', 'danube', 'alps', 'roman-roads', 'english-channel'] },
    L4: {
      pins: ['wittenberg-1517', 'rome-1517', 'worms', 'geneva-calvin'],
    },
  },

  causalSummary: {
    cn: 'L0 莱茵河流域 / 阿尔卑斯屏障 / 北海贸易出口 + L1 暖期农业繁荣 + L2 印刷术爆发 / 资产阶级 + L3 神圣罗马帝国多核心政治结构（北德诸侯零散）+ 教会层级压抑 / 拉丁文垄断 + L4 利奥十世卖赎罪券 → 路德反击',
    en: 'L0 Rhine basin / Alps barrier / North Sea trade access + L1 warm agriculture + L2 printing/bourgeois + L3 polycentric HRE political structure (fragmented N. Germany) + hierarchical Church/Latin monopoly + L4 Leo X\'s indulgences → Luther reacts',
  },

  keyFigures: [
    {
      emoji: '⛪',
      name: { cn: 'Pope Leo X 教皇利奥十世', en: 'Pope Leo X' },
      role: { cn: '罗马教皇 1513-1521 / 美第奇出身', en: 'Pope of Rome 1513-1521 / a Medici' },
      bio: {
        cn: '你是 Lorenzo Medici 的儿子，37 岁当教皇。你下令重建圣彼得大教堂 — 钱不够你卖"赎罪券"（indulgences）— 付钱减轻你死后炼狱时间。你说"我们享用教皇职位赐予的"。1517 路德 95 条贴出你以为只是德国小修士的牢骚。1521 你绝罚他 — 火上浇油。',
        en: 'Son of Lorenzo de\' Medici, you became pope at 37. To rebuild St. Peter\'s Basilica you sold indulgences — pay to reduce your time in purgatory. You said "let us enjoy the papacy God has given us." When Luther posted his 95 Theses in 1517, you thought it was a small German monk\'s gripe. You excommunicated him in 1521 — pouring oil on fire.',
      },
      hook: {
        cn: '如果你是 Leo X — 你卖赎罪券为艺术工程筹钱。你认为这是"艺术神圣化金钱"，路德认为这是"金钱玷污神圣"。你们俩的逻辑都自洽 — 谁错了？',
        en: 'If you were Leo X — you sold indulgences to fund art. You saw it as "money sanctified by art"; Luther saw it as "money corrupting the sacred." Both internally consistent — who was wrong?',
      },
    },
    {
      emoji: '📜',
      name: { cn: 'Martin Luther 马丁·路德', en: 'Martin Luther' },
      role: { cn: '维滕堡大学神学教授 / 改革者', en: 'Wittenberg theology professor / reformer' },
      bio: {
        cn: '你 1517 年 10 月 31 日把 95 条贴在维滕堡教堂门 — 用拉丁文，本意只是学术讨论。但被人翻成德语 + 印刷术让 8 周内全德国都看到。1521 你在 Worms 帝国会议上说"Here I stand" — 拒绝撤回。你被绝罚 + 通缉，但德国诸侯保护你。你翻译圣经成德语 — 让普通人能读 — 这是"宗教民主化"。',
        en: 'On Oct 31, 1517 you nailed 95 Theses to Wittenberg church door — in Latin, intended as academic discussion. Translated to German + printing press: in 8 weeks all Germany knew. At Worms 1521 you declared "Here I stand" — refusing to recant. Excommunicated and condemned, but German princes shielded you. You translated the Bible into German — letting ordinary people read it — this was "religion democratized."',
      },
      hook: {
        cn: '如果你是 Luther — 你说"每个人凭信仰直接面对上帝"— 这破除教会权威。但你也说妇女应顺服丈夫、农民起义该镇压。你是改革者还是只反对"上面"的人 — 不反对"等级"本身？',
        en: 'If you were Luther — "every person faces God by faith alone" — toppled Church authority. But you also said women should obey husbands, peasant revolts should be crushed. Reformer, or someone who opposed "those above" without opposing hierarchy itself?',
      },
    },
    {
      emoji: '✝️',
      name: { cn: '耶稣会创始人 Loyola', en: 'Ignatius of Loyola' },
      role: { cn: '反宗教改革修士 / 耶稣会创建者', en: 'Counter-Reformation friar / Jesuits founder' },
      bio: {
        cn: '你是西班牙武士，1521 战伤腿在医院读《耶稣传》— 决定从军变修士。1540 你成立耶稣会（Jesuits）— "教皇的精兵"，做教育 + 传教 + 反新教。耶稣会几十年内办学校上千所、传教到中国（利玛窦）和南美。你赢得了"反宗教改革"的部分阵地。',
        en: 'You\'re a Spanish soldier; wounded in 1521, in hospital you read the Life of Jesus and traded sword for vows. In 1540 you founded the Jesuits — "the pope\'s elite," doing education + missions + anti-Protestant work. Within decades the Jesuits ran thousands of schools, sent missionaries to China (Matteo Ricci) and South America. You partly turned back the Counter-Reformation tide.',
      },
      hook: {
        cn: '如果你是 Loyola — 你"教育"作为反新教的武器。耶稣会学校 500 年后还在（包括今天 Georgetown / 香港的 Wah Yan）。"软实力"赢回了什么？',
        en: 'If you were Loyola — you used "education" as your counter-weapon. Jesuit schools still exist 500 years later (Georgetown, Wah Yan in HK). What did "soft power" win back?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '德国农民起义军', en: 'German Peasant Rebel' },
      role: { cn: '1524-1525 农民战争中的农户', en: 'Farmer in the 1524-1525 Peasants\' War' },
      bio: {
        cn: '你听了路德"基督徒自由"的演讲，理解为"农奴也该自由"。1524 你和 30 万农民起义反领主 + 反什一税。但路德 1525 写《反对杀人抢劫的农民帮派》— 让贵族屠杀你们。10 万农民被杀。你心碎 — Luther 说自由的精神，但不打算让你这种人也自由。',
        en: 'You heard Luther\'s sermons on "Christian freedom" and read it as "serfs should be free too." In 1524 you and 300,000 peasants rebelled against lords and tithes. But Luther wrote Against the Murderous, Thieving Peasant Hordes in 1525 — calling on nobles to slaughter you. 100,000 peasants killed. Heart broken — Luther preached freedom but didn\'t mean it for you.',
      },
      hook: {
        cn: '如果你是农民 — 改革家说"自由"，但他不愿意你跟他平等。"思想解放"和"社会平等"是两回事吗？500 年后还有人犯同样的错。',
        en: 'If you were the peasant — the reformer preached "freedom" but didn\'t want you as his equal. Are "intellectual liberation" and "social equality" two different things? 500 years later, the same mistake repeats.',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Katharina（虚构同龄人）', en: 'Katharina (fictional peer)' },
      role: { cn: '13 岁，纽伦堡印刷工人女儿', en: '13-year-old, Nuremberg printer\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是印刷工 — 印刷路德 95 条 + 他翻译的德语圣经。你识字（妈妈坚持女孩也要学读）。你看着 Luther 的小册子被一捆一捆运到全德国 — "这就是改变世界"。50 年后你的孙女可能能去新教学校（Luther 推广全民教育）。',
        en: 'Same age as Willow. Your father is a printer — printing Luther\'s 95 Theses and his German Bible translation. You can read (your mother insisted girls study). You watch Luther\'s pamphlets shipped by the bundle across Germany — "this is changing the world." 50 years later your granddaughter might attend a Lutheran school (Luther championed universal education).',
      },
      hook: {
        cn: '500 年后 Willow 在加州学校所有人都识字 + 学习宗教自由 — 都源于你这一代。"印刷术 + 翻译 + 全民识字"组合在你的童年开始。她在数字时代经历同样的颠覆吗？',
        en: '500 years later in California, everyone is literate and learns religious freedom — all rooted in your generation. "Printing + translation + universal literacy" began in your childhood. Is Willow living through the same disruption in the digital age?',
      },
    },
  ],

  examPoints: {
    cn: [
      '路德 95 条论纲 1517（Martin Luther 95 Theses）',
      'Diet of Worms 1521 沃尔姆斯会议 — 路德拒绝撤回',
      'Calvin（加尔文）预定论 / Predestination',
      'Jesuits 耶稣会 / Loyola 反宗教改革',
      'Council of Trent 1545-1563 特伦特会议',
      'Act of Supremacy 1534 — 亨利八世立英国国教',
      'Peace of Augsburg 1555 — cuius regio, eius religio',
      'Edict of Nantes 1598 南特敕令（法国宗教宽容）',
    ],
    en: [
      'Luther\'s 95 Theses, 1517',
      'Diet of Worms 1521 — Luther refuses to recant',
      'Calvin\'s doctrine of Predestination',
      'Jesuits / Ignatius of Loyola — Counter-Reformation',
      'Council of Trent 1545-1563',
      'Act of Supremacy 1534 — Henry VIII founds Anglican Church',
      'Peace of Augsburg 1555 — cuius regio, eius religio',
      'Edict of Nantes 1598 — French religious toleration',
    ],
  },
};
