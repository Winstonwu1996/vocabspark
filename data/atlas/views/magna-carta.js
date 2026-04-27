// view: Magna Carta · 1215 · Europe
export const VIEW = {
  id: 'magna-carta',
  grade: 7,                               // HSS-7 中世纪世界
  topicTier: 'core',
  // 整合原 /history 模块的深度学版（14 轮苏格拉底 + Mastery Gate）
  // 当前 Phase 0：Magna Carta 是首个接入 deep-learn 的 Topic，跳转 /history
  // Phase 1+ 计划：所有 40 Topic 都有 conversation engine（参考 HISTORY_MERGE_STRATEGY.md）
  deepLearnEnabled: true,
  deepLearnUrl: '/history?topicId=magna-carta-1215&from=atlas&atlasId=magna-carta',  // 带 from/atlasId 触发返回按钮 + 完成回跳
  standardsAlignment: [
    { code: 'CA-HSS-7.6.5',  label: { cn: 'CA HSS-7.6.5 中世纪欧洲法律传统（包括大宪章）', en: 'CA HSS-7.6.5 Medieval European legal traditions (including Magna Carta)' } },
  ],
  title:    { cn: '大宪章', en: 'Magna Carta' },
  subtitle: { cn: '1215 · 欧洲', en: '1215 · Europe' },
  year: 1215,

  camera: {
    projection: 'mercator',
    center: [10, 52],     // [lon, lat]
    scale: 700,
    yOffset: -10,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities: 'europe-1215',
      modernPolities: 'europe-modern',
      yearSnapshot: 'world_1200',     // 真实 1200 年边界
      highlightId: 'england',
    },
    C:  { civs: 'medieval-1215' },
    F:  { ids: ['rhine', 'danube', 'alps', 'pyrenees', 'roman-roads',
                'english-channel', 'gibraltar', 'bosporus'] },
    L4: {
      pins: ['magna-carta', 'london-1215', 'paris-1215', 'rome-1215', 'constantinople-1215'],
    },
  },

  causalSummary: {
    cn: 'L0 不列颠群岛 + 北海贸易通道 + L1 中世纪暖期 + L2 农业繁荣 + 北海商路给贵族非农业商业财富 + L3 封建契约传统 + L4 John 输诺曼底',
    en: 'L0 British Isles + North Sea trade access + L1 Medieval Warm + L2 agrarian surplus + North Sea trade circuits give barons non-agrarian commercial wealth + L3 feudal contract + L4 John loses Normandy',
  },

  // 关键人物 — 让学生选一个角色代入这个 Topic
  // 5 个视角覆盖：王权 / 反对派 / 第三方权威 / 平民 / 虚构同龄人
  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'John 国王', en: 'King John' },
      role: { cn: '英格兰王 1199-1216', en: 'King of England 1199-1216' },
      bio: {
        cn: '英王理查狮心王的弟弟，1199 年继位。1204 年丢掉诺曼底（祖辈打下的法国领地）后，加重税征伐法国想夺回，又跟教皇 Innocent III 撕破脸被绝罚。25 个男爵 1215 联合举兵，逼他在 Runnymede 签字。',
        en: 'Younger brother of Richard the Lionheart, became king in 1199. After losing Normandy (1204), he raised heavy taxes to retake France and was excommunicated by Pope Innocent III. In 1215, 25 barons united to force him to sign at Runnymede.',
      },
      hook: {
        cn: '你输了爸爸打下的法国领地，国库空了，男爵们带兵围着你，教皇也开除你的教籍 — 你会签吗？签了你以后说话还算话吗？',
        en: 'You\'ve lost France that your father conquered, the treasury is empty, barons are surrounding you with armies, and the Pope has excommunicated you — would you sign? After signing, will your word still count?',
      },
    },
    {
      emoji: '⚔️',
      name: { cn: '反叛男爵', en: 'Rebel Baron' },
      role: { cn: '北英格兰封建领主', en: 'Northern English feudal lord' },
      bio: {
        cn: '你拥有几万亩封地、几百个农奴、几十个骑士。诺曼征服后约定王权要受契约约束 — 但 John 一再加税还说"我说了算"。你跟另外 24 个男爵秘密结盟。',
        en: 'You own a manor, hundreds of serfs, dozens of knights. Norman tradition says royal power needs contract — but John keeps raising taxes and saying "my will is law." You secretly unite with 24 other barons.',
      },
      hook: {
        cn: '你不是想要"自由"这种现代概念 — 你是想要"国王不能随便侵犯我的财产"。你愿意为这个跟亲家、跟教皇、跟全家上下博一把吗？',
        en: 'You don\'t want "liberty" in the modern sense — you want "the king can\'t arbitrarily seize my property." Are you willing to risk your family\'s lives for that?',
      },
    },
    {
      emoji: '⛪',
      name: { cn: '教皇 Innocent III', en: 'Pope Innocent III' },
      role: { cn: '罗马教廷 1198-1216', en: 'Pope of Rome 1198-1216' },
      bio: {
        cn: '中世纪教皇权力顶峰。1213 你绝罚 John，让英格兰所有教堂关门 6 年。但 John 投降做你的封臣后，你又转而支持他 — Magna Carta 签完没几个月你就宣布它无效。',
        en: 'The peak of medieval papal power. In 1213 you excommunicated John and shut all English churches for 6 years. But after John submitted to you as vassal, you switched sides — declaring Magna Carta void months after it was signed.',
      },
      hook: {
        cn: '一个国王让一个商人和农民跟他签契约 — 这等于削弱"君权神授" 的根基。你站谁那边？教会自由 vs 王权契约化，你选哪个？',
        en: 'A king signing a contract with merchants and peasants undermines "divine right." Whose side do you take? Church freedom vs royal contracts — which matters more to you?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '英格兰农民', en: 'English Peasant' },
      role: { cn: '占人口 90% 的底层', en: '90% of the population' },
      bio: {
        cn: '你不识字，不会拉丁语，不知道"宪章"是啥。但你知道男爵涨租，你儿子被拉去打仗，去年农作物歉收。Magna Carta 64 条里只有 1-2 条提到你（"自由人不被无故监禁"），其余 60 多条都在谈贵族特权。',
        en: 'You can\'t read Latin, you don\'t know what a "charter" is. But you know your lord raised rents, your son was conscripted, and last year\'s crops failed. Of Magna Carta\'s 64 clauses, only 1-2 mention you — the rest are about noble privileges.',
      },
      hook: {
        cn: '800 年后历史课本会说大宪章是"民主的起源"。可你活的那年，男爵跟国王打仗，你田被踩烂，男爵又赢了又收税 — "自由"对你意味着什么？',
        en: '800 years later, textbooks call Magna Carta "the birth of democracy." But in your year, barons and the king were at war, your fields were trampled, and after the barons won they raised taxes too. What did "liberty" mean for you?',
      },
    },
    {
      emoji: '📜',
      name: { cn: 'Joan（虚构同龄人）', en: 'Joan (fictional peer)' },
      role: { cn: '13 岁，男爵的女儿', en: '13-year-old, baron\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是 25 个反叛男爵之一。1215 年 6 月你看着爸爸全副武装出门去 Runnymede。妈妈说"如果失败了，全家都要被流放"。爸爸回来后给你看一张羊皮纸：「这上面写的字，让国王也得守规矩。」',
        en: 'You\'re the same age as Willow. Your father is one of the 25 rebel barons. In June 1215 you watched him leave for Runnymede in full armor. Your mother said: "If we lose, the family will be exiled." When father returned, he showed you a parchment: "These words make even the king follow rules."',
      },
      hook: {
        cn: '今天的女儿 Willow 800 年后也在写"如果国王太过分，能不能签合同约束他？" 同样的问题。你跟 Willow 之间隔了 800 年 + 9000 公里。是什么让这个问题对你们两个都活着？',
        en: 'Today, 800 years later, Willow is also asking: "If the king goes too far, can a contract bind him?" The same question. You and Willow are separated by 800 years and 9000 km. What keeps this question alive for both of you?',
      },
    },
  ],

  examPoints: {
    cn: [
      'King John 约翰王 — 暴政 + 输丢诺曼底 + 重税',
      'Magna Carta 大宪章 1215.6.15 Runnymede 兰尼米德',
      '"due process of law" 正当法律程序条款（Clause 39）',
      '"No taxation without representation" 无议会同意不得征税',
      'Habeas corpus 人身保护令 — 不得任意拘押',
      'Parliament 议会起源 → 1265 Simon de Montfort 召集首次议会',
      'Common Law 普通法传统 — 判例法',
      '影响：美国权利法案 / 美国宪法第五修正案直接引用',
    ],
    en: [
      'King John — tyranny + loss of Normandy + heavy taxes',
      'Magna Carta, June 15, 1215, at Runnymede',
      '"due process of law" clause (Clause 39)',
      '"No taxation without representation" — consent of barons',
      'Habeas corpus — protection from arbitrary imprisonment',
      'Origins of Parliament → 1265 Simon de Montfort\'s parliament',
      'Common Law tradition — case-based law',
      'Influence: US Bill of Rights / 5th Amendment directly cite it',
    ],
  },
};
