// ─── Jackson & Indian Removal 1830 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 杰克逊民主与印第安人迁移 · Andrew Jackson & Indian Removal 1830
// HSS-8.5 · APUSH Period 4 (Jacksonian Democracy + Trail of Tears) · AP US Gov (Worcester v. Georgia)
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md A3):
//   - quatie-trail-of-tears (receiving-end / Trail-of-Tears 切罗基母亲) — Quatie Ross c.1791-1839 真历史人物
//   - john-ross           (lonely-mediator / 法庭路线抗争) — John Ross 1790-1866 1/8 切罗基首领
//   - andrew-jackson      (perpetrator-actor / 民主扩大与种族清除同体) — 1767-1845
//
// defaultLens = 'quatie-trail-of-tears' (receiving-end 优先 — 女性 + Trail-of-Tears 母亲 + 同龄共情锚)
//
// qaTemplate: multi-faction (白人移民 vs 联邦 vs 最高法院 vs 切罗基内部 National Party / Treaty Party)
//
// 跨 lens micro-detail (N6 anchor):
//   1835.12.29 Treaty of New Echota — Topic 内三视角:
//   - Quatie N6: 受影响方 — 一张她没签的纸决定她要走
//   - John Ross 全程: 15,000+ 签名 petition vs 500 人 Treaty Party 签的 New Echota
//   - Jackson N6-N7: 用 Treaty Party 这张「合法」纸执行 Indian Removal Act
//
// Anti-fabrication 重点 (per 第 8 条 A + J):
//   - 「Quatie 把毯子给生病孩子后死」是传说 (1890s soldier John G. Burnett 信, 死后 52 年), NOT 史实 — N5/N7 显式标传说
//   - 「John Marshall 做了判决, 让他自己去执行」是 apocryphal (1864 Horace Greeley, Jackson 死后约 20 年) — Jackson N8 + John Ross N7 显式标
//
// 数学 + 年代自检:
//   Jackson 1767-1845 / John Ross 1790.10.3-1866 / Quatie c.1791-1839.2.1
//   Indian Removal Act 1830.5.28 / Worcester v. Georgia 1832 / Treaty of New Echota 1835.12.29
//   Trail of Tears 1838-39 / Ross 水路队 1838.12.5 出发 / Quatie 死 Victoria 号 1839.2.1
//   ~16,000 切罗基被迁 / ~4,000 死 / petition >15,000 签名
//
// per AUTHORING_PIPELINE.md 11 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N10 synthesis + N11 closing only true)
//   每 lens 11 nodes / 220-380 CN chars (anchor N6 + synthesis 可到 550) / 无 700+ / cultural ban 美国史用 real terms

// ═══════════════════════════════════════════════════════════════════════
// LENS 1 (default): Quatie Ross — receiving-end / Trail-of-Tears 切罗基母亲
// ═══════════════════════════════════════════════════════════════════════

