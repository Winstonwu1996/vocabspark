// ─────────────────────────────────────────────────────────────────
// 波斯帝国（阿契美尼德）550-330 BCE — Persian (Achaemenid) Empire · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程波斯/古近东真实术语
//   (Achaemenid/satrap/satrapy/daric/Persepolis/Pasargadae/Ahura Mazda/
//   Behistun/Royal Road/King of Kings/shahanshah/Aramaic/Cyrus Cylinder),
//   绝不用中国特定词。§8「对照的中国」例外, 注入 receiving-end + mediator 的 synthesis 节点。
// 3 lens / 11 nodes each / Rule 0 中性 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 御道上的一道加急消息 (Royal Road courier) —
//   居鲁士发令让消息跑遍帝国/satrap 收到王的来信既是授权也是监视/被放归者沿御道走回家。
//   三视角各触一次, 不互相点破。
// anti-fab: Cyrus Cylinder「人权宣言」标签显式标为现代 anachronism; satrap + 被掳犹太人
//   为合成桥接人物 (用括号短句标「史料不为普通人留名」)。
// ─────────────────────────────────────────────────────────────────

export var cyrusLens = {
  id: 'cyrus-actor',
  name: 'Cyrus the Great',
  nameCn: '居鲁士大帝',
  role: 'conqueror-actor',
  perspectiveTag: 'king-of-kings',
  icon: '👑',
  description: {
    cn: '约公元前 600/576 到 530 年的真实人物，阿契美尼德波斯的开国之王。他出身波斯 Anshan 的王族，约前 550 年起兵打败名义上的宗主米底王 Astyages，二十年里像滚雪球一样吞下吕底亚和巴比伦，建起当时世界最大的帝国。他真正改写历史的一招，是把宽容当成征服的武器：放归被掳的犹太人，尊重各族的神和法。这一遍让你从一个征服者内部，看他怎么用「尊重你的神、你的法、你的家」反而把更多人收进自己的帝国，刀是真的，宽容也是真的。',
    en: 'A real person, c. 600/576 to 530 BCE, the founder of Achaemenid Persia. He came from the royal house of Anshan in Persia. Around 550 BCE he rose against his nominal overlord, the Median king Astyages, and beat him, then over twenty years rolled up Lydia and Babylon like a snowball, building the largest empire of its time. His truly history-changing move was to make tolerance a weapon of conquest: he freed the exiled Jews and respected the gods and laws of every people. This pass puts you inside a conqueror, watching how he pulled more people into his empire by respecting your god, your law, your home. The sword was real, and so was the tolerance.',
  },
  storyboard: [
    {
      id: 'per-cyrus-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '公元前 539 年的秋天，巴比伦城外。世界上最古老、最骄傲的城市，城门几乎是自己朝我打开的。\n\n我是居鲁士（Cyrus）。我的军队几乎兵不血刃就走了进去。更奇怪的是：很多巴比伦人不是把我当敌人，是把我当解放者来欢迎。\n\n你大概以为征服者进城，就是烧、就是抢。我没有。我没把这座古城当战利品劫掠，我做的是反过来的事，等下你会亲眼看见。\n\n几十年里，我和我的继承者建起了人类历史上第一个横跨三大洲、统治几千万不同民族、不同语言、不同神祇之人的超级帝国，阿契美尼德波斯。我们的王号叫 King of Kings，shahanshah，意思是「众王之王」。\n\n这一遍，你坐进我这个位置。你会看见一个征服者，怎么不靠把所有人变成波斯人，反而让几千万本来互不相识的人，都接受同一个王在头顶。',
        en: 'The autumn of 539 BCE, outside the walls of Babylon. The oldest, proudest city in the world opened its gates to me almost by itself.\n\nI am Cyrus. My army walked in with barely any bloodshed. Stranger still: many Babylonians did not meet me as an enemy. They welcomed me as a liberator.\n\nYou probably think a conqueror entering a city means burning and looting. I did not. I did not take the ancient city as a prize to be sacked. I did the opposite, and you will see it with your own eyes soon.\n\nOver a few decades, I and my heirs built the first superstate in human history to span three continents and rule tens of millions of people of different nations, languages, and gods, the Achaemenid Persian Empire. Our royal title is King of Kings, shahanshah, meaning "king of kings."\n\nThis pass puts you in my seat. You will see how a conqueror, instead of turning everyone into Persians, made tens of millions of strangers all accept one king above them.',
      },
      deliverGoal: 'N1 hook — 前539秋巴比伦城门几乎自己打开/兵不血刃 + 居鲁士自我介绍 (被当解放者欢迎/不劫城反着做) + 阿契美尼德=史上第一个横跨三洲超级帝国 + King of Kings/shahanshah 众王之王 + 这一遍视角 (不靠把人变波斯人, 让几千万陌生人接受同一个王)',
      engagementHook: '一座最骄傲的古城，城门几乎自己朝我打开，很多人把征服者当解放者欢迎。一个征服者，凭什么能让被他打下的人欢迎他？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-cyrus-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我是从哪儿爬上来的，你才懂我后来为什么那样做。\n\n我出身波斯 Anshan 的王族。但「王族」别想多了，那时的波斯，不过是另一个更大势力的附庸，宗主是米底王 Astyages。换句话说，我们波斯人，本来是被人统治的那一方。\n\n约公元前 550 年，我起兵反抗 Astyages，打败了他，夺下米底的首都 Ecbatana。这一仗，把波斯从被统治者翻成了统治者。阿契美尼德帝国，就从这里起算。\n\n你记住这个起点：我不是生在帝国顶端的人。我是从「附庸」翻身上来的。\n\n这件事在我心里留下了一样东西，你后面会反复看见它起作用：我太清楚被别人统治是什么滋味了。所以当我自己成了统治者，我没有选最省事的那条路。',
        en: 'First see where I climbed up from, so you understand why I later did what I did.\n\nI came from the royal house of Anshan in Persia. But do not make too much of "royal house." Persia then was only a vassal of a larger power, its overlord the Median king Astyages. In other words, we Persians were the ones being ruled.\n\nAround 550 BCE I rose against Astyages, beat him, and took the Median capital Ecbatana. That one campaign turned Persia from the ruled into the ruler. The Achaemenid Empire is counted from here.\n\nRemember this starting point: I was not born at the top of an empire. I climbed up from being a vassal.\n\nThat left something in me you will see at work again and again: I knew too well what it tastes like to be ruled by others. So when I became the ruler myself, I did not take the easiest road.',
      },
      deliverGoal: 'N2 setup — 出身波斯 Anshan 王族但波斯本是米底附庸 (宗主 Astyages/波斯本是被统治方) + 约前550起兵打败 Astyages 夺 Ecbatana 翻身 + 阿契美尼德从此起算 + 起点: 不是生在顶端是从附庸翻身 + 留下的东西: 太懂被统治滋味, 当统治者没选最省事的路',
      engagementHook: '我不是生在帝国顶端的人，我是从「被统治的附庸」翻身上来的。一个尝过被统治滋味的人，当上统治者后，会更狠，还是更不一样？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-cyrus-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '翻身之后，我没停。接下来二十年，我像滚雪球一样往外吞。\n\n先向西，吞下小亚细亚的吕底亚（Lydia）。那是当时的富国，传说中富可敌国的 Croesus 国王就亡在我手里。再向东扩张，然后我掉过头，对准了当时近东最大的强权，新巴比伦帝国。\n\n这就到了前 539 年，巴比伦城门朝我打开的那一刻。\n\n注意我入城的姿态，这是我整套打法的钥匙：我不劫城，反而摆出「恢复秩序、敬奉巴比伦本地的神 Marduk」的样子。我让被前一个王 Nabonidus 冷落的神庙重新立起来，让被强迁的人和神像各归其位。\n\n你品一品这个选择：我明明是外来的征服者，却让巴比伦人觉得，是我替他们恢复了他们自己的秩序、他们自己的神。\n\n刀，我有。可我发现，比刀更能收服人心的，是让被征服的人觉得，跟着我，他们能保住自己最在乎的东西。',
        en: 'After turning the tables, I did not stop. Over the next twenty years I swallowed outward like a snowball.\n\nFirst west, to take Lydia in Asia Minor. That was the rich kingdom of its day; the legendary fabulously wealthy King Croesus fell to me. Then I pushed east, and then I turned and aimed at the greatest Near Eastern power of the time, the Neo-Babylonian Empire.\n\nWhich brings us to 539 BCE, the moment Babylon\'s gates opened to me.\n\nNote the way I entered, for it is the key to my whole method: I did not sack the city. Instead I posed as a restorer of order, honoring Babylon\'s own god Marduk. I raised again the temples that the former king Nabonidus had neglected, and returned the resettled people and the divine statues to their places.\n\nWeigh this choice: I was plainly a foreign conqueror, yet I made the Babylonians feel that it was I who restored their own order, their own gods, for them.\n\nThe sword, I had. But I found that what wins hearts better than a sword is making the conquered feel that, by following me, they can keep what they care about most.',
      },
      deliverGoal: 'N3 setup — 二十年滚雪球: 西吞吕底亚 (Croesus 富国亡于他) 东扩再对准新巴比伦 + 前539入城姿态=整套打法钥匙 (不劫城/敬本地神 Marduk/重立 Nabonidus 冷落的神庙/被迁者神像各归其位) + 外来征服者却让巴比伦人觉得他恢复了他们自己的神和秩序 + 「比刀更收人心: 让被征服者觉得跟着我能保住最在乎的东西」',
      engagementHook: '我是外来的征服者，却让被我打下的人觉得，是我帮他们恢复了他们自己的神。比起刀，让人觉得「跟着你能保住我在乎的东西」，是不是更厉害的征服？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-cyrus-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n巴比伦城里，关着一群几十年前被掳来的人,犹太人。他们的祖辈在故乡犹大被新巴比伦征服、第一圣殿被毁之后，被整批掳到这里，史称「巴比伦之囚」。他们在异乡的河边住了几代，念着一座大多数人从没见过的城,耶路撒冷。\n\n你手里现在有绝对的权力。对这群人，你有三个选择：继续把他们关着当劳力；把他们也变成「波斯式」的人；或者,做一件没人逼你做的事。\n\n你选了第三个。你下了一道令：愿意回去的，可以回去,而且，你们可以回耶路撒冷重建你们的圣殿。\n\n停一下，想清楚你为什么这么做。是纯粹的善意吗？还是你心里那本更冷的账：一群感恩的、各安其位的被征服者，比一群被你压着、恨着你的人，好统治得多，也省钱得多？\n\n你自己未必分得清。也许两样都是真的,这正是这一遍最值得你想的地方。\n\n（顺带说一句:准犹太人回家这件事，后世主要是靠犹太人自己的经书《以斯拉记》记下来的；我的官方圆柱讲的是巴比伦和它的神 Marduk，根本没单独提他们。同一件事，谁来记、为什么记，往往不一样。）',
        en: 'Now you are me.\n\nInside Babylon is a people carried off decades ago: the Jews. Their forebears, after their homeland of Judah was conquered by the Neo-Babylonians and the First Temple destroyed, were carried here in a mass, the so-called Babylonian Exile. They have lived for generations by a river in a foreign land, longing for a city most of them have never seen: Jerusalem.\n\nYou now hold absolute power. With this people you have three choices: keep them as laborers; turn them into "Persian-style" people; or do a thing no one is forcing you to do.\n\nYou choose the third. You issue an order: anyone who wishes to go home may go home, and, you may return to Jerusalem and rebuild your Temple.\n\nStop and be clear about why you do this. Is it pure goodwill? Or is it the colder ledger in your mind: a grateful, settled, conquered people is far easier and cheaper to rule than one you hold down and that hates you?\n\nYou may not be able to tell the two apart yourself. Perhaps both are true at once, and that is exactly what is most worth thinking about in this pass.\n\n(One note in passing: that the Jews were let go home is something later ages know mainly because the Jews recorded it themselves, in their own Book of Ezra; my official cylinder speaks of Babylon and its god Marduk, and never singles them out at all. The same event, who records it and why, is often not the same thing.)',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 巴比伦关着被掳犹太人 (祖辈犹大被新巴比伦征服/第一圣殿毁/巴比伦之囚/念耶路撒冷) + 你有绝对权力三选择 (继续当劳力/同化成波斯人/做没人逼的事) + 选第三: 下令准回家+重建圣殿 + 自我拷问: 纯善意 vs 更冷的账 (感恩各安其位的被征服者好统治省钱) + 「也许两样都真」',
      engagementHook: '我放了一群被掳的人回家，还准他们重建圣殿。可我自己也分不清：这是纯粹的善意，还是「这样更好统治、更省钱」的算计？善意和算计，能同时是真的吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-cyrus-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '放归犹太人，不是我一时心软的孤例。它是我一整套统治术里的一块。\n\n我们波斯王室所奉的至高善神，是 Ahura Mazda（阿胡拉·马兹达，琐罗亚斯德教里的至高善神）,至少到我的继承者大流士，这位善神被他刻上了 Behistun 的悬崖。但无论我们自己奉谁，我从不强迫被征服的人改信。相反，我常常资助、修复各地的神庙，尊重各族的神和他们自己的法律。\n\n你要看懂这背后的算术。我的帝国里，装着巴比伦人、犹太人、埃及人、吕底亚人、印度河边的部落,几十个民族，几十种神，几十种法。如果我非要把所有人都捏成波斯人、都拜我的神，那我得花多少兵、多少钱去镇压？我会把每一个被征服者都逼成我的敌人。\n\n所以我反过来：你保留你的神、你的法、你的家，只要你认我这个王在头顶。我管这叫帝国，更像管理一个「民族的拼盘」,我不抹平差异，我接受差异。\n\n这就是我留给历史的那道题的一半答案：宽容，在我手里，既是一种价值，也是一种聪明到家的统治成本控制。',
        en: 'Freeing the Jews was not a one-off from a soft heart. It was one piece of a whole method of rule.\n\nThe supreme good god our Persian royal house honors is Ahura Mazda (the supreme good god of Zoroastrianism); at least by the time of my heir Darius, that good god was carved onto the cliff of Behistun. But whoever we ourselves honor, I never force the conquered to convert. On the contrary, I often fund and repair local temples, and respect each people\'s gods and their own laws.\n\nSee the arithmetic behind this. My empire holds Babylonians, Jews, Egyptians, Lydians, tribes by the Indus, dozens of peoples, dozens of gods, dozens of laws. If I insisted on pressing everyone into Persians, all worshipping my god, how many soldiers and how much money would I spend crushing them? I would turn every conquered person into my enemy.\n\nSo I do the reverse: keep your god, your law, your home, as long as you accept me as king above you. I call it an empire; it runs more like a managed "mosaic of peoples." I do not flatten difference. I accept it.\n\nThis is half the answer to the question I leave history: tolerance, in my hand, is both a value and an utterly clever way to keep the cost of rule low.',
      },
      deliverGoal: 'N5 story — 放归不是孤例是统治术一块 + 居鲁士信 Ahura Mazda (琐罗亚斯德至高善神) 但不强迫改信反资助修复各地神庙尊重各族神与法 + 算术: 帝国几十民族几十神几十法, 硬同化要花多少兵钱/把每个被征服者逼成敌人 + 反过来「保留你的神法家只要认我这个王」民族拼盘接受差异 + 「宽容既是价值也是统治成本控制」',
      engagementHook: '我不强迫任何人改信我的神，反而出钱修他们的神庙。因为硬把所有人变成波斯人，得花多少兵去镇压？「尊重差异」对我，到底是胸怀，还是精打细算？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-cyrus-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我要让你看一样东西，它最能代表我这套帝国怎么转起来,一道消息，怎么跑过我的帝国。\n\n（我居鲁士在世时，那套最有名的御道驿传，是我之后大流士才完整建起来的。但「让一道令跑遍帝国」这个念头，从我这一代就开始了,这一段，是 lens 让你顺着这个念头往下看。）\n\n想象我下一道令,比如「准犹太人回家」这样的令。它得从我所在的地方，传到帝国最远的角落，传到每一个总督手里，才算数。\n\n后来这条路有了名字，叫 Royal Road（御道），从 Susa（苏萨）一路通到小亚细亚的 Sardis（萨第斯），约 2500 公里，沿途设驿站换马。一道加急消息，据说约一周就能跑完全程。希腊人希罗多德说，波斯的信使「风雪、雨水、酷热、黑夜，都挡不住」。\n\n（这句名言是希腊人写波斯,他既佩服我们的组织力，也带着「我们希腊 vs 他们波斯」的眼光。当成波斯的高效看是对的，当成波斯人的自我描述就错了。）\n\n你看，我的帝国大到几千万人、横跨三洲，靠什么不散架？靠一道令能多快跑到边疆。路，就是帝国的神经。',
        en: 'I want to show you the thing that best captures how my empire runs: how a single message travels across it.\n\n(In my own lifetime as Cyrus, the famous Royal Road relay system was only fully built later, by Darius. But the idea of "letting one order run across the whole empire" begins with my generation. This part is the pass letting you follow that idea forward.)\n\nImagine I issue an order, say, one like "let the Jews go home." It must travel from where I am to the farthest corner of the empire, into the hand of every governor, before it counts for anything.\n\nLater this road got a name: the Royal Road, running from Susa all the way to Sardis in Asia Minor, about 2,500 km, with relay stations to change horses. An urgent message, they say, could cross the whole road in about a week. The Greek Herodotus said Persia\'s couriers were stopped by "neither snow nor rain nor heat nor gloom of night."\n\n(That famous line is a Greek writing about Persia. He admires our organization, yet carries an "us Greeks vs. them Persians" lens. Take it as a view of Persian efficiency, yes; mistake it for Persians describing themselves, no.)\n\nYou see, my empire is tens of millions of people across three continents. What keeps it from falling apart? How fast one order can reach the frontier. The road is the empire\'s nerve.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 御道上一道消息 (居鲁士角度: 下令准犹太人回家这样的令要跑到每个总督手里才算数) + anti-fab 括号 (御道驿传是大流士才完整建/lens 让你顺念头看) + Royal Road Susa→Sardis 约2500公里驿站换马加急约一周 + 希罗多德「风雪雨夜挡不住信使」并显式标注「希腊人写波斯」视角 + 「路是帝国的神经/一道令多快到边疆决定帝国散不散」。只碰御道从居鲁士角度, 不揭另两视角',
      engagementHook: '一个横跨三大洲、几千万人的帝国，靠什么不散架？靠一道命令能多快跑到最远的边疆。你觉得，一个又大又杂的组织，最关键的「神经」是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-cyrus-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实告诉你一件事，免得你把我想成一个只会发慈悲的好人。\n\n我是个征服者。我的帝国，地基是征服。我打吕底亚、打巴比伦，靠的是军队和刀。我放归犹太人、尊重各族的神,这些都是真的，但它们立在另一件同样真的事情上：那几十个民族，是被我打下来的；他们交税、出兵、按我的规矩办事，不是因为他们爱我，是因为他们打不过我。\n\n「宽容」和「征服」，在我身上不是两个人，是同一个我。我一手拿刀，一手给你保留你的神。这两只手，一起用。\n\n这正是我最难评的地方，也是后人吵了几千年的地方。有人说我是古代最开明的君主，第一个证明可以靠尊重统治多民族大帝国的人。也有人提醒：别忘了，再宽容的帝国，底下也压着强制纳贡、强迁人口、镇压叛乱。\n\n我不替你下结论。我只要你看见完整的我:一个用宽容当武器的征服者。',
        en: 'I have to be honest with you, so you do not picture me as a man who only hands out mercy.\n\nI am a conqueror. My empire\'s foundation is conquest. I took Lydia and Babylon with armies and the sword. I freed the Jews and respected each people\'s gods, all of that is true, but it stands on another thing just as true: those dozens of peoples were beaten down by me. They pay tax, send soldiers, and follow my rules not because they love me, but because they cannot defeat me.\n\n"Tolerance" and "conquest" in me are not two men. They are the same me. One hand holds the sword, the other lets you keep your god. The two hands work together.\n\nThis is exactly the hardest thing to judge about me, and what people have argued over for thousands of years. Some call me the most enlightened ruler of the ancient world, the first to prove you can rule a vast multi-ethnic empire through respect. Others remind us: do not forget, beneath even the most tolerant empire lies forced tribute, forced resettlement, and the crushing of revolts.\n\nI draw no conclusion for you. I only want you to see the whole of me: a conqueror who used tolerance as a weapon.',
      },
      deliverGoal: 'N7 story (Rule 0 双面) — 诚实: 我是征服者帝国地基是征服 (打吕底亚巴比伦靠军队刀/各族交税出兵不是爱我是打不过我) + 宽容与征服是同一个我一手刀一手保留你的神两手一起用 + 最难评/吵几千年 (一派: 最开明君主第一个证明靠尊重统治多民族 / 另一派: 别忘底下压着强制纳贡强迁人口镇压叛乱) + 「不下结论, 看见完整的我: 用宽容当武器的征服者」',
      engagementHook: '我一手拿刀，一手给你保留你的神,这两只手是同一个我。一个人可以既是真心宽容、又是冷酷征服吗？还是其中一面，一定是假的？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-cyrus-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我约公元前 530 年，死在东方边疆的一场战役里。我葬在 Pasargadae（帕萨尔加德）一座朴素的石墓里,那座墓，至今还立着。\n\n但帝国没跟我一起停。我死后，我儿子冈比西斯二世（Cambyses II）在前 525 年征服了埃及，把那个最古老的文明也纳进帝国。再后来，经过一场继承危机，大流士一世（Darius I）上台,他做的事，把我打下来的版图，变成了一台能长期运转的机器。\n\n我得承认：我擅长「打下来」和「收人心」，但把帝国「整理成制度」的，是大流士。他在 Behistun（贝希斯敦）的悬崖上刻下三种文字的巨大铭文，宣告自己受 Ahura Mazda 之命为王、平定了所有叛乱。然后他做了真正改写历史的事。\n\n我把这一棒，交到他手里。下一步那套行省、货币、御道,你换个视角才看得最清。从我这儿，你先记住一句话：我证明了一件事,一个又大又杂的天下，可以不靠把所有人变成一种人，就撑起来。',
        en: 'I died around 530 BCE, in a battle on the eastern frontier. I was buried in a plain stone tomb at Pasargadae, and that tomb still stands today.\n\nBut the empire did not stop with me. After my death, my son Cambyses II conquered Egypt in 525 BCE, folding even that oldest civilization into the empire. Later still, after a succession crisis, Darius I took the throne, and what he did turned the map I had won into a machine that could run for the long term.\n\nI will admit it: I was good at "taking down" and "winning hearts," but the one who "sorted the empire into a system" was Darius. On the cliff at Behistun he carved a huge inscription in three scripts, declaring himself made king by the will of Ahura Mazda, with every rebellion crushed. Then he did the thing that truly changed history.\n\nI hand this baton into his hand. The next step, the satrapies, the coinage, the Royal Road, you will see most clearly from another perspective. From me, remember one sentence first: I proved one thing, that a huge and mixed realm can be held up without turning everyone into one kind of person.',
      },
      deliverGoal: 'N8 story — 约前530死东方边疆战役葬 Pasargadae 朴素石墓至今立 + 帝国没停: 前525 子冈比西斯二世征埃及 + 继承危机后大流士一世上台把版图变成能长期运转的机器 + 居鲁士自承「我擅长打下来收人心, 整理成制度的是大流士」+ Behistun 三语悬崖铭文 (受 Ahura Mazda 命为王/平定叛乱) + 交棒大流士 (行省货币御道换视角看最清) + 「我证明了: 又大又杂的天下不靠把所有人变成一种人也能撑起来」',
      engagementHook: '我擅长打下天下、收服人心，可把帝国「整理成一套能长久运转的制度」的，是我的继承者大流士。「打天下」和「治天下」，是不是两种完全不同的本事？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-cyrus-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图,我活着时根本看不全的地图。\n\n就在我建起帝国的那个时代，地球另一端的中国，正处在春秋晚期到战国。周天子名存实亡，几十个诸侯国在打、在变法，都在试验同一道题：怎么把一大片地和很多不同的人，捏成一个有效的政权？\n\n我们隔着几千里，互不知道对方，却在啃同一块硬骨头。\n\n约三百年后，那边会冒出一个叫秦的国家，统一六国（前 221），给出一个跟我截然相反的答案。我的办法是「你保留你的，只要认我这个王」,多元拼盘。秦后来的办法，你换到另一个视角时会细看,简单说，是反过来的：让大家变成同一种人。\n\n我先不评哪条路更好。我只想让你记住：面对「怎么统治一个又大又杂的天下」这道题，人类不是只有一个答案。我走出了一条，地球那头，另一个文明走出了另一条。\n\n这两条路，到今天还在被人反复掂量。',
        en: 'Let me step back and show you a larger map, one I could not have seen in full while alive.\n\nIn the very age I built my empire, on the other side of the earth, China was in the late Spring and Autumn into the Warring States era. The Zhou king was a figurehead, and dozens of states fought and reformed, all testing the same problem: how do you press a big patch of land and many different people into one working government?\n\nWe were thousands of miles apart, unknown to each other, yet gnawing the same hard bone.\n\nAbout three centuries later, a state called Qin would arise over there, unify the warring states (221 BCE), and give an answer the opposite of mine. My way was "keep what is yours, as long as you accept me as king," a pluralist mosaic. Qin\'s later way, which you will study closely from another perspective, was, in short, the reverse: make everyone become one same kind of person.\n\nI will not yet judge which road is better. I only want you to remember: facing the question "how do you rule a huge and mixed realm," humanity has more than one answer. I carved out one. On the other side of the earth, another civilization carved out another.\n\nThose two roads are still being weighed against each other to this day.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 actor 侧轻触) — 居鲁士建帝国时代=中国春秋晚期到战国 (周天子名存实亡/几十诸侯打变法/同一道题怎么把一片地和很多人捏成政权) + 隔几千里互不知却啃同一块硬骨头 + 两百多年后秦给出截然相反答案 (居鲁士=多元拼盘保留你的认我这个王 / 秦=反过来让大家变成同一种人, 细看留另一视角) + 「不评哪条好, 同一道题人类不止一个答案/两条路至今仍被掂量」',
      engagementHook: '我建帝国时，地球另一端的中国，几十个国家也在啃同一道题：怎么把一片大地和很多不同的人捏成一个政权。隔着几千里、互不知道，却走出两条相反的路,你觉得，会不会本来就没有唯一正确的答案？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-cyrus-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么评我那套「宽容」？两种说法都站得住，你来称。\n\n一种说法：我的宽容是真的，是一种了不起的文明价值。我放归犹太人、尊重各族的神和法,在一个习惯了征服就劫掠、占领就同化的时代，我第一个证明：可以靠尊重，而不是靠抹平，去统治几千万不同的人。我把「让被征服者保住自己」写成了一种统治哲学。这难道不该被记住为人类的一种进步吗？\n\n另一种说法：别被「宽容」这个好词骗了。我的宽容，本质是一笔精算过的成本账,感恩的、各安其位的被征服者，比被压着、恨我的人，省兵、省钱、好统治。它确实让无数人保住了神和法，但它的目的，始终是让我这个征服者统治得更稳、更久。宽容是手段，不是目的。\n\n这两边，不是「他是好人」对「他是伪君子」。是同一份宽容的两张脸,一种真实的文明价值，和一套真实的统治算计，长在同一个我身上，分不开。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should my "tolerance" be judged? Both views stand. You do the weighing.\n\nOne view: my tolerance was real, a great civilizational value. I freed the Jews and respected each people\'s gods and laws. In an age used to looting upon conquest and assimilating upon occupation, I was the first to prove that you can rule tens of millions of different people through respect rather than erasure. I made "letting the conquered keep themselves" into a philosophy of rule. Should that not be remembered as a kind of human progress?\n\nThe other view: do not be fooled by the fine word "tolerance." My tolerance was, at bottom, a carefully calculated cost ledger: a grateful, settled, conquered people saves soldiers, saves money, is easier to rule than one held down and hating me. It truly let countless people keep their gods and laws, but its aim, always, was to let me, the conqueror, rule more steadily and longer. Tolerance was the means, not the end.\n\nThese are not "he was good" against "he was a hypocrite." They are two faces of the same tolerance: a real civilizational value and a real calculation of rule, grown on the same me, inseparable.\n\nThis is the hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 我的宽容是文明价值还是精算的统治成本 / 一种说法 (真实文明价值/第一个证明靠尊重而非抹平统治几千万人/写成统治哲学/该记为人类进步) / 另一种说法 (别被好词骗/本质成本账感恩被征服者省兵钱好统治/目的始终是统治更稳更久/宽容是手段不是目的) / 同一份宽容两张脸价值与算计长同一身上分不开 / neutral school name (AP 老师) / 想30秒两边都站得住',
      engagementHook: '我的宽容，是了不起的文明价值，还是一笔精算过的统治成本账？这两样，可能在同一个我身上同时为真。你的 30 秒到了,你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'per-cyrus-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是征服者这一边的声音。\n\n请记住：这只是一边。我讲的「宽容统治」「我让你保住你的神」「我证明了可以靠尊重统治」,听起来甚至很高尚。这正是开国之王视角最危险的地方：它能把征服讲成恩典，把成本账讲成胸怀。\n\n但这一遍里，有些人从头到尾没开口。比如，我派到几千里外去替我收税、征兵的那个总督（satrap）,他被夹在「王在远方」和「治下各族」中间，他会怎么讲我这套「宽容」帝国到底好不好管？又比如，那个被我「放回家」的普通犹太人,被一个外族征服者决定「你可以回家了」，对他到底是恩典，还是另一种「你的命运由别人说了算」？等你换上他们的视角，他们会狠狠地挑战你刚才听我说的每一句。\n\n最后，留一个东西给你。还记得我说过的那道跑过御道、跑向帝国边疆的消息吗？\n\n换一个视角再走一遍，你会从另一个人那里，再遇见它一次,从一个收信的人，和一个沿着这条路走回家的人那里。到那时，它对你就不只是「帝国的神经」了。',
        en: 'What you just heard was the voice of one side, the conqueror\'s.\n\nRemember: it is only one side. My talk of "tolerant rule," of "I let you keep your god," of "I proved you can rule through respect," can even sound noble. And that is exactly the most dangerous thing about a founding king\'s view: it can tell conquest as grace, and a cost ledger as broad-mindedness.\n\nBut in this pass, some people never spoke at all. For one, the governor (satrap) I sent thousands of miles away to collect my taxes and raise my troops, caught between "the king far off" and "the peoples under him," how would he tell whether my "tolerant" empire was actually easy to govern? For another, the ordinary Jew I "sent home," to be told by a foreign conqueror "you may go home now," was that, to him, grace, or just another form of "someone else decides your fate"? When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. Do you remember the message I spoke of, the one that ran across the Royal Road toward the empire\'s frontier?\n\nWalk this through once more from another perspective, and you will meet it again, from someone else: from a person who receives such a letter, and a person who walks home along that very road. By then it will be more to you than "the empire\'s nerve."',
      },
      deliverGoal: 'N11 close/meta — 你听的是征服者一边 (能把征服讲成恩典把成本账讲成胸怀最危险) + 还没听到: 派去几千里外的 satrap (夹在王在远方与治下各族/这套宽容帝国到底好不好管) + 被放回家的普通犹太人 (外族征服者决定你可回家=恩典还是别人替你定命运) 会挑战你听的每句 + 暗示御道上的消息会从另两视角再遇见 (收信的人 + 沿路走回家的人) 不直接解释 echo',
      engagementHook: '征服者最危险的地方，是他能把征服讲成恩典。你听完我这一边，最想去问那个替我收税的总督、那个被我「放回家」的犹太人什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var satrapLens = {
  id: 'satrap-mediator',
  name: 'A Satrap',
  nameCn: '一名总督',
  role: 'lonely-mediator',
  perspectiveTag: 'between-king-and-subjects',
  icon: '⚖️',
  description: {
    cn: '大流士行省体系里的一名总督（satrap），合成桥接人物，身份完全写实,不给名字，因为他代表的是「satrap」这个位置本身的两难。他是王派到某个远方行省的代理人，住在行省宫殿里，手里握着这片地的收税权、征兵权、司法权，在本地人眼里他几乎就是王。但他被夹在中间：对上，王在几千里外，王的「眼睛和耳朵」随时来查；对下，他要收够税、征够兵，又不能逼反治下各族。这一遍让你站在帝国行政的关节上，体会「离权力中心太远，权力就既诱人又危险」。',
    en: 'A governor (satrap) inside Darius\'s province system, a bridging character with a fully real role, given no name, because he stands for the dilemma of the "satrap" position itself. He is the king\'s agent sent to a far province, living in the provincial palace, holding the power to tax, to draft soldiers, and to judge; to the locals he is almost the king. But he is caught in the middle: looking up, the king is thousands of miles away and the king\'s "eyes and ears" may arrive to audit at any time; looking down, he must squeeze enough tax and troops without pushing the peoples under him into revolt. This pass puts you at the joint of the empire\'s machine, to feel how "the farther from the center of power, the more power both tempts and endangers you."',
  },
  storyboard: [
    {
      id: 'per-satrap-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '王离我有几千里。可在这片行省，我几乎就是王。\n\n我是一名 satrap,总督。波斯王把我派到帝国一个遥远的角落，替他管一整片地。也许是埃及，也许是小亚细亚的 Sardis。我住在行省的宫殿里，手里握着这片地的收税权、征兵权、审判权。本地人见了我，跟见王没两样。\n\n我不告诉你我的名字。\n\n（说实话：帝国的史书，很少为某一个具体的总督留下完整的脸。我是一个合成的桥接人物，身份完全写实,因为我代表的，不是某一个人，是「satrap」这个位置本身。这个位置上坐过几十个人，他们大多面对一模一样的两难。）\n\n这一遍，你坐进这个位置。你会发现，手握大权，却不是件痛快的事。你被夹在两头：头顶有个你几乎见不着、却随时能要你命的王，脚下有几族你必须榨出钱和兵、又不能逼反的人。',
        en: 'The king is thousands of miles from me. Yet in this province, I am almost the king.\n\nI am a satrap, a governor. The Persian king sent me to a far corner of the empire to run a whole stretch of land for him. Maybe Egypt, maybe Sardis in Asia Minor. I live in the provincial palace, holding the power to tax, to draft soldiers, to judge. To the locals, meeting me is no different from meeting the king.\n\nI will not tell you my name.\n\n(To be honest: an empire\'s records rarely leave a full face for any one particular governor. I am a bridging character with a fully real role, because I stand not for one man, but for the "satrap" position itself. Dozens of men sat in this seat, and most faced exactly the same dilemma.)\n\nThis pass puts you in this seat. You will find that holding great power is not a pleasant thing. You are caught between two ends: above you a king you can barely ever see, yet who can take your life at any time; below you several peoples from whom you must squeeze money and soldiers, yet cannot push into revolt.',
      },
      deliverGoal: 'N1 hook — 王离我几千里但在这片行省我几乎就是王 + satrap 自我介绍 (王派到遥远角落/埃及或 Sardis/宫殿/收税征兵审判权/本地人见我如见王) + anti-fab 括号 (史书很少为具体总督留完整脸/合成桥接人物身份写实/代表 satrap 这个位置本身/几十人坐过同一两难) + 这一遍视角 (手握大权不痛快/夹在头顶随时要命的王和脚下必须榨钱兵又不能逼反的各族中间)',
      engagementHook: '王离我几千里，可在这片地，我几乎就是王。手握这么大的权力，听起来很爽,但你猜，它会不会反而是我最大的危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-satrap-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清楚我这个位置是怎么来的，你才懂我为什么这么难。\n\n开国的居鲁士擅长打天下、收人心，但把帝国整理成一台机器的，是大流士一世（Darius I）。他前 522 年经过一场继承危机上台，然后做了真正改写历史的事：他把征服来的庞大版图，分成了约 20 个 satrapy（行省），每个派一个 satrap,也就是我这样的人,去管。\n\n这是一套了不起的设计。帝国太大了，王一个人不可能盯住从埃及到印度河的每一寸地。于是他把权力切成块，下放给我们。我替他收税、征兵、维持秩序，他只要盯住我们这二十来个人就行。\n\n你看出这套设计的天才，也该看出它的隐患：王把这么大的权力交到我手里，我离他又这么远,那他怎么防着我，哪天自己想当王？\n\n这就是大流士、也是我，每天都得面对的那个问题。下一节，我告诉你他想出的办法。',
        en: 'First let me make clear how my position came to be, so you understand why it is so hard.\n\nThe founder Cyrus was good at taking the world and winning hearts, but the one who sorted the empire into a machine was Darius I. He took the throne in 522 BCE after a succession crisis, then did the thing that truly changed history: he divided the vast conquered map into about 20 satrapies (provinces), sending one satrap, a man like me, to run each.\n\nThis was a remarkable design. The empire was too big; one king could never watch every inch from Egypt to the Indus. So he cut power into blocks and handed them down to us. I collect his taxes, raise his troops, keep order, and all he has to do is watch the twenty-odd of us.\n\nYou see the genius of this design, and you should also see its hidden danger: the king hands me such great power, and I am so far from him, so how does he stop me from deciding, one day, to be king myself?\n\nThis is the question Darius, and I, must face every day. In the next node I will tell you the answer he devised.',
      },
      deliverGoal: 'N2 setup — 开国居鲁士擅长打天下收人心, 整理成机器的是大流士一世 (前522继承危机后上台) + 真正改写历史: 庞大版图分约20个 satrapy 每个派一个 satrap 管 + 设计的天才: 帝国太大王盯不住从埃及到印度河每寸/把权力切块下放/王只需盯住二十来个人 + 隐患: 权力这么大我离王这么远王怎么防我哪天想当王 + 引出下一节大流士的办法',
      engagementHook: '帝国大到一个王盯不过来，于是他把权力切成块、下放给我们这二十来个总督。可问题立刻来了:权力给了我，我又离他那么远，他怎么防我造反？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-satrap-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '大流士的办法，叫分权制衡。\n\n他不傻。他知道，把整个行省的兵、钱、法全交给我一个人，等于在边疆给自己造一个潜在的对手。所以他在我身边，又放了两个人。\n\n一个是军事指挥官，名义上跟我平级，管着行省的驻军,可那支军队，不完全听我的。另一个是直接对王负责的书记或监察官。\n\n更让我后背发凉的，是王的「眼睛和耳朵」（the king\'s eyes and ears）。\n\n（这个说法主要来自希腊史料,希腊人这样描述波斯的巡察制度。）这是一批替王到各行省巡查的官员，他们随时可能出现，来查我的账、看我有没有越界、有没有二心。\n\n你品一品我的处境：我手里有大权，但我身边有军权不归我的将军、有直接通王的书记、还有随时会从地平线上冒出来的「眼睛和耳朵」。这三股力量，互相牵制，谁也别想一个人坐大。\n\n这套设计的目的只有一个：让我有足够的权去替王干活，又没足够的权去背叛王。',
        en: 'Darius\'s answer is called checks and balances.\n\nHe was no fool. He knew that handing one man all the soldiers, money, and law of a whole province was to build himself a potential rival on the frontier. So beside me he placed two more men.\n\nOne is a military commander, my equal on paper, who runs the province\'s garrison, and that army does not fully obey me. The other is a secretary, or inspector, who reports straight to the king.\n\nWhat runs cold down my back is the king\'s "eyes and ears."\n\n(This term comes mainly from Greek sources; it is how the Greeks described Persia\'s inspection system.) These are officials who travel to the provinces for the king, who may appear at any time to audit my books, to see whether I have overstepped, whether I harbor disloyalty.\n\nWeigh my situation: I hold great power, but beside me is a general whose army is not mine, a secretary with a direct line to the king, and "eyes and ears" that may rise over the horizon at any time. These three forces check one another; none may grow too big alone.\n\nThe design has one aim: to give me enough power to do the king\'s work, and not enough to betray him.',
      },
      deliverGoal: 'N3 setup — 大流士办法=分权制衡 + 他不傻知道兵钱法全给一人等于造对手 + 身边放两人: 军事指挥官 (名义平级管驻军/军队不完全听我) + 直接对王负责的书记/监察官 + 王的「眼睛和耳朵」(显式标注主要来自希腊史料/巡察制度) 随时出现查账看有无越界二心 + 三股力量互相牵制谁也别想坐大 + 「目的: 让我有足够权干活, 没足够权背叛」',
      engagementHook: '王在我身边放了一个军队不归我管的将军、一个直接通王的书记、还有随时会冒出来查我账的「眼睛和耳朵」。这套设计的目的只有一个:让我有足够权干活，没足够权造反。你觉得，这种「互相盯着」能盯住人心吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-satrap-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n收税的季节到了。王在几千里外，可他要的数字，白纸黑字，一点都不能少。\n\n你坐在行省宫殿里，面前摆着两本账。一本是王要的：这片地今年该上多少税、出多少兵。另一本是真实的：今年收成不好，几个部族已经在抱怨，去年你催得急，差点闹出乱子。\n\n你心里清楚那条窄路：往下压得太狠，治下各族会反,行省一乱，王会觉得你无能，甚至怀疑你故意激变。可你要是松了手、收不够数，王那边的书记一上报，王会觉得你要么没用，要么,在偷偷给自己攒人心、攒钱、攒兵，为将来某件事做准备。\n\n你每一个决定，头顶有「眼睛和耳朵」在看，脚下有治下各族在掂量。\n\n你现在就得拿主意：这一季的税，你往紧里收，还是往松里放？你先保住王对你的信任，还是先保住治下不反？\n\n这就是我这个位置的日常,我不是在统治，我是在两堵随时会塌的墙中间，走钢丝。',
        en: 'Now you are me.\n\nThe tax season has come. The king is thousands of miles away, yet the figure he demands, in black and white, may not fall short by one bit.\n\nYou sit in the provincial palace with two ledgers before you. One is the king\'s: how much tax this land owes this year, how many soldiers it must send. The other is the real one: the harvest was poor, several tribes are already complaining, and last year when you pressed hard it nearly broke into trouble.\n\nYou know the narrow path well: press too hard below, and the peoples under you will revolt; let the province erupt, and the king will think you incompetent, may even suspect you stirred it on purpose. But if you loosen your grip and fall short, the moment the king\'s secretary reports it, the king will think you either useless, or, quietly gathering hearts, money, and soldiers for yourself, preparing for something to come.\n\nEvery decision of yours has the "eyes and ears" watching above, and the peoples under you weighing below.\n\nYou must decide now: this season\'s tax, do you collect it tight, or let it run loose? Do you first protect the king\'s trust in you, or first keep the people under you from revolt?\n\nThis is the daily life of my position. I am not ruling. I am walking a tightrope between two walls that may collapse at any time.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 收税季王在几千里外但要的数字一点不能少 + 两本账 (王要的: 该上多少税出多少兵 / 真实的: 收成不好几部族抱怨去年催急差点乱) + 窄路: 压太狠各族反王觉你无能甚至疑你激变 / 松手收不够书记一上报王觉你无用或偷攒人心钱兵为将来准备 + 每个决定头顶眼睛和耳朵脚下各族掂量 + 拿主意: 税收紧还是放松/先保王信任还是先保不反 + 「不是在统治是在两堵会塌的墙中间走钢丝」',
      engagementHook: '收税收紧，治下各族会反；收松了，王会怀疑我偷攒实力想造反。头顶有人盯，脚下有人量,我不是在统治，是在走钢丝。这一季的税，换你，你往紧里收，还是往松里放？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-satrap-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我还得替王，把这片杂乱的地，连进整个帝国。这事儿，靠的是大流士那套标准化。\n\n第一样，是钱。大流士发行了帝国统一的金币，叫 daric（达里克），配一种银币 siglos，主要在 Susa、Sardis 这些王家铸币地铸造。从前每片地各用各的钱，现在我收税、付军饷，都能用同一套钱算清。\n\n第二样，是字。帝国行政的通用语，是 Aramaic（阿拉米语）。\n\n注意这一点很关键：王没有强迫所有人都说波斯语。他选了一门本来就在近东到处流通的「商用通用语」,这样，从埃及到印度河，所有行省的公文，我都能看懂、都能往上递。\n\n你看出大流士的聪明了吗？他不强求大家变成一种人,你说你的话、拜你的神都行,但他给了全帝国一套共用的钱和一套共用的字。这样，几十个原本各过各的行省，才能像零件一样，咬合进同一台机器。\n\n我这个总督，就是这台机器在边疆的一个齿轮。',
        en: 'I must also, for the king, connect this jumbled land into the whole empire. That rests on Darius\'s standardization.\n\nThe first thing is money. Darius issued an empire-wide gold coin, the daric, with a silver partner, the siglos, minted mainly at royal centers like Susa and Sardis. Where once each land used its own money, now I collect taxes and pay soldiers, all reckoned in the same coinage.\n\nThe second thing is script. The administrative language of the empire is Aramaic.\n\nNote this carefully, it matters: the king did not force everyone to speak Persian. He chose a "business language" already circulating across the Near East, so that from Egypt to the Indus, I can read the official documents of every province and pass them up the line.\n\nDo you see Darius\'s cleverness? He does not demand everyone become one kind of person, speak your own tongue, worship your own god, that is fine, but he gives the whole empire one shared money and one shared script. Only so can dozens of provinces that once each went their own way mesh, like parts, into one machine.\n\nI, the satrap, am one gear of that machine on the frontier.',
      },
      deliverGoal: 'N5 story — 替王把杂乱的地连进帝国靠大流士标准化 + 钱: daric 金币配 siglos 银币主要在 Susa/Sardis 王家铸/从前各用各钱现在收税付军饷同一套钱 + 字: Aramaic 阿拉米语行政通用语 + 关键: 王没强迫所有人说波斯语选本就流通的商用通用语/从埃及到印度河公文我都能看懂往上递 + 大流士聪明: 不强求变一种人(说你的话拜你的神都行)但给全帝国共用的钱和字/几十行省才能像零件咬合进一台机器 + 「我是这台机器在边疆的一个齿轮」',
      engagementHook: '王没强迫大家说波斯语，却给了全帝国一套通用的钱和一套通用的字。你说你的话、拜你的神都行,但公文得用同一种字。「不强求一样、只统一最关键的几样」，是不是一种更高明的统一？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-satrap-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我告诉你，王是怎么伸手够到我这么远的地方的,靠一道跑过御道的消息。\n\n有一天，一个风尘仆仆的信使，到了我的行省。他沿着 Royal Road（御道）一路换马跑来,那条路从王所在的 Susa 一直通到 Sardis，约 2500 公里，沿途全是换马的驿站。一道加急消息，据说约一周就能跑完全程。\n\n他带来一封王的来信。\n\n你以为我会高兴吗？我的心情，比你想的复杂得多。\n\n这封信，一半是授权:它代表王，它让我手里的权力有了合法性，没有它，我什么都不是。可它另一半，是监视:它提醒我，王虽然在几千里外，但他的手，能顺着这条路，随时伸到我面前。今天送来的是命令，明天顺着同一条路来的，可能就是「眼睛和耳朵」，来查我。\n\n（坐在我这个位置，你大概能体会这种复杂,虽然史料不会逐字记下我拆信那一刻心里在想什么。）\n\n同一条路，同一道消息，对王是神经，对我，既是命脉，也是套在脖子上的绳。',
        en: 'Let me tell you how the king reaches his hand all the way out to me, through a message that runs the Royal Road.\n\nOne day a travel-worn courier arrived in my province. He had come changing horses along the Royal Road, the road that runs from Susa, where the king is, all the way to Sardis, about 2,500 km, lined the whole way with relay stations to change horses. An urgent message, they say, could cross the whole road in about a week.\n\nHe brought a letter from the king.\n\nDo you think I was glad? My feeling was far more tangled than you would guess.\n\nThis letter is half authorization: it stands for the king, it gives the power in my hand its legitimacy; without it, I am nothing. But its other half is surveillance: it reminds me that though the king is thousands of miles away, his hand can reach down this road to me at any time. Today it brings an order; tomorrow, down the same road, may come the "eyes and ears," to audit me.\n\n(Sitting in my seat, you can probably feel this tangle, though the record does not write down, word for word, what was in my mind the moment I opened the letter.)\n\nThe same road, the same message: to the king it is a nerve; to me it is both a lifeline and a rope around my neck.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 御道上一道消息从 satrap 角度: 风尘仆仆信使沿 Royal Road 换马跑来 (Susa→Sardis 约2500公里驿站换马加急约一周) 带来王的来信 + satrap 心情复杂不是高兴 + 信一半授权 (代表王/让权力合法/没它我什么都不是) 一半监视 (提醒王的手能顺路随时伸来/今天命令明天可能眼睛和耳朵来查) + anti-fab 括号 (史料不逐字记拆信心里) + 「同一条路同一道消息对王是神经对我既是命脉也是套脖子的绳」。只碰御道从 satrap 角度不揭另两视角',
      engagementHook: '王的来信到了。你以为我会高兴?这封信一半是授权,没它我什么都不是；一半是监视,它提醒我，王的手能顺着这条路随时伸到我面前。同一道消息，怎么会既是命脉、又是套在脖子上的绳？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-satrap-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在，最危险的那个念头，我得跟你摊开说。\n\n我手里有兵、有钱、有这一整片地的人。我离王几千里。一个问题，迟早会在每一个 satrap 心里升起来：我凭什么，永远替别人管这片地？这片地的人服我、税进我手、兵听我半个号令,我为什么不能，自己当王？\n\n你别急着说我大逆不道。你设身处地想：离权力中心太远，权力本身就会变味,它既诱人，又危险。它诱人，是因为没人能时时刻刻管住你；它危险，也是因为同一件事,没人管得住你，也意味着王对你永远不放心。\n\n历史上，真有 satrap 起兵造反。也真有 satrap 在最关键的时候，做了改写整个帝国命运的选择,这个，我留到最后讲。\n\n大流士设计这套分权制衡，就是为了按住我心里这个念头。可你想想：制度能拦住我调兵，能让书记盯着我的账,但它能拦住一个念头在人心里发芽吗？',
        en: 'Now the most dangerous thought, I must lay open for you.\n\nIn my hand are soldiers, money, and all the people of this whole land. I am thousands of miles from the king. A question rises, sooner or later, in the heart of every satrap: by what right do I run this land forever for someone else? The people here obey me, the taxes come to my hand, the soldiers heed half my command, why can I not be king myself?\n\nDo not rush to call me a traitor. Put yourself in my place: too far from the center of power, power itself turns. It both tempts and endangers. It tempts because no one can watch you every moment; it endangers, for the same reason, no one can watch you, which also means the king will never quite trust you.\n\nIn history, satraps really did rise in revolt. And a satrap really did, at the most critical moment, make a choice that rewrote the fate of the whole empire, that, I save for the end.\n\nDarius designed this checks and balances to hold down exactly this thought in my heart. But think: an institution can stop me from moving troops, can set a secretary to watch my books, but can it stop a thought from sprouting in a human heart?',
      },
      deliverGoal: 'N7 story (核心两难) — 最危险念头摊开: 我有兵钱人离王几千里/每个 satrap 迟早升起的问题「凭什么永远替别人管这片地/人服我税进我手兵听我号令为何不能自己当王」+ 别急说大逆不道设身处地: 离权力中心太远权力变味既诱人又危险 (诱人因没人时时管住/危险因同样没人管住=王永远不放心) + 历史真有 satrap 造反/真有 satrap 关键时刻做了改写帝国命运的选择 (留到最后) + 大流士分权制衡为按住这念头 + 「制度能拦我调兵盯我账, 能拦一个念头在人心发芽吗」',
      engagementHook: '一个问题迟早会在我心里升起：我凭什么永远替别人管这片地，为什么不能自己当王？制度能拦住我调兵、盯住我的账,可它拦得住一个念头，在人心里发芽吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-satrap-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这个位置的两难，不只在我一个人的良心里。它关系到整个帝国的命。\n\n大流士、薛西斯这些王，把目光投向更远的地方,前 490 年、前 480 年，他们两次远征海那边的希腊城邦，都没打下来（Marathon、Salamis 接连受挫）。从希腊人笔下看，那是「自由战胜专制」的史诗；可从帝国的尺度看，希腊只是我们西北角一场没打赢的边境战事,帝国主体几乎毫发无损，又繁荣了一个多世纪。\n\n你看出关键了吗？帝国真正的内伤，从来不在边境，在内部,在像我这样的人身上。\n\n这一百多年里，帝国大体维持着惊人的规模和繁荣。但 satrap 叛乱、宫廷里的继承斗争、行省一点点离心,这些才是慢慢蛀空它的东西。\n\n王在远方修御道、铸钱、派「眼睛和耳朵」，拼命想把我们这些边疆的齿轮，一个个咬死在机器上。可齿轮多了、离得远了，总有几个，会慢慢松动。\n\n帝国的命，不是被外面的敌人一刀砍断的。是从里面，一颗齿轮一颗齿轮，松开的。',
        en: 'The dilemma of my position is not only in my own conscience. It bears on the very life of the empire.\n\nKings like Darius and Xerxes turned their eyes to lands farther off: in 490 and 480 BCE they twice campaigned against the Greek city-states across the sea, and failed both times (checked at Marathon, then Salamis). In Greek writing, that was an epic of "freedom defeating tyranny"; but on the empire\'s scale, Greece was one failed border campaign in our far northwest, the empire\'s core barely scratched, and it prospered for another century and more.\n\nDo you see the key? The empire\'s real internal wound was never at the border. It was inside, in men like me.\n\nOver this century and more, the empire mostly held its astonishing size and wealth. But satrap revolts, succession fights in the court, and the slow drift of provinces, these were the things that hollowed it out little by little.\n\nThe king, far off, built the Royal Road, minted coins, sent the "eyes and ears," straining to lock us frontier gears one by one onto the machine. But the more gears, the farther apart, the more a few of them, slowly, work loose.\n\nThe empire\'s life was not cut through by an enemy outside with one stroke. It came loose from within, one gear, then another.',
      },
      deliverGoal: 'N8 story (zoom: 边境 vs 内伤) — 我的两难关系整个帝国命 + 大流士薛西斯把目光投向更远: 前490前480两次远征希腊都没打下 (Marathon/Salamis 受挫) + 视角对照 (希腊笔下=自由战胜专制史诗/帝国尺度=西北角一场没打赢的边境战事帝国主体毫发无损又繁荣一个多世纪) + 关键: 帝国真正内伤不在边境在内部在像我这样的人身上 + 百余年维持规模繁荣但 satrap 叛乱/宫廷继承斗争/行省离心慢慢蛀空 + 王修御道铸钱派眼睛和耳朵想咬死齿轮但齿轮多了远了总有松动 + 「帝国不是外敌一刀砍断是从里面一颗齿轮一颗齿轮松开的」',
      engagementHook: '希腊人把波希战争写成「自由战胜专制」的史诗，可在帝国眼里，那只是西北角一场没打赢的边境小仗。真正蛀空帝国的，不是外面的敌人，是像我这样、慢慢松动的齿轮。你觉得，一个庞大组织，更容易死于外部的敌人，还是死于内部的瓦解？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-satrap-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在，我告诉你那个改写帝国命运的 satrap 是谁。这是我这个位置最黑、也最讽刺的一笔。\n\n前 334 年，马其顿的亚历山大（Alexander the Great）开始东征。前 331 年的 Gaugamela（高加米拉）一战，他击溃了末代王大流士三世（Darius III）的大军。波斯的都城接连陷落，前 330 年，礼仪都城 Persepolis（波斯波利斯）被一把火烧掉。\n\n末代王大流士三世，一路败逃。最后杀死他的，不是亚历山大,是他自己手下的一个 satrap，Bactria（巴克特里亚）的总督 Bessus（贝苏斯）。\n\n你听懂这里的讽刺了吗？\n\n大流士当年设计那一整套精巧的分权制衡，就是为了防像我这样的 satrap 坐大、背叛。结果，给波斯帝国致命一击、亲手杀掉末代王的，恰恰是一个 satrap。\n\n最聪明的防内乱设计，挡得住一时的造反，最后却挡不住帝国晚期人心的彻底离散。我这个位置埋下的那颗种子，到最后，自己结了果。',
        en: 'Now I will tell you who that fate-changing satrap was. This is the darkest, and most ironic, entry of my position.\n\nIn 334 BCE Alexander the Great of Macedon began his eastern campaign. At Gaugamela in 331 BCE he shattered the army of the last king, Darius III. The Persian capitals fell one after another, and in 330 BCE the ceremonial capital Persepolis was burned to the ground.\n\nThe last king, Darius III, fled in defeat the whole way. The man who finally killed him was not Alexander. It was one of his own satraps, Bessus, the governor of Bactria.\n\nDo you catch the irony here?\n\nDarius, long ago, designed that whole delicate system of checks and balances precisely to stop a satrap like me from growing too big and betraying him. And in the end, the one who dealt the death blow to the Persian Empire, who killed the last king with his own hand, was a satrap.\n\nThe cleverest design against internal revolt can hold off a rebellion for a time, but in the end could not stop the late empire\'s hearts from drifting wholly apart. The seed my position planted, at the very last, bore its own fruit.',
      },
      deliverGoal: 'N9 story (climax/反讽) — 改写帝国命运的 satrap 是谁: 我这位置最黑最讽刺一笔 + 前334亚历山大东征前331 Gaugamela 击溃末代王大流士三世 + 都城接连陷落前330 Persepolis 被火烧 + 末代王败逃最后杀他的不是亚历山大是他自己手下 satrap Bactria 总督 Bessus + 反讽: 大流士设计分权制衡就为防 satrap 坐大背叛/结果致命一击亲手杀末代王的恰是一个 satrap + 「最聪明的防内乱设计挡得住一时造反挡不住帝国晚期人心彻底离散/我这位置埋的种子最后自己结了果」',
      engagementHook: '大流士设计那一整套精巧的制衡，就是为了防一个 satrap 背叛。结果，给波斯帝国致命一击、亲手杀死末代王的，恰恰是一个 satrap。再聪明的制度设计，是不是都防不住「人心散了」？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-satrap-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这个位置的一生，最难评的，是大流士那套「分权制衡」。两种说法都站得住，你来称。\n\n一种说法：那是古代行政的奇迹。靠它，波斯把一个横跨三洲、几十个民族的帝国，转了将近两百年。它给了 satrap 足够的权去把边疆治活，又用军权分离、监察巡查，按住了大多数人的反心。比起把所有人逼成一种人，这套「给权又防权」的设计，灵活、省成本、尊重地方。它撑了那么久，本身就是成功。\n\n另一种说法：它从根上就埋着一道治不好的裂缝。你越是把大权下放到几千里外，你就越要靠「盯」来防人,可「盯」防得住调兵、防得住做账，防不住人心。Bessus 的那一刀证明了：这套设计的天才之处，恰恰也是它的死穴,它把帝国的命，分到了一群离王太远、永远不可能被完全信任、也永远在被诱惑的人手里。\n\n这两边，不是「好制度」对「坏制度」。是同一套设计的两张脸,让帝国转起来的，和让帝国散掉的，是同一个东西。\n\n顺带说一句:地球另一端，差不多同时，有人面对同一道「怎么管地方」的题，给了相反的答案,那个对照，留到收尾，让你自己掂量。\n\n你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked the life of this position, the hardest thing to judge is Darius\'s "checks and balances." Both views stand. You do the weighing.\n\nOne view: it was a marvel of ancient administration. By it, Persia kept an empire of three continents and dozens of peoples running for nearly two hundred years. It gave the satrap enough power to bring the frontier to life, and with the separation of military command and roving inspection, it held down most men\'s wish to rebel. Compared to forcing everyone into one kind of person, this "grant power yet guard power" design was flexible, low-cost, and respected the locality. That it lasted so long is itself a success.\n\nThe other view: from the root it held an incurable crack. The more you hand great power thousands of miles away, the more you must rely on "watching" to guard against men, and watching can guard against moving troops, against cooked books, but not against the human heart. Bessus\'s single stroke proved it: the genius of this design was exactly its fatal weakness, it divided the empire\'s life into the hands of men too far from the king, who could never be fully trusted, and who were forever being tempted.\n\nThese are not "good system" against "bad system." They are two faces of the same design: what made the empire run, and what made it fall apart, were the same thing.\n\nA note in passing: on the other side of the earth, at about the same time, someone faced the same question of "how to run the localities" and gave the opposite answer. That comparison I save for the close, for you to weigh yourself.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 大流士分权制衡是行政奇迹还是从根埋着治不好的裂缝 / 一种说法 (古代行政奇迹/转近两百年/给权治活边疆军权分离监察按住反心/比逼成一种人灵活省成本尊重地方/撑这么久本身是成功) / 另一种说法 (从根埋裂缝/越下放大权越靠盯/盯防得住调兵做账防不住人心/Bessus 一刀证明天才即死穴/把帝国命分给离王太远永不被完全信任永在被诱惑的人) / 同一设计两张脸让帝国转和散是同一东西 / neutral school name (AP 老师隐含) / 顺带预告§8中国对照留到收尾 / 想30秒两边都站得住',
      engagementHook: '同一套分权制衡，既让波斯帝国转了近两百年，也最终让它从内部散掉,让它转起来的和让它垮掉的，是同一个东西。你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'per-satrap-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '收尾，我把那道压在心头的对照，交给你。\n\n就在波斯靠 satrap 治理天下的同一个时代，地球另一端的中国，正从春秋晚期走向战国，也在啃「怎么管一大片地」这道题。约三百年后，秦统一六国（前 221），给了一个跟波斯截然相反的答案。\n\n一句话:波斯把地方交给「本地的世家」,世袭、半自治、权力极大的总督，几乎是本地的小王，再靠分权制衡死死盯住；秦废分封、行郡县，把地方交给中央任免、有任期、可调动、不世袭的「流官」，随时换人。\n\n两条路，两种风险。我这套灵活、尊重地方，代价是我可能离心、可能就是那个 Bessus,事实上波斯最终约前 330 年亡于亚历山大，享国约两百年。秦那套中央控制强得多，代价是行政成本高、极度依赖中央能力,事实上秦统一后很快二世而亡（约十几年）。两条路最后都没能长生，只是死法不同。\n\n（Rule 0:别急着说哪条更文明、哪条更专制。两条路，各自回应各自的处境，各有智慧，也各有死穴。）\n\n你只听到了我这一边,夹在中间的总督。那个高高在上的开国之王居鲁士，会把这套帝国讲成「宽容的奇迹」；那个被「放回家」的普通犹太人，会从最底下讲一个完全不同的故事。换个视角再走一遍，你刚才那 30 秒下的判断，还站得住吗？',
        en: 'To close, I hand you the comparison that weighs on my heart.\n\nIn the very age Persia ruled the world through satraps, on the other side of the earth, China was moving from the late Spring and Autumn into the Warring States, also gnawing the question of "how to run a vast land." About three centuries later, Qin unified the warring states (221 BCE) and gave an answer the very opposite of Persia\'s.\n\nPersia (my own system): hand the localities to governors like me, often hereditary, semi-autonomous, immensely powerful, almost "little local kings," then watch them tightly with checks and balances. Qin: abolish enfeoffment, run the commandery-county system; local officials are centrally appointed "rotating officials" with fixed terms, transferable, not hereditary, the center swaps them at will.\n\nIn one line: Persia handed the localities to "local dynasties" and tried to watch them; Qin handed the localities to "temps sent by the center" and swapped them out at will.\n\nTwo roads, two risks. My system is flexible and respects the locality, but the cost is that I may drift away, may become that very Bessus, and in fact Persia\'s own system fell at last to Alexander around 330 BCE, after about two hundred years. Qin\'s system gives far stronger central control, but the cost is high administrative load and heavy dependence on the center\'s competence, and in fact Qin fell within two generations of unifying (only about fifteen years). Both roads, in the end, failed to live forever, only the manner of death differed, and those are both the other side of that story.\n\n(Rule 0: do not rush to say which road is more civilized, which more tyrannical. Two roads, each answering its own situation, each with its wisdom and its fatal weakness.)\n\nYou have heard only my side, the governor caught in the middle. The founding king Cyrus, high above, would tell this empire as a "marvel of tolerance"; the ordinary Jew "sent home" would, from the very bottom, tell a wholly different story. Run it again through another lens, and see whether the judgment you made in those thirty seconds still holds.',
      },
      deliverGoal: 'N11 close/meta + §8 中国桥 (mediator 侧深注) — 把对照交给你 + 波斯靠 satrap 治理同时代中国春秋晚期走向战国也啃怎么管一大片地 + 两百多年后秦截然相反答案 + 对照一 satrap vs 郡县 (波斯=世袭半自治权力极大本地小王+分权盯住 / 秦=废分封行郡县中央任免有任期可调动不世袭流官想换就换) + 一句话 (波斯交本地世家盯住/秦交中央临时工随时换) + 两路两险 (波斯灵活尊重地方代价离心可能就是 Bessus / 秦中央控制强代价行政成本高依赖中央能力秦很快二世而亡另一面) + Rule 0 括号 (别急说哪条更文明专制各有智慧死穴) + 跨视角指针 (你只听到夹中间的总督/居鲁士会讲成宽容奇迹/被放回家的犹太人从最底下讲完全不同故事/换视角再走判断站不站得住)',
      engagementHook: '波斯把地方交给「本地的世家」并想法盯住；同时代地球另一端，秦把地方交给「中央派来的临时工」并随时换人。两条相反的路，各有智慧，也各有死穴。换个视角再走一遍,你刚才那 30 秒下的判断，还站得住吗？',
      expectsRealAnswer: true,
    },
  ],
};

