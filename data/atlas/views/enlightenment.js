// view: The Enlightenment · 1750 · Europe
// Grade 7 · HSS-7.10 (Scientific Revolution → Enlightenment)
export const VIEW = {
  id: 'enlightenment',
  grade: 7,
  topicTier: 'supplementary',
  tierType: 'extended-ap',  // AP 进阶 — AP 考试重点主题
  standardsAlignment: [
    { code: 'CA-HSS-7.10', label: { cn: 'CA HSS-7.10 科学革命（启蒙运动思想前奏）', en: 'CA HSS-7.10 Scientific Revolution (Enlightenment precursor)' } },
    { code: 'CA-HSS-10.2', label: { cn: 'CA HSS-10.2 启蒙运动与民主革命（高中世界史）', en: 'CA HSS-10.2 Enlightenment & democratic revolutions (HS World)' } },
    { code: 'AP-EURO-4.3', label: { cn: 'AP European Unit 4.3 启蒙运动', en: 'AP European Unit 4.3 The Enlightenment' } },
    { code: 'AP-WHAP-5.1', label: { cn: 'AP World Unit 5.1 启蒙运动', en: 'AP World Unit 5.1 The Enlightenment' } },
  ],
  title:    { cn: '启蒙运动', en: 'The Enlightenment' },
  subtitle: { cn: '1750 · 思想催生民主革命 · 地图为 1715 快照', en: '1750 · Ideas birthing democratic revolutions · 1715 snapshot' },
  year: 1750,

  camera: {
    projection: 'mercator',
    center: [15, 50],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'enlightenment-1750',
      modernPolities:  'europe-modern',
      yearSnapshot:    'world_1715',
      highlightId:     'france-1715',
    },
    C:  { civs: 'modern-1783' },
    F:  { ids: ['rhine', 'danube', 'alps', 'english-channel'] },
    L4: {
      pins: ['paris-1750', 'london-1750', 'amsterdam-1750', 'edinburgh-1750'],
    },
  },

  causalSummary: {
    cn: 'L0 欧洲城市密集通信便利 + L1 暖期农业 + 土豆 + L2 印刷术 / 殖民财富 / 咖啡 / 邮政 + L3 牛顿 + Locke + Montesquieu + 开明专制 + L4 Encyclopédie 1751 → 美法革命',
    en: 'L0 dense European cities + L1 warm agriculture + potato + L2 printing/colonial wealth/coffee/post + L3 Newton+Locke+Montesquieu+enlightened despots + L4 Encyclopédie 1751 → American/French revolutions',
  },

  keyFigures: [
    {
      emoji: '✍️',
      name: { cn: 'Voltaire 伏尔泰', en: 'Voltaire' },
      role: { cn: '法国哲学家 / 言论自由代表', en: 'French philosopher / champion of free speech' },
      bio: {
        cn: '你是面包师之子，靠机智成为欧洲最有名的作家。你被流放英国 3 年看到议会制 — 写《哲学通信》— 在法国被禁。你嘲讽教会、嘲讽国王，但又跟普鲁士腓特烈大帝吃了 3 年饭。你说"我不同意你的观点，但誓死捍卫你说话的权利"— 但其实这话是后人编的，你没说过。',
        en: 'A baker\'s son who rose by wit to become Europe\'s most famous author. Exiled to England 3 years; saw Parliament; wrote Philosophical Letters — banned in France. You mocked the Church, mocked the king, yet dined 3 years with Frederick the Great. The famous "I disagree with what you say but defend to the death your right to say it" — actually invented by a later biographer. You never said it.',
      },
      hook: {
        cn: '如果你是 Voltaire — 你写讽刺攻击当权但又跟当权者吃饭。"批评 vs 合谋" — 知识分子怎么平衡？今天的 NYT 写手也面对同样问题。',
        en: 'If you were Voltaire — you mocked power AND dined with the powerful. "Critique vs complicity" — how do intellectuals balance it? Today\'s NYT writers face the same.',
      },
    },
    {
      emoji: '⛪',
      name: { cn: '正统派天主教神父', en: 'Orthodox Catholic Priest' },
      role: { cn: '反启蒙的乡村神父', en: 'Rural priest opposing Enlightenment' },
      bio: {
        cn: '你是法国乡村神父，看到 Voltaire 的小册子在巴黎贵族圈传得火热 — 但你村里的农民还是来教堂找你。你不读 Newton — 你只读《圣经》。你认为启蒙派"用理性取代信仰"是危险的 — 50 年后你看到法国大革命屠杀神父 — 你的预言成真。',
        en: 'A rural French priest. You see Voltaire\'s pamphlets sweeping Paris salons — but your village peasants still come to confess to you. You don\'t read Newton — only Scripture. You believe the philosophes\' "reason replacing faith" is dangerous — 50 years later you watch the French Revolution massacre priests, your warning vindicated.',
      },
      hook: {
        cn: '如果你是神父 — 启蒙派笑你是"愚昧"，但你的人生扎实救济穷人 + 听人忏悔。理性还能取代你做的所有事吗？',
        en: 'If you were the priest — philosophes laugh at you as "ignorant," but your life concretely helps the poor + hears confessions. Can reason replace everything you do?',
      },
    },
    {
      emoji: '☕',
      name: { cn: 'Salon 沙龙女主人', en: 'Salonnière' },
      role: { cn: '巴黎沙龙女主持 / 思想沙龙建筑师', en: 'Parisian salon hostess / architect of intellectual exchange' },
      bio: {
        cn: '你是 Madame Geoffrin 那种人 — 没贵族头衔，但用沙龙建立思想网络。你周二接待哲学家（Diderot, Rousseau），周三接艺术家。你不写书 — 但你给写书的人提供"对话场域"。Encyclopédie 一半的辩论在你客厅发生。这是"非正式权力" — 女性的发明。',
        en: 'You\'re a Madame Geoffrin — no noble title, but you built an intellectual network through your salon. Tuesdays: philosophers (Diderot, Rousseau); Wednesdays: artists. You don\'t write books — but give writers a "place to debate." Half the Encyclopédie was argued in your drawing room. "Informal power" — invented by women.',
      },
      hook: {
        cn: '如果你是 salonnière — 你不出版，但每个出版的人都靠你。300 年后女性创业者用 LinkedIn / 播客建立网络 — 这是同一种力量吗？',
        en: 'If you were a salonnière — you didn\'t publish, but every published thinker depended on you. 300 years later, women entrepreneurs build networks via LinkedIn / podcasts — same kind of power?',
      },
    },
    {
      emoji: '☕',
      name: { cn: '咖啡馆顾客', en: 'Coffeehouse Customer' },
      role: { cn: '伦敦城市新中产 / 商人 + 律师', en: 'London middle-class / merchant + lawyer' },
      bio: {
        cn: '你住伦敦。1750 年伦敦有 500+ 家咖啡馆 — "1 便士大学"（一杯咖啡能听一天讨论）。你看《Spectator》报，跟人辩论商业、政治、新发现。你不是贵族 — 你的"启蒙"是日常的、口语的、商人式的。Adam Smith 这种人就在你旁边喝茶 — 写他的《国富论》。',
        en: 'You live in London. By 1750 the city has 500+ coffeehouses — "penny universities" (a coffee = a day of debate). You read The Spectator, argue commerce, politics, new discoveries. You\'re not noble — your "Enlightenment" is daily, oral, mercantile. Adam Smith might sit next to you drinking tea — writing his Wealth of Nations.',
      },
      hook: {
        cn: '如果你是咖啡馆顾客 — 启蒙不是 elite 阶级独有，是城市中产文化。今天的 X / Reddit / Discord 是同样的"民主辩论场"还是已经异化？',
        en: 'If you were the coffeehouse customer — Enlightenment wasn\'t just elite, it was urban middle-class culture. Today\'s X / Reddit / Discord — same "democratic debate space" or already corrupted?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Antoine（虚构同龄人）', en: 'Antoine (fictional peer)' },
      role: { cn: '13 岁，里昂印刷工人之子', en: '13-year-old, Lyon printer\'s son' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸印 Diderot 的《百科全书》— 一套 28 卷，禁书但富人偷买。你识字早，13 岁能跟爸爸讨论"Locke 说的天赋人权"。法国大革命你 33 岁 — 你会成革命派 + 看 Robespierre 上断头台。你这一代是"启蒙的孩子"— 也是"革命的炮灰"。',
        en: 'Same age as Willow. Your father prints Diderot\'s Encyclopédie — 28 volumes, banned but secretly bought by the rich. Literate early, at 13 you debate Locke\'s natural rights with your father. When the French Revolution comes you\'ll be 33 — joining the revolutionaries, watching Robespierre go to the guillotine. Your generation is "child of the Enlightenment" — also "cannon fodder of revolution."',
      },
      hook: {
        cn: '270 年后 Willow 在 ChatGPT 上读"启蒙运动"— 但她不会经历革命。"思想运动 → 革命"在你这代是必然 — 在她这代是不是被互联网消解了？',
        en: '270 years later, Willow reads "the Enlightenment" on ChatGPT — but she won\'t live through revolution. "Idea movement → revolution" was inevitable for you. Did the internet dissolve that link for her?',
      },
    },
  ],

  examPoints: {
    cn: [
      'John Locke 洛克 — 自然权利（生命/自由/财产）+ 社会契约',
      'Montesquieu 孟德斯鸠《论法的精神》— 三权分立',
      'Rousseau 卢梭《社会契约论》"人生而自由"',
      'Voltaire 伏尔泰 — 言论自由 / 宗教宽容',
      'Adam Smith《国富论》1776 — 自由市场 / 看不见的手',
      'Diderot《百科全书》Encyclopédie 1751-1772',
      'Enlightened despots 开明专制：Frederick the Great / Catherine the Great',
      'Salons 沙龙 / Coffeehouses 咖啡馆 — 思想交流场所',
    ],
    en: [
      'John Locke — natural rights (life/liberty/property) + social contract',
      'Montesquieu, Spirit of the Laws — separation of powers',
      'Rousseau, Social Contract — "Man is born free"',
      'Voltaire — free speech / religious tolerance',
      'Adam Smith, Wealth of Nations 1776 — free market / invisible hand',
      'Diderot\'s Encyclopédie, 1751-1772',
      'Enlightened despots: Frederick the Great / Catherine the Great',
      'Salons / coffeehouses — venues of public reason',
    ],
  },
};
