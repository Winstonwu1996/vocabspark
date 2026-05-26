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
        '订婚的那个秋天我没见过他。新婚之夜——我第一次抬头看清——21 岁太学生赵明诚, 父亲是赵挺之 (后来做到尚书右丞)。眉骨高、眼睛亮、说话慢。\n\n' +
        '婚后第三天, 赵明诚拿出他书桌底下的一摞东西给我看——拓片。3 寸 ×4 寸的小拓片, 30 多张。每一张是一段石碑铭文——汉碑、魏碑、唐碑, 字小、墨淡。\n\n' +
        '他说:「这些是我从太学旁边的旧书摊一年里收的。我想编一本书, 把宋代以前所有金石碑刻的铭文跟年代理一遍。我编不完——我想找一个能跟我一起编的人。」\n\n' +
        '他停一停:「我父亲说你 15 岁那首《如梦令》——他抄了。」\n\n' +
        '我笑——「我 15 岁, 你 18 岁, 我没见过你。你已经在收拓片?」\n\n' +
        '他点头。\n\n' +
        '——这是我跟赵明诚的开始。不是从《诗经》、不是从灯笼、不是从月亮——是从 30 多张拓片。一拍即合。\n\n' +
        '后来我们一起——从 18 岁到 46 岁——28 年——把那 30 多张拓片, 变成一本叫《金石录》的书。2000 件金石碑帖。30 卷。我跟他, 一笔一笔抄。',
      en:
        '1101 — I am eighteen.\n\n' +
        'The autumn I was betrothed I had not yet met him. On our wedding night I looked up for the first time and saw clearly — Zhao Mingcheng, twenty-one, a student at the Imperial Academy, son of Zhao Tingzhi (who would rise to vice-grand-counselor). Strong brow, bright eyes, slow speech.\n\n' +
        'Three days after the wedding, Zhao Mingcheng pulled a stack of small things out from under his desk and showed them to me. Rubbings — three by four inches, more than thirty of them. Each one a fragment of stele inscription — Han, Wei, Tang — the characters small, the ink pale.\n\n' +
        'He said: "I gathered these from the old book stalls near the Imperial Academy over the past year. I want to compile a book — every metal-and-stone inscription from before our dynasty, with its date, all set in order. I cannot finish it alone. I want someone who will work on it with me."\n\n' +
        'He paused. "My father said your Ru Meng Ling, the one you wrote at fifteen — he copied it."\n\n' +
        'I laughed. "I was fifteen, you were eighteen, I had never seen you. And already you were collecting rubbings?"\n\n' +
        'He nodded.\n\n' +
        'This is how Zhao Mingcheng and I began. Not with the Book of Songs, not with lanterns, not with the moon — with thirty-some rubbings. We knew at once.\n\n' +
        'And then — from my eighteenth year to my forty-sixth — twenty-eight years — together we turned those thirty rubbings into a book called Records on Metal and Stone. Two thousand inscriptions. Thirty volumes. He and I, one stroke at a time, copied them.',
    },
    deliverGoal: {
      cn: '1101 18 岁我嫁赵明诚 21 岁太学生 (父赵挺之, 后做尚书右丞)。婚后第三天他拿出 30 多张拓片说「我想编一本《金石录》」。我们 28 年一笔一笔抄成 2000 件金石碑帖、30 卷。',
      en: 'In 1101, eighteen, I marry Zhao Mingcheng, twenty-one, a student of the Imperial Academy whose father Zhao Tingzhi would become vice-grand-counselor. Three days after the wedding he shows me thirty rubbings and says: "I want to compile a book called Records on Metal and Stone." Over twenty-eight years we copied two thousand inscriptions in thirty volumes, one stroke at a time.',
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
        '1126 年闰 11 月 25 日——金兵攻陷开封。1127 年 1 月 9 日——徽宗、钦宗父子加宗室、后妃、工匠 3000 人被俘北上。北宋亡。\n\n' +
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
        'Leap eleventh month, twenty-fifth day, 1126 — Jin armies took Kaifeng. On the ninth day of the first month, 1127 — Emperor Huizong, Emperor Qinzong, the imperial family, consorts, and craftsmen, three thousand people, were marched north as captives. The Northern Song was over.\n\n' +
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
        '第 9 天——翰林学士綦崇礼营救。他是赵明诚的姨表亲, 也是当时朝廷里最有声望的文人之一。他面圣, 直说:「李清照, 是我们这一代最高的女性写者。她要保的是《金石录》——这本书是国之重宝。」\n\n' +
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
        'On the ninth day — Hanlin Academician Qi Chongli intervened. He was Zhao Mingcheng\'s cousin on the maternal side and one of the most respected literary officials in the Southern Song court. He went to the emperor and said: "Li Qingzhao is the foremost woman writer of our generation. What she has been guarding is the Records on Metal and Stone, a treasure of the state."\n\n' +
        'Emperor Gaozong issued an edict pardoning Li Qingzhao.\n\n' +
        'The day I left jail, I went home to the small house at Qingbo Gate. The camphor chest was still there. The twenty-five volumes of the Records on Metal and Stone drafts were still there.\n\n' +
        'Nine days in jail — for the Records on Metal and Stone.',
    },
    deliverGoal: {
      cn: '1135 夏告张汝舟「妄增举数入官 + 私夺财物」。宋律「妻告夫即使胜诉妻坐牢 2 年」——我知道, 我还是告了。判决张汝舟撤职流柳州 + 离婚。同日入狱 9 天。第 9 天翰林学士綦崇礼 (赵明诚姨表亲) 面圣营救。高宗下诏赦免。出狱那天樟木箱还在——25 卷草稿还在。',
      en: 'Summer 1135, I accused Zhang Ruzhou of forging examination credentials and seizing private property. Song law: "Even when she wins, a wife who accuses her husband serves two years in prison." I knew. I filed anyway. The verdict: Zhang Ruzhou stripped of office and exiled to Liuzhou; the marriage dissolved. On the same day I went to jail for nine days. On the ninth, Hanlin Academician Qi Chongli — Zhao Mingcheng\'s maternal cousin — went to Emperor Gaozong and said: "Li Qingzhao is the foremost woman writer of our generation; what she guards is the Records on Metal and Stone, a treasure of the state." Pardoned. The camphor chest was still there. The twenty-five volumes were still there.',
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
      cn: '我守的书叫《金石录》——你 21 世纪守的书叫什么? 30 秒。下一节: 1135 后《金石录后序》+ 5 Topic 信息保存五面体.',
      en: 'The book I guarded was the Records on Metal and Stone. What is the name of the book you guard? Thirty seconds. Next: 1135, the postface, and the five-Topic preservation thread.',
    },
    expectedLength: '460-520 字 CN',
    expectsRealAnswer: true,
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
        '准备好做记忆考核了?',
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
        'Ready for the mastery check?',
    },
    deliverGoal: {
      cn: '1134 初稿 / 1135 定稿《金石录后序》。原文末尾「然有有必有无, 有聚必有散, 乃理之常。人亡弓, 人得之」+「为后世好古博雅者之戒」。1155 71 岁我死临安清波门——25 卷被朝廷收, 流传到今天。守了 26 年, 守住了。你 21 世纪读到这 12 个字——序文兑现。5 Topic 五面体: Tang-Song《金石录后序》/ Mali al-Sa\'di 1655 沙漠藏书 / Renaissance 1440 古登堡 / Reformation 1517 95 Theses 14 天 / AoE 1493 哥伦布信 8 月 7 种语言——5 个时空的人做同一件事: 把信息熬过暴力, 送到 400 年后的你。',
      en: '1134 first draft, 1135 final version of the postface. The closing lines: "Where there is having, there must be losing; where there is gathering, there must be scattering" and "to leave a warning for later lovers of antiquity, the learned and the refined." In 1155, at seventy-one, I died at Qingbo Gate. The twenty-five volumes were taken into the imperial collection and crossed all later dynasties to today. Twenty-six years guarding — and they were saved. In the twenty-first century you reading these twelve characters is the fulfillment of the postface. Five Topics, one thread: Tang-Song postface, Mali al-Sa\'di 1655 with desert manuscripts, Renaissance 1440 movable type, Reformation 1517 95 Theses in fourteen days, Age of Exploration 1493 Columbus letter in seven languages within eight months — five people across five times and places, carrying information through violence to you, four hundred years later.',
    },
    engagementHook: {
      cn: '5 Topic 一个 thread: Tang-Song《金石录后序》/ Mali 沙漠藏书 / Renaissance 印刷 / Reformation 95 Theses / AoE 哥伦布信。5 个时空, 同一件事: 把信息熬过暴力送到 400 年后的你。准备记忆考核?',
      en: 'Five Topics, one thread: Tang-Song postface, Mali desert manuscripts, Renaissance printing, Reformation 95 Theses, AoE Columbus letter. Five times and places, one act: carrying information through violence to you, four hundred years later. Ready for the mastery check?',
    },
    expectedLength: '520-600 字 CN closing + 5 Topic preservation thread',
    expectsRealAnswer: false,
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
    cn: '你是李清照 (1084-约 1155),,中国古典词坛公认第一女词人, 「易安体」开创婉约派新境。56 年里你 1099 年 15 岁作《如梦令·昨夜雨疏风骤》「应是绿肥红瘦」让父亲抄三份送出去 / 1101 年 18 岁嫁太学生赵明诚 21 岁 (婚后第三天他拿出 30 多张拓片, 你们 28 年抄成 2000 件 30 卷《金石录》) / 1107-1117 青州 10 年甜蜜恬淡 (自号「易安居士」, 书房「归来堂」, 每晚煮茶赌某事在某书第几卷第几页) / 1126 闰 11.25 开封陷, 你 43 岁跟赵明诚 3 天 3 夜挑出 15 车文物南运 / 1127-1129 越镇江抵建康赁屋青衣巷, 文物剩不到 1/4 / 1129.8.18 赵明诚奉诏湖州赴任途中染疫死建康 49 岁, 你 46 岁守灵 3 天 / 1129-1132 颠沛 4 城越州台州温州抱樟木箱跑 / 1132 抵临安清波门小屋 / 1135 51 岁张汝舟骗婚 100 天发现是来夺《金石录》 / 你告夫,,按宋律即使胜诉也要坐牢 2 年,,你 9 天牢翰林学士綦崇礼营救 / 1135 后写《金石录后序》「然有有必有无, 有聚必有散, 乃理之常」 / 约 1155 71 岁死临安清波门, 25 卷草稿被朝廷收, 流传到今天,,你用一生守住《金石录》。你不是数字,,是有名字、有词、有易安居士字号、有 26 年守书誓言的女性。',
    en: 'You are Li Qingzhao (1084-c.1155) , the foremost woman ci-poet of the Chinese classical canon, founder of the Yi-an style of the Graceful School. Across fifty-six years: in 1099, fifteen, you wrote the Ru Meng Ling lyric "Last night, rain thin, wind sudden" , "Surely now the green grows fat and the red grows lean" , and your father copied it three times. In 1101, eighteen, you married Zhao Mingcheng, twenty-one, a student of the Imperial Academy; three days after the wedding he showed you thirty rubbings, and over twenty-eight years the two of you copied two thousand inscriptions into thirty volumes , the Records on Metal and Stone. From 1107 to 1117 you spent ten quiet years in Qingzhou, where you took the studio name Yi-an Jushi, kept a study called the Hall of Coming Home, and every night boiled tea while wagering on which page of which book held a fact. On the leap eleventh month, twenty-fifth day of 1126, Kaifeng fell; at forty-three you and Zhao Mingcheng spent three days and three nights choosing fifteen carts to send south. Between 1127 and 1129, the carts went from Qingzhou through Zhenjiang to Jiankang, where you rented a small courtyard at Qingyi Lane; less than a quarter of the collection survived. On the eighteenth day of the eighth month, 1129, Zhao Mingcheng died of plague at Jiankang on his way to take up office at Huzhou, forty-nine; you were forty-six and sat by his coffin three days. From 1129 to 1132 you ran through four cities , Yuezhou, Taizhou, Wenzhou , carrying a camphor-wood chest; in 1132 you reached Lin\'an and rented a small house at Qingbo Gate. In 1135, fifty-one, you were tricked into marriage by Zhang Ruzhou; in a hundred days you saw he had come to take the Records on Metal and Stone. You filed against him knowing Song law: even when she wins, a wife who accuses her husband serves two years in prison. You served nine days; Hanlin Academician Qi Chongli, your husband\'s maternal cousin, intervened with Emperor Gaozong. After 1135 you wrote the postface to the Records on Metal and Stone , "Where there is having, there must be losing; where there is gathering, there must be scattering , this is the way of things." About 1155, at seventy-one, you died at Qingbo Gate in Lin\'an; the twenty-five volumes of drafts entered the Southern Song imperial collection and survive to today. You guarded a book for twenty-six years and saved it. You are not a number , you are a woman with a name, with lyrics, with the studio name Yi-an Jushi, and with a twenty-six-year vow.',
  },
  storyboard: liQingzhaoStoryboard,
};

