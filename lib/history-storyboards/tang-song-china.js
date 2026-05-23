// ─── Tang-Song China 618-1279 Lens-based Storyboard (Story-First v2) ─
//
// Topic: 唐宋盛世 · Tang-Song China 618-1279
// HSS-7.3 · AP World 1.2 (East Asia developments — Song Dynasty)
//
// 3 lens 设计 (per Sarah Chen audit 8.6/10 confirm):
//   - emperor-huizong  (perpetrator-actor / aesthete-emperor) — 宋徽宗 1100-1126
//   - su-shi           (lonely-mediator / scholar-exile) — 苏轼 1037-1101
//   - li-qingzhao      (receiving-end / female-literacy-carrier) — 李清照 1084-1155 真实历史人物
//
// 跨 lens micro-detail: 1126 翰林图画院 + 私人金石录 文物南运
//   - emperor-huizong N6+N10: 收藏者 — 27 年收 6,396 画 + 1,340 书 → 1126 全失
//   - su-shi (1101 死前 4 年 1097 海南诀别) — 个人书法在 Huizong 收藏里 → 1126 失
//   - li-qingzhao N5+N6+N12: 私人收藏 + 1126-1129 拼命南运 → 大部分丢失 → 1135 写《金石录后序》
//
// 5 Topic information preservation 五面体 (Tang-Song 第 5 边):
//   - Renaissance 镶金小镜子
//   - Reformation 95 Theses
//   - AoE 黑曜石镜子 / Columbus 1493 信
//   - Mali Sundiata 7 岁拔猴面包树 + al-Sa'di 1655 沙漠藏书 → 2012 Timbuktu 30 万手稿
//   - Tang-Song 1126 翰林图画院失 (Huizong 反例) + 1129-1135 李清照《金石录》南运
//
// defaultLens = 'li-qingzhao' (per Sarah audit + 7thgrader 推荐 logic:
//   15 岁同龄锚点 + female-literacy-carrier + N5 1126 战乱 + N6 文物南运 cross-lens
//   + N7 赵明诚临终 emotional anchor + N12 信息保存五面体 closing)
//
// 4-agent review (5-7+ TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)
//
// per AUTHORING_PIPELINE.md 11 条铁律 + AoE/Mali/Reformation 4-agent review 教训:
//   - 不用 *italic* markdown
//   - 内嵌引号: 「」(CN) / "..." (EN), 严禁 «...»
//   - em-dash 「——」 ≤ 3 per 段
//   - 第 1 条 cultural ban: 中性学术不民族主义 (尤其 §11 + 反 Whig 钢筋)
//   - 第 2 条 anti-fab: 数字/日期/学者引用精确 (Huizong 18 即位 / 帝昺 8 岁 / 武举 702 / jiaozi 1005-1023 / 李清照 100 天 + 9 天)
//
// 来源 staging 文件 (5-7+ lens-author):
//   - tang-song-china-emperor-huizong.staging.js (12 nodes / 667-1282 CN chars / 偏长 like Columbus)
//   - tang-song-china-su-shi.staging.js (12 nodes / 375-546 CN chars / 适中 like Sister Agnes)
//   - tang-song-china-li-qingzhao.staging.js (12 nodes / 407-511 CN chars + N12 717)

// ─── Tang-Song China · LENS 1: Emperor Huizong of Song (perpetrator-actor) ────
//
// Topic: Tang-Song China 618-1279 · 唐宋中国
// HSS-7.3 · AP World 1.2-1.3 · cross-cultural Lorenzo Medici / Mansa Musa anchor
//
// Lens 1 设计 (per Sarah Chen audit confirm):
//   - id: 'emperor-huizong'
//   - name: 'Emperor Huizong of Song'
//   - nameCn: '宋徽宗 赵佶'
//   - role: 'perpetrator-actor'
//   - perspectiveTag: 'aesthete-emperor'
//
// 不是「好人坏人」二元化——是「极致才华 + 系统性盲点」两边都站。
// 18 岁意外即位 → 27 年艺术黄金期 → 1126 靖康全失 → 1135 五国城死。
//
// 跨 lens micro-detail (per Sarah audit § cross-Topic 五面体):
//   1126 翰林图画院文物被金军劫 — 信息保全反例 anchor:
//   - Lens 1 (Huizong) N6+N10: 收藏者 — 27 年收 6,396 件画 + 1,340 件书法 → 1126 全失
//   - Lens 2 (Su Shi) reference: 1101 死, 但其作品在 Huizong 收藏里 — 1126 一并丢失
//   - Lens 3 (Li Qingzhao) N5+N6: 同代私人收藏《金石录》 → 1126-1129 拼命南运但大半失
//
// 5-Topic 信息保全五面体 cross-anchor:
//   - Mali al-Sa'di 沙漠藏书 (1591 后保全)
//   - Renaissance 印刷术普及
//   - Reformation 95 Theses 印刷扩散
//   - AoE 1493 Columbus 信 9 版本 3 月内印遍欧洲
//   - Tang-Song Huizong 1126 收藏全失 (反例: 收藏狂 → 全部丢失)
//
// per AUTHORING_PIPELINE.md 11 条铁律:
//   1 (cultural ban) / 2 (anti-fab) / 4 (em-dash 预算 ≤ 3 per 段)
//   6 (外语 italic 用 bare 不用 *X*) / 11 (quote 「」 严禁 «...»)
//
// 严格规则:
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - 内嵌引号: 「」(CN) / "..." (EN)
//   - 每 node 350-550 CN chars (强控)
//   - 数学一致: 1082 生 / 1100 即位 18 岁 / 1126 禅位 44 岁 / 1135 死 54 岁
//   - anti-fab: 翰林图画院 6,396 画 + 1,340 书法 source-verified (《宣和画谱》《宣和书谱》)
//   - em-dash 「——」 ≤ 3 per 段

