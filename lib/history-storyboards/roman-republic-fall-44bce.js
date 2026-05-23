// ─── Roman Republic & Its Fall c.509-27 BCE Lens-based Storyboard (Story-First v2) ───
//
// Topic: 罗马共和国与崩溃 · The Roman Republic & Its Fall c.509-27 BCE
// CA HSS Grade 6.7 · AP World (共和制起源) · AP US Government (美国国父借鉴罗马共和)
//
// 3 lens (per TOPIC_ROADMAP_G6_G12.md C3 + AUTHORING_PIPELINE 第 7/8/12 条):
//   - julius-caesar                  (perpetrator-actor) — Julius Caesar 100-44 BCE 才华横溢将军 + 跨卢比孔河终结共和 + 死于元老院
//   - cicero                         (lonely-mediator)   — Cicero 106-43 BCE 雄辩家共和派 / 想用言辞救共和 / 被处死割舌钉手
//   - landless-plebeian-receiving-end (receiving-end)    — composite 无地平民/退伍兵 c.130-44 BCE (基于格拉古改革背景) / 失地 + 卖选票给军阀
//
// 跨 lens micro-detail (N6 anchor):
//   「卖一张选票 / one vote for sale」一个动作两个方向 —
//   - 平民 lens N6: 失地后把唯一剩下的「选票」卖给军阀换面包 — 共和「民主」从内部被买空
//   - Caesar lens N6: 同一张被买的选票，正是他登顶的燃料 — 才华 + 收买同体
//   - Cicero lens N6: 他眼睁睁看「选票被买」却救不了 — 言辞挡不住面包
//
// 跨 Topic 锚 (强闭环):
//   - 罗马共和 senate/consul/tribune checks → constitutional-convention-1787 (Madison 读 Polybius 借鉴罗马共和) + magna-carta-1215 (Aristotle「law should govern」可前挂罗马源头)
//   - Cicero 用言辞救共和 → constitutional-convention Hamilton/Jefferson (雄辩与党争西方传统母题)
//   - 失地平民卖选票 → gilded-age (财富集中腐蚀民主古今对照)
//
// defaultLens = 'landless-plebeian-receiving-end' (受影响者优先 pattern: 共和「民主」从来只属部分人 + 反 Whig 镜子)
//
// 反 Whig: 不写「罗马给世界共和制」进步起点; 罗马共和崩溃恰展示共和制可从内部被财富集中/军阀化/民粹腐蚀; 共和「民主」从来只属部分人; 给美国学生一面镜子: 共和制不是终点, 会死.
//
// STRUCTURE SPEC (long-arc):
//   - 12 nodes per lens
//   - 220-360 CN chars/node; 仅 2 anchor nodes (N6 + N11 synthesis) 可达 480 (不到 550); 其余 ≤380
//   - expectsRealAnswer: ONLY N11 (synthesis) + N12 (closing meta) = true; all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md cultural ban (罗马用真实术语: 元老院 Senate/执政官 consul/保民官 tribune/卢比孔河 Rubicon/格拉古 Gracchi; 绝不用玉玺/翰林/宰相/朕/圣旨/太子) + em-dash 预算 + 名字分级 + synthesis voice + anti-fab 括号短句
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Julius Caesar (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var juliusCaesarLens = {
  id: 'julius-caesar',
  name: 'Julius Caesar',
  nameCn: '尤利乌斯·凯撒',
  role: 'perpetrator-actor',
  perspectiveTag: 'republic-ender',
  icon: '🗡️',
  description: {
    cn: '罗马人，公元前 100 年生，是罗马共和五百年里最有才华、也最危险的一个人。他是赢遍高卢的将军，是会让全城为他疯狂的演说家，是懂得用债务和盛宴收买人心的政客。公元前 49 年，他带兵跨过一条本不该跨的小河，把共和制推向终点。他不是一个莽夫篡位者，他是这套制度自己养出来、又再也关不住的那个人。这一遍让你从他内部，看一个共和国怎么死在它最优秀的儿子手里。',
    en: 'A Roman, born in 100 BCE, the most talented and the most dangerous man in five hundred years of the Republic. He was the general who conquered all of Gaul, the orator who could drive a whole city wild, the politician who knew how to buy hearts with debt and feasts. In 49 BCE he marched an army across a small river he was forbidden to cross, and pushed the Republic toward its end. He was no brute usurper. He was the man this very system raised, and then could no longer cage. This pass lets you watch, from inside him, how a republic dies at the hands of its finest son.',
  },
  storyboard: [
    {
      id: 'jc-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '公元前 49 年 1 月，一条窄得不能再窄的小河边。河叫 Rubicon（卢比孔河），浅得人能蹚过去。\n\n我是 Julius Caesar（尤利乌斯·凯撒）。河这边，我是带兵打赢高卢的将军；河那边，是意大利本土。罗马有一条铁规矩：任何将军带兵跨过这条河，就是叛国，就是向共和国宣战。\n\n我在河边站了一会儿。身后是跟了我九年、打遍高卢的军团。前面，是五百年的共和国。\n\n据说我说了一句话：「骰子已经掷出去了。」然后我下令过河。\n\n这一遍，你站进我这个位置。你会看见一个共和国，不是被外敌打垮的，是被它自己养出来的最优秀的儿子，亲手推下去的。',
        en: 'January, 49 BCE. The bank of a river as narrow as a stream. It is called the Rubicon, shallow enough to wade across.\n\nI am Julius Caesar. On this bank, I am the general who conquered Gaul. On the far bank lies Italy itself. Rome has one iron rule: any general who brings an army across this river commits treason, declares war on the Republic.\n\nI stood at the bank a while. Behind me, the legions who had followed me for nine years across all of Gaul. Ahead, five hundred years of the Republic.\n\nThey say I spoke one line: "The die is cast." Then I gave the order to cross.\n\nThis pass puts you in my place. You will see a republic that was not broken by a foreign enemy, but pushed over the edge by its own finest son, with his own hands.',
      },
      deliverGoal: 'N1 hook — 前 49 年 Rubicon 河边 + 带兵过河 = 叛国铁规矩 + Caesar 自我介绍 (高卢将军) +「骰子已掷出」(据说/后世史家流传引文,真实性不可确证) + 这一遍视角设定 (共和被自己最优秀的儿子推下去)',
      engagementHook: '我站在河边，过去就是叛国，不过去我就完了。「骰子已经掷出去了」——有没有一个时刻，你也知道一旦走出这一步，就回不了头？',
      expectsRealAnswer: false,
    },
    {
      id: 'jc-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我跨过的，到底是个什么样的共和国。\n\n罗马人很骄傲。大约公元前 509 年，他们赶走了最后一个国王，发誓再也不要一个人说了算。从那以后五百年，罗马没有国王，只有共和（res publica，意思是「公共的事」）。\n\n他们设计了一套互相牵制的制度：最高权力交给两个执政官（consul），任期只有一年，两个人互相能否决对方；元老院（Senate）是几百个贵族组成的议事会，管钱、管外交、管大政方针；还有保民官（tribune），专门替平民说话，能一票否决伤害平民的法案。\n\n谁也不能独大——这是整套设计的灵魂。罗马人最怕的一个词，就是 rex（王）。\n\n而我，凯撒，最后做的事，恰恰是他们五百年来最怕的那件。',
        en: 'First, what kind of republic was it that I crossed into?\n\nThe Romans were proud. Around 509 BCE they drove out their last king and swore never again to let one man rule alone. For five hundred years after that, Rome had no king, only a republic (res publica, meaning "the public thing").\n\nThey designed a system of mutual checks. The highest power went to two consuls, each holding office for only one year, each able to veto the other. The Senate, a council of several hundred nobles, controlled money, foreign affairs, and broad policy. And there were tribunes, who spoke for the common people and could veto any law that harmed them.\n\nNo one could dominate. That was the soul of the whole design. The word the Romans feared most was rex, king.\n\nAnd I, Caesar, did in the end exactly the thing they had feared for five hundred years.',
      },
      deliverGoal: 'N2 setup — 共和制建立 c.509 BCE 赶走国王/不要一人说了算 + 制衡设计 (两执政官 consul 任期一年互相否决 + 元老院 Senate + 保民官 tribune) + 罗马最怕 rex 王 + Caesar 最后做了最怕的事',
      engagementHook: '罗马人五百年最怕的一个词是「王」，整套制度就是为了不让一个人独大。你觉得一套「互相牵制」的制度，真能挡住一个足够厉害的人吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jc-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可这套漂亮的制度，到我出生时（公元前 100 年），已经从里面烂了。\n\n问题出在地。罗马打了几百年仗，地盘越来越大，可土地越来越集中到少数大贵族手里。出去打仗的小农，回来发现自己的田被吞了，沦为没地的平民，挤进罗马城靠施舍过活。\n\n更早几十年，有两兄弟想救这件事。Tiberius 和 Gaius Gracchi（格拉古兄弟），先后当上保民官，想立法把公有土地分给失地平民。\n\n结果呢？哥哥 Tiberius 在公元前 133 年，被一群元老院贵族当街打死，尸体扔进台伯河。弟弟 Gaius 几年后也死于政治暴力。\n\n你看清楚了吗：当有人想用「合法的改革」帮穷人，制度里的既得利益者，直接动用了暴力。从格拉古兄弟死的那天起，罗马政治就学会了一件事——讲不通，就动刀。\n\n我后来做的一切，都是从这条裂缝里长出来的。',
        en: 'But this beautiful system, by the time I was born in 100 BCE, had rotted from within.\n\nThe trouble was land. Rome had fought wars for centuries, its territory swelling, but the land concentrated into the hands of a few great nobles. The small farmers who went off to fight came home to find their fields swallowed up, sank into the landless poor, and crowded into the city of Rome to live on handouts.\n\nDecades earlier, two brothers tried to fix this. Tiberius and Gaius Gracchi, in turn, became tribunes and tried to pass laws giving public land to the landless.\n\nThe result? The elder, Tiberius, in 133 BCE, was clubbed to death in the street by a mob of senators, his body thrown into the Tiber. The younger, Gaius, died in political violence a few years later.\n\nDo you see it clearly? When someone tried to help the poor through "lawful reform," the system\'s entrenched interests turned straight to violence. From the day the Gracchi died, Roman politics learned one thing: when you cannot win the argument, draw the knife.\n\nEverything I later did grew out of that crack.',
      },
      deliverGoal: 'N3 setup — 制度从内部烂 (土地兼并/小农失地挤进罗马城靠施舍) + Gracchi 兄弟改革 (保民官分公有土地) + Tiberius 前 133 被打死扔台伯河/Gaius 死于暴力 + 罗马政治学会「讲不通就动刀」+ Caesar 从这条裂缝长出来',
      engagementHook: '当有人想用合法改革帮穷人，既得利益者直接动用了暴力——从那天起罗马学会了「讲不通就动刀」。一套制度一旦默许用暴力解决分歧，它还救得回来吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jc-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你生在一个名门，但家里不算最有钱。你早就看明白了罗马的真相：在这座城里，权力不靠出身,靠两样东西——军功，和人心。\n\n军功你去高卢挣。九年里你打下整个高卢（今天的法国一带），写回罗马的战报让全城为你疯狂，你的名字传遍每一条街。\n\n人心你用钱买。你借了天文数字的债，办最盛大的角斗士竞技、最豪华的公共宴席，给罗马城的平民免费看、免费吃。债越欠越多，可你赌的是：等我足够大，没人敢找我要债。\n\n你心里清楚一件事，而且你不打算骗自己：你对平民这么好，不全是因为爱他们。是因为他们手里有选票，有声量，是你登顶的台阶。\n\n这一刻你得想：你又给面包又给表演，到底是真在替穷人着想，还是在收买一支属于你个人的力量？这两件事，在你身上分得清吗？',
        en: 'Now you are me.\n\nYou were born to a famous family, though not the richest. You saw the truth of Rome early: in this city, power does not rest on birth. It rests on two things, military glory and the hearts of the people.\n\nGlory you won in Gaul. Over nine years you conquered the whole of Gaul (roughly today\'s France), and the dispatches you sent home drove the whole city wild. Your name ran through every street.\n\nHearts you bought with money. You borrowed sums beyond counting and threw the grandest gladiator games and the most lavish public feasts, free to watch, free to eat, for the common people of Rome. The debt piled higher, but your gamble was this: once I am big enough, no one will dare ask me to pay.\n\nYou know one thing clearly, and you will not lie to yourself: your kindness to the poor is not all love. It is because they hold votes, hold noise, and are the steps you climb to the top.\n\nSo here you must ask: your bread and your shows, are they truly for the poor, or are you buying a force that belongs to you alone? On you, can the two even be told apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Caesar 看懂罗马权力靠军功 + 人心 + 高卢九年战功全城疯狂 + 借巨债办竞技宴席收买平民 + 自我拷问: 对平民好是真着想还是收买个人力量',
      engagementHook: '我给平民面包和表演，可我清楚他们手里的选票是我登顶的台阶。「对别人好」和「收买别人」——你分得清自己是哪一种吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jc-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '光有人心和军功还不够。罗马这盘棋，得有牌桌上的盟友。\n\n大约公元前 60 年，我跟当时罗马最有钱的人 Crassus（克拉苏）、最能打的老将 Pompey（庞培），三个人私下结成同盟，分掉了罗马的实权。后人叫它「前三头同盟」。\n\n这本身就说明问题了：共和国的大事，本该在元老院公开辩论、表决。可现在，三个最有权势的人，在私下的饭局上就把国家分了。元老院那套公开制衡，成了走过场。\n\n但同盟是靠不住的。Crassus 战死了，我和 Pompey 之间，从盟友变成了对手。我在高卢越打越强，元老院和 Pompey 越来越怕我——他们下令：交出兵权，一个人回罗马。\n\n交出兵权，我就是案板上的肉，他们会用「合法程序」收拾我，就像当年收拾格拉古。\n\n不交，我就是叛国。\n\n公元前 49 年初，我带着军团，走到了那条小河边。',
        en: 'Hearts and glory alone were not enough. On the Roman board, you needed allies at the table.\n\nAround 60 BCE I formed a private alliance with the richest man in Rome, Crassus, and the greatest old general, Pompey. The three of us carved up the real power of Rome. Later ages call it the First Triumvirate.\n\nThat fact alone tells you everything: the great affairs of the Republic were supposed to be debated and voted in the open Senate. Now three of the most powerful men split the state at a private dinner. The Senate\'s open checks became an empty ritual.\n\nBut alliances are unreliable. Crassus died in battle, and Pompey and I went from allies to rivals. The stronger I grew in Gaul, the more the Senate and Pompey feared me. They gave the order: surrender your command and return to Rome alone.\n\nSurrender my command, and I am meat on the block. They will finish me through "lawful procedure," just as they finished the Gracchi.\n\nRefuse, and I am a traitor.\n\nEarly in 49 BCE, with my legions, I came to the bank of that small river.',
      },
      deliverGoal: 'N5 story — 前 60 First Triumvirate (Caesar+Crassus+Pompey 私下分实权/元老院制衡成走过场) + Crassus 战死/Caesar vs Pompey 决裂 + 元老院命交兵权 + 交=案板肉(像格拉古)/不交=叛国 + 走到 Rubicon 河边',
      engagementHook: '三个最有权势的人在私下饭局上就把国家分了，公开的元老院成了走过场。当真正的决定都在台面下做成，台面上的制度还有意义吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jc-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你该问：凭什么我带几个军团，就敢跟整个元老院叫板？\n\n答案藏在一张小小的纸片里——平民手里的选票。\n\n罗马的官，名义上要靠平民投票选出来。可这些年，平民早就不是当年那些有地、有底气的农民了。他们失了地，挤在罗马城里，饿着肚子。一个饿肚子的人手里的选票，是可以卖的。\n\n而我，正是那个出价最高的买家。我给面包、给竞技、许诺给退伍兵分地。一个失地的平民，把他唯一剩下的那点东西——一张选票——卖给我，换今天的一顿饭。\n\n你听好这笔账：共和国的「民主」，本该是平民用选票约束权贵。可当平民穷到要卖选票，这套「民主」就反过来了——它成了我这种有钱有兵的人,买下整座城的工具。\n\n（一个失地平民,是怎么走到「卖掉自己选票」这一步的,你换到他那一遍,会亲眼看见。）\n\n我跨过 Rubicon 的底气，一半是身后的军团，一半，就是这些被我买下的选票。共和国不是被我从外面砸开的，是它自己把门钥匙，一张一张卖给了我。',
        en: 'Now you should ask: how did I dare, with a few legions, to defy the whole Senate?\n\nThe answer hides in a small slip of paper, the vote in the hands of the common people.\n\nRome\'s officials were, in name, elected by the votes of the people. But by these years the people were no longer the landed, confident farmers of old. They had lost their land, crowded into the city, gone hungry. The vote in a hungry man\'s hand is something he can sell.\n\nAnd I was the buyer who bid highest. I gave bread, gave games, promised land to my veterans. A landless plebeian sold me the one thing he had left, a single vote, in exchange for today\'s meal.\n\nHear this ledger well: the Republic\'s "democracy" was supposed to be the common people checking the powerful with their votes. But when the people grow poor enough to sell their votes, this "democracy" flips. It becomes a tool for a man like me, rich and armed, to buy a whole city.\n\n(How a landless plebeian came to the point of selling his own vote, you will see for yourself when you switch to his pass.)\n\nMy nerve to cross the Rubicon was half the legions at my back, and half these votes I had bought. The Republic was not smashed open from outside. It sold me the keys to its own door, one at a time.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 选票被买 (平民失地饿肚子→选票可卖; Caesar 出价最高: 面包/竞技/退伍兵分地) +「民主」反转成有钱有兵者买整座城的工具 + 桥到平民 lens (怎么走到卖选票) + 共和国自己把门钥匙一张张卖给 Caesar',
      engagementHook: '共和国的「民主」本该是平民用选票约束权贵——可当平民穷到要卖选票，它反过来成了我买下整座城的工具。一人一票，为什么反而成了有钱人的武器？',
      expectsRealAnswer: false,
    },
    {
      id: 'jc-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '过了河，剩下的就快了。\n\nPompey 和大半个元老院吓跑了，逃出意大利。我没怎么打就进了罗马城。接下来几年，我追着对手打——从希腊到埃及到非洲，一场一场赢。到公元前 45 年，整个罗马世界，再没有人能跟我抗衡。\n\n然后我做了那件五百年来最大的禁忌。\n\n我让元老院封我做「终身独裁官」（dictator for life）。「独裁官」在罗马本是个紧急职位，遇到大危机才设，而且严格限期半年。我把它变成了——终身。\n\n这等于说：那个一年一换、两人互相否决的执政官制度，那个谁也不能独大的五百年设计，到我这里，停了。罗马所有的权力，集中到了一个人——我——身上。\n\n我没自称 rex（王）。我太聪明了，不会去碰那个会要命的字。可全罗马都看得明明白白：那个他们五百年来发誓再也不要的「一个人说了算」，回来了，只是换了个名字。',
        en: 'Once across the river, the rest came fast.\n\nPompey and most of the Senate fled in fear, out of Italy. I entered the city of Rome almost without a fight. Over the next years I chased my rivals, from Greece to Egypt to Africa, winning battle after battle. By 45 BCE, in the whole Roman world, no one could stand against me.\n\nThen I did the greatest taboo of five hundred years.\n\nI had the Senate name me "dictator for life." In Rome, "dictator" had been an emergency office, created only in great crisis, and strictly limited to six months. I turned it into a thing for life.\n\nThis was as good as saying: that consul system, changed every year, two men vetoing each other, that five-hundred-year design where no one could dominate, with me, it stopped. All the power of Rome gathered onto one man, me.\n\nI did not call myself rex, king. I was too clever to touch that deadly word. But all of Rome saw it plainly: the "one man rules" they had sworn five hundred years ago never to allow again, had come back, only under a new name.',
      },
      deliverGoal: 'N7 story — 过河后 Pompey 逃/Caesar 进罗马 + 前 45 追击对手赢遍 + dictator for life (本是限期半年紧急职位被改成终身) + 一年一换两人否决的执政官制度停了/权力集中一人 + 没自称 rex 但「一人说了算」换名字回来了',
      engagementHook: '我没敢自称「王」，只让自己当「终身独裁官」——可全罗马都看得明白，那个换了名字的「一人说了算」回来了。换个好听的名字，就能让人接受本来反对的东西吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jc-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '公元前 44 年 3 月 15 日。罗马人后来叫这一天「3 月的 Ides」。\n\n那天早上，我去元老院开会。我没带卫兵——我有意不带，我想让罗马人看见，他们的独裁官不怕自己的同胞。\n\n会场里，一群元老院议员围了上来，假装有事要求我。然后刀子拔出来了。\n\n刺我的人里，有不少是我亲手提拔、饶过性命、待之如友的人。其中一个叫 Brutus（布鲁图斯）——他的祖先，正是五百年前赶走最后一个国王、缔造共和的那一支。对他们来说，杀我不是谋杀，是「为共和除掉一个僭主」。\n\n据说我中了二十多刀。倒下前的最后,有一种流传很广的说法是我看着 Brutus 说了一句——但这句话史料并不能确证,后世剧作家加的成分很大,这里不当真话引。\n\n我死在元老院的地板上。讽刺的是：我用一生终结了共和制，而杀我的人以为，杀了我，共和就能活过来。',
        en: '15 March, 44 BCE. The Romans later called this day the Ides of March.\n\nThat morning I went to a Senate meeting. I brought no guards. I deliberately brought none. I wanted Rome to see that their dictator did not fear his own countrymen.\n\nIn the hall, a group of senators crowded around, pretending to have a request for me. Then the knives came out.\n\nAmong those who stabbed me were many I had raised with my own hand, spared, treated as friends. One was called Brutus, whose ancestors were the very line that drove out the last king five hundred years before and founded the Republic. To them, killing me was not murder. It was "ridding the Republic of a tyrant."\n\nThey say I took more than twenty wounds. Before I fell, there is a famous saying about a line I spoke to Brutus, but the sources cannot confirm it, much of it added by later playwrights, so I will not quote it here as true.\n\nI died on the floor of the Senate. The irony: I spent a lifetime ending the Republic, and the men who killed me believed that by killing me, the Republic could live again.',
      },
      deliverGoal: 'N8 story — 前 44.3.15 Ides of March + Caesar 故意不带卫兵 + 元老院议员围刺 + Brutus (祖先是赶走国王缔造共和那支)/视杀 Caesar 为「除僭主」+ anti-fab: 临终引文不可确证不当真话引 (no fabricated quote) + 讽刺: 杀他的人以为共和能活过来',
      engagementHook: '杀我的人里有我亲手提拔、当朋友待的人，他们以为杀了我，共和就能活过来。可制度已经烂了——除掉一个人，真能让一套垮掉的制度复活吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jc-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '杀了我，共和并没有活过来。恰恰相反。\n\n我死后，罗马没有回到那个互相牵制的共和国，而是掉进了更乱的内战。一直打到我的养子 Octavian（屋大维）打赢所有对手。\n\n公元前 27 年，Octavian 做了一件比我更高明的事。他不像我这样张扬地当「终身独裁官」，他把权力一项一项收到自己手里，表面上却说「我把共和还给元老院和人民了」。元老院给了他一个新头衔：Augustus（奥古斯都）。\n\n从此，罗马有了皇帝。共和制，正式死了。\n\n你看清这条线了吗：从我前 49 年跨过 Rubicon，到前 27 年 Octavian 称 Augustus，中间只隔 22 年。一个稳了五百年的共和国，崩塌只用了一代人。\n\n而压垮它的最后一根稻草，不是某一个坏人。是它自己：土地的不公、政治的暴力化、平民被买空的选票，早就把地基掏空了。我，只是最后推一把的人。',
        en: 'Killing me did not bring the Republic back to life. Quite the opposite.\n\nAfter my death, Rome did not return to that republic of mutual checks. It fell into a wilder civil war. A fresh round of strongmen slaughtered each other, until my adopted son Octavian had beaten every rival.\n\nIn 27 BCE Octavian did something cleverer than I ever had. He did not flaunt the title "dictator for life" as I did. He gathered power into his own hands one piece at a time, while saying on the surface, "I have given the Republic back to the Senate and the people." The Senate gave him a new title: Augustus, meaning "the revered, the supreme."\n\nFrom then on, Rome had an emperor. The Republic was formally dead.\n\nDo you see the line? From my crossing of the Rubicon in 49 BCE to Octavian becoming Augustus in 27 BCE, only 22 years lay between. A republic stable for five hundred years collapsed in the span of a single generation.\n\nAnd the last straw that broke it was not one bad man. It was the Republic itself, the injustice of the land, the turn to political violence, the bought-out votes of the poor, that had long since hollowed out its foundation. I was only the one who gave the final push.',
      },
      deliverGoal: 'N9 story — 杀 Caesar 后陷更乱内战 + Octavian 打赢 + 前 27 称 Augustus (一项项收权却说还共和给元老院和人民) + 罗马有了皇帝/共和正式死 + 前 49→前 27 仅 22 年/五百年共和一代人崩塌 + 最后一根稻草不是某坏人是制度自己被掏空',
      engagementHook: '一个稳了五百年的共和国，崩塌只用了一代人的时间。压垮它的不是某一个坏人，是它自己早被掏空的地基。一栋大楼倒下，到底该怪推它的那只手，还是早就烂掉的根基？',
      expectsRealAnswer: false,
    },
    {
      id: 'jc-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，跳过两千年。\n\n你以为罗马共和死了就完了？没有。它崩塌的这套教训，被人盯了两千年。\n\n十八世纪，大西洋对岸有一群人，正在为一个新国家设计制度。他们里有个叫 Madison（麦迪逊）的，读了古希腊人 Polybius（波利比乌斯）写的罗马政体：三权互相牵制、谁也不能独大。他们照着罗马共和的样子，给美国设计了三权分立、参众两院、任期限制。（你跑过费城制宪那个 Topic，会认得 Madison 这个名字。）\n\n他们最怕的，就是出一个美国的凯撒——一个靠人气和军功、把整套制衡踩在脚下的强人。\n\n往前看，更早的人也在想。「法律应该当家，而不是某个人说了算」，这条思路从古希腊、罗马一路传到中世纪英国的 Magna Carta（大宪章）。\n\n所以你别把我这一遍当成遥远的古代故事。罗马共和怎么死的，正是后来所有共和国（包括美国）天天提防的噩梦。',
        en: 'Pull the lens far back, leap across two thousand years.\n\nYou think it ended when the Roman Republic died? It did not. The lesson of its collapse has been watched for two thousand years.\n\nIn the eighteenth century, a group of men across the Atlantic were designing a system for a new country. One of them, named Madison, read the Roman constitution as written by a Greek named Polybius, three powers checking each other, no one able to dominate. Modeled on the Roman Republic, they designed for America a separation of powers, two houses, term limits. (If you have run the constitutional convention topic, you will recognize the name Madison.)\n\nWhat they feared most was an American Caesar, a strongman who, on popularity and military glory, would trample the whole system of checks. So they guarded against it everywhere.\n\nLook further back, and earlier people thought of this too. "The law should rule, not any one man," this idea ran from ancient Greece and Rome to medieval England\'s Magna Carta, and on to today.\n\nSo do not take this pass as a distant ancient story. How the Roman Republic died is the very nightmare that all later republics, America included, guard against to this day.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 跳两千年 + 美国国父借鉴罗马共和 (Madison 读 Polybius/三权分立/两院/任期限制→constitutional-convention Topic 锚) + 最怕美国的凯撒 + 「法律当家不是一人说了算」→ Magna Carta 跨 Topic 锚 + 罗马共和怎么死是后世共和国天天提防的噩梦',
      engagementHook: '美国国父照着罗马共和设计制度，因为他们最怕的就是出一个美国的凯撒。两千年后的人还在防着我——你觉得，他们防得住吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jc-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是被一套烂掉的制度逼出来的。土地早被兼并、政治早就动刀、元老院只顾自己——这个共和国在我跨河之前，就已经名存实亡。我没有杀死一个健康的共和国，我只是给一具早已腐烂的身体，开了死亡证明。换了别人,也会有别的「凯撒」。\n\n另一种说法：我是亲手掐死共和的那个人。我才华盖世，本可以用我的声望去修补这套制度，可我选择了用它的病——失地平民、被买的选票、私下的同盟——来喂大我自己。我跨过 Rubicon 那一步，是清醒的、自愿的。我不是制度的受害者，我是制度的掘墓人。\n\n这两边不是「功过相抵」。是同一个我的两面——同样的才华，既能是共和最后的希望，也能是它的终结者。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was forced out by a rotten system. The land long since seized, politics long since turned to the knife, the Senate caring only for itself. This republic was already dead in name before I crossed the river. I did not kill a healthy republic. I only signed the death certificate of a body already rotten. Had it not been me, there would have been another "Caesar."\n\nThe other view: I was the man who throttled the Republic with his own hands. My talent towered over all, and I could have used my standing to mend the system. Instead I chose to feed myself on its sickness, the landless poor, the bought votes, the private alliances. My step across the Rubicon was clear-eyed and willing. I was not the system\'s victim. I was its gravedigger.\n\nThese are not "merit canceling fault." They are two faces of the same me, the same talent that could be the Republic\'s last hope and also its ender.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (被烂制度逼出来/共和跨河前已名存实亡/换别人也会有凯撒) / 另一种说法 (亲手掐死共和/本可修补却喂大自己/跨河是清醒自愿/掘墓人) / 同一个我两面 / 想 30 秒',
      engagementHook: '一种说法：我是被烂制度逼出来的；另一种说法：我是亲手掐死共和的掘墓人。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'jc-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价一个共和国的死法？\n\n一个稳了五百年、设计精巧、谁也不能独大的共和国，没有亡于外敌，而是从内部——土地的不公、政治的暴力化、被买空的选票——一点点烂掉，最后被它自己养出来的最优秀的人推下去。这件事里，到底该怪我这只推手，还是怪那早就空了的地基？把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有一套「规则上人人平等」的东西，正在被钱、被人气、被「讲不通就动手」一点点掏空——一个班级、一个社团、一个网上的群？\n\n那时候，你会以为「换掉一个坏人就好了」，还是会去看那个更难的问题——是什么样的地基，养出了这样的人？',
        en: 'Having walked my whole life, how would you judge the way a republic dies?\n\nA republic stable for five hundred years, elegantly designed, where no one could dominate, fell not to a foreign enemy but rotted from within, the injustice of the land, the turn to violence, the bought-out votes, until it was pushed over by the finest man it had raised. In this, whom do you blame, this pushing hand, or the foundation long since hollow? Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there some "everyone is equal by the rules" thing being hollowed out, bit by bit, by money, by popularity, by "when you cannot win the argument, use force," a class, a club, a group online?\n\nWhen that happens, will you think "just remove one bad person and it will be fine," or will you look at the harder question, what kind of foundation raises a person like that?',
      },
      deliverGoal: 'N12 close — 评价共和死法 (五百年精巧共和从内部烂掉被自己最优秀的人推下去/怪推手还是怪空地基同一天平) + transfer「今天你身边规则上人人平等却被钱/人气/暴力掏空的东西 (班级/社团/网上群)」+ 你会以为换掉坏人就好还是去看什么地基养出这样的人',
      engagementHook: '一个共和国不是亡于外敌，是从内部烂掉、被自己最优秀的人推下去。你会怎么评价这样一种死法？今天你身边那个「规则上平等、实际被掏空」的地方，你会只想着换掉一个坏人，还是去看更难的那个问题？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Cicero (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var ciceroLens = {
  id: 'cicero',
  name: 'Cicero',
  nameCn: '西塞罗',
  role: 'lonely-mediator',
  perspectiveTag: 'republic-defender-by-words',
  icon: '📜',
  description: {
    cn: '罗马人，公元前 106 年生，是罗马五百年里最会说话的人。他不是名门出身，没有军团，手里唯一的武器是语言。他靠一张嘴，从一个外省小镇的孩子，爬到了共和国的最高位执政官。当军人和强人开始用刀决定一切，他还在固执地相信:一篇好的演说、一条好的法律,能把这个国家从悬崖边拉回来。这一遍让你从一个手无寸铁的人内部，看他怎么用言辞，去挡一个正在用军队改写规则的时代。',
    en: 'A Roman, born in 106 BCE, the finest speaker in five hundred years of Rome. He came from no great family, had no legions, and his only weapon was language. On his tongue alone, he climbed from a boy in a provincial town to the highest office of the Republic, the consulship. As soldiers and strongmen began to settle everything with the sword, he still stubbornly believed that a good speech, a good law, could pull this country back from the cliff edge. This pass lets you watch, from inside an unarmed man, how he used words to hold back an age that was rewriting the rules with armies.',
  },
  storyboard: [
    {
      id: 'ci-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我这辈子，没带过一天兵，没握过一把剑。\n\n这间罗马的元老院里，坐着的人不是将军就是大贵族。我跟他们不一样。我是 Cicero（西塞罗），来自罗马城外一个叫 Arpinum 的小镇。我家不是名门，没人替我铺路。\n\n我手里只有一样东西：语言。\n\n靠这一张嘴，我从一个外省孩子，一路辩、一路说，爬到了共和国最高的位置——执政官。在罗马，这几乎是不可能的事。\n\n我信一件别人越来越不信的事：一篇够好的演说、一条够正的法律，能把这个国家从悬崖边拉回来。\n\n这一遍，你站进我这个位置。你没有军团，没有钱，没有靠山。你只有话。你要用话，去挡一个正在用军队改写规则的时代。',
        en: 'In my whole life I never commanded a soldier, never gripped a sword.\n\nThe men in this Roman Senate are either generals or great nobles. I am not like them. I am Cicero, from a small town outside Rome called Arpinum. My family was not noble; no one paved the way for me.\n\nI hold only one thing: language.\n\nOn this tongue alone I argued and spoke my way, from a provincial boy, up to the highest office of the Republic, the consulship. In Rome, that was very nearly impossible.\n\nI believe a thing fewer and fewer believe: that a speech good enough, a law just enough, can pull this country back from the cliff edge.\n\nThis pass puts you in my place. You have no legions, no money, no patron. You have only words. With words you must hold back an age that is rewriting the rules with armies.',
      },
      deliverGoal: 'N1 hook — 没带过兵没握过剑 + Cicero 自我介绍 (外省 Arpinum 小镇/非名门/靠语言爬到执政官) + 信「好演说好法律能拉国家回来」+ 这一遍视角 (只有话去挡用军队改写规则的时代)',
      engagementHook: '我没有军团、没有钱、没有靠山，只有话。你信不信，光靠「把道理说清楚」，能挡住一个人用刀和钱开路？',
      expectsRealAnswer: false,
    },
    {
      id: 'ci-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我为什么这么信「言辞」和「法律」。\n\n我从小痴迷一件事：怎么把话说到别人心里去。我读遍了能找到的演说和哲学，练到罗马没人辩得过我。在罗马，会打官司、会演说，是平民出身的人唯一能往上爬的梯子——我就是踩着这把梯子上来的。\n\n我信的不只是技巧。我信这套共和制度本身。我心里有个理想的罗马：一个靠辩论、靠投票、靠法律解决分歧的国家，而不是靠谁拳头大。\n\n我写过一句话，大意是：「法律是无声的执政官，执政官是会说话的法律。」意思是——在共和国，最高的不是某个人，是法律。哪怕你是执政官，你也得在法律底下。\n\n（这条「法律高于人」的思路，两千年后还活着。后来英国的 Magna Carta、美国的宪法，骨子里都是这一句。你跑过那些 Topic 就懂这条根。）\n\n问题是，我信这一套的时候，罗马已经越来越多人，开始信刀了。',
        en: 'First, why I believed so deeply in words and in law.\n\nFrom childhood I was obsessed with one thing: how to put words into another person\'s heart. I read every speech and work of philosophy I could find, and trained until no one in Rome could out-argue me. In Rome, to plead a case and to make a speech was the only ladder a man of common birth could climb. I climbed up on that ladder.\n\nWhat I believed was not only technique. I believed in the republican system itself. In my heart was an ideal Rome: a country that settled its quarrels by debate, by votes, by law, and not by whose fist was bigger.\n\nI once wrote a line, roughly: "Law is a silent magistrate; the magistrate, a speaking law." Meaning, in a republic the highest thing is not any man, but the law. Even a consul stands beneath it.\n\n(This idea, "law above men," is still alive two thousand years later. England\'s Magna Carta, America\'s Constitution, at the bone are this one line. Run those topics and you will know this root.)\n\nThe trouble was, by the time I believed all this, more and more of Rome had begun to believe in the knife.',
      },
      deliverGoal: 'N2 setup — Cicero 痴迷说话/读遍演说哲学/平民出身靠演说往上爬 + 信共和制度本身 (靠辩论投票法律不靠拳头) +「法律是无声的执政官」法律高于人 (跨 Magna Carta/宪法 Topic 锚) + 但罗马越来越多人信刀',
      engagementHook: '我信的是「法律高于所有人，哪怕你是最高官也得在法律底下」。可那时罗马越来越多人开始信刀。当周围人都开始用拳头解决问题，坚持讲道理的人是清醒还是天真？',
      expectsRealAnswer: false,
    },
    {
      id: 'ci-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我这辈子有过一个高光时刻，也正是从那一刻起，我看清了罗马的病。\n\n公元前 63 年，我当上执政官那年，一个落魄贵族 Catiline（喀提林）密谋武装政变，想烧了罗马、杀掉元老院、赖掉自己的债。\n\n我没用一兵一卒。我站上元老院，当着所有人，发表了一连串演说，把他的阴谋一条条揭出来。第一句话至今有名：「Catiline，你还要滥用我们的耐心到几时？」\n\n他被我说得无地自容，当场逃出罗马。一场政变，被我用嘴拆掉了。那一刻我觉得，看，言辞真的能救国。\n\n可冷静下来我发现一件可怕的事：Catiline 之所以能拉起一帮人，是因为罗马有太多走投无路的人——失地的、欠债的、退伍没着落的。我赢了这一仗，可那个不断生产「Catiline 的追随者」的根，一点没动。\n\n我能用一篇演说赢一次。我没法用演说，去喂饱几十万个饿肚子的人。',
        en: 'I had one shining moment in my life, and it was from that moment that I saw Rome\'s disease.\n\nIn 63 BCE, the year I was consul, a ruined noble named Catiline plotted an armed coup, to burn Rome, kill the Senate, and wipe out his own debts.\n\nI used not a single soldier. I stood up in the Senate, before all of them, and delivered a string of speeches that laid out his plot point by point. The first line is famous to this day: "How long, Catiline, will you go on abusing our patience?"\n\nI shamed him until he could not stand it, and he fled Rome on the spot. A coup, taken apart with my mouth. In that moment I thought, see, words really can save a country.\n\nBut when I cooled down I saw something terrible. Catiline could gather a following because Rome had so many people with nowhere to turn, the landless, the indebted, the discharged veterans with no place to go. I won this battle, but the root that kept producing "followers of Catiline" had not moved at all.\n\nI could win once with a speech. I could not, with a speech, feed hundreds of thousands of hungry people.',
      },
      deliverGoal: 'N3 setup — 前 63 Cicero 执政官年 + Catiline 密谋武装政变 (烧罗马/杀元老院/赖债) + Cicero 用演说拆掉 (「你还要滥用我们的耐心到几时」真实引文) + Catiline 逃 + 但看清病根: 罗马太多走投无路的人/赢一仗但根没动 + 演说喂不饱饿肚子的人',
      engagementHook: '我用一篇演说就拆掉了一场政变——可我也看清了：让那么多人愿意跟着政变的根，我一点没动。你觉得「把坏人说退」和「解决人们为什么愤怒」，哪个更难？',
      expectsRealAnswer: false,
    },
    {
      id: 'ci-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你站在罗马权力的中心，可你比谁都清楚自己的处境：你没有军团。Caesar（凯撒）有，Pompey（庞培）有，Crassus（克拉苏）有钱能买兵。你只有名望和一张嘴。\n\n这三个最有权势的人，公元前 60 年私下结成了同盟，把国家分了。他们来拉拢你：加入我们，给你想要的地位。\n\n你心里清楚，加入他们，等于亲手把元老院、把共和制度卖掉——因为他们要的，正是绕开元老院、绕开法律。\n\n可你要是不加入，你就站在三个手握军队和金钱的人对面，孤身一人。\n\n这就是你一辈子的两难：当掌权的人开始不讲规则，一个只信规则的人，到底该怎么办？\n\n硬碰，你打不过他们的刀。妥协，你就背叛了你一辈子相信的东西。\n\n你怎么选？',
        en: 'Now you are me.\n\nYou stand at the center of Roman power, yet you know your position better than anyone: you have no legions. Caesar has them, Pompey has them, Crassus has the money to buy them. You have only reputation and a tongue.\n\nThese three most powerful men formed a private alliance in 60 BCE and carved up the state. They came to win you over: join us, and you will have the standing you want.\n\nYou know in your heart that to join them is to sell the Senate, to sell the republican system, with your own hands. For what they want is precisely to go around the Senate, around the law.\n\nBut if you do not join, you stand alone against three men who hold armies and gold.\n\nThis is the dilemma of your whole life: when the men in power begin to break the rules, what is a man who believes only in rules to do?\n\nFight head on, and you cannot beat their swords. Compromise, and you betray everything you have believed your whole life.\n\nWhich do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Cicero 在权力中心但没军团 (Caesar/Pompey/Crassus 有兵有钱) + 三头同盟拉拢加入 + 加入=亲手卖掉元老院共和 / 不加入=孤身对三个有军队金钱的人 + 一辈子两难: 掌权者不讲规则时只信规则的人怎么办',
      engagementHook: '加入他们,我就背叛了一辈子相信的东西;不加入,我孤身对着三个手握军队的人。当掌权的人开始不讲规则,一个只信规则的人,到底该怎么办?',
      expectsRealAnswer: false,
    },
    {
      id: 'ci-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了不加入。代价立刻就来了。\n\n三头同盟容不下一个不肯听话的人。公元前 58 年，他们借一个政敌的手，把我赶出了罗马，流放到希腊。我离开了我用一生爬上来的城。\n\n流放的那一年多，是我这辈子最黑的日子。我曾经一句话就让政变者逃跑，现在我连自己的家都保不住。我写信给朋友，信里几乎是在哭——我开始怀疑：我信了一辈子的「言辞能救国」，是不是从头就是个幻觉？\n\n后来我被召回罗马，可一切都变了。我看明白了一件残酷的事：在这个新时代，决定一切的不再是元老院里谁说得对，而是城外谁的军团多。\n\n我还在说话。可我的话，越来越像在一座正在着火的房子里，讲消防条例。\n\n调停一个时代，最难的不是不会说，是你说得再好，对面那些人，已经决定不再听道理了。',
        en: 'I chose not to join. The price came at once.\n\nThe triumvirate could not abide a man who would not obey. In 58 BCE, through the hand of a political enemy, they drove me out of Rome and exiled me to Greece. I left the city I had spent a lifetime climbing into.\n\nThat year and more of exile was the darkest time of my life. I had once made a plotter flee with a single speech; now I could not even keep my own home. I wrote to my friends, and the letters are almost weeping. I began to doubt: this thing I had believed all my life, that words can save a country, was it an illusion from the start?\n\nLater I was recalled to Rome, but everything had changed. I saw a cruel thing clearly: in this new age, what decided everything was no longer who was right in the Senate, but who had the most legions outside the city.\n\nI was still speaking. But my words were more and more like lecturing on fire safety inside a house already burning.\n\nThe hardest part of mediating an age is not that you cannot speak. It is that no matter how well you speak, the men across from you have decided to stop listening to reason.',
      },
      deliverGoal: 'N5 story — Cicero 选不加入 + 前 58 被三头同盟借政敌赶出罗马流放希腊 + 流放最黑日子/写信几乎哭/怀疑「言辞救国」是幻觉 + 召回后看清: 决定一切的是城外谁军团多不是元老院谁说得对 + 「在着火的房子里讲消防条例」+ 调停最难是对面决定不再听道理',
      engagementHook: '我曾一句话就让政变者逃跑,现在我说得再好,对面那些人已经决定不再听道理了。当一个人铁了心不讲理,你还有办法吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ci-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我一辈子想救共和，可我比谁都清楚，共和真正烂在哪里。\n\n烂在选票上。\n\n罗马的官，名义上靠平民投票选。可这些年的平民，早不是当年有地的农民了。他们失了地，挤在城里饿肚子。一个饿肚子的人手里那张选票，是可以卖的——谁给面包，谁给竞技，就投谁。\n\n我能写出全罗马最漂亮的演说，去讲「公民的责任」「共和的尊严」。可我没法跟一袋面包竞争。Caesar 给一个失地平民一顿饭、一场角斗表演，那个平民就把选票给了 Caesar。我的雄辩，敌不过他的施舍。\n\n（一个失地平民,是怎么一步步走到「卖掉自己选票」的,你换到他那一遍,会亲眼看见。）\n\n这是我一辈子最深的无力：我守着「靠道理、靠法律」这套理想，可那些该用选票守护共和的人，已经穷到要把选票卖给摧毁共和的人。言辞挡不住面包。一个共和国，就这样从最底下，被一张一张选票卖空了。',
        en: 'All my life I tried to save the Republic, yet I knew better than anyone where it truly rotted.\n\nIt rotted in the vote.\n\nRome\'s officials were, in name, elected by the votes of the common people. But the people of these years were no longer the landed farmers of old. They had lost their land, crowded into the city, gone hungry. The vote in a hungry man\'s hand was something he could sell, to whoever gave bread, whoever gave games.\n\nI could write the most beautiful speech in all Rome on "the duty of the citizen" and "the dignity of the republic." But I could not compete with a sack of grain. Caesar gave a landless plebeian a meal and a gladiator show, and that man gave Caesar his vote. My eloquence was no match for his handouts.\n\n(How a landless plebeian came, step by step, to sell his own vote, you will see for yourself when you switch to his pass.)\n\nThis was the deepest helplessness of my life: I held to the ideal of "by reason, by law," while the very people who should have guarded the Republic with their votes were too poor not to sell those votes to the man destroying it. Words cannot hold back bread. A republic, just like that, was sold empty from the very bottom, one vote at a time.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Cicero 看清共和烂在选票 (平民失地饿肚子→选票可卖) + 雄辩敌不过 Caesar 的面包施舍 (同一动作: 平民卖票) + 桥到平民 lens (怎么走到卖选票) + Cicero 最深无力: 言辞挡不住面包/共和从最底下被一张张选票卖空',
      engagementHook: '我能写出全罗马最漂亮的演说,可我敌不过一袋面包——平民饿到要把选票卖给摧毁共和的人。当人连饭都吃不上,跟他讲「公民责任」还有用吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ci-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '公元前 49 年，Caesar 带兵跨过 Rubicon（卢比孔河），内战爆发。\n\n我做了一辈子最难的一个选择。我站到了 Pompey（庞培）和元老院那一边——不是因为我多喜欢 Pompey，是因为那一边，名义上还代表着共和制度；Caesar 那边，代表的是一个人凌驾于法律之上。\n\n我赌错了。Caesar 打赢了。\n\n奇怪的是，Caesar 赢了以后，没有杀我。他赦免了我，还想拉我回他身边——他需要我这张嘴替他装点门面。\n\n这是我一生最屈辱的处境：我活着，是因为那个我反对了一辈子的人，开恩饶了我。我每天进出元老院，看着那套我深爱的制度变成 Caesar 一个人的橡皮图章。我什么都改变不了。\n\n我退回书房，开始写书——写哲学、写共和该是什么样子。如果我救不了眼前这个共和国，我至少要把「共和到底是什么」写下来，留给后人。\n\n这是一个失败的调停者，最后能做的事：打不赢现在，就把火种交给未来。',
        en: 'In 49 BCE, Caesar marched his army across the Rubicon, and civil war broke out.\n\nI made the hardest choice of my life. I stood with Pompey and the Senate, not because I much liked Pompey, but because that side, in name, still stood for the republican system; Caesar\'s side stood for one man above the law.\n\nI bet wrong. Caesar won.\n\nStrangely, after Caesar won, he did not kill me. He pardoned me, and even wanted to draw me back to his side. He needed my tongue to dress up his rule.\n\nThis was the most humiliating position of my life: I lived because the man I had opposed all my life had granted me mercy. Day by day I went in and out of the Senate, watching the system I loved become one man\'s rubber stamp. I could change nothing.\n\nI withdrew to my study and began to write, philosophy, and what a republic ought to be. If I could not save the republic in front of me, I would at least write down what a republic truly is, and leave it for those who came after.\n\nThis is the last thing a failed mediator can do: when you cannot win the present, hand the spark to the future.',
      },
      deliverGoal: 'N7 story — 前 49 Caesar 跨 Rubicon 内战 + Cicero 站 Pompey/元老院边 (因名义代表共和) + 赌错 Caesar 赢 + Caesar 赦免想拉拢 (需要他的嘴装点) + 最屈辱: 靠仇敌开恩活着/看制度变橡皮图章/改变不了 + 退回书房写书把火种交给未来',
      engagementHook: '我活着,是因为那个我反对了一辈子的人开恩饶了我。打不赢现在,我就把「共和是什么」写下来留给后人。当你救不了眼前,把希望交给未来,算不算一种胜利?',
      expectsRealAnswer: false,
    },
    {
      id: 'ci-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '公元前 44 年 3 月 15 日，Caesar 在元老院被刺死。\n\n我没参与谋杀,但我心里,说实话,松了一口气。我以为,那个凌驾于法律之上的人没了,共和也许还有一线生机。我又一次,把希望押在了「言辞」上。\n\n我站出来,对准 Caesar 的接班人之一 Antony（安东尼）,发表了一连串火力全开的演说,后人叫它《反腓力辞》(Philippics)。我把毕生的雄辩,都砸向了这个新冒头的强人。我想用语言,挡住又一个凯撒。\n\n这是我一生最勇敢,也最致命的一次表态。我一个手无寸铁的老人,公开向一个手握军队的人宣战。\n\n我知道这很危险。但我那时想:如果连我都闭嘴,那这世上,就再没有人替共和说话了。\n\n我赌的,是言辞的力量,比刀更长久。\n\n这一次,我又赌错了。',
        en: 'On 15 March 44 BCE, Caesar was stabbed to death in the Senate.\n\nI took no part in the murder, but in truth I felt relief. I thought that with the man above the law gone, the Republic might have one slim chance left. Once again I staked my hope on words.\n\nI stepped forward against one of Caesar\'s would-be heirs, Antony, and delivered a string of full-force speeches that later ages call the Philippics. I hurled the eloquence of a lifetime at this newly risen strongman. I wanted, with language, to hold back yet another Caesar.\n\nIt was the bravest and most fatal stand of my life. An unarmed old man, publicly declaring war on a man who held armies.\n\nI knew it was dangerous. But I thought then: if even I fall silent, there will be no one left in this world to speak for the Republic.\n\nI was betting that the power of words outlasts the sword.\n\nThis time, again, I bet wrong.',
      },
      deliverGoal: 'N8 story — 前 44.3.15 Caesar 被刺/Cicero 松一口气以为共和有生机 + 对准 Antony 发表 Philippics 反腓力辞 (毕生雄辩砸向新强人) + 一生最勇敢最致命的表态 (手无寸铁老人向握军队的人宣战) +「连我闭嘴就没人替共和说话」+ 赌言辞比刀长久/又赌错',
      engagementHook: '我一个手无寸铁的老人,公开向一个手握军队的人宣战。因为我想:如果连我都闭嘴,就再没人替共和说话了。明知危险还是要说——这是勇敢,还是不自量力?',
      expectsRealAnswer: false,
    },
    {
      id: 'ci-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '公元前 43 年，Antony（安东尼）跟 Caesar 的养子 Octavian（屋大维）等人，结成新的同盟瓜分罗马。他们做的第一件事,是开列一张「该死的人」的名单。\n\n我的名字,在名单上。Antony 恨透了我的那些演说。\n\n我本来还有机会逃。但我跑得不够快,也或许是累了。追兵在路上追到了我。\n\n我从车上探出头,伸长脖子,对刽子手说:动手吧。一个用一辈子语言战斗的人,选择了不再逃。\n\n他们砍下了我的头,还有我那双写演说的手。Antony 下令,把我的头和手,钉在罗马城广场的讲台上——就是我一辈子无数次站着演说、为共和辩护的那个讲台。\n\n据说 Antony 的妻子,还用发针刺穿了我那条说过无数雄辩的舌头。\n\n他们不只是要我死。他们要羞辱「言辞」本身——他们要让全罗马看见:在这个新时代,一张说真话的嘴,会有什么下场。',
        en: 'In 43 BCE, Antony, together with Caesar\'s adopted son Octavian and others, formed a new alliance to divide Rome. The first thing they did was draw up a list of "men who must die."\n\nMy name was on the list. Antony hated those speeches of mine to the bone.\n\nI still had a chance to flee. But I did not run fast enough, or perhaps I was tired. The pursuers caught me on the road.\n\nI leaned my head out of the litter, stretched out my neck, and said to the executioner: do it. A man who had fought with language all his life chose to run no more.\n\nThey cut off my head, and the hands that wrote my speeches. Antony ordered my head and hands nailed to the speaker\'s platform in the Roman forum, the very platform where I had stood countless times to speak, to defend the Republic.\n\nThey say Antony\'s wife pierced the tongue that had spoken so much eloquence with a hairpin.\n\nThey did not only want me dead. They wanted to humiliate words themselves, to show all of Rome what becomes, in this new age, of a mouth that speaks the truth.',
      },
      deliverGoal: 'N9 story — 前 43 Antony+Octavian 等新同盟列死亡名单 + Cicero 在名单上 (Antony 恨他的演说) + 追兵追到/伸脖子说动手不再逃 + 砍头+砍写演说的手钉在广场讲台 (他一辈子演说的台) + 妻子发针刺舌 + 不只要他死要羞辱言辞本身',
      engagementHook: '他们砍下我的头和写演说的手,钉在我一辈子演说的讲台上,还用发针刺穿我的舌头。他们不只要我死,要羞辱「说真话」本身。为什么一个手无寸铁的人,会让握刀的人这么害怕?',
      expectsRealAnswer: false,
    },
    {
      id: 'ci-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远,跳过两千年。\n\n他们砍了我的舌头,以为能让「言辞」闭嘴。结果恰恰相反。\n\n我躲在书房里写的那些书,关于共和、关于法律、关于「公民该怎么活」,没有跟我一起死。它们活了下来,被一代代人抄、读、背。一千多年后,文艺复兴的人重新发现我的文字,把我当成「用语言守护自由」的榜样。\n\n再后来,大西洋对岸那些设计美国的人,书架上摆着我的演说集。他们相信一件跟我一样的事:在一个共和国里,公开的辩论、说服、争论,本身就是制度的一部分。美国后来那种激烈的演说传统、党派之间的唇枪舌剑——你要是跑过费城制宪、跑过 Hamilton 和 Jefferson 那些争论,会发现那套「用言辞争天下」的母题,根子一直能追到罗马,追到我。\n\n我这个人,输掉了眼前那场仗。我没保住共和。可我赌的那件事——言辞比刀更长久——两千年后,好像,真的应验了。',
        en: 'Pull the lens far back, leap across two thousand years.\n\nThey cut out my tongue, thinking they could silence words. The opposite happened.\n\nThe books I wrote hidden in my study, on the republic, on law, on how a citizen ought to live, did not die with me. They lived on, copied, read, memorized by one generation after another. More than a thousand years later, the people of the Renaissance rediscovered my writing and made me a model of "guarding freedom with language."\n\nLater still, the men who designed America kept my collected speeches on their shelves. They believed a thing I also believed: that in a republic, open debate, persuasion, argument, are themselves a part of the system. America\'s fierce tradition of oratory, the verbal duels between parties, if you have run the constitutional convention topic, or the arguments of Hamilton and Jefferson, you will find that this theme of "contesting the world with words" traces its root all the way back to Rome, back to me.\n\nI lost the war in front of me. I did not save the Republic. But the thing I bet on, that words outlast the sword, two thousand years later, seems to have come true after all.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 跳两千年 + 砍舌想让言辞闭嘴反而相反 + Cicero 书活下来被抄读/文艺复兴重新发现当守护自由榜样 + 美国设计者书架摆他演说集/公开辩论是制度一部分 → constitutional-convention Hamilton/Jefferson 雄辩党争母题跨 Topic 锚 + 输了眼前仗但「言辞比刀长久」两千年应验',
      engagementHook: '他们砍了我的舌头想让言辞闭嘴,可两千年后,美国国父的书架上还摆着我的演说集。我输了眼前那场仗——可「言辞比刀更长久」,好像真的应验了。你信哪一个能赢:此刻的刀,还是长久的话?',
      expectsRealAnswer: false,
    },
    {
      id: 'ci-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我,两种说法都站得住。\n\n一种说法:我是共和国最后的良心。当所有人都倒向刀和钱,只有我,一个手无寸铁的人,从头到尾不肯闭嘴。我用言辞拆过政变,流放也没让我变节,最后宁可被砍头也要替共和说话。我守住的不是一场胜利,是一种「该怎么活」的样子,这个样子两千年后还在被人学。\n\n另一种说法:我是个看不清现实的失败者。我一辈子守着「言辞救国」的幻觉,可面包能买的选票,我一句话也买不动。共和真正的病——土地、贫穷、被买空的选票——我看见了,却从没真去解决,只会站在元老院里慷慨陈词。我反复赌「道理能赢」,反复赌错,最后把命也搭进去,共和照样没救回来。\n\n这两边不是「优点加缺点」。是同一个我的两面——同一份对言辞的信仰,既是最高贵的坚守,也是最致命的天真。\n\n你怎么看?想 30 秒,写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the last conscience of the Republic. When everyone else fell toward the sword and the gold, only I, an unarmed man, refused to fall silent from start to finish. I took apart a coup with words, exile did not turn my coat, and in the end I would rather be beheaded than stop speaking for the Republic. What I held was not a victory but a way of "how one ought to live," a way still studied two thousand years on.\n\nThe other view: I was a failure who could not see reality. All my life I clung to the illusion that "words save a country," yet I could not buy with a single line the votes that bread could buy. The Republic\'s true disease, the land, the poverty, the bought-out votes, I saw it, but never truly set out to solve it; I only stood in the Senate and made fine speeches. I bet again and again that "reason wins," bet wrong again and again, and in the end threw in my life too, and the Republic was no more saved than before.\n\nThese are not "strengths and weaknesses." They are two faces of the same me, the same faith in words that was both the noblest constancy and the most fatal naivety.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (共和最后的良心/手无寸铁不肯闭嘴/守住「该怎么活」的样子) / 另一种说法 (看不清现实的失败者/守言辞救国幻觉/看见病根却没真解决/反复赌错搭命共和照样没救) / 同一份信仰最高贵坚守也最致命天真 / 想 30 秒',
      engagementHook: '一种说法:我是共和最后的良心;另一种说法:我是看不清现实、守着幻觉的失败者。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'ci-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,你会怎么评价一个「只带着言辞」去对抗一个时代的人?\n\n一个手无寸铁的人,在一个开始用刀和钱决定一切的时代,固执地相信「道理能赢」,最后输了眼前的一切——丢了官、被流放、被砍头割舌——可他写下的东西,两千年后还在塑造一个个新的共和国。他的坚持,到底是高贵,还是天真?他的失败,到底是输了,还是赢在了更长的时间里?把这些放在同一个天平上,你怎么称?\n\n再想一步。今天你身边,有没有这样的时刻:大家都用「谁声音大、谁人多、谁有资源」来解决问题,而你心里清楚什么是对的,却势单力薄?\n\n那时候,你会跟着随大流闭嘴,还是会像我一样——明知可能输,也要把那句对的话,说出来?',
        en: 'Having walked my whole life, how would you judge a man who went up against an age armed with nothing but words?\n\nAn unarmed man, in an age that had begun to settle everything with the sword and with gold, stubbornly believing that "reason wins," lost everything before him in the end, his office, exiled, beheaded, his tongue cut out, yet what he wrote still shapes new republics two thousand years on. His constancy, was it noble, or naive? His failure, did he lose, or win across a longer span of time? Put these on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there a moment like this: everyone settles things by "who is loudest, who has the most people, who has the resources," while you know in your heart what is right, and stand alone and weak?\n\nWhen that happens, will you fall silent and go with the crowd, or will you do what I did, knowing you might lose, and still say the right thing out loud?',
      },
      deliverGoal: 'N12 close — 评价只带言辞对抗时代的人 (固执信道理能赢/输了眼前一切但写的东西塑造新共和国/坚持是高贵还是天真/失败是输了还是赢在更长时间同一天平) + transfer「今天你身边大家用声音大/人多/资源解决问题而你势单力薄」+ 你会随大流闭嘴还是像他明知可能输也把对的话说出来',
      engagementHook: '一个只带着言辞去对抗一个时代的人,输了眼前的一切,可他写的东西两千年后还在塑造新的共和国。你会怎么评价这样一个人?今天你身边那个「你知道什么对、却势单力薄」的时刻,你会闭嘴随大流,还是把对的话说出来?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 无地的罗马平民/退伍兵 (receiving-end) — DEFAULT
