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
    en: 'You are Su Shi (1037-1101), the "Su Dongpo" of Northern Song — first poet of his century, mentor to the Four Su Disciples (Huang Tingjian, Qin Guan, Zhang Lei, Chao Buzhi), and three times an exile across 21 years of factional warfare. In 1071 you opposed Wang Anshi\'s reforms; in 1086 you opposed Sima Guang\'s wholesale repeal of those same reforms — neither side accepted you. Huangzhou 1080-1084, Huizhou 1094-1097, Danzhou 1097-1100 — each exile gave Chinese civilization a higher cultural peak. You are not a "political failure" or a "transcendent genius." You are an internal-conscience scholar-exile — the mediator both factions banished.',
    cn: '你是苏轼（1037-1101）——北宋第一文人「苏东坡」，苏门四学士（黄庭坚、秦观、张耒、晁补之）之师，跨神宗 + 哲宗 + 徽宗三朝党争 21 年三度流放。1071 年你反对王安石新法；1086 年你又反对司马光全废新法——两边都不容你。黄州 1080-1084、惠州 1094-1097、儋州 1097-1100——每次流放反而催生中华文化的更高峰。你不是「政治失败者」也不是「超脱天才」——你是「内部良心 + 流放仍创造 + 中道智者」——两党共同流放的孤独调停者。',
  },
  storyboard: [
    {
      id: 'ss-n1',
      type: 'narrative',
      content: {
        cn: '1037 年我生于四川眉山——长江上游的盆地小城。\n\n我父亲苏洵（1009-1066）27 岁才发奋读书——晚成型学者——但他成了「唐宋八大家」之一。我弟弟苏辙（1039-1112）小我两岁——我们同读同写同长大——后来他也是「唐宋八大家」。\n\n父亲 + 我 + 弟弟——三个人都进了「唐宋八大家」——史称「三苏」——这是中国文学史唯一一家三人同入八大家的纪录。\n\n眉山地理偏僻——远离长安洛阳的政治中心——但四川富庶——纸 + 笔 + 蜀刻书都领先全国——我们家虽不算豪门，却有读书的物质基础。\n\n我童年读《庄子》——读到「不知周之梦为蝴蝶与，蝴蝶之梦为周与」——我跟父亲说：这就是我心里早就想说的话。\n\n这一刻——我后来用 64 年人生反复回到——「人生如梦」这四个字从童年就刻进我骨头里——它会在 1082 年的《念奴娇·赤壁怀古》里再次浮现。',
        en: 'I was born in 1037 in Meishan, Sichuan — a small basin town on the upper Yangtze.\n\nMy father Su Xun (1009-1066) only began serious study at 27 — a late-bloomer scholar — but he became one of the "Eight Masters of Tang-Song Prose." My brother Su Zhe (1039-1112) was two years younger — we read, wrote, and grew up together — he also became one of the Eight Masters.\n\nFather + me + brother — all three entered the Eight Masters — Chinese literary history records us as the "Three Sus" — the only single family with three members in that pantheon.\n\nMeishan was geographically remote — far from the political centers of Chang\'an and Luoyang — but Sichuan was prosperous: paper, ink, and Shu-block-printed books were the best in the empire. We were not a great family, but we had the material foundation to read.\n\nAs a child I read Zhuangzi — reaching the line "I do not know whether Zhou dreamt the butterfly, or the butterfly dreamt Zhou" — I told my father: this is what I have always felt but could not say.\n\nThat moment — I would return to it for 64 years — "life is a dream" was carved into my bones from childhood.',
      },
      deliverGoal: 'N1 1037 眉山生 / 苏洵 + 苏辙 三父子三苏文章 / 童年读《庄子》「人生如梦」从小刻进骨头',
      engagementHook: '一家三人都进「唐宋八大家」——这种家庭文化氛围你 21 世纪能想象吗？你父母兄弟跟你一起读书是什么体验？',
      expectsRealAnswer: true,
    },
    {
      id: 'ss-n2',
      type: 'narrative',
      content: {
        cn: '1057 年——我 21 岁——跟弟弟苏辙同年中进士。\n\n那一年的进士考试——主考官是欧阳修（1007-1072）——北宋古文运动的领袖。\n\n我答《刑赏忠厚之至论》——欧阳修读完震惊。\n\n他对副考官梅尧臣说：「读轼书——不觉汗出。快哉快哉！老夫当避路放他出一头地也。」——意思是：让这个年轻人超过我。\n\n他后来对人说：「三十年后世人但知有苏轼——不复知有欧阳修也。」\n\n更有名的一句——欧阳修跟王安石同年（1042 年同科进士）——他评我：「此人——三百年第一。」\n\n21 岁——我从眉山小城一夜成名汴京——\n\n但那一年也是我母亲程氏去世——我跟弟弟必须丁忧（守孝 27 个月）回眉山——这是 1057-1059——\n\n等我守孝完——重新回京时——朝廷正在准备大变局——王安石（1021-1086）的变法风暴马上要来——\n\n而我，21 岁的「三百年第一」——还不知道我会成为这场风暴里两边都不容的人。',
        en: 'In 1057 — at 21 — my brother Su Zhe and I passed the imperial exam together.\n\nThe chief examiner that year was Ouyang Xiu (1007-1072) — the leader of the Northern Song "ancient prose" movement.\n\nI wrote an essay on "Punishment and Reward Should Spring from Loyal Generosity" — Ouyang Xiu, reading it, was stunned.\n\nHe said to deputy examiner Mei Yaochen: "Reading Shi I sweat without knowing why. Splendid. I will step aside and let this young man rise above me."\n\nLater he told others: "Thirty years from now, people will only know Su Shi — they will no longer remember Ouyang Xiu."\n\nThe most famous line — Ouyang Xiu and Wang Anshi were the same exam-cohort (both 1042 jinshi) — he said of me: "This man — first in three hundred years."\n\nAt 21, I went from a Meishan small-town boy to overnight fame in the capital Bianjing —\n\nBut that same year my mother Lady Cheng died — my brother and I had to observe the 27-month mourning rite back in Meishan — that was 1057-1059 —\n\nWhen I returned to court, the empire was preparing for a great upheaval — Wang Anshi (1021-1086) and his reform storm were almost here —\n\nAnd I, the 21-year-old "first in three hundred years," did not yet know I would become the man both sides of that storm refused to keep.',
      },
      deliverGoal: 'N2 1057 21 岁同弟苏辙中进士 / 欧阳修主考 + 「三百年第一」/ 1057-1059 母丧丁忧 / 王安石变法风暴预告',
      engagementHook: '21 岁被「三百年第一」评——是机会还是诅咒？你怎么背得起这种期待？',
      expectsRealAnswer: true,
    },
    {
      id: 'ss-n3',
      type: 'narrative',
      content: {
        cn: '1069 年——宋神宗（1048-1085）任王安石参知政事——变法开始。\n\n王安石新法——青苗法（春放秋收年息 20-30%）+ 市易法（官府垄断采购）+ 募役法（钱代役）+ 保甲法（军事化保甲互保）——目标是富国强兵。\n\n我反对。\n\n1070 年我上《上神宗皇帝书》——一万多字——核心三点：\n\n第一：青苗法「立法之意，未必皆出于谋利」——但执行下去——地方官员强行摊派——农民被迫借贷——年息复合后远超 30%——百姓更苦。\n\n第二：用人「举措失当，则人心不安」——王安石把反对者全部赶出朝廷——朝廷只剩一个声音——长期看会出问题。\n\n第三：「凡为天下国家者，先求其利而后求其害——可乎？」——只看新法收益不看代价——这是顶层设计的盲区。\n\n我不是反对改革——我反对「这种改革」——\n\n王安石把我标为旧党——但我跟司马光（1019-1086）旧党也不一样——司马光要全废新法——我说募役法该留——\n\n两边都不容我——1071 年我自请外放——离开汴京去做地方官。',
        en: 'In 1069 — Emperor Shenzong (1048-1085) made Wang Anshi vice grand councilor — and the New Policies began.\n\nWang Anshi\'s reforms: Green Sprouts Law (state loans at 20-30% annual, repaid at harvest), Trade Equalization (state procurement monopoly), Service Exemption (cash for corvée), and Mutual Security (militarized rural defense units) — the goal was to make the state rich and the army strong.\n\nI opposed them.\n\nIn 1070 I submitted my "Memorial to Emperor Shenzong" — over ten thousand characters — three core points:\n\nFirst: the Green Sprouts Law "may not have been designed for profit" — but in practice — local officials forced quotas on every household — farmers had to borrow — compound interest after fees far exceeded 30% — the people grew poorer.\n\nSecond: on personnel, "if appointments are wrong, hearts grow uneasy" — Wang Anshi drove every dissenter out of court — only one voice remained — long-term this fails.\n\nThird: "Those who govern an empire — should they consider only benefit and never cost?" — looking only at gains and not costs — this is the blind spot of top-down design.\n\nI did not oppose reform — I opposed this kind of reform —\n\nWang Anshi labeled me a Conservative. But I differed from Sima Guang (1019-1086) too. Sima Guang wanted to abolish all New Policies; I argued the Service Exemption should be kept —\n\nNeither side accepted me — in 1071 I requested transfer out of the capital, to serve as a provincial official.',
      },
      deliverGoal: 'N3 1069-1071 王安石变法期 / 苏轼《上神宗皇帝书》反对青苗法 / 同时跟司马光旧党也不同 / 两边不容 1071 自请外放',
      engagementHook: '反对新法 + 反对全废新法——两边都不容——这种「中道」立场你 21 世纪还能找到空间吗？',
      expectsRealAnswer: true,
    },
    {
      id: 'ss-n4',
      type: 'narrative',
      content: {
        cn: '1071-1079 年我外放 8 年——杭州 + 密州 + 徐州 + 湖州。\n\n这 8 年我做实事：\n- 1071-1074 杭州通判——疏浚西湖 + 治理钱塘江——西湖「苏堤」就是这时候的雏形（后来 1089 年我再回杭州才正式建堤）。\n- 1077 徐州知州——黄河决口——我亲临大堤指挥 70 多天——洪水退后徐州人立祠纪念。\n- 1079 调任湖州——刚到任写谢恩表——这成了灾难的开端。\n\n1079 年 7 月——御史台李定 + 何正臣 + 舒亶——从我十几年来的诗词里挑出「讽刺新法」字句——弹劾我「愚弄朝廷」「妄自尊大」——\n\n7 月 28 日——皇甫遵带兵到湖州州衙——把我下狱——\n\n御史台又名「乌台」——因为院里柏树多乌鸦——所以这案叫「乌台诗案」——\n\n我在御史台监狱关了 130 天——从 1079 年 8 月 18 日到 12 月 26 日——\n\n130 天里——审讯 + 自辩 + 几乎被判死——\n\n弟弟苏辙上书愿用自己官职换我命——王安石（已罢相）也写信给神宗：「岂有圣世而杀才士乎？」——\n\n12 月 28 日神宗下旨：贬黄州团练副使——本州安置——不得签书公事——\n\n我活下来了——但失去了一切。',
        en: 'From 1071 to 1079 I served eight years in the provinces — Hangzhou, Mizhou, Xuzhou, Huzhou.\n\nThese eight years I did real work:\n- 1071-1074 Hangzhou deputy prefect — dredged West Lake + managed the Qiantang River — the West Lake "Su Causeway" was first conceived here (formally built when I returned in 1089).\n- 1077 Xuzhou prefect — when the Yellow River broke its banks — I stood on the dyke directing flood-defense for 70 days — after the waters fell, the people built a shrine in my name.\n- 1079 transferred to Huzhou — on arrival I wrote the customary memorial of thanks — and this became the beginning of disaster.\n\nJuly 1079 — censors Li Ding, He Zhengchen, and Shu Dan — combed through ten years of my poems and found phrases they read as "mocking the New Policies" — and impeached me for "fooling the court" and "vain self-importance" —\n\nJuly 28 — Huangfu Zun arrived at the Huzhou yamen with troops — and took me into custody —\n\nThe Censorate was called "Crow Terrace" because of the many crows in its cypress trees — so the case is known as the "Crow Terrace Poetry Case" —\n\nI was held in the Censorate prison for 130 days — from 18 August to 26 December 1079 —\n\nIn those 130 days: interrogation, self-defense, near-execution —\n\nMy brother Su Zhe petitioned, offering his own office in exchange for my life. Wang Anshi (then retired) wrote to Shenzong: "How can a sage age execute a man of talent?" —\n\nDecember 28, Shenzong issued the decree: demoted to deputy training commissioner of Huangzhou — confined to Huangzhou — barred from signing official documents —\n\nI survived. But I had lost everything.',
      },
      deliverGoal: 'N4 1071-1079 杭州/徐州治水 / 1079 乌台诗案 130 天监狱 / 苏辙 + 王安石 (已罢相) 都为我求情 / 12.28 贬黄州',
      engagementHook: '从「三百年第一」到 130 天死囚——你怎么从这种崩塌站起来？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n5',
      type: 'narrative',
      content: {
        cn: '1080 年 2 月 1 日——我 43 岁——抵达黄州（今湖北黄冈）。\n\n团练副使——名义上是地方军事副官——实际是流放。我没俸禄 + 不能签公事 + 全家挤在江边小破屋里——日子苦。\n\n第二年我向官府要了一块荒地——城东的一片缓坡——开荒种麦——\n\n我自己拿锄头下地——\n\n这块坡叫「东坡」——\n\n从此——我不叫苏轼——我自号「东坡居士」——苏东坡这个名字——是从 43 岁开始用的。\n\n黄州 4 年（1080-1084）——是我一辈子最重要的 4 年——\n\n1082 年 7 月 16 日——我跟朋友夜游赤壁——写《赤壁赋》。\n10 月 15 日——又写《后赤壁赋》。\n同年——填《念奴娇·赤壁怀古》——「大江东去，浪淘尽，千古风流人物」——\n\n这一首词——把宋词从婉约派（柳永、晏几道）转向豪放派——是中国词史的转折点。\n\n词的最后一句——「人生如梦——一樽还酹江月」——\n\n5 岁读《庄子》刻在骨头里的「人生如梦」——43 岁在黄州东坡之上——重新写出来——\n\n流放不是终点——是创造的起点。',
        en: 'On 1 February 1080 — at 43 — I arrived in Huangzhou (modern Huanggang, Hubei).\n\nDeputy training commissioner — in name a junior military officer — in fact an exile. No salary, no signing authority, my whole family crammed into a small broken house by the river — life was hard.\n\nThe next year I asked the local government for a piece of fallow ground — a gentle slope east of the city wall — and broke it for wheat —\n\nI worked the hoe with my own hands —\n\nThe slope was called "Dongpo" (East Slope) —\n\nFrom that day — I stopped calling myself Su Shi — I took the style "Dongpo Jushi," the Hermit of East Slope — Su Dongpo, the name the world remembers, began at 43.\n\nThe four Huangzhou years (1080-1084) — were the most important four years of my life —\n\n16 July 1082 — I went out at night with friends to Red Cliff and wrote "Rhapsody on Red Cliff."\n15 October — I wrote "Latter Rhapsody on Red Cliff."\nThat same year I composed the lyric "Niannujiao: Meditating on Red Cliff" — "The Great River flows east — its waves have washed away a thousand years of heroes" —\n\nThis one lyric turned Song ci poetry from the graceful school (Liu Yong, Yan Jidao) toward the bold school — a true pivot in the history of Chinese verse.\n\nThe closing line — "Life is like a dream — I pour one cup to the river\'s moon" —\n\nThe Zhuangzi line carved into my bones at five — "life is a dream" — at 43 on East Slope, I wrote it out again —\n\nExile is not the end — it is the start of creation.',
      },
      deliverGoal: 'N5 1080 黄州第一次流放 4 年 / 自号「东坡居士」苏东坡名字起点 / 1082《赤壁赋》《后赤壁赋》《念奴娇·赤壁怀古》 / 宋词婉约派转豪放派转折点 / 「人生如梦」童年→43 岁回环',
      engagementHook: '流放 4 年成就一辈子最高峰——你 21 世纪「失败」之后会重新创造吗？还是只想恢复原来位置？',
      expectsRealAnswer: true,
    },
    {
      id: 'ss-n6',
      type: 'narrative',
      content: {
        cn: '1085 年神宗崩——9 岁哲宗（赵煦）继位——祖母高太后听政——\n\n旧党司马光当政——召我回朝——1086 年我 49 岁回汴京任翰林学士——\n\n但我又出问题了。\n\n司马光要全部废除王安石新法——一道圣旨废 18 年立法。\n\n我反对——我对司马光说：\n\n「免役（募役法）虽是新法——但施行 16 年——百姓已经适应——一旦全废——重回劳役制——农民秋收时被强征——土地荒废——更乱。」\n\n「不能因为反对一个人——而把所有他做的事都推翻。」\n\n司马光怒——\n\n旧党也开始排挤我——\n\n1089 年——我再请外放——任杭州知州——回到 18 年前我治水的杭州——\n\n这次我正式建「苏堤」——西湖南北两岸用淤泥筑长堤 + 种柳树 + 设六桥——「苏堤春晓」西湖十景之首——是这次留下的。\n\n但政治上——我已经清楚：新党不容我 + 旧党也不容我 + 我是「两党之间无党」——\n\n这种「中道」立场——在朋党时代——是注定孤独的。\n\n你 21 世纪两极化政治——是不是也有类似的「中道孤独」？',
        en: 'In 1085 Emperor Shenzong died — nine-year-old Emperor Zhezong (Zhao Xu) succeeded — his grandmother Empress Dowager Gao took the regency —\n\nThe Conservative party under Sima Guang came to power — and called me back to court — in 1086, at 49, I returned to Bianjing as Hanlin Academician —\n\nBut I ran into trouble again.\n\nSima Guang wanted to abolish all of Wang Anshi\'s New Policies — undoing 18 years of legislation in a single edict.\n\nI opposed it. I said to Sima Guang:\n\n"The Service Exemption — though it is a New Policy — has been in force for 16 years — the people have adapted — abolish it overnight, return to corvée — and farmers will be conscripted at harvest — fields will go fallow — chaos will follow."\n\n"You cannot, simply because you oppose one man, overturn everything he did."\n\nSima Guang was furious —\n\nThe Conservatives began to push me out —\n\nIn 1089 — I asked again for a transfer — and was sent as prefect of Hangzhou — back to the city where I had managed the water 18 years before —\n\nThis time I formally built the "Su Causeway" — north-south across West Lake, raised from dredged silt, planted with willows, with six bridges — "Spring Dawn at the Su Causeway," first of the Ten Scenes of West Lake — comes from this season.\n\nBut politically — I now saw clearly: the Reformers reject me + the Conservatives reject me + I am the no-party man between two parties —\n\nThis "middle way" position — in an age of factions — is destined to be lonely.\n\nYour 21st-century polarized politics — is there a similar "middle-way loneliness"?',
      },
      deliverGoal: 'N6 1086 哲宗即位 / 旧党司马光当政 / 苏轼回朝任翰林学士 / 反对司马光全废新法 → 1089 杭州第二次出 / 苏堤建于此时 / 中道两党都不容',
      engagementHook: '21 世纪两极化政治——你看到「中道」立场的人吗？他们处境怎么样？',
      expectsRealAnswer: true,
    },
    {
      id: 'ss-n7',
      type: 'narrative',
      content: {
        cn: '1093 年——高太后死——19 岁哲宗亲政——\n\n哲宗 9 岁继位时祖母听政 8 年——他记着祖母 + 司马光打压新党——\n\n他亲政第一件事——召回章惇 + 蔡京——重启新法——并清算「元祐党人」——\n\n旧党列名碑——刻 309 人——我跟弟弟苏辙都在上面——\n\n1094 年——我 57 岁——贬惠州（今广东惠州）——\n\n惠州当时是岭南瘴疠之地——但比起后来的儋州——还算「轻贬」——\n\n1097 年——哲宗再加一道贬令——这次发我去儋州（今海南）——也把弟弟苏辙发雷州（广东雷州半岛）——\n\n1097 年 6 月 10 日——我跟苏辙在雷州海康相见——\n\n这是我们兄弟最后一面。\n\n他 58 岁要往雷州——我 60 岁要渡海去儋州——海南那时是流放最远之地——\n\n我们在港口同宿一夜——第二天我上船——他在岸上送——\n\n那一夜我写诗给他——\n\n「与君世世为兄弟，又结来生未了因。」\n\n意思是：今生这一别可能再不见——但我跟你——下一辈子还做兄弟——再下一辈子还有未尽的因缘——\n\n这一句——是我跟弟弟 60 年同读同写同长大同遭贬同流放——最后的话——',
        en: 'In 1093 — the Empress Dowager Gao died — nineteen-year-old Zhezong took the throne in his own name —\n\nZhezong had been nine when he succeeded; his grandmother had ruled for eight years — he remembered his grandmother and Sima Guang crushing the Reformers —\n\nHis first act on taking power — recall Zhang Dun and Cai Jing — restart the New Policies — and purge the "Yuanyou faction" —\n\nThe Conservative blacklist named 309 people — both my brother Su Zhe and I were on it —\n\n1094 — at 57 — I was demoted to Huizhou (modern Huizhou, Guangdong) —\n\nHuizhou was a malarial frontier — but compared to what came later, this was a "light" exile —\n\n1097 — Zhezong issued another order — and sent me on to Danzhou on Hainan island — and sent my brother Su Zhe to Leizhou (the Leizhou peninsula, Guangdong) —\n\nOn 10 June 1097 — Su Zhe and I met in Haikang on Leizhou —\n\nThis was the last time we ever saw each other.\n\nHe was 58, on his way to Leizhou. I was 60, about to cross the strait to Danzhou — Hainan in 1097 was the furthest exile in the empire —\n\nWe slept one night at the port together. The next day I boarded ship; he stood on the shore to see me off —\n\nThat night I wrote him a poem —\n\n"With you, life after life, may we be brothers — and in the next life still have karma unfinished."\n\nMeaning: in this life this parting may be the last — but you and I — in the next life will still be brothers — and in the life after that, there will still be karma we have not finished —\n\nThat line — is the last word between two brothers — 60 years of reading, writing, growing up, factional ruin, and exile together — sealed.',
      },
      deliverGoal: 'N7 cross-lens micro-detail (1097.6.10 海南雷州港诀别苏辙) / 1093 哲宗亲政清算元祐党人 / 1094 惠州 / 1097 儋州 / 苏轼 60 岁苏辙 58 岁 / 「与君世世为兄弟」是 lens 2 hook',
      engagementHook: '「与君世世为兄弟」——你跟最亲的人有没有过觉得「这一别可能再不见」的时刻？',
      expectsRealAnswer: true,
    },
    {
      id: 'ss-n8',
      type: 'narrative',
      content: {
        cn: '1097 年 7 月——我 60 岁——渡琼州海峡到儋州。\n\n儋州（今海南儋州）——11 世纪是流放最远之地——「天涯海角」——瘴疠之乡——\n\n我到儋州时——以为是来等死的——\n\n但我没死——我活下来——还活了 3 年（1097-1100）——\n\n这 3 年我做了 4 件事：\n\n第一——跟当地黎族原住民交朋友——他们带我学海南方言 + 教我怎么避瘴气 + 给我送菜——我跟黎族村民一起吃槟榔 + 喝椰汁——\n\n第二——开学——海南此前没有书院——我办学讲《论语》《尚书》——我的学生姜唐佐后来成为海南第一个考中举人的人（1099）——这是海南文化教育史的起点。\n\n第三——写《东坡志林》——一部笔记体杂著——记录我在儋州的生活 + 哲学思考 + 历史评论——\n\n第四——继续写诗词——「九死南荒吾不恨——兹游奇绝冠平生」——意思是：南方流放九死一生我不后悔——这次旅程的奇绝是我一辈子最高峰。\n\n60 岁——三度流放——海南最远——\n\n但我说：「兹游奇绝冠平生」——\n\n你怎么读这句话？',
        en: 'July 1097 — at 60 — I crossed the Qiongzhou Strait to Danzhou.\n\nDanzhou (modern Danzhou, Hainan) — in the 11th century the furthest exile in the empire — "the end of the sky and the corner of the sea" — a malarial frontier —\n\nWhen I arrived I thought I had come to die —\n\nBut I did not die — I lived three more years (1097-1100) —\n\nIn those three years I did four things:\n\nFirst — I made friends with the local Li (Hlai) indigenous people — they taught me the Hainan dialect, taught me how to live with the malarial air, brought me vegetables — I sat with Li villagers chewing betel and drinking coconut milk —\n\nSecond — I opened a school — Hainan had had no academy before me — I taught the Analects and the Book of Documents — my student Jiang Tangzuo later became the first man from Hainan to pass the provincial exam (1099) — this was the beginning of Hainan\'s cultural and educational history.\n\nThird — I wrote Dongpo Zhilin (East Slope Notebook) — a miscellany of jottings — recording my life in Danzhou + philosophical thought + historical commentary —\n\nFourth — I kept writing poetry. "Nine deaths in the southern wilderness — I have no regret — this strange and wondrous journey crowns my whole life" — meaning: nearly dying nine times in southern exile, I do not regret it — the strangeness of this journey is the peak of my life.\n\nAt 60 — three times exiled — Hainan the furthest —\n\nBut I said: "this strange journey crowns my life" —\n\nHow do you read that line?',
      },
      deliverGoal: 'N8 1097-1100 儋州第三次流放 60 岁 / 跟黎族原住民交友 + 开学 (姜唐佐 1099 海南第一举人) + 《东坡志林》/「九死南荒吾不恨——兹游奇绝冠平生」',
      engagementHook: '60 岁流放最远之地——「兹游奇绝冠平生」——这是真心还是自我安慰？',
      expectsRealAnswer: true,
    },
    {
      id: 'ss-n9',
      type: 'narrative',
      content: {
        cn: '1100 年正月——哲宗死——25 岁无嗣——\n\n弟弟徽宗（赵佶——18 岁——后来「靖康之耻」那个皇帝）继位——\n\n太皇太后向氏听政——大赦天下——所有元祐党人复官北归——\n\n我接到诏书时——在儋州茅屋里——\n\n63 岁——3 年没见过家人——身体瘦得像枯枝——但还活着——\n\n我跟黎族朋友告别——他们送我到海边——有人哭——有人塞一袋槟榔给我路上吃——\n\n1100 年 6 月我从儋州渡海——回大陆——\n\n沿路经过雷州——我跟弟弟苏辙重逢——\n\n这一次——我们都活着——这是 1097 年那次诀别后我们还能再见——\n\n我跟他说：「我以为再见不到你了。」\n\n他说：「我也是。」\n\n两个老人——苏轼 63 + 苏辙 61——抱头哭——\n\n我们一起走到惠州——那里我有 3 年（1094-1097）熟悉的地方——\n\n但弟弟去许州——我继续北上——\n\n这是我们最后一次见——1100 年 9 月——之后我没再见过他——',
        en: 'In the first month of 1100 — Emperor Zhezong died — at 25, with no heir —\n\nHis younger brother Huizong (Zhao Ji — 18 — the emperor who would later live the catastrophe of 1127) succeeded —\n\nThe Empress Dowager Xiang took the regency — a general amnesty was issued — every member of the Yuanyou blacklist was restored and called north —\n\nI received the edict in my thatched hut in Danzhou —\n\n63 years old — three years without seeing family — body thin as a dead branch — but alive —\n\nI said goodbye to my Li friends — they walked me to the shore — some wept — one pressed a sack of betel into my hand for the road —\n\nJune 1100 I crossed the strait from Danzhou — back to the mainland —\n\nOn the way I passed Leizhou — and was reunited with my brother Su Zhe —\n\nThis time — we were both alive — three years after the parting of 1097, we saw each other once more —\n\nI said: "I thought I would never see you again."\n\nHe said: "I thought the same."\n\nTwo old men — Shi at 63, Zhe at 61 — held each other and wept —\n\nWe walked together as far as Huizhou — where I had spent three familiar years (1094-1097) —\n\nBut he went on to Xuzhou — I continued north —\n\nThis was the last time we saw each other — September 1100 — after that I never saw him again —',
      },
      deliverGoal: 'N9 1100 哲宗死 / 徽宗即位 / 大赦 / 苏轼 63 岁北归 / 跟黎族告别 / 雷州再见苏辙——1097 诀别后还能再见 / 1100.9 真正最后一面',
      engagementHook: '「我以为再见不到你了」——这种重逢的心情你 21 世纪经历过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ss-n10',
      type: 'narrative',
      content: {
        cn: '1101 年 7 月 28 日——我死在常州（今江苏常州）——\n\n65 岁——刚从海南北归一年——还没回到老家眉山——也没回到弟弟身边——\n\n途中染瘴——身体撑不住——\n\n临终前几日——我在常州顾塘桥旁的客舍里——\n\n弟子钱济明 + 维琳长老 + 几个朋友守在床边——\n\n维琳长老问我：「先生平生学佛——临终怎么想？」\n\n我说：「西方不无——但个里着力不得。」——意思是：佛教说的西方极乐世界不是没有——但临死之时——你想用力去那里——反而到不了——\n\n这是禅宗最深的一层——\n\n临终前一日——我自题画像——写了一首总结一生的诗：\n\n「问汝平生功业——黄州惠州儋州。」\n\n意思是：你问我这辈子做了什么大事？——\n\n答案：黄州 + 惠州 + 儋州——我三度流放的三个地方。\n\n不是 1057 年的「三百年第一」——\n不是 1086 年的翰林学士——\n不是杭州治水建苏堤——\n\n而是三度流放——\n\n这是一个一辈子被两党流放的人——临终时的自我评价。\n\n你怎么读这句话？',
        en: 'On 28 July 1101 — I died in Changzhou (modern Changzhou, Jiangsu) —\n\n65 years old — barely a year back from Hainan — never reached my hometown Meishan — never returned to my brother\'s side —\n\nOn the road I had caught a fever from the southern climate — my body could not bear it —\n\nIn my last days — in an inn beside the Gutang Bridge in Changzhou —\n\nMy disciple Qian Jiming, the elder monk Weilin, and a few friends sat at my bed —\n\nElder Weilin asked: "Master — you have studied Buddhism your whole life — what do you think now, at the end?"\n\nI said: "The Western Paradise is not nothing — but at this point, force does not reach it." — meaning: the Pure Land of Buddhist teaching is real — but in this dying moment, the harder you push toward it, the less you arrive —\n\nThis is the deepest layer of Chan (Zen) —\n\nThe day before I died — I inscribed my own self-portrait with a poem summing up my life:\n\n"You ask what I have done in this life — Huangzhou, Huizhou, Danzhou."\n\nMeaning: you ask what I accomplished in my life? —\n\nAnswer: Huangzhou + Huizhou + Danzhou — the three places I was exiled to.\n\nNot the "first in three hundred years" of 1057 —\nnot the Hanlin Academician of 1086 —\nnot the Hangzhou water-works and the Su Causeway —\n\nBut the three exiles —\n\nThat is the self-assessment of a man both factions banished.\n\nHow do you read it?',
      },
      deliverGoal: 'N10 1101.7.28 常州 65 岁死途中 / 临终诗「问汝平生功业，黄州惠州儋州」——三度流放是自我评价 / 维琳长老对话 + 「西方不无但个里着力不得」禅宗深处',
      engagementHook: '65 岁临终——你回头看一辈子——你会写哪三个地方？',
      expectsRealAnswer: true,
    },
    {
      id: 'ss-n11',
      type: 'synthesis',
      content: {
        cn: '关于我，21 世纪两种说法——\n\n一种：我是「完美中道智者」——反对王安石新法 1071 + 反对司马光全废新法 1086——两边都不容——是 21 世纪「不极端化」榜样。\n\n另一种：我不是完美——\n\n我 1086 年回朝时——也参与过党争——也在《辨试馆职策问》里讥讽司马光——也卷入过元祐党人对新党的清算——我自己写过攻击新党的文字——\n\n我不是「站在党争之外的圣人」——我是「跟党争 26 年的人——但比同代多保留了一点距离」——\n\n这两件事同时成立。\n\n21 世纪你看我——\n\n如果只看「黄州写《赤壁赋》」「儋州写《东坡志林》」——你会觉得我是脱离政治的天才文人——错——我从未脱离政治——我每次流放都是党争结果——\n\n如果只看「我反对青苗法」——你会觉得我是顶级反对派——错——1086 年我也参与了清算新党——\n\n真相在中间——\n\n「我犯过 26 年党争的错——也站不出来超脱——但我没完全失去良心——三度流放也没让我恨任何人——这就是我所能做的最多。」\n\n想 30 秒。\n\n这跟你 21 世纪「完美 paragon vs 完全堕落」二元化媒体叙事——是一样的简化吗？',
        en: 'In the 21st-century academy, two views of me —\n\nOne: I am the "perfect middle-way sage" — I opposed Wang Anshi\'s New Policies in 1071 + I opposed Sima Guang\'s wholesale repeal in 1086 — neither side accepted me — a 21st-century model of "the un-extremized."\n\nThe other: I am not perfect —\n\nIn 1086, when I was called back to court — I too participated in factional combat — I mocked Sima Guang in my "Examination Question on Personnel Selection" — I was caught up in the Yuanyou party\'s purge of the Reformers — I wrote pieces attacking the Reformers myself —\n\nI am not "the saint who stood outside factionalism" — I am "the man who lived inside 26 years of factional war — but kept one extra step of distance from it" —\n\nBoth statements are true at the same time.\n\nIf you read me from the 21st century —\n\nLook only at "Red Cliff Rhapsody in Huangzhou" and "Dongpo Zhilin in Danzhou" — and you will think I was a transcendent poet who had escaped politics — wrong — I never escaped politics — every exile was a factional outcome —\n\nLook only at "I opposed Green Sprouts" — and you will think I was a heroic dissident — wrong — in 1086 I too joined in the purge of the Reformers —\n\nThe truth is in the middle —\n\n"I lived 26 years of factional error — I could not stand outside it as a perfect saint — but I did not lose my conscience entirely — three exiles never made me hate anyone — and that is the most I could do."\n\nThink for 30 seconds.\n\nIs this the same simplification as your 21st-century "perfect paragon vs total fall" binary media narrative?',
      },
      deliverGoal: 'N11 synthesis 双 view (完美中道智者 vs 不完美参与者) — anti-binary 真相在中间 / hold 矛盾真相 30 秒 / AP DBQ 训练',
      engagementHook: '21 世纪媒体「完美 paragon vs 完全堕落」二元化——是不是跟你评价历史人物的方式一样简化？',
      expectsRealAnswer: true,
    },
    {
      id: 'ss-n12',
      type: 'synthesis',
      content: {
        cn: '我已死 925 年——你 21 世纪 7 年级跟我做完 lonely-mediator 这一段——\n\n横向看三个同类型的「内部良心调停者」：\n\n- Bartolomé de las Casas（1484-1566 Dominican 修士）——1502-1514 自己 13 年是 encomendero，1514 Cuba 崩溃后 50 年反殖民，但 1516 错建议非洲奴隶替代——「内部良心 + 一辈子修正错误」跟我「26 年党争错误」结构同。\n\n- Erasmus（1466-1536 荷兰人文主义者）——既反教会腐败，又反 Luther 撕教会的方式，两边都骂他——「中道孤独」16 世纪原型。\n\n- Ibn Battuta（1304-1369 Maliki 法学者）——1352 Mali 8 个月，自己也参与 Islamic 奴隶买卖，但 Rihla 写下「Mali 比任何国家安全」——「带偏见的诚实见证者」。\n\n四个我们——中国 + Islamic + 西班牙 + 荷兰——都是 lonely-mediator。\n\n21 世纪你——能在身边找到一个 lonely-mediator 吗？\n\n不是英雄，不是叛徒，是「卡在中间，两边都不容，但还在尝试」的那种人。\n\n那个人是谁？',
        en: 'I have been dead 925 years — at 21st-century 7th grade you have walked this lonely-mediator stretch with me —\n\nLook across to three more internal-conscience mediators:\n\n- Bartolomé de las Casas (1484-1566, Spanish Dominican friar) — was himself an encomendero for 13 years (1502-1514) — broke in Cuba 1514 — spent 50 years opposing colonial violence — but in 1516 made the wrong proposal of African slaves replacing Taíno — at 80 still begging God\'s forgiveness — "internal conscience + a life of correcting errors," structurally the same as my "internal conscience + 26 years of factional error."\n\n- Erasmus (1466-1536, Dutch humanist) — opposed both Church corruption and Luther\'s tearing of the Church — neither side kept him — the 16th-century prototype of "middle-way loneliness."\n\n- Ibn Battuta (1304-1369, Moroccan Maliki jurist) — eight months in Mali in 1352-1353 — himself participated in the 14th-century Islamic slave trade — yet wrote in his Rihla that "Mali is safer than any country I have visited" — "the honest witness who carried bias."\n\nFour of us — 11th-century China + 14th-century Islamic + 16th-century Spain + Netherlands — all lonely-mediators —\n\n21st-century you, after these four lenses — can you find a lonely-mediator near you?\n\nNot a hero — not a traitor — someone "stuck in the middle, accepted by neither side, still trying."\n\nWho is that person?',
      },
      deliverGoal: 'N12 closing meta cross-civilization 4 lonely-mediators (Su Shi 11C + Ibn Battuta 14C + las Casas 16C + Erasmus 16C) / 不是英雄 不是叛徒 是中间人 / 21 世纪你身边找一个',
      engagementHook: '你 21 世纪身边——「卡在中间，两边都不容，但还在尝试」——这种人是谁？',
      expectsRealAnswer: true,
    },
  ],
};