export var exileLens = {
  id: 'conquered-subject-receiving-end',
  name: 'A Freed Jewish Exile',
  nameCn: '一个被放归的犹太人',
  role: 'receiving-end',
  perspectiveTag: 'fate-decided-by-empire',
  icon: '🕯️',
  description: {
    cn: '公元前 6 世纪、被掳到巴比伦、又被居鲁士放回家的一个普通犹太人。合成桥接人物，身份写实,不给名字，因为帝国的史书不会为一个普通被掳者留名，而这恰恰是问题本身。他的祖辈在故乡犹大被新巴比伦征服、第一圣殿被毁后，被掳到巴比伦（史称「巴比伦之囚」）。他在异乡的河边长大，听老人讲一座他从没见过的城,耶路撒冷。然后，前 539 年，巴比伦换了主人，新王居鲁士下令：愿意回去的，可以回去，还可以重建你们的圣殿。这一遍让你从一个被大帝国攥在手心里的小人物的位置，亲身体会「宽容统治」这个大词,对帝国是治理术，对他是命运。',
    en: 'An ordinary Jew of the 6th century BCE, carried off to Babylon and sent home by Cyrus. A bridging character with a real role, given no name, because an empire\'s records do not save the name of an ordinary captive, and that, exactly, is part of the problem. His forebears were carried to Babylon after the Neo-Babylonians conquered their homeland Judah and destroyed the First Temple (the "Babylonian Exile"). He grew up by a river in a foreign land, hearing the old people describe a city he had never seen, Jerusalem. Then, in 539 BCE, Babylon changed masters, and the new king Cyrus decreed: anyone who wishes to go home may go home, and may rebuild your Temple. This pass puts you in the place of one small person held in the palm of a great empire, to feel the big word "tolerant rule," for the empire a technique of government, for him destiny.',
  },
  storyboard: [
    {
      id: 'per-exile-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我这一生最大的事，是别人替我决定的。\n\n我是一个犹太人，住在巴比伦城外的河边。但我不是巴比伦人,我是被掳来的人的后代。我从没见过我真正的故乡，一座叫耶路撒冷（Jerusalem）的城。它只活在老人的故事里。\n\n我没有名字给你。\n\n（说一句实话：帝国的史书，从不会为一个普通的被掳者留下名字。我是一个合成的桥接人物，身份写实,可这「没名字」本身，恰恰就是这一遍要让你看见的问题。一个大帝国的「宽容」，落到一个具体的、连名字都没留下的小人物身上，到底是什么感觉？）\n\n这一遍，你站在最底下、最没有发言权的这一格。你头上的王换来换去,巴比伦的王、波斯的王，没有一个问过我想要什么。可有一天，一道从王那里下来的令，会突然把我这辈子的路，整个改掉。',
        en: 'The greatest thing in my life was decided for me by someone else.\n\nI am a Jew, living by a river outside the city of Babylon. But I am not a Babylonian. I am the descendant of people carried off. I have never seen my true homeland, a city called Jerusalem. It lives only in the old people\'s stories.\n\nI have no name to give you.\n\n(One honest note: an empire\'s records never leave a name for an ordinary captive. I am a bridging character with a real role, yet this "no name" itself is exactly the problem this pass wants you to see. A great empire\'s "tolerance," landing on one particular small person whose very name was never kept, what does it actually feel like?)\n\nThis pass, you stand in the lowest, most voiceless square. The kings above you change and change, the king of Babylon, the king of Persia, and not one of them ever asked what I wanted. Yet one day, a single order coming down from a king will suddenly change the whole road of my life.',
      },
      deliverGoal: 'N1 hook — 我这一生最大的事别人替我决定 + 犹太人住巴比伦城外河边/不是巴比伦人是被掳者后代/从没见过故乡耶路撒冷只活在老人故事里 + 没名字 + anti-fab 括号 (史书不为普通被掳者留名/合成桥接人物身份写实/「没名字」本身就是问题/大帝国宽容落到连名字都没留下的小人物什么感觉) + 这一遍最底下最没发言权 + 王换来换去没人问我想要什么 + 有一天一道令会整个改掉我的路',
      engagementHook: '我这一生最大的事，是别人替我决定的,连我的名字，史书都没留下。一个大帝国说它「宽容」，可落到一个连名字都没有的小人物身上，那到底是什么感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-exile-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们家是怎么到这条河边来的，你才懂「回家」对我有多重。\n\n几十年前，我的祖辈还住在故乡犹大（Judah）。后来，新巴比伦帝国打了过来。他们征服了犹大，毁掉了我们最神圣的地方,耶路撒冷的第一圣殿（First Temple）。然后，他们把一大批人,包括我的祖辈,整批整批地掳到了巴比伦。\n\n这件事，我们世世代代记着，叫「巴比伦之囚」。\n\n我就出生在这之后。我在巴比伦的河边长大，干活、过日子。说起来，巴比伦也不算苦,日子能过。可是每到夜里，老人会聚在一起，讲耶路撒冷:讲那座城的样子，讲那座被毁掉的圣殿，讲我们到底是从哪里来的。\n\n你品一品这种感觉:我有一个故乡，却从没见过它。我属于一座城，可那座城，对我只是一个故事、一个传说。\n\n我心里一直有个说不出口的念头：我这辈子，回得去吗？',
        en: 'First let me tell you how my family came to this riverside, so you understand how heavy "going home" is for me.\n\nDecades ago, my forebears still lived in our homeland Judah. Then the Neo-Babylonian Empire came. They conquered Judah and destroyed our most sacred place, the First Temple in Jerusalem. Then they carried a great mass of people, my forebears among them, off to Babylon, group after group.\n\nThis we have remembered for generation after generation: the Babylonian Exile.\n\nI was born after it. I grew up by a river in Babylon, working, living. Truth be told, Babylon was not exactly bitter; life could be lived. But every night, the old people would gather and speak of Jerusalem: what the city looked like, the destroyed Temple, where we truly came from.\n\nWeigh this feeling: I have a homeland I have never seen. I belong to a city that is, to me, only a story, a legend.\n\nA thought I could never speak aloud was always in my heart: in this life of mine, can I ever go back?',
      },
      deliverGoal: 'N2 setup — 我们家怎么到河边/「回家」多重 + 几十年前祖辈住故乡犹大 + 新巴比伦帝国打来征服犹大毁第一圣殿/整批掳到巴比伦 + 世代记着叫「巴比伦之囚」+ 我出生在这之后河边长大/巴比伦不算苦日子能过/但每夜老人聚讲耶路撒冷 (城的样子/被毁的圣殿/我们从哪来) + 「我有故乡却从没见过/属于一座城那城对我只是传说」+ 说不出口的念头「我这辈子回得去吗」',
      engagementHook: '我有一个故乡，却从没见过它,它对我只是老人口中的一个传说。你心里有没有一个「属于你、你却从没真正到过」的地方？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-exile-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得让你看清，在这套大帝国的体系里，我到底是什么位置,这样你才懂，后来那道令为什么那么不寻常。\n\n这是一个极端多民族、多语言、多信仰的帝国，先是巴比伦，后是波斯。在这套金字塔里：顶端是王和波斯贵族；中间是总督、各地的旧贵族、祭司、商人；而最底下，是我们这些各族的农民、工匠、被强迁来的劳力。\n\n我，连同我们整个被掳来的族群，就压在这座金字塔的最底下。\n\n在掌权者眼里，我们是什么？是劳力，是税源，是账本上一个可以调动、可以安置、可以随便搬来搬去的数字。我们拜什么神、想不想家、这辈子还回不回得去,这些，从来不在他们要操心的事情里。\n\n这就是被征服者的处境：你不是一个「会想要什么」的人，你是帝国棋盘上一颗任人摆布的棋子。\n\n请你先牢牢记住这个位置。正因为我站得这么低、这么没人在乎，接下来发生的事，才显得那么不可思议。',
        en: 'I must make clear what position I hold in this great imperial system, so you understand why the order that came later was so unusual.\n\nThis was an extremely multi-ethnic, multi-lingual, multi-faith empire, first Babylon, then Persia. In this pyramid: at the top, the king and the Persian nobility; in the middle, governors, local old nobles, priests, merchants; and at the very bottom, us, the farmers, craftworkers, and forcibly resettled laborers of many peoples.\n\nI, together with our whole carried-off people, was pressed at the very bottom of this pyramid.\n\nIn the eyes of those in power, what were we? Labor. A source of tax. A number in a ledger, to be moved, settled, shifted about at will. What gods we worshipped, whether we longed for home, whether we could ever return in this life, these were never among the things they had to care about.\n\nThis is the condition of the conquered: you are not a person who "could want something." You are a piece on the empire\'s board, moved about by others.\n\nHold this position firmly in mind. Precisely because I stood so low and so uncared-for, what happened next seems all the more unthinkable.',
      },
      deliverGoal: 'N3 setup — 我在大帝国体系里什么位置/后来那道令多不寻常 + 极端多民族多语言多信仰帝国 (先巴比伦后波斯) + 金字塔 (顶端王和波斯贵族/中间总督旧贵族祭司商人/最底各族农民工匠被强迁劳力) + 我连同被掳族群压在最底 + 掌权者眼里我们是劳力税源账本上可调动安置搬来搬去的数字/拜什么神想不想家回不回得去从不在他们操心范围 + 被征服者处境「不是会想要什么的人是棋盘上任人摆布的棋子」+ 牢记这低位置才显得后来不可思议',
      engagementHook: '在掌权者眼里，我不是一个「会想要什么」的人,我是账本上一个可以随便搬来搬去的数字，一颗任人摆布的棋子。当一个人被彻底当成「数字」，他最先失去的是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-exile-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n公元前 539 年。一个消息，像风一样吹遍巴比伦的大街小巷：巴比伦，换主人了。\n\n一个叫居鲁士（Cyrus）的波斯王，几乎兵不血刃就进了城。\n\n一开始，你没太当回事。对你这样的人来说，城头的王是谁，有什么区别？巴比伦的王把你压在最底下，换个波斯的王，不也一样把你压在最底下？\n\n可接着，一道令传下来了,一道你这辈子做梦都不敢想的令。\n\n这位新王居鲁士下诏：被掳来的犹太人，愿意回去的，可以回去。不但可以回去,还可以回耶路撒冷，重建你们的圣殿。\n\n你站在河边，听见这句话，整个人愣住了。\n\n那座你只在老人故事里听过、从没亲眼见过的城,那座属于你、你却从没到过的城,你，居然可以回去了？\n\n你心里第一反应是什么？是狂喜，还是,一个你自己都不敢相信的、小心翼翼的疑问：这是真的吗？为什么？一个外族的王，凭什么对我们这么好？',
        en: 'Now you are me.\n\n539 BCE. A piece of news blew through every street of Babylon like wind: Babylon has changed masters.\n\nA Persian king named Cyrus had entered the city with almost no bloodshed.\n\nAt first you did not make much of it. To a person like you, what does it matter who sits on the city wall as king? The king of Babylon held you at the very bottom; swap in a Persian king, and will he not also hold you at the very bottom?\n\nBut then an order came down, an order you would never, in your wildest dreams, have dared to imagine.\n\nThe new king Cyrus decreed: the carried-off Jews who wish to go home may go home. And not only go home, you may return to Jerusalem and rebuild your Temple.\n\nYou stand by the river, hear these words, and freeze.\n\nThat city you had only heard of in the old people\'s stories, never seen with your own eyes, that city that belonged to you and that you had never reached, you, of all people, may go back?\n\nWhat is your first reaction? Wild joy, or a careful, half-disbelieving question you hardly dare ask yourself: is this real? Why? By what right is a foreign king this good to us?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 前539消息吹遍巴比伦换主人 + 居鲁士兵不血刃进城 + 一开始没当回事 (城头王是谁有什么区别/巴比伦王压我最底换波斯王不也一样) + 一道做梦不敢想的令传下: 居鲁士下诏被掳犹太人愿回去可回去/还可回耶路撒冷重建圣殿 + 站河边听见愣住 (只在故事听过从没见过/属于你却从没到过的城你居然可以回去) + 第一反应: 狂喜还是小心翼翼半信半疑「这是真的吗为什么外族的王凭什么对我们这么好」',
      engagementHook: '一道令传下来:你可以回家了，还可以重建你们的圣殿。那座你只在故事里听过、从没见过的城,你居然可以回去了。你的第一反应，是狂喜，还是一个不敢相信的疑问:这是真的吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-exile-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把那道改变我命运的令，从最权威的来源讲给你听。\n\n这道令，被记进了我们犹太人自己的圣典。《以斯拉记》（Ezra）里写着：居鲁士下诏，准被掳的犹太人返回耶路撒冷、重建圣殿，连当年被巴比伦抢走的圣殿器物，都归还给我们。\n\n你要懂得这件事的分量。在我们犹太人的记忆里，居鲁士不是一个普通的外族君主,他被尊为上帝拣选的解放者，是少数被称作「受膏者」的外邦人。一个不信我们神的波斯王，在我们最神圣的经书里，留下了这样一张面孔。\n\n（这里要提醒你一件 AP 老师最看重的事：这是从我们犹太人自己的记载里看到的居鲁士。所以他被写成解放者，是很自然的,这是「我们」对救我们的人的记忆。同一个居鲁士，从波斯官方看、从希腊人看，会是另外两张完全不同的脸。会问「这是谁在讲、为什么这么讲」，是读历史最要紧的功夫。）\n\n但对此刻站在河边的我来说，这些都太远了。我心里只有一件具体的事在翻腾:我，真的可以回家了。',
        en: 'Let me tell you the order that changed my fate, from the most authoritative source.\n\nThis order was written into our own Jewish scripture. The Book of Ezra records: Cyrus decreed that the exiled Jews might return to Jerusalem and rebuild the Temple, and even the Temple vessels that Babylon had taken were returned to us.\n\nYou must grasp the weight of this. In our Jewish memory, Cyrus is not an ordinary foreign king. He is honored as a liberator chosen by God, one of the very few foreigners called "anointed." A Persian king who did not believe in our God left, in our most sacred book, a face like this.\n\n(Here a reminder of the thing AP teachers prize most: this is Cyrus as seen in our own Jewish record. So it is natural he is written as a liberator; this is "our" memory of the one who saved us. The same Cyrus, seen from the Persian official side, or from the Greeks, would be two wholly different faces. To ask "who is telling this, and why this way" is the most important skill in reading history.)\n\nBut to me, standing by the river in this moment, all that is too far off. Only one concrete thing churns in my heart: I, truly, may go home.',
      },
      deliverGoal: 'N5 story (primary source §5B) — 改变命运的令从最权威来源讲 + 记进犹太圣典《以斯拉记》(居鲁士下诏准被掳犹太人返耶路撒冷重建圣殿/被抢的圣殿器物归还) + 分量: 犹太记忆里居鲁士不是普通外族君主被尊为上帝拣选的解放者少数称「受膏者」的外邦人/不信我们神的波斯王在最神圣经书留这样一张面孔 + anti-fab/POV 括号 (AP 老师最看重: 这是犹太自己记载里的居鲁士被写成解放者很自然是「我们」对救我们的人的记忆/同一居鲁士波斯官方看希腊人看是另两张脸/会问谁在讲为什么这么讲是读史最要紧功夫) + 对站河边的我这些太远心里只翻腾一件具体的事「我真的可以回家了」',
      engagementHook: '在我们犹太人自己的圣经里，居鲁士被写成上帝拣选的解放者。可同一个居鲁士，从波斯官方、从希腊人那里看，会是另外两张完全不同的脸。读到关于一个人的「事实」时，你会先问一句「这是谁在讲、为什么这么讲」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-exile-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '于是，我上路了。\n\n我收拾起全部家当，加入返乡的人群，往西，朝着那座我从没见过的城走。\n\n我们走的，是帝国的大路。\n\n（这里 lens 让你顺着我的脚，去感受这条路,史料不会逐字记下我走在路上每一刻心里想什么，但坐在我这个位置，你大概能体会。）\n\n这条路，就是波斯帝国把天下连成一片的那套干道。后来最有名的一段，叫 Royal Road（御道），从 Susa 一直通到 Sardis，约 2500 公里，沿途有驿站换马。王的加急消息，据说约一周就能跑完全程。\n\n我忽然想到一件很奇怪的事:同样一条路，王用它，是让一道命令、一支军队，飞快地扑向帝国的边疆,那是权力的神经。而我用它，是用我自己两条腿，走几个月，回一个家。\n\n同一条路，载着王的权力，也载着我的命运。王走得飞快，我走得很慢。可这一次，难得地，这条路，是把我往「家」的方向带的。',
        en: 'And so, I set out.\n\nI packed up all I had, joined the crowd returning home, and walked west, toward the city I had never seen.\n\nWe walked the empire\'s great road.\n\n(Here the pass lets you follow my feet, to feel this road; the record does not write down, word for word, what was in my mind each moment on the way, but sitting in my seat, you can feel it.)\n\nThis road was the trunk-road system by which the Persian Empire knit the world into one. Its most famous stretch later was the Royal Road, running from Susa all the way to Sardis, about 2,500 km, with relay stations to change horses. The king\'s urgent message, they say, could cross the whole road in about a week.\n\nA strange thing struck me suddenly: the very same road, the king uses it to fling an order, an army, swiftly toward the empire\'s frontier, that is the nerve of power. And I use it, on my own two legs, walking for months, to return to a home.\n\nThe same road carries the king\'s power, and carries my fate. The king moves fast; I move slowly. But this once, rarely, this road is taking me in the direction of "home."',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 御道从被放归者角度: 上路收拾家当加入返乡人群往西朝从没见过的城走/走帝国的大路 + anti-fab 括号 (lens 让你顺我的脚感受路/史料不逐字记我路上每刻想什么) + Royal Road Susa→Sardis 约2500公里驿站换马王加急约一周 + 忽然想到奇怪的事: 同一条路王用它让命令军队飞快扑向边疆=权力的神经/我用它两条腿走几个月回一个家 + 「同一条路载王的权力也载我的命运/王走得飞快我走得很慢/可这一次这条路把我往家的方向带」。只碰御道从被放归者角度不揭另两视角',
      engagementHook: '同一条御道,王用它，让一道命令飞快扑向帝国边疆，那是权力的神经；我用它，用自己两条腿走几个月，回一个家。同一条路，载着王的权力，也载着我的命运。',
      expectsRealAnswer: false,
    },
    {
      id: 'per-exile-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可我得诚实告诉你，这趟「回家」，不是一个干干净净的好故事。\n\n我朝着耶路撒冷走，心里又热又虚。热的是终于能回去了，虚的是,我要回去的，到底是个什么样的地方？\n\n那座城，几十年前就被毁了。我回去要面对的，不是故事里那座光辉的圣殿，是一片荒废的土地、坍塌的城墙，和一堆要从零开始重砌的废墟。\n\n更难的是人。这几十年，我们被掳走了，可故乡的地没空着,有别的人留了下来，在那里生活。我这个「从巴比伦回来的人」，对他们来说，是不是个突然回来要分地、要主张身份的外人？\n\n还有一件事，你可能想不到:并不是所有人都选择回去。\n\n很多犹太人，在巴比伦已经住了几代，有了营生、有了根。对他们来说，巴比伦才是「家」。耶路撒冷？那是个遥远的、不确定的传说。后来，留在巴比伦的犹太人，形成了一个延续好几百年的重要社群。\n\n所以「放归」这件事，落到每个人头上，根本不是同一个故事。',
        en: 'But I have to tell you honestly: this "going home" is not a clean, happy story.\n\nAs I walked toward Jerusalem, my heart was both hot and hollow. Hot, because I could finally return; hollow, because, what kind of place was I returning to?\n\nThat city had been destroyed decades ago. What I would face on return was not the glorious Temple of the stories, but a wasted land, fallen walls, and a heap of rubble to be rebuilt from nothing.\n\nHarder still were the people. Over these decades we had been carried off, but the homeland\'s land did not lie empty; others had stayed and lived there. To them, was I, "the one back from Babylon," not an outsider suddenly returning to claim land and assert an identity?\n\nAnd one thing you might not expect: not everyone chose to go back.\n\nMany Jews had lived in Babylon for generations, had a livelihood, had roots. To them, Babylon was "home." Jerusalem? That was a distant, uncertain legend. Later, the Jews who stayed in Babylon formed an important community that lasted for centuries.\n\nSo this thing called "being sent home," landing on each person, was not the same story at all.',
      },
      deliverGoal: 'N7 story (诚实/复杂面) — 诚实「回家不是干净的好故事」+ 朝耶路撒冷走又热又虚 (热: 终于能回 / 虚: 要回去的是什么地方) + 城几十年前被毁/要面对的不是光辉圣殿是荒废土地坍塌城墙从零重砌的废墟 + 更难的是人: 几十年被掳走但故乡地没空着有别人留下生活/我这「从巴比伦回来的人」对他们是不是突然回来分地主张身份的外人 + 想不到的: 不是所有人选择回去 (很多犹太人巴比伦住几代有营生有根/巴比伦才是家/耶路撒冷遥远不确定传说/留下的形成延续几百年重要社群) + 「放归落到每个人头上根本不是同一个故事」',
      engagementHook: '我要回的那座城，几十年前就毁了,等着我的是荒废的土地和一堆废墟。而且，并不是所有人都选择回去。同样一道「你可以回家了」的令，落到每个人头上，为什么会是完全不同的故事？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-exile-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在，我要把心里那个最别扭、最说不出口的疑问，跟你摊开。\n\n我被「放回家」了。我应该感恩，对吧？事实上，我们世代都感恩居鲁士。\n\n可是夜深的时候，一个念头会冒出来，让我自己都害怕:这件天大的好事,我回不回得了家、回去能不能重建圣殿,从头到尾，是一个外族的王，一句话决定的。\n\n他想放，我就能回。他要是不想放呢？我就只能继续在这条河边，待一辈子。\n\n你看出这里面那根刺了吗？被掳走，是别人决定的；被放回，也是别人决定的。我的命运，从来没有一刻，握在我自己手里。\n\n「宽容」这两个字，对那位高高在上的王来说，是一种聪明的统治术,放归一群感恩的人，比硬压着一群恨他的人，省心得多。可对我来说，它是我整个人生,是我能不能见到那座只在故事里的城。\n\n同一件事，对他是「治理的技术」，对我是「全部的命运」。\n\n所以我想问你一个真问题:被一个外族征服者「放回家」,这到底是恩典，还是只是换了一种形式的「你的命，由别人说了算」？',
        en: 'Now I will lay open the most awkward, most unspeakable question in my heart.\n\nI was "sent home." I ought to be grateful, right? In fact, for generations we have been grateful to Cyrus.\n\nBut deep in the night, a thought rises that frightens even me: this enormous good thing, whether I can go home, whether I can rebuild the Temple, was, from start to finish, decided by one word from a foreign king.\n\nIf he wills it, I may return. And if he had not willed it? Then I could only stay by this river, all my life.\n\nDo you see the thorn in this? Being carried off was decided by others; being sent back was also decided by others. My fate was never, not for one moment, held in my own hand.\n\nThe word "tolerance," to that king high above, is a clever technique of rule, to send home a grateful people is far less trouble than to press down a people that hates him. But to me, it is my whole life, whether I get to see that city that exists only in stories.\n\nThe same thing: to him a "technique of government," to me "my entire fate."\n\nSo I want to ask you a real question: to be "sent home" by a foreign conqueror, is that grace, or just another form of "your fate is decided by someone else"?',
      },
      deliverGoal: 'N8 story (核心两难/最别扭疑问) — 摊开最说不出口的疑问 + 我被放回家应该感恩 (世代感恩居鲁士) + 夜深念头让自己害怕: 这天大好事回不回得家能不能重建圣殿从头到尾是外族王一句话决定 + 他想放我就能回/不想放就继续这河边待一辈子 + 那根刺: 被掳走别人决定被放回也别人决定/我命运从没一刻握自己手里 + 宽容对高高在上的王是聪明统治术 (放归感恩的人比硬压恨他的人省心) 对我是整个人生 (能不能见那座只在故事里的城) + 「同一件事对他治理技术对我全部命运」+ 真问题: 被外族征服者放回家是恩典还是换种形式的你的命别人说了算',
      engagementHook: '我被「放回家」，世代都感恩。可夜深时一个念头让我害怕:回不回得了家，从头到尾是一个外族的王一句话决定的，我的命运从没一刻在我自己手里。被一个征服者「放回家」,这是恩典，还是只是换了一种「你的命由别人说了算」？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-exile-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，把我这个被放归的小人物，放进一张更大的地图里,一张我这辈子根本看不到的地图。\n\n就在波斯靠「宽容」统治我们的同一个时代，地球另一端的中国，正从春秋晚期走向战国，几十个国家都在啃同一道题：怎么把一大片地和很多不同的人，捏成一个有效的政权？\n\n约三百年后，那边的秦统一六国（前 221），给出了一个跟波斯截然相反的答案。\n\n波斯（我头上这套）的逻辑是：你保留你的神、你的法、你的家，只要你认我这个王。所以我能回耶路撒冷，能重建我的圣殿，能继续做一个犹太人。\n\n秦的逻辑反过来:它要「书同文」,统一文字、统一度量衡，用「让大家变得更一样」来巩固统一。它要的不是民族拼盘，是熔炉。\n\n换到我的位置想一想:如果我活在秦那套逻辑下，我还保得住我的圣殿、我的神、我「是个犹太人」吗？\n\n（Rule 0:这不是说波斯的「拼盘」更文明、秦的「熔炉」更专制。两条路各有各的智慧，也各有各的代价,波斯的宽容换来灵活，却埋下离心；秦的整合换来强控制，却极度依赖中央能力。最后两条路都没能长生，只是死法不同。\n\n同一道难题，人类走出了两条很不一样的路，而像我这样的小人物，恰好活在其中一条上。今天的多民族国家，几乎都还在这两条路之间找平衡,既要大家认同一个共同体（秦的一面），又要容得下各自的根（波斯的一面）。）',
        en: 'Let me step back and place my small, sent-home self into a larger map, one I could never have seen in my whole life.\n\nIn the very age Persia ruled us conquered peoples through "tolerance," on the other side of the earth, China was moving from the late Spring and Autumn into the Warring States, dozens of states all gnawing the same question: how do you press a vast land and many different people into one working government?\n\nAbout three centuries later, Qin over there unified the warring states (221 BCE) and gave an answer the very opposite of Persia\'s. I hand it to you simply, for you to weigh what these two roads mean for a small person like me.\n\nPersia\'s logic (the one above my head): keep your god, your law, your home, as long as you accept me as king. So I can return to Jerusalem, rebuild my Temple, go on being a Jew.\n\nQin\'s logic, the reverse: it wanted "one script for all," standardized writing, standardized weights and measures, securing unity by making everyone more alike. It wanted not a mosaic of peoples but a melting pot.\n\nPut yourself in my place and think: had I lived under Qin\'s logic, could I have kept my Temple, my God, the fact that "I am a Jew"?\n\n(Rule 0: this is not to say Persia\'s "mosaic" was more civilized, or Qin\'s "melting pot" more tyrannical. Each road had its own wisdom and its own cost: Persia\'s tolerance bought flexibility but planted drift; Qin\'s integration bought strong control but leaned heavily on the center\'s competence. In the end both roads failed to live forever, only the manner of death differed.\n\nI only want you to see that the same hard question drove humanity down two very different roads, and a small person like me happened to live on one of them. Almost every multi-ethnic country today is still balancing between these two roads: wanting everyone to belong to one shared community (Qin\'s side), while still making room for each one\'s roots (Persia\'s side).)',
      },
      deliverGoal: 'N9 zoom-out + §8 中国桥 (receiving-end 侧深注) — 把被放归的小人物放进更大地图 + 波斯靠宽容统治被征服者同时代中国春秋晚期走向战国/几十国啃同一道题 + 两百多年后秦截然相反答案/简单交给你掂量对小人物意味什么 + 对照三 宗教宽容 vs 书同文: 波斯逻辑 (保留你的神法家只要认我这个王/所以我能回耶路撒冷重建圣殿继续做犹太人) / 秦逻辑反过来 (书同文统一文字度量衡/让大家更一样巩固统一/不要拼盘要熔炉) + 换到我位置想: 活在秦那套我还能保住圣殿我的神我是犹太人这件事吗 + Rule 0 括号 (不是说拼盘更文明熔炉更专制/各有智慧各有代价: 波斯宽容换灵活埋离心/秦整合换强控制绷太紧/同一难题两条路我这样小人物恰活在其中一条上)',
      engagementHook: '波斯说「保留你的神、你的法，只要你认我这个王」,所以我能回去重建我的圣殿、继续做一个犹太人。可如果我活在「让大家变成同一种人」的另一套逻辑下，我还保得住「我是个犹太人」这件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'per-exile-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，最难评的，是居鲁士对我们的那场「放归」。两种说法都站得住，你来称。\n\n一种说法：那是真真切切的恩典。一个外族的王，没人逼他，主动放我们回家、准我们重建圣殿、归还圣殿的器物。在一个征服者通常只会劫掠、奴役、同化的时代，他选择了让我们「保住自己」。对我，对我们整个民族，这是命运的转折,没有他这道令，我这辈子见不到耶路撒冷，我们的圣殿永远是一堆废墟。世代尊他为「受膏者」，是发自内心的。\n\n另一种说法：别被「恩典」冲昏头。说到底，我回不回得了家，是一个外族的王一句话定的。今天他高兴，放我回去；可决定我命运的那只手，从来不是我自己的。「放归」再好，也没有改变那个最根本的事实,我始终是帝国棋盘上一颗任人摆布的棋子。一份「由别人施舍的自由」，还算不算真正的自由？\n\n这两边，不是「他是恩人」对「他是利用者」。是同一道令的两张脸,它真的救了我，也真的提醒我，我的命从不在我手里。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, the hardest thing to judge is Cyrus\'s "sending us home." Both views stand. You do the weighing.\n\nOne view: it was true, genuine grace. A foreign king, with no one forcing him, freely sent us home, let us rebuild the Temple, returned the Temple vessels. In an age when a conqueror would usually only loot, enslave, assimilate, he chose to let us "keep ourselves." For me, for our whole people, this was the turning of our fate. Without his order I would never in this life have seen Jerusalem, and our Temple would forever be a heap of rubble. That generations honor him as "anointed" comes from the heart.\n\nThe other view: do not let "grace" go to your head. At bottom, whether I could go home was decided by one word from a foreign king. Today he is pleased, and sends me back; but the hand that decided my fate was never my own. However good "being sent home" was, it did not change the most basic fact: I was always a piece on the empire\'s board, moved about by others. A "freedom handed down by someone else", does that still count as true freedom?\n\nThese are not "he was a benefactor" against "he was an exploiter." They are two faces of the same order: it truly saved me, and it truly reminded me that my fate was never in my hand.\n\nThis is the hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 居鲁士的放归对我是真恩典还是换种形式的别人施舍 / 一种说法 (真真切切恩典/外族王没人逼主动放回准重建归还器物/征服者通常只劫掠奴役同化时代他让我们保住自己/对我对整个民族命运转折/没他这道令见不到耶路撒冷圣殿永远废墟/世代尊受膏者发自内心) / 另一种说法 (别被恩典冲昏/回不回家外族王一句话定/决定命运的手从不是我自己/放归再好没改变根本事实我始终是棋子/别人施舍的自由还算真自由吗) / 同一道令两张脸救了我也提醒我命从不在我手里 / neutral school name (AP 老师) / 想30秒两边都站得住',
      engagementHook: '居鲁士放我们回家,是真真切切的恩典，还是换了一种形式的「你的命由别人施舍」？这道令真的救了我，也真的提醒我:我的命，从不在我自己手里。一份别人施舍的自由，还算不算真正的自由？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'per-exile-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,一个没名字的被掳者，一座只在故事里的城，一道外族王下的令，一条把我往家带的路，你会怎么评价这样一段命运？\n\n它让我得以回家、重建圣殿、继续做一个犹太人,这是真的。可它从头到尾，都是别人替我决定的,这也是真的。这两件事，是同一道令。你怎么称？\n\n但先记住：你这一遍，听的只是最底下那个被放归的小人物。\n\n那个下令放我回家的开国之王居鲁士，会把这同一件事讲成另一个样子,在他口中，这是他那套「宽容统治」的得意之笔，是聪明的征服术。而那个替王在几千里外收税、征兵的总督（satrap），又会从帝国的关节上，讲一个我完全想不到的故事,他操心的，是这套宽容帝国到底好不好管、他自己离心还是效忠。\n\n你还没听到他们的声音。换个视角再走一遍，你刚才那 30 秒下的判断，还站得住吗？\n\n最后，留一个问题给你，带回你自己的生活:今天，会不会也有一些「天大的好事」,是别人替你决定的，你只能感恩地接住？那种「连好事都由别人说了算」的滋味，你尝过吗？',
        en: 'Having walked my whole life, a nameless captive, a city that lived only in stories, an order issued by a foreign king, a road that carried me toward home, how would you judge a fate like this?\n\nIt let me go home, rebuild the Temple, go on being a Jew, that is true. Yet from start to finish it was all decided for me by someone else, that is also true. These two things are the same order. How do you weigh it?\n\nBut first, remember: this pass, you heard only the small, sent-home person at the very bottom.\n\nThe founding king Cyrus, who issued the order that sent me home, would tell this same thing as something else; in his mouth it is the proud stroke of his "tolerant rule," a clever art of conquest. And the satrap who collected the king\'s taxes and raised his troops thousands of miles away would tell, from the joint of the empire, a story I could never imagine; what he worried over was whether this tolerant empire was actually easy to govern, whether he himself drifted away or stayed loyal.\n\nYou have not yet heard their voices. Run it again through another lens, and see whether the judgment you made in those thirty seconds still holds.\n\nAnd one last question to leave with you, to carry back into your own life: today, might there also be some "enormous good things" that are decided for you by someone else, and all you can do is gratefully catch them? Have you ever tasted that, when even a good thing is decided by someone else?',
      },
      deliverGoal: 'N11 close/meta — 评价命运 (没名字被掳者/只在故事里的城/外族王下的令/把我往家带的路 → 得以回家重建圣殿继续做犹太人是真 vs 从头到尾别人替我决定也是真/同一道令怎么称) + MANDATORY 跨视角指针: ① 你只听到最底下被放归的小人物 ② 居鲁士会讲成另一样 (宽容统治得意之笔聪明征服术) + satrap 会从帝国关节讲我想不到的故事 (操心宽容帝国好不好管自己离心还是效忠) ③ 你还没听到他们声音换视角再走判断站不站得住 + transfer「今天会不会也有天大好事是别人替你决定你只能感恩接住/那种连好事都由别人说了算的滋味你尝过吗」',
      engagementHook: '你这一遍，只听到了最底下那个被放归的小人物。那个下令放我回家的居鲁士、那个替王收税的总督，会把这同一件事讲成完全不同的故事。换个视角再走一遍,你刚才的判断站得住吗？还有,今天会不会也有一些「天大的好事」，是别人替你决定的，你只能感恩地接住？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'cyrus-actor':                        cyrusLens,
  'satrap-mediator':                    satrapLens,
  'conquered-subject-receiving-end':    exileLens,
};

