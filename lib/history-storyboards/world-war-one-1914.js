// ─── World War I 1914-1918 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 第一次世界大战 · The Great War 1914-1918
// AP World Modern Unit 7 · APUSH Period 7 (美国参战 + Wilson) · AP Euro
//
// 3 lens (per TOPIC_ROADMAP_G6_G12.md B4 + AUTHORING_PIPELINE 第 7/8/12 条):
//   - woodrow-wilson                  (perpetrator-actor) — Woodrow Wilson 1856-1924 「十四点」理想主义者 + 白宫重推种族隔离
//   - gavrilo-princip                 (lonely-mediator)   — Gavrilo Princip 1894-1918 19 岁刺杀斐迪南 / 死于狱中肺结核
//   - senegalese-tirailleur-receiving-end (receiving-end) — 西非塞内加尔狙击兵 composite c.1895-1918 为宗主国送命
//
// 跨 lens micro-detail (N6 anchor):
//   Wilson N6: 十四点「民族自决」的理想 vs 同一双手在白宫重新隔离联邦机构 — 理想与伪善同体
//   Princip N6: 一颗子弹 (1914.6.28 萨拉热窝) 怎么靠联盟体系连锁炸成全欧战争
//   Tirailleur N6: 殖民地兵为「自由」流血 vs 自己家乡正被同一个宗主国统治 — 同一面旗两个方向
//
// 跨 Topic 锚:
//   - Wilson 十四点 vs 国内隔离 → reconstruction-1877 (Wilson 重隔离/反 Jim Crow 倒退) + womens-suffrage-1920 (同代理想/伪善)
//   - Princip 刺杀连锁 → scramble-for-africa-1884 (殖民竞争 + 联盟体系张力顶点)
//   - 塞内加尔兵 → scramble-for-africa-1884 (殖民地为宗主国流血的延续) + mali-empire-1235 (西非人的另一种命运)
//
// defaultLens = 'senegalese-tirailleur-receiving-end' (受影响者优先: 殖民地兵 + 为不属于自己的战争送命 + 跨 lens/Topic 对位)
//
// STRUCTURE SPEC:
//   - 11 nodes per lens (multi-faction)
//   - 220-360 CN chars/node; 仅 2 anchor (N6 cross-lens + synthesis) 可达 480; 其余 ≤380
//   - expectsRealAnswer: ONLY 倒数第二 (N10 synthesis) + 末节 (N11 close) = true; 其余全 false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// composite tirailleur: 角色为合成,基于真实塞内加尔狙击兵史实; 用括号短句标注
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Woodrow Wilson (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var wilsonLens = {
  id: 'woodrow-wilson',
  name: 'Woodrow Wilson',
  nameCn: '伍德罗·威尔逊',
  role: 'perpetrator-actor',
  perspectiveTag: 'idealist-president',
  icon: '🕊️',
  description: {
    cn: '美国第 28 任总统，1856 年生在弗吉尼亚一个牧师家庭，当过大学教授和普林斯顿校长，是少数当上总统的学者。1917 年他带美国参战，喊出一句让全世界记住的口号：要让世界「为民主而安全」。1918 年他提出「十四点」，主张民族自决、公开外交、成立国际联盟，被许多人当成战后和平的希望。同一个他，1913 年起在白宫重新把联邦机构按种族隔离，还在白宫放映美化三 K 党的电影《一个国家的诞生》。这一遍让你从这位「理想主义总统」内部，看理想和伪善怎么长在同一个人身上。',
    en: 'The 28th president of the United States, born 1856 to a minister\'s family in Virginia, a former college professor and president of Princeton, one of the few scholars to reach the White House. In 1917 he led America into the war with a slogan the whole world would remember: to make the world "safe for democracy." In 1918 he offered his Fourteen Points, calling for national self-determination, open diplomacy, and a League of Nations, and many took him for the hope of postwar peace. The same man, beginning in 1913, re-segregated the federal agencies by race in his own government, and screened in the White House a film glorifying the Klan, The Birth of a Nation. This pass lets you watch, from inside this "idealist president," how ideals and hypocrisy grow on the same man.',
  },
  storyboard: [
    {
      id: 'wil-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1917 年 4 月 2 日，华盛顿。我站在国会两院面前，要请他们做一件我竞选时承诺绝不做的事：参战。\n\n三年了，欧洲在打一场谁也停不下来的大战。我一直让美国置身事外。可现在我站在这里，要把几百万美国年轻人送过大西洋，送进别人的战壕。\n\n我得给这件事一个理由——一个大到配得上这么多人去死的理由。我说出了那句后来全世界都记住的话：我们要让世界「为民主而安全」。\n\n我是 Woodrow Wilson（伍德罗·威尔逊），美国总统。我当过大学教授，写过书。我相信我送他们去打的，是一场为了更好世界的战争。\n\n这一遍，你坐进我这个位置。看一个真心相信自己在做好事的人，怎么把理想和血、把高尚和盲点，装进同一句口号里。',
        en: 'April 2, 1917, Washington. I stand before both houses of Congress to ask them to do the one thing I had promised in my campaign never to do: enter the war.\n\nFor three years Europe had been fighting a great war no one could stop. I had kept America out of it. Yet now I stand here to send millions of young Americans across the Atlantic, into other men\'s trenches.\n\nI had to give this a reason, one large enough to be worth so many deaths. I spoke the line the whole world would remember: we would make the world "safe for democracy."\n\nI am Woodrow Wilson, president of the United States. I was a college professor; I wrote books. I believed the war I was sending them to fight was a war for a better world.\n\nThis pass puts you in my seat. Watch how a man who sincerely believes he is doing good packs his ideals and blood, his nobility and his blind spots, into one and the same slogan.',
      },
      deliverGoal: 'N1 hook — 1917.4.2 Wilson 请国会参战 (违背竞选承诺) + 三年置身事外到送几百万人过大西洋 +「为民主而安全」口号 + Wilson 自我介绍 (教授/相信打的是好仗) + 这一遍视角设定 (理想与盲点同一句口号)',
      engagementHook: '我把几百万年轻人送进别人的战壕，理由是「让世界为民主而安全」。一句听起来很高尚的口号，能不能盖过那么多人去死这件事？',
      expectsRealAnswer: false,
    },
    {
      id: 'wil-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说这场战是怎么烧起来的，你才懂我为什么犹豫了三年。\n\n1914 年夏天，欧洲早就分成两大阵营，互相结盟、互相猜忌。一边是同盟国（德国、奥匈帝国为主），一边是协约国（英国、法国、俄国为主）。两边都在拼命造军舰、扩军队，像两堆堆到顶的干柴。\n\n1914 年 6 月，在一个叫萨拉热窝的城市，奥匈帝国的王储斐迪南大公被一个塞族青年开枪打死。就这一颗子弹，点着了那堆干柴。\n\n一个月内，靠着事先签好的同盟条约，一国宣战拉着另一国，整个欧洲连锁炸开。到 8 月，几乎所有大国都卷了进去。\n\n这不是一场为某个具体目标打的战。它更像一台没人能关掉的机器：你结了盟，盟友打仗你就得跟着打。\n\n我远在大西洋这头，看着这台机器把欧洲一代年轻人吞进去。我那时想：美国，绝不能进去。',
        en: 'First, how this war caught fire, so you understand why I hesitated for three years.\n\nBy the summer of 1914 Europe had long split into two great camps, allied and suspicious of each other. On one side the Central Powers (mainly Germany and Austria-Hungary); on the other the Allies (mainly Britain, France, Russia). Both raced to build warships and swell their armies, like two woodpiles stacked to the top.\n\nIn June 1914, in a city called Sarajevo, the heir of Austria-Hungary, Archduke Ferdinand, was shot dead by a young Serb. That single bullet lit the woodpile.\n\nWithin a month, on the strength of treaties signed in advance, one nation\'s declaration of war dragged in the next, and all of Europe exploded in a chain. By August nearly every great power was in.\n\nThis was not a war fought for one clear goal. It was more like a machine no one could switch off: you had made an alliance, and when your ally fought, you had to fight too.\n\nFar across the Atlantic, I watched that machine swallow a generation of Europe\'s young men. I thought then: America must never go in.',
      },
      deliverGoal: 'N2 setup — 同盟国 vs 协约国两大阵营/军备竞赛 (干柴) + 1914.6 萨拉热窝斐迪南被刺 (一颗子弹) + 联盟条约连锁宣战 + 战争像关不掉的机器 + Wilson 起初决心美国不进去',
      engagementHook: '一颗子弹，靠事先签好的盟约，一个月内炸成整个欧洲的大战。「因为结了盟就必须跟着打」——这种身不由己，你觉得是借口还是真的没办法？',
      expectsRealAnswer: false,
    },
    {
      id: 'wil-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那我为什么从「绝不参战」变成了「请国会宣战」？\n\n两件事把我推过了那条线。\n\n第一，德国的潜艇战。德国宣布：凡是开往英国的船，不管是不是中立国的，一律击沉。美国的商船、美国人的命，都在被击沉的名单上。\n\n第二，一封被截获的密电。德国偷偷找墨西哥结盟，许诺帮墨西哥夺回从前丢给美国的土地。这封电报一公开，美国人炸了：原来这场仗，已经烧到我们家门口。\n\n1917 年 4 月，我去了国会。我说服自己：既然非打不可，那就别只为「保护商船」这种小理由打。要打，就为一个配得上这场牺牲的大理由——为了让这成为「终结一切战争的战争」，为了一个战后更公正的世界。\n\n你看出来了吗：我需要那个大理由，不只是说给国民听。我也需要它，说给我自己听。',
        en: 'So why did I move from "never enter the war" to "ask Congress to declare it"?\n\nTwo things pushed me over the line.\n\nFirst, Germany\'s submarine war. Germany announced it would sink any ship bound for Britain, neutral or not. American merchant ships, American lives, were on that list to be sunk.\n\nSecond, an intercepted telegram. Germany had secretly approached Mexico to ally against the United States, promising to help Mexico win back land it had lost to America. When the telegram was made public, Americans were furious: so the war had already reached our own doorstep.\n\nIn April 1917 I went to Congress. I persuaded myself: if we must fight, let us not fight for some small reason like "protecting merchant ships." If we fight, let it be for a cause worthy of the sacrifice, to make this "the war to end all wars," for a more just world afterward.\n\nDo you see it? I needed that grand reason not only to tell the nation. I needed it to tell myself.',
      },
      deliverGoal: 'N3 setup — Wilson 从中立到参战的两个推力 (无限制潜艇战击沉美船 + Zimmermann 密电德国找墨西哥结盟) + 1917.4 请国会宣战 + 升级理由从「保护商船」到「终结一切战争」更公正世界 + 「我需要大理由说给自己听」',
      engagementHook: '我把参战的理由从「保护我们的船」升级成「终结一切战争」。这个更大的理由，是真的更对，还是只是让我自己心里好受一点？',
      expectsRealAnswer: false,
    },
    {
      id: 'wil-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是总统。你刚把国家带进一场你三年前发誓不打的战。两百万美国士兵正在渡过大西洋，去法国的战壕。\n\n你也知道前方等着他们的是什么。这是人类第一次用机关枪、毒气、铁丝网、几百万发炮弹来打仗。士兵们挖几百公里的战壕，躲在泥水里，几个月推进几百米，一次冲锋就死掉上万人。\n\n你坐在白宫，签下让他们去的命令。你告诉自己：他们的死是有意义的，因为这是为了一个更好的世界。\n\n可是夜里你也会想：那个被炮弹炸碎在法国泥地里的 19 岁男孩，他知道自己是「为民主而死」的吗？还是他只知道，他冷，他怕，他想回家？\n\n这一刻你得问自己：当你用一个崇高的理由，去支配千万人的生死——你怎么确定，那个理由不是你给自己的一块遮羞布？',
        en: 'Now you are me.\n\nYou are president. You have just led the nation into a war you swore three years ago not to fight. Two million American soldiers are crossing the Atlantic to the trenches of France.\n\nYou know, too, what waits for them. This is the first time humanity fights with machine guns, poison gas, barbed wire, and millions of artillery shells. Soldiers dig hundreds of miles of trenches, crouch in mud and water, advance a few hundred meters in months, and lose ten thousand men in a single charge.\n\nYou sit in the White House and sign the orders that send them. You tell yourself: their deaths have meaning, because this is for a better world.\n\nBut at night you also wonder: that 19-year-old boy blown apart in the mud of France, did he know he was dying "for democracy"? Or did he only know that he was cold, that he was afraid, that he wanted to go home?\n\nHere you must ask yourself: when you use a noble cause to command the life and death of millions, how can you be sure that cause is not just a cloth you hung over your own face?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Wilson 签令送 200 万兵去法国战壕 + 工业化堑壕战残酷 (机关枪/毒气/铁丝网/几月推进几百米/一次冲锋死上万) + 告诉自己死有意义 vs 夜里疑问 (19 岁男孩知道为民主死吗还是只想回家) + 自我拷问 (崇高理由会不会是遮羞布)',
      engagementHook: '那个被炸碎在泥地里的 19 岁男孩，知道自己是「为民主而死」吗，还是只知道他冷、他怕、他想回家？用一个崇高理由支配千万人生死，你怎么确定它不是遮羞布？',
      expectsRealAnswer: false,
    },
    {
      id: 'wil-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '战争快打完时，我做了一件让我名留青史的事。\n\n1918 年 1 月，离停战还有 10 个月，我在国会提出了一份和平蓝图，一共十四条，史称「十四点」（Fourteen Points）。\n\n里面有几条让全世界眼睛一亮：以后外交不许再私下签密约，要公开；要削减军备；最响亮的一条是「民族自决」——每个民族都该有权决定自己归谁管，不该被强行塞进别人的帝国。还有一条：成立一个「国际联盟」（League of Nations），让各国坐下来谈，而不是动不动就开战。\n\n这些话传到欧洲，传到那些被大帝国统治的小民族耳朵里，像一道光。波兰人、捷克人、阿拉伯人都在传：那个美国总统说，我们有权自己当家。\n\n我那一刻是真心的。我真觉得，我能用这十四条，把这场惨绝人寰的大战，变成人类最后一场大战。',
        en: 'As the war neared its end, I did the thing that would put my name in history.\n\nIn January 1918, ten months before the armistice, I laid before Congress a blueprint for peace, fourteen points in all, known ever after as the Fourteen Points.\n\nSeveral of them made the world\'s eyes light up: no more secret treaties signed in private, diplomacy must be open; arms must be reduced; and the loudest of all, "self-determination," that every people should have the right to decide who governs them, and not be forced into someone else\'s empire. And one more: a League of Nations, where nations would sit and talk rather than rush to war.\n\nThese words reached Europe, reached the ears of small peoples ruled by great empires, like a shaft of light. Poles, Czechs, Arabs passed the word: that American president says we have the right to govern ourselves.\n\nIn that moment I was sincere. I truly believed I could use these fourteen points to turn this most terrible of wars into humanity\'s last great war.',
      },
      deliverGoal: 'N5 story — 1918.1 十四点和平蓝图 (公开外交/削减军备/民族自决/国际联盟) + 民族自决像光 (波兰捷克阿拉伯小民族传) + Wilson 真心相信能把惨战变成人类最后一场战 + 桥到理想主义高点',
      engagementHook: '我说每个民族都该有权自己当家——这话传到被大帝国统治的小民族耳朵里，像一道光。一个真心的理想，是不是已经足够让人原谅它后面藏着的东西？',
      expectsRealAnswer: false,
    },
    {
      id: 'wil-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可那道光，照不进我自己的国家。\n\n我向全世界喊「民族自决」「人人平等」的同一双手，在国内做着相反的事。\n\n1913 年我一上台，就允许把联邦政府机构按种族重新隔离开来：黑人雇员被调去单独的办公室、单独的食堂、单独的厕所。这是南北战争之后几十年里的一次倒退（这条倒退，跟重建那段历史里黑人刚争来的权利被一点点收回，是同一条线）。\n\n1915 年，我把一部叫《一个国家的诞生》的电影请进白宫放映。那部电影把三 K 党拍成英雄，把黑人拍成威胁。我看完对它赞不绝口（后人记下我说过一句「像用闪电写历史」，但这句出处有争议）。\n\n你看这个对位：我对欧洲被压迫的小民族说「你们有权平等、有权自决」；我对自己国家里被压迫的黑人公民说的，却是「你们该被隔开」。\n\n同一个「平等」，我对外是理想，对内是空话。同一双手，写下了十四点，也签下了隔离令。这不是两个 Wilson。是同一个我。',
        en: 'But that light could not reach into my own country.\n\nThe same hands that cried "self-determination" and "all are equal" to the world were doing the opposite at home.\n\nIn 1913, as soon as I took office, I allowed the federal agencies to be re-segregated by race: Black employees were moved to separate offices, separate dining rooms, separate restrooms. It was a step backward in the decades after the Civil War (this backward step is the same thread as the rights Black Americans had just won being slowly taken back, in the reconstruction topic).\n\nIn 1915 I brought a film called The Birth of a Nation into the White House to screen. That film made the Klan into heroes and Black people into a menace. When it ended I praised it lavishly (a later account records me saying it was "like writing history with lightning," though that line\'s authenticity is disputed).\n\nSee the pairing: to the oppressed small peoples of Europe I said "you have the right to equality, the right to self-rule"; to the oppressed Black citizens of my own country I said "you should be kept apart."\n\nThe same word, "equality." Abroad it was my ideal; at home it was empty words. The same hands wrote the Fourteen Points and signed the segregation orders. These are not two Wilsons. They are one and the same me.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Wilson 十四点理想 vs 1913 起白宫重推联邦机构种族隔离 (黑人单独办公室/食堂/厕所) → reconstruction-1877 跨 Topic 锚 (倒退) + 1915《一个国家的诞生》白宫放映 (美化三 K 党/「像闪电写历史」) + 对位 (对欧洲喊自决平等/对国内黑人喊隔离) + 同一个我',
      engagementHook: '同一双手，写下「人人平等」的十四点，也签下隔离黑人的命令。对外是理想，对内是空话——这是两个 Wilson，还是同一个我没看见自己？',
      expectsRealAnswer: false,
    },
    {
      id: 'wil-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的伪善，不只在国内。它也写进了「民族自决」这条理想本身。\n\n1919 年巴黎和会，各国坐下来分战利品、画新地图。我带着十四点去，以为我能主导一个公正的和平。\n\n可「民族自决」到底给谁？答案很现实：给欧洲的白人小民族——波兰、捷克这些，确实建了国。可亚洲、非洲那些被英法殖民的民族呢？他们也来了，也举着我的十四点求自决。\n\n结果：没有。德国在非洲的殖民地，没有还给非洲人，而是分给了英法。一个叫胡志明的越南年轻人，到巴黎想递一份请愿书，连门都没进去。中国代表为山东据理力争，却眼睁睁看着德国在山东的权益被转交给日本——这件事点燃了中国的五四运动。\n\n我嘴里的「自决」，原来有一条看不见的线：肤色对了、在欧洲，才算数。\n\n我不是故意撒这个谎。更可怕的是：我可能根本没意识到，我的「人人」从一开始就没真的包括所有人。',
        en: 'My hypocrisy was not only at home. It was written into the very ideal of "self-determination."\n\nAt the Paris peace conference in 1919, the nations sat down to divide the spoils and draw new maps. I came with my Fourteen Points, thinking I could steer a just peace.\n\nBut self-determination for whom? The answer was blunt: for Europe\'s white small peoples, Poland, Czechoslovakia, who did indeed get their states. But what of the peoples of Asia and Africa ruled by Britain and France? They came too, holding up my Fourteen Points, asking for self-rule.\n\nThe result: nothing. Germany\'s colonies in Africa were not returned to Africans but handed to Britain and France. A young Vietnamese named Ho Chi Minh came to Paris to deliver a petition and could not even get in the door. The Chinese delegates argued for Shandong, only to watch Germany\'s rights there handed to Japan, the very thing that lit China\'s May Fourth movement.\n\nThe "self-determination" in my mouth, it turned out, had an invisible line: the right skin color, in Europe, and only then did it count.\n\nI did not tell this lie on purpose. More frightening: I may never have realized that my "all" never truly included everyone.',
      },
      deliverGoal: 'N7 story — 1919 巴黎和会十四点 + 民族自决的看不见的线 (欧洲白人小民族波兰捷克建国 vs 亚非殖民民族被拒) + 德属非洲殖民地转交英法 + 胡志明递请愿进不去门 + 中国山东权益转日本→五四运动 + 「自决有肤色线/我可能根本没意识到我的人人没包括所有人」',
      engagementHook: '我嘴里的「民族自决」，有一条看不见的线：肤色对了、在欧洲，才算数。最可怕的不是我故意撒谎，是我可能根本没意识到。你身上有没有这种「自己看不见」的偏心？',
      expectsRealAnswer: false,
    },
    {
      id: 'wil-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我为「国际联盟」拼了命，最后却败给了我自己的国家。\n\n十四点里我最看重的，是国际联盟：一个让各国坐下来谈、不再动辄开战的地方。1919 年和约签了，国联也成立了。我以为这是我一生最大的成就。\n\n可回到美国，我的国会不买账。很多议员怕国联会把美国拖进别人的战争，拒绝批准。\n\n我不肯妥协。1919 年秋天，我亲自坐火车跑遍全国，一个城市一个城市地演讲，想让民众逼国会同意。我累垮了，中风倒下，半身瘫痪。\n\n最后的结果：美国，这个最早提出国际联盟的国家，自己没有加入。我亲手缔造的和平机构，少了它最大的发起人。\n\n二十年后，这个没拦住下一场更大战争的国联，散了。\n\n我用尽全力推的理想，没能落地。这不全是别人的错。也因为我太相信自己是对的，连一点点妥协都不肯让。',
        en: 'I fought to the death for the League of Nations, and in the end I lost to my own country.\n\nOf all the Fourteen Points, the one I valued most was the League: a place where nations would sit and talk and no longer rush to war. The treaty was signed in 1919 and the League was founded. I thought it the greatest achievement of my life.\n\nBut back in America, my Congress would not have it. Many senators feared the League would drag America into other people\'s wars, and refused to ratify.\n\nI would not compromise. In the autumn of 1919 I rode the trains across the whole country myself, speaking city by city, hoping the people would force Congress to agree. I wore myself out, suffered a stroke, and was left half paralyzed.\n\nThe final result: America, the very country that first proposed the League of Nations, did not join it. The peace body I built with my own hands lacked its greatest founder.\n\nTwenty years later, that League, having failed to stop the next and larger war, fell apart.\n\nThe ideal I pushed with all my strength never took root. It was not all others\' fault. It was also that I believed too firmly I was right, and would not yield even a little.',
      },
      deliverGoal: 'N8 story — 国际联盟 Wilson 最看重 + 国会拒批 (怕被拖进别人战争) + Wilson 不妥协全国巡回演讲累垮中风半瘫 + 美国这个发起国自己没加入 + 二十年后国联没拦住下一场更大战散了 + 「不全是别人的错/我太相信自己对连一点妥协都不让」',
      engagementHook: '我太相信自己是对的，连一点妥协都不肯让，结果亲手建的和平机构，自己国家没加入。「坚持原则」和「固执到害了大事」，界线在哪？',
      expectsRealAnswer: false,
    },
    {
      id: 'wil-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我个人，拉远到整场战争留下了什么。\n\n这场打了四年的大战，杀死了大约一千七百万人，伤残更多。它不是为了哪个崇高理由打的，是几个帝国的傲慢、几张盟约、一颗子弹，加上谁也关不掉的战争机器，一起把一代欧洲青年推进了绞肉机。\n\n它没有「终结一切战争」。恰恰相反：苛刻的和约羞辱了战败的德国，二十年后，一个更可怕的人物利用这份屈辱，发动了第二次世界大战。\n\n而我那条「民族自决」，虽然对殖民地是一张空头支票，却也种下了一颗种子。几十年后，亚洲、非洲的殖民地人民，反过来拿我这句话，去要他们自己的独立。当年进不去巴黎和会大门的胡志明，后来领着越南赶走了法国。\n\n一句话写在纸上的时候，写它的人没打算让所有人都用。可话一旦说出口，就不只属于说它的人了。（这条「被殖民者拿宗主国的话翻身」的线，你换到那个塞内加尔狙击兵那一遍，会看得更深。）',
        en: 'Pull the lens back from me alone, to what the whole war left behind.\n\nThis four-year war killed about seventeen million people and maimed many more. It was not fought for any noble cause; it was the arrogance of a few empires, a few treaties, a single bullet, and a war machine no one could switch off, together pushing a generation of Europe\'s young into the grinder.\n\nIt did not "end all wars." Quite the opposite: a harsh treaty humiliated the defeated Germany, and twenty years later a far more terrible man used that humiliation to launch the Second World War.\n\nAnd my "self-determination," empty as it was for the colonies, planted a seed all the same. Decades later the colonized peoples of Asia and Africa turned my own words around to demand their independence. Ho Chi Minh, who could not get through the door at Paris, later led Vietnam in driving out the French.\n\nWhen a line is written on paper, the writer never means for everyone to use it. But once words are spoken, they no longer belong only to the one who spoke them. (This thread, the colonized turning the master\'s own words back, you will see deeper when you switch to the pass of that Senegalese soldier.)',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 整场战死约 1700 万 + 不是为崇高理由 (帝国傲慢/盟约/子弹/战争机器) + 没终结一切战 (苛刻和约羞辱德国→二十年后二战) + 民族自决空头支票却种下种子 (亚非殖民地反拿这话要独立/胡志明领越南赶走法国) + 桥到 tirailleur lens',
      engagementHook: '我说「终结一切战争」，结果苛刻的和约羞辱了德国，二十年后炸出更可怕的二战。一个真心想要和平的人，怎么会反而为下一场更大的战埋下引线？',
      expectsRealAnswer: false,
    },
    {
      id: 'wil-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是现代理想主义的开创者。是我第一次让一个超级大国，公开把「民族自决」「公开外交」「集体安全」当成外交目标。十四点鼓舞了全世界被压迫的民族，国际联盟是后来联合国的雏形。哪怕我失败了，我指给人类看的，是一个更好世界的方向。\n\n另一种说法：我是把伪善穿成理想的人。我对欧洲喊平等，对自己国家的黑人公民推隔离；我说「人人自决」，却把这「人人」悄悄限定成欧洲白人。我的理想越响亮，它照不到的那些人，就越被这道光晃得看不见。\n\n这两边不是「功劳加缺点」。是同一套理想的两面——同一句「人人平等」，既能鼓舞全世界，也能掩盖我自己的盲点。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the founder of modern idealism. It was I who first made a great power openly take "self-determination," "open diplomacy," and "collective security" as the goals of its foreign policy. The Fourteen Points stirred oppressed peoples around the world, and the League of Nations was the seed of the later United Nations. Even where I failed, what I pointed humanity toward was the direction of a better world.\n\nThe other view: I was the man who dressed hypocrisy as ideals. I cried equality to Europe and pushed segregation onto the Black citizens of my own country; I said "self-determination for all," yet quietly narrowed that "all" to white Europeans. The louder my ideals rang, the more the people the light could not reach were blinded out of sight by it.\n\nThese are not "credit and faults." They are two faces of one ideal. The same "all are equal" can stir the whole world and can mask my own blind spot.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (现代理想主义开创者/十四点鼓舞全球/国联是联合国雏形/指向更好世界) / 另一种说法 (把伪善穿成理想/对欧洲喊平等对国内黑人推隔离/把人人限定成欧洲白人) / 同一套理想两面 / 想 30 秒',
      engagementHook: '现代理想主义的开创者，和把伪善穿成理想的人——是同一个我。我的理想越响亮，它照不到的人就越被晃得看不见。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'wil-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一个真心相信自己在为更好世界奋斗的人，喊出的理想鼓舞了几代被压迫的民族；同一个人，看不见自己脚下那些被他喊的「平等」排除在外的人。这两件事不是两个人，是同一颗脑袋里同时装着的。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有这样的人，或者就是你自己：嘴上讲着特别正确、特别高尚的话，转过身做的事，却跟那话对不上——也许他自己都没察觉？\n\n那时候，你会怎么做？你会因为他说的话好听就全信，还是会去看他真正做了什么——并且，敢不敢回头看看，你自己有没有一句喊得很响、却照不到某些人的「平等」？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nA man who sincerely believed he was fighting for a better world, whose ideals stirred generations of oppressed peoples; the same man, who could not see the people right beneath his feet whom his cry of "equality" left out. These are not two men; they are held at once in one and the same head. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there someone, or is it yourself, who speaks the most correct, most noble words, then turns around and does something that does not match them, perhaps without even noticing?\n\nWhen that happens, what will you do? Will you believe everything because the words sound fine, or will you look at what was actually done? And dare you turn and look at yourself: do you have an "equality" you cry loudly that does not reach certain people?',
      },
      deliverGoal: 'N11 close — 评价 Wilson (真心理想鼓舞几代人 vs 看不见被自己排除的人/同一颗脑袋) + transfer「今天你身边或你自己嘴上高尚转身做的对不上的人 (也许自己没察觉)」+ 你会因为话好听全信还是看他真做了什么/敢不敢回头看自己',
      engagementHook: '一个真心想做好事的人，看不见自己脚下被「平等」排除的人——你会怎么评价他？今天你身边那个嘴上高尚、转身做的对不上的人（也许就是你自己），你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Gavrilo Princip (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var principLens = {
  id: 'gavrilo-princip',
  name: 'Gavrilo Princip',
  nameCn: '加夫里洛·普林西普',
  role: 'lonely-mediator',
  perspectiveTag: 'sarajevo-assassin',
  icon: '🔫',
  description: {
    cn: '波斯尼亚的塞族青年，1894 年生在一个穷苦农家，从小体弱多病。19 岁那年，他相信只有暴力才能把家乡从奥匈帝国手里解放出来。1914 年 6 月 28 日上午，他在萨拉热窝街头开了两枪，打死了奥匈帝国的王储斐迪南大公和他的妻子。他以为自己点的是一把民族解放的火，没想到点着的是一场吞掉一千七百万人的世界大战。他没活着看到结局：1918 年，战争还没打完，他就死在狱中，死于肺结核，年仅 23 岁。这一遍让你从一个改变了世界、又被世界碾碎的年轻人内部，看「一个人的选择」和「整个时代的连锁」之间，那条吓人的距离。',
    en: 'A young Bosnian Serb, born 1894 to a poor farming family, sickly from childhood. At nineteen he believed only violence could free his homeland from Austria-Hungary. On the morning of June 28, 1914, on a Sarajevo street, he fired two shots and killed the heir of Austria-Hungary, Archduke Ferdinand, and his wife. He thought he was lighting a fire of national liberation; he did not imagine he was lighting a world war that would swallow seventeen million people. He did not live to see the end: in 1918, before the war was over, he died in prison of tuberculosis, only 23 years old. This pass lets you watch, from inside a young man who changed the world and was then crushed by it, the terrifying distance between "one person\'s choice" and "an entire age\'s chain reaction."',
  },
  storyboard: [
    {
      id: 'pri-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1914 年 6 月 28 日，上午，萨拉热窝。我 19 岁，口袋里有一把手枪。\n\n我刚才已经失手了一次。早上有人朝那辆敞篷车扔了炸弹，没炸死车里的人。我们这帮人四散逃开，我以为今天完了，正失魂落魄地站在街角。\n\n就在这时，那辆车又开了过来——司机走错了路，正要倒车，竟然停在我面前几步远。\n\n车上坐着的，是奥匈帝国的王储斐迪南大公和他妻子。\n\n我几乎不敢相信。我掏出枪，走上前，开了两枪。\n\n我是 Gavrilo Princip（加夫里洛·普林西普）。我以为我打死的，是压在我家乡头上的那个帝国的象征。我以为我点的，是一把解放的火。\n\n这一遍，你站在我开枪那一刻的位置。然后你跟我一起，眼睁睁看着那两枪，怎么一步步变成了一场我从没想过、也根本控制不了的世界大战。',
        en: 'June 28, 1914, morning, Sarajevo. I am nineteen, with a pistol in my pocket.\n\nA moment ago I had already failed once. Earlier someone threw a bomb at that open car and did not kill the people inside. Our group scattered and fled, and I thought the day was lost, standing dazed on a street corner.\n\nJust then the car came by again. The driver had taken a wrong turn and, trying to back up, stopped a few steps in front of me.\n\nIn the car sat the heir of Austria-Hungary, Archduke Ferdinand, and his wife.\n\nI could hardly believe it. I drew my pistol, stepped forward, and fired two shots.\n\nI am Gavrilo Princip. I thought what I had killed was the symbol of the empire that pressed down on my homeland. I thought I was lighting a fire of liberation.\n\nThis pass puts you where I stood at the moment I fired. Then, with me, you watch those two shots become, step by step, a world war I never imagined and could not control at all.',
      },
      deliverGoal: 'N1 hook — 1914.6.28 上午萨拉热窝 19 岁口袋有枪 + 早上炸弹失手逃散 + 司机走错路车停面前 + 斐迪南夫妇 + 开两枪 + Princip 自我介绍 (以为打死帝国象征/点解放的火) + 这一遍视角 (看两枪变成控制不了的世界大战)',
      engagementHook: '一个司机走错路，把王储的车停在了我面前几步远。我开了两枪，从此世界变了。你信「历史可能由一个小到不能再小的偶然决定」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pri-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我为什么要开那两枪。\n\n我 1894 年生在波斯尼亚一个穷山村的农家。我家有九个孩子，六个没活到成年。我从小体弱，得过肺结核，瘦得风一吹就倒。\n\n我的家乡波斯尼亚，那时被奥匈帝国统治。我们是塞族人，说塞尔维亚语，可我们的土地归一个说德语、维也纳来的皇帝管。\n\n我读了一点书，接触到当时年轻人里流行的想法：南边的斯拉夫人（塞族、克族这些）应该联合起来，赶走奥匈帝国，建立一个自己的国家。我加入了一个秘密的青年组织。\n\n我们这些人，没钱、没军队、没地位。我们觉得，能用的，只有一件东西：暗杀。打掉帝国的大人物，让全世界听见我们的声音。\n\n你看，我那时的逻辑很简单，也很危险：温和的办法解决不了的事，就用一颗子弹解决。',
        en: 'First, who I am, so you understand why I fired those two shots.\n\nI was born in 1894 to a farming family in a poor mountain village in Bosnia. My family had nine children; six did not live to grow up. I was frail from childhood, had tuberculosis, thin enough that a wind might blow me over.\n\nMy homeland, Bosnia, was then ruled by Austria-Hungary. We were Serbs; we spoke Serbian, yet our land was governed by an emperor in Vienna who spoke German.\n\nI read a little, and met the idea then popular among the young: the South Slavs, Serbs, Croats and the rest, should unite, drive out Austria-Hungary, and build a country of their own. I joined a secret youth group.\n\nWe had no money, no army, no standing. The only thing we felt we could use was one thing: assassination. Strike down the great men of the empire and make the whole world hear our voice.\n\nYou see, my logic then was simple, and very dangerous: what gentle means could not solve, a single bullet would solve.',
      },
      deliverGoal: 'N2 setup — Princip 出身 (1894 波斯尼亚穷山村农家/九孩六夭/体弱肺结核) + 波斯尼亚被奥匈统治 (塞族说塞语却归维也纳德语皇帝管) + 加入秘密青年组织 (南斯拉夫人联合赶走奥匈建国) + 没钱没军队只有暗杀 + 「温和办法解决不了就用一颗子弹」危险逻辑',
      engagementHook: '我们没钱、没军队、没地位，觉得唯一能用的就是暗杀。一个走投无路的弱者相信「只有暴力能让人听见自己」——你能理解这种逻辑吗，又觉得它危险在哪？',
      expectsRealAnswer: false,
    },
    {
      id: 'pri-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得诚实说一句：我不是一个深谋远虑的政治家。我只是个 19 岁、得了肺结核、满脑子悲愤的穷孩子。\n\n这就是为什么这一遍把我放在「调停者」这个位置，其实有点反讽。我从没想过「调停」什么。恰恰相反，我以为我做的是「点火」——用一声巨响，逼出一场我想要的变革。\n\n可历史最吓人的地方就在这儿：我这种最没分量的人，按下的那个开关，连着的却是整个欧洲的火药库。\n\n我不知道，奥匈背后站着德国；我不知道，塞尔维亚背后站着俄国；我不知道，俄国背后站着法国，法国对面又有英国。我不知道这些大国早就用一张张密约，把自己绑成了两串炸药。\n\n我只看见眼前那个压迫我家乡的帝国，和我口袋里那把枪。\n\n我那时不懂的事，现在你懂了：一个人按下开关，和这个开关后面接着多大的炸药，可能完全是两回事。',
        en: 'Let me be honest: I was no far-seeing statesman. I was only a poor boy of nineteen, ill with tuberculosis, his head full of grief and rage.\n\nThis is why placing me in the "mediator" seat for this pass is, in truth, a little ironic. I never thought of "mediating" anything. Quite the opposite, I thought I was lighting a fuse, forcing with one loud blast the change I wanted.\n\nBut here is the most frightening thing about history: a person of the least weight, like me, pressed a switch that was wired to the whole powder magazine of Europe.\n\nI did not know that Germany stood behind Austria-Hungary; I did not know that Russia stood behind Serbia; I did not know that France stood behind Russia, and across from France stood Britain. I did not know that the great powers had long bound themselves, treaty by treaty, into two strings of explosives.\n\nI saw only the empire pressing on my homeland, and the pistol in my pocket.\n\nWhat I did not understand then, you understand now: a person pressing a switch, and how much explosive is wired behind that switch, can be two completely different things.',
      },
      deliverGoal: 'N3 setup — Princip 不是政治家是 19 岁肺结核穷孩子 + 「调停者」位置的反讽 (他想点火不想调停) + 历史最吓人 (最没分量的人按的开关连着整个欧洲火药库) + 联盟体系层层 (奥匈-德国/塞-俄/俄-法/法-英密约绑成两串炸药) + 他只看见眼前帝国和枪 + 「按开关和开关后接多大炸药是两回事」',
      engagementHook: '我只看见眼前压迫我家乡的帝国，和我口袋里的枪。我不知道这把枪后面，连着整个欧洲的火药库。「一个人按下开关」和「开关后接着多大炸药」——你觉得这两件事，该怎么分清责任？',
      expectsRealAnswer: false,
    },
    {
      id: 'pri-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n回到那家小店门口。那辆车走错路停在你面前。车上是你恨了一辈子的那个帝国的王储。\n\n你心跳得厉害。你知道，这一枪开下去，你大概率出不来了——你会被抓、被审、可能被处死。你才 19 岁。\n\n可你也想：这是天赐的机会。早上失手，下午老天又把他送到你面前。如果你现在退缩，你这辈子都会恨自己懦弱。\n\n你脑子里翻来覆去的，是你家乡被统治的样子，是你那些信「为自由可以流血」的同伴。你告诉自己：我这一枪，是为了千千万万被压迫的人。\n\n你掏出枪。\n\n停在这一刻。你得想清楚一件事：你确信你打死一个人，就能让你的民族自由吗？还是说，你只是太愤怒、太年轻、太想做点什么——以至于你没法再忍着什么都不做？\n\n这两种动机，你分得清吗？',
        en: 'Now you are me.\n\nBack at the door of that small shop. The car has taken a wrong turn and stopped before you. In it sits the heir of the empire you have hated all your life.\n\nYour heart pounds. You know that if you fire, you will most likely not come out, you will be seized, tried, perhaps executed. You are only nineteen.\n\nBut you also think: this is a gift of fate. You failed in the morning, and in the afternoon heaven has sent him before you again. If you flinch now, you will hate your own cowardice for the rest of your life.\n\nTurning over in your head is the sight of your homeland under rule, and your comrades who believe "for freedom one may bleed." You tell yourself: this shot is for the countless oppressed.\n\nYou draw the pistol.\n\nStop at this moment. You must think one thing through: are you certain that killing one man will set your people free? Or are you only too angry, too young, too desperate to do something, so that you can no longer bear to do nothing?\n\nThose two motives, can you tell them apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 回到小店门口车停面前 + 你知道开枪大概率出不来 (被抓审处死/才 19 岁) + 但天赐机会早上失手下午又来/退缩一辈子恨自己 + 告诉自己为千万被压迫的人 + 掏枪 + 自我拷问 (确信杀一个人能让民族自由吗/还是只是太愤怒太年轻太想做点什么/两种动机分得清吗)',
      engagementHook: '你确信打死一个人就能让你的民族自由吗，还是你只是太愤怒、太年轻、太想做点什么，以至于忍不住要动手？这两种动机，你分得清吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pri-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我开枪之后，世界没有按我想的走。\n\n我以为最坏的结果是：我被抓，我的民族多了一个烈士，事情慢慢平息。\n\n可那两枪之后发生的事，超出我所有想象。\n\n奥匈帝国把这次暗杀，当成了一直想要的借口。他们认定塞尔维亚在背后撑腰，向塞尔维亚发了一份故意苛刻、根本没法全部接受的最后通牒。一个月后，1914 年 7 月底，奥匈向塞尔维亚宣战。\n\n然后那串炸药一节一节炸开：俄国为保护塞尔维亚动员军队，德国向俄国和法国宣战，德国为打法国借道比利时，英国又因此向德国宣战。\n\n到 8 月初，几乎所有欧洲大国都进了战争。\n\n我一个穷孩子的两枪，竟然把整个欧洲点着了。\n\n这一刻我才隐约明白：我以为我在「点火」，可火点着以后烧多大、烧多久、烧死多少人，根本不归我管了。',
        en: 'After I fired, the world did not go the way I imagined.\n\nI thought the worst outcome was this: I am caught, my people gain one more martyr, and the matter slowly settles.\n\nBut what happened after those two shots was beyond all my imagining.\n\nAustria-Hungary took the assassination as the pretext it had long wanted. Convinced that Serbia was the backer, it sent Serbia an ultimatum deliberately so harsh that it could not possibly be fully accepted. A month later, at the end of July 1914, Austria-Hungary declared war on Serbia.\n\nThen that string of explosives went off, link by link: Russia mobilized to protect Serbia; Germany declared war on Russia and France; Germany, to strike France, marched through Belgium; and Britain, for that, declared war on Germany.\n\nBy early August nearly every great power of Europe was in the war.\n\nMy two shots, the shots of one poor boy, had set all of Europe alight.\n\nOnly in that moment did I dimly understand: I thought I was "lighting a fire," but how big it burned, how long, how many it killed, was no longer in my hands at all.',
      },
      deliverGoal: 'N5 story — 暗杀后世界没按 Princip 想的走 + 奥匈把暗杀当一直想要的借口 (认定塞尔维亚撑腰/苛刻最后通牒) + 1914.7 底奥匈对塞宣战 + 联盟连锁 (俄动员/德对俄法宣战/德借道比利时/英对德宣战) + 8 月初几乎所有欧洲大国进战 + 「点火后烧多大烧死多少根本不归我管」',
      engagementHook: '我以为最坏不过是我被抓、多个烈士。可那两枪点着以后，烧多大、烧死多少人，根本不归我管了。当一件事一旦启动就脱离你的控制，你还该为它负全责吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pri-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你看清那串炸药到底是怎么搭起来的，因为这才是真正杀人的东西，不只是我那两枪。\n\n那两枪只是火星。真正的炸药，是几十年里欧洲各大国互相结的盟约，和他们在全世界抢殖民地、抢市场、抢军备攒下的仇与怕。\n\n德、英、法、俄这些国家，早就把全球瓜分得差不多了——非洲、亚洲被他们一块块切走，做成自己的殖民地。谁多抢一块，别国就紧张一分。他们一边在远方的殖民地上较劲，一边在欧洲拼命造军舰、扩陆军。(这场抢殖民地的竞赛有多疯，你跑过 scramble-for-africa 那个 Topic 就懂。)\n\n为了壮胆，他们两两结盟，签下「你被打我就帮你打」的密约。于是整个欧洲，被这些密约缝成了两大块，谁动一下，整块都得动。\n\n所以你看：我，一个 19 岁的塞族穷孩子，按下的那个开关，连着的是几十年帝国主义攒下的全部张力。\n\n我点的是火星。可炸药，是他们自己堆好的。',
        en: 'I want you to see clearly how that string of explosives was built, for this is the real killer, not just my two shots.\n\nThose two shots were only a spark. The real explosive was decades of alliances the European powers tied among themselves, and the hatred and fear they stored up while seizing colonies, markets, and arms across the whole world.\n\nGermany, Britain, France, Russia had long carved up most of the globe, slicing away Africa and Asia piece by piece into their own colonies. Whenever one seized a little more, the others grew a little more anxious. They strained against each other in distant colonies while racing at home to build warships and swell their armies. (How mad that race for colonies grew, you will know if you have run the scramble-for-africa topic.)\n\nTo steady their nerves they paired off into alliances, signing secret pacts of "if you are struck, I will fight for you." And so all of Europe was sewn by those pacts into two great blocks, and if one part moved, the whole had to move.\n\nSo you see: I, a poor Serb boy of nineteen, pressed a switch wired to all the tension that decades of imperialism had stored up.\n\nI lit the spark. But the explosive, they piled up themselves.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 两枪只是火星/真正炸药是几十年盟约 + 帝国主义瓜分全球 (非洲亚洲被切成殖民地/谁多抢别国就紧张) → scramble-for-africa-1884 跨 Topic 锚 + 军备竞赛 + 两两结盟密约缝成两大块 (谁动整块都动) + 「我点火星/炸药是他们自己堆好的」',
      engagementHook: '我点的只是火星，可炸药是他们几十年抢殖民地、签密约自己堆好的。一场大灾难，到底该怪那个点火的人，还是怪那些把炸药堆到顶的人？',
      expectsRealAnswer: false,
    },
    {
      id: 'pri-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没逃掉。开完枪我就被当场抓住，差点被愤怒的人群打死。\n\n审判时有个问题：按奥匈的法律，判死刑得满 20 岁。而我犯案那天，离我 20 岁生日还差几个星期。\n\n就因为这几个星期，我逃过了绞刑，改判 20 年监禁。\n\n可这「逃过死刑」，是更慢、更难受的死法。他们把我关进一座要塞监狱，单人牢房，又冷又潮。我本来就有肺结核，在那种地方，病只会越来越重。\n\n你想想这个反差：外面，我点起的那场战争，正在用机关枪和毒气一天杀掉成千上万人。里面，我一个人，在牢房里慢慢烂掉。\n\n我有大把的时间想一件事：我以为我做了一件英雄的事。可如果有人告诉我，因为我那两枪，已经死了几百万人——我还能不能说，我做得对？\n\n这个问题，我一个人在牢里，想了四年。',
        en: 'I did not escape. The moment I fired I was seized on the spot, and an angry crowd nearly beat me to death.\n\nAt the trial there was a question: under Austria-Hungary\'s law, a death sentence required you to be twenty. And on the day of my crime, I was a few weeks short of my twentieth birthday.\n\nBecause of those few weeks I escaped the gallows and was sentenced instead to twenty years in prison.\n\nBut this "escaping death" was a slower, more painful way to die. They shut me in a fortress prison, a single cell, cold and damp. I already had tuberculosis, and in such a place the illness could only grow worse.\n\nThink of the contrast: outside, the war I had lit was killing thousands a day with machine guns and gas. Inside, I, alone in a cell, was slowly rotting away.\n\nI had a great deal of time to think on one thing: I believed I had done a heroic deed. But if someone told me that because of my two shots, millions had already died, could I still say I had done right?\n\nThat question I turned over alone in my cell for four years.',
      },
      deliverGoal: 'N7 story — Princip 当场被抓差点被人群打死 + 审判 (奥匈法律死刑需满 20 岁/犯案差几星期没满 20) + 逃过绞刑改判 20 年 + 但更慢更难受的死法 (要塞单人牢房冷潮/肺结核加重) + 反差 (外面战争一天杀上万/里面他一人慢慢烂) + 牢里四年想一个问题 (死了几百万人还能说做得对吗)',
      engagementHook: '外面，我点起的战争一天杀掉上万人；里面，我一个人在牢里慢慢烂掉。如果有人告诉我因为我那两枪死了几百万人，我还能说自己做得对吗？这个问题，你替我答得出吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pri-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没能活着等到答案。\n\n1918 年 4 月，战争还差几个月才结束，我死在了那座要塞监狱里。肺结核拖垮了我，最后我瘦得只剩几十斤，一条胳膊都因为骨结核被截掉了。我死的时候 23 岁。\n\n我没看到战争怎么结束。没看到我的家乡后来怎么样。没看到我点起的这场大火，最后烧成了什么。\n\n说一句最难承认的话：我用一条命，外加几百万条别人的命，换来的「解放」，到底实现了没有？\n\n战后，南边的斯拉夫人确实建了一个国家，叫南斯拉夫——某种意义上，这是我和同伴想要的。可这个国家，几十年后又因为民族矛盾自己打成一团、四分五裂。\n\n我用暗杀和战争想解决的那个问题，也就是不同民族怎么和平共处，根本没被一颗子弹解决。它只是被推迟了，然后用更多的血，反复回来找账。\n\n这是我留给你最沉的一句话：有些问题，子弹只会让它变大，不会让它消失。',
        en: 'I did not live to wait for the answer.\n\nIn April 1918, a few months before the war ended, I died in that fortress prison. Tuberculosis had worn me down; in the end I was wasted to skin and bone, and one arm had been amputated because the disease reached the bone. I was 23 when I died.\n\nI did not see how the war ended. Did not see what became of my homeland. Did not see what the great fire I lit finally burned into.\n\nLet me say the hardest thing to admit: the "liberation" I bought with one life, plus millions of other lives, did it ever come true?\n\nAfter the war the South Slavs did build a country, called Yugoslavia, in a sense the thing my comrades and I had wanted. But decades later that country tore itself apart again over the same ethnic hatreds, and broke into pieces.\n\nThe problem I tried to solve with assassination and war, how different peoples can live together in peace, was not solved by one bullet at all. It was only delayed, and then came back again and again to collect, in more blood.\n\nThis is the heaviest thing I leave you: some problems, a bullet only makes larger; it does not make them disappear.',
      },
      deliverGoal: 'N8 story — Princip 1918.4 死于要塞监狱 (肺结核/截肢/23 岁) + 没看到战争结束/家乡后来/大火烧成什么 + 最难承认 (一条命加几百万命换的解放实现了没) + 战后南斯拉夫建国某种意义实现/几十年后民族矛盾四分五裂 + 「不同民族和平共处的问题没被一颗子弹解决只被推迟用更多血回来找账」+ 「子弹只会让问题变大不会让它消失」',
      engagementHook: '我用一条命加几百万条命换来的「解放」，到底实现了没有？我想用子弹解决的问题，根本没被解决，只是用更多的血反复回来找账。你信「有些问题，子弹只会让它变大」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pri-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我个人，拉远到我留下的那个更大的问题。\n\n一百多年来，人们一直在吵：第一次世界大战，到底该怪谁？\n\n有人说怪我——是我那两枪点的火。可你已经看见了，我只是个火星。真正的炸药，是那些大帝国几十年攒下的张力。\n\n这就引出一个一直没答案的难题：当一场灾难是「一个偶然的小动作」加「一个早就绷紧的大结构」一起造成的，责任该怎么分？\n\n是怪那个碰巧点火的小人物，还是怪那些把炸药堆到顶、又互相绑成两串的大国？\n\n这个问题，不只属于 1914 年。今天也一样：一句失控的话引爆网上一场风暴、一个小冲突升级成两个国家开战——表面看是某个「点火的人」，可底下往往早就堆着没人去拆的炸药。\n\n我留下的，不是一个答案。是一个直到今天还在问的问题：到底是火星更可怕，还是那堆没人愿意拆的炸药更可怕？',
        en: 'Pull the lens back from me alone, to the larger question I left behind.\n\nFor more than a hundred years people have argued: the First World War, who is to blame?\n\nSome say me, mine were the shots that lit the fire. But you have already seen that I was only a spark. The real explosive was the tension the great empires had stored up over decades.\n\nThis raises a question still without an answer: when a catastrophe is made by "a chance small act" plus "a structure long pulled taut," how is the blame to be divided?\n\nIs it the small figure who happened to strike the spark, or the great powers who piled the explosive to the top and bound themselves into two strings?\n\nThis question does not belong to 1914 alone. It is the same today: one careless line sets off a storm online, a small clash escalates into two countries at war. On the surface it looks like some "person who lit it," yet beneath there is often explosive long piled up that no one went to defuse.\n\nWhat I leave you is not an answer. It is a question still being asked today: which is more frightening, the spark, or the pile of explosive no one is willing to defuse?',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 百年争论一战该怪谁 + Princip 只是火星/真正炸药是大帝国几十年张力 + 难题 (偶然小动作 + 早绷紧的大结构/责任怎么分/怪点火小人物还是怪堆炸药的大国) + 不只属于 1914 (今天一句话引爆网络风暴/小冲突升级成开战) + 「火星更可怕还是没人拆的炸药更可怕」',
      engagementHook: '一场灾难是「一个偶然的小动作」加「一个早就绷紧的大结构」一起造成的——责任该怎么分？火星更可怕，还是那堆没人愿意拆的炸药更可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'pri-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是被时代利用的小棋子，谈不上「罪魁祸首」。我只是个 19 岁、得了肺结核、想救自己家乡的穷孩子。真正把世界推进战争的，是那些堆了几十年炸药、互相绑成两串的大帝国。我的两枪只是火星，没有那堆炸药，一颗子弹烧不出一场世界大战。\n\n另一种说法：我仍然要为我的选择负责。再大的结构，也是我自己扣下了扳机。我以为暴力能解放我的民族，可暴力打开的，是一个吞掉一千七百万人、连我自己都被碾碎的口子。我想用一颗子弹解决的事，最后用几百万人的血都没解决。\n\n这两边不是「无辜加有罪」。是同一件事的两面——我既是被巨大结构推着走的小人物，又是那个亲手扣下扳机、必须为后果负责的人。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a small pawn used by the age, hardly the "chief culprit." I was only a poor boy of nineteen, ill with tuberculosis, trying to save his homeland. What truly pushed the world into war were the great empires that had piled explosive for decades and bound themselves into two strings. My two shots were only a spark; without that pile of explosive, one bullet could never burn a world war.\n\nThe other view: I am still responsible for my choice. However large the structure, it was I myself who pulled the trigger. I thought violence could free my people, but what violence opened was a wound that swallowed seventeen million and crushed even me. The thing I meant to solve with one bullet was not solved by millions of lives\' blood in the end.\n\nThese are not "innocent and guilty." They are two faces of one thing. I was both a small figure pushed by a vast structure, and the one who pulled the trigger with his own hand and must answer for the consequences.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (被时代利用的小棋子/19 岁肺结核穷孩子/真正推世界进战的是大帝国炸药/我只是火星) / 另一种说法 (仍要为选择负责/再大结构也是我扣扳机/暴力打开吞 1700 万的口子/一颗子弹解决不了的事几百万血也没解决) / 同一件事两面 / 想 30 秒',
      engagementHook: '被时代利用的小棋子，和必须为自己扣下扳机负责的人——是同一个我。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'pri-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一个 19 岁、走投无路的穷孩子，相信暴力是唯一的出路，开了两枪，结果点着了一场吞掉一千七百万人、最后也碾碎了他自己的大战。他是该被同情的小棋子，还是该被追责的扣扳机的人？这两件事不是分开的，是同时成立的。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有这样的时刻：你气到极点，觉得「只有用最激烈的方式才能解决问题」——发一条狠话、删一个人、动一次手？\n\n那时候，你会停下来想一想吗：我以为我在「解决问题」，可我点的这把火，烧起来以后还归不归我管？我想解决的那个问题，是会被这把火解决，还是只会被烧得更大？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nA poor boy of nineteen, cornered, who believed violence was the only way out, fired two shots, and so lit a war that swallowed seventeen million and crushed him too. Is he a small pawn to be pitied, or the one who pulled the trigger and must answer for it? These two are not separate; they hold true at once. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there a moment when you are angry to the limit and feel "only the most extreme way can solve this", sending one vicious message, cutting someone off, raising a hand?\n\nWhen that happens, will you stop and think: I believe I am "solving the problem," but the fire I light, once it burns, will it still be in my hands? The problem I mean to solve, will this fire solve it, or only burn it larger?',
      },
      deliverGoal: 'N11 close — 评价 Princip (19 岁走投无路相信暴力是唯一出路/点着吞 1700 万的战又碾碎自己/该同情的小棋子还是该追责的扣扳机者/同时成立) + transfer「今天你气到极点觉得只有最激烈方式能解决 (发狠话/删人/动手)」+ 你会停下想吗 (点的火烧起来归不归我管/问题会被解决还是烧得更大)',
      engagementHook: '一个走投无路的孩子，相信暴力是唯一出路——你会怎么评价他？今天你气到极点、觉得「只有最激烈的方式才能解决」的时候，你会停下来想想，那把火烧起来还归不归你管吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 塞内加尔狙击兵 / Senegalese Tirailleur (receiving-end) — DEFAULT
