// view: French Revolution · 1789-1799 · France
// Grade 7 (HS-10/AP)· 启蒙运动直接政治后果
// HSS-7 含 7.11 但启蒙革命传统中学一般在高中世界史；这里作辅助 Topic
export const VIEW = {
  id: 'french-revolution',
  grade: 7,
  topicTier: 'supplementary',     // HSS-7 不是核心单元；HSS-10 / AP 必修
  tierType: 'extended-ap',         // AP 进阶 — AP-EURO-2.7 / AP-WHAP-3.1 重点
  standardsAlignment: [
    { code: 'CA-HSS-10.2', label: { cn: 'CA HSS-10.2 启蒙革命（高中世界史）', en: 'CA HSS-10.2 Enlightenment Revolutions (HS world history)' } },
    { code: 'AP-WHAP-5.2', label: { cn: 'AP World Unit 5.2 法国大革命', en: 'AP World Unit 5.2 The French Revolution' } },
    { code: 'AP-EURO-5.4', label: { cn: 'AP European Unit 5.4 法国大革命', en: 'AP European Unit 5.4 The French Revolution' } },
  ],
  title:    { cn: '法国大革命', en: 'French Revolution' },
  subtitle: { cn: '1789-1799 · 启蒙落地 / 现代政治诞生', en: '1789-1799 · Enlightenment in action / birth of modern politics' },
  year: 1789,

  camera: {
    projection: 'mercator',
    center: [10, 50],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'french-revolution-1789',
      modernPolities:  'europe-modern',
      yearSnapshot:    'world_1800',
      highlightId:     'france-revolution',
    },
    C:  { civs: 'modern-1783' },
    F:  { ids: ['rhine', 'danube', 'alps', 'english-channel'] },
    L4: {
      pins: ['bastille', 'versailles-1789', 'paris-1789', 'concorde-guillotine', 'london-1789'],
    },
  },

  causalSummary: {
    cn: 'L0 巴黎超大 + 法国地理无山河天然分裂 + L1 1788-89 严寒 + 谷物歉收 + L2 国债 40 亿 + 美国战争耗资 + 第三等级税负 + L3 启蒙 + 美独 1776 + 三级会议 1614 后首召 + L4 5 月开会 → 7.14 巴士底 → 8.26 人权宣言',
    en: 'L0 Paris huge + no natural divisions + L1 1788-89 harsh winter + grain failure + L2 4B livres debt + American war cost + Third Estate tax + L3 Enlightenment + 1776 + Estates-General first since 1614 + L4 May meeting → Jul 14 Bastille → Aug 26 Declaration of Rights',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Louis XVI 路易十六', en: 'Louis XVI' },
      role: { cn: '法国国王 1774-1792 / 1793 上断头台', en: 'King of France 1774-1792 / guillotined 1793' },
      bio: {
        cn: '你 19 岁继位 — 你性格温和不擅长政治，更喜欢锁匠工艺。你妻子 Marie Antoinette 是奥地利公主，被法国人讨厌。你支持美国独立战争（耗 10 亿 livres）— 让法国国库雪上加霜。1789 你被迫召开三级会议（150 年来首次）— 引爆革命。1792 9 月共和国成立你被废，1793 1 月你 38 岁上断头台。',
        en: 'You ascended at 19 — gentle, poor at politics, you preferred locksmithing. Your wife Marie Antoinette, Austrian, was hated by French. You backed American independence (cost 1 billion livres) — wrecking the treasury. In 1789 you were forced to convene the Estates-General (first time in 150 years) — igniting revolution. In Sept 1792 the Republic was proclaimed; you were deposed; in Jan 1793 you were guillotined at 38.',
      },
      hook: {
        cn: '如果你是 Louis XVI — 你帮美国独立想"打击英国"，结果你的钱给美国人民主革命，反弹回来灭你。"我帮别人争自由"反而要了你的命 — 这种讽刺你怎么读？',
        en: 'If you were Louis XVI — you funded American independence to "weaken Britain"; that money fueled democratic revolution, which boomeranged to kill you. "I helped others gain freedom" cost you your life. How do you read this irony?',
      },
    },
    {
      emoji: '⚔️',
      name: { cn: 'Robespierre 罗伯斯庇尔', en: 'Robespierre' },
      role: { cn: '雅各宾派领袖 / 恐怖统治架构师', en: 'Jacobin leader / architect of the Terror' },
      bio: {
        cn: '你是律师出身，1793-94 你统治法国 1 年间砍 16000+ 人头（含贵族 + 神父 + 商人 + 同志）。你信"美德 + 恐怖"组合 — 美德是目的，恐怖是必要手段。1794 7.27 (热月 9 日) 你自己被国民议会逮捕 — 第二天 36 岁上断头台。"革命吃掉自己的孩子" — 你是范例。',
        en: 'A lawyer by training. In 1793-94 you ruled France for 1 year, beheading 16,000+ (nobles + priests + merchants + comrades). You preached "virtue + terror" — virtue is the end, terror the necessary means. On July 27, 1794 (9 Thermidor) the Convention arrested you — guillotined at 36 the next day. "The revolution devours its own children" — you\'re Exhibit A.',
      },
      hook: {
        cn: '如果你是 Robespierre — 你坚信"为最高善必须用恐怖"。但你被自己的逻辑反噬。"目的可以为暴力辩护"这套思路 — 在你身上证伪了，但今天还有人用。',
        en: 'If you were Robespierre — you believed "supreme good demands terror." Your own logic devoured you. "Ends justify violence" — your case disproved it, yet many still use it.',
      },
    },
    {
      emoji: '⛪',
      name: { cn: '法国神父', en: 'French Catholic Priest' },
      role: { cn: '第一等级（神职）/ 部分支持革命', en: 'First Estate / some supported revolution' },
      bio: {
        cn: '你是诺曼底乡村神父。1789 三级会议时你跟其他低级神父站到第三等级一边 — 因为高级主教生活奢华跟普通神父没共同利益。1790 国民议会通过《教士民事组织法》— 教士要宣誓效忠国家而非教皇。你拒绝宣誓 — 被流放或处死。革命对教会下手让法国 200 年世俗化。',
        en: 'A rural Norman priest. At the 1789 Estates-General you and other lower clergy joined the Third Estate — bishops lived in luxury, sharing no interests with you. In 1790 the National Assembly passed the Civil Constitution of the Clergy — priests must swear allegiance to the nation, not the Pope. You refused — exile or execution. The revolution\'s strike on the Church secularized France for 200 years.',
      },
      hook: {
        cn: '如果你是神父 — 你支持革命头几年，最后被革命杀。"理想合作 + 实际冲突"是常态吗？',
        en: 'If you were the priest — you supported revolution at first, then were killed by it. Is "ideal alliance + practical clash" the norm?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: 'Sans-culottes 无套裤汉', en: 'Sans-culottes' },
      role: { cn: '巴黎激进工匠 + 小商贩', en: 'Paris radical artisans + small shopkeepers' },
      bio: {
        cn: '你是巴黎工匠（鞋匠 / 木匠 / 烤面包师 / 印刷工）— 名字来自"不穿贵族短马裤"（穿长裤）。1789-94 你是革命主力 — 7.14 攻巴士底狱、10.6 押王回巴黎、1792 8.10 推翻王室、1793 处死国王 — 都是你干的。但 Robespierre 死后你失去政治权力。1795 你饿死 — 革命没救你。',
        en: 'You\'re a Paris artisan (cobbler / carpenter / baker / printer) — named for not wearing aristocratic breeches (you wear trousers). 1789-94 you were the revolution\'s muscle — storming the Bastille, marching the king from Versailles, overthrowing monarchy in Aug 1792, executing the king in 1793 — all you. After Robespierre\'s death you lost political power. By 1795 you starved — the revolution didn\'t save you.',
      },
      hook: {
        cn: '如果你是 sans-culottes — 你做了革命所有"脏活"，结果你比革命前更穷。"革命的果实归谁"— 永远不归推动革命的人。',
        en: 'If you were sans-culottes — you did the revolution\'s dirty work, ended poorer than before. "Revolution\'s fruits" — never to those who actually drive it.',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Marie（虚构同龄人）', en: 'Marie (fictional peer)' },
      role: { cn: '13 岁，巴黎面包师女儿', en: '13-year-old, Paris baker\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。1789 7 月 14 日你 13 岁站在面包店窗口看 — 几千人冲向巴士底狱。爸爸是面包师 — 你家里粮食涨价 3 倍，妈妈每天 4 点起来排队。10 月你跟 7000 妇女走 12 公里到 Versailles — 把国王押回巴黎。你做了革命，但 1793 你哥哥被征兵打外战死了 — 革命的代价你也付了。',
        en: 'Same age as Willow. On July 14, 1789 (age 13) you watched from the bakery window as thousands stormed the Bastille. Your father is a baker — bread prices tripled, your mother queued from 4am. In October you walked 12km to Versailles with 7,000 women — escorting the king back to Paris. You made the revolution. But in 1793 your brother was drafted and died in foreign wars — you paid the revolution\'s cost too.',
      },
      hook: {
        cn: '235 年后 Willow 在加州学法国大革命 — 课本主要写 Robespierre + Louis XVI 这些大人物。你这种 13 岁女孩参加了 Versailles 大游行 — 但课本不写。"做历史的孩子"为什么被忘？',
        en: '235 years later, Willow studies the French Revolution — textbooks center Robespierre, Louis XVI. You, a 13-year-old who marched on Versailles, are forgotten. Why are "the children who made history" erased?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Three Estates 三个等级（神职/贵族/第三等级）',
      'Estates-General 三级会议 → Tennis Court Oath 网球场誓言 1789.6',
      'Storming of the Bastille 1789.7.14 — 法国国庆',
      'Declaration of the Rights of Man 1789.8.26 人权宣言',
      'Reign of Terror 恐怖统治 1793-1794 / Robespierre 罗伯斯庇尔 / Guillotine 断头台',
      'Louis XVI 路易十六 + Marie Antoinette 玛丽王后 — 1793 上断头台',
      'Napoleon 拿破仑 — 1799 雾月政变 → 1804 称帝 → 1815 滑铁卢',
      'Napoleonic Code《拿破仑法典》1804 — 现代民法基础',
    ],
    en: [
      'Three Estates (clergy / nobility / Third Estate)',
      'Estates-General → Tennis Court Oath, June 1789',
      'Storming of the Bastille, July 14, 1789',
      'Declaration of the Rights of Man, Aug 26, 1789',
      'Reign of Terror 1793-1794 / Robespierre / guillotine',
      'Louis XVI + Marie Antoinette executed 1793',
      'Napoleon — 1799 Brumaire coup → 1804 Emperor → 1815 Waterloo',
      'Napoleonic Code 1804 — basis of modern civil law',
    ],
  },
};