export var emperorHuizongLens = {
  id: 'emperor-huizong',
  name: 'Emperor Huizong of Song',
  nameCn: '宋徽宗 赵佶',
  role: 'perpetrator-actor',
  perspectiveTag: 'aesthete-emperor',
  description: {
    cn: '你是赵佶 (1082-1135)——宋朝第八位皇帝, 史称徽宗。你 18 岁意外即位, 在位 27 年。你创立瘦金体书法, 设翰林图画院 (Hanlin Art Academy), 修《宣和画谱》收 6,396 件名画 + 《宣和书谱》收 1,340 件名书, 自封「教主道君皇帝」。你画的《瑞鹤图》《听琴图》今天还挂在故宫。但你也是亡国之君——1126 年金军南下, 你禅位长子, 1127 年开封陷落, 你 44 岁被金军北押, 1135 年死在五国城 (今黑龙江依兰), 54 岁。这一遍让你看见「极致才华 + 系统性盲点」怎么同体——不是二元化的好坏, 是真实的人性悖论。',
    en: 'You are Zhao Ji (1082-1135), the eighth emperor of Song, known as Emperor Huizong. You took the throne at eighteen by accident, reigned twenty-seven years. You invented the Slender-Gold (shou jin) calligraphy script, expanded the Hanlin Art Academy (painting + calligraphy combined), compiled the Xuanhe Catalogue of Paintings (6,396 entries) and the Xuanhe Catalogue of Calligraphy (1,344 entries), and titled yourself the Lord-of-the-Way Daoist Emperor. Your Cranes of Good Omen and Listening to the Qin still hang in the Palace Museum. But you are also the emperor who lost the dynasty — in 1126 the Jin army marched south, you abdicated to your eldest son, the city of Kaifeng fell in 1127, you were marched north as a captive at age forty-four, and you died in 1135 in the Five Kingdoms City (modern Yilan, Heilongjiang) at fifty-four. This lens shows how extreme talent and systemic blindness sit in the same body — not a binary of good versus bad, but the real paradox of a human being.',
  },
  storyboard: [
    // ═══════════════════════════════════════════════════
    // N1 — HOOK: 1082 出生 / 第 11 子 / 1100.2 哥哥哲宗死无嗣 / 18 岁意外即位
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n1',
      type: 'narrative',
      content: {
        cn: '1100 年 2 月 23 日, 开封 (北宋首都, 今河南开封) 福宁殿。\n\n我哥哥哲宗皇帝 25 岁, 躺在床上咳血。无嗣。\n\n我 18 岁。神宗皇帝第 11 子, 母亲陈氏是普通妃子, 我自己是端王——一个看戏画画写字的闲散亲王。我从来没想过我会做皇帝。北宋立国 140 年, 11 子做皇帝在祖宗规矩里几乎不可能。\n\n但那天太皇太后向氏 (神宗的皇后, 我父亲的正妻) 在福宁殿主持商议, 章惇 (宰相) 反对我即位说「端王轻佻, 不可以君天下」——我那时候已经在开封以书画著名, 章惇这一句不是没道理。但太皇太后说: 「先帝尝言, 端王有福寿。」一句话定了。\n\n2 月 23 日哲宗死。当天我从端王府入宫, 坐上龙椅, 即位仍用元符年号 (元符是哲宗的年号), 次年 (1101) 改元「建中靖国」。我 18 岁。\n\n——这一刻我以为我接手的是一个艺术爱好者的最高位置: 全国所有名画我可以收藏, 全国所有名家我可以召进画院。我以为天下太平。\n\n我不知道接下来 27 年我会把北宋艺术推到顶峰, 也会亲手把它推下深渊。我不知道 26 年后, 1126 年闰 11 月 25 日, 同样这座开封城会被金军攻陷, 我亲手收的 7000 多件名画书法会全部被劫往北方。我不知道 35 年后, 1135 年, 我会死在黑龙江一个叫五国城的木栅围起来的小屋里, 54 岁, 望着南方。\n\n接下来 12 节, 你跟我走 53 年。从 18 岁意外接位的那个画家亲王, 到 54 岁死在异乡的亡国太上皇——你看完会知道为什么我至今争议: 我是中国艺术史最高峰皇帝之一, 也是中国历史最大政治灾难的责任人之一。',
        en: 'February 23, 1100. Kaifeng, the Northern Song capital (modern Kaifeng, Henan). The Funing Palace Hall.\n\nMy elder brother, Emperor Zhezong, twenty-five years old, lies in bed coughing blood. He has no son.\n\nI am eighteen. Eleventh son of the late Emperor Shenzong. My mother, Consort Chen, was a minor concubine. I myself am the Prince of Duan — an idle prince who watches operas, paints, writes calligraphy. I never imagined I would be emperor. The Northern Song has stood for one hundred forty years; an eleventh son taking the throne is almost impossible under our ancestral rules.\n\nBut that day, Grand Empress Dowager Xiang (the principal wife of my father Emperor Shenzong) presides over the council in Funing Hall. Chancellor Zhang Dun opposes me: "The Prince of Duan is frivolous; he cannot govern the realm." Given my reputation in Kaifeng as a painter and calligrapher, the chancellor is not wrong. But the Grand Empress Dowager replies: "The late emperor said the Prince of Duan has good fortune and long life." One sentence settles it.\n\nFebruary 23, Zhezong dies. That same day I move from the Prince of Duan residence into the palace and seat myself on the dragon throne. The era name remains Yuanfu (Zhezong\'s reign-name); the next year, 1101, I change it to Jianzhong Jingguo. I am eighteen.\n\nIn this moment I think I have inherited the highest position an art-loving man could ever hold: every famous painting in the empire I can collect; every great master I can summon to the academy. I think the realm is at peace.\n\nI do not know that over the next twenty-seven years I will push Northern Song art to its highest peak — and push it into the abyss with the same hands. I do not know that twenty-six years from now, on the twenty-fifth day of the intercalary (an extra leap-month) eleventh month of 1126, this same city of Kaifeng will fall to the Jin army, and the more than seven thousand paintings and calligraphies I gathered will be looted north. I do not know that thirty-five years from now, in 1135, I will die in a small wooden-fenced hut in a place called the Five Kingdoms City in modern Heilongjiang, fifty-four years old, looking south.\n\nOver the next twelve sections, you will walk fifty-three years with me. From the eighteen-year-old painter prince who took the throne by accident, to the fifty-four-year-old retired emperor dying in foreign land — by the end you will know why I am still debated: I am one of the highest peaks of Chinese art history, and also one of the men most responsible for the largest political catastrophe in Chinese history.',
      },
      deliverGoal: 'N1 hook — 1100.2.23 哥哥哲宗死无嗣 + 18 岁端王意外接位 + 章惇「轻佻不可」+ 太皇太后一锤定音 + 27 年艺术黄金 + 1126 全失伏笔',
      engagementHook: '你 18 岁那年, 有过「我从来没想过这会发生在我身上」的时刻吗?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N2 — SETUP: 1100-1102 早期政治 / 蔡京 1102 入相 / 重启变法
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n2',
      type: 'narrative',
      content: {
        cn: '1100 年 2 月即位到 1102 年 5 月, 这两年是我政治学步期。\n\n太皇太后向氏 1101 年 1 月去世, 临死前的最后一年她垂帘听政——这一年我朝廷在新党 (王安石变法派) 和旧党 (司马光保守派) 之间来回拉扯。1100 年我先用旧党, 召司马光的老门生韩忠彦做宰相; 1102 年我又转向新党, 把一个叫蔡京的人推上首相位置。\n\n蔡京 (1047-1126), 福建仙游人, 1070 年进士, 王安石变法核心干将。但他这个人有一个特点: 谁当政他就附和谁——王安石执政他附王, 司马光执政他附司马, 章惇执政他附章。1102 年 5 月我用他, 是因为我宠信的太监童贯举荐——童贯说蔡京字好画也好, 跟我谈得来。\n\n蔡京从 1102 入相到 1126 罢相, 24 年里 4 次罢相 4 次复相——「四度入相」是中国宰相史唯一一例。每次他被弹劾我都罢他, 过几个月我又召他回来。为什么? 因为他给我办的两件事别人办不了:\n\n第一, 重启王安石变法——但这次的变法不是为了富国强兵, 是为了筹钱。我要扩翰林图画院, 要修《宣和画谱》, 要建艮岳 (开封城北一座人造皇家山林), 要资助道教——这些都要钱。蔡京通过茶盐专卖、铸大钱、加征田赋, 把钱从民间抽到国库。\n\n第二, 帮我把朝廷批评变法的人全部清出去——「元祐党人」名单 309 人, 包括司马光、苏轼、黄庭坚, 全部刻碑立在端礼门, 子孙不许做官不许进京。1102 年 9 月「元祐党碑」立。\n\n——这一刻我没听见我应该听的。我以为我在做艺术皇帝该做的事——清出政治杂音, 让我专心画画。我不知道我清掉的那些名字, 是北宋最后能挡住金军的政治大脑。',
        en: 'From taking the throne in February 1100 to May 1102, these two years are my political apprenticeship.\n\nGrand Empress Dowager Xiang dies in January 1101. In her final year she rules from behind the curtain — and during that year my court swings back and forth between the New Party (Wang Anshi reformers) and the Old Party (Sima Guang conservatives). In 1100 I use the Old Party, calling Han Zhongyan, a senior disciple of Sima Guang, as chancellor. In 1102 I swing to the New Party, and I push a man named Cai Jing into the chief chancellor position.\n\nCai Jing (1047-1126), born in Xianyou, Fujian, 1070 jinshi (the imperial-exam degree), a core operator of the Wang Anshi reforms. But the man has one defining trait: he agrees with whoever holds power. Under Wang he was a Wang man, under Sima a Sima man, under Zhang Dun a Zhang Dun man. In May 1102 I use him because my favored eunuch, Tong Guan, recommends him — Tong tells me Cai writes calligraphy and paints well, and that we will get along.\n\nFrom 1102 to 1126, in twenty-four years, Cai Jing is dismissed four times and recalled four times — four chancellorships, the only case in the entire history of Chinese chancellors. Every time he is impeached I dismiss him; a few months later I call him back. Why? Because he handles two things for me no one else can:\n\nFirst, restart the Wang Anshi reforms — but this time the reforms are not for a strong state, they are to raise money. I want to expand the Hanlin Art Academy, compile the Xuanhe catalogues, build Genyue (an artificial imperial mountain-park north of Kaifeng), patronize Daoism. All of this needs money. Cai Jing concentrates revenue through tea and salt monopolies, large copper coins, and heavier land taxes — pulling silver from the countryside into the treasury.\n\nSecond, sweep out everyone who criticizes the reforms — the Yuanyou Party Member List, three hundred nine names including Sima Guang, Su Shi, Huang Tingjian, carved into a stele at the Duanli Gate, their descendants barred from office, barred from the capital. The Yuanyou Party Stele is erected in September 1102.\n\nIn this moment I do not hear what I should be hearing. I think I am doing what an art-loving emperor should do — clearing the political noise so I can focus on painting. I do not know that the names I am sweeping out are the last political minds in the Northern Song capable of holding back the Jin.',
      },
      deliverGoal: 'N2 蔡京 1102.5 入相 (4 度入相中国唯一) + 重启王安石变法但目的转为筹钱 + 元祐党人 309 名清洗 + 我的盲点',
      engagementHook: '蔡京 4 次被罢 4 次召回——你认识谁是这种「明知有问题但离不开」的人?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N3 — SETUP: 1102-1110 翰林图画院扩张 / 收天下名士 / 设画学
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n3',
      type: 'narrative',
      content: {
        cn: '1102 到 1110 这 8 年, 我做了一件中国艺术史上前无古人的事: 我把画家变成国家公务员。\n\n翰林图画院 (Hanlin Art Academy), 唐代就有, 五代南唐李后主时扩大, 宋初已立。但那时画院只是宫廷画师的小作坊。1104 年 6 月我下诏: 把画院从宣和殿东侧扩到三层楼, 招画师 200 多人, 每人按级别发俸禄。一级画师月俸跟翰林学士相等——大约每月 30 贯, 1 贯 = 1000 钱, 30 贯能在开封买一头中等耕牛。\n\n更重要的是 1104 年我设了「画学」——中国历史第一所国家美术学校。考试内容: 一道古诗题, 让考生用画来答。比如题目「踏花归去马蹄香」(意思: 骑马踏过花丛, 马蹄上沾了香气), 怎么画「香」? 录取那一年的状元画了几只蝴蝶飞绕马蹄——这就是答案。\n\n画学分六科: 道释、人物、山水、鸟兽、花竹、屋木。每科有专门考官 (画院最资深的画师)。学生 3 年毕业, 优秀的留画院, 一般的去地方画局。\n\n这 8 年我招进画院的人里, 有几个名字会刻进美术史: 王希孟 (1096-1119, 18 岁完成《千里江山图》, 23 岁早死)、张择端 (《清明上河图》作者, 北宋开封市井全景图, 5.28 米长卷)、李唐 (后来南宋四大家之一)、马贲 (鸟兽画名手)。\n\n——这一刻我做的事在艺术史上是了不起的。21 世纪法国 Beaux-Arts 学院、俄罗斯 Imperial Academy、美国 Cooper Union——国家美术学院模式, 我 1104 年就在做。比欧洲 (1648 法国 Académie Royale 建院) 早大约 6 个世纪。\n\n但同时我没看见的是: 我把财政预算的相当大一块从军备转到画院。北宋禁军兵额从神宗时 80 万逐年缩到我朝中期约 40 万, 一半装备腐朽, 一半训练废弛。我每月给一级画师 30 贯——同样 30 贯能装备 6 个步兵——我在做这个交换 27 年, 不知道。',
        en: 'In the eight years from 1102 to 1110, I do something unprecedented in the history of Chinese art: I turn painters into state officials.\n\nThe Hanlin Art Academy already existed in the Tang, was expanded under Li Yu of Southern Tang, and was established by the early Song. But before me, the academy was just a small workshop for palace painters. In June 1104 I issue an edict: expand the academy from a side chamber of Xuanhe Hall into a three-story building, recruit more than two hundred painters, pay each one according to rank. A first-rank painter receives the same salary as a Hanlin Academician — about thirty strings of cash a month, one string equals one thousand coins, thirty strings can buy a mid-grade plow ox in Kaifeng.\n\nMore importantly, in 1104 I establish the Painting School — the first state art academy in Chinese history. The examination format: an ancient line of poetry as the prompt, candidates must answer with a painting. For example, the line "Treading flowers home, the horse hooves carry fragrance" — how do you paint fragrance? The top scorer that year painted butterflies fluttering around the horse hooves. That was the answer.\n\nThe Painting School has six departments: Daoist-Buddhist, figure, landscape, bird-and-beast, flower-and-bamboo, architectural. Each department has senior academy painters as examiners. Students graduate in three years; the best stay at the academy, the rest go to regional painting bureaus.\n\nAmong the painters I bring in over these eight years, several names will be carved into the history of art: Wang Ximeng (1096-1119, who at eighteen finishes A Thousand Miles of Rivers and Mountains, dies at twenty-three); Zhang Zeduan (whose Along the River During the Qingming Festival is a 5.28-meter handscroll panorama of Kaifeng street life); Li Tang (later one of the Four Great Masters of Southern Song); Ma Ben (master of bird-and-beast painting).\n\nIn this moment what I am doing is something remarkable in the history of art. In the twenty-first century the French Beaux-Arts, the Russian Imperial Academy, the American Cooper Union — the model of a state art academy, I am building it in 1104. About six centuries before Europe (the French Académie Royale was founded in 1648).\n\nBut what I do not see at the same time: I am pulling a substantial portion of the fiscal budget from military preparation into the painting academy. The Northern Song imperial army shrinks from eight hundred thousand in Shenzong\'s reign to about four hundred thousand in mid-reign, half with rotten equipment, half with neglected training. I pay a first-rank painter thirty strings a month — the same thirty strings could equip six infantrymen — I am making this trade for twenty-seven years, and I do not know it.',
      },
      deliverGoal: 'N3 翰林图画院扩张 + 1104 画学 (国家美术学院, 比欧洲约早 6 个世纪) + 6 科考试 + 王希孟张择端李唐 + 财政从军备转艺术 27 年盲点',
      engagementHook: '一道诗题用画来答——「踏花归去马蹄香」你怎么画?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N4 — STORY (个人才华 ⭐ anchor): 瘦金体创立
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n4',
      type: 'narrative',
      content: {
        cn: '1102 到 1110 之间某一年, 我在福宁殿的东暖阁, 开始写一种没人写过的字。\n\n我从小学黄庭坚 (1045-1105, 苏轼门生四学士之一, 北宋大书法家)。黄字横画收笔重, 撇捺锋长。我又学薛稷 (649-713, 唐初书法家, 学褚遂良)。薛字瘦劲, 笔画细如金丝。20 多岁我把这两家融合, 又加进我自己——把笔锋拉得更细, 把横画起笔更尖, 把竖钩拉得更长更利, 把撇捺磨成柳叶形。\n\n这种字今天叫「瘦金体」(shou jin ti, Slender-Gold Script)。「瘦」是字形细, 「金」是金属感——一笔下去像把金线拉直, 像刀刻一样。\n\n1112 年我用瘦金体题《瑞鹤图》, 字写在卷首和卷末, 跟画里的天空、宫殿、仙鹤一起成为一张完整画面。这是中国艺术史第一次「皇帝的字 + 皇帝的画 + 皇帝的印」三合一——后世帝王画家全部学这个模板。\n\n——这一刻让你看见我个人才华到了什么地步。21 世纪你打开 macOS 字体本去找「华文细黑」「方正瘦金」「Hanyi Slender Gold」——这些字体的源头都是我 1102-1110 在开封那间东暖阁里慢慢磨出来的。我在书法史上是创立一个独立字体的极少数皇帝之一 (前有汉武帝隶书化、后无)。\n\n但这一刻还有一件事让你 30 秒——同样这双手, 14 年后在五国城木屋里写最后一首诗 (《在北题壁》「彻夜西风撼破扉, 萧条孤馆一灯微」), 还在用瘦金体。54 岁的我在金人监视下, 用同样的瘦金体写流亡诗。一种字体跟一个人走完一生——从 18 岁意外即位, 到 54 岁异乡死亡。\n\n才华不会救命。这是 1135 年五国城那间木屋告诉我的事。',
        en: 'Sometime between 1102 and 1110, in the East Warm Chamber of Funing Hall, I begin writing a kind of script no one has written before.\n\nFrom childhood I studied Huang Tingjian (1045-1105, one of the Four Disciples of the Su Shi Gate, a great Northern Song calligrapher). Huang\'s horizontal strokes end heavy, his slanting strokes are long and sharp. I also studied Xue Ji (649-713, an early Tang calligrapher in the Chu Suiliang lineage). Xue\'s script is lean and tense, with strokes thin as gold wire. In my twenties I merge the two and add myself — pulling the brush tip thinner, sharpening the start of horizontal strokes, lengthening the vertical hook, shaping the slanted strokes into willow leaves.\n\nThis script is now called shou jin ti, the Slender-Gold Script. Slender for the shape, gold for the metallic feel — every stroke pulled like a gold wire drawn straight, like a knife cut.\n\nIn 1112 I inscribe the Cranes of Good Omen handscroll in Slender-Gold, the script at the head and tail of the painting joined with the sky, the palace, and the cranes into one complete image. This is the first time in Chinese art history that emperor\'s calligraphy + emperor\'s painting + emperor\'s seal merge into one — every later emperor-painter copies this template.\n\nIn this moment you can see how far my personal talent goes. Twenty-first century you open the macOS Font Book and search Huawen Slender Black, Founder Slender-Gold, Hanyi Slender Gold — every one of these fonts traces back to what I slowly forged in the East Warm Chamber between 1102 and 1110. In the history of calligraphy I am one of the very few emperors who founded an independent script (Han Wudi standardized Clerical Script before me; no one after).\n\nBut here is one more thing to think about for thirty seconds — the same hand, fourteen years later, in a wooden hut in the Five Kingdoms City writing his last poem (Inscribed on the Wall in the North: "All night the western wind shakes the broken door, in this lonely hut a single lamp grows dim"), is still using Slender-Gold. At fifty-four, under Jin guard, I write my exile poem in the same script. One script walks an entire life — from the eighteen-year-old who took the throne by accident, to the fifty-four-year-old dying in foreign land.\n\nTalent does not save your life. This is what the wooden hut in the Five Kingdoms City tells me in 1135.',
      },
      deliverGoal: 'N4 瘦金体创立 (个人才华 ⭐ anchor) + 黄庭坚 + 薛稷 + 自己变形 + 21 世纪 macOS 字体溯源 + 1135 五国城同字体写流亡诗 — 才华不救命',
      engagementHook: '一种字体跟一个人走完一生——你 21 世纪打字用什么字体? 它对你是什么?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N5 — STORY: 《瑞鹤图》1112 + 《听琴图》1116 工笔花鸟 + 自画像 + 天人合一
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n5',
      type: 'narrative',
      content: {
        cn: '1112 年正月十六, 上元节后一天, 开封宣德门 (皇宫正门) 上空。\n\n我那天清晨在福宁殿登楼, 看见宣德门顶飘来一群仙鹤——20 只白鹤盘旋在朱红的门楼之上, 排成两组, 一组站在两端正脊的鸱尾上 (屋脊两端的兽形装饰), 另一组在天空中盘绕。开封城上下都看见了。文武百官说这是太平盛世的祥瑞。\n\n我立刻动笔。工笔花鸟 (gong bi, fine-line meticulous painting), 绢本设色, 51 厘米高 138.2 厘米宽。天空用石青打底, 鹤用白粉, 朱红的宣德门, 鸱尾上的兽用淡金色。我一笔一笔画了几个月。卷末用瘦金体题字: 「政和壬辰上元之次夕……」 记录这个祥瑞的具体时间地点。\n\n这就是《瑞鹤图》。今天藏在辽宁省博物馆, 是我现存真迹中最重要的一幅。\n\n4 年后 1116 年, 我画《听琴图》。这次主角是我自己——我穿道袍坐松树下抚琴, 蔡京 (那时正第三次入相) 立左侧听琴, 童贯立右侧。卷上有蔡京题诗:「吟徵调商灶下桐, 松间疑有入松风。仰窥低审含情客, 似听无弦一弄中。」\n\n——这一刻让你看见我画里的世界观。我相信「天人合一」: 天上的祥瑞 (仙鹤) 跟地上的政治 (我) 跟自然的秩序 (松、琴、风) 是一个整体。我在画《听琴图》的时候, 我以为自己是这个宇宙秩序的中心——皇帝 + 道士 + 艺术家三位一体。\n\n但 21 世纪你站在故宫博物院《听琴图》前面, 你会看见另一个东西: 一个 35 岁的皇帝坐在松树下抚琴, 他的两个最重要的政治助手站在两边——画里没有边境, 没有军队, 没有金国, 没有 1115 年金太祖完颜阿骨打刚刚建立的国家。完颜阿骨打就在我画《听琴图》前一年称帝。我画里没有他。\n\n这就是「天人合一」的盲点: 我相信宇宙是和谐的, 所以我看不见正在准备打我的人。',
        en: 'January 16, 1112. The day after the Lantern Festival. Above the Xuande Gate (the main southern gate of the imperial palace), Kaifeng.\n\nThat morning I climb a tower in Funing Hall and see a flock of cranes drift over the Xuande Gate — twenty white cranes circling above the vermilion gate-tower, arranged in two groups, one standing on the chiwen (the beast-shaped ornaments on the two ends of the main ridge), the other circling in the sky. The whole city sees them. The civil and military officials all say this is an auspicious sign of a golden age.\n\nI start painting at once. Fine-line meticulous (gong bi) bird-and-flower painting on silk, fifty-one centimeters high, one hundred thirty-eight point two wide. Mineral azurite for the sky, lead white for the cranes, vermilion for the Xuande Gate, soft gold for the chiwen. I paint stroke by stroke for months. At the end of the scroll I inscribe in Slender-Gold: "On the evening following the Lantern Festival of the renchen year of the Zhenghe era…" recording the exact time and place of the omen.\n\nThis is Cranes of Good Omen. Today it is held in the Liaoning Provincial Museum, the most important surviving authentic work of mine.\n\nFour years later, in 1116, I paint Listening to the Qin. This time the subject is myself — wearing a Daoist robe, seated under a pine tree, playing the qin. Cai Jing (in his third chancellorship at the time) stands listening on the left, Tong Guan stands on the right. Cai Jing inscribes a poem at the top of the scroll.\n\nIn this moment you can see the worldview inside my paintings. I believe in the unity of heaven and humanity: the auspicious sign in the sky (the cranes) and the politics on the ground (me) and the order of nature (pine, qin, wind) are one whole. While painting Listening to the Qin, I think of myself as the center of a cosmic order — emperor, Daoist, artist, three in one body.\n\nBut twenty-first century, when you stand in front of Listening to the Qin in the Palace Museum, you will see something else: a thirty-five-year-old emperor sitting under a pine tree playing the qin, his two most important political aides flanking him — and there is no border in the painting, no army, no Jin state, no Wanyan Aguda, who founded the Jin state in 1115, exactly one year before this painting. Wanyan Aguda was crowned the year before I painted Listening to the Qin. He is not in my painting.\n\nThis is the blind spot of "the unity of heaven and humanity": I believe the cosmos is harmonious, so I cannot see the man preparing to attack me.',
      },
      deliverGoal: 'N5 《瑞鹤图》1112 工笔花鸟祥瑞 + 《听琴图》1116 自画像 + 蔡京童贯 + 天人合一世界观 + 1115 完颜阿骨打建金国不在我画里 — 盲点',
      engagementHook: '完颜阿骨打 1115 称帝, 我 1116 画里没他——你认识谁是这种「相信和谐就看不见冲突」的人?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N6 — STORY (CROSS-LENS MICRO-DETAIL ⭐): 《宣和画谱》《宣和书谱》6396 画 + 1340 书
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n6',
      type: 'narrative',
      content: {
        cn: '1102 年起, 我开始一项后来 27 年都做的事: 把全国名画名书集中到我的内府里。\n\n方式有 4 个: 第一, 抄家。元祐党人 309 个被抄家, 苏轼黄庭坚米芾家里的字画我都拿了。第二, 进献。地方官想升迁, 拿名画来献。第三, 收购。蔡京通过户部专设「书画局」收购民间。第四, 接旧朝——南唐李后主、五代后蜀孟昶、北宋初几代皇帝的内府收藏, 全部归我。\n\n1110 年代我让翰林书画院编两部目录: 《宣和画谱》20 卷, 《宣和书谱》20 卷。「宣和」是我 1119 年改的年号。\n\n两部目录的数字写在卷首:\n- 《宣和画谱》收画家 231 人, 名画 6,396 幅。\n- 《宣和书谱》收书法家 197 人, 名作 1,344 件。\n\n这是中国历史上第一次国家级书画总目录。每一幅作品记: 作者、尺寸、印鉴、流传经过。这两部书今天还在, 是中国美术史最早的系统文献。\n\n——这一刻我想做的事是高贵的: 把人类创造的最美的东西保护起来, 集中起来, 传给后代。21 世纪 Louvre, Met, 故宫——大博物馆的逻辑, 我 1102-1119 在开封就在做。\n\n但这一刻让你 30 秒——把所有最珍贵的东西集中在一个地方, 是巨大的风险。21 世纪你听过亚历山大图书馆 (公元前 3 世纪建, 3-7 世纪在多次火灾兵祸中毁) 的故事——把所有书集中, 一把火全没。我 1119 年在开封做的事跟亚历山大图书馆是同一种逻辑——只是亚历山大用了 1000 年才被毁, 我的内府只用了 7 年。\n\n1126 年闰 11 月 25 日开封陷, 我的 6,396 幅画 + 1,340 件书法 + 翰林图画院全部艺术家——金军全部劫往北方。中国艺术史最大单次损失。\n\n21 世纪故宫博物院 (北京 + 台北) 加在一起, 唐宋元三代名画存世量, 大约只剩我 1119 年内府收藏的 5%。我集中起来, 也帮金军一次劫光。',
        en: 'From 1102 onward, I begin something I will continue for the next twenty-seven years: pulling the famous paintings and calligraphies of the empire into my inner palace collection.\n\nFour methods. First, confiscation — the three hundred nine Yuanyou Party members are stripped of property, and the works in the homes of Su Shi, Huang Tingjian, Mi Fu come to me. Second, tribute — provincial officials wanting promotion present paintings. Third, purchase — Cai Jing sets up a Painting and Calligraphy Bureau in the Ministry of Revenue to buy from private hands. Fourth, inheritance — the inner-palace collections of Li Yu of Southern Tang, Meng Chang of Later Shu, and the early Song emperors all flow into mine.\n\nIn the 1110s I order the Hanlin Painting and Calligraphy Academy to compile two catalogues: the Xuanhe Catalogue of Paintings in twenty volumes, the Xuanhe Catalogue of Calligraphy in twenty volumes. Xuanhe is the era name I adopted in 1119.\n\nThe numbers are inscribed at the head of each catalogue:\n- The Xuanhe Catalogue of Paintings holds 231 painters and 6,396 famous paintings.\n- The Xuanhe Catalogue of Calligraphy holds 197 calligraphers and 1,344 famous works.\n\nThis is the first state-level master catalogue of painting and calligraphy in Chinese history. Every work records the author, dimensions, seal marks, line of transmission. Both books survive today and are the earliest systematic documents in the history of Chinese art.\n\nIn this moment, what I am trying to do is noble: gather the most beautiful things made by human hands, concentrate them, pass them to the future. Twenty-first century Louvre, the Met, the Palace Museum — the logic of the great museum, I am building it in Kaifeng between 1102 and 1119.\n\nBut think about this for thirty seconds. Concentrating the most precious things in one place is an enormous risk. Twenty-first century you have heard of the Library of Alexandria (founded in the third century BCE, destroyed in successive fires and wars between the third and seventh centuries) — gather every book, one fire and they are gone. What I am doing in Kaifeng in 1119 is the same logic as Alexandria — except Alexandria took a thousand years to lose, and my inner palace will only take seven.\n\nOn the twenty-fifth day of the intercalary eleventh month of 1126, Kaifeng falls. My 6,396 paintings + 1,340 calligraphies + the entire Hanlin Painting Academy of artists — the Jin army carries all of it north. The largest single loss in the history of Chinese art.\n\nIn the twenty-first century, the Palace Museum (Beijing and Taipei combined), the surviving major paintings of Tang, Song, Yuan total roughly five percent of what I had collected by 1119. I gathered, and I also helped the Jin army loot it all in one stroke.',
      },
      deliverGoal: 'N6 ⭐ CROSS-LENS MICRO-DETAIL: 《宣和画谱》6,396 画 + 《宣和书谱》1,340 书 + 4 种集中方式 + Alexandria 图书馆类比 + 1126 全失伏笔 + 21 世纪故宫只剩 5%',
      engagementHook: '把所有最珍贵的东西集中在一个地方——你认识谁也在做这种事? 21 世纪 cloud storage? blockchain? 一个家族文物?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N7 — STORY: 1110-1120s 道教崇拜 / 林灵素 / 教主道君皇帝
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n7',
      type: 'narrative',
      content: {
        cn: '1116 年某一天, 开封宫中。\n\n一个叫林灵素 (1075-1119) 的温州道士被引荐到我面前。他自称见过太上老君 (道教最高神之一, 老子神化身)——太上老君告诉他, 你是「长生大帝君」下凡, 你的责任是把人间变成道教的「神霄世界」。\n\n21 世纪你听这个会笑。但 1116 年的我, 35 岁, 当 16 年皇帝, 国家看上去太平, 我相信他。\n\n从 1116 到 1119 这 4 年, 我做的事:\n- 全国诸州一律建神霄玉清万寿宫 (神霄宫) 共 320 余座 (《宋会要辑稿·礼》), 每个宫供我自己的塑像 (作为「长生大帝君」), 国库出钱。\n- 1117 年自封「教主道君皇帝」(Lord-of-the-Way Daoist Emperor), 中国历史第一个皇帝兼宗教领袖, 跟同代欧洲教皇 + 皇帝两个角色合一类似。\n- 改称呼: 全国佛寺改名「宫」, 佛像改穿道袍, 和尚改称「德士」(道德之士)。1119 年达到顶峰——这一年我下诏废佛, 全国佛教徒被迫还俗或转为道士。\n- 林灵素本人享受亲王礼遇。\n\n蔡京从财政角度反对——三百多个神霄宫每个建造费用平均约 2 万贯, 总计数百万贯, 相当于全国一年田赋收入的相当一部分。但我听不进。\n\n1119 年北方民变频起, 林灵素的法术不灵, 他被弹劾贬回温州, 1119 年底死。我 1120 年起停止全国废佛——但 4 年的财政浪费已经造成。\n\n——这一刻让你看见我系统性盲点的另一面。我相信我是宇宙秩序的中心 (天人合一), 我现在又相信我是宗教秩序的顶点 (教主道君皇帝)。两件事加在一起: 我在为自己造一个完美的精神世界——艺术 + 道教 + 皇权三位一体。\n\n21 世纪你看见的现象——一个有才华的领导者, 在权力顶峰逐渐相信自己是宇宙中心——心理学叫「grandiosity 自大幻觉」。我 35-38 岁这 3 年是典型样本。',
        en: 'A day in 1116, inside the palace at Kaifeng.\n\nA Wenzhou Daoist named Lin Lingsu (1075-1119) is introduced to me. He claims he has seen Taishang Laojun (one of the highest deities of Daoism, Laozi deified) — and Taishang Laojun told him that I am the Great Emperor of Long Life descended into the human world, and that my duty is to turn the human realm into the Daoist Shenxiao World.\n\nTwenty-first century you laugh at this. But the 1116 me, thirty-five, sixteen years on the throne, the realm looking peaceful, believes him.\n\nIn the four years from 1116 to 1119:\n- A Shenxiao Yuqing Wanshou (Shenxiao Palace) is decreed in every prefecture across the empire — about three hundred twenty in all (per the Song Huiyao Jigao, Treatise on Rites) — each housing a statue of me (as the Great Emperor of Long Life), all paid for by the treasury.\n- In 1117 I title myself Lord-of-the-Way Daoist Emperor, the first emperor in Chinese history to merge head of state and head of religion in one body, similar to the European pope-and-emperor merger of the same era.\n- Renamings: every Buddhist temple in the empire is renamed Palace, every Buddha statue is dressed in Daoist robes, every monk is renamed deshi (Man of the Way). In 1119 this peaks — that year I order the abolition of Buddhism nationwide, every Buddhist forced to return to lay life or convert to a Daoist.\n- Lin Lingsu himself receives the courtesy of an imperial prince.\n\nCai Jing opposes on fiscal grounds — over three hundred Shenxiao Palaces averaging about twenty thousand strings of cash each, totaling several million strings, a substantial share of one year of national land tax revenue. I do not listen.\n\nIn 1119 popular uprisings flare in the north, Lin Lingsu\'s magic fails, he is impeached and demoted back to Wenzhou, and dies at the end of 1119. From 1120 I stop the nationwide abolition of Buddhism — but four years of fiscal waste are already done.\n\nIn this moment you can see another face of my systemic blindness. I believe I am the center of cosmic order (the unity of heaven and humanity); now I also believe I am the apex of religious order (Lord-of-the-Way Daoist Emperor). The two added together: I am building a perfect spiritual world for myself — art, Daoism, sovereignty fused in one body.\n\nA phenomenon twenty-first century you see often — a talented leader at the peak of power who slowly believes he is the center of the cosmos — psychology calls it grandiosity. The me of ages thirty-five through thirty-eight is a textbook sample.',
      },
      deliverGoal: 'N7 1116 林灵素入宫 + 320 余州神霄宫 + 1117 教主道君皇帝 + 1119 废佛 + grandiosity 自大幻觉',
      engagementHook: '一个有才华的领导者在权力顶峰逐渐相信自己是宇宙中心——你 21 世纪见过谁是这样?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N8 — STORY: 1120 方腊起义 / 童贯镇压 / 政治盲点暴露
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n8',
      type: 'narrative',
      content: {
        cn: '1120 年 10 月, 江南睦州青溪 (今浙江淳安) 万年乡。\n\n一个 40 多岁的漆园工人方腊 (?-1121), 因为「花石纲」逼得几个月发不出工人工钱, 在山中聚徒起义。\n\n「花石纲」(huā shí gāng, the Flowery Stone Convoys) 是我宠爱的一个项目: 我建艮岳 (genyue, 1117 起在开封城北建造的人造皇家山林, 周长 20 里) 需要奇石异花, 我让朱勔 (1075-1126) 在江浙搜集——民间任何一块好看的太湖石, 任何一棵好看的松树, 朱勔派人砸墙拆屋拿走, 搬到开封。一块大石头从苏州走运河到开封要拆几座桥过几座城门——花的钱朱勔从地方民户摊。\n\n1117-1120 这 4 年, 江浙百姓被花石纲压得倾家荡产。方腊聚的人 10 天内从几百到几万。1120 年 11 月青溪陷, 12 月攻下睦州、歙州、杭州。1121 年 1 月起义军占领江南 6 州 52 县, 部众号称百万。\n\n开封消息传来, 我震惊。我让童贯 (1054-1126, 我宠信的太监, 此前主导海上之盟联金灭辽计划, 朝廷称「媪相」女性宰相) 带 15 万禁军南下镇压。童贯 1121 年 4 月抵达江南, 8 月在帮源洞抓住方腊, 9 月解押开封凌迟处死。\n\n但童贯做了一件事我不知道: 他抵江南后看见花石纲危害, 立刻以「便宜行事」名义假传我的命令, 暂停花石纲——这是太监替我承担了我应该自己承担的政治责任。镇压一年, 江南恢复, 童贯班师。\n\n——这一刻让你看见我盲点暴露了一次, 但我没听懂。\n- 一个皇帝 (我), 因为爱奇石, 让 1 个奸臣 (朱勔), 在 4 年里压破江浙, 引发百万人起义。\n- 一个太监 (童贯) 帮我擦了屁股, 但太监也开始觉得「皇帝是要被替我擦屁股的人」。\n- 起义被镇压, 但起义的根本原因——艮岳还在建, 花石纲过几个月又恢复了。我还要石头。\n\n21 世纪你看见的「无法学习的领导者」(unable-to-learn leader)——我 1120-1121 是典型样本。一次危机过去, 我什么都没改。1125 年金军南下, 我重复同样的反应——震惊, 找人替我擦屁股, 然后假装什么都没发生。',
        en: 'October 1120, in the rural Wannian Township of Qingxi, Muzhou (modern Chunan, Zhejiang), south of the Yangtze.\n\nA forty-something lacquer-grove worker named Fang La (?-1121), unable to pay his workers for months because of the Flowery Stone Convoys, gathers followers in the mountains and rises in revolt.\n\nThe Flowery Stone Convoys (huā shí gāng) are a project of mine: I am building Genyue (an artificial imperial mountain-park of twenty li in circumference, started in 1117 north of Kaifeng), and I need rare stones and exotic plants. I send Zhu Mian (1075-1126) to gather them in Jiangsu and Zhejiang. Any beautiful Taihu stone in private hands, any beautiful pine tree, Zhu Mian sends men to break walls and tear roofs to take it, then ship it to Kaifeng. A single great stone from Suzhou by canal to Kaifeng requires dismantling several bridges and city gates — the cost Zhu Mian assesses on local households.\n\nAcross those four years from 1117 to 1120, the Flowery Stone Convoys grind the people of Jiangsu-Zhejiang into ruin. Fang La\'s followers go from a few hundred to tens of thousands in ten days. In November 1120 Qingxi falls, in December Muzhou, Shezhou, and Hangzhou. By January 1121 the rebels hold six prefectures and fifty-two counties south of the Yangtze, claiming a million followers.\n\nThe news reaches Kaifeng. I am shocked. I send Tong Guan (1054-1126, my favored eunuch, who previously led the Treaty of the Sea plan to ally with Jin and destroy Liao, called by the court the "old-woman chancellor") south with one hundred fifty thousand imperial troops. Tong Guan reaches the south in April 1121, captures Fang La in Bangyuan Cave in August, escorts him to Kaifeng in September for execution by slow slicing.\n\nBut Tong Guan does one thing I do not know about: arriving in the south and seeing the damage of the Flowery Stone Convoys, he immediately, under the doctrine of acting as the situation requires, falsely transmits my order to suspend the convoys — a eunuch carrying my political responsibility for me. After a year of suppression, the south recovers, Tong Guan returns to Kaifeng.\n\nIn this moment you can see my blind spot exposed once, but I do not understand it.\n- An emperor (me), because he loves rare stones, lets one corrupt official (Zhu Mian), grind two provinces for four years, and trigger a revolt of a million people.\n- A eunuch (Tong Guan) cleans up after me, but the eunuch begins to think "the emperor is someone whose mess I have to clean."\n- The revolt is crushed, but the root cause — Genyue is still under construction, the Flowery Stone Convoys resume a few months later. I still want my stones.\n\nThe twenty-first century phenomenon called the "unable-to-learn leader" — the me of 1120-1121 is a textbook sample. One crisis passes and I change nothing. In 1125 when the Jin army marches south, I repeat exactly the same reaction — shock, find someone to clean up after me, pretend nothing happened.',
      },
      deliverGoal: 'N8 1120 方腊起义 + 花石纲朱勔 + 艮岳 + 童贯 15 万禁军镇压 + 太监替我擦屁股 + unable-to-learn leader 系统性盲点',
      engagementHook: '1120 一次危机过去我什么都没改——你 21 世纪见过谁是「无法学习的领导者」?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N9 — STORY: 1125 金灭辽 / 1126.1 金军南下 / 徽宗禅位钦宗 25 岁
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n9',
      type: 'narrative',
      content: {
        cn: '1118-1125 这 7 年, 我跟童贯做了一件后来史书钉死我的事:「海上之盟」联金灭辽。\n\n辽国 (916-1125, 契丹人建国) 跟北宋是 100 多年的「澶渊之盟」(1005) 兄弟之邦, 每年北宋给辽 30 万两银 + 30 万匹绢, 换 120 年北方边境太平。但 1118 年金人 (女真人, 完颜阿骨打 1115 称帝建国) 已经从东北打到辽河, 辽国摇摇欲坠。我和童贯想: 趁辽弱, 跟金联手灭辽, 收回燕云十六州 (今北京+大同地区, 936 年石敬瑭割给契丹的中原故土)。\n\n1118 年起宋金通过登州 (今山东蓬莱) 海上往来, 谈判 7 年。1123 年正式签盟: 宋金一起打辽, 灭辽后燕云十六州归宋, 宋每年给金的钱比给辽更多 (银 20 万两 + 绢 30 万匹)。\n\n1125 年 2 月, 金军俘辽天祚帝, 辽亡。但金军在战场上发现: 宋军腐烂——燕京 (今北京) 是金军先打下来再「卖」给宋的, 宋军连辽残兵都打不过。金人决策圈算明白了——这个北宋表面富庶, 实际是空壳。\n\n1125 年 12 月, 金军兵分两路南下: 东路完颜宗望 (~1102-1127) 走河北, 西路完颜宗翰 (1080-1137) 走山西。1126 年 1 月东路逼近开封。\n\n我 44 岁。前一年艮岳刚建好, 我还在画画收画。消息传来——我惊惶。我那一刻做的事:\n\n1126 年 1 月 18 日 (宣和七年十二月二十三) 半夜, 我在福宁殿写禅位诏书, 把皇位传给我长子赵桓——他 25 岁, 是为钦宗, 改元靖康。我自号「太上皇」, 带亲信近臣几百人连夜南逃, 1 月底到镇江。\n\n——这一刻是我政治生命最赤裸的一刻。我在国家最大危机来的那一夜, 选择把责任丢给我 25 岁的儿子, 自己跑路。我不是死于战场, 不是被赶下台, 是我自己 44 岁主动甩锅给 25 岁的儿子。\n\n21 世纪你看见的现象——一个领导者在巨大危机来临时, 突然把责任推给下一代, 自己抽身——心理学叫「abdication-under-pressure 压力下逃避」。我 1126 年 1 月 18 日凌晨那个签字动作, 是中国历史上最有名的样本之一。25 年后的我儿子钦宗在金国冰湖上死, 他用一生承担我那一夜甩出去的事。',
        en: 'In the seven years from 1118 to 1125, Tong Guan and I do something the later histories will pin on me forever: the Treaty of the Sea, allying with the Jin to destroy the Liao.\n\nLiao (916-1125, founded by the Khitan) had been the brother-state of Northern Song for over a century under the 1005 Treaty of Chanyuan, with Northern Song paying Liao three hundred thousand taels of silver and three hundred thousand bolts of silk every year — buying one hundred twenty years of peace on the northern border. But in 1118 the Jurchen people (Wanyan Aguda crowned 1115, founded Jin) had already pushed from the northeast to the Liao River, and Liao was tottering. Tong Guan and I thought: while Liao is weak, ally with Jin to destroy Liao, recover the Sixteen Prefectures of Yan-Yun (the area of modern Beijing and Datong, the central plains land ceded to the Khitan in 936 by Shi Jingtang).\n\nFrom 1118 the Song and Jin negotiate by sea through Dengzhou (modern Penglai, Shandong) for seven years. In 1123 the alliance is formalized: Song and Jin attack Liao together, after Liao falls the Yan-Yun Sixteen Prefectures revert to Song, and Song pays Jin annually more than it had paid Liao (two hundred thousand taels of silver and three hundred thousand bolts of silk).\n\nIn February 1125, the Jin army captures the Liao Emperor Tianzuo. Liao is gone. But on the battlefield the Jin discovers: the Song army is rotten — Yanjing (modern Beijing) was taken by the Jin first and then "sold" to Song, because Song could not even defeat the remnants of a defeated Liao. The Jin command works it out — this Northern Song looks rich on the surface and is hollow inside.\n\nIn December 1125, the Jin army splits in two and marches south: the eastern column under Wanyan Zongwang (~1102-1127) through Hebei, the western column under Wanyan Zonghan (1080-1137) through Shanxi. In January 1126 the eastern column closes on Kaifeng.\n\nI am forty-four. Genyue was finished only the year before, and I am still painting and collecting. The news arrives — I panic. What I do in that moment:\n\nOn the twenty-third day of the twelfth month of the seventh year of Xuanhe (January 18, 1126), in the middle of the night, in Funing Hall, I write an abdication edict and pass the throne to my eldest son Zhao Huan — he is twenty-five, becomes Emperor Qinzong, era name Jingkang. I title myself Retired Emperor, take several hundred favored officials, and flee south through the night, reaching Zhenjiang by the end of January.\n\nThis is the most naked moment of my political life. On the very night the largest crisis the dynasty has faced arrives, I choose to dump responsibility onto my twenty-five-year-old son and run. I do not die on a battlefield, I am not deposed — at forty-four I voluntarily hand the disaster to my twenty-five-year-old son.\n\nA twenty-first century phenomenon — a leader, when an enormous crisis arrives, suddenly hands responsibility to the next generation and steps away — psychology calls it abdication-under-pressure. The signature I make at dawn on January 18, 1126, is one of the most famous samples of this in Chinese history. Twenty-five years later, my son Qinzong will die on a frozen lake in the Jin lands, carrying for an entire life what I dumped on him in one night.',
      },
      deliverGoal: 'N9 1118-1125 海上之盟联金灭辽 + 金军发现宋军腐烂 + 1126.1.18 凌晨我禅位 25 岁钦宗连夜南逃 + abdication-under-pressure',
      engagementHook: '我 44 岁把责任甩给 25 岁的儿子——你身边见过这种「压力下逃避」吗?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N10 — STORY (CROSS-LENS ECHO ⭐): 1126.闰 11.25 开封陷 / 翰林图画院全失
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n10',
      type: 'narrative',
      content: {
        cn: '1126 年闰 11 月 25 日 (1127 年 1 月 9 日)。\n\n金军第二次围开封, 这次围了 3 个月。守城的是我 25 岁的儿子钦宗。这一年里他做了我没做的事——亲自登城, 亲自审钱, 亲自下诏割地求和——但他做得已经晚了, 我留给他的是一个空壳的国家。\n\n这一天开封外城陷。几天后内城陷。钦宗赴金营谈判被扣留。北宋实质亡定于 1127.4 (靖康二年三月) 二帝北迁。\n\n金军做的第一件事是搜集贡品。条约规定: 黄金 1000 万锭、白银 2000 万锭、绢 1000 万匹——这是天文数字, 北宋全国一年税收都凑不出来。金军于是改要「内府所有」: 我 27 年集中起来的所有书画、青铜器、玉器、瓷器、乐器、古籍、皇家典籍。\n\n1127 年 4 月 20 日 (靖康二年三月二十七), 金军押解北上的清单:\n- 我 (太上皇) + 钦宗 (皇帝) + 我们的后妃宗室约 3,000 人\n- 翰林图画院全部画师 (王希孟早死, 张择端被押北上, 后下落不明)\n- 太学生 + 太医 + 工匠 + 乐师 + 织女约 4,000 人\n- 《宣和画谱》6,396 幅画\n- 《宣和书谱》1,344 件书法\n- 内府青铜器 + 玉器 + 瓷器 + 乐器约 2 万件\n- 皇家图书馆藏书 + 司天监仪器 + 太医院药材\n\n几乎全部。\n\n——这一刻让你停 30 秒。21 世纪你站在故宫博物院, 看见 27 件唐代真迹、49 件北宋名画——这是中国艺术史现存的全部唐宋顶级真品。我 1119 年内府的总数是 6,396 幅。你看见的是我集中起来又被劫走的 1.2%。\n\n但这件事还有跨 Topic 的一面。21 世纪你学到的「信息保全」5 个样本: \n- Mali Timbuktu 沙漠藏书 (1591 摩洛哥入侵后, 私人家庭把 70 万册手稿藏进沙漠地窖, 21 世纪重见)\n- Renaissance 印刷术 (Gutenberg 1455 后, 一本书可以印 1000 份, 一个城市烧也烧不光)\n- Reformation 95 Theses (Luther 1517 钉门后, 4 周内印遍德国, 不可阻挡)\n- AoE Columbus 1493 信 (3 个月内 9 个版本印遍欧洲)\n- 我的 Huizong 1119 内府 (集中, 不复制, 不分散)——反例\n\n5 个里 4 个用「分散 + 复制」保全, 我 1 个用「集中 + 唯一」毁灭。\n\n——这是我 1119 年没看见的事: 把所有东西放在一个篮子里, 不是保护, 是风险。我跟 Library of Alexandria 走的是同一条路。',
        en: 'On the twenty-fifth day of the intercalary eleventh month of 1126 (January 9, 1127).\n\nThe Jin army has been laying its second siege on Kaifeng for three months. The defender is my twenty-five-year-old son Qinzong. In this one year he has done what I did not — climbed the walls in person, audited the treasury in person, signed cession edicts in person. But he has come to it too late, and what I left him is a hollow state.\n\nOn this day the outer wall of Kaifeng falls. A few days later the inner wall. Qinzong goes to the Jin camp to negotiate and is held there. The Northern Song dies in substance only later, in the fourth month of 1127, when the two emperors are marched north.\n\nThe Jin\'s first action is to gather tribute. The treaty demands ten million ingots of gold, twenty million of silver, ten million bolts of silk — a number the entire annual tax revenue of Northern Song could not meet. The Jin therefore demand "everything in the inner palace": all the paintings, calligraphies, bronzes, jades, porcelains, instruments, ancient books, imperial archives I had been concentrating for twenty-seven years.\n\nApril 20, 1127 (the twenty-seventh day of the third month of the second year of Jingkang), the Jin convoy north includes:\n- Me (Retired Emperor) + Qinzong (Emperor) + our consorts and clan, about three thousand persons\n- The entire Hanlin Painting Academy of painters (Wang Ximeng had already died young; Zhang Zeduan was marched north, his fate after that unknown)\n- Imperial students + court physicians + craftsmen + musicians + weaver-women, about four thousand persons\n- The 6,396 paintings of the Xuanhe Catalogue\n- The 1,344 calligraphies of the Xuanhe Catalogue\n- About twenty thousand inner-palace bronzes, jades, porcelains, instruments\n- The imperial library books, the Bureau of Astronomy instruments, the Imperial Pharmacy materia medica\n\nAlmost everything.\n\nIn this moment, pause for thirty seconds. Twenty-first century, when you stand in the Palace Museum and see twenty-seven authentic Tang works and forty-nine famous Northern Song paintings — that is the totality of surviving top-grade Tang-Song originals. The total in my inner palace in 1119 was 6,396. What you see is one point two percent of what I gathered and lost.\n\nBut there is a cross-Topic side to this. Twenty-first century you learn five samples of information preservation:\n- Mali Timbuktu desert manuscripts (after the 1591 Moroccan invasion, private families hid seven hundred thousand manuscripts in desert cellars; rediscovered in the twenty-first century)\n- Renaissance printing (after Gutenberg in 1455, a book could be printed in a thousand copies; even if one city burned, the work survived)\n- Reformation Ninety-Five Theses (after Luther nailed them in 1517, they were printed across Germany within four weeks, unstoppable)\n- Age of Exploration Columbus letter of 1493 (nine editions across Europe within three months)\n- My Huizong inner palace of 1119 (concentrate, do not copy, do not distribute) — the counter-example\n\nFour of the five preserve through dispersal and copying. The one of mine destroys through concentration and uniqueness.\n\nThis is what I did not see in 1119: putting everything in one basket is not protection, it is risk. I walked the same road as the Library of Alexandria.',
      },
      deliverGoal: 'N10 ⭐ CROSS-LENS ECHO: 1126.闰11.25 开封陷 + 翰林图画院全失 + 6,396 画 + 1,340 书 + 故宫今存 1.2% + 5-Topic 信息保全五面体反例',
      engagementHook: '5 个保全样本 4 个用分散 + 复制, 我 1 个用集中——21 世纪你的重要数据怎么保存?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N11 — SYNTHESIS: 1127.4 北上 / 1135 五国城 54 岁死 / 极致才华 + 系统性盲点
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n11',
      type: 'narrative',
      content: {
        cn: '1127 年 4 月 20 日清晨, 我 44 岁, 跟我 25 岁的儿子钦宗、9 个皇子、几千宫人工匠, 上了金军的囚车, 离开开封, 开始北上 8 个月的流亡。\n\n5 月到燕京 (今北京)。9 月到中京 (今内蒙古宁城)。1128 年 7 月到上京 (今黑龙江阿城)。1130 年 7 月被押到五国城 (今黑龙江依兰), 一个用木栅围起来的小村, 周围是松花江下游的沼泽和针叶林。\n\n五国城那 5 年 (1130-1135), 金人给我们一座小木屋, 几只羊。冬天零下 30 度。我跟我儿子钦宗一起被关——但金人不给我们见面, 隔几个院子。1134 年我得到一个金人发的小封号叫「昏德公」(意思: 昏庸德薄之公爵), 钦宗叫「重昏侯」(意思: 加倍昏庸的侯爵)。\n\n这 5 年我做的事:\n- 用瘦金体写诗, 大约 100 多首存世。最著名一首《在北题壁》: 「彻夜西风撼破扉, 萧条孤馆一灯微。家山回首三千里, 目断天南无雁飞。」\n- 给南宋的儿子赵构 (我第 9 子, 1127 年 5 月在应天府即位, 改元建炎, 是为高宗) 写信, 求他北伐救我。但赵构 1138 定都临安 (今杭州), 1141 跟金人签「绍兴和议」——他不要我回去。我活着比死了麻烦——我回去他这个皇帝就要让位。\n- 1135 年 6 月 4 日 (绍兴五年四月廿一), 我死在五国城。54 岁。死因不详, 一说自然死, 一说被毒。我的尸体被金人简葬。1142 年高宗为政治目的假谈判把我尸骨迎回, 葬绍兴永祐陵。\n\n——这一刻让你 30 秒, 看见我整个人。\n\n我是中国艺术史最高峰皇帝之一: 创瘦金体, 设画学, 修《宣和画谱》《宣和书谱》, 画《瑞鹤图》《听琴图》。这些事每一件后人单独做都是大师。我一辈子做了五件。\n\n我也是中国历史最大政治灾难责任人之一: 用蔡京 24 年, 4 年神霄宫废佛耗去全国田赋相当一部分, 4 年花石纲压破江浙, 1118-1125 海上之盟联金灭辽自掘坟墓, 1126 年 1 月把责任甩给 25 岁的儿子。北宋 167 年亡在我手里。\n\n两边都是真的。这就是「极致才华 + 系统性盲点」: 不是「他其实是好人」, 不是「他其实是坏人」, 是这两个东西在同一个 54 岁的身体里, 同时是真的。\n\n21 世纪你会遇到这种人——可能是一个艺术家朋友, 可能是一个公司创始人, 可能是一个你最爱的家人。他在某一件事上做到了极致, 在另一件事上完全看不见。你怎么评价他? 我没答案。我自己就是。',
        en: 'Dawn, April 20, 1127. I am forty-four. With my twenty-five-year-old son Qinzong, nine imperial princes, and several thousand palace women and craftsmen, I climb onto Jin prison wagons, leave Kaifeng, and begin an eight-month exile north.\n\nMay we reach Yanjing (modern Beijing). September Zhongjing (modern Ningcheng, Inner Mongolia). July 1128 Shangjing (modern Acheng, Heilongjiang). July 1130 we are moved to the Five Kingdoms City (modern Yilan, Heilongjiang), a small village surrounded by wooden palisades, in the marshes and conifer forests of the lower Songhua River.\n\nThe five years in the Five Kingdoms City (1130-1135) — the Jin give us a small wooden hut and a few sheep. Winters minus thirty degrees Celsius. Qinzong and I are imprisoned together but not allowed to see each other; we are kept several courtyards apart. In 1134 the Jin grant me a small title, Duke of Hunde (the Duke of Muddled Virtue), and Qinzong becomes the Marquis of Doubled-Muddled.\n\nIn these five years what I do:\n- Write poems in Slender-Gold, about a hundred surviving. The most famous is Inscribed on the Wall in the North: "All night the western wind shakes the broken door, in this lonely hut a single lamp grows dim. Looking back at home three thousand li away, my eye strains toward the far south — no wild geese fly."\n- Write letters to my son Zhao Gou in the Southern Song (my ninth son, who in May 1127 was crowned at Yingtian Prefecture, era name Jianyan, becoming Emperor Gaozong) — begging him to march north and rescue me. But Gaozong fixes his capital at Lin\'an (modern Hangzhou) in 1138 and signs the Treaty of Shaoxing with Jin in 1141 — he does not want me back. I am more trouble alive than dead. If I return, his throne must yield to mine.\n- On the twenty-first day of the fourth month of the fifth year of Shaoxing (June 4, 1135), I die in the Five Kingdoms City. Fifty-four years old. Cause uncertain — natural death, some say poisoning. The Jin bury me roughly. In 1142, Gaozong, for political reasons during peace negotiations, has my bones brought back, and I am reburied in Yongyou Mausoleum in Shaoxing.\n\nIn this moment, pause for thirty seconds and see the whole of me.\n\nI am one of the highest peaks of Chinese art history: founder of Slender-Gold, builder of the Painting School, compiler of the Xuanhe catalogues, painter of Cranes of Good Omen and Listening to the Qin. Each of these would make a master if a later person did one alone. I did five.\n\nI am also one of the men most responsible for the largest political catastrophe in Chinese history: I used Cai Jing for twenty-four years; four years of Shenxiao Palace construction and Buddhist abolition consumed a substantial share of national land-tax revenue; four years of Flowery Stone Convoys ground two provinces into ruin; the 1118-1125 Treaty of the Sea destroyed Liao and dug my own grave; on January 18, 1126, I dumped the disaster on my twenty-five-year-old son. Northern Song stood one hundred sixty-seven years and ended in my hands.\n\nBoth are true. This is what extreme talent and systemic blindness look like together: not "he was actually a good man," not "he was actually a bad man," but the two of them in the same fifty-four-year-old body, both true at the same time.\n\nIn the twenty-first century you will meet someone like this — perhaps an artist friend, perhaps a company founder, perhaps the family member you love most. They reach the extreme in one thing and are completely blind in another. How do you evaluate them? I have no answer. I am one myself.',
      },
      deliverGoal: 'N11 SYNTHESIS — 1127.4 北上 + 1130 五国城 + 1135.6.4 死 54 岁 + 「在北题壁」+ 高宗不要我回 + 极致才华 + 系统性盲点两边都站',
      // 5-22 尾部疲劳悬崖修复（方案①）：N11 从强制写作降级为"喘息+预热"读节点。
      //   "两边都是真的/我没答案"那句留在 body（仍被读到），评价问题挪到 N12 合并写作，
      //   避免 N10(史料写)→N11(写)→N12(写) 三连重写作。
      engagementHook: '一个人在某件事极致、另一件事盲点——先在心里想想你怎么看，下一节我会正式问你。',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N12 — META (CLOSING): 21 世纪 Huizong 评价 / Lorenzo Medici Mansa Musa 同代对照
    // ═══════════════════════════════════════════════════
    {
      id: 'hz-n12',
      type: 'narrative',
      content: {
        cn: '21 世纪某天的清晨, 你坐在屏幕前, 走完了 11 节我的 53 年。\n\n我留下来的东西:\n- 文物: 《瑞鹤图》(辽宁省博)、《听琴图》(故宫北京)、《芙蓉锦鸡图》(故宫北京)、瘦金体真迹《草书千字文》《秾芳诗帖》——10 多件传世真迹。\n- 字体: 21 世纪每台 macOS / Windows / 微信里都有「瘦金体」字体。我 1102-1110 在福宁殿东暖阁磨出来的笔锋, 走过 900 年, 还在你手机里。\n- 制度: 翰林图画院国家美术学院模式, 影响中国后代皇家艺术机构 (元、明、清)。21 世纪中央美术学院、中国美术学院的远祖。\n- 文献: 《宣和画谱》《宣和书谱》——中国美术史最早系统目录。\n- 一句成语: 「靖康耻」——岳飞《满江红》「靖康耻, 犹未雪」从我 1126 那一夜的甩锅开始。\n\n21 世纪我的评价 3 派:\n- 传统派 (旧史 + 民间): 亡国之君, 责任全在我。代表《宋史·徽宗本纪》「自古人君玩物而丧志, 纵欲而败度, 鲜不亡身……宋徽宗诸事皆能, 独不能为君耳」。\n- 艺术派 (西方汉学 + 21 世纪修正): 中国艺术史不可替代的天才皇帝, 政治悲剧不能抹杀艺术成就。代表 Patricia Ebrey 的 Emperor Huizong (Harvard 2014, 700 页传记) 把我重新放回 12 世纪东亚 context。\n- 同体派 (21 世纪主流): 才华和盲点同时为真, 不做单一道德评价。这是我自己倾向的看法——但我承认我有自利动机。\n\n跨文化对照同代 perpetrator-actor:\n- Lorenzo de\' Medici (1449-1492, Florence): 跟我距离 300 年但 perspectiveTag 同质——艺术 patron + 政治灾难 (1494 美第奇被驱逐)。\n- 法国路易十六 (1754-1793): 钟表匠 + 1793 断头台。\n\n2 个加我, 都是「极致才华或文化品味 + 系统性政治盲点」。这不是巧合——这是 power 跟 talent 同体时的一种 pattern。\n\n停 30 秒, 想 Joseph Needham 1969 年问的那个问题: 宋代造纸、印刷、火药、指南针领先全球 600 年, 为什么 1840 年后被欧洲反超? 政治选择不是文明缺陷。我用蔡京 24 年是政治选择。1126 集中收藏全失也是政治选择。一个文明的盛与衰, 是一连串政治选择的总和, 不是文明本身的命运。\n\n——最后一件事让你 30 秒。21 世纪某天清晨, 你看完我这 11 节。\n\n你认识谁是我这种人? 一个家人, 一个公司创始人, 一个你最敬仰的艺术家——他/她有极致才华, 也有系统性盲点。你怎么对待这个人?\n\n你不必有答案。900 年了, 我自己也没有。但你愿意 30 秒坐着想这个问题, 已经是我希望你从这 11 节带走的东西了。\n\n我是赵佶。1082-1135。瘦金体的发明者。北宋的最后一个皇帝。极致才华和系统性盲点同体的样本。',
        en: 'A morning in the twenty-first century. You sit at a screen, having walked through eleven sections of my fifty-three years.\n\nWhat I leave behind:\n- Artifacts: Cranes of Good Omen (Liaoning Provincial Museum), Listening to the Qin (Palace Museum, Beijing), Hibiscus and Golden Pheasant (Palace Museum, Beijing), Slender-Gold originals like the Cursive Thousand-Character Classic and the Nongfang Poem — about a dozen surviving authentic works.\n- A typeface: Every macOS, Windows, and WeChat in the twenty-first century has a Slender-Gold font. The brush tip I forged in the East Warm Chamber of Funing Hall between 1102 and 1110 has walked nine hundred years into your phone.\n- An institution: The Hanlin Art Academy as a state academy of art shaped every later imperial art institution in China — Yuan, Ming, Qing. The distant ancestor of the Central Academy of Fine Arts and the China Academy of Art today.\n- Documents: The Xuanhe catalogues — the earliest systematic catalogues in the history of Chinese art.\n- An idiom: "the shame of Jingkang" — from Yue Fei\'s Manjianghong: "the shame of Jingkang, still unwashed" — beginning on the night I dumped my disaster in 1126.\n\nThree views of me in the twenty-first century:\n- Traditional (the old histories and folk memory): the emperor who lost the dynasty, the responsibility is mine. The Song History\'s Annals of Huizong: "Since antiquity, rulers who were absorbed in objects lost their will, who indulged desire wrecked their order, and few escaped destruction. Emperor Huizong was capable in everything — except being a sovereign."\n- Art-historical (Western sinology and twenty-first century revisionism): an irreplaceable artistic genius, the political tragedy cannot erase the artistic achievement. Patricia Ebrey\'s Emperor Huizong (Harvard 2014, a seven-hundred-page biography) places me back in the twelfth-century East Asian context.\n- Same-body view (the twenty-first century mainstream): talent and blindness are simultaneously true, no single moral verdict. This is the view I lean toward myself — though I admit my motive is self-interested.\n\nCross-cultural same-era perpetrator-actor comparisons:\n- Lorenzo de\' Medici (1449-1492, Florence): three hundred years after me, but the same perspective tag — art patron + political catastrophe (the Medici expulsion of 1494).\n- Louis XVI of France (1754-1793): the clockmaker and the guillotine of 1793.\n\nTwo of them plus me, all sharing extreme talent or cultural taste plus systemic political blindness. Not coincidence — a recurring pattern when power and talent inhabit the same body.\n\nPause thirty seconds and think of the question Joseph Needham asked in 1969: Song-era papermaking, printing, gunpowder, the compass led the world by six hundred years; why did Europe overtake China after 1840? Political choices are not civilizational defects. My twenty-four years with Cai Jing were political choices. The 1126 loss of a single concentrated collection was a political choice. A civilization\'s rise and fall is the sum of a long chain of political choices, not the fate of the civilization itself.\n\nOne last thing — pause for thirty seconds. A morning in the twenty-first century, you finish my eleven sections.\n\nDo you know someone like me? A family member, a company founder, an artist you most admire — they have extreme talent, and they have systemic blindness. How do you treat that person?\n\nYou do not need an answer. Nine hundred years on, I do not have one either. But that you are willing to sit for thirty seconds and think about the question — that is what I hope you take away from these eleven sections.\n\nI am Zhao Ji. 1082-1135. Inventor of Slender-Gold. The last emperor of the Northern Song. A sample of extreme talent and systemic blindness in the same body.',
      },
      deliverGoal: 'N12 META — 21 世纪某天 + 文物字体制度文献成语 5 项遗产 + 3 派评价 + Lorenzo Medici / 路易十六 2-perpetrator-actor 跨文化对照',
      // 5-22 方案①：N12 合并了原 N11 的"如何评价"+ 本节的"如何对待"，成为唯一的尾部写作。
      engagementHook: '走完我这一生——艺术登峰造极、治国盲目到亡国。你会怎么评价这样一个人？再想一步：你身边有没有这种「某方面极致、某方面盲目」的人，你会怎么对待 TA？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Tang-Song China · LENS 2: Su Shi (lonely-mediator) ────────
//
// Topic: Tang-Song China 618-1279 · 唐宋中国
// HSS-7.3 · AP World 1.1 · AP World 1.2
//
// Lens 2 设计 (per Sarah Chen audit):
//   - id: 'su-shi'
//   - role: 'lonely-mediator'
//   - perspectiveTag: 'scholar-exile'
//
// 不是「政治失败者」也不是「天才文人」二元化 — 苏轼是「内部良心 + 流放仍创造 + 中道智者」
// 他反对王安石新法 (1071) 但又反对司马光全废新法 (1086) — 两边都不容
// 三度流放 (1080 黄州 / 1094 惠州 / 1097 儋州) — 每次都成就更高文化产出
//
// 跨 lens micro-detail (per Sarah audit):
//   1097.6.10 海南雷州港诀别苏辙
//   ⭐ N7 必须包含 — 苏轼 60 岁往儋州 / 苏辙 58 岁往雷州
//   「与君世世为兄弟，又结来生未了因」
//
// 严格规则 (per AoE/Mali 教训):
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - 内嵌引号: 「」(CN) / "..."  (EN), 严禁 «...»
//   - em-dash 「——」 ≤ 3 per 段
//   - 每 node 350-550 CN chars
//   - anti-fab: 乌台诗案 130 天 / 三流放年份精确 (1080/1094/1097) /
//     苏门四学士 (黄庭坚 / 秦观 / 张耒 / 晁补之) /
//     1057 进士 21 岁 + 欧阳修「三百年第一」/ 1037 眉山生 1101 常州死

// ═══════════════════════════════════════════════════
// LENS 2: Su Shi 苏轼 苏东坡 (lonely-mediator)
// ═══════════════════════════════════════════════════

export var suShiLens = {
  id: 'su-shi',
  name: 'Su Shi (Su Dongpo)',
  nameCn: '苏轼 苏东坡',
  role: 'lonely-mediator',
  perspectiveTag: 'scholar-exile',
  description: {
    en: 'You are Su Shi (1037-1101), the "Su Dongpo" of Northern Song — first poet of his century, mentor to the Four Su Disciples (Huang Tingjian, Qin Guan, Zhang Lei, Chao Buzhi), and three times an exile across 21 years of factional warfare. In 1071 you opposed Wang Anshi\'s reforms; in 1086 you opposed Sima Guang\'s wholesale repeal of those same reforms — neither side accepted you. Huangzhou 1080-1084, Huizhou 1094-1097, Danzhou 1097-1100 — each exile produced your most important lyrics. You are not a "political failure" or a "transcendent genius." You are an internal-conscience scholar-exile — the mediator both factions banished.',
    cn: '你是苏轼（1037-1101）——北宋第一文人「苏东坡」，苏门四学士（黄庭坚、秦观、张耒、晁补之）之师，跨神宗 + 哲宗 + 徽宗三朝党争 21 年三度流放。1071 年你反对王安石新法；1086 年你又反对司马光全废新法——两边都不容你。黄州 1080-1084、惠州 1094-1097、儋州 1097-1100——每次流放反而催生你最重要的几首词。你不是「政治失败者」也不是「超脱天才」——你是「内部良心 + 流放仍创造 + 中道智者」——两党共同流放的孤独调停者。',
  },
  storyboard: [
    {
      id: 'ss-n1',
      type: 'narrative',
      content: {
        cn: '1037 年我生于四川眉山, 长江上游的盆地小城。\n\n我父亲苏洵 (1009-1066) 27 岁才发奋读书, 晚成型学者, 但他成了「唐宋八大家」之一。我弟弟苏辙 (1039-1112) 小我两岁。我们同读同写同长大, 后来他也是「唐宋八大家」。\n\n父亲 + 我 + 弟弟, 三个人都进了「唐宋八大家」, 史称「三苏」。这是中国文学史唯一一家三人同入八大家的纪录。\n\n眉山地理偏僻, 远离长安洛阳的政治中心。但四川富庶: 纸 + 笔 + 蜀刻书都领先全国。我们家虽不算豪门, 却有读书的物质基础。\n\n我童年读《庄子》, 读到「不知周之梦为蝴蝶与, 蝴蝶之梦为周与」。我跟父亲说: 这就是我心里早就想说的话。\n\n这一刻我后来用 64 年人生反复回到。「人生如梦」这四个字从童年就刻进我骨头里, 它会在 1082 年的《念奴娇·赤壁怀古》里再次浮现。',
        en: 'I was born in 1037 in Meishan, Sichuan, a small basin town on the upper Yangtze.\n\nMy father Su Xun (1009-1066) only began serious study at 27, a late-bloomer scholar. But he became one of the "Eight Masters of Tang-Song Prose." My brother Su Zhe (1039-1112) was two years younger. We read, wrote, and grew up together, and he also became one of the Eight Masters.\n\nFather + me + brother, all three entered the Eight Masters. Chinese literary history records us as the "Three Sus", the only single family with three members in that pantheon.\n\nMeishan was geographically remote, far from the political centers of Chang\'an and Luoyang. But Sichuan was prosperous: paper, ink, and Shu-block-printed books were the best in the empire. We were not a great family, but we had the material foundation to read.\n\nAs a child I read Zhuangzi (the Daoist classic), reaching the line "I do not know whether Zhou dreamt the butterfly, or the butterfly dreamt Zhou." I told my father: this is what I have always felt but could not say.\n\nThat moment I would return to for 64 years. "Life is a dream", these four words were carved into my bones from childhood.',
      },
      deliverGoal: 'N1 1037 眉山生 / 苏洵 + 苏辙 三父子三苏文章 / 童年读《庄子》「人生如梦」从小刻进骨头',
      engagementHook: '一家三人都进「唐宋八大家」——这种家庭文化氛围你 21 世纪能想象吗？你父母兄弟跟你一起读书是什么体验？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n2',
      type: 'narrative',
      content: {
        cn: '1057 年, 我 21 岁, 跟弟弟苏辙同年中进士 (jinshi, 科举最高学位)。\n\n那一年的进士考试, 主考官是欧阳修 (1007-1072), 北宋古文运动的领袖。\n\n我答《刑赏忠厚之至论》, 欧阳修读完震惊。\n\n他对副考官说: 「读轼书, 不觉汗出。快哉快哉! 老夫当避路放他出一头地也。」意思是: 让这个年轻人超过我。\n\n他后来对人说: 「三十年后世人但知有苏轼, 不复知有欧阳修也。」\n\n更有名的一句: 欧阳修跟王安石同年 (1042 年同科进士), 他评我「此人, 三百年第一。」\n\n21 岁, 我从眉山小城一夜成名汴京。\n\n但那一年也是我母亲程氏去世。我跟弟弟必须丁忧 (守孝 27 个月) 回眉山, 这是 1057-1059。\n\n等我守孝完重新回京时, 朝廷正在准备大变局。王安石 (1021-1086) 的变法风暴马上要来。\n\n而我, 21 岁的「三百年第一」, 还不知道我会成为这场风暴里两边都不容的人。',
        en: 'In 1057, at 21, my brother Su Zhe and I passed the jinshi (imperial exam top degree) together.\n\nThe chief examiner that year was Ouyang Xiu (1007-1072), the leader of the Northern Song "ancient prose" movement.\n\nI wrote an essay on "Punishment and Reward Should Spring from Loyal Generosity." Ouyang Xiu, reading it, was stunned.\n\nHe said to the deputy examiner: "Reading Shi I sweat without knowing why. Splendid. I will step aside and let this young man rise above me."\n\nLater he told others: "Thirty years from now, people will only know Su Shi. They will no longer remember Ouyang Xiu."\n\nThe most famous line: Ouyang Xiu and Wang Anshi were the same exam-cohort (both 1042 jinshi). He said of me: "This man, first in three hundred years."\n\nAt 21, I went from a Meishan small-town boy to overnight fame in the capital Bianjing.\n\nBut that same year my mother Lady Cheng died. My brother and I had to observe the 27-month mourning rite back in Meishan, 1057-1059.\n\nWhen I returned to court, the empire was preparing for a great upheaval. Wang Anshi (1021-1086) and his reform storm were almost here.\n\nAnd I, the 21-year-old "first in three hundred years," did not yet know I would become the man both sides of that storm refused to keep.',
      },
      deliverGoal: 'N2 1057 21 岁同弟苏辙中进士 / 欧阳修主考 + 「三百年第一」/ 1057-1059 母丧丁忧 / 王安石变法风暴预告',
      engagementHook: '21 岁被「三百年第一」评——是机会还是诅咒？你怎么背得起这种期待？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n3',
      type: 'narrative',
      content: {
        cn: '1069 年, 宋神宗 (1048-1085) 任王安石参知政事, 变法开始。\n\n王安石新法: 青苗法 (春放秋收, 名义年息二分即 20%), 市易法 (官府垄断采购), 募役法 (钱代役), 保甲法 (军事化保甲互保)。目标是富国强兵。\n\n我反对。\n\n1070 年我上《上神宗皇帝书》, 一万多字, 核心三点。\n\n第一: 青苗法「立法之意, 未必皆出于谋利」。但执行下去, 地方官员强行摊派加征, 农民被迫借贷。名义年息二分(20%), 实际负担常达 50-60%。百姓更苦。\n\n第二: 用人「举措失当, 则人心不安」。王安石把反对者全部赶出朝廷。朝廷只剩一个声音, 长期看会出问题。\n\n第三:「凡为天下国家者, 先求其利而后求其害, 可乎?」只看新法收益不看代价, 这是顶层设计的盲区。\n\n我不是反对改革, 我反对「这种改革」。\n\n王安石把我标为旧党。但我跟司马光 (1019-1086) 旧党也不一样: 司马光要全废新法, 我说募役法该留。\n\n两边都不容我。1071 年我自请外放, 离开汴京去做地方官。',
        en: 'In 1069, Emperor Shenzong (1048-1085) made Wang Anshi vice grand councilor, and the New Policies began.\n\nWang Anshi\'s reforms: Green Sprouts Law (state loans at a nominal twenty percent annual, repaid at harvest), Trade Equalization (state procurement monopoly), Service Exemption (cash for corvée), and Mutual Security (militarized rural defense units). The goal was to make the state rich and the army strong.\n\nI opposed them.\n\nIn 1070 I submitted my "Memorial to Emperor Shenzong," over ten thousand characters, three core points.\n\nFirst: the Green Sprouts Law "may not have been designed for profit." But in practice, local officials forced quotas on every household and added surcharges. Farmers had to borrow. The nominal twenty percent rate became a real burden of fifty to sixty percent. The people grew poorer.\n\nSecond: on personnel, "if appointments are wrong, hearts grow uneasy." Wang Anshi drove every dissenter out of court. Only one voice remained. Long-term, this fails.\n\nThird: "Those who govern an empire, should they consider only benefit and never cost?" Looking only at gains and not costs is the blind spot of top-down design.\n\nI did not oppose reform. I opposed this kind of reform.\n\nWang Anshi labeled me a Conservative. But I differed from Sima Guang (1019-1086) too. Sima Guang wanted to abolish all New Policies; I argued the Service Exemption should be kept.\n\nNeither side accepted me. In 1071 I requested transfer out of the capital, to serve as a provincial official.',
      },
      deliverGoal: 'N3 1069-1071 王安石变法期 / 苏轼《上神宗皇帝书》反对青苗法 / 同时跟司马光旧党也不同 / 两边不容 1071 自请外放',
      engagementHook: '反对新法 + 反对全废新法——两边都不容——这种「中道」立场你 21 世纪还能找到空间吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n4',
      type: 'narrative',
      content: {
        cn: '1071-1079 年我外放 8 年: 杭州 + 密州 + 徐州 + 湖州。\n\n这 8 年我做实事:\n- 1071-1074 杭州通判: 疏浚西湖, 治理钱塘江。西湖「苏堤」就是这时候的雏形 (后来 1089 年我再回杭州才正式建堤)。\n- 1077 徐州知州: 黄河决口, 我亲临大堤指挥 70 多天。洪水退后徐州人立祠纪念。\n- 1079 调任湖州: 刚到任写谢恩表, 这成了灾难的开端。\n\n1079 年 7 月, 御史台李定 + 何正臣 + 舒亶, 从我十几年来的诗词里挑出「讽刺新法」字句, 弹劾我「愚弄朝廷」「妄自尊大」。\n\n7 月 28 日皇甫遵带兵到湖州州衙, 把我下狱。\n\n御史台又名「乌台」, 因为院里柏树多乌鸦, 所以这案叫「乌台诗案」。\n\n我在御史台监狱关了 130 天, 从 1079 年 8 月 18 日到 12 月 26 日。\n\n130 天里: 审讯, 自辩, 几乎被判死。\n\n弟弟苏辙上书愿用自己官职换我命。王安石 (已罢相) 也写信给神宗: 「岂有圣世而杀才士乎?」\n\n12 月 28 日神宗下旨: 贬黄州团练副使, 本州安置, 不得签书公事。\n\n我活下来了, 但失去了一切。',
        en: 'From 1071 to 1079 I served eight years in the provinces: Hangzhou, Mizhou, Xuzhou, Huzhou.\n\nThese eight years I did real work:\n- 1071-1074 Hangzhou deputy prefect. I dredged West Lake and managed the Qiantang River. The West Lake "Su Causeway" was first conceived here (formally built when I returned in 1089).\n- 1077 Xuzhou prefect. When the Yellow River broke its banks, I stood on the dyke directing flood-defense for 70 days. After the waters fell, the people built a shrine in my name.\n- 1079 transferred to Huzhou. On arrival I wrote the customary memorial of thanks, and this became the beginning of disaster.\n\nJuly 1079: censors Li Ding, He Zhengchen, and Shu Dan combed through ten years of my poems and found phrases they read as "mocking the New Policies." They impeached me for "fooling the court" and "vain self-importance."\n\nJuly 28: Huangfu Zun arrived at the Huzhou yamen with troops and took me into custody.\n\nThe Censorate was called "Crow Terrace" because of the many crows in its cypress trees, so the case is known as the "Crow Terrace Poetry Case."\n\nI was held in the Censorate prison for 130 days, from 18 August to 26 December 1079.\n\nIn those 130 days: interrogation, self-defense, near-execution.\n\nMy brother Su Zhe petitioned, offering his own office in exchange for my life. Wang Anshi (then retired) wrote to Shenzong: "How can a sage age execute a man of talent?"\n\nDecember 28, Shenzong issued the decree: demoted to deputy training commissioner of Huangzhou, confined to Huangzhou, barred from signing official documents.\n\nI survived. But I had lost everything.',
      },
      deliverGoal: 'N4 1071-1079 杭州/徐州治水 / 1079 乌台诗案 130 天监狱 / 苏辙 + 王安石 (已罢相) 都为我求情 / 12.28 贬黄州',
      engagementHook: '从「三百年第一」到 130 天死囚——你怎么从这种崩塌站起来？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n5',
      type: 'narrative',
      content: {
        cn: '1080 年 2 月 1 日, 我 43 岁, 抵达黄州 (今湖北黄冈)。\n\n团练副使, 名义上是地方军事副官, 实际是流放。我没俸禄, 不能签公事, 全家挤在江边小破屋里。日子苦。\n\n第二年我向官府要了一块荒地, 城东的一片缓坡, 开荒种麦。\n\n我自己拿锄头下地。\n\n这块坡叫「东坡」。\n\n从此我不叫苏轼。我自号「东坡居士」。苏东坡这个名字, 是从 43 岁开始用的。\n\n黄州 4 年 (1080-1084), 是我一辈子最重要的 4 年。\n\n1082 年 7 月 16 日, 我跟朋友夜游赤壁, 写《赤壁赋》。\n10 月 15 日又写《后赤壁赋》。\n同年填《念奴娇·赤壁怀古》:「大江东去, 浪淘尽, 千古风流人物」。\n\n这一首词把宋词从婉约派 (柳永、晏几道) 转向豪放派, 是中国词史的转折点。\n\n词的最后一句:「人生如梦, 一樽还酹江月」。\n\n5 岁读《庄子》刻在骨头里的「人生如梦」, 43 岁在黄州东坡之上重新写出来。\n\n流放不是终点, 是创造的起点。',
        en: 'On 1 February 1080, at 43, I arrived in Huangzhou (modern Huanggang, Hubei).\n\nDeputy training commissioner: in name a junior military officer, in fact an exile. No salary, no signing authority, my whole family crammed into a small broken house by the river. Life was hard.\n\nThe next year I asked the local government for a piece of fallow ground, a gentle slope east of the city wall, and broke it for wheat.\n\nI worked the hoe with my own hands.\n\nThe slope was called "Dongpo" (East Slope).\n\nFrom that day I stopped calling myself Su Shi. I took the style "Dongpo Jushi," the Hermit of East Slope. Su Dongpo, the name the world remembers, began at 43.\n\nThe four Huangzhou years (1080-1084) were the most important four years of my life.\n\n16 July 1082, I went out at night with friends to Red Cliff and wrote "Rhapsody on Red Cliff."\n15 October, I wrote "Latter Rhapsody on Red Cliff."\nThat same year I composed the lyric "Niannujiao: Meditating on Red Cliff": "The Great River flows east, its waves have washed away a thousand years of heroes."\n\nThis one lyric turned Song ci poetry from the graceful school (Liu Yong, Yan Jidao) toward the bold school, a true pivot in the history of Chinese verse.\n\nThe closing line: "Life is like a dream; I pour one cup to the river\'s moon."\n\nThe Zhuangzi line carved into my bones at five — "life is a dream" — at 43 on East Slope, I wrote it out again.\n\nExile is not the end. It is the start of creation.',
      },
      deliverGoal: 'N5 1080 黄州第一次流放 4 年 / 自号「东坡居士」苏东坡名字起点 / 1082《赤壁赋》《后赤壁赋》《念奴娇·赤壁怀古》 / 宋词婉约派转豪放派转折点 / 「人生如梦」童年→43 岁回环',
      engagementHook: '流放 4 年成就一辈子最高峰——你 21 世纪「失败」之后会重新创造吗？还是只想恢复原来位置？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n6',
      type: 'narrative',
      content: {
        cn: '1085 年神宗崩, 9 岁哲宗 (赵煦) 继位, 祖母高太后听政。\n\n旧党司马光当政, 召我回朝。1086 年我 49 岁回汴京任翰林学士。\n\n但我又出问题了。\n\n司马光要全部废除王安石新法, 一道圣旨废 18 年立法。\n\n我反对。我对司马光说:\n\n「免役 (募役法) 虽是新法, 但施行 16 年, 百姓已经适应。一旦全废, 重回劳役制, 农民秋收时被强征, 土地荒废, 更乱。」\n\n「不能因为反对一个人, 而把所有他做的事都推翻。」\n\n司马光怒。\n\n旧党也开始排挤我。\n\n1089 年我再请外放, 任杭州知州, 回到 18 年前我治水的杭州。\n\n这次我正式建「苏堤」: 西湖南北两岸用淤泥筑长堤, 种柳树, 设六桥。「苏堤春晓」西湖十景之首是这次留下的。\n\n但政治上我已经清楚: 新党不容我, 旧党也不容我, 我是「两党之间无党」。\n\n这种「中道」立场, 在朋党时代是注定孤独的。\n\n你 21 世纪两极化政治, 是不是也有类似的「中道孤独」?',
        en: 'In 1085 Emperor Shenzong died. The nine-year-old Emperor Zhezong (Zhao Xu) succeeded, with his grandmother Empress Dowager Gao as regent.\n\nThe Conservative party under Sima Guang came to power and called me back to court. In 1086, at 49, I returned to Bianjing as Hanlin Academician.\n\nBut I ran into trouble again.\n\nSima Guang wanted to abolish all of Wang Anshi\'s New Policies, undoing 18 years of legislation in a single edict.\n\nI opposed it. I said to Sima Guang:\n\n"The Service Exemption, though it is a New Policy, has been in force for 16 years. The people have adapted. Abolish it overnight, return to corvée, and farmers will be conscripted at harvest. Fields will go fallow. Chaos will follow."\n\n"You cannot, simply because you oppose one man, overturn everything he did."\n\nSima Guang was furious.\n\nThe Conservatives began to push me out.\n\nIn 1089 I asked again for a transfer and was sent as prefect of Hangzhou, back to the city where I had managed the water 18 years before.\n\nThis time I formally built the "Su Causeway": north-south across West Lake, raised from dredged silt, planted with willows, with six bridges. "Spring Dawn at the Su Causeway," first of the Ten Scenes of West Lake, comes from this season.\n\nBut politically I now saw clearly: the Reformers reject me, the Conservatives reject me, I am the no-party man between two parties.\n\nThis "middle way" position, in an age of factions, is destined to be lonely.\n\nYour 21st-century polarized politics — is there a similar "middle-way loneliness"?',
      },
      deliverGoal: 'N6 1086 哲宗即位 / 旧党司马光当政 / 苏轼回朝任翰林学士 / 反对司马光全废新法 → 1089 杭州第二次出 / 苏堤建于此时 / 中道两党都不容',
      engagementHook: '21 世纪两极化政治——你看到「中道」立场的人吗？他们处境怎么样？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n7',
      type: 'narrative',
      content: {
        cn: '1093 年高太后死, 19 岁哲宗亲政。\n\n哲宗 9 岁继位时祖母听政 8 年, 他记着祖母 + 司马光打压新党。\n\n他亲政第一件事: 召回章惇 + 蔡京, 重启新法, 并清算「元祐党人」。\n\n旧党列名碑刻 309 人, 我跟弟弟苏辙都在上面。\n\n1094 年, 我 57 岁, 贬惠州 (今广东惠州)。\n\n惠州当时是岭南瘴疠之地, 但比起后来的儋州还算「轻贬」。\n\n1097 年哲宗再加一道贬令, 这次发我去儋州 (今海南), 也把弟弟苏辙发雷州 (广东雷州半岛)。\n\n1097 年 6 月 10 日, 我跟苏辙在雷州海康相见。\n\n这是我们兄弟最后一面。\n\n他 58 岁要往雷州, 我 60 岁要渡海去儋州。海南那时是流放最远之地。\n\n我们在港口同宿一夜, 第二天我上船, 他在岸上送。\n\n那一夜我写诗给他 (这一句是我引用弟弟苏辙〈逍遥堂会宿二首〉的旧句):\n\n「与君世世为兄弟, 又结来生未了因。」\n\n意思是: 今生这一别可能再不见, 但我跟你下一辈子还做兄弟, 再下一辈子还有未尽的因缘。\n\n这一句, 是我跟弟弟 60 年同读同写同长大同遭贬同流放最后的话。',
        en: 'In 1093, Empress Dowager Gao died, and the nineteen-year-old Zhezong took the throne in his own name.\n\nZhezong had been nine when he succeeded; his grandmother had ruled for eight years. He remembered his grandmother and Sima Guang crushing the Reformers.\n\nHis first act on taking power: recall Zhang Dun and Cai Jing, restart the New Policies, and purge the "Yuanyou faction."\n\nThe Conservative blacklist named 309 people. Both my brother Su Zhe and I were on it.\n\n1094, at 57, I was demoted to Huizhou (modern Huizhou, Guangdong).\n\nHuizhou was a malarial frontier, but compared to what came later, this was a "light" exile.\n\n1097, Zhezong issued another order, sending me on to Danzhou on Hainan island, and sending my brother Su Zhe to Leizhou (the Leizhou peninsula, Guangdong).\n\nOn 10 June 1097, Su Zhe and I met in Haikang on Leizhou.\n\nThis was the last time we ever saw each other.\n\nHe was 58, on his way to Leizhou. I was 60, about to cross the strait to Danzhou. Hainan in 1097 was the furthest exile in the empire.\n\nWe slept one night at the port together. The next day I boarded ship; he stood on the shore to see me off.\n\nThat night I quoted to him an old line of his own (from his "Two Poems on Sharing the Night at Xiaoyao Hall"):\n\n"With you, life after life, may we be brothers — and in the next life still have karma unfinished."\n\nMeaning: in this life this parting may be the last; but you and I, in the next life, will still be brothers, and in the life after that, there will still be karma we have not finished.\n\nThat line is the last word between two brothers, 60 years of reading, writing, growing up, factional ruin, and exile together, sealed.',
      },
      deliverGoal: 'N7 cross-lens micro-detail (1097.6.10 海南雷州港诀别苏辙) / 1093 哲宗亲政清算元祐党人 / 1094 惠州 / 1097 儋州 / 苏轼 60 岁苏辙 58 岁 / 「与君世世为兄弟」实为引用苏辙〈逍遥堂会宿二首〉旧句, 1097 雷州夜苏轼引用兄诗',
      engagementHook: '「与君世世为兄弟」——你跟最亲的人有没有过觉得「这一别可能再不见」的时刻？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n8',
      type: 'narrative',
      content: {
        cn: '1097 年 7 月, 我 60 岁, 渡琼州海峡到儋州。\n\n儋州 (今海南儋州), 11 世纪是流放最远之地, 「天涯海角」, 瘴疠之乡。\n\n我到儋州时, 以为是来等死的。\n\n但我没死, 我活下来, 还活了 3 年 (1097-1100)。\n\n这 3 年我做了 4 件事。\n\n第一, 跟当地黎族原住民交朋友。他们带我学海南方言, 教我怎么避瘴气, 给我送菜。我跟黎族村民一起吃槟榔, 喝椰汁。\n\n第二, 开学。海南此前没有书院, 我办学讲《论语》《尚书》。我的学生姜唐佐后来成为海南第一个考中举人的人 (1099), 这是海南文化教育史的起点。\n\n第三, 写《东坡志林》, 一部笔记体杂著, 记录我在儋州的生活、哲学思考、历史评论。\n\n第四, 继续写诗词。「九死南荒吾不恨, 兹游奇绝冠平生。」意思是: 南方流放九死一生我不后悔, 这次旅程的奇绝是我一辈子最高峰。\n\n60 岁, 三度流放, 海南最远。\n\n但我说「兹游奇绝冠平生」。\n\n你怎么读这句话?',
        en: 'July 1097, at 60, I crossed the Qiongzhou Strait to Danzhou.\n\nDanzhou (modern Danzhou, Hainan), in the 11th century the furthest exile in the empire, "the end of the sky and the corner of the sea," a malarial frontier.\n\nWhen I arrived I thought I had come to die.\n\nBut I did not die. I lived three more years (1097-1100).\n\nIn those three years I did four things.\n\nFirst, I made friends with the local Li (Hlai) indigenous people. They taught me the Hainan dialect, taught me how to live with the malarial air, brought me vegetables. I sat with Li villagers chewing betel and drinking coconut milk.\n\nSecond, I opened a school. Hainan had had no academy before me. I taught the Analects and the Book of Documents. My student Jiang Tangzuo later became the first man from Hainan to pass the provincial exam (1099). This was the beginning of Hainan\'s cultural and educational history.\n\nThird, I wrote Dongpo Zhilin (East Slope Notebook), a miscellany of jottings recording my life in Danzhou, philosophical thought, historical commentary.\n\nFourth, I kept writing poetry. "Nine deaths in the southern wilderness, I have no regret; this strange and wondrous journey crowns my whole life." Meaning: nearly dying nine times in southern exile, I do not regret it; the strangeness of this journey is the peak of my life.\n\nAt 60, three times exiled, Hainan the furthest.\n\nBut I said: "this strange journey crowns my life."\n\nHow do you read that line?',
      },
      deliverGoal: 'N8 1097-1100 儋州第三次流放 60 岁 / 跟黎族原住民交友 + 开学 (姜唐佐 1099 海南第一举人) + 《东坡志林》/「九死南荒吾不恨——兹游奇绝冠平生」',
      engagementHook: '60 岁流放最远之地——「兹游奇绝冠平生」——这是真心还是自我安慰？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n9',
      type: 'narrative',
      content: {
        cn: '1100 年正月哲宗死, 25 岁无嗣。\n\n弟弟徽宗 (赵佶, 18 岁, 后来「靖康之耻」那个皇帝) 继位。\n\n太皇太后向氏听政, 大赦天下, 所有元祐党人复官北归。\n\n我接到诏书时, 在儋州茅屋里。\n\n63 岁, 3 年没见过家人, 身体瘦得像枯枝, 但还活着。\n\n我跟黎族朋友告别, 他们送我到海边, 有人哭, 有人塞一袋槟榔给我路上吃。\n\n1100 年 6 月我从儋州渡海, 回大陆。\n\n沿路经过雷州, 我跟弟弟苏辙重逢。\n\n这一次我们都活着, 这是 1097 年那次诀别后我们还能再见。\n\n我跟他说:「我以为再见不到你了。」\n\n他说:「我也是。」\n\n两个老人, 苏轼 63 + 苏辙 61, 抱头哭。\n\n我们一起走到惠州, 那里我有 3 年 (1094-1097) 熟悉的地方。\n\n但弟弟去许州, 我继续北上。\n\n这是我们最后一次见, 1100 年 9 月。之后我没再见过他。',
        en: 'In the first month of 1100 Emperor Zhezong died, 25, with no heir.\n\nHis younger brother Huizong (Zhao Ji, 18, the emperor who would later live the catastrophe of 1127) succeeded.\n\nThe Empress Dowager Xiang took the regency, a general amnesty was issued, every member of the Yuanyou blacklist was restored and called north.\n\nI received the edict in my thatched hut in Danzhou.\n\n63 years old, three years without seeing family, body thin as a dead branch, but alive.\n\nI said goodbye to my Li friends. They walked me to the shore. Some wept; one pressed a sack of betel into my hand for the road.\n\nJune 1100 I crossed the strait from Danzhou back to the mainland.\n\nOn the way I passed Leizhou and was reunited with my brother Su Zhe.\n\nThis time we were both alive. Three years after the parting of 1097, we saw each other once more.\n\nI said: "I thought I would never see you again."\n\nHe said: "I thought the same."\n\nTwo old men, Shi at 63, Zhe at 61, held each other and wept.\n\nWe walked together as far as Huizhou, where I had spent three familiar years (1094-1097).\n\nBut he went on to Xuzhou; I continued north.\n\nThis was the last time we saw each other, September 1100. After that I never saw him again.',
      },
      deliverGoal: 'N9 1100 哲宗死 / 徽宗即位 / 大赦 / 苏轼 63 岁北归 / 跟黎族告别 / 雷州再见苏辙——1097 诀别后还能再见 / 1100.9 真正最后一面',
      engagementHook: '「我以为再见不到你了」——这种重逢的心情你 21 世纪经历过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n10',
      type: 'narrative',
      content: {
        cn: '1101 年 7 月 28 日, 我死在常州 (今江苏常州)。\n\n65 岁, 刚从海南北归一年, 还没回到老家眉山, 也没回到弟弟身边。\n\n途中染瘴, 身体撑不住。\n\n临终前几日, 我在常州顾塘桥旁的客舍里。\n\n弟子钱济明 + 维琳长老 + 几个朋友守在床边。\n\n维琳长老问我:「先生平生学佛, 临终怎么想?」\n\n我说:「西方不无, 但个里着力不得。」意思是: 佛教说的西方极乐世界不是没有, 但临死之时你想用力去那里, 反而到不了。\n\n这是禅宗最深的一层。\n\n临终前一日, 我自题画像, 写了一首总结一生的诗:\n\n「问汝平生功业, 黄州惠州儋州。」\n\n意思是: 你问我这辈子做了什么大事?\n\n答案: 黄州 + 惠州 + 儋州, 我三度流放的三个地方。\n\n不是 1057 年的「三百年第一」。\n不是 1086 年的翰林学士。\n不是杭州治水建苏堤。\n\n而是三度流放。\n\n这是一个一辈子被两党流放的人临终时的自我评价。\n\n你怎么读这句话?',
        en: 'On 28 July 1101, I died in Changzhou (modern Changzhou, Jiangsu).\n\n65 years old, barely a year back from Hainan, never reached my hometown Meishan, never returned to my brother\'s side.\n\nOn the road I had caught a fever from the southern climate. My body could not bear it.\n\nIn my last days, in an inn beside the Gutang Bridge in Changzhou.\n\nMy disciple Qian Jiming, the elder monk Weilin, and a few friends sat at my bed.\n\nElder Weilin asked: "Master, you have studied Buddhism your whole life. What do you think now, at the end?"\n\nI said: "The Western Paradise is not nothing, but at this point, force does not reach it." Meaning: the Pure Land of Buddhist teaching is real, but in this dying moment, the harder you push toward it, the less you arrive.\n\nThis is the deepest layer of Chan (Zen).\n\nThe day before I died, I inscribed my own self-portrait with a poem summing up my life:\n\n"You ask what I have done in this life, Huangzhou, Huizhou, Danzhou."\n\nMeaning: you ask what I accomplished in my life?\n\nAnswer: Huangzhou + Huizhou + Danzhou, the three places I was exiled to.\n\nNot the "first in three hundred years" of 1057.\nNot the Hanlin Academician of 1086.\nNot the Hangzhou water-works and the Su Causeway.\n\nBut the three exiles.\n\nThat is the self-assessment of a man both factions banished.\n\nHow do you read it?',
      },
      deliverGoal: 'N10 1101.7.28 常州 65 岁死途中 / 临终诗「问汝平生功业，黄州惠州儋州」——三度流放是自我评价 / 维琳长老对话 + 「西方不无但个里着力不得」禅宗深处',
      engagementHook: '65 岁临终——你回头看一辈子——你会写哪三个地方？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n11',
      type: 'synthesis',
      content: {
        cn: '关于我, 21 世纪两种说法。\n\n一种: 我是「完美中道智者」, 反对王安石新法 1071 + 反对司马光全废新法 1086, 两边都不容, 是 21 世纪「不极端化」榜样。\n\n另一种: 我不是完美。\n\n我 1086 年回朝时也参与过党争。我也写过文章讥讽司马光, 也卷入过元祐党人对新党的清算, 我自己写过攻击新党的文字。\n\n我不是「站在党争之外的圣人」。我是「跟党争 26 年的人, 但比同代多保留了一点距离」。\n\n这两件事同时成立。\n\n21 世纪你看我。\n\n如果只看「黄州写《赤壁赋》」「儋州写《东坡志林》」, 你会觉得我是脱离政治的天才文人。错。我从未脱离政治, 我每次流放都是党争结果。\n\n如果只看「我反对青苗法」, 你会觉得我是顶级反对派。错。1086 年我也参与了清算新党。\n\n真相在中间。\n\n「我犯过 26 年党争的错, 也站不出来超脱, 但我没完全失去良心。三度流放也没让我恨任何人。这就是我所能做的最多。」\n\n想 30 秒。\n\n这跟你 21 世纪「完美 paragon vs 完全堕落」二元化媒体叙事, 是一样的简化吗?',
        en: 'In the 21st-century academy, two views of me.\n\nOne: I am the "perfect middle-way sage." I opposed Wang Anshi\'s New Policies in 1071 and Sima Guang\'s wholesale repeal in 1086. Neither side accepted me. A 21st-century model of "the un-extremized."\n\nThe other: I am not perfect.\n\nIn 1086, when I was called back to court, I too participated in factional combat. I also wrote pieces mocking Sima Guang. I was caught up in the Yuanyou party\'s purge of the Reformers. I wrote pieces attacking the Reformers myself.\n\nI am not "the saint who stood outside factionalism." I am "the man who lived inside 26 years of factional war but kept one extra step of distance from it."\n\nBoth statements are true at the same time.\n\nIf you read me from the 21st century.\n\nLook only at "Red Cliff Rhapsody in Huangzhou" and "Dongpo Zhilin in Danzhou," and you will think I was a transcendent poet who had escaped politics. Wrong. I never escaped politics. Every exile was a factional outcome.\n\nLook only at "I opposed Green Sprouts," and you will think I was a heroic dissident. Wrong. In 1086 I too joined in the purge of the Reformers.\n\nThe truth is in the middle.\n\n"I lived 26 years of factional error. I could not stand outside it as a perfect saint. But I did not lose my conscience entirely. Three exiles never made me hate anyone. That is the most I could do."\n\nThink for 30 seconds.\n\nIs this the same simplification as your 21st-century "perfect paragon vs total fall" binary media narrative?',
      },
      deliverGoal: 'N11 synthesis 双 view (完美中道智者 vs 不完美参与者) — anti-binary 真相在中间 / hold 矛盾真相 30 秒 / AP DBQ 训练',
      engagementHook: '我卷了 26 年党争、自己也清算过新党，却没完全失去良心——既不是完美圣人、也不是纯粹党人——先在心里想想你怎么看，下一节我会正式问你。',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n12',
      type: 'synthesis',
      content: {
        cn: '我已死 900 多年。你 21 世纪某天跟我做完 lonely-mediator 这一段。\n\n横向看三个同类型的「内部良心调停者」:\n\n- Bartolomé de las Casas (1484-1566 Dominican 修士)。1502-1514 自己 13 年是 encomendero, 1514 Cuba 崩溃后 50 年反殖民, 但 1516 错建议非洲奴隶替代。「内部良心 + 一辈子修正错误」跟我「26 年党争错误」结构同。\n\n- Erasmus (1466-1536 荷兰人文主义者)。既反教会腐败, 又反 Luther 撕教会的方式, 两边都骂他。「中道孤独」16 世纪原型。\n\n- Ibn Battuta (1304-1369 Maliki 法学者)。1352 Mali 8 个月, 自己也参与 Islamic 奴隶买卖, 但 Rihla 写下「Mali 比任何国家安全」。「带偏见的诚实见证者」。\n\n四个我们: 中国 + Islamic + 西班牙 + 荷兰, 都是 lonely-mediator。\n\n21 世纪你, 能在身边找到一个 lonely-mediator 吗?\n\n不是英雄, 不是叛徒。是「卡在中间, 两边都不容, 但还在尝试」的那种人。\n\n那个人是谁?',
        en: 'I have been dead more than nine hundred years. On a day in the twenty-first century you have walked this lonely-mediator stretch with me.\n\nLook across to three more internal-conscience mediators:\n\n- Bartolomé de las Casas (1484-1566, Spanish Dominican friar). Was himself an encomendero for 13 years (1502-1514). Broke in Cuba 1514. Spent 50 years opposing colonial violence. But in 1516 made the wrong proposal of African slaves replacing Taíno. At 80 still begged God\'s forgiveness. "Internal conscience + a life of correcting errors," structurally the same as my "internal conscience + 26 years of factional error."\n\n- Erasmus (1466-1536, Dutch humanist). Opposed both Church corruption and Luther\'s tearing of the Church. Neither side kept him. The 16th-century prototype of "middle-way loneliness."\n\n- Ibn Battuta (1304-1369, Moroccan Maliki jurist). Eight months in Mali in 1352-1353. Himself participated in the 14th-century Islamic slave trade. Yet wrote in his Rihla that "Mali is safer than any country I have visited." "The honest witness who carried bias."\n\nFour of us: 11th-century China + 14th-century Islamic + 16th-century Spain + Netherlands. All lonely-mediators.\n\n21st-century you, after these four lenses: can you find a lonely-mediator near you?\n\nNot a hero, not a traitor. Someone "stuck in the middle, accepted by neither side, still trying."\n\nWho is that person?',
      },
      deliverGoal: 'N12 closing meta cross-civilization 4 lonely-mediators (Su Shi 11C + Ibn Battuta 14C + las Casas 16C + Erasmus 16C) / 不是英雄 不是叛徒 是中间人 / 21 世纪你身边找一个',
      engagementHook: '走完我这一生——卷在 26 年党争里两边都不容、自己也犯过错，却三度流放都没恨任何人。你会怎么评价这样一个又不完美、又没放弃良心的中道者？再想一步：你身边有没有这种「卡在中间，两边都不容，但还在尝试」的人，你会怎么对待 TA？',
      expectsRealAnswer: true,
    },
  ],
};

// 默认 export 兼容(给 staging 测试用)

// ─── Tang-Song China · Lens 3 · Li Qingzhao (staging) ──────────
//
// Topic: Tang-Song China (618-1279) · 唐宋盛世
// HSS-7.3 · AP-WHAP-1.2 · receiving-end / female-literacy-carrier lens
//
// Lens 3: Li Qingzhao 李清照 (1084-c.1155) — 真历史人物 (NOT 虚构合成)
//   - 中国第一女词人 / 「易安体」开创婉约派新境
//   - 1101 18 岁嫁赵明诚 21 岁 (太学生)
//   - 1107-1117 青州 10 年甜蜜 / 自号「易安居士」
//   - 1126-1129 战乱南运《金石录》15 车文物
//   - 1129.8.18 建康赵明诚 49 岁染疫卒 / 她 46 岁
//   - 1135 51 岁张汝舟骗婚 100 天 + 妻告夫坐牢 9 天 + 翰林学士綦崇礼营救
//   - 1135 后写《金石录后序》「然有有必有无, 有聚必有散, 乃理之常」
//   - 约 1155 71 岁死 / 终生守《金石录》遗志
//
// 真人 disclaimer: 跟 AoE Anacaona Jr (虚构) / Mali Aisha (虚构) NOT 同 — 李清照是真历史
//   人物, 史料密集 (《金石录后序》自传性 + 历代词论 + 地方志)
//   每一节的事实都有 12 世纪宋代史料锚定
//
// Cross-lens micro-detail (per Sarah audit §6.2 + 1126-1129 文物南运三视角):
//   - N4-N6: 1126-1129《金石录》15 车南运 — Topic 内三视角 mapping
//     · Huizong N6+N10 producer 维度 (国家收藏 + 1126 失去)
//     · Su Shi N7 interpreter 维度 (1097 海南诀别, 死前 4 年, 没活到 1126
//       但他书法在李清照夫妇收藏里 → 1126 失去)
//     · Li Qingzhao N4-N6 affected party (私人收藏 + 拼命南运 → 大部分丢失)
//     → 完美 mapping AP DBQ rubric (DBQ producer + interpreter + affected party)
//
//   - N12: 1135《金石录后序》— 5 Topic information preservation 五面体
//     · Mali al-Sa'di 1655 Tarikh es-Sudan + 沙漠藏书
//     · Renaissance 1440 古登堡印刷术
//     · Reformation 1517 95 Theses 14 天传遍德意志
//     · AoE 1493 哥伦布信 8 个月 7 种语言
//     · Tang-Song 李清照《金石录后序》— 私人收藏 + 序跋追忆
//     → 5 面体每一面都是同一个问题「信息怎么熬过暴力」
//
// 主 visual anchor (per Sarah audit §6.1):
//   - N4 青州 10 年自号「易安居士」+《金石录》2000 件金石碑帖
//     (跟 Mali Aisha 爷爷讲 Sundiata 7 岁拔猴面包树 / Renaissance 美第奇镶金小镜子 /
//      Reformation 95 Theses Wittenberg 门 / AoE Florentine Codex 黑曜石镜子
//      形成 5 Topic visual-anchor 五面体)
//
// 7thgrader careful framing:
//   - N7 赵明诚 1129.8.18 染疫死 — 不血腥但承认事实
//   - N9-N10 张汝舟欺骗 + 想夺《金石录》+ 妻告夫坐牢 — 12 世纪女性身份 careful framing
//     不写 graphic 家暴 / 用「他想拿走《金石录》/ 我听到他在外院翻箱子」
//   - N11 reflection 跟 21 世纪女性同代 careful: 「600 年困境同一种?」想 30 秒
//   - N12 终生守《金石录》遗志 — emotional anchor 顶级
//
// 风格规则 (per AUTHORING_PIPELINE 11 条 + AoE/Mali lessons learned):
//   - 不用 *italic* markdown — 词牌名 +《》 即可
//   - cultural ban + anti-fab (李清照 + 赵明诚 + 蔡京 + 金石录 + 靖康之变 +
//     张汝舟 + 綦崇礼 + 易安居士 + 如梦令 + 醉花阴 + 后序原文「然有有必有无」都真)
//   - em-dash 「——」 ≤ 3 per 段
//   - 第 11 条 quote nesting: outer JS '...', 内嵌 「」(CN) / "..."(EN)
//     严禁 «...»
//   - 每 node 350-550 CN chars 严控
//   - 数学一致 (1084 生 / 1099 15 岁 / 1101 18 岁嫁 / 1126 43 岁 / 1129 46 岁 /
//     1135 51 岁 / 1155 71 岁 — 全用虚岁 per 中国传统 + narrative §3.8)

// ═══════════════════════════════════════════════════
// LENS 3 storyboard: Li Qingzhao (12 nodes)
// ═══════════════════════════════════════════════════

var liQingzhaoStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK: 1099 春 山东济南, 15 岁李清照, 文学世家
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n1',
    type: 'narrative',
    phase: 'hook',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§3.8 line 537-558 李清照出身 + Sarah audit Lens 3 推荐',
    content: {
      cn:
        '我叫李清照——1084 年生于山东济南。\n\n' +
        '父亲李格非——苏门弟子、元祐党人、礼部员外郎。母亲王氏——状元王拱辰的孙女。家里 4 面墙到顶都是书:经史、唐人诗集、手抄本、碑帖拓片。\n\n' +
        '我从 5 岁起跟父亲读《诗经》《楚辞》。10 岁背完《论语》《孟子》。13 岁开始作词——父亲读了, 把笔放下, 看了我很久, 说:「这个孩子写词比我强。」\n\n' +
        '今天是 1099 年的春天。我 15 岁。\n\n' +
        '北宋立国 139 年——开国皇帝赵匡胤已经死 123 年。当今圣上是宋哲宗赵煦, 24 岁——再过一年他无嗣崩, 18 岁的端王赵佶继位, 就是日后的宋徽宗。\n\n' +
        '今天的我, 不知道接下来 56 年会发生什么——不知道 2 年后我会嫁太学生赵明诚; 不知道 27 年后金兵会攻陷开封; 不知道 30 年后我会在建康守着丈夫的灵柩; 不知道 51 岁那年我会因为告夫坐牢 9 天; 不知道我会用一生守一本叫《金石录》的书。\n\n' +
        '接下来 12 节——你跟我走 56 年。',
      en:
        'My name is Li Qingzhao. I was born in 1084, in Jinan, Shandong.\n\n' +
        'My father, Li Gefei, is a disciple of Su Shi, a member of the Yuanyou faction, and a vice-director in the Ministry of Rites. My mother, of the Wang clan, is granddaughter of the top-rank examination laureate Wang Gongchen. The walls of our house, all four to the ceiling, are books — classics and histories, Tang poetry, hand-copied manuscripts, rubbings of old steles.\n\n' +
        'From age five I read the Book of Songs and the Songs of Chu with my father. By ten I had memorized the Analects and the Mencius. At thirteen I began writing ci lyrics — my father read one, set down his brush, looked at me a long time, and said: "This child writes ci better than I do."\n\n' +
        'Today is the spring of 1099. I am fifteen.\n\n' +
        'The Northern Song has stood 139 years — its founder Emperor Taizu died 123 years ago. Today the throne is held by Emperor Zhezong, twenty-four. One year from now he will die without an heir, and the eighteen-year-old Prince Duan, Zhao Ji, will take the throne — the future Emperor Huizong.\n\n' +
        'Today, at fifteen, I do not know what the next fifty-six years will bring. I do not know that in two years I will marry a student of the Imperial Academy named Zhao Mingcheng. I do not know that in twenty-seven years Jin armies will breach Kaifeng. I do not know that in thirty years I will sit by my husband\'s coffin in Jiankang. I do not know that at fifty-one I will spend nine days in jail for accusing my own husband. I do not know that I will spend a lifetime guarding a book called the Records on Metal and Stone.\n\n' +
        'Over twelve sections — walk those fifty-six years with me.',
    },
    deliverGoal: {
      cn: '我叫李清照, 1084 山东济南生, 父李格非 (苏门弟子 + 元祐党人) 母王氏 (状元王拱辰孙女)。1099 春 15 岁——北宋 139 年, 哲宗 24 岁。13 岁开始作词, 父亲说「这孩子比我强」。',
      en: 'I am Li Qingzhao, born 1084 in Jinan, Shandong. My father Li Gefei was a disciple of Su Shi and a Yuanyou-faction official; my mother was the granddaughter of the laureate Wang Gongchen. Spring 1099, I am fifteen. At thirteen I began writing ci, and my father set down his brush.',
    },
    engagementHook: {
      cn: '15 岁我, 山东济南 1099 春。父亲苏门弟子, 母亲状元孙女。13 岁我作词, 父亲把笔放下。下一节: 我 15 岁的成名作——「应是绿肥红瘦」。',
      en: 'Fifteen, Jinan, spring 1099. Father a disciple of Su Shi, mother granddaughter of an examination laureate. At thirteen I wrote ci, and my father put down his brush. Next: my poem at fifteen — "Surely now the green grows fat and the red grows lean."',
    },
    expectedLength: '420-470 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: 1099 夏《如梦令·昨夜雨疏风骤》成名
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n2',
    type: 'narrative',
    phase: 'setup',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§3.8 + 词史 1099 早期作品成名',
    content: {
      cn:
        '1099 年夏天的一个清晨——我 15 岁。\n\n' +
        '前一夜下了大雨——风很急, 雨很疏。早上醒来, 院子里的海棠落了一地。我没起床, 倚在窗边, 喊侍女卷帘——\n\n' +
        '「侍女卷帘——海棠依旧?」\n\n' +
        '侍女说:「依旧。」\n\n' +
        '我笑了——但侍女不懂。我心里念出来:\n\n' +
        '「昨夜雨疏风骤, 浓睡不消残酒。试问卷帘人, 却道海棠依旧。知否, 知否? 应是绿肥红瘦。」\n\n' +
        '——「应是绿肥红瘦」。一夜大雨之后, 绿叶变得肥厚, 红花被打落。这 6 个字我自己写完都吓了一跳。\n\n' +
        '父亲拿到这首《如梦令》, 没说一句话, 抄了三份——一份送给苏门同党晁补之, 一份送给当时也写词的张耒, 一份压在自己书桌的镇纸下。\n\n' +
        '半年后开封文人圈传遍。晁补之 47 岁, 见了父亲第一句话:「李格非, 你女儿 15 岁——这首词放在李后主跟前都不输。」\n\n' +
        '我没去过开封。我在济南家里。我只知道——这首词写的不是海棠, 是我对「美会消失」这件事的第一次惊吓。',
      en:
        'A morning in the summer of 1099. I am fifteen.\n\n' +
        'A hard rain in the night, with thin gusts of wind. I wake to find begonias scattered across the courtyard. I do not get up. I lean on the window and call to the maid to roll up the curtain.\n\n' +
        '"Roll up the curtain — are the begonias still there?"\n\n' +
        'The maid says: "Still there."\n\n' +
        'I smile — but the maid does not understand. In my mind, the lines come:\n\n' +
        '"Last night, rain thin, wind sudden. Heavy sleep did not lift the wine. I asked the one rolling the curtain — she said the begonias are unchanged. Do you not know? Do you not know? Surely now the green grows fat and the red grows lean."\n\n' +
        '"Surely now the green grows fat and the red grows lean." After a night of rain, the leaves swell and the petals are gone. These six characters frightened me when I wrote them.\n\n' +
        'My father took the lyric — a piece in the Ru Meng Ling tune-pattern — said nothing, and copied it three times. One copy went to Chao Buzhi, a fellow member of the Su Shi circle. One copy went to Zhang Lei, another ci writer of the day. One copy was set under the paperweight on his own desk.\n\n' +
        'Six months later, the lyric was passing through every literary circle in Kaifeng. When Chao Buzhi, then forty-seven, met my father, the first words he said were: "Li Gefei — your daughter is fifteen. This lyric would not be shamed beside Li Yu."\n\n' +
        'I had never been to Kaifeng. I was at home in Jinan. I only knew this — the lyric was not really about begonias. It was the first time I felt frightened that beauty could end.',
    },
    deliverGoal: {
      cn: '1099 夏 15 岁我作《如梦令·昨夜雨疏风骤》——「应是绿肥红瘦」6 个字让父亲抄三份送晁补之、张耒。半年后开封文人圈传遍。晁补之 47 岁说「这首词放李后主跟前都不输」。',
      en: 'Summer 1099, fifteen, I wrote the Ru Meng Ling lyric "Last night, rain thin, wind sudden" — the six characters "Surely now the green grows fat and the red grows lean" made my father copy it three times. Six months later it had spread through Kaifeng. Chao Buzhi, forty-seven, said: "This would not be shamed beside Li Yu."',
    },
    engagementHook: {
      cn: '15 岁我写「应是绿肥红瘦」——父亲抄三份送出去。半年后开封文人圈传遍。我没去过开封, 我在济南家里。下一节: 1101 18 岁我嫁赵明诚 21 岁。',
      en: 'At fifteen I wrote "the green grows fat and the red grows lean." My father copied it three times and sent it out. Six months later it was in Kaifeng. I had never been to Kaifeng. Next: 1101, eighteen, I marry Zhao Mingcheng.',
    },
    expectedLength: '440-490 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — SETUP: 1101 18 岁嫁赵明诚 21 岁 太学生 一拍即合
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n3',
    type: 'narrative',
    phase: 'setup',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§3.8 line 543 1101 嫁赵明诚 + 共同金石',
    content: {
      cn:
        '1101 年——我 18 岁。\n\n' +
        '订婚的那个秋天我没见过他。新婚之夜——我第一次抬头看清——21 岁太学生赵明诚, 父亲是赵挺之 (后官至尚书右仆射, 1107 短暂拜相)。眉骨高、眼睛亮、说话慢。\n\n' +
        '婚后第三天, 赵明诚拿出他书桌底下的一摞东西给我看——拓片。3 寸 ×4 寸的小拓片, 30 多张。每一张是一段石碑铭文——汉碑、魏碑、唐碑, 字小、墨淡。\n\n' +
        '他说:「这些是我从太学旁边的旧书摊一年里收的。我想编一本书, 把宋代以前所有金石碑刻的铭文跟年代理一遍。我编不完——我想找一个能跟我一起编的人。」\n\n' +
        '他停一停:「我父亲说你 15 岁那首《如梦令》——他抄了。」\n\n' +
        '我笑——「我 15 岁, 你 18 岁, 我没见过你。你已经在收拓片?」\n\n' +
        '他点头。\n\n' +
        '——这是我跟赵明诚的开始。不是从《诗经》、不是从灯笼、不是从月亮——是从 30 多张拓片。一拍即合。\n\n' +
        '后来我们一起——从 18 岁到 46 岁——28 年——把那 30 多张拓片, 变成一本叫《金石录》的书。2000 件金石碑帖。30 卷。我跟他, 一笔一笔抄。',
      en:
        '1101 — I am eighteen.\n\n' +
        'The autumn I was betrothed I had not yet met him. On our wedding night I looked up for the first time and saw clearly — Zhao Mingcheng, twenty-one, a student at the Imperial Academy, son of Zhao Tingzhi (who would rise to Right Vice-Director of the Department of State Affairs, briefly grand councilor in 1107). Strong brow, bright eyes, slow speech.\n\n' +
        'Three days after the wedding, Zhao Mingcheng pulled a stack of small things out from under his desk and showed them to me. Rubbings — three by four inches, more than thirty of them. Each one a fragment of stele inscription — Han, Wei, Tang — the characters small, the ink pale.\n\n' +
        'He said: "I gathered these from the old book stalls near the Imperial Academy over the past year. I want to compile a book — every metal-and-stone inscription from before our dynasty, with its date, all set in order. I cannot finish it alone. I want someone who will work on it with me."\n\n' +
        'He paused. "My father said your Ru Meng Ling, the one you wrote at fifteen — he copied it."\n\n' +
        'I laughed. "I was fifteen, you were eighteen, I had never seen you. And already you were collecting rubbings?"\n\n' +
        'He nodded.\n\n' +
        'This is how Zhao Mingcheng and I began. Not with the Book of Songs, not with lanterns, not with the moon — with thirty-some rubbings. We knew at once.\n\n' +
        'And then — from my eighteenth year to my forty-sixth — twenty-eight years — together we turned those thirty rubbings into a book called Records on Metal and Stone. Two thousand inscriptions. Thirty volumes. He and I, one stroke at a time, copied them.',
    },
    deliverGoal: {
      cn: '1101 18 岁我嫁赵明诚 21 岁太学生 (父赵挺之, 后官至尚书右仆射, 1107 短暂拜相)。婚后第三天他拿出 30 多张拓片说「我想编一本《金石录》」。我们 28 年一笔一笔抄成 2000 件金石碑帖、30 卷。',
      en: 'In 1101, eighteen, I marry Zhao Mingcheng, twenty-one, a student of the Imperial Academy whose father Zhao Tingzhi would rise to Right Vice-Director of the Department of State Affairs, briefly grand councilor in 1107. Three days after the wedding he shows me thirty rubbings and says: "I want to compile a book called Records on Metal and Stone." Over twenty-eight years we copied two thousand inscriptions in thirty volumes, one stroke at a time.',
    },
    engagementHook: {
      cn: '婚后第三天他拿出 30 多张拓片。我们的开始不是月亮, 是拓片。28 年我们抄成 2000 件 30 卷《金石录》。下一节: 1107-1117 青州 10 年——「易安居士」。',
      en: 'Three days after the wedding he showed me thirty rubbings. We did not begin with the moon — we began with rubbings. Over twenty-eight years we made two thousand inscriptions in thirty volumes, the Records on Metal and Stone. Next: 1107-1117, ten years in Qingzhou, the studio name "Yi-an Resident."',
    },
    expectedLength: '450-500 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — STORY: 1107-1117 青州 10 年甜蜜 ⭐ 主 visual anchor + cross-lens info preservation foundation
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n4',
    type: 'narrative',
    phase: 'story',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§3.8 line 544-547 + Sarah audit §6.1 主 anchor',
    content: {
      cn:
        '1107 年——赵明诚的父亲赵挺之死。蔡京迫害赵家——赵明诚被罢官。我们离开开封, 回山东青州 (今潍坊青州) 老家。我 23 岁, 他 26 岁。\n\n' +
        '青州 10 年。\n\n' +
        '我自号「易安居士」——「易安」二字出自陶渊明《归去来兮辞》「审容膝之易安」。一间能伸开膝盖的小屋——就够安。\n\n' +
        '青州的院子——3 间正房, 1 间书房叫「归来堂」。书房 4 面墙——书架到顶。东边架是经史, 南边架是唐宋诗集, 西边架是金石拓片, 北边架是赵明诚一笔一笔写的《金石录》草稿。\n\n' +
        '每个晚饭后——我们 2 个人坐在归来堂, 煮一壶茶。我说:「考你, 某年某月某日, 某事见某书第几卷第几页。」赵明诚答, 答对赢一杯, 答错就笑——笑到茶水洒了。\n\n' +
        '10 年里, 我们攒了 2000 件金石碑帖、几万卷书、几百件古铜器、一屋字画。其中有苏轼的字——苏轼 1101 年 7 月在常州死, 死前 4 年的 1097 年还在海南儋州。我跟赵明诚 1107 年回青州时, 苏轼刚死 6 年——他的字在我们书架最显眼的位置。\n\n' +
        '——10 年甜蜜恬淡。我以为这是我们一辈子。\n\n' +
        '我不知道——再过 9 年, 这一屋的东西要装上 15 辆车——大部分会丢。',
      en:
        '1107 — Zhao Mingcheng\'s father Zhao Tingzhi died. Cai Jing turned on the Zhao clan, and Zhao Mingcheng was dismissed from office. We left Kaifeng and went home to Qingzhou in Shandong (today\'s Qingzhou, Weifang). I was twenty-three. He was twenty-six.\n\n' +
        'Ten years in Qingzhou.\n\n' +
        'I took the studio name Yi-an Jushi — Resident of Yi-an. The two characters yi-an come from Tao Yuanming\'s Return to the Fields: "to find ease in a room the width of a knee." A small room — wide enough to stretch one\'s knees — is ease enough.\n\n' +
        'Our courtyard in Qingzhou — three rooms in front, and one study we called Guilai Tang, the Hall of Coming Home. Four walls of bookshelves, every shelf to the ceiling. East wall, classics and histories. South wall, Tang and Song poetry. West wall, the metal-and-stone rubbings. North wall, the draft pages of the Records on Metal and Stone, in Zhao Mingcheng\'s hand.\n\n' +
        'After every dinner, the two of us sat in the Hall of Coming Home and made a pot of tea. I would say: "Test — what year, what month, what day, in what volume of what book, on what page?" Zhao Mingcheng would answer. If he was right he won a cup. If he was wrong we laughed — laughed until the tea spilled.\n\n' +
        'In ten years we gathered two thousand metal-and-stone inscriptions, tens of thousands of volumes of books, several hundred bronze antiquities, a roomful of calligraphy and painting. Among them was the calligraphy of Su Shi himself — Su Shi died in Changzhou in July of 1101; four years before that, in 1097, he had been exiled to Hainan. When Zhao Mingcheng and I returned to Qingzhou in 1107, Su Shi had been dead only six years — and his calligraphy hung in the most visible place on our shelves.\n\n' +
        'Ten quiet sweet years. I thought it was our whole life.\n\n' +
        'I did not know — in nine more years, this whole room would be loaded onto fifteen carts. Most of it would be lost.',
    },
    deliverGoal: {
      cn: '1107 蔡京迫害, 我们回青州 10 年。自号「易安居士」(出自陶渊明)。书房「归来堂」4 墙到顶。每晚煮茶赌某事在某书第几卷第几页。10 年攒 2000 件金石 + 几万卷书 + 几百件古铜 + 苏轼字 (1101 死, 6 年前)。我以为是一辈子。',
      en: 'In 1107 Cai Jing turned on the Zhao clan and we returned to Qingzhou for ten years. I took the name Yi-an Jushi, from Tao Yuanming. The study Guilai Tang held four walls of books to the ceiling. Every evening we boiled tea and wagered on which page of which book. In ten years we gathered two thousand inscriptions, tens of thousands of books, hundreds of bronzes, and Su Shi\'s own calligraphy (he had died in 1101, six years before). I thought it was our whole life.',
    },
    engagementHook: {
      cn: '青州 10 年。「归来堂」4 墙到顶。煮茶赌书。2000 件金石 + 苏轼字。我以为是一辈子。下一节: 1126 闰 11 月——开封陷, 我 43 岁。',
      en: 'Ten years in Qingzhou. The Hall of Coming Home, four walls to the ceiling. Tea and book-wagers. Two thousand inscriptions and Su Shi\'s own calligraphy. I thought it was our whole life. Next: leap eleventh month, 1126 — Kaifeng falls. I am forty-three.',
    },
    expectedLength: '480-540 字 CN ⭐ 主 visual anchor',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — STORY: 1126 闰 11.25 开封陷 / 1127.1.9 北宋亡 / 选 15 车文物南运
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n5',
    type: 'narrative',
    phase: 'story',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§3.8 line 546-547 1126-1127 + §0 line 27 靖康之变',
    content: {
      cn:
        '1126 年闰 11 月 25 日——金兵攻陷开封外城。1127 年 1 月 9 日金军入开封。1127 年 4 月——徽宗、钦宗父子加宗室、后妃、工匠 3000 人被俘北迁。北宋实质亡。\n\n' +
        '消息传到青州——已经是 1127 年正月。我 43 岁, 赵明诚 46 岁。\n\n' +
        '赵明诚此时已经在山东淄州做知州——他在任上接到母亲的丧讯, 要奔江南治丧。\n\n' +
        '他从淄州赶回青州——站在归来堂中间。我也站着。\n\n' +
        '我说:「装多少?」\n\n' +
        '他说:「能装多少装多少。」\n\n' +
        '我们看着 4 面墙。20 年的东西。\n\n' +
        '挑选——这两个字我永远忘不了。「这件留, 这件丢。」「这卷带, 那卷不带。」我们挑了 3 天 3 夜。最后装了 15 车。\n\n' +
        '——15 车里, 我们留下:《金石录》全部草稿 + 2000 件金石碑帖中最重要的一部分 + 苏轼字 + 几千卷善本书。\n\n' +
        '——15 车装不下的, 留在青州归来堂——其他几万卷书、几百件古铜器、字画——我们锁了门, 走。\n\n' +
        '后来我才知道——1127 年冬, 金兵南下到青州, 归来堂失火。锁着的那一屋——全部毁。\n\n' +
        '20 年的家——我跟赵明诚 3 天 3 夜挑出来的 15 车——是我们能带走的全部。',
      en:
        'Leap eleventh month, twenty-fifth day, 1126 — Jin armies took the outer wall of Kaifeng. On the ninth day of the first month, 1127, the Jin entered the city. In the fourth month of 1127 — Emperor Huizong, Emperor Qinzong, the imperial family, consorts, and craftsmen, three thousand people, were marched north as captives. The Northern Song was, in substance, over.\n\n' +
        'The news reached Qingzhou in the first month of 1127. I was forty-three. Zhao Mingcheng was forty-six.\n\n' +
        'Zhao Mingcheng was already serving as prefect of Zizhou in Shandong. He had just received word that his mother had died, and he had to travel south to mourn.\n\n' +
        'He came back from Zizhou to Qingzhou. He stood in the middle of the Hall of Coming Home. I stood there too.\n\n' +
        'I said: "How many carts?"\n\n' +
        'He said: "As many as we can fill."\n\n' +
        'We looked at four walls. Twenty years of things.\n\n' +
        'Choosing. I will never forget the word. "This piece — keep. This piece — leave." "This scroll — take. That scroll — leave." We chose for three days and three nights. In the end we filled fifteen carts.\n\n' +
        'In those fifteen carts we kept the full drafts of the Records on Metal and Stone, the most important of the two thousand inscriptions, Su Shi\'s calligraphy, and several thousand of the rarest books.\n\n' +
        'What the fifteen carts could not hold — the tens of thousands of other books, hundreds of bronzes, the painting and calligraphy — we left in the Hall of Coming Home. We locked the door and walked away.\n\n' +
        'Only later did I learn — in the winter of 1127, when Jin armies pushed south as far as Qingzhou, the Hall of Coming Home caught fire. The locked room — everything in it was destroyed.\n\n' +
        'A home of twenty years. The fifteen carts that Zhao Mingcheng and I chose in three days and three nights — were everything we could bring with us.',
    },
    deliverGoal: {
      cn: '1126 闰 11.25 开封陷 / 1127.1.9 北宋亡, 3000 人北上。消息正月到青州——我 43 岁, 赵明诚 46 岁。3 天 3 夜挑 15 车——《金石录》草稿 + 2000 件最重要的部分 + 苏轼字 + 几千卷善本。1127 冬归来堂失火——锁着的一屋全毁。',
      en: 'Leap 11th month, 25th day, 1126, Kaifeng fell. 1127 first month, ninth day, the Northern Song ended; three thousand were marched north. The news reached Qingzhou in the first month of 1127. I was forty-three, Zhao Mingcheng forty-six. We chose for three days and three nights and filled fifteen carts — the Records on Metal and Stone drafts, the most vital of the two thousand inscriptions, Su Shi\'s calligraphy, and several thousand rare books. In the winter of 1127 the Hall of Coming Home burned, and the locked room with it.',
    },
    engagementHook: {
      cn: '3 天 3 夜——我跟赵明诚选出 15 车。剩下的, 锁门, 走。1127 冬, 归来堂失火——全毁。下一节: 15 车文物 1127-1129 南运的具体路线。',
      en: 'Three days and three nights — Zhao Mingcheng and I chose fifteen carts. The rest we locked in and walked away. Winter 1127 — the Hall of Coming Home burned. Next: where the fifteen carts went, 1127-1129.',
    },
    expectedLength: '480-540 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — STORY: 1127-1129 文物南运 ⭐ cross-lens micro-detail
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n6',
    type: 'narrative',
    phase: 'story',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§0 line 44 1126-1129 南运 + §3.8 line 547-549 + Sarah audit §6.2',
    content: {
      cn:
        '15 车文物 1127-1129 的南运路线——\n\n' +
        '1127 年春——青州出发。一路过淮河, 进江南。每到一个驿站换车——15 辆变 12 辆变 9 辆。船上、马车上、客栈里——都丢东西。兵匪、火灾、船难。\n\n' +
        '1127 年秋——抵镇江。这时候只剩不到原来一半。\n\n' +
        '1127 年冬——抵建康 (今南京)。我们在城里赁屋——青衣巷一个小院。剩下的文物搬进去, 堆满 3 间屋。\n\n' +
        '1128 年春——我又一个人回了一趟青州, 想抢救留在归来堂的东西——已经晚了。失火的灰烬里我捡了几本残卷, 哭着回建康。这趟以后, 文物已经不到原来的 1/4。\n\n' +
        '1129 年, 南宋朝廷流亡——高宗赵构 22 岁的小朝廷在江南各地辗转。5 月, 朝廷御营内护, 文物在动荡中又丢了一批。每丢一批, 我跟赵明诚就清点一次——剩下的, 越来越少。\n\n' +
        '——这是 1127-1129 年我们做的事。\n\n' +
        '后来我在《金石录后序》里写——「然有有必有无, 有聚必有散」——「拥有」必然变「失去」, 「聚集」必然变「散」。这是道理。\n\n' +
        '但是写「道理」的那一天——我已经守了 6 年的灰。',
      en:
        'The route the fifteen carts took, 1127-1129.\n\n' +
        'Spring 1127 — leaving Qingzhou. South across the Huai River, into the Yangtze country. At every post-station the carts were swapped — fifteen, then twelve, then nine. On boats, on carts, in inns — things kept disappearing. Bandits, fires, shipwrecks.\n\n' +
        'Autumn 1127 — we reached Zhenjiang. By then less than half remained.\n\n' +
        'Winter 1127 — we reached Jiankang (today\'s Nanjing). We rented a small courtyard in Qingyi Lane. What was left of the collection was carried in and filled three rooms.\n\n' +
        'Spring 1128 — I went back to Qingzhou alone, hoping to rescue what was left in the Hall of Coming Home. I was already too late. From the ash of the fire I picked out a few damaged scrolls and wept all the way back to Jiankang. After that trip — less than a quarter of what we had remained.\n\n' +
        '1129 — the Southern Song court was on the run. The twenty-two-year-old Emperor Gaozong, Zhao Gou, moved his court from town to town in the south. In the fifth month, when the court took the imperial guard south, more of the collection was lost in the chaos. Each time we lost more, Zhao Mingcheng and I counted again — what was left grew thinner.\n\n' +
        'This is what we did, 1127-1129.\n\n' +
        'Years later, in the postface to the Records on Metal and Stone, I would write: "Where there is having, there must be losing; where there is gathering, there must be scattering." Having must become losing. Gathering must become scattering. This is the way of things.\n\n' +
        'But the day I wrote those words — I had already been keeping watch over the ash for six years.',
    },
    deliverGoal: {
      cn: '15 车南运路线: 1127 春青州出发→秋镇江 (剩不到一半)→冬建康赁屋青衣巷→1128 春我一人回青州抢救 (太晚)→剩不到 1/4。1129 御营内护又丢一批。每丢一批我跟赵明诚清点一次, 越来越少。「然有有必有无」是道理——但写「道理」那天, 我已经守了 6 年灰。',
      en: 'The fifteen-cart route: spring 1127, Qingzhou departure; autumn 1127, Zhenjiang (less than half left); winter 1127, Jiankang, a small rented courtyard in Qingyi Lane; spring 1128, I went back to Qingzhou alone, too late; less than a quarter left. In 1129, when the court moved the guard, more was lost. We counted each time. "Where there is having, there must be losing" — but the day I wrote those words, I had been keeping watch over the ash for six years.',
    },
    engagementHook: {
      cn: '15 → 12 → 9 → 不到 1/4。每丢一批, 清点一次。下一节: 1129 年 8 月 18 日, 建康, 赵明诚 49 岁。',
      en: 'Fifteen carts, then twelve, then nine, then less than a quarter. Each loss counted. Next: the eighteenth day of the eighth month, 1129, Jiankang. Zhao Mingcheng, forty-nine.',
    },
    expectedLength: '480-540 字 CN ⭐ cross-lens micro-detail',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — STORY: 1129.8.18 建康赵明诚 49 岁卒 ⭐ Sarah audit lens hook scene
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n7',
    type: 'narrative',
    phase: 'story',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§3.8 line 548 1129.8 建康染疫 + Sarah audit Lens 3 hook',
    content: {
      cn:
        '1129 年——5 月, 朝廷下诏, 任命赵明诚为湖州知州。8 月初, 赵明诚奉诏从建康赴湖州上任。\n\n' +
        '我在建康青衣巷的小院送他。\n\n' +
        '他骑马走的——临走前回头跟我说:「外面动荡, 你守好《金石录》草稿。如果听说前面不安全, 就先把书埋了。」\n\n' +
        '我点头。\n\n' +
        '——这是我跟他说的最后一句话。\n\n' +
        '他在湖州赴任途中染疫——8 月急病, 8 月 18 日死在建康。49 岁。我 46 岁。\n\n' +
        '我赶过去时——他已经走了一天。我守灵, 3 天没合眼。整理他的遗稿——《金石录》30 卷草稿全在, 上面有他最后一年添的批注。我坐在桌前, 读他的字, 一笔一笔, 都还热。\n\n' +
        '——他走后第 7 天, 我把 30 卷草稿用油布裹了 3 层, 装进樟木箱——这是我接下来 26 年要守的东西。\n\n' +
        '我 46 岁。我没有孩子。父亲已死。母亲已死。婆家因蔡京之变早已散。我是建康青衣巷里, 一个守着 26 年婚姻 + 一本未完成的书 + 一屋残卷的寡妇。\n\n' +
        '——「我守好《金石录》草稿」——这是我对他答应的最后一件事。',
      en:
        '1129 — in the fifth month, the court issued an edict appointing Zhao Mingcheng prefect of Huzhou. In the early eighth month, Zhao Mingcheng left Jiankang for Huzhou to take up the post.\n\n' +
        'I saw him off from the small courtyard in Qingyi Lane.\n\n' +
        'He rode away — turning back at the gate to say: "The country is in upheaval. Keep the Records on Metal and Stone drafts safe. If you hear the road ahead is unsafe, bury the books first."\n\n' +
        'I nodded.\n\n' +
        'These were the last words I said to him.\n\n' +
        'On the road to Huzhou he caught the plague. In the eighth month he fell suddenly ill, and on the eighteenth day of the eighth month he died at Jiankang. Forty-nine. I was forty-six.\n\n' +
        'When I reached him, he had been gone a day. I sat by his coffin three days without sleeping. I went through his papers — the thirty volumes of the Records on Metal and Stone drafts were all there, with notes he had added in the past year along the margins. I sat at the desk and read his hand — one stroke at a time, all of them still warm.\n\n' +
        'On the seventh day after he was gone, I wrapped the thirty volumes of drafts in three layers of oilcloth and packed them into a camphor-wood chest. This is what I would keep watch over for the next twenty-six years.\n\n' +
        'I was forty-six. I had no child. My father was dead. My mother was dead. My husband\'s family had been scattered years before in Cai Jing\'s purge. I was the widow in Qingyi Lane in Jiankang — twenty-six years of marriage, one unfinished book, one room of damaged scrolls.\n\n' +
        '"I will keep the Records on Metal and Stone drafts safe." This was the last thing I had promised him.',
    },
    deliverGoal: {
      cn: '1129.5 朝廷任赵明诚湖州知州。8 初赴任前对我说「守好《金石录》草稿, 不安全就埋」——这是最后一句话。8 月路上染疫, 8.18 死建康, 49 岁。我 46 岁。守灵 3 天, 整理 30 卷草稿——他最后一年添的批注。第 7 天我用 3 层油布裹好装樟木箱——接下来 26 年要守的。',
      en: '1129, fifth month, the court named Zhao Mingcheng prefect of Huzhou. Early eighth month, before leaving, he said: "Keep the Records on Metal and Stone drafts safe — if it is unsafe, bury them first." These were his last words to me. He caught the plague on the road. On the eighteenth day of the eighth month he died at Jiankang, forty-nine. I was forty-six. I sat three days by his coffin and went through his papers — the thirty volumes were all there, with marginal notes from his last year. On the seventh day, I wrapped them in three layers of oilcloth and packed them into a camphor-wood chest. This is what I would watch for the next twenty-six years.',
    },
    engagementHook: {
      cn: '8.18 赵明诚死建康, 49 岁。最后一句话是「守好草稿」。我 46 岁, 樟木箱里 30 卷——接下来 26 年要守。下一节: 1129-1132 颠沛 4 城。',
      en: 'Eighth month, eighteenth day. Zhao Mingcheng dead at Jiankang, forty-nine. His last words: "Keep the drafts safe." I am forty-six. Thirty volumes in a camphor-wood chest — what I will watch for twenty-six years. Next: 1129-1132, four cities running.',
    },
    expectedLength: '480-540 字 CN ⭐ Sarah audit lens hook scene',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — STORY: 1129-1132 颠沛 越州 / 台州 / 温州 / 1132 临安
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n8',
    type: 'narrative',
    phase: 'story',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§3.8 line 549 1129-1132 + 南宋初年颠沛',
    content: {
      cn:
        '1129 年 9 月——赵明诚刚下葬, 金兵从淮南推进到江南。高宗的小朝廷再次南奔——百姓跟着流亡。\n\n' +
        '我抱着樟木箱——箱子里 30 卷草稿——开始 3 年逃亡。\n\n' +
        '1129 年冬——越州 (今绍兴)。我寄住在远房表兄家, 半年。表兄家有一个夜里来翻箱子的人——我半夜起来察觉, 把樟木箱抱进自己床里, 抱着睡到天亮。第二天我就走。\n\n' +
        '1130 年——台州 (今临海)。我又遇盗——一夜之间金石碑帖丢了 50 多件。我在客栈里跪在地上找——找到天亮, 没找回。\n\n' +
        '1131 年——温州。我把樟木箱托一户读书人家寄存——拿回来时少了 5 卷草稿。我没说话——5 卷在那家人家里。我没办法。\n\n' +
        '1132 年春, 抵临安 (今杭州)——南宋朝廷此时正在临安建都。我 49 岁, 租了清波门一间小屋。樟木箱搬进去, 清点——从 30 卷剩 25 卷。还有几百件金石, 从 2000 件剩不到 200 件。\n\n' +
        '——3 年里, 我一个 46-49 岁的寡妇, 抱着樟木箱跑了 4 座城。每一座城都留下东西。每一座城我都跪过、求过、哭过。\n\n' +
        '——临安清波门的小屋——是我后来 23 年的家。',
      en:
        'In the ninth month of 1129 — Zhao Mingcheng had just been buried — the Jin armies pushed from the Huai River into the Yangtze country. The young Emperor Gaozong\'s court ran south again, and the people ran with it.\n\n' +
        'I held the camphor-wood chest — thirty volumes of drafts inside — and began three years of running.\n\n' +
        'Winter 1129 — Yuezhou (today\'s Shaoxing). I lodged with a distant cousin\'s household for half a year. There was someone in that house who came at night to open chests. I woke in the middle of the night, sensed it, took the camphor chest into my bed, and held it until dawn. The next day I left.\n\n' +
        '1130 — Taizhou (today\'s Linhai). I was robbed again. In one night more than fifty inscriptions disappeared. I knelt in the inn-room searching for them until daylight. I did not find them.\n\n' +
        '1131 — Wenzhou. I left the camphor chest with a scholar\'s family for safekeeping. When I came back, five volumes of drafts were gone. I said nothing. The five volumes were inside that household. I had no way to retrieve them.\n\n' +
        'Spring 1132 — I reached Lin\'an (today\'s Hangzhou); the Southern Song court was establishing its capital there. I was forty-nine. I rented a small house at Qingbo Gate. I carried the camphor chest in. I counted again — of thirty volumes, twenty-five remained. Of the bronzes and inscriptions — fewer than two hundred of the original two thousand.\n\n' +
        'In three years, a widow between forty-six and forty-nine, I carried a camphor chest through four cities. Every city took something from me. In every city I had knelt, begged, wept.\n\n' +
        'The small house at Qingbo Gate in Lin\'an — was the home I would have for the next twenty-three years.',
    },
    deliverGoal: {
      cn: '1129.9-1132 春 4 城逃亡: 越州 (夜里有人翻箱子, 我抱箱睡到天亮) → 台州 (一夜丢 50 件) → 温州 (寄存读书人家, 拿回来少 5 卷) → 1132 春临安清波门小屋, 49 岁。30 卷剩 25 卷, 2000 件剩不到 200。每城跪过、求过、哭过。',
      en: 'Ninth month 1129 to spring 1132, four cities of flight: Yuezhou (someone came at night to open chests; I held the chest in bed until dawn); Taizhou (one night, fifty inscriptions gone); Wenzhou (left with a scholar family; five volumes missing on return); spring 1132, Lin\'an, a small house at Qingbo Gate, forty-nine. Thirty volumes down to twenty-five. Two thousand inscriptions down to fewer than two hundred. In every city I had knelt, begged, wept.',
    },
    engagementHook: {
      cn: '3 年 4 城——越州抱箱睡 / 台州一夜丢 50 件 / 温州少 5 卷 / 临安清波门小屋。25 卷 + 200 件——是我接下来要守的。下一节: 1135 春——一个叫张汝舟的人。',
      en: 'Three years, four cities — Yuezhou holding the chest in bed; Taizhou losing fifty in a night; Wenzhou losing five volumes; Lin\'an, a small house at Qingbo Gate. Twenty-five volumes and two hundred inscriptions — what I have left to watch. Next: spring 1135 — a man named Zhang Ruzhou.',
    },
    expectedLength: '470-520 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — STORY: 1135 春 张汝舟骗婚 100 天 + 想夺《金石录》
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n9',
    type: 'narrative',
    phase: 'story',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§3.8 line 550 1135 50/51 岁张汝舟 + 100 天',
    content: {
      cn:
        '1135 年春——我 51 岁。临安清波门住了 3 年。\n\n' +
        '我寡居 6 年——一个人, 没孩子, 没父母, 没婆家。手里 25 卷《金石录》草稿、不到 200 件金石。\n\n' +
        '一个叫张汝舟的人来求婚。他自称右承奉郎, 看上去 40 岁, 礼貌、读过书、说话温和。他对我说:「我景仰赵明诚——也景仰《金石录》——我愿意帮你完成它。」\n\n' +
        '——我犹豫了。51 岁, 寡妇, 一个人。\n\n' +
        '——我想:也许有一个人能帮我把这本书做完。\n\n' +
        '我答应了。\n\n' +
        '婚后第一天——他要看《金石录》草稿。我让他看。\n\n' +
        '——第二天, 我听到他在外院翻樟木箱。我没说话。\n\n' +
        '——第三天, 他对我用了重话。\n\n' +
        '——一个月——他不再装。他骂我「老寡妇」, 嫌我没生孩子, 嫌我守着「一堆破纸」, 几次想拿走樟木箱卖。\n\n' +
        '我开始打听他的来历。临安一个老书商认得他——告诉我:他不是右承奉郎, 他是用伪造文书冒名入仕的——而且科举舞弊有几次。\n\n' +
        '他不是来娶我。他是来夺《金石录》。\n\n' +
        '——100 天。100 天我看清了。\n\n' +
        '我去了临安府的官署。',
      en:
        'Spring 1135 — I was fifty-one. I had been at Qingbo Gate in Lin\'an three years.\n\n' +
        'Six years a widow — alone, no child, no parents, no husband\'s family. Twenty-five volumes of Records on Metal and Stone drafts, fewer than two hundred inscriptions.\n\n' +
        'A man named Zhang Ruzhou came to ask for my hand. He gave his rank as Right Receiving-Honor Gentleman, looked about forty, polite, educated, soft-spoken. He said to me: "I revere Zhao Mingcheng. I revere the Records on Metal and Stone. I am willing to help you finish it."\n\n' +
        'I hesitated. Fifty-one, a widow, alone.\n\n' +
        'I thought — perhaps there is someone who can help me finish the book.\n\n' +
        'I agreed.\n\n' +
        'On the first day after the wedding, he asked to see the drafts. I let him see.\n\n' +
        'On the second day, I heard him in the outer courtyard going through the camphor chest. I said nothing.\n\n' +
        'On the third day he used hard words to me.\n\n' +
        'Within a month, he stopped pretending. He called me an "old widow," sneered that I had borne no child, sneered that I was guarding "a pile of waste paper," and tried several times to carry the camphor chest out to sell.\n\n' +
        'I began to ask about his history. An old bookseller in Lin\'an knew him — and told me: he was not a Right Receiving-Honor Gentleman; he had entered office under a forged document, and he had cheated in the examinations more than once.\n\n' +
        'He had not come to marry me. He had come to take the Records on Metal and Stone.\n\n' +
        'A hundred days. In a hundred days I saw it.\n\n' +
        'I went to the Lin\'an prefectural office.',
    },
    deliverGoal: {
      cn: '1135 春 51 岁我寡居 6 年。张汝舟自称右承奉郎来求婚说「景仰《金石录》愿帮你完成」——我犹豫但答应了。婚后第 2 天他翻樟木箱, 第 3 天用重话, 1 月骂「老寡妇」想拿樟木箱卖。临安老书商告诉我他是伪造文书冒名入仕 + 科举舞弊。100 天看清——他来夺书。',
      en: 'Spring 1135, fifty-one, six years a widow. A man named Zhang Ruzhou, self-styled Right Receiving-Honor Gentleman, came to ask for my hand, saying: "I revere the Records on Metal and Stone — I will help you finish it." I hesitated but agreed. The second day after the wedding he opened the camphor chest. On the third he used hard words. Within a month he was calling me an "old widow," trying to carry the chest out to sell. An old bookseller in Lin\'an told me: he had entered office through forged papers and had cheated in the examinations. A hundred days. He had come for the book.',
    },
    engagementHook: {
      cn: '100 天我看清——他来夺《金石录》。我去了临安府官署。下一节: 妻告夫——按宋律即使胜诉也要坐牢。',
      en: 'A hundred days. He had come for the Records on Metal and Stone. I went to the Lin\'an prefectural office. Next: a wife accusing her husband — by Song law, even a winning verdict meant prison.',
    },
    expectedLength: '450-510 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — STORY: 1135 夏 妻告夫 9 天牢 綦崇礼营救
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n10',
    type: 'narrative',
    phase: 'story',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§3.8 line 550 + 1735 line 寡妇离婚要坐牢, 她坐 9 天',
    content: {
      cn:
        '1135 年夏——我去了临安府。\n\n' +
        '我递了状子——告张汝舟「妄增举数入官」(伪造科举次数冒名入仕) 加「私夺财物」(想夺《金石录》)。\n\n' +
        '宋律有一条——「妻告夫, 即使胜诉, 妻坐牢两年」。\n\n' +
        '这条法律的意思是——为了维护夫为妻纲, 妻子告丈夫这件事本身就是罪。即使丈夫真的犯法, 妻子告了, 妻子也要坐牢。\n\n' +
        '我知道。我还是告了。\n\n' +
        '判决:张汝舟伪造文书冒名入仕罪成立——撤职, 流配柳州。我跟张汝舟离婚。\n\n' +
        '同一天——我入临安府监狱。\n\n' +
        '牢房——一间小石屋。我坐在草席上 9 天。我 51 岁, 守了 6 年寡, 又坐了 9 天牢。\n\n' +
        '第 9 天——翰林学士綦崇礼营救。他是赵明诚的姨表亲, 也是赵明诚生前的朝廷文友。他面圣, 直说:「李清照守的是亡夫赵明诚未完成的《金石录》草稿——案中并无私利, 是文友交托之事。」\n\n' +
        '高宗下诏——赦李清照出狱。\n\n' +
        '我出狱的那天——回清波门小屋——樟木箱还在。25 卷《金石录》草稿——还在。\n\n' +
        '——我用 9 天牢, 换了《金石录》。',
      en:
        'Summer 1135 — I went to the Lin\'an prefectural office.\n\n' +
        'I filed an accusation against Zhang Ruzhou: forgery of examination credentials and unlawful entry into office, and seizure of private property — he had been trying to take the Records on Metal and Stone.\n\n' +
        'Song law had a clause: "If a wife accuses her husband, even when the verdict is in her favor, the wife shall serve two years in prison."\n\n' +
        'The meaning of that law was — to uphold the husband\'s authority over the wife, a wife\'s accusation of her husband was itself a crime. Even when the husband had truly broken the law, even when she won the case, she was still to be jailed.\n\n' +
        'I knew. I filed anyway.\n\n' +
        'The verdict: Zhang Ruzhou was guilty of forging examination records and unlawful entry into office. He was stripped of his post and exiled to Liuzhou. Zhang Ruzhou and I were divorced.\n\n' +
        'On the same day, I was admitted to the Lin\'an prefectural jail.\n\n' +
        'The cell was a small stone room. I sat on a straw mat nine days. I was fifty-one, six years a widow, now nine days in jail.\n\n' +
        'On the ninth day — Hanlin Academician Qi Chongli intervened. He was Zhao Mingcheng\'s cousin on the maternal side and a literary colleague of his at court. He went to the emperor and said: "What Li Qingzhao has been guarding is the unfinished draft of the Records on Metal and Stone left by her late husband Zhao Mingcheng. There is no private gain at issue here, only what was entrusted between literary colleagues."\n\n' +
        'Emperor Gaozong issued an edict pardoning Li Qingzhao.\n\n' +
        'The day I left jail, I went home to the small house at Qingbo Gate. The camphor chest was still there. The twenty-five volumes of the Records on Metal and Stone drafts were still there.\n\n' +
        'Nine days in jail — for the Records on Metal and Stone.',
    },
    deliverGoal: {
      cn: '1135 夏告张汝舟「妄增举数入官 + 私夺财物」。宋律「妻告夫即使胜诉妻坐牢 2 年」——我知道, 我还是告了。判决张汝舟撤职流柳州 + 离婚。同日入狱 9 天。第 9 天翰林学士綦崇礼 (赵明诚姨表亲 + 朝廷文友) 面圣营救——以「亡夫文友交托」事实陈情。高宗下诏赦免。出狱那天樟木箱还在——25 卷草稿还在。',
      en: 'Summer 1135, I accused Zhang Ruzhou of forging examination credentials and seizing private property. Song law: "Even when she wins, a wife who accuses her husband serves two years in prison." I knew. I filed anyway. The verdict: Zhang Ruzhou stripped of office and exiled to Liuzhou; the marriage dissolved. On the same day I went to jail for nine days. On the ninth, Hanlin Academician Qi Chongli — Zhao Mingcheng\'s maternal cousin and a literary colleague — went to Emperor Gaozong and explained the matter on the basis of fact: that what Li Qingzhao guarded was an unfinished work entrusted to her by her late husband, with no private gain at issue. Pardoned. The camphor chest was still there. The twenty-five volumes were still there.',
    },
    engagementHook: {
      cn: '宋律「妻告夫即使胜诉坐牢 2 年」。我知道。我还是告了。9 天牢——换《金石录》。下一节: 12 世纪我跟 21 世纪的女性——600 年同一种困境? 想 30 秒。',
      en: 'Song law: "Even when she wins, a wife who accuses her husband serves two years." I knew. I filed anyway. Nine days in jail — for the Records on Metal and Stone. Next: a twelfth-century woman and a twenty-first-century woman — six hundred years, the same difficulty? Take thirty seconds.',
    },
    expectedLength: '470-530 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N11 — REFLECTION: 12 世纪 vs 21 世纪 600 年困境同一种?
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n11',
    type: 'narrative',
    phase: 'reflection',
    cosplay: 'Li Qingzhao',
    narrativeRef: 'reflection — 12 vs 21 世纪 careful framing',
    content: {
      cn:
        '在我们继续往下走之前——我请你停 30 秒。\n\n' +
        '我是 12 世纪的女性——李清照, 1135 年 51 岁, 9 天前刚出狱。\n\n' +
        '你是 21 世纪的读者——读这一节的时候大概率是中学生, 也可能是大学生, 也可能更大。\n\n' +
        '我们之间隔 880 多年。\n\n' +
        '——12 世纪的我有什么? 我能读, 能写, 能学《诗经》《楚辞》, 能跟丈夫一起编 30 卷书。我有自己的字号——「易安居士」。我的词——晁补之 47 岁说不输李后主。\n\n' +
        '——12 世纪的我没有什么? 我没有合法离婚的权利。我告丈夫, 即使胜诉也要坐牢两年。我 51 岁, 没孩子, 没父母, 没婆家——临安城里我没有任何法律上的「靠山」。\n\n' +
        '——21 世纪你呢? 你可以投票, 可以离婚不坐牢, 可以独自出门, 可以选学校, 可以发表作品署你自己的名字。\n\n' +
        '——21 世纪你还没有什么? 这一题你比我想得多——也许是同工不同酬, 也许是某些场合的安全感, 也许是别的。我不替你回答。\n\n' +
        '我不是想说「我跟你一样」——我们不一样。880 年的距离是真实的。\n\n' +
        '我是想问——我守了 26 年的那本书叫《金石录》——你 21 世纪在守一本叫什么的书?\n\n' +
        '——想 30 秒。',
      en:
        'Before we go on — I ask you to stop for thirty seconds.\n\n' +
        'I am a twelfth-century woman — Li Qingzhao, 1135, fifty-one, nine days out of jail.\n\n' +
        'You are a twenty-first-century reader — most likely a middle school student reading this, perhaps a college student, perhaps older.\n\n' +
        'There are more than eight hundred and eighty years between us.\n\n' +
        'What did the twelfth-century me have? I could read. I could write. I could study the Book of Songs and the Songs of Chu. I could compile a thirty-volume book with my husband. I had my own studio name — Yi-an Jushi. The forty-seven-year-old Chao Buzhi said my lyrics would not be shamed beside Li Yu.\n\n' +
        'What did the twelfth-century me not have? I had no legal right to divorce. If I accused my husband, even when I won the case, I served two years in jail. At fifty-one, I had no child, no parents, no husband\'s family — in Lin\'an I had no legal "shelter" of any kind.\n\n' +
        'And you, in the twenty-first century? You can vote. You can divorce without going to jail. You can walk out alone. You can choose a school. You can publish under your own name.\n\n' +
        'And what do you, in the twenty-first century, still not have? You can think about this further than I can — perhaps unequal pay, perhaps safety in certain places, perhaps something else. I do not answer for you.\n\n' +
        'I am not trying to say "we are the same." We are not the same. The eight hundred and eighty years between us are real.\n\n' +
        'I am asking — the book I kept watch over for twenty-six years was called the Records on Metal and Stone. In the twenty-first century, what is the name of the book you keep watch over?\n\n' +
        'Take thirty seconds.',
    },
    deliverGoal: {
      cn: '880 年距离——12 世纪我能读、写、学、跟丈夫共编 30 卷书、有自己字号「易安居士」, 但没合法离婚权 + 告夫坐牢 2 年。21 世纪你能投票 / 离婚不坐牢 / 选学校 / 发表署自己名字, 但有些事还没有 (你比我清楚)。我不说「我们一样」——我问: 我守 26 年那本书叫《金石录》, 你 21 世纪守一本叫什么的书? 30 秒。',
      en: 'Eight hundred and eighty years apart. The twelfth-century me could read and write, study the classics, compile thirty volumes with her husband, have a studio name — but no legal divorce, two years in jail for accusing her husband. The twenty-first-century you can vote, divorce without jail, choose a school, publish under your name — and there are still things you do not have, which you can think about further than I can. I am not saying "we are the same." I am asking — the book I guarded for twenty-six years was the Records on Metal and Stone. In the twenty-first century, what is the name of the book you keep watch over? Take thirty seconds.',
    },
    engagementHook: {
      cn: '我是 12 世纪没有合法地位的女性，却在战乱颠沛里守了《金石录》26 年——先在心里想想你怎么看，下一节我会正式问你。',
      en: 'I was a twelfth-century woman with no legal standing, yet I guarded the Records on Metal and Stone for twenty-six years through war and flight — sit with what you think for a moment; next section I will ask you for real.',
    },
    expectedLength: '460-520 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N12 — CLOSING META: 1135 后《金石录后序》+ 5 Topic information preservation 五面体
  // ═══════════════════════════════════════════════════
  {
    id: 'lqz-n12',
    type: 'narrative',
    phase: 'closing',
    cosplay: 'Li Qingzhao',
    narrativeRef: '§5.3 line 1170-1199《金石录后序》原文 + 5 Topic 五面体',
    content: {
      cn:
        '1135 年——出狱后——我开始写《金石录后序》。1134 年初稿, 1135 年定稿。\n\n' +
        '我把跟赵明诚 28 年金石收藏的全过程——从 1101 年新婚他拿出 30 多张拓片, 到 1129 年他在建康死, 到 1135 年我在临安清波门——整理成一篇序文。\n\n' +
        '序文末尾我写:「然有有必有无, 有聚必有散, 乃理之常。人亡弓, 人得之, 又胡足道。所以区区记其终始者, 亦欲为后世好古博雅者之戒云。」\n\n' +
        '——「拥有」必然变「失去」——这是道理。「楚人遗弓, 楚人得之」, 一个楚国人丢弓, 另一个楚国人捡到, 又有什么值得说? 我之所以小心地记这一切, 是想给后世「好古博雅」的人, 一个警戒。\n\n' +
        '我把序文压在樟木箱底, 跟 25 卷草稿一起。\n\n' +
        '——1155 年, 我 71 岁, 死于临安清波门小屋。25 卷《金石录》草稿, 后来由朝廷收, 流传到今天。\n\n' +
        '我守了 26 年——守住了。\n\n' +
        '——你 21 世纪读到「然有有必有无」——这 12 个字穿过 890 年到达你。这件事本身, 就是序文最后一句「为后世好古博雅者之戒」的兑现。\n\n' +
        '5 个 Topic 在做同一件事:Tang-Song 我用《金石录后序》, Mali al-Sa\'di 1655 用《Tarikh es-Sudan》+ 沙漠藏书, Renaissance 1440 用古登堡印刷, Reformation 1517 用 95 Theses + 14 天传遍德意志, Age of Exploration 1493 用哥伦布信 + 8 月 7 种语言。\n\n' +
        '——5 个不同时空的人——做同一件事:把信息熬过暴力, 送到 400 年后的你。\n\n' +
        '——30 秒翻回去想想:Huizong N10 看的是同一批 1126 文物 (国家收藏者维度), Su Shi N10 死前 4 年在海南 (但他书法在我家收藏里 → 1126 失去, 解读者维度), 我 N5-N10 在颠沛中守 (受影响者维度)。同一批文物, 三种声音。这是 AP DBQ producer + interpreter + affected party 的真实 mapping。\n\n' +
        '我守的 26 年, 到你 21 世纪读到这 12 个字, 守到了。',
      en:
        '1135 — after I left jail — I began writing the postface to the Records on Metal and Stone. The first draft in 1134, the final version in 1135.\n\n' +
        'I set down the whole twenty-eight-year story of the metal-and-stone collecting that Zhao Mingcheng and I had done — from the thirty rubbings he showed me three days after our wedding in 1101, to his death at Jiankang in 1129, to me at Qingbo Gate in Lin\'an in 1135 — and shaped it into one preface.\n\n' +
        'I ended the preface with these lines: "Where there is having, there must be losing; where there is gathering, there must be scattering — this is the way of things. A man of Chu lost his bow, another man of Chu found it — what need is there to grieve? The reason I humbly record from beginning to end how these things came and went is to leave a warning for later lovers of antiquity, the learned and the refined."\n\n' +
        'Having must become losing — this is the way. "A man of Chu lost his bow, another man of Chu found it." One man of Chu loses a bow, another man of Chu picks it up — what is there to grieve? The reason I write this carefully is to leave a warning, for later "lovers of antiquity, learned and refined."\n\n' +
        'I pressed the postface to the bottom of the camphor chest, with the twenty-five volumes of drafts.\n\n' +
        'In 1155, at seventy-one, I died in the small house at Qingbo Gate in Lin\'an. The twenty-five volumes of Records on Metal and Stone drafts — were later taken into the Southern Song imperial collection, and from there into all later dynasties, and from there to today.\n\n' +
        'I guarded them twenty-six years. They were saved.\n\n' +
        'When you, in the twenty-first century, read "Where there is having, there must be losing" — these twelve characters have crossed eight hundred and ninety years to reach you. That, by itself, is the fulfillment of my last line — "a warning for later lovers of antiquity."\n\n' +
        'Five Topics are doing the same thing: in Tang-Song, I do it with the postface; in Mali, al-Sa\'di does it in 1655 with the Tarikh es-Sudan and the manuscripts hidden in the desert; in the Renaissance, Gutenberg does it in 1440 with movable type; in the Reformation, Luther does it in 1517 with the 95 Theses spreading through Germany in fourteen days; in the Age of Exploration, Columbus does it in 1493 with a letter printed in seven languages within eight months.\n\n' +
        'Five people across five different times and places — doing the same thing: carrying information through violence, to you, four hundred years later.\n\n' +
        'Pause thirty seconds and turn back: Huizong N10 looked at the same 1126 artifacts as the state collector (the producer view); Su Shi N10 had died four years before in Hainan, but his calligraphy in our private collection was lost in 1126 too (the interpreter view); my N5-N10 was the keeper through years of flight (the affected-party view). One batch of artifacts, three voices — the real mapping of the AP DBQ producer + interpreter + affected party rubric.\n\n' +
        'My twenty-six years of guarding — when you, in the twenty-first century, read these twelve characters — I kept faith.',
    },
    deliverGoal: {
      cn: '1134 初稿 / 1135 定稿《金石录后序》。原文末尾「然有有必有无, 有聚必有散, 乃理之常。人亡弓, 人得之」+「为后世好古博雅者之戒」。1155 71 岁我死临安清波门——25 卷被朝廷收, 流传到今天。守了 26 年, 守住了。你 21 世纪读到这 12 个字——序文兑现。5 Topic 五面体: Tang-Song《金石录后序》/ Mali al-Sa\'di 1655 沙漠藏书 / Renaissance 1440 古登堡 / Reformation 1517 95 Theses 14 天 / AoE 1493 哥伦布信 8 月 7 种语言——5 个时空的人做同一件事: 把信息熬过暴力, 送到 400 年后的你。',
      en: '1134 first draft, 1135 final version of the postface. The closing lines: "Where there is having, there must be losing; where there is gathering, there must be scattering" and "to leave a warning for later lovers of antiquity, the learned and the refined." In 1155, at seventy-one, I died at Qingbo Gate. The twenty-five volumes were taken into the imperial collection and crossed all later dynasties to today. Twenty-six years guarding — and they were saved. In the twenty-first century you reading these twelve characters is the fulfillment of the postface. Five Topics, one thread: Tang-Song postface, Mali al-Sa\'di 1655 with desert manuscripts, Renaissance 1440 movable type, Reformation 1517 95 Theses in fourteen days, Age of Exploration 1493 Columbus letter in seven languages within eight months — five people across five times and places, carrying information through violence to you, four hundred years later.',
    },
    engagementHook: {
      cn: '走完我这一生——一个无权的女性，在战乱里守了《金石录》26 年，最终让「然有有必有无」12 个字穿过 890 年到了你。你会怎么评价这样一个守书的人？再想一步：你身边有没有类似的「拼了命守住一样东西、想把它送到很久以后」的人，你会怎么对待 TA？',
      en: 'Walk to the end of my life — a woman with no legal power who guarded the Records on Metal and Stone for twenty-six years through war, until twelve characters crossed eight hundred and ninety years to reach you. How would you judge someone who guards a book like that? Then take one more step: is there someone near you who fights to keep one thing safe and carry it far into the future — how would you treat them?',
    },
    expectedLength: '520-600 字 CN closing + 5 Topic preservation thread',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lens (Li Qingzhao 顶层包装)
// ═══════════════════════════════════════════════════

export var liQingzhaoLens = {
  id: 'li-qingzhao',
  name: 'Li Qingzhao',
  nameCn: '李清照',
  role: 'receiving-end',
  perspectiveTag: 'female-literacy-carrier',
  description: {
    cn: '你是李清照 (1084-约 1155)——宋代最重要的女词人之一, 「易安体」开创者。56 年里你 1099 年 15 岁作《如梦令·昨夜雨疏风骤》「应是绿肥红瘦」让父亲抄三份送出去 / 1101 年 18 岁嫁太学生赵明诚 21 岁 (婚后第三天他拿出 30 多张拓片, 你们 28 年抄成 2000 件 30 卷《金石录》) / 1107-1117 青州 10 年甜蜜恬淡 (自号「易安居士」, 书房「归来堂」, 每晚煮茶赌某事在某书第几卷第几页) / 1126 闰 11.25 开封陷, 你 43 岁跟赵明诚 3 天 3 夜挑出 15 车文物南运 / 1127-1129 越镇江抵建康赁屋青衣巷, 文物剩不到 1/4 / 1129.8.18 赵明诚奉诏湖州赴任途中染疫死建康 49 岁, 你 46 岁守灵 3 天 / 1129-1132 颠沛 4 城越州台州温州抱樟木箱跑 / 1132 抵临安清波门小屋 / 1135 51 岁张汝舟骗婚 100 天发现是来夺《金石录》 / 你告夫——按宋律即使胜诉也要坐牢 2 年——你 9 天牢翰林学士綦崇礼营救 / 1135 后写《金石录后序》「然有有必有无, 有聚必有散, 乃理之常」 / 约 1155 71 岁死临安清波门, 25 卷草稿被朝廷收, 流传到今天——你用一生守住《金石录》。你不是数字——是有名字、有词、有易安居士字号、有 26 年守书誓言的女性。',
    en: 'You are Li Qingzhao (1084-c.1155) — one of the most important women ci-poets (ci is Song-era sung verse) of the Song dynasty, founder of the Yi-an style. Across fifty-six years: in 1099, fifteen, you wrote the Ru Meng Ling lyric "Last night, rain thin, wind sudden" — "Surely now the green grows fat and the red grows lean" — and your father copied it three times. In 1101, eighteen, you married Zhao Mingcheng, twenty-one, a student of the Imperial Academy; three days after the wedding he showed you thirty rubbings, and over twenty-eight years the two of you copied two thousand inscriptions into thirty volumes — the Records on Metal and Stone. From 1107 to 1117 you spent ten quiet years in Qingzhou, where you took the studio name Yi-an Jushi, kept a study called the Hall of Coming Home, and every night boiled tea while wagering on which page of which book held a fact. On the leap eleventh month, twenty-fifth day of 1126, Kaifeng fell; at forty-three you and Zhao Mingcheng spent three days and three nights choosing fifteen carts to send south. Between 1127 and 1129, the carts went from Qingzhou through Zhenjiang to Jiankang, where you rented a small courtyard at Qingyi Lane; less than a quarter of the collection survived. On the eighteenth day of the eighth month, 1129, Zhao Mingcheng died of plague at Jiankang on his way to take up office at Huzhou, forty-nine; you were forty-six and sat by his coffin three days. From 1129 to 1132 you ran through four cities — Yuezhou, Taizhou, Wenzhou — carrying a camphor-wood chest; in 1132 you reached Lin\'an and rented a small house at Qingbo Gate. In 1135, fifty-one, you were tricked into marriage by Zhang Ruzhou; in a hundred days you saw he had come to take the Records on Metal and Stone. You filed against him knowing Song law: even when she wins, a wife who accuses her husband serves two years in prison. You served nine days; Hanlin Academician Qi Chongli, your husband\'s maternal cousin, intervened with Emperor Gaozong. After 1135 you wrote the postface to the Records on Metal and Stone — "Where there is having, there must be losing; where there is gathering, there must be scattering — this is the way of things." About 1155, at seventy-one, you died at Qingbo Gate in Lin\'an; the twenty-five volumes of drafts entered the Southern Song imperial collection and survive to today. You guarded a book for twenty-six years and saved it. You are not a number — you are a woman with a name, with lyrics, with the studio name Yi-an Jushi, and with a twenty-six-year vow.',
  },
  storyboard: liQingzhaoStoryboard,
};


// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'emperor-huizong': emperorHuizongLens,
  'su-shi':          suShiLens,
  'li-qingzhao':     liQingzhaoLens,
};

// per Sarah audit + 7thgrader 推荐:
// 15 岁同龄锚点 + female-literacy-carrier + N5+N6 cross-lens 文物南运 + N12 5 Topic 信息保存五面体 closing
export var defaultLens = 'li-qingzhao';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'tang-song-china',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: { 'emperor-huizong': 40, 'su-shi': 35, 'li-qingzhao': 33 },
};