// composite — 角色为合成,基于真实塞内加尔狙击兵史实
// ═══════════════════════════════════════════════════════════════════════

export var tirailleurLens = {
  id: 'senegalese-tirailleur-receiving-end',
  name: 'A Senegalese Tirailleur',
  nameCn: '一个塞内加尔狙击兵',
  role: 'receiving-end',
  perspectiveTag: 'colonial-soldier',
  icon: '🎖️',
  description: {
    cn: '一个合成的角色，叫他 Demba，根据真实的塞内加尔狙击兵（tirailleur）史实拼出来（具体姓名、家乡村子是叙事补充，史料确证的是这支部队的存在和他们的遭遇）。他大约 1895 年生在西非的法属塞内加尔，一辈子没见过欧洲。1914 年战争爆发，法国从它的非洲殖民地征兵，把成千上万像他这样的年轻人，运过几千公里的海，送进法国北部冰冷的战壕。他为一个统治着他家乡的国家流血，打一场跟他完全没关系的战争。这一遍，你从这场「为自由而战」的大战里，那些没人替他们记名字的非洲士兵这边，看 1914 到 1918。',
    en: 'A composite character, call him Demba, pieced together from the real history of the Senegalese tirailleurs (his particular name and home village are narrative additions; what the record confirms is the existence of these troops and what befell them). He was born around 1895 in French Senegal, in West Africa, and never in his life saw Europe. When war broke out in 1914, France conscripted from its African colonies, shipping tens of thousands of young men like him across thousands of kilometers of sea into the cold trenches of northern France. He bled for a country that ruled his homeland, in a war that had nothing to do with him. This pass lets you see 1914 to 1918 from the side of the African soldiers no one wrote names for, in this great war "for freedom."',
  },
  storyboard: [
    {
      id: 'tir-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我这辈子见过的最冷的地方，不是我家乡的旱季夜里，是法国北部一条灌满泥水的战壕。\n\n我叫 Demba。我大约 1895 年生在西非，那时候叫法属塞内加尔——意思是，我的家乡，归一个我从没见过的、远在欧洲的国家管。\n\n（我这个具体的人是合成的，名字和村子是叙事补充。但像我这样的人，真有几万个，真被送去了那条战壕。）\n\n我从小听得见海，可我从没想过有一天会渡过它。我不识法文，不知道德国在哪，更不知道什么叫「同盟国」「协约国」。\n\n可 1914 年，一场我完全听不懂的战争，从几千公里外，伸手把我拽了过去。\n\n这一遍，你站在我这里看这场大战。不是从下令的人那边看，不是从扣扳机的人那边看。是从一个被拽进别人的战争、替别人去死的人这边看。',
        en: 'The coldest place I ever saw in my life was not a dry-season night in my homeland, but a trench in northern France flooded with mud and water.\n\nMy name is Demba. I was born around 1895 in West Africa, which they then called French Senegal, meaning my homeland was ruled by a country I had never seen, far away in Europe.\n\n(This particular me is a composite; the name and village are narrative additions. But men like me truly numbered in the tens of thousands, and were truly sent to that trench.)\n\nI grew up hearing the sea, yet I never thought that one day I would cross it. I could not read French, did not know where Germany was, still less what "the Central Powers" or "the Allies" meant.\n\nBut in 1914 a war I could not understand at all reached across thousands of kilometers and pulled me in.\n\nThis pass, you stand where I stand and look at this great war. Not from the side of those who gave the orders, not from the side of those who pulled the triggers. From the side of someone pulled into another\'s war, to die for another.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 最冷的地方是法国北部灌满泥水的战壕 + Demba 自我介绍 (c.1895 西非法属塞内加尔/家乡归没见过的欧洲国家管) + anti-fab 括号短句 (合成/名字村子是叙事补充/但几万人真被送去) + 不识法文不知德国在哪不懂同盟协约 + 1914 一场听不懂的战争把他拽过去 + 这一遍从被拽进别人战争替别人去死的人看',
      engagementHook: '我不识法文，不知道德国在哪，不懂什么叫同盟国协约国——可一场我完全听不懂的战争，从几千公里外把我拽了过去。你能想象「被拖进一场跟你毫无关系的战争」是什么感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'tir-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我被拽走之前的日子，你才懂后来那条战壕对我意味着什么。\n\n我家在一个靠海的村子。我们种花生、放牲口、捕鱼。日子穷，但那是我的土地、我的家人、我听得懂的语言。\n\n可这片土地，不归我们做主。几十年前，法国和别的欧洲国家，在一张非洲地图上用尺子画线，把整个非洲切成一块块，分给自己。我们这一块，归了法国。(他们怎么用一把尺子在地图上划走整个非洲，你跑过 scramble-for-africa 那个 Topic 就懂。)\n\n从那以后，法国官员管着我们：收税、定规矩、需要劳力的时候征人。\n\n你要知道一件让人难受的事：在更早的时候，西非这片土地上曾经有过自己强大的帝国，有自己的城市、商路、学者。(那段我们自己当家的历史，在 mali-empire 那个 Topic 里。) 可到了我这一代，我们成了别人地图上的一块颜色。\n\n所以当法国说「我们需要兵」的时候，我没有说不的权利。',
        en: 'First, let me tell you my life before I was pulled away, so you understand what that trench later meant to me.\n\nMy home was a village by the sea. We grew peanuts, herded animals, fished. Life was poor, but it was my land, my family, a language I understood.\n\nYet this land was not ours to rule. Decades earlier, France and the other European countries drew lines with a ruler on a map of Africa, cut the whole continent into pieces, and divided it among themselves. Our piece went to France. (How they drew away the whole of Africa with a ruler on a map, you will know if you have run the scramble-for-africa topic.)\n\nFrom then on French officials governed us: collecting taxes, setting rules, conscripting men when they needed labor.\n\nHere is a hard thing you should know: in earlier times this land of West Africa had once held powerful empires of its own, with its own cities, trade roads, and scholars. (That history of when we ruled ourselves is in the mali-empire topic.) But by my generation we had become a patch of color on someone else\'s map.\n\nSo when France said "we need soldiers," I had no right to say no.',
      },
      deliverGoal: 'N2 setup — Demba 被拽走前的日子 (靠海村子种花生放牲口捕鱼/穷但是自己的土地家人语言) + 但土地不归自己做主 (欧洲用尺子在地图划线切非洲/这块归法国) → scramble-for-africa-1884 跨 Topic 锚 + 法国官员收税定规矩征人 + 西非曾有强大帝国 (城市商路学者) → mali-empire-1235 跨 Topic 锚 + 到这代成别人地图上一块颜色 + 法国要兵没有说不的权利',
      engagementHook: '更早的时候，西非这片土地上有过自己强大的帝国；到我这一代，我们成了别人地图上的一块颜色。当法国说「我们需要兵」，我没有说不的权利。「身不由己」到这个地步，你能想象吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'tir-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我是怎么被弄上船的，我说给你听。\n\n法国在它的非洲殖民地征兵，组成一支部队，叫「塞内加尔狙击兵」（tirailleurs sénégalais）。名字里有「塞内加尔」，但兵其实来自整个法属西非。\n\n征兵的方式说好听是「招募」，说实话很多时候是强征：每个村子摊派人头，村长得交出多少个年轻人。家里有钱有势的能逃掉，逃不掉的，就是我们这种穷人家的孩子。\n\n他们给我一身军装，一杆枪，几句听不太懂的法语口令。然后把我们成百上千地装上船，运过几千公里的大海。\n\n船上又闷又脏，很多人没到欧洲就病死了。我第一次离开家，第一次看见看不到边的海，第一次明白：我可能再也回不去了。\n\n你想想这个处境：我要去为一个统治我家乡的国家打仗，去打一群我从没见过、跟我无冤无仇的德国人。没有人问过我愿不愿意。\n\n我那时心里反复在想一个问题：这到底是谁的战争？凭什么要我去死？',
        en: 'Let me tell you how I was put on the ship.\n\nFrance conscripted from its African colonies and formed a corps called the Senegalese tirailleurs. The name says "Senegal," but the soldiers in fact came from all of French West Africa.\n\nThe way of recruiting sounded like "enlistment," but in truth it was often forced: each village was given a quota, and the chief had to hand over so many young men. Families with money and power could escape it; those who could not were the children of poor families like mine.\n\nThey gave me a uniform, a rifle, and a few French commands I barely understood. Then they loaded us by the hundreds onto ships and carried us across thousands of kilometers of sea.\n\nThe ships were stifling and filthy; many died of sickness before reaching Europe. It was my first time leaving home, my first time seeing a sea with no far shore, my first time understanding: I might never go back.\n\nThink of my situation: I was to fight for a country that ruled my homeland, against a people of Germans I had never seen and had no quarrel with. No one had asked whether I was willing.\n\nThe question that turned over in me again and again was this: whose war is this, really? By what right must I die in it?',
      },
      deliverGoal: 'N3 setup — 塞内加尔狙击兵 (tirailleurs sénégalais/兵来自整个法属西非) + 征兵说招募实为强征 (村子摊派人头/有钱有势逃掉/穷人孩子逃不掉) + 给军装枪听不懂的法语口令 + 装船过几千公里海 (闷脏没到欧洲就病死) + 第一次离家看不到边的海明白回不去 + 处境 (为统治家乡的国家打没冤仇的德国人/没人问愿不愿) + 「这到底是谁的战争凭什么要我去死」',
      engagementHook: '我要去为一个统治我家乡的国家打仗，打一群我从没见过、跟我无冤无仇的德国人，没有人问过我愿不愿意。「这到底是谁的战争，凭什么要我去死」——这个问题，你替我想得明白吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'tir-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你站在法国北部一条战壕里，深到没过头顶，泥水到膝盖。这是 1916 年，凡尔登附近，欧洲打得最惨的几场仗之一。\n\n天冷到骨头里。你来自终年炎热的西非，你的身体根本不认识这种冷。你身边好几个同乡，没死在炮火里，死在了冻和病里。\n\n对面是德国人的机关枪和铁丝网。军官吹哨子，你就得爬出战壕，往那片绞肉机一样的开阔地冲。冲过去，十个里活不下来几个。\n\n而你心里还压着一件更难受的事：你听说，殖民地的兵常常被派去打最危险、最容易死的那一段。因为在某些军官眼里，你们这些非洲兵的命，比欧洲士兵的命，要便宜。\n\n哨子要响了。你得做一个选择：往前冲，大概率死;不冲,可能当场被以「抗命」处置。\n\n停在这一刻。你为之去死的这个「自由」「民主」，里面，到底有没有你？',
        en: 'Now you are me.\n\nYou stand in a trench in northern France, deep over your head, mud and water to your knees. It is 1916, near Verdun, one of the cruelest battles in all of Europe.\n\nThe cold reaches into your bones. You come from a West Africa hot all year round; your body simply does not know this cold. Several men from your own region died not in the shellfire but of cold and sickness.\n\nAcross the way are the Germans\' machine guns and barbed wire. The officer blows his whistle, and you must climb out of the trench and charge across that open ground like a grinder. Of those who go over, few in ten survive.\n\nAnd a harder thing weighs on you: you have heard that colonial troops are often sent to fight the most dangerous, deadliest stretch. Because in the eyes of certain officers, the lives of you African soldiers are cheaper than the lives of European soldiers.\n\nThe whistle is about to blow. You must make a choice: charge forward and most likely die; refuse, and you may be dealt with on the spot for "disobedience."\n\nStop at this moment. This "freedom," this "democracy" you are to die for, is there, in it, any place for you?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 站在法国北部战壕泥水到膝 + 1916 凡尔登附近最惨的仗之一 + 来自炎热西非身体不认识这种冷 (同乡死于冻和病) + 对面德国机关枪铁丝网/吹哨爬出冲绞肉机 (十个活不下几个) + 更难受 (殖民地兵被派打最危险段/非洲兵命比欧洲兵便宜) + 哨子要响 (冲大概率死/不冲被以抗命处置) + 自我拷问 (你去死的自由民主里有没有你)',
      engagementHook: '在某些军官眼里，我们非洲兵的命比欧洲兵便宜，所以常被派去打最容易死的那段。哨子要响了——你为之去死的这个「自由」「民主」，里面到底有没有你？',
      expectsRealAnswer: false,
    },
    {
      id: 'tir-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我活下来了。很多和我一起渡海的同乡，没有。\n\n四年里，几十万非洲士兵被送上欧洲的战场，几万人再也没回去。他们死在跟自己家乡没有任何关系的泥地里，很多人连个有名字的墓都没有。\n\n打仗的时候，法国需要我们，把我们叫「为法兰西流血的勇士」。报纸上、海报上，画着我们的脸，说我们勇敢、忠诚。\n\n可那些好话，是有保质期的。\n\n我也亲眼见过一些法国普通人，对我们是真心好——给我们送过吃的，帮过伤员。战壕里同生共死，肤色有时候也会被忘掉一会儿。这是真的，我不否认。\n\n但「打仗时是勇士，打完算什么」这个问题，一直没人正面回答我。我们用命换来的，到底是「平等的公民」，还是「好用的工具」？\n\n哨子响的时候，我们和法国士兵一样往前冲。可仗打完，我们会被当成一样的人吗？',
        en: 'I survived. Many of my countrymen who crossed the sea with me did not.\n\nOver four years, hundreds of thousands of African soldiers were sent to Europe\'s battlefields, and tens of thousands never went back. They died in mud that had nothing to do with their homeland, and many never got even a grave with a name.\n\nWhile the fighting lasted, France needed us and called us "brave men who bled for France." In the papers and on the posters they drew our faces and said we were brave, loyal.\n\nBut those fine words had an expiry date.\n\nI also saw with my own eyes some ordinary French people who were truly kind to us, who brought us food, who helped the wounded. In a trench, living and dying together, skin color was sometimes forgotten for a while. That too is true, and I will not deny it.\n\nBut the question "a hero in the war, and what after it" no one ever answered to my face. What we bought with our lives, was it "equal citizens," or "useful tools"?\n\nWhen the whistle blew, we charged forward just like the French soldiers. But when the war was over, would we be treated as the same kind of people?',
      },
      deliverGoal: 'N5 story — Demba 活下来同乡很多没有 + 四年几十万非洲兵上战场几万没回 (死在没关系的泥地/没有名字的墓) + 打仗时法国叫勇士 (报纸海报画脸夸勇敢忠诚) 但好话有保质期 + 平衡 (也见过真心好的法国普通人/战壕同生共死肤色被忘一会儿是真的) + 「打仗时勇士打完算什么没人正面答/用命换的是平等公民还是好用工具」',
      engagementHook: '打仗时法国叫我们「为法兰西流血的勇士」，可那些好话是有保质期的。我们用命换来的，到底是「平等的公民」，还是「好用的工具」？这个区别，重要吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'tir-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你看清那个最荒诞、也最戳心的地方。\n\n这场大战，每一边都在喊一个漂亮口号。法国说在为「自由」而战。那个美国总统威尔逊说，要让世界「为民主而安全」，还说每个民族都有权「自己当家做主」。\n\n我在战壕里，也听人翻译过这些话。我当时心里一震，差点笑出来，又差点哭出来。\n\n因为：我，正是那个最该听见「民族自决」的人。我的家乡塞内加尔，正被法国统治。如果「每个民族都有权自己当家」是真的——那第一个该获得自由的，难道不该是我的家乡吗？\n\n可现实是：我正穿着法国军装，举着法国的枪，为「自由」去死。而我为之流血的这个法国，回过头，依旧牢牢统治着我的家乡。\n\n同一面旗，同一个「自由」——它一边让我去送死，一边压着我自己的人民。我用我的命，去保卫一个不肯给我自由的「自由」。\n\n世上还有比这更荒诞的事吗？',
        en: 'I want you to see clearly the most absurd, and most piercing, thing of all.\n\nIn this great war every side cried a beautiful slogan. France said it fought for "freedom." That American president, Wilson, said the world must be made "safe for democracy," and that every people had the right to "govern themselves."\n\nIn the trench I heard these words translated too. Something jolted in me; I nearly laughed, and nearly wept.\n\nBecause I, of all people, was the one who most should have heard "self-determination." My homeland, Senegal, was ruled by France. If "every people has the right to govern themselves" was true, then should not the first to be freed be my own homeland?\n\nBut the truth was this: I wore a French uniform, raised a French rifle, and was dying for "freedom." And this France I bled for, in turn, went on ruling my homeland as firmly as ever.\n\nThe same flag, the same "freedom", on one hand it sent me to die, on the other it pressed down on my own people. With my life I defended a "freedom" that would not give me freedom.\n\nIs there anything in the world more absurd than this?',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 最荒诞戳心处 + 每边喊漂亮口号 (法国为自由战/Wilson 为民主而安全 + 民族自决每个民族自己当家) + Demba 在战壕听翻译差点笑差点哭 + 他正是最该听见民族自决的人 (家乡塞内加尔被法国统治/真的话第一个该自由的是他家乡) + 现实 (穿法军装举法枪为自由死/法国回头依旧统治他家乡) + 「同一面旗同一个自由一边让我送死一边压我人民/用命保卫不肯给我自由的自由」',
      engagementHook: '我正是那个最该听见「民族自决」的人——我的家乡正被法国统治。可我穿着法国军装，为「自由」去死，而这个法国回过头依旧统治着我的家乡。我用命去保卫一个不肯给我自由的「自由」。还有比这更荒诞的事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'tir-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '战争 1918 年结束了。然后呢？\n\n我前面问过：打完仗，我们算什么？答案，很快就来了。\n\n仗一打完，那些「勇士」的好话就凉了。我们这些活着回去的非洲兵，没有变成「平等的法国公民」。我们回到家乡，发现法国还是那个法国，殖民统治一点没松。该交的税照交，该受的管照受。\n\n更别说那些战后承诺的抚恤、待遇，很多都打了折，或者根本没兑现。我们用命证明了自己「够格」，可那扇「平等」的门，并没有为我们打开。\n\n威尔逊在巴黎和会上谈「民族自决」的时候，谈的是欧洲那些白人小民族。轮到我们这些非洲、亚洲的殖民地——德国丢的非洲殖民地，没有还给非洲人，而是被英法接着分了。我们这些为「自由」流过血的人，连开口要自由的资格都没被承认。\n\n我用四年和无数同乡的命，学到一件最冷的事：他们喊的「人人」，从一开始，就没把我们这些人算进去。',
        en: 'The war ended in 1918. And then?\n\nI asked before: after the war, what are we? The answer came soon enough.\n\nThe moment the fighting stopped, the fine words about "brave men" went cold. We African soldiers who returned alive did not become "equal French citizens." We came home to find France still the same France, the colonial rule not loosened in the least. The taxes still to be paid were paid; the rule still to be borne was borne.\n\nAnd the postwar pensions and benefits we had been promised, many were cut down, or never paid at all. We had proved with our lives that we were "worthy," yet the door of "equality" did not open for us.\n\nWhen Wilson spoke of "self-determination" at the Paris conference, he meant the white small peoples of Europe. When it came to us, the colonies of Africa and Asia, Germany\'s lost African colonies were not returned to Africans but parceled out among Britain and France. We who had bled for "freedom" were not even granted the standing to ask for it.\n\nWith four years and the lives of countless countrymen, I learned the coldest thing: the "all" they cried never, from the very start, counted people like us in.',
      },
      deliverGoal: 'N7 story — 战争 1918 结束然后呢 + 仗打完勇士好话凉了 (活着回的没变成平等法国公民/家乡殖民统治没松/税照交管照受) + 战后承诺抚恤待遇打折或没兑现 (用命证够格但平等的门没开) + Wilson 巴黎和会民族自决谈的是欧洲白人小民族 + 德属非洲殖民地没还非洲人被英法分 (为自由流血的人连开口要自由的资格都没被承认) + 「他们喊的人人从一开始就没把我们算进去」',
      engagementHook: '我用命证明了自己「够格」，可那扇「平等」的门，并没有为我打开。他们喊的「人人」，从一开始就没把我们这些人算进去。「用命证明自己值得平等」——这件事，本身公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'tir-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可故事没有停在「被辜负」这里。\n\n我和我的同乡，在欧洲那几年，看见了一些我们家乡看不到的东西。\n\n我们看见，原来那些自称「文明」、来教化我们的白人，自己打起仗来，用毒气、用机关枪，一天能杀掉上万自己人。原来他们也会害怕、会流血、会在炮火里哭着喊妈。原来「欧洲人天生高我们一等」这个我们从小被灌的说法，根本站不住。\n\n我们还学会了：原来一群组织起来的人，可以提出要求，可以争。\n\n这些种子，被我们这些活着回去的人，带回了非洲。\n\n几十年后，非洲一个接一个殖民地起来要独立。带头的人里，有不少正是当年打过这场仗、或听着我们这代人的故事长大的人。他们反过来，拿欧洲人自己喊的「自由」「平等」「民族自决」,去要回自己的国家。\n\n写那些漂亮话的人，从没打算让我们用。可话一旦说出口，就再也不只属于说它的人了。',
        en: 'But the story did not stop at "being failed."\n\nMy countrymen and I, in those years in Europe, saw things we could never have seen at home.\n\nWe saw that the white men who called themselves "civilized" and came to civilize us, when they fought among themselves, used gas and machine guns and could kill ten thousand of their own in a day. We saw that they too could be afraid, could bleed, could weep in the shellfire and cry for their mothers. We saw that the saying drummed into us from childhood, "Europeans are born above you," simply could not stand.\n\nWe also learned this: a group of people, organized, can make demands, can fight for them.\n\nThese seeds, those of us who returned alive carried back to Africa.\n\nDecades later, one African colony after another rose to demand independence. Among those who led were many who had fought in this war, or grew up on the stories of our generation. They turned around and used the Europeans\' own cries of "freedom," "equality," "self-determination" to claim back their own countries.\n\nThe people who wrote those fine words never meant for us to use them. But once words are spoken, they no longer belong only to the ones who spoke them.',
      },
      deliverGoal: 'N8 story — 故事没停在被辜负 + 在欧洲几年看见家乡看不到的 (自称文明的白人自己用毒气机关枪一天杀上万自己人/也会怕会流血会哭喊妈/「欧洲人天生高一等」站不住) + 学会一群组织起来的人可以提要求可以争 + 这些种子带回非洲 + 几十年后非洲殖民地一个接一个要独立 (带头的有打过这仗或听这代故事长大的) + 反拿欧洲人自己喊的自由平等民族自决要回国家 + 「写漂亮话的人没打算让我们用/话一旦说出口不只属于说它的人」',
      engagementHook: '我们看见，那些自称「文明」来教化我们的白人，自己打起仗来一天能杀上万自己人——「欧洲人天生高一等」这个说法，根本站不住。这个发现，为什么后来能变成一股要独立的力量？',
      expectsRealAnswer: false,
    },
    {
      id: 'tir-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我个人，拉远到整场战争留下了什么。\n\n这场打了四年的大战，杀死了大约一千七百万人。它被吹成「为自由」「为民主」的战争，可它的底子，是几个欧洲帝国争抢殖民地、市场和霸权——而抢来的殖民地里的人，比如我，被拽进来替他们去死。\n\n所以这场战争有一个常被略过的真相：它不只是「欧洲人之间的战争」。它是一场真正的世界大战——非洲人、亚洲人、来自各个殖民地的几百万人，都在替宗主国流血。我们的名字，大多没被写进任何纪念碑。\n\n而这场战，也悄悄改变了我们和宗主国之间那根绳子。我们见过了它的虚弱，学会了它的语言，记住了它许下又没兑现的承诺。\n\n几十年后，这根绳子一根一根断掉，旧的殖民帝国一个个垮台。\n\n这条「被殖民的人，拿宗主国自己的话翻身」的线——你如果跑过现有那些 Topic，会发现它一次又一次地出现。压迫者写下的漂亮话，最后常常变成压迫他们的人手里的武器。',
        en: 'Pull the lens back from me alone, to what the whole war left behind.\n\nThis four-year war killed about seventeen million people. It was praised as a war "for freedom," "for democracy," yet at bottom it was a few European empires fighting over colonies, markets, and supremacy, and the people of the colonies they had seized, people like me, were dragged in to die for them.\n\nSo the war holds a truth often passed over: it was not only "a war among Europeans." It was a true world war, with Africans, Asians, millions from colonies everywhere, bleeding for their imperial masters. Our names were mostly written on no monument.\n\nAnd this war quietly changed the rope between us and the masters. We had seen its weakness, learned its language, remembered the promises it made and did not keep.\n\nDecades later, that rope broke strand by strand, and the old colonial empires fell one after another.\n\nThis thread, the colonized turning the master\'s own words to rise, you will find it appearing again and again, if you have run the other topics. The fine words an oppressor writes down often become, in the end, a weapon in the hands of those they oppressed.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 整场战死约 1700 万 + 吹成为自由民主但底子是欧洲帝国争殖民地市场霸权 (殖民地的人被拽来替他们死) + 常被略过的真相 (不只欧洲人之间的战/是真正世界大战非洲亚洲几百万殖民地人替宗主国流血/名字没进纪念碑) + 战改变和宗主国的绳子 (见过虚弱学会语言记住没兑现的承诺) + 几十年后殖民帝国垮台 + 「被殖民者拿宗主国自己的话翻身」线一次次出现 (压迫者写的漂亮话变成被压迫者手里的武器)',
      engagementHook: '这场被吹成「为自由」的世界大战，底子是几个帝国争抢殖民地，而殖民地里的人被拽来替他们去死，名字大多没被写进任何纪念碑。被略过的这几百万人，该怎么被记住？',
      expectsRealAnswer: false,
    },
    {
      id: 'tir-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看这场「为自由而战」的大战，两种说法都站得住。\n\n一种说法：它对我，从头到尾就是一场骗局和压榨。我被一个统治我家乡的国家强征，运过几千公里去替它送死，用的是「自由」「民主」这种跟我毫无关系的口号。仗打完，承诺没兑现，我的家乡照旧被殖民，我们的名字没进任何纪念碑。它喊的「人人」，从一开始就没算上我。\n\n另一种说法：它也意外地，给了我们一样我们本来没有的东西。我们在战壕里看穿了「欧洲人天生高一等」的谎，学会了他们的语言和那套「自由平等」的话术。这些，后来变成了我们这代人和下一代人，拿来要回自己国家的武器。一场用来压榨我们的战争，反过来成了我们觉醒的起点。\n\n两种说法都站得住。它既是一场对我们的骗局，也是一颗被我们抢过来的种子。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at this great war "for freedom." Both views stand.\n\nOne view: for me it was a swindle and an exploitation from start to finish. I was forcibly conscripted by a country that ruled my homeland, carried thousands of kilometers to die for it, under slogans of "freedom" and "democracy" that had nothing to do with me. When the fighting ended, the promises went unkept, my homeland was colonized as before, and our names entered no monument. The "all" it cried never counted me in from the start.\n\nThe other view: it also, unexpectedly, gave us something we had not had. In the trenches we saw through the lie that "Europeans are born above you," and we learned their language and their talk of "liberty and equality." These later became, for my generation and the next, a weapon to claim back our own countries. A war meant to exploit us became, in turn, the starting point of our awakening.\n\nBoth views stand. It was a swindle against us, and a seed we seized for ourselves.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (对我从头到尾骗局压榨/被强征送死用毫无关系的自由民主口号/承诺没兑现家乡照旧被殖民名字没进纪念碑/人人没算我) / 另一种说法 (意外给了我们没有的东西/看穿欧洲人高一等的谎学会自由平等话术/后来变成要回国家的武器/压榨的战争成觉醒起点) / 既是骗局也是被抢过来的种子 / 想 30 秒',
      engagementHook: '一种说法：它对我从头到尾是骗局和压榨。另一种说法：它也意外成了我们觉醒的起点。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'tir-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个靠海村子里的穷孩子，被强征上船，渡过几千公里，在一条不属于我的战壕里替别人去死，又活着把一颗种子带回家乡——你会怎么评价这样一段经历？\n\n一场喊着「为自由」「为民主」的大战，把我这样的人拽进去送死，却从没打算给我自由。你会说它是骗局，还是说，它也无意中给了我们反抗的语言？你怎么评？\n\n不过先记住：你这一遍，听的只是一个塞内加尔狙击兵的命。那个喊「为民主而安全」却在自家政府按种族隔离的伍德罗·威尔逊、那个开两枪以为点的是解放火却点着世界大战的加夫里洛·普林西普，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一段历史，也会看看你刚才的判断站不站得住。\n\n再想一步：今天你身边，有没有这样的事——有人喊着特别动听的口号（「为了大家好」「为了公平」），却让某一些人去承担最重的代价，而那些人，恰恰是最该被这口号保护、却被排除在外的？\n\n那时候，你会怎么做？你会因为口号好听就接受，还是会去看：这个「为了大家」里，到底有没有把那个替大家流血的人，也算成「大家」的一员？',
        en: 'Having walked my whole life, a poor boy from a village by the sea, forced onto a ship, carried thousands of kilometers, dying for others in a trench that was not mine, and living to carry a seed back home, how would you judge an experience like this?\n\nA great war crying "for freedom," "for democracy," that pulled people like me in to die, yet never meant to give me freedom. Would you call it a swindle, or say that it also, unintending, gave us the language of resistance? How do you judge it?\n\nBut first, remember: this pass, you heard only a Senegalese tirailleur\'s life. Woodrow Wilson, who cried "safe for democracy" while segregating his own government by race, and Gavrilo Princip, who fired two shots thinking he lit a fire of liberation and lit a world war instead, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, is there such a thing, someone crying a most pleasing slogan ("for everyone\'s good," "for fairness") while making certain people bear the heaviest cost, people who are exactly the ones the slogan should protect, yet are left out?\n\nWhen that happens, what will you do? Will you accept it because the slogan sounds fine, or will you look: in this "for everyone," is the person who bleeds for everyone counted as one of "everyone" too?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价经历 (靠海村穷孩子被强征渡海替别人死/活着带回一颗种子 → 骗局 vs 也无意给了反抗的语言) + transfer「今天你身边有人喊动听口号 (为了大家好/为了公平) 却让某些人承担最重代价/那些人恰是最该被保护却被排除的」+ 你会因口号好听就接受还是看「为了大家」里有没有把替大家流血的人也算成大家」',
      engagementHook: '走完我这一生，你会怎么评价这样一段经历？再想一步：今天你身边，有没有人喊着「为了大家好」，却让最该被保护的某些人去承担最重的代价？那时候，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'woodrow-wilson':                       wilsonLens,
  'gavrilo-princip':                      principLens,
  'senegalese-tirailleur-receiving-end':  tirailleurLens,
};