// composite character based on Gracchi 改革背景
// ═══════════════════════════════════════════════════════════════════════

export var landlessPlebeianLens = {
  id: 'landless-plebeian-receiving-end',
  name: 'A Landless Roman Plebeian',
  nameCn: '一个无地的罗马平民',
  role: 'receiving-end',
  perspectiveTag: 'vote-for-bread',
  icon: '🌾',
  description: {
    cn: '一个普通罗马平民,大约公元前 130 年生(这是一个合成人物,综合了那个年代成千上万失地农民和退伍兵的真实遭遇,具体姓名和家庭是叙事性的)。他家祖上有一小块地,他自己当兵替罗马打了多年仗。等他退伍回家,地已经被大贵族吞了。他成了挤在罗马城里、靠施舍和打零工过活的无地平民。他手里还剩最后一样东西:一张选票。这一遍,你从那个共和制度从来没真正算进去的人这边,看一个共和国是怎么从最底层被买空的。',
    en: 'An ordinary Roman plebeian, born around 130 BCE (a composite character, drawing together the real experiences of thousands of landless farmers and discharged veterans of that age; the specific name and family are part of the storytelling). His family once held a small plot of land, and he himself soldiered for Rome through many years of war. When he came home from service, the land had been swallowed by the great nobles. He became one of the landless poor crowded into the city of Rome, living on handouts and odd jobs. One thing was left in his hand: a single vote. This pass lets you see, from the side of the people the republican system never truly counted in, how a republic is bought out from the very bottom.',
  },
  storyboard: [
    {
      id: 'lp-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我手里攥着一张投票用的小木牌。今天有人要花钱买它。\n\n我是一个罗马平民。我没什么名字值得你记——在这座城里,像我这样的人有几十万,挤在又脏又挤的出租屋里,饿着肚子。\n\n（我是一个合成人物——把那个年代成千上万失地农民和退伍兵的真实遭遇,凑成一个人讲给你听。我的具体名字和家是叙事性的,但我身上发生的每一件事,都真的发生在那几十万人身上。）\n\n我曾经不是这样的。我家祖上有地,我自己替罗马当过兵,打过仗。\n\n可现在,我唯一还值钱的东西,就是这张选票。今天我要把它卖掉,换一袋面包。\n\n这一遍,你站进我这个位置。你会从最底下,看一个号称「人民当家」的共和国,是怎么被一张一张选票,卖空的。',
        en: 'In my hand I clutch a small wooden token, for voting. Today someone wants to buy it with money.\n\nI am a Roman plebeian. My name is not worth your remembering. In this city there are hundreds of thousands like me, crowded into filthy, packed rented rooms, going hungry.\n\n(I am a composite character, gathering the real experiences of thousands of landless farmers and discharged veterans of that age into one person to tell you. My specific name and family are part of the storytelling, but every single thing that happens to me truly happened to those hundreds of thousands.)\n\nI was not always this way. My family once held land, and I myself soldiered for Rome and fought in its wars.\n\nBut now the only thing of value I have left is this vote. Today I will sell it for a sack of grain.\n\nThis pass puts you in my place. From the very bottom, you will see how a republic that called itself "rule by the people" was sold empty, one vote at a time.',
      },
      deliverGoal: 'N1 hook — 攥着投票木牌有人要买 + 平民自我介绍 (几十万人挤出租屋饿肚子) + anti-fab 括号短句 (合成人物/具体名字家是叙事性但遭遇真发生在几十万人) + 曾有地当过兵 + 唯一值钱的是选票今天卖换面包 + 这一遍从最底下看共和被卖空',
      engagementHook: '我手里这张选票,今天有人要花钱买它,换一袋面包。如果你饿着肚子,有人出钱买你的那一票,你卖不卖?',
      expectsRealAnswer: false,
    },
    {
      id: 'lp-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我家原来的样子,你才懂我是怎么落到今天这步的。\n\n我祖父、我父亲,都是有地的小农。我们家在意大利乡下有一小块田,种点谷子、养几只羊,日子不富,但能自己养活自己。在罗马,有地的农民是有尊严的——你有地,你才算个堂堂正正的公民,才有资格当兵保卫罗马。\n\n罗马就是靠我们这样千千万万的小农撑起来的。打仗的是我们,种地的是我们,投票的也是我们。\n\n那时候我相信:这个共和国,是属于我们这些普通人的。我们有地、有票、有枪,谁也别想骑到我们头上。\n\n我那时候还不知道,正是「打仗」这件事,会一步步把我家的地,从我们手里夺走。',
        en: 'First let me tell you what my family once was, so you understand how I fell to where I am.\n\nMy grandfather and my father were both small landed farmers. Our family had a little plot in the Italian countryside, grew some grain, kept a few sheep. Not rich, but able to feed ourselves. In Rome, a landed farmer had dignity. To hold land was to count as a proper citizen, and to be fit to soldier in defense of Rome.\n\nRome was held up by millions of small farmers like us. We were the ones who fought, the ones who farmed, the ones who voted.\n\nIn those days I believed this republic belonged to ordinary people like us. We had land, votes, and arms; no one could climb up onto our backs.\n\nI did not yet know that it was war itself that would, step by step, take my family\'s land out of our hands.',
      },
      deliverGoal: 'N2 setup — 平民原来的样子 (祖父父亲有地小农/意大利乡下小块田能自养) + 罗马有地农民有尊严 (有地才算公民才能当兵) + 罗马靠千万小农撑起 (打仗种地投票都是他们) + 曾信共和属于普通人 + 伏笔: 正是打仗夺走他家的地',
      engagementHook: '那时候我相信:有地、有票、有枪,这个共和国就是属于我们普通人的。你觉得,一个人拥有什么,才算真正在一个国家里「有一席之地」?',
      expectsRealAnswer: false,
    },
    {
      id: 'lp-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我的地是怎么没的?我说给你听。\n\n罗马的仗越打越远,一打就是好几年。我被征去当兵,离开家乡,去外省打仗。我走的时候,地交给家里人种。\n\n可一个壮劳力走了好几年,家里的地谁种得过来?收成一年比一年差。偏偏旁边那些大贵族,他们有的是钱,有的是从战争里抓来的奴隶,几百个奴隶不要工钱地种地。我们这种自己种地的小农,根本拼不过。\n\n等我打完仗、活着回到家,地已经被旁边的大贵族低价买走、或者干脆吞并了。我替罗马流血打仗那几年,正是我家的地被人吃掉的几年。\n\n这就是那个年代最残酷的循环:罗马靠小农当兵去打仗扩张,可打仗本身,把小农变成了无地的穷人。地越来越集中到少数大贵族手里,我们这些人,只能往罗马城里挤。\n\n我不是个例。我是几十万人。',
        en: 'How did I lose my land? Let me tell you.\n\nRome\'s wars went farther and farther, lasting years at a stretch. I was conscripted, left my home village, and went to fight in the provinces. When I left, I handed the land to my family to work.\n\nBut with a strong worker gone for years, who at home could work the land? The harvest grew worse year by year. And the great nobles beside us, they had money, and slaves taken in war, hundreds of slaves working the land for no wages. Small farmers who worked our own fields simply could not compete.\n\nWhen the fighting was done and I came home alive, the land had been bought cheap by the great noble next door, or simply swallowed up. The very years I bled for Rome were the years my family\'s land was eaten away.\n\nThis was the cruelest cycle of that age: Rome relied on small farmers to soldier and expand, yet the soldiering itself turned the small farmers into the landless poor. The land gathered more and more into the hands of a few great nobles, and people like us could only crowd into the city of Rome.\n\nI am not one rare case. I am hundreds of thousands.',
      },
      deliverGoal: 'N3 setup — 地怎么没的 (被征兵离家打仗几年/家里地没人种收成差) + 大贵族有钱有战争抓来的奴隶种地小农拼不过 + 打完仗回家地被低价买走或吞并 + 那年代残酷循环 (靠小农当兵扩张/打仗本身把小农变无地穷人/地集中到少数贵族) + 不是个例是几十万人',
      engagementHook: '我替罗马流血打仗那几年,正是我家的地被人吃掉的几年。一个国家靠普通人去打仗扩张,可打仗本身却让普通人变穷——你觉得这种循环,谁能打破?',
      expectsRealAnswer: false,
    },
    {
      id: 'lp-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你失了地,挤在罗马城里。你不是没指望过有人来救。\n\n几十年前,有两兄弟试过。Tiberius 和 Gaius Gracchi(格拉古兄弟),先后当上保民官——那是专门替平民说话的官。他们想立一条法:把国家的公有土地,重新分给像你这样的失地农民。\n\n你爹那辈人,曾经把全部希望押在他们身上。那是合法的、和平的、走正规程序的改革——一个穷人能想到的、最体面的翻身办法。\n\n结果呢?哥哥 Tiberius 在公元前 133 年,被一群元老院的大贵族,当街用棍子打死,尸体扔进了台伯河。弟弟 Gaius 几年后也死在政治暴力里。\n\n你看明白了:当你们想用「合法的、和平的」方式要回属于你们的东西,那些有权有地的人,直接动用了暴力。\n\n那一刻你心里得想:既然「好好讲理、走正规程序」会被打死,那像你这样的人,还剩下什么路?',
        en: 'Now you are me.\n\nYou have lost your land and crowd into the city of Rome. It is not that you never hoped for someone to save you.\n\nDecades ago, two brothers tried. Tiberius and Gaius Gracchi, in turn, became tribunes, the office that spoke for the common people. They wanted to pass a law to redistribute the state\'s public land to landless farmers like you.\n\nYour father\'s generation staked all their hope on them. It was lawful, peaceful, by proper procedure, the most respectable way a poor man could imagine to rise again.\n\nThe result? The elder, Tiberius, in 133 BCE, was clubbed to death in the street by a mob of great senators, his body thrown into the Tiber. The younger, Gaius, also died in political violence a few years later.\n\nYou see it clearly now: when you tried to reclaim what was yours by "lawful, peaceful" means, the men with power and land turned straight to violence.\n\nIn that moment you must ask yourself: if "arguing honestly, going by proper procedure" gets you clubbed to death, what road is left for a person like you?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 失地挤罗马城 + Gracchi 兄弟试过 (保民官想立法分公有土地给失地农民) + 父辈押全部希望/合法和平正规程序最体面的翻身办法 + Tiberius 前 133 被打死扔台伯河/Gaius 死于暴力 + 看明白合法和平要回属于自己的会被动用暴力 + 拷问: 走正规程序会被打死还剩什么路',
      engagementHook: '我们想用合法、和平的方式要回属于自己的东西,结果带头的人被当街打死。如果「好好讲理」会被打死,像我这样的人,还剩下什么路?',
      expectsRealAnswer: false,
    },
    {
      id: 'lp-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '格拉古兄弟死后,像我这样的人,慢慢学会了一件事:别再指望那套「合法程序」了。\n\n谁能给我饭吃,我就跟谁。\n\n罗马的大人物们也看明白了这一点。他们发现:城里这几十万饿肚子的平民,本身就是一股巨大的力量——我们手里有选票,我们能上街,我们关键时刻能当兵。谁能喂饱我们,谁就能用我们。\n\n于是他们开始争着拉拢我们。一个将军 Marius(马略)做了一件改变一切的事:他打开军队的大门,让我们这些没地的穷人也能参军。以前当兵要自己有地、自备装备;现在,只要你穷、你愿意,你就能跟着将军去打仗,他管你吃、管你穿,打赢了还分你战利品和地。\n\n你听出问题了吗?以前,士兵效忠的是罗马这个国家。现在,士兵效忠的是那个给他饭吃、给他地的将军个人。\n\n军队,从国家的军队,慢慢变成了某个强人的私人军队。而我,就是那支私人军队里的一个兵。',
        en: 'After the Gracchi died, people like me slowly learned one thing: stop counting on that "lawful procedure."\n\nWhoever can feed me, I will follow.\n\nThe great men of Rome saw this too. They realized that the hundreds of thousands of hungry plebeians in the city were themselves a vast force. We held votes, we could fill the streets, and at the crucial moment we could soldier. Whoever could feed us could use us.\n\nSo they began to compete for us. A general named Marius did something that changed everything: he threw open the doors of the army to let the landless poor enlist. Before, to be a soldier you needed land of your own and your own gear; now, if you were poor and willing, you could follow a general to war, and he fed you, clothed you, and after a victory shared the spoils and land with you.\n\nDo you hear the trouble? Before, a soldier was loyal to Rome the country. Now, a soldier was loyal to the general who fed him and gave him land, the man himself.\n\nThe army, from the country\'s army, slowly became some strongman\'s private army. And I was one soldier in that private army.',
      },
      deliverGoal: 'N5 story — 格拉古死后学会别指望合法程序/谁给饭跟谁 + 罗马大人物看明白几十万饿肚子平民是巨大力量 (有选票/能上街/能当兵) + Marius 马略改革 (打开军队大门让无地穷人参军/将军管吃管穿分战利品和地) + 士兵从效忠国家变效忠给饭给地的将军个人 + 军队变私人军队/我是其中一个兵',
      engagementHook: '将军管我吃、管我穿、打赢分我地——慢慢地,我效忠的不再是罗马,是那个给我饭的将军个人。当一支军队只忠于一个人,这个国家还安全吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'lp-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在,回到开头那一刻。我手里攥着那张投票的小木牌。\n\n选举日,有人来找我。他代表一个有钱有兵的大人物——可能是 Caesar(凯撒)这样的人。他不跟我讲什么「公民责任」「共和尊严」。他只问我一句:你这一票,投给我家主人,我给你这袋面包,外加一张角斗表演的票。\n\n你以为我不知道这是在卖自己最后的尊严吗?我知道。\n\n可我已经三天没吃饱了。我那套「合法翻身」的指望,几十年前就跟格拉古兄弟一起,被扔进了台伯河。我手里这张选票,本来是用来约束权贵、保护我自己的——可它现在唯一的用处,就是换今天这顿饭。\n\n于是我把选票卖了。\n\n这就是一个共和国被买空的样子。不是某一天突然垮掉的,是几十万个我,一个一个,在饿肚子的时候,把自己手里那点本该用来守护共和的东西,卖给了正在摧毁共和的人。\n\n(我卖出去的这张票,后来变成了什么——你换到 Caesar 那一遍,会从买票的人那边看见。)',
        en: 'Now, back to the moment at the start. In my hand I clutch that small wooden voting token.\n\nOn election day, a man comes to me. He acts for a great man with money and soldiers, perhaps a man like Caesar. He does not speak to me of "civic duty" or "the dignity of the republic." He asks me only one thing: cast your vote for my master, and I give you this sack of grain, and a ticket to the gladiator games.\n\nYou think I do not know I am selling my last dignity? I know.\n\nBut I have not eaten my fill in three days. My hope of "lawful rising" was thrown into the Tiber with the Gracchi decades ago. This vote in my hand was meant to check the powerful and protect me; now its one use is to buy today\'s meal.\n\nSo I sell the vote.\n\nThis is what a republic looks like when it is bought out. It did not collapse one day all at once. It was hundreds of thousands of me, one by one, in our hunger, selling the little thing in our hands that should have guarded the republic, to the very men destroying it.\n\n(What became of this vote I sold, you will see from the buyer\'s side when you switch to Caesar\'s pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 回到开头攥木牌 + 选举日有人代表有钱有兵大人物(如 Caesar)来 + 不讲公民责任只问: 投我主人给面包+角斗票 + 平民知道在卖最后尊严但三天没吃饱/合法翻身指望随格拉古进台伯河 + 选票本该约束权贵唯一用处是换饭 + 卖票 + 共和被买空不是突然垮是几十万人一个个卖 + 桥到 Caesar lens (买票人那边看)',
      engagementHook: '我知道卖掉这一票就是卖掉最后的尊严,可我三天没吃饱了。这张本该用来守护共和的票,现在唯一的用处就是换今天这顿饭。是我太软弱,还是这套制度先抛弃了我?',
      expectsRealAnswer: false,
    },
    {
      id: 'lp-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我卖出去的,不只是一张选票。\n\n那些买我们选票的大人物,拿着我们这几十万张票,爬上了罗马最高的位置。然后他们彼此之间,为了争谁当老大,打了起来。\n\n公元前 49 年,我跟着的那个将军——还有他对面的将军——带着军队,在意大利、在希腊、在埃及,打来打去。这就是内战。\n\n你猜内战里,死的、流血的、被征去当炮灰的,是谁?\n\n是我。是我们这些卖了选票、参了军、跟着将军走的穷人。大人物们争天下,赌注是整个罗马;可真正下场流血的,是我这样的人。\n\n我曾经以为,把票卖给一个强人,至少能换口饭、换块地。可我没想到,我换来的,是被卷进一场又一场没完没了的内战,替别人争天下去送命。\n\n我们这些人,先是被夺走了地,然后被买走了票,最后被当成柴火,扔进了大人物们争权的火堆里。',
        en: 'What I sold was not only a vote.\n\nThe great men who bought our votes, holding our hundreds of thousands of ballots, climbed to the highest places in Rome. Then, among themselves, they fought over who would be the master.\n\nIn 49 BCE the general I followed, and the general across from him, marched their armies and fought back and forth, in Italy, in Greece, in Egypt. This was civil war.\n\nGuess who, in that civil war, did the dying, the bleeding, the being conscripted as cannon fodder?\n\nMe. Us, the poor who had sold our votes, enlisted, and followed the generals. The great men contested the world, and the stake was all of Rome; but the ones who actually went down and bled were people like me.\n\nI once thought that selling my vote to a strongman would at least win a meal, a piece of land. I did not foresee that what I won was being swept into one endless civil war after another, dying to win the world for someone else.\n\nWe were first stripped of our land, then bought of our votes, and at last used as kindling, thrown onto the bonfire of the great men\'s struggle for power.',
      },
      deliverGoal: 'N7 story — 卖的不只一张选票 + 买票大人物爬上最高位然后彼此争老大打起来 + 前 49 内战 (跟的将军 vs 对面将军在意大利/希腊/埃及打) + 内战里死流血当炮灰的是平民 (卖票参军跟将军的穷人) + 大人物争天下赌注整个罗马但下场流血的是平民 + 先被夺地再被买票最后被当柴火扔进争权火堆',
      engagementHook: '大人物们争天下,赌注是整个罗马;可真正下场流血、被当炮灰的,是我这样的人。我们先被夺走了地,再被买走了票,最后被当成柴火扔进他们争权的火堆。你说,这是谁的共和国?',
      expectsRealAnswer: false,
    },
    {
      id: 'lp-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想跟你说一句最实在的话,可能跟你在课本上读到的不太一样。\n\n课本会告诉你:罗马共和制是个伟大的发明,有选举、有元老院、有制衡,「人民」能参与政治。\n\n可对我来说,这套「人民当家」的共和,从一开始,就没真正算上我。\n\n你想想:罗马城里能投票的,是「公民」。可女人不算,不能投票。奴隶不算,他们是会说话的工具。意大利其他城市的人很久都不算。就算是我这样的男性公民,我穷、我没地、我大字不识,我那一票在选举的设计里,分量也远比不上一个有钱有地的大贵族。\n\n所以你看,这个共和的「我们人民」,从来都只是「我们当中一部分人」。\n\n我卖掉选票的时候没那么愧疚——因为我心里清楚,这张票从来没真正给过我力量。它只在我饿肚子时,值一袋面包。\n\n这就是我想让你看见的:共和国唱着「自由」「平等」,可有一大群人,从来就站在那扇门外面。我,就是门外的人。',
        en: 'I want to tell you the most honest thing, and it may not match what you read in the textbook.\n\nThe textbook will tell you the Roman Republic was a great invention, with elections, a Senate, checks and balances, where "the people" took part in politics.\n\nBut for me, this "rule by the people" republic never truly counted me in from the start.\n\nThink about it: in the city of Rome, those who could vote were "citizens." But women did not count; they could not vote. Slaves did not count; they were tools that could speak. People of other Italian cities did not count for a long time. And even a male citizen like me, poor, landless, unable to read, my single vote, by the design of the elections, weighed far less than that of one rich, landed noble.\n\nSo you see, this republic\'s "we the people" was always only "some of us."\n\nWhen I sold my vote I did not feel so guilty, because I knew in my heart this vote had never truly given me power. It was worth a sack of grain only when I was starving.\n\nThis is what I want you to see: the republic sang of "freedom" and "equality," yet a great crowd of people stood, from the start, outside that door. I am one of the people outside.',
      },
      deliverGoal: 'N8 story (反 Whig 核心) — 最实在的话跟课本不一样 + 课本说共和伟大发明有选举元老院制衡人民参与 + 但「人民当家」从一开始没真算上他 + 谁不算: 女人不算/奴隶不算(会说话工具)/其他意大利城市人很久不算/穷无地不识字的票分量远不如有钱有地贵族 +「我们人民」从来只是「我们当中一部分人」+ 卖票不愧疚因票从没真给力量 + 共和唱自由平等但一大群人站门外/他是门外的人',
      engagementHook: '课本说罗马共和很伟大,「人民」能参与政治。可女人不算、奴隶不算、穷人那一票远不如富人——这个共和的「我们人民」,从来只是「我们当中一部分人」。你觉得,把一部分人挡在门外的「民主」,还算民主吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'lp-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '故事的结局,你大概也猜到了。\n\n那些靠买我们选票、靠我们当兵打内战上位的强人,最后赢家只剩一个。先是 Caesar(凯撒)跨过卢比孔河、当上终身独裁官;他被刺死后,又乱打了一阵,最后他的养子 Octavian(屋大维)赢了所有人。\n\n公元前 27 年,Octavian 当上实际的皇帝,称号叫 Augustus(奥古斯都)。罗马有了皇帝,五百年的共和制正式结束。\n\n那对我这样的人,意味着什么?说来意外:对很多穷人,皇帝来了,日子反而稳了点。Augustus 给退伍兵分地,给平民发粮、办娱乐,他需要我们安分,所以喂着我们。\n\n你品出这里的苦味了吗?共和崩塌时,我这样的底层人并没有多伤心——因为那个「共和」,本来就没真正属于过我。一个皇帝肯赏我一口饭,我就接了。\n\n一个共和国能不能活,到头来要看它有没有真正算上最底下那群人。它没有。所以它死的时候,门外那群人,没有替它哭。',
        en: 'You can probably guess how the story ends.\n\nThe strongmen who rose by buying our votes and using us to fight their civil wars, in the end only one winner was left. First Caesar crossed the Rubicon and became dictator for life; after he was stabbed, there was more chaos, and at last his adopted son Octavian beat everyone.\n\nIn 27 BCE Octavian became the emperor in fact, with the title Augustus. Rome had an emperor, and the five-hundred-year republic was formally over.\n\nWhat did that mean for a person like me?\n\nIt may surprise you: for many of the poor like me, when the emperor came, life actually grew a bit steadier. Augustus gave land to discharged veterans, gave grain and entertainment to the city\'s plebeians; he needed us quiet, so he kept us fed.\n\nDo you taste the bitterness here? When the Republic finally collapsed, people at the bottom like me did not grieve much, because that "republic" had never truly been ours. An emperor willing to spare me a meal, and I took it.\n\nWhether a republic lives or dies, in the end, depends on whether it truly counted in the people at the very bottom. It did not. So when it died, the crowd outside the door did not weep for it.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 结局: 强人赢家只剩一个 (Caesar 跨卢比孔/当终身独裁官/被刺后乱打/Octavian 赢所有人) + 前 27 Octavian 称 Augustus 皇帝/五百年共和正式结束 + 对穷人意味: 皇帝来了日子反而稳点 (Augustus 给退伍兵分地/给平民发粮办娱乐/需要安分所以喂着) + 苦味: 共和崩塌时底层不伤心因从没属于过他 + 共和能不能活看有没真正算上最底下那群人/它没有/它死时门外人没替它哭',
      engagementHook: '共和制崩塌的时候,我这样的底层人并没有多伤心——因为那个「共和」本来就没真正属于过我。一个连最底层都没真正算上的共和国,死的时候,门外的人为什么要替它哭?',
      expectsRealAnswer: false,
    },
    {
      id: 'lp-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远,跳过两千年。我这个无名小卒的故事,其实一直在重演。\n\n两千年后,大西洋对岸有个新国家,叫美国。它学罗马共和,设计了选举、议会、制衡。可它一样有一个老问题:当少数人占走了绝大多数的财富,普通人手里那一票,还顶用吗?\n\n十九世纪末,美国有个时期叫「镀金时代」(Gilded Age):一小撮巨富垄断了铁路、石油、钢铁,富可敌国;他们用钱影响选举、收买议员,普通工人累死累活却分不到多少。那情形,跟我那个时代——少数大贵族吞走土地、用钱买空穷人的选票——像得吓人。(你跑过镀金时代那个 Topic,会认出这套老把戏。)\n\n所以别把我当成一个遥远的古代笑话。「财富集中到少数人手里,然后这少数人反过来买空了所谓的『民主』」——这件事,从罗马,到美国,到今天,一直在发生。\n\n我手里那张被卖掉的选票,两千年后,还在很多人手里。',
        en: 'Pull the lens far back, leap across two thousand years. The story of me, a nobody, has in fact been repeating all along.\n\nTwo thousand years later, across the Atlantic, a new country called America learned from the Roman Republic and designed elections, a legislature, checks and balances. But it had the same old problem: when a few people take the great bulk of the wealth, is the single vote in an ordinary person\'s hand still worth anything?\n\nLate in the nineteenth century, America had a time called the Gilded Age: a small handful of the super-rich monopolized railroads, oil, and steel, wealthy as kingdoms, while they used money to sway elections and buy legislators, and ordinary workers toiled to death for little. That picture, like my own age, a few great nobles swallowing the land and buying out the poor\'s votes, is frighteningly alike. (Run the Gilded Age topic and you will recognize this old trick.)\n\nSo do not take me as a distant ancient joke. "Wealth concentrates into a few hands, and those few then buy out the so-called democracy", this has gone on, from Rome, to America, to today.\n\nThe vote I sold from my hand is, two thousand years later, still in many hands.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 跳两千年/无名小卒故事一直重演 + 美国学罗马共和设计选举议会制衡但同样老问题: 少数人占走财富普通人那票还顶用吗 + Gilded Age 镀金时代 (一小撮巨富垄断铁路石油钢铁/用钱影响选举收买议员/工人分不到) 跟罗马少数贵族吞土地买空选票像得吓人 → gilded-age 跨 Topic 锚 + 财富集中→买空民主从罗马到美国到今天一直发生 + 那张被卖的选票两千年后还在很多人手里',
      engagementHook: '少数人占走财富,然后反过来买空所谓的「民主」——这件事从罗马,到美国镀金时代,到今天,一直在发生。我手里那张被卖掉的选票,两千年后还在很多人手里。这是巧合,还是有钱就会这样?',
      expectsRealAnswer: false,
    },
    {
      id: 'lp-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,再看罗马共和的崩溃,两种说法都站得住。\n\n一种说法:是我们这些平民,亲手葬送了共和。我们贪图一袋面包、一场表演,就把神圣的选票卖给军阀;我们为了一口饭、一块地,就给强人当兵打内战。如果我们守住自己的票、自己的尊严,Caesar 这样的人根本爬不上去。共和是被我们的软弱和短视,一点点出卖掉的。\n\n另一种说法:我们是这套制度最早、也最彻底的受害者。是制度先抛弃了我们——它一边靠我们打仗扩张,一边眼睁睁看着我们的地被吞掉;当我们想用合法方式翻身,它就把带头的人打死扔进河里。一个让人饿到要卖选票的共和国,有什么资格怪卖票的人?是它先把我们逼到墙角,我们才把它最后的门钥匙,卖了出去。\n\n这两边不是「谁对谁错」。是同一件事的两面——一群被制度抛弃的人,最终也抛弃了这个制度。\n\n你怎么看?想 30 秒,写下来。',
        en: 'Having walked my whole life, look again at the fall of the Roman Republic. Both views stand.\n\nOne view: it was we plebeians who buried the Republic with our own hands. For a sack of grain, for a show, we sold our sacred vote to warlords; for a meal, for a plot of land, we soldiered in the strongmen\'s civil wars. Had we held to our votes and our dignity, a man like Caesar could never have climbed up. The Republic was sold off, bit by bit, by our weakness and our short sight.\n\nThe other view: we were this system\'s earliest and most complete victims. The system abandoned us first. It relied on us to fight and expand while it watched our land be swallowed; when we tried to rise by lawful means, it clubbed our leaders to death and threw them in the river. What right has a republic that starves a man into selling his vote to blame the man who sells it? It drove us into the corner first; only then did we sell off the last key to its door.\n\nThese are not "who is right and who is wrong." They are two faces of one thing: a people abandoned by the system, in the end, abandoned the system too.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (平民亲手葬送共和/贪面包表演卖票/为饭为地当兵打内战/守住票尊严 Caesar 爬不上去/被软弱短视出卖) / 另一种说法 (制度最早最彻底受害者/制度先抛弃: 靠他们打仗却看着地被吞/想合法翻身就打死带头人/让人饿到卖票有什么资格怪卖票人/被逼到墙角才卖门钥匙) / 同一件事两面: 被制度抛弃的人最终也抛弃制度 / 想 30 秒',
      engagementHook: '一种说法:是我们贪图一袋面包,亲手葬送了共和;另一种说法:是制度先抛弃了我们,把我们逼到墙角。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'lp-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一块被吞掉的地,一段替罗马流血的兵役,一张换了面包卖掉的选票——你会怎么评价一个共和国的崩溃?\n\n一个号称「人民当家」的共和国,从一开始就把女人、奴隶、穷人挡在门外;它靠最底层的人打仗扩张,又眼看着这些人失地、挨饿、把选票一张张卖给毁掉它的人。它崩塌的时候,门外那群人没有替它哭。这件事里,到底该怪卖票的穷人,还是怪那个先抛弃穷人的制度?把它们放在同一个天平上,你怎么称?\n\n再想一步。今天你身边,有没有这样一个地方:嘴上说着「人人平等、人人有份」,可真正能说话、能做主的,永远是有钱、有人脉、有资源的那一小撮——而剩下的大多数,像我当年一样,连自己那一票都觉得「反正没用」?\n\n那时候,你会像我一样,觉得「反正轮不到我」就把自己那一份悄悄卖掉、放弃掉,还是会去想:怎么才能让门外的人,真正被算进来?',
        en: 'Having walked my whole life, a plot of land swallowed, years of soldiering and bleeding for Rome, a single vote sold for bread, how would you judge the collapse of a republic?\n\nA republic that called itself "rule by the people" shut out women, slaves, and the poor from the very start; it relied on the people at the bottom to fight and expand, then watched those same people lose their land, go hungry, and sell their votes one by one to the men who destroyed it. When it collapsed, the crowd outside the door did not weep for it. In this, whom do you blame, the poor who sold their votes, or the system that abandoned the poor first? Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there a place like this: where the talk is "everyone is equal, everyone has a share," yet the ones who can really speak and decide are always that small handful with money, connections, and resources, while the rest of the majority, like me back then, feel even their own one vote is "useless anyway"?\n\nWhen that happens, will you do as I did, feel "it will never come to me" and quietly sell off or give up your share, or will you ask: how can the people outside the door be truly counted in?',
      },
      deliverGoal: 'N12 close — 评价共和崩溃 (号称人民当家却从一开始挡住女人奴隶穷人/靠最底层打仗扩张又看着他们失地挨饿卖票给毁它的人/崩塌时门外人没哭/怪卖票穷人还是怪先抛弃穷人的制度同一天平) + transfer「今天你身边嘴上人人平等但真能做主永远是有钱有人脉那一小撮/大多数觉得自己那票反正没用」+ 你会像我觉得轮不到我就放弃自己那份还是去想怎么让门外人真正被算进来',
      engagementHook: '走完我这一生,你会怎么评价一个共和国的崩溃?今天你身边,有没有那种「嘴上人人平等、真正做主永远是那一小撮人」的地方?那时候,你会像我一样觉得「反正轮不到我」就放弃自己那一份,还是去想:怎么让门外的人真正被算进来?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'julius-caesar':                   juliusCaesarLens,
  'cicero':                          ciceroLens,
  'landless-plebeian-receiving-end': landlessPlebeianLens,
};

