// view: US Constitution · 1787 · Philadelphia
// Grade 5 · HSS-5.7 (Constitution)
export const VIEW = {
  id: 'us-constitution',
  grade: 5,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-5.7',   label: { cn: 'CA HSS-5.7 美国宪法 + 权利法案', en: 'CA HSS-5.7 US Constitution + Bill of Rights' } },
    { code: 'CA-HSS-8.2',   label: { cn: 'CA HSS-8.2 宪法的核心特征（8 年级深化）', en: 'CA HSS-8.2 Core features of Constitution (8th grade deep dive)' } },
    { code: 'AP-USH-3.4',   label: { cn: 'AP US Period 3.4 宪法 + 早期共和', en: 'AP US Period 3.4 Constitution + early republic' } },
  ],
  title:    { cn: '美国制宪', en: 'US Constitution' },
  subtitle: { cn: '1787 · 费城制宪会议', en: '1787 · Philadelphia Convention' },
  year: 1787,

  camera: {
    projection: 'mercator',
    center: [-85, 40],
    scale: 600,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'constitution-1787',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1783',
      highlightId:     'usa-1787',
    },
    C:  { civs: 'modern-1783' },
    L4: {
      pins: ['philadelphia-1787', 'mount-vernon', 'shays-rebellion', 'new-york-1787'],
    },
  },

  causalSummary: {
    cn: 'L0 13 州地理 + 经济差异 + L1 1780s 干旱农业危机 + L2 400 万人口 + 5400 万战争国债 + L3 大宪章 / 启蒙 / Locke / Montesquieu 思想接力 + L4 邦联失败 + 谢斯起义触发',
    en: 'L0 13 states\' geography + economic divergence + L1 1780s drought + L2 4M pop + $54M debt + L3 Magna Carta/Locke/Montesquieu lineage + L4 Articles failure + Shays\'s Rebellion trigger',
  },

  keyFigures: [
    {
      emoji: '✍️',
      name: { cn: 'James Madison 麦迪逊', en: 'James Madison' },
      role: { cn: '"宪法之父" / 弗吉尼亚代表', en: '"Father of the Constitution" / Virginia delegate' },
      bio: {
        cn: '你 36 岁来费城，提前 2 年研究历史上所有共和国失败案例。你写《Virginia Plan》— 三权分立 + 两院制 + 联邦凌驾州。你跟 Hamilton + Jay 写《Federalist Papers》85 篇文章说服各州批准。你后来当总统，1812 年带美国跟英国第二次开战。',
        en: 'At 36 you arrived in Philadelphia having spent 2 years studying every failed republic in history. You authored the Virginia Plan — separation of powers, bicameral legislature, federal supremacy. With Hamilton and Jay you wrote the 85 Federalist Papers persuading the states to ratify. Later as president, you led the US into the War of 1812 with Britain.',
      },
      hook: {
        cn: '如果你是 Madison — 你设计了"防止暴政"的体制 — 三权分立 + 制衡。但你也接受"奴隶按 3/5 计入人口"妥协。"完美的体制 + 不完美的妥协"— 这能否定它的"伟大"吗？',
        en: 'If you were Madison — you designed the "tyranny-prevention" system: separation + checks. But you accepted the 3/5 compromise on slavery. "Perfect framework + imperfect compromise" — does the latter negate the former\'s "greatness"?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '反联邦党人 Anti-Federalist', en: 'Anti-Federalist' },
      role: { cn: '反对宪法的乡村小农代表', en: 'Rural small-farmer opposing the Constitution' },
      bio: {
        cn: '你是 Patrick Henry 那种人 — 反对新宪法，怕"强中央"变新国王。你说"Give me liberty or give me death"。你坚持要权利法案 — 没权利法案你不批准。你是输了 — 但你逼出了 1791 年权利法案前 10 条修正案，把"个人自由"写进宪法。',
        en: 'A Patrick Henry type — opposing the new Constitution, fearing "strong central government" = new king. You said "Give me liberty or give me death." You insisted on a Bill of Rights — without it, no ratification. You lost — but forced the 1791 Bill of Rights, embedding "individual liberty" in the Constitution.',
      },
      hook: {
        cn: '如果你是反联邦党人 — 你"输了"宪法之争，但你"赢了"权利法案。失败者也能塑造制度 — 这是民主的精髓还是表象？',
        en: 'If you were Anti-Federalist — you "lost" the Constitution fight but "won" the Bill of Rights. Even losers can shape institutions — is this democracy\'s essence, or just appearance?',
      },
    },
    {
      emoji: '⛓️',
      name: { cn: '南卡罗来纳奴主代表', en: 'South Carolina Slave-Owner Delegate' },
      role: { cn: '种植园主 / 维护奴隶制', en: 'Plantation owner protecting slavery' },
      bio: {
        cn: '你来自查尔斯顿 — 南卡罗来纳 60% 人口是黑奴。你警告北方"如果宪法禁奴隶制，我们退出"。最后达成 3/5 妥协 + 奴隶贸易 1808 才能禁。你赢了短期 — 但 70 年后这套妥协导致 1861 内战。',
        en: 'From Charleston — South Carolina is 60% enslaved Black. You warned the Northerners "if the Constitution bans slavery, we walk out." Result: the 3/5 compromise + slave trade banned only in 1808. Short-term victory — 70 years later, this compromise produced the 1861 Civil War.',
      },
      hook: {
        cn: '如果你是南卡代表 — 你为家族经济守住奴隶制。你这代赢了，但你子孙在 1865 年被打败、家产烧光。"短期胜利 + 长期灾难"— 这套逻辑今天还在哪里上演？',
        en: 'If you were S. Carolina delegate — you defended slavery for family wealth. Your generation won; your descendants in 1865 lost everything to flames. "Short-term win, long-term catastrophe" — where does this logic still play out today?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: 'Shays 起义军农民', en: 'Shays\' Rebellion Farmer' },
      role: { cn: '麻州负债退伍军人', en: 'Massachusetts indebted veteran' },
      bio: {
        cn: '你打了独立战争 8 年，回家发现 Massachusetts 政府征"硬币税"还国债 — 你只有粮食付不起。你和 4000 农民起义关闭法院（1786-87）— 阻止法院抢你的农场。起义被镇压 — 但你激起华盛顿、麦迪逊去费城 — "邦联条例不行，要新宪法"。你的失败启动了制宪。',
        en: 'You fought 8 years in the Revolution; back home, Massachusetts demanded hard-coin tax to pay debt — you had only grain. With 4,000 farmers you shut down the courthouses (1786-87) to stop seizures of your farm. Crushed — but you alarmed Washington and Madison: "the Articles aren\'t working — we need a new Constitution." Your failure birthed the Convention.',
      },
      hook: {
        cn: '如果你是起义军 — 你为革命流过血，结果新政府要抢你的家。"独立"对你是不是"换了个老板"？你的失败启动了费城 — 这算讽刺还是必然？',
        en: 'If you were the rebel — you bled for revolution; the new government tries to seize your farm. Was "independence" just "a change of bosses"? Your defeat launched the Convention — irony, or inevitable?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Benjamin（虚构同龄人）', en: 'Benjamin (fictional peer)' },
      role: { cn: '13 岁，费城制宪会议警卫之子', en: '13-year-old, Philadelphia State House guard\'s son' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是费城州议会大厦警卫 — 1787 年夏天 55 个代表在里面闭门 4 个月。你白天送水送面包给守门兵 — 你看到这些"伟人"汗流浃背、互相吵架。你不知道，但你目击了人类史上最大的政治实验。',
        en: 'Same age as Willow. Your father guards the Philadelphia State House — in summer 1787, 55 delegates met inside for 4 months behind closed doors. You bring water and bread to the sentries daily — you see these "founding fathers" sweating and bickering. You don\'t know it, but you\'re witnessing the greatest political experiment in human history.',
      },
      hook: {
        cn: '240 年后 Willow 在加州学校学美国宪法 — 课本写得像"完美设计"。但你站门口听到的真相是 — 大家妥协吵架，最后写了一份谁都不完全满意的文件。这是民主的"光"还是"影"？',
        en: '240 years later, Willow studies the Constitution as "perfect design." But you, at the door, heard the truth — compromise, fights, a document nobody fully liked. Is this democracy\'s light, or its shadow?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Articles of Confederation 1781 邦联条例 — 弱中央 → 失败',
      'Shays\' Rebellion 1786-87 谢斯起义 — 触发制宪呼声',
      'Constitutional Convention 1787 费城制宪会议（55 代表 / Madison 起草）',
      'Great Compromise 大妥协 — 两院制（参议院平等 / 众议院按人口）',
      'Three-Fifths Compromise 五分之三妥协（黑奴按 3/5 计入人口）',
      'Federalists vs Anti-Federalists — Federalist Papers《联邦党人文集》',
      'Separation of powers 三权分立 + Checks and balances 制衡',
      'Bill of Rights 1791 — 宪法前 10 条修正案',
    ],
    en: [
      'Articles of Confederation 1781 — weak central → failed',
      'Shays\' Rebellion 1786-87 — triggered call for new constitution',
      'Constitutional Convention 1787 (55 delegates / Madison drafts)',
      'Great Compromise — bicameral (Senate equal / House by population)',
      'Three-Fifths Compromise (enslaved counted as 3/5 for representation)',
      'Federalists vs Anti-Federalists — The Federalist Papers',
      'Separation of powers + checks and balances',
      'Bill of Rights 1791 — first 10 amendments',
    ],
  },
};