export default liQingzhaoStoryboard;

// ─── Storyboard 元信息 (staging) ───
export var meta = {
  topicId: 'tang-song-china',
  lensId: 'li-qingzhao',
  schemaVersion: 2,
  status: 'staging',
  estimatedMinutes: 34,
  authorNote:
    '12 nodes 完整 — N1 1099 春 hook 15 岁山东济南 / N2 1099 夏《如梦令》「应是绿肥红瘦」父亲抄三份 / N3 1101 18 岁嫁赵明诚 21 岁——婚后第 3 天 30 多张拓片 / N4 1107-1117 青州 10 年 ⭐ 主 visual anchor 自号「易安居士」+ 归来堂 4 墙到顶 + 煮茶赌书 + 苏轼字 / N5 1126.闰 11.25 开封陷 / 1127.1.9 北宋亡——3 天 3 夜挑 15 车 / N6 ⭐ cross-lens micro-detail 1127-1129 南运具体路线: 青州→镇江 (剩不到一半)→建康 (青衣巷 3 间屋)→1128 春我一人回青州 (太晚)→剩不到 1/4→1129 御营内护又丢 / N7 ⭐ Sarah audit lens hook scene 1129.8.18 赵明诚 49 岁染疫死建康——最后一句「守好草稿」+ 樟木箱 26 年 / N8 1129-1132 颠沛 4 城 越州抱箱睡 + 台州一夜丢 50 件 + 温州少 5 卷 + 1132 春临安清波门 / N9 1135 51 岁张汝舟骗婚 100 天 / N10 1135 夏告夫 9 天牢綦崇礼营救 / N11 reflection 12 vs 21 世纪 880 年 30 秒 / N12 ⭐ closing 1135《金石录后序》「然有有必有无」+ 5 Topic 信息保存五面体 (Tang-Song 后序 / Mali 1655 沙漠藏书 / Renaissance 1440 印刷 / Reformation 1517 95 Theses 14 天 / AoE 1493 哥伦布信 8 月 7 种). N4 + N6 + N12 三 anchor 全部就位.',
};