// defaultLens 取自 narrative frontmatter: conquered-subject-receiving-end
// (被征服者能动性 + 「大帝国宽容落到一个无名小人物身上是什么感觉」= load-bearing pedagogy;
//  接前课 ancient-israel)
export var defaultLens = 'conquered-subject-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'persian-empire-550bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'cyrus-actor': 30, 'satrap-mediator': 30, 'conquered-subject-receiving-end': 32 },
  authoredBy: 'Anthropic Claude Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 御道上的一道消息 Royal Road courier (三视角各触一次不点破: 居鲁士发令跑遍帝国 / satrap 收信既授权也监视 / 被放归者沿御道走回家)',
    'defaultLens: conquered-subject-receiving-end — 被征服者能动性 + 无名小人物视角 (AP DBQ 必考) + 接前课 ancient-israel',
    'expectsRealAnswer: ONLY N10 (synthesis reflection) + N11 (close) per lens = true (2 per lens, 6 total)',
    'anti-fab: Cyrus Cylinder「人权宣言」标签 narrative 已清坑 (本 storyboard 未把 Cylinder 排成人权文件); satrap + 被放归犹太人为合成桥接人物用括号短句标 (史料不为普通人留名/位置写实); 御道驿传是大流士才完整建已在居鲁士 lens N6 透明标注; 希罗多德「风雪雨夜」句标为希腊视角',
    '§8 中国桥 (春秋战国/秦/郡县/流官/书同文/熔炉拼盘) 注入 receiving-end N9+N11 与 mediator N10+N11 的 synthesis/zoom 节点; Rule 0 双向中性 (波斯宽容拼盘 vs 秦整合熔炉互不褒贬各点代价)',
    'cultural ban: 波斯/古近东术语 (Achaemenid/satrap/daric/Royal Road/Ahura Mazda/Behistun/Persepolis/Pasargadae/shahanshah/Aramaic) 全程, 中国词仅在 §8 桥接节点',
    '4-agent review done (Dr. Park / 赵老师 / Maria); P1 fixes applied: ① cyrus-n5 居鲁士个人宗教归属软化为王室层面 (争议点不写成定论) ② cyrus-n4 加 POV 来源分层括号 (放归令主要靠《以斯拉记》/圆柱讲 Marduk 没单独提犹太人) ③ satrap-n8「外patch」残词改「外部的敌人」 ④ 时间锚点统一: 三 storyboard 节点 + narrative §8「两百多年后/约一百多年后」全改「约三百年后 秦统一六国(前221)」(秦统一距居鲁士约330年) ⑤ 秦「二世而亡」补齐波斯亡国对称项 (satrap-n11 + exile-n9 各加波斯约前330亡于亚历山大享国约两百年, 两条路都没长生只是死法不同) ⑥ exile-n9 Rule 0「绷得太紧」软化为机制性中性描述 (极度依赖中央能力) + 加中性华裔落点 (今天多民族国家在两条路间找平衡)',
    '御道 anti-fab 一致性判断: cyrus-n6 显式标注御道驿传是大流士才完整建 (居鲁士在世时尚未建成, 必须清坑); satrap-n6 与 exile-n6 时间设定均在大流士之后, 御道已是既成事实, 无需重复清坑 — 三 lens 待遇不一致是时间设定使然, 非漏标',
  ],
};