// 默认 export 兼容(给 staging 测试用)
export default suShiLens.storyboard;

// ─── Storyboard staging 元信息 ───
export var meta = {
  topicId: 'tang-song-china',
  lensId: 'su-shi',
  schemaVersion: 2,
  status: 'staging',
  estimatedMinutes: 38,
  authoredBy: 'lens-author agent (Story-First Pedagogy v2)',
  authoredDate: '2026-05-07',
  notes: [
    'N7 cross-lens micro-detail: 1097.6.10 海南雷州港诀别苏辙 (60 岁苏轼往儋州 / 58 岁苏辙往雷州)',
    '  「与君世世为兄弟，又结来生未了因」 — 这是 lens 2 emotional anchor',
    'N5 cross-narrative echo: 黄州 1080-1084《赤壁赋》《念奴娇·赤壁怀古》与文献 5.2 重合',
    'N11 reflection: anti-binary (完美中道智者 vs 不完美参与者) — hold 矛盾真相 30 秒',
    '  目标: AP DBQ source-criticism (我自己 1086 也参与党争清算新党 — 不是脱离政治的圣人)',
    'N12 closing 4 lonely-mediators 横向对比 (Su Shi / Ibn Battuta / las Casas / Erasmus)',
    '待 4-agent review (7thgrader 小 U + AP teacher Dr. Park + ESL Maria + Chinese teacher 赵老师)',
  ],
};