// per TOPIC_ROADMAP_G6_G12.md B4 + receiving-end 优先 pattern:
// 殖民地兵 + 为不属于自己的战争送命 + N1 gold-standard hook + N6「同一面旗两个方向」跨 lens/Topic 对位 + N10/N11 骗局 vs 种子 closing
export var defaultLens = 'senegalese-tirailleur-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'world-war-one-1914',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'woodrow-wilson': 30, 'gavrilo-princip': 28, 'senegalese-tirailleur-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, shorter spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6: Wilson 十四点理想 vs 白宫重隔离 (理想伪善同体) / Princip 一颗子弹靠联盟连锁炸成全欧战 / Tirailleur 同一面旗一边让他送死一边压他人民',
    'defaultLens: senegalese-tirailleur-receiving-end — 受影响者优先 (殖民地兵 + 为别人的战争送命 + gold-standard N1 hook + N10/N11 骗局 vs 种子)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: tirailleur 是 composite (名字 Demba/家乡村子是叙事补充用括号短句标注; 史料确证的是这支部队的存在和遭遇)',
    'cross-Topic 锚: Wilson→reconstruction-1877 (重隔离倒退) + womens-suffrage-1920 (同代理想/伪善); Princip→scramble-for-africa-1884 (殖民竞争张力顶点); Tirailleur→scramble-for-africa-1884 (殖民地流血延续) + mali-empire-1235 (西非另一种命运)',
    '反 Whig: Wilson 理想与伪善同体 (对欧洲喊自决/对国内黑人推隔离/民族自决有肤色线); tirailleur lens 揭示「为自由而战」背后被征召送死的非欧洲人',
    '数学/年代自检: Wilson 1856-1924; Princip 1894 生/1914.6.28 刺杀斐迪南时 19 岁 (差几周满 20)/1918.4 死于狱中肺结核 23 岁; WWI 1914-1918; 凡尔登 1916; 十四点 1918.1; 美国参战 1917.4; 战死约 1700 万',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