// per TOPIC_ROADMAP_G6_G12.md C3 + receiving-end 优先 pattern:
// 失地平民 (composite) + 共和「民主」从来只属部分人 + N6「卖一张选票」跨 lens 对位 + 反 Whig 镜子
export var defaultLens = 'landless-plebeian-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'roman-republic-fall-44bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 12,
  estimatedMinutesPerLens: { 'julius-caesar': 32, 'cicero': 32, 'landless-plebeian-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, long-arc 12-node spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 12 nodes each / long-arc (共和制建立 c.509→格拉古 133→凯撒 49-44→崩溃 27 BCE, time-jumps justify long-arc)',
    'cross-lens micro-detail N6:「卖一张选票 / one vote for sale」一个动作两个方向 (平民失地后把票卖给军阀 vs Caesar 买票登顶 vs Cicero 言辞挡不住面包)',
    'defaultLens: landless-plebeian-receiving-end — 受影响者优先 (失地平民 composite + 共和民主只属部分人 + 反 Whig 镜子 + N11/N12 谁葬送共和 closing)',
    'expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: 平民是 composite 人物 (N1 括号短句标注: 具体名字家是叙事性, 遭遇真发生在几十万人); Caesar 临终引文不可确证不当真话引 (N8); Cicero 名言标 paraphrase「大意是」',
    'cultural ban: 全程用罗马真实术语 (元老院 Senate/执政官 consul/保民官 tribune/卢比孔河 Rubicon/格拉古 Gracchi/独裁官 dictator/rex/Augustus); BCE 纪年「公元前 X 年」',
    '反 Whig: 不写罗马给世界共和制进步起点; 共和崩溃展示共和制可从内部被财富集中/军阀化/民粹腐蚀; 共和民主从来只属部分人 (N8 核心); 给美国学生镜子: 共和制不是终点会死',
    'cross-Topic 锚: Caesar→Madison/Polybius/constitutional-convention + 法律高于人→magna-carta; Cicero→Hamilton/Jefferson 雄辩党争/constitutional-convention; 平民卖选票→gilded-age 财富集中腐蚀民主',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