export var quatieLens = {
  id: 'quatie-trail-of-tears',
  icon: '🪶',
  name: { cn: 'Quatie Ross', en: 'Quatie Ross' },
  role: { cn: '泪之路上的切罗基母亲', en: 'a Cherokee mother on the Trail of Tears' },
  description: {
    cn: 'Quatie Ross（约 1791-1839），出生在切罗基故土（今佐治亚州），切罗基族女性，首领 John Ross 的妻子。她跟丈夫养大五个孩子，1838 年冬天跟着切罗基民族被赶上西迁的路。1839 年 2 月 1 日，她在阿肯色河上一艘叫 Victoria 的汽船上，靠近 Little Rock 时染肺炎去世。这一遍让你从被驱逐的人这边，看一段美国课本里常被一句带过的历史。',
    en: 'Quatie Ross (c.1791-1839) was a Cherokee woman born in the Cherokee homeland in present-day Georgia, and the wife of Principal Chief John Ross. She and her husband raised five children. In the winter of 1838 she was forced west with the Cherokee Nation. On February 1, 1839, she died of pneumonia aboard a steamboat called the Victoria on the Arkansas River, near Little Rock. This view lets you stand with the people who were driven out — a history American textbooks often pass over in one line.',
  },
  storyboard: [
    {
      id: 'quatie-n1',
      phase: 'hook',
      content: {
        cn: '我叫 Quatie。\n\n这不是我护照上的名字——切罗基人没有护照。白人写文件时把我写成「Elizabeth」，但家里人叫我 Quatie。\n\n现在是 1838 年 11 月。我大概 47 岁。我站在自家门口——佐治亚北部的山，红土，玉米地刚收完。这栋木屋是我跟丈夫 John 一砖一瓦盖起来的，养大了五个孩子。\n\n屋外站着穿蓝制服的士兵。他们手里有一张纸，说这片地从今天起不再是我们的。\n\n这一遍，你跟我走。不是从签那张纸的人那边看，是从那张纸上从来没算进去的人这边看。',
        en: 'My name is Quatie.\n\nThat is not the name on my papers — the Cherokee did not have papers. When white men wrote documents they wrote me down as "Elizabeth." But my family calls me Quatie.\n\nIt is November 1838. I am about 47. I am standing in my own doorway — the hills of north Georgia, red clay, the corn just brought in. My husband John and I built this log house ourselves, board by board, and raised five children in it.\n\nOutside stand soldiers in blue. They hold a piece of paper that says this land stops being ours today.\n\nThis time, you walk with me. Not from where the people who signed that paper stood — from where the people that paper never counted stood.',
      },
      engagementHook: '白人文件把我写成「Elizabeth」，家里人叫我「Quatie」。一个人有两个名字——一个是别人给的，一个是自己人叫的。你有没有这种「外面一个名字、家里一个名字」的经历？',
      expectsRealAnswer: false,
    },
    {
      id: 'quatie-n2',
      phase: 'setup',
      content: {
        cn: '我得先告诉你我们是谁，不然你会以为我们是住帐篷、不识字的人——白人当时就是这么想的。\n\n1838 年的切罗基民族，有自己的成文宪法（1827 年写的，照着美国宪法的样子）、有自己的首都 New Echota、有自己的报纸《切罗基凤凰报》——用一种叫 Sequoyah 音节文字的本族文字印，是一个切罗基人 Sequoyah 自己发明的。\n\n很多切罗基人住木屋、种玉米、有自己的农场。我丈夫 John Ross 是首领，住的房子比很多白人邻居还体面。\n\n我跟你说这些，不是想证明「我们也很文明」——而是要你知道：白人不是因为我们「落后」才赶我们走。是因为我们脚下的红土里，1828 年在佐治亚发现了金子。',
        en: 'I have to tell you who we were first, or you will picture people in tents who could not read — that is exactly what white men pictured.\n\nThe Cherokee Nation of 1838 had its own written constitution (drafted in 1827, modeled on the United States Constitution), its own capital at New Echota, its own newspaper, the Cherokee Phoenix — printed in the Cherokee syllabary, a script a Cherokee man named Sequoyah invented himself.\n\nMany Cherokee lived in log houses, farmed corn, ran their own farms. My husband John Ross, the Principal Chief, lived in a house finer than many of his white neighbors.\n\nI tell you this not to prove "we were civilized too." I tell you so you know this: white men did not drive us out because we were "backward." They drove us out because in 1828 gold was found in the red clay under our feet, in Georgia.',
      },
      engagementHook: '切罗基有自己的宪法、首都、报纸、文字。白人不是因为我们「落后」才赶我们走——是因为 1828 年我们脚下发现了金子。这改变了你对「为什么会发生迁移」的想法吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'quatie-n3',
      phase: 'setup',
      content: {
        cn: '金子被发现后，事情坏得很快。\n\n1830 年，华盛顿那边通过了一部法律，叫 Indian Removal Act（印第安人迁移法案）。法律没有直接说「把切罗基人赶走」——它说的是「授权总统，跟东部各族谈判，用密西西比河以西的土地，换他们东部的土地」。\n\n听上去像是「公平交换」，对吧？但你要听懂这里的话术：所谓「谈判」，是士兵已经站在你家门口的谈判。所谓「交换」，是你不走也得走的交换。\n\n签这部法律的是总统 Andrew Jackson。佐治亚州不等联邦，自己先动手——通过法律说切罗基的土地归佐治亚管，切罗基人在自己的地上没有法律地位，连出庭作证都不行。\n\n我丈夫 John 决定不打仗——他要去华盛顿，用对方的法律、对方的法庭，跟对方斗。',
        en: 'After the gold, things went bad fast.\n\nIn 1830 Washington passed a law called the Indian Removal Act. The law did not say outright "drive the Cherokee out." It said it "authorized the President to negotiate with the eastern nations, trading land west of the Mississippi for their land in the East."\n\nSounds like a fair trade, doesn\'t it? But hear the trick in the words. The "negotiation" was a negotiation with soldiers already at your door. The "trade" was a trade you took whether you wanted to or not.\n\nThe man who signed that law was President Andrew Jackson. Georgia did not wait for the federal government — it acted first, passing laws that put Cherokee land under Georgia, gave Cherokee people no standing in their own land, not even the right to testify in court.\n\nMy husband John decided not to make war. He would go to Washington and fight them with their own law, in their own courts.',
      },
      engagementHook: '法律没说「赶走切罗基人」——它说「授权总统去谈判交换土地」。但谈判时士兵已经站在你家门口。同一件事，换个说法听起来就「公平」了。你怎么读这种「话术」？',
      expectsRealAnswer: false,
    },
    {
      id: 'quatie-n4',
      phase: 'personal-peak',
      content: {
        cn: '我先停下来，说说我自己——因为接下来你会听很多关于法庭、总统、法案的事，容易忘了路上走的是一个个人。\n\n我 1791 年生在切罗基故土。年轻时嫁过一个叫 Robert Henley 的男人，有过一个孩子，后来他去世了。1813 年夏天，我嫁给了 John Ross。\n\n我跟 John 一起养大五个孩子。我们还有过第六个，生下来就没了气。\n\n你要知道，John 后来成了那个跟两任美国总统当面交涉的首领，会十几年跑华盛顿、写无数封信、打官司打到最高法院。但回到家，他是一个会担心孩子咳嗽、会在冬夜里给我添柴的丈夫。\n\n历史书会记住他签的字、他打的官司。不会记住我。我没签过任何文件，没上过任何法庭。我只是那个在家里、在路上、把这个家一口口喂活的人。\n\n这一遍，历史书漏掉的那一半，由我来讲。',
        en: 'Let me stop and tell you about myself first — because you are about to hear a lot about courts, presidents, and acts, and it is easy to forget that the people walking the road were people, one at a time.\n\nI was born in 1791 in the Cherokee homeland. Young, I married a man named Robert Henley and had a child; later he died. In the summer of 1813 I married John Ross.\n\nJohn and I raised five children together. We had a sixth who was born without breath.\n\nUnderstand this. John would become the chief who faced two American presidents across a table, who spent more than a decade traveling to Washington, wrote countless letters, took a case all the way to the Supreme Court. But at home he was a husband who worried over a child\'s cough and added wood to the fire on winter nights.\n\nThe history books will remember the names he signed, the cases he argued. They will not remember me. I signed no documents, stood in no courtroom. I was only the one who kept this family fed, mouthful by mouthful, at home and on the road.\n\nThis time, the half the history books leave out — I am the one who tells it.',
      },
      engagementHook: '历史书记住 John 签的字、打的官司。不会记住我——我只是把这个家一口口喂活的人。你身边有没有这种「做了最多事、却最不会被记住」的人？',
      expectsRealAnswer: false,
    },
    {
      id: 'quatie-n5',
      phase: 'story',
      content: {
        cn: '我先讲一个你以后一定会听到的故事，因为它跟我有关——而我要亲口告诉你，它有几分真。\n\n后来很多人说：泪之路上，Quatie Ross 把自己的毯子让给一个发烧的孩子，自己冻着，所以才染病死了。\n\n这是一个动人的故事。但我要老实跟你说：这个说法，是一个当年的士兵 John G. Burnett 在事情过去 52 年后，1890 年代写的一封信里讲的。没有别的证据。学者们今天说，这很可能是后人加上去的传说，不是真发生的事。\n\n我为什么要拆穿一个让我显得高尚的故事？因为我不需要一个传说来证明我们受的苦是真的。四千个切罗基人死在路上，这是真的，不需要谁让毯子来加分。\n\n把一段苦难变成一个煽情的小故事，有时候反而让人忘了它有多大、多冷、多不该发生。',
        en: 'Let me tell you a story you will certainly hear someday, because it is about me — and I want to tell you myself how much of it is true.\n\nPeople would later say: on the Trail of Tears, Quatie Ross gave her own blanket to a feverish child, went cold herself, and so caught the sickness and died.\n\nIt is a moving story. But let me be honest with you: that version comes from a letter written by a former soldier, John G. Burnett, in the 1890s — 52 years after it happened. There is no other evidence. Scholars today say it is most likely a legend added by later people, not a thing that actually happened.\n\nWhy would I tear down a story that makes me look noble? Because I do not need a legend to prove our suffering was real. Four thousand Cherokee died on the road. That is true, and needs no blanket to make it count for more.\n\nTurning a great suffering into a touching little story can sometimes make people forget how big it was, how cold, how wrong.',
      },
      engagementHook: '有个故事说我把毯子让给生病的孩子才冻死——但那是事后 52 年一个士兵信里写的传说，不是真事。我为什么要拆穿一个让自己显得高尚的故事？你怎么看「把苦难变成煽情小故事」这件事？',
      expectsRealAnswer: false,
    },
    {
      id: 'quatie-n6',
      phase: 'anchor',
      content: {
        cn: '现在说那张决定我命运的纸——而签它的人里没有我，也没有我丈夫。\n\n1835 年 12 月 29 日，在 New Echota，也就是我们自己的首都，有一小群切罗基人跟美国政府签了一份条约，叫 Treaty of New Echota（新埃科塔条约）。签字的人大概 500 个，自称代表整个切罗基民族。带头的是一个叫 Major Ridge 的人，和他那一派，后来人叫他们「Treaty Party（主签派）」。他们的想法是：反正挡不住，不如趁早谈个好价钱走。这份条约用 500 万美元换走我们全部东部土地。\n\n问题是：我丈夫 John Ross 是民选首领，他没签，绝大多数切罗基人也不同意。John 带头收集签名反对，超过 15,000 个，而整个民族也才约 16,000 人。等于几乎所有人都说「我们不走」。\n\n华盛顿不管。他们认那 500 人签的纸，不认那 15,000 人按的手印。\n\n这就是我后来要走那条路的「法律依据」——一张我没签、我丈夫没签、我们绝大多数人反对的纸。',
        en: 'Now the paper that decided my fate — and none of the people who signed it were me, or my husband.\n\nOn December 29, 1835, at New Echota — our own capital — a small group of Cherokee signed a treaty with the United States government, the Treaty of New Echota. About 500 men signed, claiming to speak for the whole Cherokee Nation. They were led by a man named Major Ridge and his faction — later called the "Treaty Party." Their thinking was: we cannot stop this, so we should bargain a good price and go early. The treaty traded all our eastern land for five million dollars.\n\nThe problem: my husband John Ross was the elected Principal Chief. He did not sign, and the great majority of Cherokee did not agree. John led a petition against it — more than 15,000 names, out of a whole nation of about 16,000 people. Nearly everyone was saying "we will not go."\n\nWashington did not care. They honored the paper the 500 had signed, not the marks the 15,000 had pressed.\n\nThat was the "legal basis" for the road I would later walk — a paper I had not signed, my husband had not signed, and almost all of us had refused.',
      },
      engagementHook: '500 个人签的纸，对抗 15,000 个人按手印反对——华盛顿认那 500 个。同一个「切罗基民族」，内部分成主签派和反对派。如果你是反对的那 15,000 人之一，你会怎么看那 500 个签字的同胞？',
      expectsRealAnswer: false,
    },
    {
      id: 'quatie-n7',
      phase: 'story',
      content: {
        cn: '1838 年夏天，士兵来了。\n\n他们不给时间收拾。很多切罗基家庭被从饭桌上、从田里直接赶进临时围起来的木栅营地（人叫它 stockade）。我们在那里挤了几个月，等着上路。夏天的营地里疫病横行，还没出发就死了不少人。\n\n我丈夫 John 看着这一切，做了一个决定：既然挡不住，至少要由切罗基人自己来安排迁移，别全交给军队。1838 年 12 月 5 日，他组织的一支水路队伍出发了，领队是他的侄子 John Drew。我们一家在这支队伍里。\n\n我们先坐平底船下 Hiwassee 河，又换汽船，沿着一条条河往西。冬天的水路又湿又冷。\n\n我上船的时候，已经觉得不太对——胸口发闷，喘不上气。我没跟孩子们说。一个母亲在路上，最不该让孩子看见的，就是自己也撑不住了。',
        en: 'In the summer of 1838 the soldiers came.\n\nThey gave no time to pack. Many Cherokee families were driven straight from the dinner table, from the field, into temporary fenced camps people called stockades. We were crowded there for months, waiting to set out. Sickness spread through the summer camps, and many died before we even left.\n\nMy husband John watched all this and made a decision: if it could not be stopped, then at least let the Cherokee organize the removal themselves, not leave it all to the army. On December 5, 1838, a water route party he organized set out, led by his nephew John Drew. Our family traveled in that party.\n\nWe took flatboats down the Hiwassee River first, then changed to a steamboat, west along one river after another. The winter water route was wet and cold.\n\nWhen I boarded, I already felt something was wrong — a tightness in my chest, hard to catch my breath. I said nothing to the children. The one thing a mother on the road must never let her children see is that she, too, is failing.',
      },
      engagementHook: '我上船时已经喘不上气，但没跟孩子说——「一个母亲最不该让孩子看见的，就是自己也撑不住了」。你怎么读一个大人「在孩子面前硬撑」这件事？',
      expectsRealAnswer: false,
    },
    {
      id: 'quatie-n8',
      phase: 'story',
      content: {
        cn: '1839 年 2 月 1 日，我们的汽船快到 Little Rock（今天阿肯色州的首府）。\n\n我没能走完这条路。那天我死在那艘叫 Victoria 的船上，死因是肺炎。我大概 48 岁。\n\n我被葬在 Little Rock，离我出生的佐治亚红土山，隔着大半个美国，再也回不去了。\n\n我丈夫 John 把孩子们带到了西边的新地方（白人叫它 Indian Territory，今天的俄克拉荷马）。他后来又当了快三十年首领，又经历了美国的内战。但他再也没有我了。\n\n你现在知道我的结局了。但我想让你记住的不是「Quatie 死了」这四个字——这条路上死了大约四千个切罗基人，我只是其中有名字、被记下来的少数。剩下三千多个，连名字都没留下。\n\n下一节，我们退后一步，看这件事在更大的尺度上意味着什么。',
        en: 'On February 1, 1839, our steamboat was nearing Little Rock (today the capital of Arkansas).\n\nI did not finish the road. That day I died aboard that boat called the Victoria, of pneumonia. I was about 48.\n\nI was buried in Little Rock — half a continent from the red-clay hills of Georgia where I was born, never to return.\n\nMy husband John brought the children on to the new place in the West (white men called it Indian Territory, today Oklahoma). He would serve as chief for almost thirty more years, and live through America\'s Civil War. But he never had me again.\n\nNow you know how it ends for me. But what I want you to remember is not the four words "Quatie died." About four thousand Cherokee died on this road — I am only one of the few with a name, who got written down. The other three thousand and more left not even a name.\n\nNext, we step back and look at what this meant on a larger scale.',
      },
      engagementHook: '我死在离故乡半个美国之外的船上。但我只是四千个死者里有名字的少数——剩下三千多个连名字都没留下。「有名字被记住」和「没名字被忘记」，差别在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'quatie-n9',
      phase: 'zoom-out',
      content: {
        cn: '退一步看：我这一家的事，不是孤例。\n\n1838-39 年，大约 16,000 个切罗基人被赶上这条路，约 4,000 人死在途中——病死、冻死、饿死。切罗基人自己给这条路起的名字，翻成英文是 the Trail of Tears（泪之路）。\n\n而且不只切罗基。同样被赶走的还有 Choctaw、Creek、Chickasaw、Seminole 几个民族——历史上把他们合称「东南五族」。这是一整套清空美国东南部、把原住民赶到密西西比河以西的政策。\n\n更大的尺度上，这跟人类历史上别的强制迁徙是一类事。你以后会学到蒙古帝国扩张时的人口迁徙、别的地方的流亡——把一整群人从他们的土地上连根拔起，逼他们走向陌生的远方。每一次，走在路上的，都是一个个像我这样、抱着孩子、回头看一眼故乡的普通人。\n\n美国课本里，这件事常常只有一句话：「领土扩张。」我希望你以后看到这一句的时候，能想起这一句背后，是四千个没走完路的人。',
        en: 'Step back: what happened to my family was not a single case.\n\nIn 1838-39, about 16,000 Cherokee were forced onto this road, and about 4,000 died on the way — of disease, of cold, of hunger. The name the Cherokee gave the road, in English, is the Trail of Tears.\n\nAnd it was not only the Cherokee. The Choctaw, Creek, Chickasaw, and Seminole nations were driven out too — together they were later called the "Five Tribes" of the Southeast. This was one whole policy to empty the American Southeast and push native peoples west of the Mississippi.\n\nOn a larger scale, this belongs with other forced migrations in human history. You will later learn about population movements during the Mongol Empire\'s expansion, and exiles elsewhere — pulling a whole people up by the roots from their land, forcing them toward a strange, distant place. Every time, the ones walking the road were ordinary people like me, holding a child, turning back for one last look at home.\n\nIn American textbooks this event is often just one line: "territorial expansion." I hope that when you see that line someday, you remember that behind it are four thousand people who did not finish the road.',
      },
      engagementHook: '美国课本里这件事常常只有一句话：「领土扩张」。但这一句背后是四千个没走完路的人。同一件事，「领土扩张」和「四千人死在路上」——为什么会用完全不同的说法来讲？',
      expectsRealAnswer: false,
    },
    {
      id: 'quatie-n10',
      phase: 'synthesis',
      content: {
        cn: '现在我把这件事最难的地方交给你。\n\n一种说法：印第安人迁移是一场不该被美化的悲剧——一个有宪法、有报纸、有文字的民族，因为脚下有金子、土地被人想要，就被一部法律、一张少数人签的条约连根拔起，四千人死在路上。这是种族暴力，不该用「领土扩张」一句话盖过去。\n\n另一种说法：当年很多白人——包括总统 Jackson 自己——真心相信，让原住民「搬到西边，远离白人」是在「保护」他们不被吞没。在他们的世界观里，这甚至算一种「善意」。理解他们怎么想，不等于原谅他们做的事，但能帮你看清：最大的伤害，常常不是由觉得自己在作恶的人造成的。\n\n两种说法都站得住。第一种让你不忘记伤害有多真，第二种让你看清伤害是怎么发生的。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Now I hand you the hardest part of this.\n\nOne view — Indian Removal was a tragedy that should never be dressed up: a nation with a constitution, a newspaper, a written script was pulled up by the roots, by a law and a treaty a minority had signed, because there was gold under its feet and others wanted its land, and four thousand people died on the road. This was racial violence, and should not be covered over with the phrase "territorial expansion."\n\nThe other view — many white people at the time, including President Jackson himself, genuinely believed that moving native peoples "west, away from whites" was "protecting" them from being swallowed up. In their worldview this even counted as a kind of "kindness." Understanding how they thought is not the same as forgiving what they did, but it helps you see clearly: the greatest harm is often done not by people who think they are doing evil.\n\nBoth views stand. The first keeps you from forgetting how real the harm was; the second helps you see how the harm happened.\n\nWhat do you think? Take thirty seconds, and write it down.',
      },
      engagementHook: '一种说法：这是不该被美化的种族暴力。另一种说法：当年很多白人真心以为「把原住民迁到西边」是在保护他们。两种说法都站得住——你怎么看？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'quatie-n11',
      phase: 'closing',
      content: {
        cn: '走完我这一生——从佐治亚红土山的家，到 Victoria 号船上，到 Little Rock 的一座坟——你会怎么评价这段历史，还有当年那些觉得「这是为他们好」的人？\n\n这是个真问题，没有标准答案。我想听你自己的话。\n\n再想一步，把它带到今天：你身边，有没有过这样的事——一个决定被说成「为你好」「为大家好」，但真正承受后果的人，从来没被问过愿不愿意？也许是班里的一条新规定，也许是家里替你做的一个安排，也许是更大的事。\n\n那时候，你怎么分辨「真的为我好」和「打着为我好的旗号」？如果你是那个被决定的人，你会怎么做？写下来——哪怕只是给你自己看。',
        en: 'Walk through my whole life — from the home in the red-clay hills of Georgia, to the deck of the Victoria, to a grave in Little Rock — and how would you judge this history, and the people back then who thought "this is for their own good"?\n\nThis is a real question, with no standard answer. I want to hear it in your own words.\n\nThen take one more step, and bring it to today. Around you, has there ever been something like this — a decision called "for your own good," "for everyone\'s good," where the people who actually bear the consequences were never asked whether they wanted it? Maybe a new rule in your class, maybe a plan made for you at home, maybe something larger.\n\nWhen that happens, how do you tell the difference between "truly for my good" and "wearing the banner of for-your-good"? If you were the one being decided for, what would you do? Write it down — even if only for yourself.',
      },
      engagementHook: '走完我这一生，你会怎么评价当年那些觉得「这是为他们好」的人？再想一步：今天你身边，有没有「被说成为你好、但你从没被问过愿不愿意」的决定？那时候你会怎么做？写下来。',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: John Ross — lonely-mediator / 法庭路线抗争
// ═══════════════════════════════════════════════════════════════════════

export var johnRossLens = {
  id: 'john-ross',
  icon: '⚖️',
  name: { cn: 'John Ross', en: 'John Ross' },
  role: { cn: '切罗基首领，走法庭路线的中间人', en: 'Cherokee chief who fought through the courts' },
  description: {
    cn: 'John Ross（1790-1866），切罗基名 Guwisguwi，只有八分之一切罗基血统，父亲是苏格兰商人。他从小受白人式教育，却选择做切罗基人，1828 年起当选民族首领。面对迁移，他拒绝打仗，而是用美国自己的宪法和法庭跟美国斗——一路打到最高法院。这一遍让你看一个人怎样用对方的武器，打一场注定艰难的仗。',
    en: 'John Ross (1790-1866), Cherokee name Guwisguwi, was only one-eighth Cherokee by blood; his father was a Scottish trader. Raised with a white-style education, he chose to be Cherokee, and from 1828 served as Principal Chief. Facing removal, he refused to make war and instead fought the United States with its own constitution and courts — all the way to the Supreme Court. This view lets you watch a man use his opponent\'s weapons to fight a battle that was always going to be hard.',
  },
  storyboard: [
    {
      id: 'ross-n1',
      phase: 'hook',
      content: {
        cn: '我叫 John Ross。切罗基人叫我 Guwisguwi。\n\n如果你只看我的脸，你会以为我是个白人——我只有八分之一的切罗基血统。我父亲 Daniel Ross 是从苏格兰来的商人，我说英语比说切罗基语流利，我读过白人的学校。\n\n按理说，我大可以做个白人，过白人的日子。\n\n但 1828 年，切罗基民族选我做 Principal Chief（最高首领）。一个八分之一血统的人，被一整个民族选去当首领——你想过这是为什么吗？\n\n因为接下来要打的这场仗，需要一个既懂他们、又是我们的人。这一遍，你站在这个「夹在中间」的人这边，看他怎么用对方的法律，去救自己的人。',
        en: 'My name is John Ross. The Cherokee call me Guwisguwi.\n\nIf you only looked at my face you would take me for a white man — I am only one-eighth Cherokee by blood. My father, Daniel Ross, was a trader from Scotland. I speak English more fluently than Cherokee, I went to the white men\'s schools.\n\nBy rights I could have lived as a white man, a white man\'s life.\n\nBut in 1828 the Cherokee Nation chose me as Principal Chief. A man one-eighth by blood, chosen by a whole nation to lead it — have you wondered why?\n\nBecause the fight that was coming needed a man who both understood them and was one of us. This time, you stand with the man caught in the middle, and watch how he used his opponent\'s law to try to save his own people.',
      },
      engagementHook: '我只有八分之一切罗基血统，长得像白人，英语比母语流利——但整个民族选我做首领。一个「夹在中间」的人，为什么反而被选来打这场仗？你怎么想？',
      expectsRealAnswer: false,
    },
    {
      id: 'ross-n2',
      phase: 'setup',
      content: {
        cn: '说说我怎么来的。\n\n1790 年 10 月 3 日，我生在 Turkeytown（今天阿拉巴马州，Coosa 河边）。母亲有切罗基血统，父亲是苏格兰商人。\n\n我父亲很在意我们的教育——他把我送进专门为「混血」切罗基孩子办的学校，跟着一位 Gideon Blackburn 牧师念书，学英语、学算术、学白人世界怎么运转。\n\n这种教育给了我一样东西，后来成了我最大的武器：我懂白人的规则。我知道他们怎么写合同、怎么打官司、怎么在国会里运作。\n\n但它也给了我一个一辈子的难题：我到底算哪边的人？我长得像白人，受白人教育，却选择站在切罗基这边。后来佐治亚的报纸骂我，说我「不过是个想保住自己财产的混血商人」。\n\n我用一生回答这个问题——不是用血统，是用我站在哪一边。',
        en: 'Let me tell you where I come from.\n\nI was born on October 3, 1790, at Turkeytown (today in Alabama, on the Coosa River). My mother had Cherokee blood; my father was a Scottish trader.\n\nMy father cared a great deal about our schooling. He sent me to schools made for "mixed-blood" Cherokee children, to study under a Reverend Gideon Blackburn — English, arithmetic, how the white world worked.\n\nThat education gave me one thing that would become my greatest weapon: I understood the white men\'s rules. I knew how they wrote contracts, how they argued cases, how they worked the Congress.\n\nBut it also gave me a lifelong problem: which side was I, really? I looked white, was schooled white, yet chose to stand with the Cherokee. Later the Georgia newspapers cursed me as "nothing but a mixed-blood trader trying to protect his own property."\n\nI answered that question with my whole life — not with blood, but with which side I stood on.',
      },
      engagementHook: '佐治亚报纸骂我「不过是个想保住财产的混血商人」。我用一生回答「我算哪边的人」——不是用血统，是用我站在哪一边。你觉得「一个人属于哪边」，该由什么决定？',
      expectsRealAnswer: false,
    },
    {
      id: 'ross-n3',
      phase: 'setup',
      content: {
        cn: '1828 年我当上首领的时候，切罗基已经是一个很「现代」的民族了。\n\n我们 1827 年写了自己的成文宪法，照着美国宪法的样子——有立法、有法院、有选举。我们有首都 New Echota，有用本族文字印的报纸《切罗基凤凰报》。\n\n我当时的判断是：白人总说我们「野蛮、落后」，那好，我们就比他们更守规矩——更像一个「文明国家」。我以为，只要我们足够「文明」，足够守法，美国就找不到理由赶我们走。\n\n这是我那一代很多切罗基人的赌注：用「变得像他们」来保住「做我们自己」的权利。\n\n但 1828 年同一年，佐治亚发现了金子；同一年，Andrew Jackson 当选总统。我很快就会发现：我们再「文明」，也挡不住别人想要我们脚下的土地。\n\n规则，是握有权力的人想守才守的。',
        en: 'By 1828, when I became chief, the Cherokee were already a very "modern" nation.\n\nIn 1827 we wrote our own constitution, modeled on the United States\' — a legislature, courts, elections. We had a capital at New Echota, a newspaper, the Cherokee Phoenix, printed in our own script.\n\nMy judgment then was this: the white men always called us "savage, backward." Fine — we would keep the rules better than they did, be more of a "civilized nation" than they were. I believed that if only we were civilized enough, lawful enough, America would find no reason to drive us out.\n\nThat was the wager of many in my generation: use "becoming like them" to keep the right to "be ourselves."\n\nBut that same year, 1828, gold was found in Georgia; that same year, Andrew Jackson was elected President. I would soon learn that no matter how "civilized" we became, it would not stop others from wanting the land under our feet.\n\nRules are kept by the powerful only when they choose to keep them.',
      },
      engagementHook: '我那一代切罗基人下了个赌注：用「变得像他们」来保住「做我们自己」的权利——只要够文明、够守法，美国就没理由赶我们走。你觉得这个赌注，问题出在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'ross-n4',
      phase: 'personal-peak',
      content: {
        cn: '我得告诉你我做的那个决定——它定义了我这一生，也害了我，也是我至今不后悔的。\n\n土地被佐治亚一步步吞掉的时候，切罗基人里有两种声音。一种说：拿起枪，打。我们的祖先打过仗，我们不是没血性。另一种说：走吧，趁能谈个好价钱，搬到西边去，别等被人白白赶走。\n\n我选了第三条路，也是最难走的一条：不打仗，也不投降——用美国自己的宪法和法庭，跟美国斗。\n\n为什么不打？因为我算过账：我们大概一万六千人，美国有上千万人和一支军队。打，是带着全族去死。\n\n为什么不早走？因为那是我们的土地，祖坟在那里，没有任何法律说别人可以拿走。\n\n所以我决定：跑华盛顿，写信，请愿，打官司——用他们引以为傲的那套「法治」，逼他们承认自己的法律。\n\n这条路，我后来走了十几年。',
        en: 'I have to tell you about the decision that defined my life — that also cost me, and that I do not regret to this day.\n\nAs Georgia swallowed our land piece by piece, there were two voices among the Cherokee. One said: take up the gun and fight. Our ancestors fought; we are not without courage. The other said: leave, while we can still bargain a good price, move west, do not wait to be driven off for nothing.\n\nI chose a third road, the hardest one: not war, not surrender — fight the United States with its own constitution and courts.\n\nWhy not fight? I had run the numbers: we were about sixteen thousand; America had millions and an army. To fight was to take the whole nation to its death.\n\nWhy not leave early? Because it was our land, our ancestors\' graves were there, and no law said another could take it.\n\nSo I decided: go to Washington, write letters, petition, sue — use the very "rule of law" they took such pride in, and force them to honor their own law.\n\nI walked that road for more than a decade.',
      },
      engagementHook: '面对迁移，切罗基人有两种声音：拿枪打，或趁早走。我选了第三条最难的路——用美国自己的法律跟美国斗。你觉得这三条路里，哪条最难？为什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'ross-n5',
      phase: 'story',
      content: {
        cn: '我先把仗打进了美国最高法院。\n\n佐治亚通过了一堆法律，要把切罗基的土地和人都纳入州的管辖。我们决定告它，一路告到最高法院（Supreme Court）。\n\n第一仗（1831 年）输了一半：法院说切罗基不算「外国」，不能直接来联邦法院告州，所以这个案子它管不了。但首席大法官 John Marshall 在判词里留了一句话，给我们留了门缝——他说切罗基是「国内附属的民族」，跟美国的关系像「被监护人对监护人」。\n\n这句话听上去不好听，但里面有一层意思：切罗基对自己的土地是有权利的。\n\n我抓住这层意思，又打了第二仗。这一次，我们找了一个角度——不是切罗基直接告，而是借一个住在切罗基地界、被佐治亚抓起来的白人传教士 Worcester 的案子，把同样的问题再送进最高法院。\n\n下一节，你会看到这一仗的结果——它是我这辈子离「赢」最近的一刻。',
        en: 'First I took the fight all the way into the United States Supreme Court.\n\nGeorgia had passed a stack of laws to bring Cherokee land and people under the state. We decided to sue, all the way to the Supreme Court.\n\nThe first case (1831) was half a loss: the Court said the Cherokee were not a "foreign nation" and so could not sue a state directly in federal court — so it could not hear the case. But Chief Justice John Marshall left one line in his opinion that held a door ajar for us — he called the Cherokee a "domestic dependent nation," whose relation to the United States resembled "that of a ward to his guardian."\n\nThat phrase did not sound flattering, but inside it was a meaning: the Cherokee had rights to their own land.\n\nI seized on that meaning and fought a second case. This time we found an angle — not the Cherokee suing directly, but using the case of a white missionary named Worcester, who lived on Cherokee land and had been arrested by Georgia, to send the same question back up to the Supreme Court.\n\nNext, you will see how that case came out — the closest I ever came to "winning."',
      },
      engagementHook: '第一仗只赢了半句话：大法官说切罗基是「国内附属民族」，关系像「被监护人对监护人」。这句话听上去不好听，但我抓住了里面「切罗基对土地有权利」的意思。你怎么读「在一句不好听的话里找到有用的部分」这种本事？',
      expectsRealAnswer: false,
    },
    {
      id: 'ross-n6',
      phase: 'anchor',
      content: {
        cn: '1832 年，最高法院做出了 Worcester v. Georgia（伍斯特诉佐治亚案）的判决——我们赢了。\n\n首席大法官 John Marshall 写道：切罗基民族是「独立的政治共同体」，对自己的土地有原始的、自然的权利；佐治亚州的法律，管不到切罗基的地界。\n\n你想想这意味着什么：美国自己最高的法院，白纸黑字说佐治亚做的是违宪的，说切罗基的土地受法律保护。我用对方的武器，赢了。\n\n那一刻，我以为我救了我的民族。\n\n但赢了判决，不等于赢了。法院能说「谁对」，却没有军队去执行。要执行这个判决，需要总统出手——而坐在总统位子上的人，是 Andrew Jackson。\n\n而且就在三年后，1835 年 12 月 29 日，Treaty Party 那一派绕过我，在 New Echota 跟美国政府签了那份我没授权的条约——把整个民族的土地卖了。我组织了超过 15,000 人的反对签名（全族才约 16,000 人）。华盛顿认那份条约，不认我们的签名。\n\n我在法庭上赢的，在总统和那张条约面前，全数落空。',
        en: 'In 1832 the Supreme Court ruled in Worcester v. Georgia — and we won.\n\nChief Justice John Marshall wrote that the Cherokee Nation was a "distinct, independent political community," with original, natural rights to its own land; that Georgia\'s laws had no force inside Cherokee territory.\n\nThink about what that meant. The highest court in America itself, in black and white, said what Georgia had done was unconstitutional, said Cherokee land was protected by law. With my opponent\'s own weapons, I had won.\n\nIn that moment, I thought I had saved my people.\n\nBut winning the ruling was not the same as winning. A court can say "who is right," but it has no army to enforce it. To enforce this ruling, the President had to act — and the man in the President\'s chair was Andrew Jackson.\n\nAnd just three years later, on December 29, 1835, the Treaty Party went around me and signed at New Echota a treaty I had never authorized — selling the whole nation\'s land. I organized a petition of more than 15,000 names against it (out of a nation of about 16,000). Washington honored the treaty, not our names.\n\nWhat I won in the courtroom came to nothing before the President and that treaty.',
      },
      engagementHook: '我在最高法院赢了——大法官白纸黑字说佐治亚违宪、切罗基土地受保护。但法院能说「谁对」，却没有军队去执行。「赢了判决」和「真的赢了」，差的是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'ross-n7',
      phase: 'story',
      content: {
        cn: '关于那个判决，有一句话流传了快两百年，你以后多半会听到——我必须跟你说清楚它的真假。\n\n人们说，Andrew Jackson 听到 Worcester v. Georgia 判决后冷冷地说：「John Marshall 做了他的判决，现在让他自己去执行。」\n\n这句话太有名了。但你要知道：没有任何当年的记录证明 Jackson 真说过这句话。它第一次出现，是在 1864 年——Jackson 已经死了快二十年——一个叫 Horace Greeley 的人写的书里。学者今天普遍认为，这句话很可能是后人安到他头上的。\n\n那为什么这句假话流传得这么广？因为它太准了——它精确地描述了真实发生的事：判决赢了，没人执行。\n\n有时候，一句没人真说过的话，比真话更被记住——因为它说出了真相的形状。但我们读历史的人，要分得清「他做的事」和「别人替他编的话」。\n\n真相不需要假台词来加戏。',
        en: 'About that ruling, one line has traveled for nearly two hundred years, and you will most likely hear it — I must set its truth straight for you.\n\nPeople say that when Andrew Jackson heard the Worcester v. Georgia ruling, he said coldly: "John Marshall has made his decision; now let him enforce it."\n\nThe line is famous. But know this: no record from the time proves Jackson ever said it. It first appeared in 1864 — nearly twenty years after Jackson was dead — in a book by a man named Horace Greeley. Scholars today widely think the line was probably put in his mouth by later people.\n\nThen why has this false line spread so far? Because it is too accurate — it describes exactly what really happened: the ruling was won, and no one enforced it.\n\nSometimes a line no one ever truly said is remembered better than the truth — because it captures the shape of the truth. But those of us who read history must tell apart "what he did" and "the words others wrote for him."\n\nThe truth needs no false lines to dress it up.',
      },
      engagementHook: '「John Marshall 做了判决，让他自己去执行」——这句名言其实是 Jackson 死后约二十年别人编的。但它流传得广，因为它太准了。一句假话，为什么有时比真话更被记住？',
      expectsRealAnswer: false,
    },
    {
      id: 'ross-n8',
      phase: 'story',
      content: {
        cn: '判决赢了，土地却还是丢了。接下来的几年，是我这辈子最难的几年。\n\n1838 年，士兵开始执行那份 New Echota 条约。我的族人被从家里赶出来，关进 stockade（临时围栏营地），等着上路。我跑遍华盛顿，写信给国会、给总统，求他们至少延后、至少给足补给、至少让切罗基人自己安排迁移——别全交给军队。\n\n我争来了一件事：迁移由切罗基民族自己组织。这听起来微小，但它意味着路上能多带点粮食、多一点人情、少一点军队的冷酷。我说服当局，让我们自己来。\n\n1838 年 12 月，我组织的水路队伍出发了。我的妻子 Quatie 也在路上。\n\n你大概已经知道她的结局了——1839 年 2 月 1 日，她死在一艘叫 Victoria 的船上。我把孩子带到了西边，但我没能把她带到。\n\n我赢了最高法院，却没能救下我的土地，也没能救下我的妻子。这就是「法庭路线」的代价——也是它的极限。',
        en: 'The ruling was won, and the land was lost all the same. The years that followed were the hardest of my life.\n\nIn 1838 the soldiers began to carry out the New Echota treaty. My people were driven from their homes into stockades, fenced camps, to wait for the road. I crossed Washington again and again, wrote to Congress, to the President, begging them to at least delay it, at least give full supplies, at least let the Cherokee organize the removal themselves — not leave it all to the army.\n\nI won one thing: that the removal be organized by the Cherokee Nation itself. It sounds small, but it meant more food on the road, more human kindness, less of the army\'s coldness. I persuaded the authorities to let us do it ourselves.\n\nIn December 1838, the water route party I organized set out. My wife Quatie was on that road too.\n\nYou likely already know how it ended for her — on February 1, 1839, she died aboard a boat called the Victoria. I brought our children west, but I could not bring her.\n\nI won the Supreme Court, and could not save my land, nor my wife. That is the cost of the "court road" — and its limit.',
      },
      engagementHook: '我赢了最高法院，却没救下土地，也没救下妻子。我只争来一件「小事」：让切罗基人自己组织迁移，路上多点粮、少点军队的冷酷。在一场注定要输的仗里，争取「少坏一点」的结果，值得吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ross-n9',
      phase: 'zoom-out',
      content: {
        cn: '退一步看，我这一仗对今天意味着什么。\n\n美国的制度设计，本来有一个聪明的安排：把权力分成三块——立法（国会）、行政（总统）、司法（法院）——让它们互相牵制，谁也不能独大。这叫三权分立，你以后学美国宪法（1787 年费城制定的）会反复遇到。\n\n但我的案子暴露了这个设计的一个漏洞：法院判了，总统不执行，怎么办？1832 年最高法院说切罗基赢了，可总统 Jackson 没有动手去执行——制衡就这样失灵了。一个被设计来「互相牵制」的系统，遇到一个不肯配合的行政首脑，也会卡住。\n\n这件事到今天还有回声。美国人至今会争论：当法院和总统对着干，谁该听谁的？我的案子，是这个问题最早、也最惨痛的一个例子。\n\n我用对方最骄傲的「法治」打这场仗，结果证明：法治很强大，但它不会自动生效——它需要有权力的人愿意守。',
        en: 'Step back, and see what my fight means today.\n\nAmerica\'s system was built with a clever arrangement: split power into three parts — the legislature (Congress), the executive (the President), and the judiciary (the courts) — and let them check one another, so none can grow too strong. It is called separation of powers, and you will meet it again and again when you study the U.S. Constitution (drawn up in Philadelphia in 1787).\n\nBut my case exposed a hole in the design: the court rules, and the President will not enforce it — then what? In 1832 the Supreme Court said the Cherokee had won, yet President Jackson did not act to enforce it — and so the check simply failed. A system built to "check one another" can still jam when it meets an executive who refuses to cooperate.\n\nThis still echoes today. Americans still argue: when a court and a president are set against each other, who must yield to whom? My case is the earliest, and one of the most bitter, examples of that question.\n\nI fought this battle with the "rule of law" they were proudest of, and it proved: the rule of law is powerful, but it does not work by itself — it needs the powerful to be willing to keep it.',
      },
      engagementHook: '美国制度本来设计成三权互相牵制。但我的案子暴露了漏洞：法院判了，总统不执行，制衡就失灵了。「法治很强大，但它不会自动生效」——你怎么理解这句话？',
      expectsRealAnswer: false,
    },
    {
      id: 'ross-n10',
      phase: 'synthesis',
      content: {
        cn: '现在我把最难的地方交给你。\n\n一种说法：我的法庭路线是对的。我没有带全族去送死，我赢下了最高法院的判决，我争来了切罗基人自己组织迁移、留下了一份「美国违反了自己法律」的铁证。即使输了土地，我守住了一件事——让历史无法假装这是「合法、自愿、文明」的。\n\n另一种说法：法庭路线也许从一开始就太天真。我赌「只要够文明、够守法，他们就找不到理由赶我们走」——可对方要的是金子和土地，不是讲理。当对方根本不打算守规则，我还在认真地跟他们讲规则，是不是把宝贵的时间和希望，押在了一个不会兑现的承诺上？\n\n两种说法都站得住。第一种看重「我守住了正义的记录」，第二种追问「在一个不讲理的对手面前，讲理到底有没有用」。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Now I hand you the hardest part.\n\nOne view — my court road was right. I did not march the whole nation to its death; I won a Supreme Court ruling; I won the right for the Cherokee to organize their own removal; I left behind ironclad proof that "America broke its own law." Even having lost the land, I held onto one thing — I made it impossible for history to pretend this was "lawful, willing, and civilized."\n\nThe other view — perhaps the court road was naive from the start. I wagered that "if only we were civilized enough, lawful enough, they would find no reason to drive us out" — but what the other side wanted was gold and land, not reason. When your opponent has no intention of keeping the rules, and you go on earnestly arguing the rules with him, are you not staking precious time and hope on a promise that will never be honored?\n\nBoth views stand. The first values "I preserved the record of justice"; the second asks "before an opponent who will not reason, does reasoning do any good at all?"\n\nWhat do you think? Take thirty seconds, and write it down.',
      },
      engagementHook: '一种说法：法庭路线是对的，我留下了「美国违反自己法律」的铁证。另一种说法：对一个只想要金子和土地、根本不讲理的对手，认真讲规则太天真。两种说法都站得住——你怎么看？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'ross-n11',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个长得像白人的人，选择做切罗基人，赢了最高法院却救不了土地，把孩子带到了西边、却把妻子留在了路上的一座坟里——你会怎么评价我这条「用对方的规则跟对方斗」的路？\n\n这是个真问题，没有标准答案。我想听你自己的话。\n\n再想一步，把它带到今天：你身边，有没有过这样的处境——你明知道对方比你强、规则也对你不利，但你还是只能用「讲道理、走正规途径」的方式去争？也许是跟老师争一个不公平的分数，也许是替一个被欺负的同学说话，也许是更大的事。\n\n那时候，你会像我一样坚持「用规则斗」，还是会另想办法？如果讲理没用，你的底线在哪里？写下来——哪怕只是给你自己看。',
        en: 'Walk through my whole life — a man who looked white and chose to be Cherokee, who won the Supreme Court yet could not save the land, who brought the children west but left his wife in a grave by the road — and how would you judge my road of "fighting the other side with the other side\'s rules"?\n\nThis is a real question, with no standard answer. I want to hear it in your own words.\n\nThen take one more step, and bring it to today. Around you, has there ever been a spot like this — you knew the other side was stronger and the rules were tilted against you, and still all you could do was argue, go through the proper channels? Maybe arguing an unfair grade with a teacher, maybe speaking up for a classmate being bullied, maybe something larger.\n\nWhen that happens, would you hold to "fighting by the rules" as I did, or look for another way? If reasoning does no good, where is your line? Write it down — even if only for yourself.',
      },
      engagementHook: '走完我这一生，你会怎么评价我「用对方的规则跟对方斗」这条路？再想一步：今天你身边，有没有「对方更强、规则对你不利，你还是只能讲道理去争」的处境？那时候你会怎么做？写下来。',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Andrew Jackson — perpetrator-actor / 民主扩大与种族清除同体
// ═══════════════════════════════════════════════════════════════════════

export var jacksonLens = {
  id: 'andrew-jackson',
  icon: '🎖️',
  name: { cn: 'Andrew Jackson', en: 'Andrew Jackson' },
  role: { cn: '「平民总统」，迁移政策的执行者', en: 'the "people\'s president" who drove removal' },
  description: {
    cn: 'Andrew Jackson（1767-1845），出身贫寒的边疆孤儿，靠打仗成名，1829 年当上美国总统。他被称为「平民总统」，因为他把投票权扩大到几乎所有白人男性。但同一双手，签下了 Indian Removal Act，无视最高法院的判决，把东南原住民赶往西部。这一遍让你从这个人内部看：他不觉得自己在作恶。',
    en: 'Andrew Jackson (1767-1845), a poor frontier orphan who made his name in war, became President of the United States in 1829. He is called the "people\'s president" because he widened the vote to nearly all white men. But the same hands signed the Indian Removal Act, ignored a Supreme Court ruling, and drove the southeastern native peoples west. This view lets you see from inside this man: he did not think he was doing evil.',
  },
  storyboard: [
    {
      id: 'jackson-n1',
      phase: 'hook',
      content: {
        cn: '我叫 Andrew Jackson。\n\n你大概已经从别人嘴里听过我了——「赶走印第安人的那个总统」。先别急着给我下结论。我要你从我里面看一遍，因为这比你想的更难。\n\n我不是含着金汤匙出生的。1767 年我生在边疆，父亲在我出生前就死了。13 岁我就上了独立战争的战场，被英国军官用刀砍过脸——那道疤我带了一辈子。我母亲和两个哥哥都死在那场战争里，我成了孤儿。\n\n我靠自己，从一个一无所有的孤儿，打到美国总统。\n\n所以当我说「我代表普通人」的时候，我是认真的。我恨那些世袭的、有钱有势的精英。我真心相信，我是在为像我当年一样的小人物撑腰。\n\n这一遍最难的地方是：你要去理解一个不觉得自己是坏人的人，怎么做下了那件事。',
        en: 'My name is Andrew Jackson.\n\nYou have probably already heard of me from others — "the president who drove out the Indians." Do not rush to a verdict. I want you to see it once from inside me, because it is harder than you think.\n\nI was not born with a silver spoon. I was born on the frontier in 1767; my father died before I was born. At 13 I was already on the battlefield of the Revolutionary War, slashed across the face by a British officer\'s sword — I carried that scar my whole life. My mother and both my brothers died in that war, and I was left an orphan.\n\nOn my own, from an orphan with nothing, I fought my way to President of the United States.\n\nSo when I say "I speak for the common man," I mean it. I hated the inherited, moneyed, powerful elite. I truly believed I was standing up for the little people, the way I once was.\n\nThe hardest part of this view: you must try to understand how a man who did not think he was a bad man came to do that thing.',
      },
      engagementHook: '你大概已经听过我——「赶走印第安人的那个总统」。但我从一个一无所有的孤儿，打到美国总统。理解「一个不觉得自己是坏人的人怎么做下那件事」——你愿意先别急着下结论吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jackson-n2',
      phase: 'setup',
      content: {
        cn: '要懂我后来做的事，你得先懂我怎么看「印第安人」这件事——而这跟我打的仗分不开。\n\n我成名，是靠打仗。1814 年，我率军在 Horseshoe Bend（马蹄湾）打败了 Creek 族的一支。那一仗很惨烈。然后 1818 年我又带兵进佛罗里达打 Seminole 族。\n\n在边疆长大、又打了半辈子仗的我，对原住民的看法很直接：他们挡在白人移民往西走的路上。我见过白人移民和原住民互相袭击、互相杀，我站在白人移民那边——因为我就是他们中的一个。\n\n你要明白：在我的世界里，原住民不是「邪恶」，而是「注定要消失的、跟不上的人」。我甚至觉得，与其让他们在白人潮水里被淹没、被酒精和疾病毁掉，不如让他们「搬到西边去，远离白人」，好好活着。\n\n这个想法，今天听来荒唐又傲慢。但你要先看见它，才能看懂接下来发生的事——伤害，常常裹在「我是为你好」的外衣里。',
        en: 'To understand what I later did, you first have to understand how I saw "the Indians" — and that cannot be separated from the wars I fought.\n\nI made my name in war. In 1814 I led troops to defeat a band of the Creek at Horseshoe Bend. It was a brutal battle. Then in 1818 I marched into Florida against the Seminole.\n\nRaised on the frontier and a soldier for half my life, my view of native peoples was plain: they stood in the way of white settlers moving west. I had seen white settlers and natives raid and kill one another, and I stood with the settlers — because I was one of them.\n\nUnderstand this: in my world, the natives were not "evil" but "a people doomed to vanish, who could not keep up." I even believed it was better to move them "west, away from whites" so they could live, than to let them drown in the white tide, ruined by liquor and disease.\n\nThat idea sounds absurd and arrogant today. But you have to see it first, to understand what came next — harm so often comes wrapped in the coat of "I am doing this for your own good."',
      },
      engagementHook: '在我的世界里，原住民不是「邪恶」，而是「注定要消失、跟不上的人」——我甚至觉得让他们搬到西边「远离白人」是为他们好。今天听来荒唐。但「伤害常裹在为你好的外衣里」——你怎么读这句话？',
      expectsRealAnswer: false,
    },
    {
      id: 'jackson-n3',
      phase: 'setup',
      content: {
        cn: '1828 年我当选总统。这是美国历史上一件大事——但不是因为我个人，而是因为我背后那股力量。\n\n在我之前，美国的总统大多出自东部的名门望族：受过良好教育、有产业、有家世。普通的农民、工匠、边疆人，觉得政治是「上等人的事」，跟他们没关系。\n\n我不一样。我是边疆出身的孤儿，是「他们中的一个」。我的当选，靠的是一大批刚刚拿到投票权的普通白人男性。在我那个时代，越来越多的州取消了「必须有财产才能投票」的限制，投票权第一次扩大到几乎所有的白人成年男性。\n\n历史上把这叫 Jacksonian Democracy（杰克逊式民主）。它确实让美国的民主，第一次属于普通人，而不只是精英。这是真的进步。\n\n请你记住这个「进步」。因为接下来你会看到：同一个把民主扩大给普通白人的我，把另一群人，原住民，彻底排除在外。这两件事，是同一双手做的。',
        en: 'In 1828 I was elected President. It was a great event in American history — not because of me, but because of the force behind me.\n\nBefore me, America\'s presidents came mostly from the great families of the East — well educated, propertied, well born. Ordinary farmers, craftsmen, frontiersmen felt that politics was "a gentleman\'s business," nothing to do with them.\n\nI was different. I was a frontier orphan, "one of them." My election rode on a great mass of ordinary white men who had only just gained the vote. In my time, more and more states dropped the rule that you had to own property to vote — and the vote widened, for the first time, to nearly all white adult men.\n\nHistory calls this Jacksonian Democracy — and it did, for the first time, make American democracy belong to ordinary people, not only the elite. That was a real advance.\n\nRemember that "advance." Because next you will see this: the same man who widened democracy to ordinary white people shut another people — the natives — entirely out of it. Those two things were done by the same pair of hands.',
      },
      engagementHook: '我把投票权扩大给几乎所有白人男性——这是真的进步，叫「杰克逊式民主」。但同一双手，把原住民彻底排除在外。「扩大」和「排除」是同时发生的。这颠覆了你对「民主进步」的想法吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jackson-n4',
      phase: 'personal-peak',
      content: {
        cn: '现在说我一生中最被人记住、也最被人骂的那个决定。\n\n1830 年 5 月 28 日，我签署了 Indian Removal Act（印第安人迁移法案）。\n\n我跟你说说我当时心里是怎么想的——不是为了开脱，是为了让你看清，一个人怎么能一边做这件事，一边觉得自己没错。\n\n我对国会说：把东南的原住民迁到密西西比河以西，对双方都好。白人移民得到他们想要的土地；原住民则远离白人，在西部能「保住自己的生活方式」。我说这是「人道的」「慷慨的」。\n\n我真的这么想。在我的算盘里，这是一笔双赢的交易，甚至是一种善意。\n\n我没有把切罗基人当成跟我平等的、有权利留下的人。我心里早就认定他们「迟早要走」——我只是让这件「迟早会发生的事」快点发生。\n\n这就是最可怕的地方：最大的伤害，往往不是恨出来的，是「我以为我在做对的事」做出来的。',
        en: 'Now the decision I am most remembered for, and most cursed for.\n\nOn May 28, 1830, I signed the Indian Removal Act.\n\nLet me tell you what was in my mind at the time — not to excuse it, but so you can see clearly how a man can do this and feel he is not wrong.\n\nI told Congress: moving the southeastern natives west of the Mississippi was good for both sides. White settlers would get the land they wanted; the natives, away from whites, could "keep their own way of life" in the West. I called it "humane," "generous."\n\nI truly believed it. On my ledger, this was a win-win deal, even a kindness.\n\nI did not see the Cherokee as people equal to me, with a right to stay. In my mind I had long since decided they "would have to go sooner or later" — I was only making the thing that "would happen anyway" happen faster.\n\nThat is the most frightening part: the greatest harm is often done not out of hatred, but out of "I thought I was doing the right thing."',
      },
      engagementHook: '我签 Indian Removal Act 时，真心觉得这是「人道的、双赢的、甚至是善意」。最可怕的不是恨——是「我以为我在做对的事」。你见过这种「好心办坏事、却坚信自己没错」的情况吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jackson-n5',
      phase: 'story',
      content: {
        cn: '签了法案，不等于事情就顺利。切罗基人不肯走，他们的首领 John Ross 也不打仗——他去打官司。\n\n这一点让我很意外，也很恼火。我打了一辈子仗，习惯了对手拿枪。可 Ross 拿的是律师、是请愿书、是我们自己的宪法。他要用美国的法律，逼美国守法。\n\n更让我难受的是：他还真有道理。切罗基有 1827 年写的成文宪法，有自己的政府，按白人的标准看，他们「文明」得很。这恰恰戳破了我那套「他们落后、跟不上、注定消失」的说法。\n\n但我没有改主意。一个人一旦认定了自己是对的，证据反而很难撼动他——这一点，你以后会在很多权力者身上看到，包括有时候在你自己身上。\n\nRoss 把官司一路打到了最高法院。下一节，你会看到那场判决，以及我——一个总统——是怎么对待自己国家最高法院的。',
        en: 'Signing the act did not mean things went smoothly. The Cherokee would not go, and their chief John Ross would not fight — he went to court.\n\nThat surprised me, and angered me. I had been a soldier all my life, used to opponents who carried guns. But Ross carried lawyers, petitions, our own constitution. He meant to use America\'s law to force America to obey the law.\n\nWhat troubled me more: he actually had a case. The Cherokee had a written constitution from 1827, a government of their own — by white standards, they were quite "civilized." That punctured my whole story that they were "backward, unable to keep up, doomed to vanish."\n\nBut I did not change my mind. Once a man has decided he is right, evidence is very hard to move him — something you will see in many powerful people later, including, sometimes, in yourself.\n\nRoss took the case all the way to the Supreme Court. Next, you will see that ruling — and how I, a president, treated my own country\'s highest court.',
      },
      engagementHook: 'Ross 拿的不是枪，是律师和我们自己的宪法——而且他还真有道理，戳破了我那套「他们落后、注定消失」的说法。但我没改主意。「一个人认定自己对了，证据反而很难撼动他」——你在自己身上见过这种事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jackson-n6',
      phase: 'anchor',
      content: {
        cn: '1832 年，最高法院做出了 Worcester v. Georgia 的判决——切罗基赢了。\n\n首席大法官 John Marshall 写得清清楚楚：切罗基是「独立的政治共同体」，对自己的土地有权利，佐治亚州的法律管不到切罗基的地界。按美国自己的制度，这意味着，联邦政府，也就是我，应该出手保护切罗基的土地。\n\n我没有。\n\n我不需要喊「我拒绝执行」。我只需要什么都不做。法院能写判决，但它没有军队、没有警察去执行。要让判决落地，得靠总统下令；而我，按兵不动。\n\n你以后会听到一句很有名的话，说我当时冷冷地说：「John Marshall 做了他的判决，现在让他自己去执行。」我要老实告诉你：没有证据证明我真说过这句话，它是我死后快二十年才被人写进书里的。但说句公道话，这句假话确实说中了我做的事。我用「不作为」，让最高法院的判决变成一张废纸。\n\n而真正给了我「合法」借口的，是 1835 年那一小群切罗基人签的 Treaty of New Echota：尽管一万五千多切罗基人签名反对，我认那张纸。',
        en: 'In 1832 the Supreme Court ruled in Worcester v. Georgia — the Cherokee won.\n\nChief Justice John Marshall wrote it plainly: the Cherokee were a "distinct, independent political community," with rights to their own land, and Georgia\'s laws had no force inside Cherokee territory. Under America\'s own system, that meant the federal government — that is, me — was supposed to act to protect Cherokee land.\n\nI did not.\n\nI did not have to shout "I refuse to enforce it." I only had to do nothing. A court can write a ruling, but it has no army, no police to enforce it. To make a ruling real, the President must give the order — and I sat still.\n\nYou will hear a famous line, that I said coldly: "John Marshall has made his decision; now let him enforce it." Let me be honest: there is no proof I ever said it — it was written into a book nearly twenty years after I died. But in fairness, the false line did capture what I did. By doing nothing, I turned the Supreme Court\'s ruling into a worthless scrap of paper.\n\nAnd what gave me my "lawful" excuse was the Treaty of New Echota, signed in 1835 by a small group of Cherokee — even though more than fifteen thousand Cherokee signed against it, I honored that paper.',
      },
      engagementHook: '最高法院判切罗基赢了，我该出手保护他们的土地。但我不需要喊「我拒绝」——我只要什么都不做，判决就成了废纸。「不作为」也是一种行动吗？为什么有时候「什么都不做」比「明着反对」更厉害？',
      expectsRealAnswer: false,
    },
    {
      id: 'jackson-n7',
      phase: 'story',
      content: {
        cn: '我 1837 年卸任总统。所以你要知道一件事：真正把切罗基人赶上路的，发生在我离任之后。\n\n执行那份 New Echota 条约、把切罗基人关进 stockade、押上西迁之路的，是我的继任者 Van Buren 总统和军队。1838-39 年的 Trail of Tears，约 16,000 人上路，约 4,000 人死在途中。\n\n有人会替我辩护：「你看，惨剧是 Jackson 走后才发生的，不能全算他头上。」\n\n这话我不接受。法案是我签的，判决是我拖着不执行的，那张少数人签的条约是我认下来的。我亲手把那块石头推下了山——石头砸到人的时候我已经回了田纳西的家，但推石头的是我。\n\n这里有一个你要学会的分辨：「不是我亲手做的最后一步」不等于「跟我无关」。一个决定者，要为他启动的整条链条负责，而不只是为自己亲手做的那一下。\n\n我至死都认为我做得对。1845 年我死在田纳西的家中。我从没为 Indian Removal 道过歉。',
        en: 'I left the presidency in 1837. So know this: the part that actually drove the Cherokee onto the road happened after I was gone.\n\nIt was my successor, President Van Buren, and the army, who carried out the New Echota treaty, herded the Cherokee into stockades, and forced them onto the road west. The Trail of Tears of 1838-39: about 16,000 set out, about 4,000 died on the way.\n\nSome will defend me: "See, the disaster came after Jackson left — you cannot lay it all on him."\n\nI do not accept that. I signed the act, I dragged my feet on the ruling, I honored the treaty a minority had signed. I pushed that stone off the mountain with my own hands — by the time it crushed people I was home in Tennessee, but it was I who pushed it.\n\nHere is a distinction you must learn: "I did not take the last step myself" is not the same as "it has nothing to do with me." A decision-maker answers for the whole chain he set in motion, not only for the single act of his own hand.\n\nTo my death I believed I had done right. I died at home in Tennessee in 1845. I never once apologized for Indian Removal.',
      },
      engagementHook: '惨剧是我卸任后才发生的——有人替我辩护「不能全算他头上」。但法案是我签的，判决是我拖着不执行的。「不是我亲手做的最后一步」等于「跟我无关」吗？你怎么分辨这种责任？',
      expectsRealAnswer: false,
    },
    {
      id: 'jackson-n8',
      phase: 'story',
      content: {
        cn: '我想让你看一样东西，它会让你更难简单地恨我，也更难简单地原谅我。\n\n我家里，有奴隶。我在田纳西的庄园 Hermitage，靠被奴役的黑人种棉花、维持运转，前后有上百个。我一边喊着「我为普通人撑腰」「人人都该有机会」，一边把另一群人当成财产。\n\n所以「平民总统」的「平民」，从来只指白人男性。不包括原住民，不包括被奴役的黑人，也不包括所有女性。\n\n我不是一个例外的恶人。我是那个时代很多有权力的白人的一个缩影——他们能真诚地相信「自由」「平等」「为人民」，同时把这些词的范围，划得只够装下「像自己的人」。\n\n这才是最该让你警惕的：危险的，往往不是少数明目张胆的坏人，而是一整套让多数人觉得「这很正常、这没问题」的想法。\n\n下一节，我们退一步，看我这个人放在更大的历史里，意味着什么。',
        en: 'I want to show you one thing — it will make me harder to simply hate, and harder to simply forgive.\n\nIn my own household, there were slaves. At my Tennessee plantation, the Hermitage, enslaved Black people grew the cotton and kept the place running — over a hundred of them across the years. I cried "I stand up for the common man," "everyone should have a chance," while holding another people as property.\n\nSo the "common man" of the "people\'s president" only ever meant white men. Not the natives, not the enslaved Black people, not any women.\n\nI was not an exceptional villain. I was a picture of many powerful white men of my time — men who could sincerely believe in "liberty," "equality," "for the people," while drawing the boundary of those words just wide enough to hold "people like themselves."\n\nThat is what should most put you on guard: the danger is often not a few openly evil men, but a whole web of ideas that makes the many feel "this is normal, this is fine."\n\nNext, we step back and see what this man means, set in a larger history.',
      },
      engagementHook: '我喊「为普通人撑腰」，同时在自己庄园里把上百个黑人当财产——「平民」从来只指白人男性。危险的往往不是少数明目张胆的坏人，而是一整套让多数人觉得「这很正常」的想法。你怎么读这句话？',
      expectsRealAnswer: false,
    },
    {
      id: 'jackson-n9',
      phase: 'zoom-out',
      content: {
        cn: '退一步，看我这个人放在今天意味着什么。\n\n美国人到现在都没法简单地处理我。我的头像曾经印在 20 美元的钞票上很多年。我被很多人当成「为普通人而战」的英雄。但也有越来越多的人说：一个把上万原住民赶上死亡之路、自己还蓄奴的人，凭什么上钞票？\n\n这种争论本身，就是历史最有意思的地方。它逼着每一代人重新问：我们到底要纪念一个人的哪一面？\n\n而我这个人最值得你带走的，是那个「同一双手」的教训：我把民主扩大给普通白人，和我把原住民赶向西部——不是两个 Jackson，是同一个。「让一群人更自由」和「让另一群人更不自由」，可以是同一个政策、同一个人、同一个时刻。\n\n你以后读美国历史，会一次次遇到这种「进步与暴力同体」的人和事。别指望把他们简单地分成好人和坏人——历史很少给你那么干净的答案。学会同时看见光和影，是长大的一部分。',
        en: 'Step back, and see what this man means today.\n\nAmericans still cannot deal with me simply. My face was printed on the twenty-dollar bill for many years. Many took me for a hero "who fought for the common man." But more and more people now say: a man who drove tens of thousands of natives onto a road of death, and held slaves himself — by what right is he on the money?\n\nThat argument itself is the most interesting thing about history. It forces every generation to ask again: which side of a man do we mean to honor?\n\nAnd what is most worth carrying away from me is the lesson of "the same pair of hands": my widening of democracy to ordinary white men, and my driving of the natives west — these were not two Jacksons, but one. "Making one group freer" and "making another group less free" can be the same policy, the same person, the same moment.\n\nWhen you read American history later, you will meet this kind of person and event again and again — progress and violence in one body. Do not expect to sort them neatly into good people and bad people; history rarely gives you so clean an answer. Learning to see light and shadow at once is part of growing up.',
      },
      engagementHook: '我的头像曾印在 20 美元钞票上很多年——现在越来越多人问：一个赶走上万原住民、还蓄奴的人凭什么上钞票？「让一群人更自由」和「让另一群人更不自由」可以是同一个人、同一个时刻。你怎么读这种争论？',
      expectsRealAnswer: false,
    },
    {
      id: 'jackson-n10',
      phase: 'synthesis',
      content: {
        cn: '现在我把最难的地方交给你——评价我这个人。\n\n一种说法：我是一个该被严肃批判的人。我把投票权扩大给白人男性是真的，但我用一部法案、一场拖延、一张少数人签的条约，把一个有宪法、有文字的民族赶上死亡之路，自己还蓄奴。「为普通人」的漂亮话，盖不住这件事的残酷。一个国家纪念这样的人，应该非常谨慎。\n\n另一种说法：要公正地理解我，就不能用今天的标准简单地审判一个 1830 年代的人。我代表的那股「让普通人也能参与政治」的力量，是真实而重要的进步；我对原住民的看法，是我那个时代绝大多数白人共有的，错的不只是我一个人，而是整个时代。把一切罪都堆到我一个人头上，反而让人忽略了：是一整套制度和观念，让这件事得以发生。\n\n两种说法都站得住。第一种要求你不回避我做的恶，第二种要求你看清恶是怎么被整个时代造出来的。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Now I hand you the hardest part — judging this man.\n\nOne view — I am a man who deserves serious condemnation. Yes, I widened the vote to white men; but with an act, a delay, and a treaty a minority had signed, I drove a nation with a constitution and a written script onto a road of death, and held slaves besides. The fine words "for the common man" cannot cover the cruelty of that. A nation should be very careful about honoring such a man.\n\nThe other view — to understand me justly, you cannot simply judge a man of the 1830s by today\'s standards. The force I stood for — letting ordinary people take part in politics — was a real and important advance; my view of the natives was shared by the great majority of white people of my time, so the wrong was not mine alone but the whole era\'s. Heaping every sin on one man can make you miss the truth: it was a whole web of institutions and ideas that let this happen.\n\nBoth views stand. The first asks you not to look away from the evil I did; the second asks you to see clearly how the evil was made by a whole era.\n\nWhat do you think? Take thirty seconds, and write it down.',
      },
      engagementHook: '一种说法：我做了真正的恶，纪念这样的人该很谨慎。另一种说法：不能用今天的标准简单审判一个 1830 年代的人，错的是整个时代不只我一个。两种说法都站得住——你怎么看？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'jackson-n11',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个边疆孤儿，把民主扩大给了千千万万普通白人，同时把上万原住民赶向西部、还一辈子蓄奴、至死不悔——你会怎么评价我这样一个人？\n\n这是个真问题，没有标准答案。我想听你自己的话。\n\n再想一步，把它带到今天：你身边，有没有这样的人或这样的力量——他们做了一些真正的好事，赢得了很多人的爱戴，但同时也对另一些人造成了真实的伤害？也许是一个很受欢迎的人物，也许是一个对多数人有利、却让少数人吃亏的决定。\n\n那时候，你会怎么对待 TA？你能不能既不假装那些好事不存在，也不替那些伤害找借口？如果有一天你自己有了权力，你会怎么画「我为之负责的人」那条边界——把谁划进去，又会不会有人被你划在外面？写下来——哪怕只是给你自己看。',
        en: 'Walk through my whole life — a frontier orphan who widened democracy to millions of ordinary white men, who at the same time drove tens of thousands of natives west, held slaves all his life, and never repented to his death — and how would you judge a man like me?\n\nThis is a real question, with no standard answer. I want to hear it in your own words.\n\nThen take one more step, and bring it to today. Around you, is there a person or a force like this — who has done some genuinely good things, won the love of many, and at the same time done real harm to others? Maybe a much-admired figure, maybe a decision that helps the many while it costs the few.\n\nWhen that happens, how would you treat them? Can you neither pretend the good things did not exist, nor make excuses for the harm? And if one day you held power yourself, how would you draw the boundary of "the people I answer for" — whom would you draw inside, and would someone be left outside it? Write it down — even if only for yourself.',
      },
      engagementHook: '走完我这一生，你会怎么评价我这种「做了真正的好事、又造成真实伤害」的人？再想一步：今天你身边有没有这样的人或力量？如果有一天你有了权力，你会把谁划进「我为之负责的人」，又会不会有人被划在外面？写下来。',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'quatie-trail-of-tears': quatieLens,
  'john-ross':             johnRossLens,
  'andrew-jackson':        jacksonLens,
};

export var defaultLens = 'quatie-trail-of-tears';
export default lenses[defaultLens].storyboard;
export var meta = {
  topicId: 'jackson-indian-removal-1830',
  schemaVersion: 2,
  defaultLens: defaultLens,
  lensCount: 3,
  status: 'base-content',
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens combined / qaTemplate multi-faction (白人移民 vs 联邦 vs 最高法院 vs 切罗基 National/Treaty Party)',
    'defaultLens: quatie-trail-of-tears — 受影响者优先 (女性 + Trail-of-Tears 母亲 + 同龄共情锚)',
    'cross-lens N6 anchor: 1835.12.29 Treaty of New Echota — Quatie 受影响 / Ross petition 15,000+ / Jackson 用作合法借口',
    'anti-fab: Quatie 让毯子=传说(Burnett 1890s 信), John Marshall 名言=apocryphal(Greeley 1864) — 两处显式标',
    'cultural ban: US/Cherokee 史用 real terms (最高法院/Worcester v. Georgia/Indian Removal Act/Trail of Tears/切罗基/New Echota), 无中国词',
    'BASE CONTENT — pending KB fact-check + Sarah Chen audit + 4-agent review + Willow simulator (pipeline 第 6-10 步)',
  ],
};
