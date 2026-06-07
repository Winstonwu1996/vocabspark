// ─── Crusades 1099 Lens-based Storyboard ──────────────────────
//
// Story-First Pedagogy v2 — Lens 模型（用户 2026-05-02 sign off）
// 见 docs/STORY_FIRST_PEDAGOGY.md（待 v2 update）
//
// 设计原则（用户 2026-05-02 拍板）：
//   - 1 个 Topic = 1 段历史事件 + N 个 lens（每 lens = 1 个角色视角）
//   - 用户选 1 个 lens 进入 → 一致第一人称跑完
//   - 不同 lens 看同一事件——基础事实相同——情绪 + 角度 + 局限性不同
//   - replay 价值：用户跑完 1 lens 后可以选另一个 lens 重学（DBQ 训练）
//
// MVP scope（drafting）：3 lens（Latin Crusader Roger + Byzantine + Islamic）
// 当前文件只交付 lens 1（Roger de Toulouse）——其余 2 lens 后续补
//
// 内容质量铁律：
//   - "明朝那些事儿"密度：vivid scenes + concrete dates + sensory detail
//   - anti-orientalism 硬规：Saracens 不是"野蛮"也不是"高贵蛮族"
//   - 直面屠杀：1099/07/15 后 3 天屠杀必须 from inside（理解 medieval mind）
//   - 不投射现代政治：narrative kernel §6 + §9 已经禁止
//   - 14 词文化禁用表（玉玺/龙袍/翰林/朕/卿/江山/凤冠/霞帔/一炷香/科甲/状元/榜眼/探花/金銮殿）
//   - Latin 词保留斜体（Deus vult / indulgentia / Pax Dei）
//
// 长度约束：每节点 200-280 字（CN）/ 对应 EN 版 Lexile 800-1000
//
// ─────────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════
// LENS 1: Roger de Toulouse（虚构二线骑士 / 1095-1099 perpetrator-actor 视角）
// ═══════════════════════════════════════════════════
//
// 角色设定：
//   - 1095 年 21 岁，南法 Toulouse 地区一个小贵族家的二儿子
//   - 中世纪铁律：长子继承全部，二儿子自己想办法
//   - 跟随 Raymond IV（Toulouse 伯爵）出征 — 8000 人南法纵队
//   - 1099 年 25 岁，7/15 在耶路撒冷城墙下
//   - 他是"composite character"——所有事都来自 narrative kernel + 一手 chronicle
//
// 这个视角 是 perpetrator/actor 视角（平行于 King John 暴君视角）：
// 不浪漫化十字军，但让用户从内部感受"为信仰流血"的真实驱动力 + 实施屠杀的真实性
//
var rogerToulouseStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1095 Clermont 演说',
    content: {
      cn:
        '1095 年 11 月 27 日早上，法国中部 Clermont（克莱蒙）城外。我 21 岁，跟堂兄 Bertrand 站在一片冻硬的草地上。\n\n' +
        '人群里所有人都在哈白气——大概两千人，红衣主教、贵族、几百个像我这样的骑士，还有从附近赶来看热闹的农民。我们等的人是教皇 Urban II（乌尔班二世）——53 岁，瘦，下巴尖，那天披着深紫色斗篷站到木台上。\n\n' +
        '他讲了大概 40 分钟。东方基督徒在受苦。耶路撒冷在异教徒手里。任何参战的人，"所有的罪"一次性免（这叫 indulgentia plenaria，全免赎罪）——死在路上的直接进天国。最后一句，他喊：Deus vult——上帝意旨。\n\n' +
        '我那一刻——脑子里 4 件事一起炸：\n\n' +
        '我家长兄继承所有田产；我什么都没有。我去年打猎失手射死过一个农户的儿子——心里压了一年，告解神父也压不住。东方"打下来就是你们的"——这是我这辈子第一次听到的"出路"。我妈不喜欢我去打仗——但罪全免这一句，连她都拦不住。\n\n' +
        '我撕下外套上一块红布，缝在胸口。Bertrand 也撕了。\n\n' +
        '我是 Roger de Toulouse。接下来 8 节，你跟我走 4 年——从这片冻草地到耶路撒冷城墙下。',
      en:
        'Morning of November 27, 1095. Clermont, central France, in a meadow frozen hard by overnight cold. I was 21. My cousin Bertrand stood next to me.\n\n' +
        'Two thousand people were breathing out white steam. Cardinals (high-ranking churchmen), bishops, nobles, a few hundred knights like me, and farmers from nearby villages who had come to watch. The man we were waiting for was Pope Urban II — fifty-three years old, thin, with a sharp chin. He stepped onto a wooden platform that morning, wrapped in a dark purple cloak.\n\n' +
        'He spoke for about forty minutes. Christians in the East were suffering. Jerusalem was in the hands of unbelievers. Anyone who joined the march would receive indulgentia plenaria, a full pardon for all sins, in one stroke. Anyone who died on the road would go straight to heaven. At the end, he shouted the words that would become our battle cry: Deus vult — God wills it.\n\n' +
        'In that one moment, four things exploded in my head:\n\n' +
        'My older brother inherits all our family land; I get nothing. Last year, hunting in the forest, my arrow killed a farmer\'s son by accident — I had carried that for a year, and confession to the priest had not lifted it. "Whatever you take in the East is yours" — the first real path I had ever been offered. My mother did not want me to leave for war — but the words all sins forgiven were too heavy for her to argue with.\n\n' +
        'I tore a strip of red cloth from my coat and stitched it onto my chest. Bertrand did the same.\n\n' +
        'I am Roger de Toulouse. Over the next eight sections, you will walk four years with me — from this frozen meadow all the way to the walls of Jerusalem.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我那年 21 岁，撕下红布缝胸口的那一刻，我以为自己懂了什么是信仰——你猜 4 年后我还会这么想吗？',
    expectedLength: '240-280 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§3 出身 + §4 1096 出发',
    content: {
      cn:
        '回家路上 Bertrand 一直在算账。一匹军马 4-5 银马克；一套二手锁子甲（chain mail，铁环织成的战衣）3 个；一柄诺曼长剑加圆盾加带护鼻的头盔 2 个；3 个月干粮加路费 5 个。总共约 15 银马克——够买 1 公顷好地。\n\n' +
        '我家拿不出。\n\n' +
        '1096 年 1 月，我妈卖了陪嫁的 2 块小田，我爸卖了一片家里 80 年的橡树林。我把我哥送我的银柄短刀当了——典当行老板姓 Aaron，是个犹太人，给我打了 8 折。\n\n' +
        '凑齐 14 银马克。差 1 个，Bertrand 借给我。\n\n' +
        '那年春天，Toulouse 城里到处是这种场面——典当行排队、卖田告示、母亲哭、神父祝福一队队骑士。一个修士说：教廷规定，参加东征的人离家期间财产由教会保护，敢动的邻居要被绝罚——这是 Pax Dei（"上帝的和平"）的延伸。\n\n' +
        '1096 年 4 月 15 日，我跟 Bertrand 加入了 Raymond IV——Toulouse 伯爵，55 岁，独眼（一只眼丢在年轻时跟摩尔人的战斗里），南法最大贵族——的 8000 人纵队。\n\n' +
        '出发那天，我妈站在城门口没说话，只把一块圣徒 St Saturnin 的指骨碎片（南法本地圣徒遗骨）塞进我胸袋。她说："带回来。或者，让你死的那个穆斯林带回来。"',
      en:
        'On the ride home, Bertrand kept doing the math. A warhorse: 4 to 5 silver marks. A used chain mail shirt (a tunic of woven iron rings): 3. A Norman longsword, a round shield, and a nose-guard helmet: 2. Three months\' food and travel: 5. Total: about 15 silver marks — enough to buy one hectare of good farmland.\n\n' +
        'My family did not have that kind of money.\n\n' +
        'In January 1096, my mother sold the two small fields from her dowry. My father sold an oak forest the family had owned for eighty years. I pawned the silver-handled dagger my older brother had given me the year he married. The pawnbroker, a Jewish man named Aaron, gave me eighty percent of its value.\n\n' +
        'Fourteen marks. One short. Bertrand lent me the last.\n\n' +
        'That spring, Toulouse was full of scenes like this. Lines at pawnshops. For-sale notices on fields. Mothers weeping. Priests blessing columns of riders in the streets. A monk told us: Rome had ruled that while a man was away on this march, his property was under the protection of the Church — any neighbor who seized his land could be excommunicated (cut off from the Church). It was an extension of the older Pax Dei — the "Peace of God."\n\n' +
        'On April 15, 1096, Bertrand and I joined the column of Raymond IV — the Count of Toulouse, fifty-five, one-eyed (he had lost the other against the Moors as a young man), the greatest noble in southern France. Eight thousand men.\n\n' +
        'On the day we left, my mother stood at the city gate and said nothing. She pushed a small bone fragment into my chest pocket — a relic of Saint Saturnin, a local saint of southern France. Then she said: "Bring it back. Or let the Muslim who kills you bring it back."',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我妈那句话——你听出她在说什么了吗？我 21 岁那年没听懂。',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1096-97 Constantinople 见 Alexius',
    content: {
      cn:
        '1096 年 10 月，我们到君士坦丁堡（Constantinople，今天的 Istanbul）城外。\n\n' +
        '我从没见过这种规模的城。城墙厚得吓人——三层，外加护城河，据说住 40 万人。我们的 Raymond 伯爵进城去见拜占庭皇帝 Alexios I（亚历克西奥斯一世，40 岁，政变上台的将军——他就是 1095 年那封给教皇求援信的发信人）。\n\n' +
        '皇帝的宫殿叫 Blachernae（布拉海尔奈宫），墙嵌彩色玻璃，地铺马赛克，空气里飘着乳香和玫瑰水。大厅两边站着 Varangian Guard——皇帝的私人卫队，金发北欧人，盯着你的眼神让你不敢动。\n\n' +
        'Alexios 让每个领袖宣誓：所有从塞尔柱手里夺回的、本属于拜占庭的城——比如 Antioch（安条克）、Nicaea（尼西亚）——必须还给他。Raymond 不肯，Alexios 就不放粮、不让过博斯普鲁斯海峡（Bosphorus，分隔欧亚）。耗了两周，Raymond 让步——但签字时脸上写着"我只是口头答应"。\n\n' +
        '我们几个低级骑士第一次明白了：这场仗不是教皇说的"全体基督徒一起打异教徒"。基督徒之间已经在算各自的账。\n\n' +
        '过海那天，黑色的博斯普鲁斯海水又冷又急。Bertrand 看着亚洲那侧问我："那边的山，你听说过吗？"我说："没。教皇没讲过山。"',
      en:
        'In October 1096, we reached the walls of Constantinople (the city you would today call Istanbul).\n\n' +
        'I had never seen anything on that scale. The walls were thicker than anything in my life — three layers, with a moat outside them. The city was said to hold four hundred thousand people — thirty times the size of Toulouse. Our Count Raymond went inside to meet the Byzantine Emperor, Alexios I (forty years old, a general who had taken the throne in a coup — he was the man who had sent the request for help to the Pope back in early 1095).\n\n' +
        'The Emperor lived in a palace called Blachernae. Colored glass in the windows. Mosaic floors. We knights were led into a large hall to wait. The air smelled of frankincense (a tree resin burned as perfume) and rose water. Along both walls stood the Varangian Guard — the Emperor\'s personal troops, tall fair-haired warriors from northern Europe. They could not understand a word of our French, but the way their eyes followed you, you did not move.\n\n' +
        'Alexios made each of our leaders take an oath: any city taken from the Seljuks (the Turkish dynasty ruling much of Anatolia) that had originally belonged to the Empire — Antioch, Nicaea, others — must be returned to him. Raymond refused at first. Alexios shut off our food and would not let us cross the Bosphorus (the strait of water dividing Europe from Asia). After two weeks, Raymond gave way — but you could read his face when he signed: he was promising with his mouth, not with his hand.\n\n' +
        'We junior knights watched from the edge of the hall, and for the first time we understood something. This war was not what the Pope had described — Christians united against unbelievers. The Christians were already keeping accounts on each other.\n\n' +
        'The day we crossed, the Bosphorus was black, cold, and fast. Bertrand looked across to the Asian side and asked, "Those mountains over there — did anyone tell you about them?"\n\n' +
        'I said: "No. The Pope did not mention mountains."',
    },
    deliverGoal: '[fallback]',
    engagementHook: '过海那天我们都还以为接下来是"光荣的远征"——下一节是 Antioch。8 个月。',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1097/10-1098/06 Antioch 围城',
    content: {
      cn:
        'Antioch（安条克）那 8 个月——先给你个数字：5 万人 1097 年 10 月 21 日到城外，1098 年 6 月 3 日才攻进城。\n\n' +
        'Antioch 在叙利亚北部——城墙长 12 公里、高 18 米、有 400 座塔，背后还有 Mount Silpius 山做屏障。城里 4-8 万人。城太大，我们围不严。\n\n' +
        '11 月还能撑，12 月没粮。山里下雪，我们没过冬的衣服，就吃马、吃驴、吃狗，1 月开始吃老鼠。\n\n' +
        '2 月有一夜，我跟 Bertrand 坐在空帐篷边——一个叫 Pierre 的伙计前一天饿死——Bertrand 说："你听过 Stephen of Blois 吗？那个有 5 个城堡的法国大贵族，昨晚偷偷溜了，骑马回家。"\n\n' +
        '一个有 5 个城堡的人都跑了，我们这些没城堡的凭什么撑？\n\n' +
        '凭"死了直接进天堂"这一句。那 8 个月里，indulgentia plenaria（罪全免）比饭还让我们活得下去。我每天念 3 遍。\n\n' +
        '6 月 3 日晚上，我们的领袖 Bohemond（博希蒙德，意大利南部诺曼公爵的儿子）收买了城里一个亚美尼亚守卫 Firouz——半夜放下绳梯，60 个先锋翻进城，3 小时后大门开。\n\n' +
        '接下来 3 天，我们屠了城内所有穆斯林，投降的也杀。\n\n' +
        '我那年 23 岁，已经记不得杀了几个。',
      en:
        'I need to tell you about the eight months at Antioch — but first one number. We arrived outside Antioch on October 21, 1097, with about fifty thousand men. We broke into the city on June 3, 1098. Eight months.\n\n' +
        'Antioch was a city in northern Syria. Its walls ran twelve kilometers, eighteen meters high, with four hundred towers, and behind the city rose Mount Silpius like a natural shield. About forty to eighty thousand people lived inside. Fifty thousand of us surrounded it — but the city was so large we could not seal it tight.\n\n' +
        'November we could still bear. December the food ran out. Winter in the mountains of northern Syria — we had no winter coats. We ate the horses. We ate the donkeys. We ate the camp dogs. By January we were eating rats. I learned to flush a rat\'s nest with the point of an arrow.\n\n' +
        'One night in February, Bertrand and I sat next to an empty tent — our friend Pierre had starved to death the day before and we were waiting for the burial — and Bertrand said: "Roger, have you heard of Stephen of Blois?" I said, "The big French noble with five castles?" He said: "He left last night. He rode west. He went home."\n\n' +
        'A man with five castles ran. What were people like us — with no castles — supposed to hold on for?\n\n' +
        'For one sentence the Pope had said: anyone who dies on this road goes straight to heaven. I am being honest with you — those eight months, the words indulgentia plenaria (full pardon for sins) kept us alive more than the food did. I said them three times every day. Bertrand said them too.\n\n' +
        'On the night of June 3, our leader Bohemond (the son of a Norman duke from southern Italy) bribed an Armenian guard inside the city named Firouz. At midnight Firouz lowered a rope ladder. Sixty of our front-line men climbed in. Three hours later, the gates opened from inside.\n\n' +
        'Over the next three days, we killed every Muslim still inside Antioch. Those who tried to surrender, we killed too.\n\n' +
        'I was twenty-three. I cannot remember how many I killed.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Antioch 我们以为是终点——结果是开始。下一节，Maarat。我现在还不愿意讲那一段，但我必须讲。',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1098/12 Maarat 食人事件 + 1099 路上',
    content: {
      cn:
        '我必须告诉你 Maarat（马阿拉，叙利亚小城，在 Antioch 南 80 公里）那段。教皇和神父都没讲过，但它写在 Raymond 伯爵的随军编年史里。\n\n' +
        '1098 年 11 月底我们到 Maarat，围 2 周后 12 月 11 日攻破。照 Antioch 那流程屠完城，坐下来又没粮。\n\n' +
        '12 月底，营地里发生了一件事。我直接说：有些十字军兵开始煮死掉的穆斯林尸体来吃。先是几个饿到边缘的步兵，后来更多人。修士 Fulcher of Chartres 后来写："我们的人吃了城里被杀的穆斯林。"另一个修士写得更细：有人烤婴儿。\n\n' +
        '我那年 23 岁。我跟 Bertrand 没参与，但看见了，闻到了。\n\n' +
        '那天晚上 Bertrand 在帐篷外吐，蹲在地上肩膀抖。我问他："你还相信我们是基督徒吗？"他半天才说："我相信我们曾经是。"\n\n' +
        '从 Maarat 到耶路撒冷还有 6 个月。1099 年春天我们沿黎巴嫩海岸南下，沿途阿拉伯城镇看见我们——衣衫破烂、带着 Maarat 那谣言——付钱让我们绕路。\n\n' +
        '我们一边走一边知道：我们不是教皇说的那种人了。但必须走完——不走完 Maarat 就只是 Maarat；走完了，它才能变成"通往耶路撒冷路上的一站"。\n\n' +
        '1099 年 6 月 7 日，我们到耶路撒冷城外，我 25 岁。',
      en:
        'I have to tell you about Maarat (a small city in Syria, eighty kilometers south of Antioch). The Pope did not talk about this. The priests did not talk about this. What I am about to tell you is written in the army\'s own chronicle, kept by Count Raymond\'s monks. I am not making it up.\n\n' +
        'We reached Maarat at the end of November 1098. We laid siege for two weeks. On December 11 we broke in. We killed everyone in the city, the same way we had done at Antioch. Then we sat down in the dead city and discovered, again, that there was no food.\n\n' +
        'Late December, something happened in the camp.\n\n' +
        'I am going to say it plainly. Some of the foot soldiers began boiling the bodies of dead Muslims and eating them. It started with a few men who had been pushed to the edges of starvation. Then more men joined. Our chronicler Fulcher of Chartres wrote later in his book: "Our men ate the Muslims who had been killed in that city." Another monk who marched with Raymond, named Raymond of Aguilers, wrote in even harder detail — he said some men ate not only the dead but cooked infants.\n\n' +
        'I was twenty-three. Bertrand and I did not eat. But we saw. We smelled.\n\n' +
        'That night Bertrand was throwing up outside the tent. He was crouched in the dirt, his shoulders shaking. I asked him: "Do you still believe we are Christians?" After a long silence he said: "I believe we were."\n\n' +
        'There were six more months from Maarat to Jerusalem. In the spring of 1099 we moved slowly south along the Lebanese coast, passing Tripoli, Haifa, Caesarea, Jaffa. The Arab towns we passed saw what we looked like — torn clothes, empty eyes, the Maarat rumor traveling ahead of us — and many simply paid us to go around them.\n\n' +
        'We marched, and we knew. We were not the men the Pope had described. But we had to finish. If we did not finish, then Maarat was just Maarat. If we finished, Maarat could be turned into "a stop on the road to Jerusalem."\n\n' +
        'On June 7, 1099, we reached the walls of Jerusalem. I was twenty-five.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我没办法把 Maarat 从我的人生里删掉——但我可以把"我去了耶路撒冷"放在它前面。下一节是攻城。',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1099/06-07/14 耶路撒冷围城',
    content: {
      cn:
        '耶路撒冷的城墙不像 Antioch 那么高，但 1099 年 6 月，跟我们作对的不是城墙——是水和日头。\n\n' +
        '6 月 7 日我们到城外。城里 1000 守军（Fatimid 王朝是埃及的什叶派，1098 年刚从塞尔柱手里抢回耶路撒冷），居民约 4 万——多数穆斯林，加几千犹太人、几千东方基督徒（跟拉丁不同，但都是基督徒）。\n\n' +
        '6 月气温 35 度。城外没水井，最近的水源在 10 公里外。每天拉水加攻城，天天有人中暑死。\n\n' +
        '7 月 8 日，修士提议：所有十字军赤脚绕城墙走 7 圈——仿《圣经》里 Joshua 绕 Jericho 第 7 圈墙塌的故事。那天早上 6 点，我们 1.5 万人赤脚走，我脚底起泡也没停，边走边念 Pater Noster（"我们的父"，拉丁文主祷文）。\n\n' +
        '7 圈走完，城没塌。但那天我们之间重新连成了一个东西——那晚我第一次睡着了。\n\n' +
        '我们造了 2 座攻城塔（siege towers，高过城墙）——晚上守军用希腊火（一种水浇不灭的火油武器）烧掉 1 座。\n\n' +
        '7 月 14 日傍晚，剩下那座塔推到南墙。Godfrey of Bouillon——法德边境一个中等公爵——第一个翻过城墙。我跟 Bertrand 在 Raymond 队里，在西墙佯攻分散守军。7 月 15 日清晨，南门从城内打开。',
      en:
        'The walls of Jerusalem were not as high as Antioch\'s, but in June 1099 our enemy was not the wall. It was water, and sun.\n\n' +
        'We arrived outside the city on June 7. About a thousand defenders held it (the Fatimid dynasty — a Shia Muslim power based in Egypt — had taken Jerusalem back from the Seljuks just one year earlier, in 1098). About forty thousand civilians lived inside — mostly Muslims, a few thousand Jews, a few thousand Eastern Christians (Armenian, Greek Orthodox, Syriac — branches of Christianity different from ours, but still Christians).\n\n' +
        'In June, Jerusalem reached thirty-five degrees Celsius. There were no wells outside the walls — they were all inside the city, and our nearest water was ten kilometers away. Every day we hauled water and attacked the wall. Every day men died from heat. I drank my own urine more than once.\n\n' +
        'On July 8, our priests proposed something. Every fighter would walk barefoot around the walls of Jerusalem, seven times — an imitation of the Old Testament story of Joshua at Jericho, where on the seventh circle the walls fell.\n\n' +
        'July 8, six in the morning. The fifteen thousand of us still alive started walking. The ground burned my feet into blisters but I did not stop. As I walked I whispered the Pater Noster — "Our Father," the central Latin prayer. Bertrand walked next to me, crying. I did not ask why — it might have been Pierre, it might have been Maarat, he himself might not have known.\n\n' +
        'After seven circuits the wall did not fall. But something between the fifteen thousand of us was knit back together that morning. I cannot say what it was. I only know that for the first time in months, I slept that night.\n\n' +
        'We built two siege towers — wooden structures taller than the wall, built to roll forward and dump our men onto the ramparts. By day we built; at night defenders used Greek fire (a burning oil that water cannot put out) to set them alight. We lost one. One was left.\n\n' +
        'On the evening of July 14, the last tower was pushed against the south wall. Godfrey of Bouillon — a middling duke from the French-German border — was the first man over the top. Count Raymond\'s men, my unit, attacked the western wall to draw defenders away. Bertrand was with me.\n\n' +
        'On the morning of July 15, the south gate opened from inside.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '城门开了那一刻——我跟 Bertrand 互相看了一眼。我们没有说话。下一节我必须讲那 3 天。',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1099/07/15-17 + §3 普通人 cosplay 段',
    content: {
      cn:
        '7 月 15 日中午，我跟 Bertrand 翻进南门。我那天用我爸那柄诺曼长剑做的事，想了 4 年该不该说——但我必须说。\n\n' +
        '第一个：一个穆斯林老人跪在 Al-Aqsa 清真寺台阶上做礼拜。我从背后劈下去，他没回头。我闭眼还看得见他袍子的颜色——灰白带蓝。\n\n' +
        '第二个：一个穆斯林妇女从 Souq al-Qattanin（棉布市场）小巷跑过。她抱着孩子，但我看见的是她的红头巾。我没看清就劈下去，孩子掉地上，我补一刀。\n\n' +
        '第三个：一个 8 岁男孩从角落跑出来，我以为是穆斯林劈下去——后来才意识到他穿的不是穆斯林袍子，是犹太孩子。\n\n' +
        '我那一刻以为自己在做对的事。Urban II 说所有罪都赦免，耶路撒冷在我们脚下。那老人在我眼里不是老人——他是 Urban II 说的"污染圣地的异教徒"。\n\n' +
        '7 月 17 日傍晚，城里大概不再有活的穆斯林了。我们放火烧了藏着犹太人的 Synagogue（犹太会堂），里面的人全烧死。亚美尼亚基督徒邻居也死了，因为拉丁兵分不清他们和穆斯林。\n\n' +
        '现代历史学家估算那 3 天死了 3000 到 10000 人。当时修士写"血没到马勒"——那是借《启示录》14:20 末世意象的修辞，不是真量；阿拉伯史家 Ibn al-Athir 记 7 万，现代学界认为偏高。但具体多少，对在场的人不重要。',
      en:
        'Just past midday on July 15, Bertrand and I climbed through the south gate. The Norman longsword in my hand — my father had used it in the 1080s — had been resharpened three times. What I did with it that day, I have spent four years trying to decide whether to put into words. But if I don\'t tell you, I am lying to you.\n\n' +
        'The first: an old Muslim man, kneeling on the steps of Al-Aqsa Mosque, at his prayers. I cut him from behind. He did not turn. I can still see the color of his robe — grey-white with a blue trim — when I close my eyes.\n\n' +
        'The second: a Muslim woman running through an alley off the Souq al-Qattanin (the cotton merchants\' market). She was carrying a child, but what my eye caught was her red headscarf. I struck before I saw the child. The child fell, alive. I cut again. Both dead.\n\n' +
        'The third: an eight-year-old boy. He ran out of the corner of a shop. I thought he was a Muslim child. His robe was not Muslim cut. He may have been a Jewish boy.\n\n' +
        'What was I thinking? I thought I was doing the right thing. I truly thought so. Urban II had said all sins were forgiven. We had walked four years. Pierre was dead. Bertrand had wept at Maarat. Jerusalem was beneath our feet. In that moment I did not see the old man as an old man. I saw what Urban II had described four years earlier: an unbeliever defiling the holy city.\n\n' +
        'The second evening Bertrand sat on the steps of the Temple of Solomon and said: "Roger, I thought we would feel something when we reached this place." I said: "So did I."\n\n' +
        'By the evening of July 17, almost no Muslim was left alive. We went to the synagogue — the Jews who had not surrendered had locked themselves inside — we set the wooden roof on fire. Everyone inside burned. The Armenian Christian neighbors died too, because our Latin soldiers could not tell an Armenian Christian apart from a Muslim.\n\n' +
        'Modern historians estimate three to ten thousand people died in those three days. Our chronicler Raymond of Aguilers wrote "blood up to the horses\' bridles" — borrowed apocalyptic rhetoric from Revelation 14:20, not a literal measurement. Ibn al-Athir, an Arab historian a century later, gave seventy thousand — modern scholars consider this an overestimate. But if you ask me how much blood was in Jerusalem in those three days — three thousand or seventy thousand, the difference does not matter to anyone who was there.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我做了。我说不出"对不起"——因为那 3 天里我以为是对的。下一节，第 4 天清晨，我醒来。',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§3 Guillaume cosplay + 余生',
    content: {
      cn:
        '7 月 18 日清晨，我跟 Bertrand 从一个空香料铺出来——整个耶路撒冷异常安静，街上尸体被堆成几座小山。\n\n' +
        '那天 Raymond 把耶路撒冷的房子和店分给活下来的人。3 年前出发是 8000 人，现在剩约 1500 个南法人。我分到 Souq 边一间小铜匠铺，前主人一家死在屠杀里，墙上有血迹。\n\n' +
        '我没要，对 Raymond 说："让 Bertrand 拿吧。"我知道为什么，但只对自己说想回家。\n\n' +
        '1100 年秋我 26 岁回到 Toulouse。我妈认出我，哭了——我瘦了 25 斤，左手食指冻坏只剩半截。她问胸袋里那块圣徒指骨碎片还在吗。我说在。她没说什么——但看着她的脸，我突然听懂了她 1096 年那句："带回来。或者让你死的那个穆斯林带回来。"\n\n' +
        '那 4 年里她每次想我，都在想"如果他没回来，杀他的那个人，比活着回来的我更好"——因为活着回来的我，不是 1095 年那个 21 岁的儿子。\n\n' +
        '我接下来活了 35 年，娶了寡妇，生了 2 个孩子，从不主动讲耶路撒冷。但我每周晚上都做梦——梦那老人灰白带蓝的袍子、那妇女的红头巾、那 8 岁犹太男孩。\n\n' +
        '我 60 岁死那年，孙子问我："爷爷，你这辈子最自豪的事是什么？"我想了一会儿说："我从耶路撒冷活着回来了。"——不是骄傲，不是后悔，只是活着回来了。',
      en:
        'On the morning of July 18, Bertrand and I came out of an empty Muslim spice shop where we had slept on the floor. Jerusalem was strangely quiet.\n\n' +
        'In the streets the bodies had been piled into small mounds. That morning our leader Godfrey knelt alone in the Church of the Holy Sepulchre, fasting; he had not joined the previous day\'s looting.\n\n' +
        'That day Count Raymond gathered the southern French troops to distribute the city — the houses and shops of Jerusalem divided among the survivors. Eight thousand of us had left Toulouse three years earlier; about fifteen hundred were left now. I was given a small coppersmith\'s shop on the edge of the Souq. Its previous owner, a man named Hassan, and his whole family had died in the killing of July 16. Blood was still on the walls.\n\n' +
        'I did not take it. That evening I told Raymond: "Let Bertrand have it." I knew why, but I could not say it out loud. What I told myself was: "I want to go home to Toulouse."\n\n' +
        'In the spring of 1100 I traveled back with a column of returning French crusaders. Eight months on the road. I almost died twice — once in a shipwreck, once in a Seljuk ambush. In autumn 1100, twenty-six years old, I came back to Toulouse.\n\n' +
        'My older brother was away, fighting in Bordeaux. My mother recognized me and cried. I had lost twenty-five pounds. The first finger of my left hand was a stump — frostbite at the siege of Antioch in 1098. A scar ran above my left eye.\n\n' +
        'She asked if the bone fragment of Saint Saturnin was still in my chest pocket. I said yes — I had never taken it out. She said nothing. But looking at her face, I finally understood what she had said to me back in 1096: "Bring it back. Or let the Muslim who kills you bring it back."\n\n' +
        'For four years, every time she thought of me, she had thought: if he does not return, the man who killed him is better than the man who returns. Because the man who returns is no longer the twenty-one-year-old son who left.\n\n' +
        'I lived another thirty-five years. I married a widow from Toulouse, had two children, went to church every week, and never spoke of Jerusalem on my own.\n\n' +
        'But every week, in my sleep, I dreamed — the old man in the grey-white robe with blue trim, the woman in the red headscarf with her child, the eight-year-old Jewish boy running out from the corner of a shop.\n\n' +
        'When I was sixty, on the day I died, my grandson asked me: "Grandfather, what is the proudest thing in your life?" I thought for a long time. Then I said: "I came back from Jerusalem alive." That was not pride. That was not regret. It was just: I came back, and that was all.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我说完了。但你不能就这样走——你必须替我看一眼，问我两个问题。',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§6 影响 + §10 误解',
    content: {
      cn:
        '现在我们离开 Roger 的视角。回头看他经历的这 4 年留下了什么。\n\n' +
        '十字军国家成立 4 个：Edessa、Antioch、Jerusalem（1099-1291）、Tripoli，在黎凡特（地中海东岸）共存了 88 到 192 年。\n\n' +
        '88 年后，1187 年，库尔德苏丹 Saladin 重新拿下耶路撒冷——他没屠城。但 Roger 那时已死了 50 年。\n\n' +
        '更长的回声：这 200 年里，欧洲人接触到阿拉伯保存的希腊哲学、阿拉伯医学、代数、印度数字——12 世纪意大利和西班牙开始翻译——经院哲学和文艺复兴的不少养分，是经过这条意外的"军事桥"。\n\n' +
        'Urban II 1095 年发明的 indulgentia plenaria（罪全免）后来延伸成教会卖赎罪券。422 年后，1517 年，反对卖赎罪券的德国修士 Martin Luther 把 95 条论纲钉在 Wittenberg 教堂门上——新教改革开始。Roger 21 岁听到的那场演说，422 年后引发了西方基督教的内战。\n\n' +
        '这是多视角学法的核心：Roger 1099 年觉得自己在做对的事；900 年后我们读他的故事，知道他做的不是对的事。但两件事都真——他真心相信，他做了，我们今天读懂了。\n\n' +
        '故事讲完了。下面换 narrator，问两个真问题。',
      en:
        'We now step out of Roger\'s perspective. Looking back at the four years he just walked through, what was left behind?\n\n' +
        'Four crusader states were established. The County of Edessa (1098-1144). The Principality of Antioch (1098-1268). The Kingdom of Jerusalem (1099-1291). The County of Tripoli (1109-1289). These four states coexisted in the Levant — the eastern Mediterranean coast — for between eighty-eight and one hundred ninety-two years.\n\n' +
        'Eighty-eight years later, in 1187, a Kurdish sultan named Saladin retook Jerusalem. He did not massacre the city. But Roger had been dead for fifty years by then.\n\n' +
        'A longer echo: over those two hundred years of contact, Europeans encountered Greek philosophy preserved by Arab scholars, Arab medicine, algebra, and Indian numerals (the digits 0 through 9 we still use). In the twelfth century, Italian and Spanish translators began rendering these into Latin — and the materials of scholastic philosophy (Aquinas in the thirteenth century) and the Renaissance (fourteenth and fifteenth centuries) drew nourishment from this unexpected "military bridge."\n\n' +
        'And the indulgentia plenaria — the full pardon for sins that Urban II invented in 1095 — was extended into the Church\'s practice of selling indulgences for cash. Four hundred and twenty-two years later, a German monk named Martin Luther objected to the sale. On October 31, 1517, he nailed his ninety-five theses to the door of Wittenberg church. The Protestant Reformation began.\n\n' +
        'The speech Urban II gave on a wooden platform in 1095 — the speech a twenty-one-year-old Roger heard — eventually triggered, four hundred and twenty-two years later, a civil war inside Western Christianity itself.\n\n' +
        'Here is the core of lens teaching. In 1099 Roger believed he was doing the right thing. Nine hundred years later, reading his story, we know he was not. But both things are true at once — he truly believed, he truly did it, we now understand it, and we cannot pretend he did not do it.\n\n' +
        'The story is done. Now we shift into narrator voice, and ask two real questions.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '故事讲完了。现在你（扮演 Roger 走完 8 节后）回头看自己——',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis（真 Socratic）═════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§7 DBQ + §9 historiography + §10 误解',
    content: {
      cn:
        '你刚扮演了 Roger——一个真心相信自己在做"上帝的工作"的 25 岁骑士。他在耶路撒冷砍倒一个跪着祈祷的老人，劈了一个抱孩子的妇女，杀了一个 8 岁男孩。他没道歉——那 3 天里，他以为自己在做对的。\n\n' +
        '问题来了。1099 年 7 月 15-17 日发生的事——是 God\'s war（上帝的战争），还是 organized murder（有组织的屠杀）？\n\n' +
        '历史学家有两种真实并立的看法，都有一手史料支撑。\n\n' +
        '**一种看法**：不能用今天的眼光去评判中世纪的人。Roger 的"信仰"不是业余爱好，是他整个世界观的基础。他卖光家产、走 4000 公里、70% 出征者死在路上——这不是投机，是真心相信能赎罪。在他们 1099 年的真实经验里，这就是 God\'s war。\n\n' +
        '**另一种看法**：动机真诚不能洗白行为本身。一个父亲真心相信孩子该死，也不能把杀孩子变成"教育"。Roger 真心相信，但他做的是有组织的屠杀——4 万平民里至少死了 3000-10000 人，包括邻居的犹太人和亚美尼亚基督徒。"真心信"和"有组织屠杀"可以同时成立，第二件不能被第一件抹掉。\n\n' +
        '两边都站得住——一种看法从"中世纪人内心"看，另一种看法从"行为结果"看。\n\n' +
        '你怎么看？1099 那 3 天，你更靠近哪一种？想 30 秒。',
      en:
        'You have just played Roger — a twenty-five-year-old knight who genuinely believed he was doing God\'s work. He cut down a praying old man on the steps of a mosque, cut down a woman carrying her child, and killed an eight-year-old boy. He did not apologize. In those three days of July 1099, he thought he was doing the right thing.\n\n' +
        'Here is the question. What happened in Jerusalem on July 15-17, 1099 — was it God\'s war, or was it organized murder?\n\n' +
        'Historians hold two genuinely opposed views, each grounded in original documents.\n\n' +
        '**One view:** you cannot judge medieval people by today\'s eyes. Roger\'s "faith" was not a hobby — it was the foundation of his entire worldview. Crusaders sold all their family land, walked four thousand kilometers, and seventy percent died on the road — this is not speculation, it is genuine belief in pardon for sins. In the real experience of the men who fought it, 1099 was God\'s war.\n\n' +
        '**Another view:** sincerity of motive cannot wash the nature of the act. A father may genuinely believe his child deserves to die for a fault, but that does not turn the killing into "education." Roger\'s belief was real, but what he did was organized killing. Of forty thousand civilians, at least three to ten thousand died — including the Jewish and Armenian Christian neighbors of the Muslims. Sincere belief and organized killing can both be true at once, and the second is not erased by the first.\n\n' +
        'Both stand. One view enters the medieval mind from inside; the other judges from the outcome of the action.\n\n' +
        'What do you think? On those three days in 1099, which do you lean toward? Take thirty seconds — your reasoning matters more than your conclusion.',
    },
    deliverGoal:
      '你刚扮演了 Roger——一个真心相信自己在做"上帝的工作"的 25 岁骑士——' +
      '他在 1099 年 7 月那 3 天里以为自己在做对的事。' +
      '但是历史学界对此有**两种真实并立**的解读：' +
      '**一种说法（Riley-Smith 修正派）**：动机真诚——不能用现代框架判断中世纪人——这是 God\'s war。' +
      '**另一种说法（现代道德底线读法）**：真诚不能洗白屠杀——3000-10000 平民死了——这是 organized murder。' +
      '问题来了——',
    engagementHook:
      '**你怎么看**——1099 那 3 天，是 God\'s war（信仰真心驱动）还是 organized murder（有组织屠杀）？' +
      '没有标准答案——给你的理由说服我。想 30 秒',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同代中国 — 北宋 1099',
    content: {
      cn:
        '跳出耶路撒冷看一眼。1099 年 Roger 屠城那一刻，世界别处在发生什么？\n\n' +
        '同年 1099 年是北宋哲宗末年。罗马的 53 岁教皇号召 5 万欧洲人为信仰打仗；同年北宋最大的政治事件，是文官内部的"新党 vs 旧党"党争——争王安石变法好不好。没人召集军队为信仰打仗——因为没有"独立宗教权威"可召集。\n\n' +
        'Roger 那种"为信仰流血 4 年"在同代中国不可能——不是中国人没信仰，是制度不一样。\n\n' +
        '**关键洞察**：欧洲能有十字军，是因为"教皇"这个独立宗教权威能越过国王召集骑士。伊斯兰能有 jihad，是因为 caliph 在理论上宗教加政治合一。中国不能有宗教战争，是因为皇权早把宗教吸收——佛道高僧都由皇帝任命，没有独立权威能召集军队。\n\n' +
        '两条路径各付代价：\n\n' +
        '**欧洲路（教俗分立）**：1095-1291 十字军；1517-1648 宗教战争死了中欧三分之一人口。\n\n' +
        '**中国路（皇权统摄宗教）**：唐武宗 845 年灭佛（毁佛寺 4600、强迫还俗 26 万）；明清反复查禁民间宗教。皇权认定某宗教是威胁，没人能制衡。\n\n' +
        '不是哪个对错——是不同地理、历史、制度下的取舍。\n\n' +
        '你觉得：1099 年"教皇召集 5 万人为信仰打仗"——主要是基督教文化特殊，还是欧洲制度里教权和王权两个独立权威互不吞并？',
      en:
        'Step out of Jerusalem for a moment. While Roger was in the middle of the killing — what was happening on the other side of the world?\n\n' +
        'Same year, 1099, the late reign of Emperor Zhezong of the Northern Song dynasty in China. In Rome, the fifty-three-year-old Pope Urban II was rallying fifty thousand Europeans to fight for their faith. In Northern Song China that same year, the biggest political event was the "New Party versus Old Party" dispute among civil officials over whether Wang Anshi\'s legal reforms had been a good idea. No one called up an army to fight for faith — because there was no independent religious authority that could call one up.\n\n' +
        'A story like Roger\'s — bleeding four years for belief — was structurally impossible in the China of that year. Not because Chinese people had no beliefs, but because the institutions were different.\n\n' +
        '**The key point.** Europe could have a Crusade because the Pope, an independent religious authority, could go around kings and call knights directly. Islam could have jihad because the caliph was, in theory, both religious and political authority in one. China could not have religious wars because imperial power had long since absorbed religious authority — senior Buddhist and Daoist clerics were appointed by the emperor, and no independent figure could call up troops.\n\n' +
        'Each path paid its own cost.\n\n' +
        '**The European path (separation of religious and royal power):** the Crusades, 1095-1291 (two hundred years of armed pilgrimage); the Reformation Wars, 1517-1648, in which civil wars and the Thirty Years\' War killed about a third of Central Europe.\n\n' +
        '**The Chinese path (imperial absorption of religion):** Emperor Wuzong of Tang, 845 CE, destroyed about 4,600 Buddhist monasteries and forced 260,000 monks back to lay life; the Ming and Qing repeatedly persecuted folk religion. When the throne decided a religion was a threat, no independent authority could push back.\n\n' +
        'It is not "which path is right." It is a different trade-off under different geography, history, and institutions.\n\n' +
        'What do you think — was 1099-style holy war driven mainly by something special about Christian culture, or by the structural fact that European religious power and royal power were two separate authorities, neither able to fully swallow the other? Take thirty seconds.',
    },
    deliverGoal:
      '同年 1099 北宋——皇权 vs 教权这个张力**不存在**——' +
      '没有"独立宗教权威"——所以不可能有十字军式的宗教战争——' +
      '中国走的是**皇权统摄宗教**路径——代价是宗教被吸收无法保护自己（唐武宗灭佛）。' +
      '欧洲走的是**教俗分立**路径——代价是宗教冲突不受管制（200 年十字军 + 130 年宗教战争）。' +
      '——两条路径各自防止了对方的痛苦，也各自付出了对方没付出的代价',
    engagementHook:
      '1099 那种"为信仰打 4 年仗"——是基督教文化特殊，还是欧洲制度结构（教权王权两个独立权威互不吃下对方）的产物？先在心里想想你怎么看，下一节我会正式问你。',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: false,
  },
  // ═════ Meta（反思 + 桥）═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    content: {
      cn:
        '你刚从 Roger 的内部走了一遍——他在 Clermont 撕红布的那一刻、他在 Antioch 围城吃老鼠的那个冬天、他在 Maarat 看 Bertrand 在帐篷外吐、他在耶路撒冷劈倒一个跪着祈祷的老人、他 60 年后死前对孙子说"我活着回来了"。\n\n' +
        '在你进入记忆考核之前，一个问题：\n\n' +
        '这一遍里，最让你 surprise 的是什么？\n\n' +
        '是他 21 岁那年撕红布时心里的 4 件事——赎罪、土地、出路、家族荣誉——它们怎么被 1 句 Deus vult 一起捆住的？\n\n' +
        '是他在 Maarat 那 12 月没动手却闻到了——他知道自己已经"不是出发时那个人"了？\n\n' +
        '是他 7 月 15 日那一刻真心相信自己在做对的事——但 35 年的梦每个礼拜在告诉他不是？\n\n' +
        '还是他 60 岁死前对孙子说的那一句话——不是"骄傲"，不是"后悔"，只是"我活着回来了"？\n\n' +
        '说一句话告诉我。\n\n' +
        '然后——准备好了吗？接下来是记忆考核：拼写、定义、应用题。这是你把今天学的变成真正会用的最后一步。',
      en:
        'You have just walked through Roger from the inside — the moment in Clermont when he stitched red cloth onto his chest, the winter at Antioch when he ate rats, the December at Maarat when he watched Bertrand throwing up outside the tent, the day in Jerusalem when he cut down a praying old man, the moment sixty years later when he told his grandson, "I came back alive."\n\n' +
        'Before you move into the mastery check, one question:\n\n' +
        'What surprised you most in this lens?\n\n' +
        'Was it that the four things tangled in his head at twenty-one — pardon for sins, land, a way out, family honor — were all bundled together by one phrase, Deus vult?\n\n' +
        'Was it that at Maarat, even though he did not eat, he could smell — and he knew he was no longer the person who had left Toulouse?\n\n' +
        'Was it that on July 15 he genuinely believed he was doing the right thing — and yet for thirty-five years his dreams every week told him otherwise?\n\n' +
        'Or was it the line he gave his grandson before he died at sixty — not "pride," not "regret," only "I came back alive"?\n\n' +
        'Tell me in one sentence.\n\n' +
        'Then — are you ready? The mastery check is next: spelling, definitions, application questions. That is the step that turns what you experienced today into something you actually own.',
    },
    deliverGoal:
      '你扮演了 Roger 8 节——经历了他从 Clermont 到 Jerusalem 4 年——' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换视角重玩——比如 Anna Komnene（拜占庭公主视角）或 Ali ibn Hassan（耶路撒冷穆斯林视角）——' +
      '——同一事件不同角度——会发现新东西',
    engagementHook:
      '走完 Roger 这一遍——一个真心相信自己在做"上帝的工作"、却砍倒跪着祈祷的老人的人。你会怎么评价这样一个人？再想一步：他能为信仰流血 4 年，到底是基督教文化特殊，还是欧洲教权王权两个独立权威互不吃下对方的制度结构造成的？',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 3: Aisha bint Yusuf（耶路撒冷 12 岁穆斯林女孩 / 受害方视角）
// ═══════════════════════════════════════════════════
//
// 角色设定：
//   - 1099 年 12 岁，住耶路撒冷 Souq al-Qattanin（棉布市场）边巷
//   - 父亲 Yusuf ibn Ahmad 中等棉布商人，识字
//   - 母亲 Layla，弟弟 Hasan 6 岁
//   - Aisha 自己识字，帮父亲数布，最爱后院无花果树
//   - 邻居：亚美尼亚基督徒铁匠 Sarkis 一家，11 岁儿子 Hovsep
//   - 姨妈 Khadija 抱 1 岁女儿被劈死——红头巾是 Aisha 织的
//   - 1099/07/14 城破——躲地窖——父亲被杀
//   - 1099/07/22 母亲带她跟 Hasan 逃 Ascalon 投奔姨姑
//   - 1187 Saladin 重夺耶路撒冷不屠城——但她家没回去
//
// lens 关键张力（对位 Tom 的 "invisible common person who was there but excluded"）：
//   - Aisha 是 Roger Node 7 屠杀的接受端
//   - Khadija 红头巾 echo Roger Node 7 那个红头巾——但不直白说，让用户自己 connect
//   - 12 岁——跟 Willow（用户女儿）同龄——有意的代入设计
//
// anti-orientalism 硬规：Aisha 不是"东方神秘女孩"——她爱无花果树、跟邻居小女孩玩、识字、抱怨——
// 一个 12 岁普通女孩，会让 Willow 觉得"这就是我"
//
// anti-victim-only 硬规：前几节点写她作为 12 岁活人——好奇、调皮、爱、抱怨——
// 不要从一开始预告悲剧
//
// 现代政治硬禁：1948/1967/现代以巴问题不存在——这是 11 世纪——让它在 11 世纪
//
var aishaJerusalemStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§3 耶路撒冷居民视角 + §4 1099/06 围城前',
    content: {
      cn:
        '1099 年 6 月 6 日，星期二早上。\n\n' +
        '我叫 Aisha bint Yusuf——意思是"Yusuf 的女儿 Aisha"。我 12 岁。\n\n' +
        '我家住耶路撒冷 Souq al-Qattanin（棉布市场）边上的小巷——后院有一棵无花果树，今年的果子还没熟，绿绿的小球挂在叶子下面。我每天早上是被 Al-Aqsa 那边宣礼塔的 adhan（叫拜声）叫醒的——一个声音从城南飘过来，绕过 Souq 的房顶，落在我枕头上。\n\n' +
        '我爸是 Yusuf ibn Ahmad，棉布商人。铺子在 Souq 后排第三家，门口挂着两卷靛蓝色和一卷红色的布。他识字，懂阿拉伯语写法，还能读一点波斯语。我也识字，是我妈 Layla 教的。我下午在铺子里帮我爸数布——一卷算一码——我数得比他快。\n\n' +
        '我弟弟 Hasan 6 岁——他什么都不算，他只追院子里的猫。\n\n' +
        '6 月 6 日那天傍晚——我爸从城门那边回来——脸色不一样。他坐在院子石凳上没说话。我端水给他，他喝了一口才开口：\n\n' +
        '"Frangi 来了。"（Frangi——阿拉伯人对法兰克人的称呼，泛指来自西欧的基督徒。）\n\n' +
        '我问："Frangi 是什么？"\n\n' +
        '我爸没回答。他只是看了一眼无花果树。我那时候不知道——但我后来想起来，那是我最后一次看见他坐在石凳上不皱眉。',
      en:
        'Tuesday morning, June 6, 1099.\n\n' +
        'My name is Aisha bint Yusuf — that means "Aisha, daughter of Yusuf" in Arabic. I am twelve years old.\n\n' +
        'My family lives in a small alley off the Souq al-Qattanin (the Souq, the Arab marketplace, and al-Qattanin means "the cotton merchants"). Behind our house there is a fig tree. The fruit is not ripe yet — only small green balls hanging under the leaves. Every morning I wake to the adhan (the Muslim call to prayer, sung from the top of a tower) — a voice drifting from the south, over the rooftops of the Souq, landing on my pillow.\n\n' +
        'My baba (father in Arabic) is Yusuf ibn Ahmad. He is a cotton merchant. His shop is third in the back row of the Souq — two rolls of indigo blue cloth and one of red hanging by the door. He can read Arabic well, and a little Persian. I can read too — my ummi (mother) Layla taught me. In the afternoons I count cloth in the shop — one roll, one yard. I count faster than my baba.\n\n' +
        'My little brother Hasan, six years old, counts nothing. He chases the cats in the courtyard.\n\n' +
        'On the evening of June 6, my baba came back from the city gate. His face was different. He sat on the stone bench in the courtyard and did not speak. I brought him water. He drank a sip and then said:\n\n' +
        '"The Frangi are coming." (Frangi — the Arabic name for the Franks, the Christians from Western Europe.)\n\n' +
        'I asked, "Baba, what is a Frangi?"\n\n' +
        'He did not answer. He only looked at the fig tree. I did not know it then — but later I would remember: that was the last evening I saw him sitting on the bench without a frown on his face.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 12 岁——我问"Frangi 是什么"——我爸没回答——你猜接下来 6 周我会知道什么',
    expectedLength: '220-260 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§3 耶路撒冷日常 + §2 1099 多教派共存',
    content: {
      cn:
        '在我告诉你 Frangi 是什么之前，我先告诉你我的世界长什么样。\n\n' +
        '我们 Souq al-Qattanin 这条巷里，左边是亚美尼亚基督徒铁匠 Sarkis 家，儿子 Hovsep 11 岁，爱装哥哥但其实怕老鼠。他爸打铁的叮叮声，我从小听着长大，跟 adhan 一样自然。右边是犹太人 Yakov 一家，卖橄榄油，女儿 Esther 9 岁，跟我在小巷踢沙子。\n\n' +
        '我妈说，我们这条巷三家——穆斯林、亚美尼亚正教基督徒、犹太人——在这里住了 80 年了。\n\n' +
        '1098 年我 11 岁那年，我妈教我织一条红头巾，给姨妈 Khadija 当 1099 年 3 月 28 岁的生日礼物。我织了 4 个月，线脚不齐。但 Khadija 拿到时，笑着把头巾绕在头上转了一圈说："Aisha 我侄女，你织的——这是我这辈子收到的最好的礼物。"那天她抱着我 1 岁的小表妹 Fatima，Fatima 抓她的红头巾流口水，她笑着没擦。\n\n' +
        '6 月 7 日 adhan 之后，我跟 Maryam 在无花果树下。我说："我爸说 Frangi 来了，但不告诉我是什么。"Maryam 耸耸肩："换一拨兵。去年埃及的 Fatimid 把塞尔柱赶出去，城里热闹一礼拜，然后什么都一样。"\n\n' +
        '我那天点头——我相信她。',
      en:
        'Before I tell you what Frangi are, let me show you what my world looked like.\n\n' +
        'In our alley off the Souq al-Qattanin — to the left lives Sarkis, an Armenian Christian blacksmith. His son Hovsep is eleven, one year younger than me. Because he is a boy, he sometimes climbs the wall to watch me play with my neighbor Maryam. He likes to act like an older brother, but really he is afraid of mice. Sarkis hammers iron on his forge — clang clang clang — I have grown up with that sound the way I have grown up with adhan.\n\n' +
        'To the right lives Yakov, a Jewish family — they sell olive oil. Yakov\'s daughter Esther is nine. We kick sand together in the alley.\n\n' +
        'My ummi says, our three houses on this alley — Muslim, Armenian Christian, Jewish — have been here for eighty years. My great-grandfather drank tea with Sarkis\'s great-grandfather.\n\n' +
        'For my eleventh birthday in 1098, my ummi taught me how to weave a red headscarf — a gift for my khala (aunt) Khadija for her twenty-eighth birthday in March 1099. I worked on it for four months. The stitching was uneven. But when Khadija received it, she laughed, wrapped it around her head, spun once, and said: "Aisha, my niece — this is the best gift I have ever received in my life."\n\n' +
        'That day she was holding my one-year-old cousin Fatima. Fatima grabbed at the red headscarf in her ummi\'s hands. Drool ran down the red yarn. Khadija laughed and did not wipe it off.\n\n' +
        'On June 7, after adhan, I sat under the fig tree with Maryam. I told her: "My baba said the Frangi are coming, but he will not tell me what they are." Maryam, twelve, shrugged and said: "Just another batch of soldiers. Last year (1098) the Egyptian Fatimids pushed the Seljuks out — the city was loud for a week, and then everything went back to normal."\n\n' +
        'I nodded that day. I believed her.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 12 岁的世界——红头巾 + 无花果树 + 邻居小女孩——你想象一下，6 周后这一切要改变',
    expectedLength: '240-280 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/06-07 围城 5 周 + Fatimid 防守',
    content: {
      cn:
        '6 月 7 日，Frangi 真的来了。那天下午我跟 Hovsep 爬上 Souq 房顶，他比我先上去，指着城外说："看。"\n\n' +
        '城墙外是 Judean 山地黄黄的丘陵，平时没人。那天上面铺满了灰白色的人和马。我从北数到南，数到 800 就数不下去——后面还有一片。Hovsep 说："上千。可能两千。"我后来才知道是 1.5 万。\n\n' +
        '城里有 Fatimid 王朝（埃及的什叶派穆斯林，1098 年从塞尔柱手里抢回耶路撒冷）的 1000 守军，居民大概 4 万，多数穆斯林，几千犹太人，几千东方基督徒。\n\n' +
        '6 月底开始没水。城里水井还有水，但守军封住分配，一家一天只能取两罐。我跟我妈每天早晨去 Souq 北口的井排队，队伍 80 个人。Hovsep 一家也排——他说他爸开始打武器了。\n\n' +
        '7 月 8 日早上，我听见一个奇怪的声音从城外飘进来。一群男人在念什么，不是阿拉伯语，也不是希腊语，是另一种发硬的话。我跑去问我爸——他从铺子里出来，脸色发白："Frangi 在念他们的祷告。他们赤脚绕城走。"\n\n' +
        '我说："Baba——他们也信主？"\n\n' +
        '我爸没回答，坐下，闭上眼睛。\n\n' +
        '我那天 12 岁，真的不懂：为什么有人念祷告，同时来杀人？我反复想，那年没想明白，后来 30 岁也没想明白。',
      en:
        'June 7 — the Frangi really came. That afternoon I climbed onto the roof of the Souq with Hovsep. He climbed up first and pointed: "Look."\n\n' +
        'Beyond the walls were the yellow hills — the Judean hills — usually empty. That day they were covered with grey-white men and horses. I counted from north to south. I reached eight hundred and could not count further — there was still more behind. Hovsep said: "A thousand. Maybe two thousand."\n\n' +
        'Later I learned it was fifteen thousand.\n\n' +
        'The city had one thousand Fatimid soldiers (the Fatimids were the Shia Muslim dynasty from Egypt — they had pushed the Seljuks out of Jerusalem just one year earlier, in 1098). Inside the walls lived about forty thousand people — mostly Muslims, a few thousand Jews, a few thousand Eastern Christians. We were Muslim. Sarkis\'s family was Armenian Christian. The three houses on our alley had stood there for eighty years.\n\n' +
        'By the end of June there was no water outside. The wells inside the city still had water, but the soldiers sealed them and rationed — two jars per family per day. Every morning my ummi and I went to the well at the north end of the Souq and waited in line. Eighty people. Hovsep\'s family waited too. I talked with him in line — he said his baba had begun forging weapons.\n\n' +
        'On the morning of July 8, I heard a strange sound drift in from outside the walls — a group of men chanting something. Not Arabic. Not Greek (I had heard the Greek Orthodox sing before). It was a different language, harder. I ran to ask my baba. He came out of the shop with a pale face. He said: "The Frangi are saying their prayers. They are walking around the walls barefoot."\n\n' +
        'I said: "Baba — they pray to God too?"\n\n' +
        'My baba did not answer. He sat down and closed his eyes.\n\n' +
        'I was twelve. I really did not understand. How can someone say prayers and at the same time come to kill us? I turned that question over and over. I did not figure it out at twelve. I did not figure it out at thirty either.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 12 岁问出那一句"他们也信主？"——我爸没回答——你 12 岁的时候问过类似问题吗',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/07/08 Pater Noster + 守军视角',
    content: {
      cn:
        '7 月 8 日下午我又爬上 Souq 房顶——这次不是 Hovsep 拉我，是我自己想看。\n\n' +
        '城外那群人，一万多，赤脚，一圈一圈绕着我们的城墙走。Judean 7 月地面 35 度，他们脚底起泡。他们一边走一边念——Pater noster, qui es in caelis——我后来 20 岁那年遇到一个会拉丁语的修道士才知道这是"我们的父，在天上的——"\n\n' +
        '我那天想起一件事。我们 Surah Al-Fatiha（古兰经开篇第 1 章，7 句话）的第一句也是"赞美归主，众世界的主"——他们的祷告也在赞美主。\n\n' +
        '同一个主？不同的主？\n\n' +
        '我下不来房顶，一直坐到天黑，adhan 响时才回家。\n\n' +
        '7 月 10 日开始我们守军用 Greek fire（希腊火，一种泼上去烧不灭的火油武器）烧 Frangi 造的攻城塔，第一座烧成了。7 月 13 日他们造起第二座。\n\n' +
        '7 月 14 日傍晚，我跟 Hasan 在院子。无花果树的果子开始变紫、熟了，我摘一个给他，他咬一口红汁流出来。\n\n' +
        '突然，城南一声巨响，城墙塌了一段。我爸冲进院子，抓住我妈的手，用我从没听过的语气说："Layla——把孩子带到地窖。现在。"\n\n' +
        '我妈愣了 1 秒，抱起 Hasan，一只手抓我，把我们拽进铺子。\n\n' +
        '我爸没下来。他要看店。',
      en:
        'On the afternoon of July 8 I climbed onto the Souq roof again. This time Hovsep did not pull me up. I climbed alone. I wanted to see.\n\n' +
        'Outside the walls, more than ten thousand men, barefoot, walking circle after circle around our city. The ground in Judean July is thirty-five degrees Celsius. Their feet must have blistered. From the roof I could not see blood but I could imagine. As they walked they chanted — Pater noster, qui es in caelis — twenty years later I would meet a monk who knew Latin and learn that this meant "Our Father, who art in heaven."\n\n' +
        'That afternoon something occurred to me. The first line of Surah Al-Fatiha — the opening chapter of the Quran (the holy book of Islam), seven verses — also says al-hamdu lillahi rabbil alameen, "praise be to the Lord of all the worlds." Their prayer also praised the Lord.\n\n' +
        'The same Lord?\n\n' +
        'A different Lord?\n\n' +
        'I could not climb down. I sat there until dark. I came home only when adhan sounded.\n\n' +
        'Starting July 10, our defenders used Greek fire (a burning oil weapon — it cannot be put out with water — a Byzantine technology that the Fatimids had learned) to set fire to the wooden siege towers the Frangi had built. The first tower burned to ash. Black charred wood smoldered outside the walls all night.\n\n' +
        'July 13 — they built a second tower.\n\n' +
        'July 14, evening — I sat in the courtyard with Hasan. The figs on our tree had started to turn purple — ripening. I picked one and gave it to him. He bit into it and red juice ran down his chin.\n\n' +
        'Then — a huge sound from the south wall. A section had collapsed. My baba burst into the courtyard, grabbed my ummi\'s hand, and used a tone I had never heard from him: "Layla — take the children to the storage cellar. Now."\n\n' +
        'My ummi froze for one second. Then she scooped up Hasan, grabbed me, and pulled us into the shop.\n\n' +
        'My baba did not come down. He stayed to watch over the shop.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 12 岁——我看到 Frangi 也念祷告——我糊涂了——你接下来 3 天，我要进地窖——',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/07/14 夜 + 地窖躲藏',
    content: {
      cn:
        '我家铺子的地窖是储布的——一个 2 米深的地下室，木盖板上盖一层棉布看不出来。平时我跟 Hasan 在里面捉迷藏。\n\n' +
        '7 月 14 日傍晚我跟我妈、Hasan 三个人挤进去。地窖里堆着 30 多卷棉布——我爸春天从大马士革进的货——我们钻进棉布堆里。\n\n' +
        '盖板合上之前，我爸把头探进来，对我妈说了一句什么。我没听清，只听见最后一个词是"Aisha"，然后盖板合上了。我后来想了一辈子——那一句到底是什么。\n\n' +
        '楼上传来我爸的脚步声。他在搬什么，可能想堵门，可能在收钱，可能只是想让自己有事做。\n\n' +
        'Hasan 6 岁——他在棉布堆里抓我妈的衣袖——他的眼睛在地窖里发亮——我能看见。\n\n' +
        '过了多久，我不知道。可能 2 小时，可能 4 小时。楼上传来一个陌生的声音。\n\n' +
        '不是阿拉伯语。不是希腊语。是那种发硬的话——Pater Noster 那种话。\n\n' +
        '我爸的声音，他在说什么，慢。他可能在解释，他可能在跟人讨价还价。我那一刻 12 岁，我以为他在让对方拿铺子里的布走。\n\n' +
        '然后一个声音，我没法形容。是一个人喉咙里发出"咕"的声音，不长，半秒，然后没了。\n\n' +
        '楼上一片静。\n\n' +
        '我妈一只手堵住 Hasan 的嘴，另一只手抓我的手。她的手在抖，她没出声，她也没哭。\n\n' +
        '我那一刻以为我爸跟那个人达成了协议，以为他坐下来在数钱——\n\n' +
        '——我那一刻还不知道已经发生了什么。',
      en:
        'The cellar in my baba\'s shop was for storing cloth — a small underground room about two meters deep, with a wooden lid covered by a layer of cotton so it could not be seen from above. In ordinary times I played hide-and-seek with Hasan down there.\n\n' +
        'On the evening of July 14, the three of us — me, my ummi, Hasan — squeezed in. The cellar held thirty-some rolls of cotton cloth my baba had bought from Damascus that spring. We burrowed into the cloth pile.\n\n' +
        'Before the lid came down — my baba pushed his head through and said something to my ummi. I could not catch all of it. The last word I heard was "Aisha." Then the lid closed. I have spent the rest of my life wondering what that one sentence was.\n\n' +
        'Above us — my baba\'s footsteps. He was moving something. Maybe trying to block the door. Maybe gathering coins. Maybe just trying to keep himself busy.\n\n' +
        'Hasan, six, clutched my ummi\'s sleeve. His eyes were bright in the dark. I could see them.\n\n' +
        'I do not know how long passed — two hours, four hours — and then a strange voice came from upstairs.\n\n' +
        'Not Arabic. Not Greek. The hard language. The Pater Noster language.\n\n' +
        'My baba\'s voice was slow. He might have been explaining something, he might have been bargaining. I was twelve and I thought he was telling the person to take the cloth and leave.\n\n' +
        'Then a sound, I cannot describe it. A "huh" from inside someone\'s throat, half a second, and then it was gone.\n\n' +
        'Silence upstairs.\n\n' +
        'My ummi clamped one hand over Hasan\'s mouth and gripped my hand with the other. Her hand was shaking. She did not make a sound. She did not cry.\n\n' +
        'In that moment, I thought my baba had reached an agreement with the man. I thought he had sat down to count the money.\n\n' +
        'I did not know yet — what had already happened.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 12 岁躲在棉布堆里——我以为我爸在讨价还价——我不知道——你听见那一声"咕"了吗',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/07/15-17 屠城 3 天 + 地窖煎熬',
    content: {
      cn:
        '7 月 15 日早上，光从盖板缝里漏进来一点点，我才知道是天亮了。我们 3 个还在棉布堆里。\n\n' +
        '我妈用气声跟我说："念 Surah Al-Fatiha——别出声——念。"\n\n' +
        '我闭眼念第一句——Bismi-llāhi r-raḥmāni r-raḥīm——奉至仁至慈的主之名——\n\n' +
        '念到第三句的时候——楼上来了脚步声。\n\n' +
        '不是我爸的步，重，靴子，三个人。他们说着 Pater Noster 那种话，在翻东西，撞翻一只箱子，又一只。然后走出去。\n\n' +
        '我屏住呼吸念完 7 句。\n\n' +
        '然后我从头再念。\n\n' +
        '7 月 15 日下午，脚步又来。这次只有 1 个，他翻棉布，离我们头顶 50 厘米。我能听见棉布卷被推开，他翻了 3 卷，我心里念"主啊别让他翻第 4 卷"。他翻第 4 卷时——突然外面有人喊他——他放下手走了。\n\n' +
        '我那 7 句念了几遍——我数不清——可能 30 遍——可能 50 遍。\n\n' +
        '7 月 16 日一整天，楼上没声音。\n\n' +
        '7 月 17 日早上，又来一波脚步。这次他们没翻棉布，他们只是走过。靴子上有什么湿的拖痕，我从棉布缝里看不见但我闻到，是铁味，是血。\n\n' +
        'Hasan 哭了一次，我妈用棉布堵他嘴，他咬住没出声。他 6 岁，他咬棉布的时候眼泪从他眼角流到我手上——温的。\n\n' +
        '7 月 17 日傍晚，我妈在我耳边说："明天早上听不见声音，我们就出去。"',
      en:
        'July 15, morning — a thin line of light came through a crack in the lid. That was how I knew it was day. The three of us were still in the cotton.\n\n' +
        'My ummi whispered to me: "Recite Surah Al-Fatiha. Silent. In your head."\n\n' +
        'I closed my eyes and recited the first verse — Bismi-llāhi r-raḥmāni r-raḥīm — "In the name of God, the most gracious, the most merciful" —\n\n' +
        'On the third verse — footsteps came.\n\n' +
        'Not my baba\'s steps. Heavy. Boots. Three men. They were speaking the Pater Noster language. They were going through the shop, knocking things over — a chest, then another. They walked out.\n\n' +
        'I held my breath and finished the seven verses.\n\n' +
        'Then I started again from the beginning.\n\n' +
        'July 15, afternoon, footsteps again. This time only one man. He moved the cotton rolls. Fifty centimeters above our heads, I could hear each roll being shoved aside. He shifted three rolls. I prayed in my head — "God, do not let him touch the fourth" — when he reached the fourth, someone shouted from outside. He put it down and left.\n\n' +
        'How many times did I recite the seven verses? I lost count. Maybe thirty. Maybe fifty.\n\n' +
        'July 16 — the whole day, no sound from above.\n\n' +
        'July 17, morning — another set of boots. They did not move the cotton this time. They just walked through. Their boots dragged something wet. I could not see it through the cloth, but I could smell it. Iron. Blood.\n\n' +
        'Hasan cried once. My ummi pushed cotton into his mouth. He bit it and made no sound. He was six. As he bit the cotton, tears ran down his cheek onto my hand — warm.\n\n' +
        'On the evening of July 17, my ummi whispered into my ear: "Tomorrow morning, if there is no sound — we go out."',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我念了 30 遍 Surah Al-Fatiha——我妈堵 Hasan 的嘴——明天我们要爬出来——',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/07/18 第 4 天 + 父亲尸体',
    content: {
      cn:
        '7 月 18 日清晨——adhan 没响。\n\n' +
        '我那时候才 12 岁。我每天早上是被 adhan 叫醒的，12 年了，它没响。我一开始以为是我聋了。\n\n' +
        '我妈推开盖板，光涌进来。我眼睛不适应，我从棉布堆里爬出来。铺子里——\n\n' +
        '我第一眼看见的是——\n\n' +
        '我爸的尸体，在棉布堆旁边，脸朝下。他的背后被劈开，一道很长的口子，从左肩到右腰，血已经干了变黑。但我看见的不是那个——\n\n' +
        '我看见的是——他左手还握着一卷红布——\n\n' +
        '那卷红布是我去年帮他从大马士革进货那批里，我喜欢颜色，我说："Baba 这卷留着——以后我嫁人当嫁衣。"他笑了，他说"留着"，然后他把这一卷搁在铺子最里面架子上——\n\n' +
        '——他临死那一刻抓的是这一卷。\n\n' +
        '我没哭。我那一刻 12 岁，我没哭，我只是站着。我妈跪下，她也没哭，她已经没声音了。\n\n' +
        'Hasan 6 岁，他爬到我爸身上，他不肯起来。他抓我爸的胳膊，他想叫"Baba"但他叫不出来。他衣袖上溅了血，是我爸的——\n\n' +
        '过了多久我不知道。我妈站起来，她轻轻把 Hasan 抱开，她说："Aisha——我们必须走。城里还有兵。"\n\n' +
        '我那一刻第一次问出一个问题——"姨妈呢——Khadija 姨妈呢——Fatima 表妹呢？"\n\n' +
        '我妈没回答。\n\n' +
        '我们走出铺子——Souq 里——我从那一刻开始——再也不是那个 12 岁的女孩。',
      en:
        'July 18, dawn — there was no adhan.\n\n' +
        'I was twelve. Every morning of my life — twelve years — adhan had woken me. It did not sound. At first I thought I had gone deaf.\n\n' +
        'My ummi pushed the lid open. Light flooded in. My eyes did not adjust at first. I climbed out of the cotton. In the shop —\n\n' +
        'The first thing I saw was —\n\n' +
        'My baba\'s body. Beside the cotton pile. Face down. His back was cut open — one long wound — from left shoulder to right hip. The blood had dried black. But what I saw was not the wound —\n\n' +
        'What I saw was — his left hand still gripped a roll of red cloth.\n\n' +
        'That roll of red — last year when I helped him sort the Damascus shipment, I had liked the color. I had said: "Baba — keep this one. When I get married, I want it for my wedding dress." He had laughed and said "I will keep it." Then he placed that one roll on the highest shelf at the back of the shop.\n\n' +
        'In his last moment — that was the roll he had grabbed.\n\n' +
        'I did not cry. I was twelve and I did not cry. I just stood. My ummi knelt down. She did not cry either. Her voice was already gone.\n\n' +
        'Hasan, six, climbed onto my baba\'s body and would not get off. He grabbed my baba\'s arm. He tried to call "Baba" but could not get the word out. His sleeve was spattered with blood — my baba\'s blood.\n\n' +
        'How long passed? I do not know. My ummi stood, lifted Hasan gently away, and said: "Aisha — we must go. There are still soldiers in the city."\n\n' +
        'I asked my first question — "Ummi — what about khala Khadija? What about cousin Fatima?"\n\n' +
        'My ummi did not answer.\n\n' +
        'We walked out of the shop. Into the Souq. From that moment on — I was no longer the twelve-year-old girl I had been the morning before.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我爸临死抓的是我未来婚嫁那卷红布——我没哭——我妈说我们必须走——',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 街上场景 + Hovsep + Khadija 红头巾',
    content: {
      cn:
        'Souq 里——我不能描写得很细。我那一刻 12 岁，看见的不是细节，是地上一片接一片的人，有的我认识。\n\n' +
        '左边铁匠铺，Sarkis 一家四口都倒在炉子边：Sarkis、他老婆、Hovsep 11 岁、8 岁的妹妹。Hovsep 临死那刻可能想喊"我们是基督徒——亚美尼亚正教"。但 Frangi 兵没听过这个区分，他们只看衣服，亚美尼亚正教的袍子跟穆斯林的在他们眼里一样。\n\n' +
        '3 个礼拜前我跟 Hovsep 在房顶看 Frangi，他指着说"看"。他不知道，他看见的是杀他的人——而杀他的人也是基督徒。基督徒杀基督徒。同一个词，两个意思。我从那天起，再也不信"我们和他们"是稳定的边界。\n\n' +
        '我们走到 Souq 入口那棵公用无花果树下——我妈突然跪下——\n\n' +
        'Khadija 姨妈被劈死在树下，怀里 1 岁的 Fatima 也死了。她头上还戴着那条红头巾，我去年织的、线脚不齐的那条——上面现在多了一片更深的红，是她自己的血。\n\n' +
        '我妈抱住 Khadija，终于发出第一个声音。不是哭，是我不认识的声音。\n\n' +
        '我那一刻才意识到：杀 Khadija 的人，可能就是 7 月 14 日杀我爸那批人里的某一个。他从这棵树下走过时，只看到一条红头巾。他没看到我的姨妈，没看到 Fatima 表妹，没看到这头巾是我去年织的——但我看到了。',
      en:
        'In the Souq —\n\n' +
        'I cannot describe it in detail. I was twelve. What I saw was not detail. What I saw was the ground — patch after patch — people — some I knew, some I did not.\n\n' +
        'The blacksmith\'s on the left, Sarkis\'s family of four: Sarkis, his wife, Hovsep at eleven, Hovsep\'s eight-year-old sister, all lying around the forge. Hovsep\'s mouth was half-open. In his last moment he might have tried to shout, "We are Christians — Armenian Christians." But the Frangi soldiers had never heard of that distinction. They looked only at clothing. To them, an Armenian Christian robe and a Muslim robe looked the same. They did not separate.\n\n' +
        'In that moment my understanding of the word "Christian" changed forever —\n\n' +
        'Three weeks earlier, Hovsep and I had stood on the Souq roof watching the Frangi. He had pointed first and said "Look." He did not know — he was looking at the people who would kill him —\n\n' +
        'And those people were also Christians.\n\n' +
        'Christians killing Christians. Same word. Two meanings. From that day on, I never again believed "us and them" was a stable boundary.\n\n' +
        'We reached the entrance of the Souq al-Qattanin. There was a fig tree there — not the one in our courtyard, the public one at the market entrance. Under the tree —\n\n' +
        'My ummi stopped. She suddenly knelt.\n\n' +
        'Khala Khadija. She had been cut down beneath the tree. Fatima, one year old, in her arms — also dead. Khadija had tried to escape the market that morning. Her path took her past this tree —\n\n' +
        'I saw —\n\n' +
        'She still had the red headscarf on her head. The one I had woven last year. The one with the uneven stitches.\n\n' +
        'There was a deeper red on the red — her own blood.\n\n' +
        'My ummi held Khadija and finally let out a sound. Not a cry. A sound I did not recognize.\n\n' +
        'I was twelve. I stood between my ummi and my khala. And I understood —\n\n' +
        'The man who killed Khadija — he might have been one of the men who climbed into my baba\'s shop on July 14. When he passed under this tree, he saw only a red headscarf. He did not see my khala. He did not see my cousin Fatima. He did not see that this headscarf was something I had woven last year.\n\n' +
        'But I saw it.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Hovsep 11 岁——基督徒杀基督徒——我姨妈红头巾上的那一片更深的红——',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/07/22 分赃 + 逃 Ascalon',
    content: {
      cn:
        '7 月 22 日。我们在 Souq 边巷蜷了 4 天，靠地窖里剩的水跟一点干馕。\n\n' +
        '那天 Frangi 头领（我后来知道是 Raymond，南法那个独眼伯爵）的人挨家敲门，把活下来的房子和店分给 Frangi 兵——我们那条巷也分。\n\n' +
        '一个 Frangi 兵，大概 25 岁，胸口缝着一块红布十字架。他打开我家铺子门，看见我爸的尸体，没说什么，指着我们比手势："出去——这铺子是我的了。"\n\n' +
        '他没杀我们。为什么？因为分给他的是铺子，不是命；也因为屠城已过 7 天，他们的领袖下令"够了"；也因为，也许，他这一刻看着我们突然意识到了什么——但我没问。\n\n' +
        '我们带的全部：一只羊皮水袋、一块干馕、我爸自己抄的《古兰经》节录，还有我胸前那条没织完、本来要给 Maryam 当 13 岁生日礼物的小蓝头巾。\n\n' +
        '我妈说："去 Ascalon——你 Auntie Hadeel 在那儿——3 天路。"\n\n' +
        '我们走出耶路撒冷东门，回头看一眼——城墙后面冒着黑烟，是他们烧 Synagogue（犹太会堂）那一波，里面 Yakov 一家也死了，但我那一刻不知道。我家院子那棵无花果树还在，我没回去摘最后一颗果子——也再没机会了。\n\n' +
        '3 天后我们到 Ascalon。Auntie Hadeel 看见我们，跪下哭了一整夜。我妈那夜没哭，她已经没那能力了。',
      en:
        'July 22 — we had been hiding in a side alley for four days, surviving on water from the cellar and a little dry bread.\n\n' +
        'That day Count Raymond\'s men (the one-eyed southern French count, distributing the spoils to his troops) came through. They knocked on every door. They were dividing the surviving houses and shops of Jerusalem among the Frangi soldiers.\n\n' +
        'Our alley was on the list.\n\n' +
        'A Frangi soldier, about twenty-five, with a red cloth cross stitched onto his chest, opened the door of my baba\'s shop. He saw my baba\'s body. He did not say anything. He pointed at my ummi, at me, at Hasan. He gestured: "Out. This shop — is mine now."\n\n' +
        'He did not kill us.\n\n' +
        'Why?\n\n' +
        'Because what was given to him was the shop, not our lives.\n\n' +
        'Because seven days had passed since the killing began, and their leaders had ordered "enough."\n\n' +
        'And maybe — maybe — in that moment, looking at my ummi, at Hasan, at me, something occurred to him —\n\n' +
        'But I did not ask. I was twelve. I only wanted my ummi to take me and Hasan out the door.\n\n' +
        'What we carried — one waterskin, a piece of dry bread, my baba\'s hand-copied excerpt from Surah Al-Baqarah (the second chapter of the Quran) that he kept by his bed — and the small blue headscarf I had been weaving for Maryam\'s thirteenth birthday, never finished.\n\n' +
        'My ummi said: "Ascalon. Aunt Hadeel is there. Three days\' walk."\n\n' +
        'We walked out of Jerusalem\'s east gate. I looked back once.\n\n' +
        'Black smoke rose from inside the walls — they were burning the synagogue with the Jews still inside. Yakov\'s family was in there too. I did not know that yet.\n\n' +
        'The fig tree in our courtyard was still standing. I had not picked the last fig.\n\n' +
        'I would never have the chance again.\n\n' +
        'Three days later we reached Ascalon (a port city on the Mediterranean coast, still under Fatimid Muslim control). Aunt Hadeel saw the three of us, knelt, and cried — she cried all night. My ummi did not cry that night. She no longer had it in her.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我们逃出耶路撒冷东门——回头看一眼——黑烟——我再也没回去——',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis（真 Socratic）═════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§7 DBQ + §10 误解 + §6 长尾',
    content: {
      cn:
        '你刚扮演了 12 岁的 Aisha——躲在地窖、念了 30 遍 Surah Al-Fatiha、爬出去看见父亲尸体和姨妈红头巾、逃到 Ascalon。\n\n' +
        '现在暂停一下——回头看 1099 年 7 月那 3 天，对 12 岁的 Aisha 它到底是什么？历史学家有两种真实并立的看法。\n\n' +
        '**一种看法——这是"她个人的灾难"**：从内部看，她爸死了、姨妈死了、邻居 Hovsep 死了。一个家被毁，一个 12 岁的童年被切断，她从此每周做梦，人生从这 3 天起变成"幸存者的人生"。这是属于她的悲剧，具体到一卷红布、一条头巾、一棵无花果树。有的历史学家专门研究这种"一个人"的创伤。\n\n' +
        '**另一种看法——这是"文明的撕裂"**：从外面看，那 3 天，拉丁基督教第一次撕开了东方基督教和穆斯林之间脆弱的共存。这条巷里同住 80 年的三家——穆斯林、亚美尼亚正教基督徒、犹太人——一夜之间成了"不同阵营"，拉丁兵分不清，一律杀。这一撕，是后面 200 年地中海东岸暴力的种子。有的历史学家专门看这种"几百年"的结构性后果。\n\n' +
        '两边都有真证据。Aisha 自己只感受得到第一种；历史学家从 900 年后能看到第二种的轮廓，却没经历过第一种。\n\n' +
        '哪一个更"真"？或者两边都真——你读完 Aisha，更靠近哪一种？想 30 秒。',
      en:
        'You have just played twelve-year-old Aisha — hiding in the cellar, reciting Surah Al-Fatiha thirty times, climbing out to find your father\'s body, seeing your aunt\'s red headscarf under the fig tree, walking with your mother and brother to Ascalon.\n\n' +
        'Now pause — and look back at those three days, July 15 to 17, 1099. For twelve-year-old Aisha, what was it? Historians hold two genuinely opposed views.\n\n' +
        '**One view — it was "her personal catastrophe."** From Aisha\'s inside view: her father killed, her aunt killed, her neighbor Hovsep killed. One family destroyed. One twelve-year-old childhood cut. From that week on, she would dream every night for the rest of her life. Her life became, from that point, "a survivor\'s life." This was her tragedy — specific to one roll of red cloth, one headscarf, one fig tree. Some historians study exactly this kind of "one person" trauma.\n\n' +
        '**Another view — it was "civilizational rupture."** From the outside: in those three days, Latin Christianity tore open for the first time the fragile coexistence between Eastern Christians and Muslims. The three houses on the Souq al-Qattanin alley — Muslim, Armenian Christian, Jewish — had shared it for eighty years. Overnight, in Latin eyes, they became "different sides," and Latin soldiers could not tell them apart, so all three were killed. That rupture became the seed of two hundred years of violence along the eastern Mediterranean. Some historians study exactly this kind of "centuries-long" structural aftermath.\n\n' +
        'Both have real evidence. Aisha herself feels only the first; she does not know what the second is. Historians 900 years later can see the shape of the second, but they never lived through the first.\n\n' +
        'Which is more "true"? Or are they both true — and which one feels closer to you, after walking through Aisha\'s lens? Take thirty seconds.',
    },
    deliverGoal:
      '你刚扮演了 Aisha——12 岁——经历了她家被毁、父亲死、姨妈死、Hovsep 死——' +
      '历史学家对这 3 天有**两种真实并立**的解读：' +
      '**一种说法（micro-history 个人灾难）**：一个家被毁——一个 12 岁童年被切断——这是 Aisha 自己感受到的。' +
      '**另一种说法（longue durée 文明撕裂）**：拉丁基督教第一次撕开东方基督教 + 穆斯林共存——后面 200 年暴力的种子。' +
      'Aisha 自己只感受得到 A——历史学家从外面看到 B——哪一个更"真"？',
    engagementHook:
      '**你怎么看**——1099 那 3 天，是 Aisha 的**个人灾难**（一个家被毁），还是**文明撕裂**（80 年共存被一夜撕开 → 后面 200 年的种子）？或者两边都真——你更靠近哪一边？想 30 秒',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§4 1187 Saladin 重夺耶路撒冷 + Aisha 一家不回去',
    content: {
      cn:
        '现在跳到 88 年后。\n\n' +
        '1187 年 10 月 2 日，库尔德苏丹 Saladin（萨拉丁，50 岁）从十字军手里**重新夺回**耶路撒冷——他**没屠城**。他让基督徒付赎金离开，付不起的 8000-15000 人变奴隶，但没像 1099 那样杀光，还把孤儿老弱免费放走。\n\n' +
        'Aisha 那年若还活着已 100 岁——不可能，她其实 1140 年代就在 Ascalon 死了。但她的孙女 Yasmin 那年 17 岁。Yasmin 没去过耶路撒冷。她听说 Saladin 重夺了城，耶路撒冷又是穆斯林的了——但她家没回去。\n\n' +
        '为什么？历史学家有 3 种解释：\n\n' +
        '**(A) 物理回不去**：家毁了，亲人埋在 Souq 底下。他们已在 Ascalon 扎根 3 代，拔不起。\n\n' +
        '**(B) 心理回不去**：耶路撒冷不再是 Aisha 12 岁那个有无花果树的地方了，回去只是站在创伤现场。Aisha 临死前嘱咐儿子："别回。让孩子记得我，但别让他们站在那里。"\n\n' +
        '**(C) 历史回不去**：88 年里那条巷早换了 5 茬居民，Sarkis、Yakov 两家都死了。Yasmin 就算回去，巷里再没一个她曾祖母认识的人。Saladin 重夺只能让"地"回到穆斯林手里——回不到那条"巷"。\n\n' +
        '哪一种"回不去"最深？想 30 秒',
      en:
        'Now jump forward 88 years.\n\n' +
        'On October 2, 1187, a Kurdish sultan named Saladin (Salah ad-Din, age 50) **retook** Jerusalem from the Crusaders — and **did not massacre the city**. He let Christians leave on payment of ransom; about eight to fifteen thousand who could not pay became slaves. But he did not kill them all the way the Frangi had in 1099. He did three things: he released orphans, the elderly, and the weak for free; he discounted ransom for noble women; and he protected the Christian right of pilgrimage.\n\n' +
        'If Aisha had been alive in 1187 she would have been 100 — impossible by 11th-century life expectancy; in our story she died in Ascalon in the 1140s. But her granddaughter Yasmin was 17.\n\n' +
        'Yasmin had never been to Jerusalem. In October 1187 she heard the news — Saladin had retaken the city, Jerusalem was Muslim again — but her family did not go back.\n\n' +
        'Why? Historians offer three explanations for "why a traumatized family does not return to its homeland" —\n\n' +
        '**(A) They cannot return physically.** The home was destroyed. The shop had been held by that one Frangi soldier and changed hands many times over 88 years. Family members were buried under the Souq. Rebuilding would cost money and time, and they had been rooted in Ascalon for three generations — they could not be pulled up.\n\n' +
        '**(B) They cannot return psychologically.** Jerusalem is no longer the place with a fig tree from twelve-year-old Aisha\'s memory. To return is to face the scene of the trauma — to make Yasmin stand on the spot where her great-grandfather was cut down. On her deathbed Aisha had told her son Hasan: "Do not return. Let your children remember me, but do not let them stand there."\n\n' +
        '**(C) They cannot return historically.** 1187 is not the year before 1099. In those 88 years the alley had changed inhabitants five times. Sarkis\'s family had died. Yakov\'s family had died. Even if Yasmin returned, there was no one left in that alley her great-grandmother had known. Saladin\'s retaking could put the land back in Muslim hands, but it could not put the alley back the way it was.\n\n' +
        'Which kind of "cannot return" is the deepest? Take thirty seconds.',
    },
    deliverGoal:
      '88 年后 Saladin 重夺耶路撒冷——没屠城——但 Aisha 一家**没回去**——' +
      '为什么？历史学家有 3 种解释：' +
      '**(A) 物理回不去**——家毁了，亲人埋了，已在 Ascalon 扎根 3 代。' +
      '**(B) 心理回不去**——耶路撒冷不再是无花果树那个地方——回去等于站在创伤现场。' +
      '**(C) 历史回不去**——88 年间"三家共住"的那个世界本身已经死了——地能回，巷回不去。' +
      '——哪一种"回不去"最深？',
    engagementHook:
      'Aisha 一家 88 年后 Saladin 重夺耶路撒冷也没回去——是物理（家毁了）、心理（创伤）、还是历史（那个世界本身死了）回不去最深？先在心里想想你怎么看，下一节我会正式问你。',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: false,
  },
  // ═════ Meta（反思 + 桥）═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    content: {
      cn:
        '你刚从 Aisha 12 岁的内部走了一遍——\n\n' +
        '她在无花果树下问她爸"Frangi 是什么"那一刻——\n' +
        '她在 Souq 房顶问"他们也信主？"那一刻——\n' +
        '她在地窖里念第 30 遍 Surah Al-Fatiha 那一刻——\n' +
        '她爬出地窖看见父亲手里那卷红布的那一刻——\n' +
        '她在 Souq 入口看见姨妈头上那条她去年织的红头巾的那一刻——\n' +
        '她妈带她跟 Hasan 走出耶路撒冷东门、回头看一眼黑烟那一刻——\n' +
        '她孙女 Yasmin 17 岁那年没回耶路撒冷那一刻——\n\n' +
        '在你进入记忆考核之前，一个问题：\n\n' +
        '这一遍里，最让你停下来的瞬间是什么？\n\n' +
        '一句话告诉我就行。\n\n' +
        '——\n\n' +
        '另外，你或许已经发现了。你这一遍跟 Roger 那一遍是**同一件事的两面**：Roger 在他的第 7 节里看到的"红头巾"，那个名字叫 Khadija，那条头巾是 Aisha 织的。你这一遍知道了她有名字、有故事、有家人——\n\n' +
        '——这就是多视角学法的全部意义——\n\n' +
        '同一段历史，从两个人内部走过，会发现：他们俩的世界从来没真正"理解"对方。但你（800 年后的读者）现在两边都进过去了，你可以知道他们俩都不知道的事——\n\n' +
        '准备好了吗？接下来是记忆考核：拼写、定义、应用题。这是你把今天经历的，变成你真正会用的——最后一步。',
      en:
        'You have just walked through Aisha\'s inside, at twelve —\n\n' +
        'The moment she asked her baba, "What is a Frangi?" under the fig tree.\n' +
        'The moment on the Souq roof when she asked, "Baba — they pray to God too?"\n' +
        'The moment in the cellar when she recited Surah Al-Fatiha for the thirtieth time.\n' +
        'The moment she climbed out and saw her father\'s left hand still gripping the roll of red cloth.\n' +
        'The moment she saw her aunt\'s red headscarf — the one she had woven last year — under the fig tree at the Souq entrance.\n' +
        'The moment she walked out the east gate with her mother and brother and looked back once, at the black smoke.\n' +
        'The moment her granddaughter Yasmin, 88 years later at 17, did not return to Jerusalem.\n\n' +
        'Before you move into the mastery check, one question:\n\n' +
        'What was the moment in this lens that made you pause?\n\n' +
        'One line is enough.\n\n' +
        '—\n\n' +
        'One more thing — you may have noticed already — this lens is **the other side of the same event** as Roger\'s (lens 1). The "red headscarf" that Roger saw in his Section 7 — that woman had a name. Khadija. That headscarf was woven by Aisha. In this lens you learned she had a name, a story, a family.\n\n' +
        'That is the whole point of lens teaching.\n\n' +
        'The same history — walked through from the inside of two different people — and you discover: their two worlds never truly "understood" each other. But you, the reader 900 years later, have now been inside both. You can know things that neither of them knew.\n\n' +
        'Are you ready? The mastery check is next: spelling, definitions, application questions. This is the step that turns what you experienced today into something you actually own.',
    },
    deliverGoal:
      '你扮演了 Aisha 9 节——经历了她从围城前的 12 岁、到地窖 3 天、到逃 Ascalon——' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换视角重玩——比如 Roger（南法骑士施害方视角）或 Alexios（拜占庭皇帝外部旁观）——' +
      '——同一事件不同角度——会发现新东西——' +
      'Aisha 这一遍特别让你看到：**Roger 看到的"红头巾"——是有名字的人——Khadija——一条红头巾两个视角完成对位**',
    engagementHook:
      '走完 Aisha 这一遍——一个 12 岁女孩，地窖躲 3 天、爬出来看见父亲手里那卷红布、看见姨妈头上她亲手织的红头巾。你会怎么评价她经历的这件事？再想一步：88 年后 Saladin 重夺了城，她一家却没回去——你觉得是物理、心理、还是历史回不去最深？',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 3: Alexios I Komnenos（拜占庭皇帝 / 1094-1118 mediator 视角）
// ═══════════════════════════════════════════════════
//
// 角色设定：
//   - 1056 生于君士坦丁堡 Komnenos 家族（拜占庭老牌军事贵族）
//   - 1071 Manzikert 大败时他 23 岁——亲眼见皇帝 Romanos IV 被俘
//   - 1081 年 24 岁政变上位——接手帝国残骸 14 年五路苦战
//   - 1094 年 38 岁——给 Urban II 写求救信要"几千专业雇佣兵"
//   - 1096 年来的是 10 万乱军——他在君士坦丁堡蹲点把他们一拨拨送走
//   - 1097 Nicaea 偷偷接收城——逼 Bohemond 当面宣誓
//   - 1098 Antioch 8 月围城他没亲赴援军——这成了他被骂 900 年的"道德污点"
//   - 1099/07 Jerusalem 屠杀传到——他沉默两天——他知道东方基督徒也死在屠刀下
//   - 1118 年 8 月 15 日死，62 岁——Anna 在《Alexiad》写下父亲临终
//   - 1204 年——他的曾孙时代——第 4 次十字军反攻陷君士坦丁堡——他写信引来的力量最终毁了他的城
//
// 这个视角 是 "skilled insider trapped by larger forces" 视角（平行于 Stephen Langton 的 "lonely middle"）：
// 不浪漫化拜占庭权术，但让用户感受 — 一流的政治家、伟大的复兴者，
// 同时也是历史最大反讽的源头：他写的那封信，引来了 200 年后毁掉自己城市的力量
//
var alexiosStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§3 Alexios — 1095 年那封信',
    content: {
      cn:
'（先说清楚：史实是 1095 年 3 月，我派使团到意大利 Piacenza 的教廷会议当面口头求援，不是一封亲笔信。下面把那次求援演成第一人称场景。）\n\n' +
        '1094-95 年那个冬天，君士坦丁堡 Blachernae 宫，我 38 岁。窗外是博斯普鲁斯海峡的黑水，我反复推敲那条要送往 1500 公里外罗马、给教皇 Urban II 的口信。\n\n' +
        '开头是：来自上帝任命的罗马人皇帝（我们这样称呼自己——我们是真正东罗马的延续），给罗马教皇——基督在东方的兄弟们正在受苦。\n\n' +
        '然后是我真正想要的：**几千个专业兵**。我付钱，一年期，帮我从塞尔柱手里收复小亚细亚——那是我的农田、我的兵源地、我从小长大的地方。\n\n' +
        '我反复叮嘱使团强调一句：**只要专业军人**（milites），不要平民、修士、朝圣的农民。\n\n' +
        '我那一刻以为自己在做聪明事：用别人的力量解决我自己的问题。\n\n' +
        '我不知道——几个月后这条求援被 Urban II 放大、念给 Clermont 城外两千人听时，"几千专业军"会变成"全欧洲的基督徒都来"。\n\n' +
        '我是 Alexios I Komnenos，拜占庭皇帝。接下来 12 节，你跟我走 24 年——从这盏油灯下的夜，到我 1118 年闭眼那一刻，再到我闭眼之后 86 年发生的事。',
      en:
'(First, to be clear: the historical fact is that in March 1095 I sent an embassy to the Church council at Piacenza in Italy, asking for help out loud, in person — not a private letter in my own hand. What follows stages that appeal as a first-person scene.)\n\n' +
        'That winter of 1094-95, in the Blachernae Palace at Constantinople. I was thirty-eight.\n\n' +
        'Outside the window, the Bosphorus ran black. In my mind I turned over and over the message I would send fifteen hundred kilometers to Pope Urban II in Rome.\n\n' +
        'The opening ran like this: From the Emperor of the Romans appointed by God (this is what we called ourselves — we are the true continuation of the Eastern Roman Empire) — to the Bishop of Rome — the brothers of Christ in the East are suffering.\n\n' +
        'Then what I actually wanted: **a few thousand professional soldiers**. I would pay them. A one-year term. The task was to help me retake parts of Asia Minor (modern Turkey) from the Seljuk Turks — Asia Minor is where my farmland is, where my soldiers come from, where I grew up.\n\n' +
        'I pressed my envoys on one sentence: **professional men of arms only** — milites in the old Latin word. No civilians. No monks. No farmer-pilgrims.\n\n' +
        'In that moment I thought I was doing something clever. I was using another man\'s strength to solve my own problem — that is what a senior political mind does.\n\n' +
        'In that moment I did not know — a few months later, when Urban II magnified this appeal and read it aloud to two thousand people in a meadow outside Clermont, "a few thousand professionals" would become "every Christian in Europe, come east."\n\n' +
        'I am Alexios I Komnenos, the Byzantine emperor. Over the next twelve sections you will walk with me for twenty-four years — from this lamplit desk to the day I closed my eyes in 1118 — and then to what happened eighty-six years after I closed them.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我以为我在用别人的力量解决我自己的问题——你猜 4 年后我还会这么想吗？',
    expectedLength: '260-280 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§3 Alexios — 出身 + 1071 Manzikert + 1081 政变',
    content: {
      cn:
        '我得告诉你我怎么到 38 岁还坐在这盏油灯下。\n\n' +
        '1056 年我生在君士坦丁堡 Komnenos 家族——不是皇室，是一代代打仗换上来的军事贵族。我从小学的不是诗，是读地形、算兵粮、看人撒不撒谎。\n\n' +
        '我 14 岁那年——1071 年 8 月 26 日——拜占庭最黑的一天。皇帝 Romanos IV 带 4 万军在小亚细亚东部 Manzikert 跟塞尔柱苏丹 Alp Arslan 决战。\n\n' +
        '战败消息 9 月初到：皇帝**被俘**——罗马 1500 年里皇帝**第一次**被外族俘虏。4 万军溃散，小亚细亚 80% 一夜没了——那是我们的粮仓和兵源。\n\n' +
        '我 14 岁就懂了：帝国是会死的。它不是永远的山，是一根绷紧的绳，松一刻就断。\n\n' +
        '接下来 10 年我在军中爬。1081 年我 24 岁，皇帝 Nikephoros III 老态无能，5 个邻国（塞尔柱、诺曼、佩切涅格、保加利亚、阿拉伯）轮着打我们。我妈 Anna Dalassene 把家族所有筹码押上——我率军围城 4 天攻进君士坦丁堡，逼 Nikephoros 退位当修士。\n\n' +
        '4 月 4 日我在 Hagia Sophia（圣索菲亚大教堂）加冕，披紫袍戴金冠——脚下是一个看似要死的帝国。\n\n' +
        '接下来 14 年五路敌人轮着收拾，我活下来了。但我懂了：这位置永远在走钢丝。',
      en:
        'I have to tell you how I got to be thirty-eight, sitting under that oil lamp.\n\n' +
        'I was born in 1056 in Constantinople, into the Komnenos family — old Byzantine military nobility (not a royal house, but the kind of family that climbs by fighting, generation after generation). What I grew up learning was not poetry. It was: how to read terrain, how to calculate grain for soldiers, and how to tell when someone in front of you is lying.\n\n' +
        'When I was fourteen — August 26, 1071 — the worst day in Byzantine history happened.\n\n' +
        'Emperor Romanos IV Diogenes led forty thousand men against the Seljuk sultan Alp Arslan at a town called Manzikert in eastern Anatolia (today\'s eastern Turkey).\n\n' +
        'The news reached Constantinople in early September. The emperor had been **captured**. For the first time in fifteen hundred years of Roman history, an emperor was taken alive by a foreign power. Forty thousand men shattered. Eighty percent of Asia Minor lost in one night — our grain, our soldiers, our spiritual heart.\n\n' +
        'I was fourteen, and overnight I understood one thing. Empires can die. An empire is not an eternal mountain. It is a rope pulled tight. Slack it for one moment, and it snaps.\n\n' +
        'For the next ten years I climbed through the army. In 1081 I was twenty-four. Emperor Nikephoros III was old and useless. Five neighbors — Seljuk Turks, Normans from southern Italy, Pecheneg nomads on the Danube, Bulgars, Arab raiders — were taking turns at us. My mother Anna Dalassene put every chip the family had on the table. I led an army around Constantinople for four days, broke in, and forced Nikephoros to step down to a monastery.\n\n' +
        'On April 4, 1081, I was crowned in Hagia Sophia (the Church of Holy Wisdom). I wore a purple robe (the color reserved for Byzantine royalty) and the gold diadem. Beneath my feet was an empire that looked finished.\n\n' +
        'For the next fourteen years I fought five enemies in rotation. I lived. But I learned one thing: my chair was a tightrope. Always.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '14 年我学会了走钢丝——下一节，1095 年那 10 万人来了。我的钢丝绳粗细要变了。',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§4 1096 People\'s Crusade + Civetot',
    content: {
      cn:
        '我那次求援 1095 年 3 月送到 Piacenza，8 个月后 Urban II 才在 Clermont 演说——这些我当时都不知道，两边隔着两个月的传递。\n\n' +
        '我**第一次知道事情走样**是 1096 年 5 月底：一群人穿过匈牙利往君士坦丁堡走，**3 万人**——只有 3000 骑兵，其余是步行的农民、妇女、孩子。带头的是法国修士 **Peter the Hermit**（隐士彼得），蓬头垢面，讲话却能让 3 万人哭。\n\n' +
        '我要的是几千专业军——来的是 3 万半饥半疯的人。\n\n' +
        '我做了三件事。一：派 600 骑兵**护送**、给食物，盯着别让他们抢拜占庭村庄（他们已烧过城镇 Niš）。二：8 月 1 日他们到城外，我**不让进城**，亲自接见 Peter，劝他等贵族军到再过海。三：他不听，8 月 6 日坚持过博斯普鲁斯，我便用船渡他们去亚洲，叮嘱别进内陆。\n\n' +
        '他们没听。10 月 21 日，内陆 60 公里的 Civetot，塞尔柱苏丹 Kilij Arslan 的骑兵伏击：**3 万人里 27000 死**，剩 3000 退回海岸。\n\n' +
        '那天塞尔柱送来一封信，讽刺："你的基督徒朋友躺在 Civetot 平原上——要收尸吗？"\n\n' +
        '我那一刻想的是——**这只是第一波。明年春天第二波来，是 5 万贵族军。**',
      en:
        'My appeal reached Piacenza in March 1095. Eight months later Urban II preached at Clermont. None of that did I see in real time — between Byzantium and the Latin world there was always a two-month delay.\n\n' +
        'I first learned things had gone sideways at the end of May 1096. A report came in from the Balkans: a group of people was crossing Hungary, walking toward Constantinople. **Thirty thousand of them.** About three thousand were mounted soldiers; the rest were farmers on foot — women, children. The man leading them was a French monk named **Peter the Hermit** — wild-haired, but able to speak in a way that made thirty thousand people weep.\n\n' +
        'I had asked for a few thousand professionals. What was coming was thirty thousand half-starved, half-mad civilians.\n\n' +
        'I did three things.\n\n' +
        'First: I sent six hundred Byzantine cavalry as an **escort** — handing out food while watching to make sure the marchers did not loot Byzantine villages (they had already burned a town called Niš).\n\n' +
        'Second: on August 1, the marchers reached the walls. I did not let them inside; they camped outside. I received Peter once, and gave him advice: "Wait. The noble army is coming. Cross with them."\n\n' +
        'Third: he did not wait. On August 6 he insisted on crossing the Bosphorus. I could not detain thirty thousand Christian pilgrims — so I gave them ships to cross to the Asian side, and told them: "Stay near the coast. Do not go inland."\n\n' +
        'They did not listen. On October 21, at Civetot, sixty kilometers inland, the Seljuk sultan Kilij Arslan ambushed them with cavalry. **Twenty-seven thousand of the thirty thousand died.** Three thousand fell back to the coast.\n\n' +
        'That afternoon a letter arrived from the Seljuks. The tone was polite, the words cruel: "Your Christian friends are lying on the plain at Civetot. Would you like to send men to collect the bodies?"\n\n' +
        'What I thought in that moment: this is only the first wave. The second comes next spring. Fifty thousand noble warriors.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Civetot 那 27000 人——大半是农民妇女和孩子——他们死的时候我离他们 80 公里。下一节，第二波来了。',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§3 Bohemond + §4 1096 秋-1097 春 Princes\' Crusade',
    content: {
      cn:
        '1096 年 11 月到 1097 年 4 月，是我最累的 6 个月。8 路贵族军前后到城，我得**一个一个**逼宣誓：任何收复的旧拜占庭领土必须还给我。\n\n' +
        'Hugh of Vermandois（法王弟弟）11 月先到，落汤鸡似的，最好签。Godfrey of Bouillon 带 4 万人 12 月到，撂下"我只对上帝低头"，我封锁食物，4 月他撑不住签了。Raymond IV（8000 南法军、独眼老贵族）4 月底到，耗两周我让步收下。\n\n' +
        '但有一个人我从一开始就**怕看见**：**Bohemond of Taranto**，意大利南部诺曼人，43 岁。15 年前他爸 Robert Guiscard 在 Dyrrachium **打败过我**——那天 Bohemond 带骑兵在前刺死我两个亲信，那张脸我记一辈子。\n\n' +
        '4 月初他来了。我让他**驻城外**，亲自接见——我披紫袍坐金 throne。Bohemond 单膝下跪，那份**装出来的恭顺**比真恭顺还熟练。我知道他在装，他也知道我知道这誓他迟早要违——但今天他要门开、我要他过海，于是念誓、签字、把双头鹰印压进红蜡，一起演完。\n\n' +
        '那晚我对母亲 Anna Dalassene 说："我把这只狼送过海了，希望塞尔柱比我先咬到他。"',
      en:
        'November 1096 to April 1097 — the six most exhausting months I ever spent. Eight separate noble armies arrived at Constantinople in waves. I had to force each one, one at a time, to swear: any old Byzantine territory you reconquer, you give back to me.\n\n' +
        'Hugh of Vermandois — King Philip of France\'s brother — came first in November, dripping from a shipwreck; easiest to sign. Godfrey of Bouillon — forty thousand men — arrived in December, refused, said "I bow only to God"; I cut his food supply, and by April he swore. Raymond IV — eight thousand southern French, one-eyed old noble — arrived late April; two weeks of haggling, and I conceded.\n\n' +
        'But there was one man I had dreaded from the start: **Bohemond of Taranto**, a Norman from southern Italy, forty-three. Fifteen years earlier his father Robert Guiscard had **defeated me** at Dyrrachium — that day Bohemond rode in the front cavalry and personally killed two of my friends. I have never forgotten his face.\n\n' +
        'In early April he arrived. I lodged him **outside** the walls and received him in person — I in the purple robe, on the gold throne. Bohemond went down on one knee, and **the fake humility was practiced more carefully than real humility would have been.** I knew he was acting. He knew I knew this oath was one he would break someday. But today he needed the door across the Bosphorus open, and I needed him across the water — so he recited the words, signed, and pressed my double-headed-eagle seal into red wax. We performed the scene together.\n\n' +
        'That evening I told my mother Anna Dalassene: "I have sent that wolf across the sea. I hope the Seljuks bite him before he bites me."',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Bohemond 单膝跪在我面前那一刻——我们两个人都在演戏。下一节是 Nicaea——我演得最好的一次。',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§4 1097/05-06 Nicaea 围城',
    content: {
      cn:
        '1097 年 5 月，十字军已过海，5 万人围在 Nicaea 城外。\n\n' +
        'Nicaea（今土耳其 İznik）对我意味很深：325 年第一次基督教大公会议在那里定下三位一体教义。1071 Manzikert 大败后塞尔柱占了它当 Rum 苏丹国都，**26 年来我们没拿回来过**。城墙北边贴着大湖，围城**只能围三面**，粮食能从湖上船运进来。\n\n' +
        '我做了一件十字军不知道的事。5 月底我派海军大将 **Manuel Boutoumites** 乘小船从湖面进城，见守城官的母亲（苏丹 Kilij Arslan 正在东部打另一突厥派）传话："投降给我——你们活，家产保留，礼仪送出城；投降给十字军，没人活着。"\n\n' +
        '**守城官的母亲选了第一个。**\n\n' +
        '6 月 19 日清晨，十字军以为今天能爬墙，抬头一看——**城墙上挂着拜占庭的双头鹰旗**。城已经在我手里了。围 5 周，我**用一封信、一艘船、几句话**拿了城。\n\n' +
        '我按拜占庭传统**没屠城**：5000 守军和家属礼仪送往内陆，城内基督徒解放，清真寺重做回教堂。\n\n' +
        '我那天庆祝，但心里清楚：十字军里已有人跟 Bohemond 交头接耳——"Alexios 偷了我们的 Nicaea，下个城他还要偷。"我赢了第一城，也开了**第一道裂痕**。',
      en:
        'May 1097. The crusaders had crossed the sea. Fifty thousand of them now sat outside the walls of Nicaea.\n\n' +
        'Let me explain what Nicaea (today the Turkish town of İznik) meant to me. In 325 the First Council of the Christian Church met there — the doctrine of the Trinity was fixed there. It was one of the older Byzantine capitals. After Manzikert in 1071, the Seljuks took it and made it the capital of their Rum Sultanate. **For twenty-six years we had not got it back.**\n\n' +
        'Walls five kilometers long, two hundred forty towers, and on the north side a large lake (Lake Ascania) — meaning the city could only be besieged on three sides, and food could still come in by boat.\n\n' +
        'I did one thing the crusaders did not know about. In late May I sent **Manuel Boutoumites**, my grand admiral, by small boat across the lake into Nicaea, straight to the mother of the Seljuk sultan (Kilij Arslan himself was off in eastern Anatolia fighting another Turkish faction). Manuel carried one message:\n\n' +
        '"Surrender to me — and you live. Your property is kept, your people leave under formal escort. Surrender to the crusaders, and they do what they did at the towns on the way (Antioch had not happened yet, but their small massacres were already known here). No one walks out alive."\n\n' +
        '**The sultan\'s mother chose the first.**\n\n' +
        'On the morning of June 19 the crusaders woke thinking they would scale the walls that day. They looked up — the Byzantine **double-headed eagle** was already flying from the towers. Not a crusader banner. The city was already mine. They had besieged it five weeks; **I took it with one letter, one boat, and a few sentences.**\n\n' +
        'I followed Byzantine tradition — **no massacre**. The five-thousand-strong garrison and their families were marched out under formal escort, given new clothes and a settlement payment, sent inland; Christians under Seljuk rule were freed; the mosque became a church again. This "orderly transfer" Byzantium had run for seven centuries.\n\n' +
        'I celebrated that evening — but I was clear about what else had happened. Among the crusaders, men were already murmuring with Bohemond: "Alexios stole our Nicaea. He will steal the next city too." I had won the first city, and opened my **first crack** with these men.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我赢了 Nicaea——但我也开了第一道裂痕。下一节，Antioch——8 个月——这道裂痕变成深渊。',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§4 1097/10-1098/06 Antioch 围城 + Stephen of Blois 叛逃',
    content: {
      cn:
        '1097 年 7 月十字军在 Dorylaeum 险胜塞尔柱，10 月 21 日到 Antioch 城外。接下来 8 个月我没去——这是我最被诟病的决定。\n\n' +
        '围城 8 个月：冬天、没粮、5 万人死了约 1.5 万。他们从 11 月起要援军，我只派物资和顾问，**没亲征**——**佩切涅格人威胁多瑙河**，我抽不开卫队；何况**他们越弱，越会把城还给我**。\n\n' +
        '1098 年 6 月初，**Stephen of Blois**（法国大贵族，William the Conqueror 的女婿）没撑住，6 月 2 日深夜偷逃出营，6 月底到我 Philomelium 大营（那时我**正带 2 万军往 Antioch 走**）："Antioch 完了，塞尔柱苏丹 Kerbogha 带 7 万援军围他们。"\n\n' +
        '我离 Antioch 还 600 公里，去也救不到，还赔上 2 万兵，于是**撤回**。4 天后真相到：Antioch **6 月 3 日已被攻下**（Bohemond 收买内应 Firouz 翻墙）——Stephen 逃时城还在围。\n\n' +
        '十字军从此**永远不原谅我**。Bohemond 违誓占城时说："Alexios 抛弃了我们，我没义务还城。"我那年损失的不是 Antioch——是跟拉丁人所有的信任。',
      en:
        'In July 1097 the crusaders won narrowly at Dorylaeum, and on October 21, 1097, reached the walls of Antioch. For the next eight months I did not go — the decision I have been criticized for the most.\n\n' +
        'They besieged Antioch for eight months — winter, no food, twelve to fifteen thousand of fifty thousand dead. From November 1097 they asked for relief. I sent supplies and advisors, but did **not** lead an army — the **Pecheneg nomads on the Danube were threatening the Balkans again**, and I could not strip the garrison; and besides, **the weaker they got, the more cities they would return**.\n\n' +
        'In early June 1098 **Stephen of Blois** — a major French noble (five castles, married to William the Conqueror\'s daughter) — could not hold out, and on the night of June 2 slipped out of camp. Late June he reached my headquarters at Philomelium (by then **I was on the road with twenty thousand men, marching toward Antioch**): "Antioch is finished, they are all dead. The camp says the Seljuk sultan Kerbogha is bringing seventy thousand reinforcements."\n\n' +
        'I was six hundred kilometers away. If he was right, arriving meant dying with them, losing twenty thousand soldiers, leaving Constantinople empty. I gave the order: **turn around.** Four days later the truth arrived: Antioch had **already been taken on June 3** (Bohemond had bribed an inside guard, Firouz, who lowered a rope ladder). When Stephen fled, the siege was still going; his information was out of date — but my decision had been made on it.\n\n' +
        'The crusaders never forgave me. Breaking his oath to seize Antioch, Bohemond said: "Alexios abandoned us. So I am released from my oath." What I lost that year was not Antioch — it was every drop of trust between me and the Latins.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我没亲征——4 天后我才知道 Antioch 已经攻下——但我跟拉丁人的信任永远没了。下一节，Bohemond 把这道伤口变成了一把刀。',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§3 Bohemond — Antioch 公国 + 1108 Treaty of Devol',
    content: {
      cn:
        '1098 年 6 月 4 日 Antioch 落给十字军——3 天屠城——然后内讧。**Bohemond 占了城堡，自封 "Prince of Antioch"，直接违誓**。Raymond IV 反对："城应还给 Alexios。"Bohemond 公开回答："**Alexios 抛弃了我们，我们对他没有义务**。"\n\n' +
        '消息 7 月底到我这里。派军夺回 = 跟拉丁人公开开战、其他十字军站他一边、我丢更多。我选了忍——**等**：名义上不承认 Antioch 公国却让它存在，等 Bohemond 自己出错。\n\n' +
        '1107 年 Bohemond 率军从意大利南部直接打拜占庭本土，要完成他爸 1081 年没做完的事——拿下君士坦丁堡。我把他围在 Dyrrachium（27 年前他爸打败我的同一座城），1108 年逼他签 **Treaty of Devol（迭沃尔条约）**：他**承认自己是拜占庭皇帝的封建附庸**。这是他第一次低头。\n\n' +
        '我把双头鹰印压进红蜡，没欢喜，只是平静。但反讽是：我赢了人没拿回城——Antioch 公国还在，侄子 Tancred 接管。**1111 年他死在意大利南部的 Canosa，离 Antioch 1500 公里。**',
      en:
        'June 4, 1098. Antioch fell to the crusaders. Three days of massacre. Then they started fighting each other. **Bohemond seized the citadel and named himself "Prince of Antioch" — a direct breaking of the oath.** Raymond IV opposed him: "The city must be returned to Alexios." Bohemond\'s answer, in public: "**Alexios abandoned us. We owe him nothing.**"\n\n' +
        'The news reached me in late July 1098. To send an army and take Antioch back would mean open war with the Latins, the other leaders siding with Bohemond, and me losing far more. I chose to endure — **to wait**: officially refuse to recognize the Principality, but let it exist, and wait for Bohemond to make his own mistake. Over those ten years I kept relations with Raymond IV (who hated Bohemond) and helped him take Tripoli in 1109; I traded with the Fatimid Caliphate (the Shia Muslims in Cairo); I fortified the Balkans.\n\n' +
        'In 1107 Bohemond marched from southern Italy directly against Byzantium itself, to finish what his father had failed in 1081 — to take Constantinople. I trapped him at Dyrrachium (the same city where his father defeated me twenty-seven years earlier), and in 1108 forced him to sign the **Treaty of Devol**: Bohemond **a feudal vassal of the Byzantine emperor**, Antioch **a fief, not private property**, succession after his death decided by Byzantium. For the first time, his head went down.\n\n' +
        'I pressed the double-headed eagle into red wax. I felt no joy, only calm. But the irony: I won the man, not the city — the Principality of Antioch still existed, his nephew Tancred took over. **In 1111 Bohemond died at fifty-seven in a small Italian town called Canosa, fifteen hundred kilometers from his Antioch. He never saw his city again.**',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我等了 10 年——我赢了 Bohemond——但 Antioch 还在拉丁人手里。下一节，1099 年 7 月——耶路撒冷的消息传到。',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§4 1099/07 Jerusalem 屠杀 + §6 影响（东方基督徒被错杀）',
    content: {
      cn:
        '1099 年 8 月 28 日傍晚，一个信使从叙利亚海岸赶到 Blachernae 宫，递给我拜占庭驻 Latakia 港总督的报告。我读完没说话。\n\n' +
        '7 月 15 日十字军攻陷耶路撒冷，接下来 3 天屠城：4 万平民死了约 1 万到 2 万，所有穆斯林、所有犹太人（被赶进 Synagogue 烧了），还有亚美尼亚和叙利亚基督徒——**被错杀了**：拉丁兵分不清东方基督徒和穆斯林，看见深肤色就劈。这些东方基督徒是**我管辖下**的牧民，却死在拉丁人剑下。\n\n' +
        '我**沉默了两天**。宫廷里的人问要不要发声明、谴责，我没回答。那两天心里反复转一句话，没说出口，但这个视角让你听见——\n\n' +
        '**"我把他们引进东方，他们干了我永远不会干的事，我的东方基督徒兄弟也死在他们剑下——但我没公开谴责。"**\n\n' +
        '不谴责是政治：公开谴责 = 跟新十字军国家决裂，我西边多一个永久敌人；何况他们占耶路撒冷牵制了塞尔柱南线，让我能集中收复北线。政治家自我说"必须沉默"，人性自我问"这沉默 50 年后会怎样？"我没答案。\n\n' +
        '8 月底我私下对女儿 Anna（15 岁，后来用 30 年写下《Alexiad》15 卷）说——\n\n' +
        '"**这些拉丁人的剑、火、屠城，这不是基督。这是我们用基督的名字喂大的东西——而且门是我打开的。**"',
      en:
        'August 28, 1099, late afternoon. A courier rode into the Blachernae Palace from the Syrian coast and handed me the report of the Byzantine governor of Latakia. I read it and said nothing.\n\n' +
        'On July 15 the crusaders had taken Jerusalem, and over three days massacred the city. Of forty thousand inhabitants, perhaps ten to twenty thousand died — every Muslim, every Jew (driven into the synagogue and burned alive), and the Armenian and Syriac Christians too: **killed by mistake.** The Latin soldiers could not tell an Eastern Christian from a Muslim; they saw a dark-skinned face and cut. These Eastern Christians were **my flock** — and they died under the swords of Latins who said they had come to save Christian brothers.\n\n' +
        '**I was silent for two days.** My court asked whether I wished to issue a statement, a condemnation. I did not answer. What turned in my mind those two days I never said aloud — but this lens lets you hear it:\n\n' +
        '**"I brought them into the East. They did what I would never do. My own Eastern Christian brothers died under their swords. And I did not condemn it openly."**\n\n' +
        'The reason was political: public condemnation would mean an open break with the new Latin states, the Latins turning to negotiate with the Seljuks, a second permanent enemy on my western frontier; meanwhile the Latins holding Jerusalem pinned the Seljuks on a southern front, letting me focus on retaking northern Asia Minor. My politician self said, "You must be silent." My human self asked, "How will this silence be remembered fifty years from now?" I had no answer.\n\n' +
        'In late August I said one thing privately to my daughter Anna (fifteen, who would later spend thirty years writing the fifteen-book Alexiad) —\n\n' +
        '**"These Latins — their swords, their fire, their massacre — this is not Christ. This is something we raised under Christ\'s name. And the door was mine to open."**',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我沉默了两天——这两天我可能背叛了我自己。下一节，我老了——1118 年的临终。',
    expectedLength: '340-380 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§3 Anna Komnene + §6 长尾 1204',
    content: {
      cn:
        '1118 年 8 月 15 日，我 62 岁，在君士坦丁堡 Mangana 宫病重——胃部肿瘤，治不了。\n\n' +
        '女儿 Anna 34 岁坐在床边，拿着记录本（她从 15 岁起就记我说的话，后来写成《Alexiad》）。我看着她说了几句——\n\n' +
        '"**Anna，37 年我做了我能做的一切，帝国比 1081 年我接手时强了。但有件事没解决——我 1094 年那封信。我以为用别人的力量解决了问题，其实打开了一扇关不上的门。我把它留给你——不是让你解决，是继续看着，写下来。**"\n\n' +
        '傍晚我闭眼。儿子 John II 抢先加冕。我 Komnenos 王朝又活了 100 年——但我那扇门——\n\n' +
        '现在 narrator 告诉你接下来的事。86 年后——1204 年 4 月 13 日——第 4 次十字军（本要打埃及，付不起威尼斯人船费，被怂恿改打君士坦丁堡）攻陷了 Alexios 的城，3 天抢、烧、屠（基督徒打基督徒）：抢光 Hagia Sophia 的金器，把古希腊青铜马运回威尼斯。\n\n' +
        '拜占庭从此**永远没真正恢复**。1261 年虽重夺城，已是空壳，1453 年被奥斯曼土耳其人灭。\n\n' +
        '**Alexios 1094 年那封信召来的力量，108 年后开始毁他的城，359 年后帝国彻底亡。**他临终的预感对了，只是来不及看到。',
      en:
        'August 15, 1118. I was sixty-two, in the Mangana Palace at Constantinople, very ill with a stomach tumor — beyond cure. A Greek doctor and an Arab doctor visiting from Baghdad (in this period the two medical worlds still spoke to each other) both said so.\n\n' +
        'My daughter Anna, thirty-four, sat beside the bed holding her notebook (she had begun at fifteen to write down what I said — the notes that became the Alexiad). I looked at her and said a few sentences:\n\n' +
        '"**Anna — for thirty-seven years I did everything I could. The empire is stronger now than when I took it in 1081. But one thing is not settled: the letter I sent in 1094. I thought I had used another man\'s strength to solve my problem. In truth I opened a door that cannot be closed. I leave this with you — not to solve, but to keep watching. Write down what you see.**"\n\n' +
        'That evening my eyes closed. My son John II had already crowned himself. My Komnenos dynasty would last another hundred years. But my door —\n\n' +
        'Now the narrator tells you what came next. **Eighty-six years later, on April 13, 1204**, the Fourth Crusade — originally aimed at Egypt, but unable to pay its Venetian boat fare, redirected to Constantinople instead — broke through the walls of Alexios\'s city. For three days they looted, burned, and killed (Christians killing Christians): they stripped the gold of Hagia Sophia, broke into the Kecharitomene monastery (where Anna Komnene had written the Alexiad) and raped the nuns, and shipped the ancient Greek bronze horses back to Venice.\n\n' +
        'Byzantium **never truly recovered**. In 1261 the Byzantines retook the city, but it was now a hollow shell; in 1453 it fell to the Ottoman Turks for the last time.\n\n' +
        '**The army Alexios called for in 1094 began destroying his city 108 years later. The empire was completely gone in 359 years.** His deathbed premonition was right — but the evidence arrived too late for him to see it.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Alexios 临终的预感对了——下一节，narrator 提两个真问题。',
    expectedLength: '340-380 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis（真 Socratic）═════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§7 DBQ + §9 historiography + §10 误解',
    content: {
      cn:
        '你刚扮演了 Alexios——一个 38 岁写信求兵、62 岁闭眼时已预感自己引来的力量会毁这座城的拜占庭皇帝。\n\n' +
        '问题来了。Alexios 1094 年那封信——是**高超的政治智慧**还是**历史最大的判断失误**？历史学界**两极分化**，都有真证据。\n\n' +
        '**一种看法**：当时塞尔柱占了 80% 小亚细亚、拜占庭兵不够，求外援合理。结果他**实际拿回了 Nicaea + 部分 Anatolia，维持帝国 100 年**——他**做对了**。1204 年是后人（包括他孙子 Manuel I 跟威尼斯吵架）累积的错，不能赖在 1094 那封信头上。这是政治家**正确的近期决策被遥远的不可控未来污染**。\n\n' +
        '**另一种看法**：他**忽略了制度的不对称性**——他求的是"拜占庭传统 = 几千雇佣兵"，没意识到"拉丁世界 = 教皇可越过国王召集 10 万人"。他用拜占庭逻辑去拉一根自己不熟悉的西方绳子，这就是判断失误。1204 不是巧合，是 1094 的种子按拉丁教权-王权那套机制长出来的果。\n\n' +
        '两边都站得住——一种看 "近期决策正确"，另一种看 "对外部体系的判断"。\n\n' +
        '你怎么看？Alexios 那封信更靠近一种看法（高超政治智慧）还是另一种看法（历史最大判断失误）？想 30 秒。',
      en:
        'You have just played Alexios — a thirty-eight-year-old emperor who wrote a letter asking for soldiers, and who at sixty-two closed his eyes already feeling that the force he had called would one day destroy his city.\n\n' +
        'Here is the question. Alexios\'s 1094 letter — was it **high political intelligence** (using another man\'s strength to solve his own problem) or **the largest misjudgment in history** (opening a door that could not be closed)?\n\n' +
        'Historians are split, with real evidence on both sides.\n\n' +
        '**One view:** Alexios faced a real problem in 1094. The Seljuks held eighty percent of Asia Minor; Byzantium did not have enough troops; asking for help abroad was rational. And he **did** retake Nicaea, parts of Anatolia, and gave the empire another hundred years. He **made the right call**. The 1204 disaster came from later mistakes (including his grandson Manuel I\'s quarrels with Venice); you cannot blame the 1094 letter for it. This is **a correct short-range decision polluted by a distant, uncontrollable future** — but in that moment his choice was right.\n\n' +
        '**Another view:** Alexios was a first-class short-range politician, but he **failed to read the asymmetry of institutions**. He asked on Byzantine terms — "a few thousand mercenaries" — not realizing the Latin tradition, where the pope could go around kings and mobilize 100,000 men, was a different machine entirely. He pulled on a Western rope using Byzantine logic, not knowing what was tied to the other end. **That kind of misjudgment of an external system is exactly a political failure.** 1204 was not a coincidence; it was the seed of 1094 growing through Latin church-state politics. His letter was not a brilliant move — it was the portrait of a man who thought he understood the West, and did not.\n\n' +
        'Both stand. One view judges from inside short-range control; the other from the structural mismatch between two civilizations.\n\n' +
        'What do you think? Was the 1094 letter closer to the first view (high political intelligence) or the second (largest misjudgment in history)? Take thirty seconds.',
    },
    deliverGoal:
      '你扮演了 Alexios 8 节——一个写信求兵 + 闭眼时已经感觉到自己引来力量会毁城的皇帝。' +
      '历史学界对那封 1094 年信**两极分化**：' +
      '**一种说法（Byzantinist 传统）**：近期决策正确——他实际拿回 Nicaea + 维持帝国 100 年——1204 不能赖在他头上。' +
      '**另一种说法（结构性批判派）**：他不懂西方教权-王权那套——拉了一根他不熟悉的绳——这是政治家结构性误判。' +
      '——你怎么看，Alexios 那封信是高智慧还是大失误？',
    engagementHook:
      '**你怎么看**——Alexios 1094 那封信，是高超政治智慧还是历史最大判断失误？没有标准答案——给你的理由说服我。想 30 秒',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§7 DBQ moral crucible + §9 historiography + §10 误解',
    content: {
      cn:
        '第二个真问题，跨越 11 世纪，延伸到任何时代的政治家。\n\n' +
        '1099 年 7 月底耶路撒冷屠杀消息传到 Alexios。他**沉默了两天，没公开谴责**。他知道这些"基督徒兄弟"屠了穆斯林、犹太人，还**错杀了他管辖下的东方基督徒**。\n\n' +
        '问题来了。Alexios 的沉默——是**政治家的隐忍**还是**道德上的同谋**？这是任何时代政治家在"维护合作 vs 谴责盟友暴行"之间的两难。\n\n' +
        '**一种看法**：政治家不是道德家，责任是国家生存。沉默换来三件实事：跟拉丁国家不决裂、塞尔柱被牵制在南线、他能集中收复北线小亚细亚——**这三件 + 一句"我反对"，你选哪个？**沉默是**对帝国负责**。\n\n' +
        '**另一种看法**：政治家**永远不能用"国家利益"洗白沉默**。沉默 = 默许 = 同谋。Alexios 心里清楚这是错的却选了不说——这是**用沉默向暴行换政治资本**。公开谴责或许损失些杠杆，却能保住政治家最难保留的**人格**。\n\n' +
        '两边都站得住——一种看 **国家责任**优先，另一种看 **人性底线**优先。\n\n' +
        '你怎么看？那两天的沉默更靠近一种看法（政治家的隐忍）还是另一种看法（道德上的同谋）？想 30 秒。\n\n' +
        '注：这问题没有"中国 vs 西方"对照——它是**任何时代政治家都要面对的真两难**。',
      en:
        'A second real question, beyond the eleventh century, into any time a leader has stood at this crossroad.\n\n' +
        'Late July 1099. The news of the Jerusalem massacre reaches Alexios. He is silent for two days, and does not condemn. He knows these "Christian brothers" massacred Muslims and Jews — and **also killed Eastern Christians under his own jurisdiction by mistake**. But he says nothing publicly.\n\n' +
        'Here is the question. Alexios\'s 1099 silence — was it **political endurance** or **moral complicity** (he knew, and traded his silence for imperial leverage)? It is the bind of every era: between "preserving an alliance" and "publicly condemning an ally\'s atrocity."\n\n' +
        '**One view:** a statesman is not a moralist; his duty is the survival of his state. His silence bought no open break with the Latin states, the Seljuks pinned on a southern front, and the focus to retake northern Asia Minor. **Those three things, or one sentence of "I disapprove" — which would you choose?** Choose "I disapprove" and you may lose Constantinople eight months later. Silence is **responsibility to the state**.\n\n' +
        '**Another view:** a statesman can never wash away silence with "state interest." Silence equals consent equals complicity. Alexios knew it was wrong and chose not to say so — **trading silence for political capital**. Condemnation might have cost some leverage, but kept the one thing hardest for a statesman to keep — **his own conscience**. Fifty years later his historians would call him "the silent emperor."\n\n' +
        'Both stand. One puts state responsibility first; the other the human moral floor.\n\n' +
        'What do you think? Was his two-day silence closer to the first view (political endurance) or the second (moral complicity)? Take thirty seconds.\n\n' +
        'Note: this one has **no** "China vs. West" comparison, because it is **a bind every era produces**.',
    },
    deliverGoal:
      'Alexios 1099 屠杀消息传到——他沉默了两天——没公开谴责——' +
      '**一种说法（政治现实主义）**：他责任是国家生存——沉默换来 3 件实质好处 vs 一句"我反对"——选哪个？' +
      '**另一种说法（道德底线派）**：他自己心里清楚是错的——选了不说 = 同谋——他用沉默换政治资本——50 年后历史会记住"沉默的皇帝"。' +
      '——这个问题超出 11 世纪——任何时代任何政治家在"盟友暴行"前都要回答',
    engagementHook:
      'Alexios 那两天沉默——不公开谴责盟友的屠杀，是政治家的隐忍（换帝国杠杆）还是道德上的同谋？先在心里想想你怎么看，下一节我会正式问你。',
    expectedLength: '220-260 字 + 真问题',
    expectsRealAnswer: false,
  },
  // ═════ Meta（反思 + 桥）═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    content: {
      cn:
        '你刚从 Alexios 的内部走了一遍：14 岁 Manzikert 大败的消息到城，24 岁政变上位接手一个看似要死的帝国，38 岁在油灯下写那封信，41 岁看 Bohemond 装恭顺、又在 Nicaea 偷偷开城，42 岁选择不亲赴 Antioch 援军，43 岁两天沉默接受耶路撒冷屠杀，52 岁让 Bohemond 在 Devol 条约上低头，62 岁临终对 Anna 说"我开了一扇关不上的门"——86 年后那扇门反过来吃掉他的城。\n\n' +
        '进入记忆考核前，一个问题：这一遍里最让你停一下的是什么？\n\n' +
        '是 Bohemond 单膝跪在他面前——两个人都在演戏、都知道对方在演？\n\n' +
        '是 Nicaea 那清晨城墙上挂的是双头鹰不是十字军旗——他**用一封信 + 一艘船**赢了围 5 周的城？\n\n' +
        '是耶路撒冷屠杀消息到——他**沉默两天**，心里清楚却没公开谴责？\n\n' +
        '还是 1118 年临终那句"这扇门我闭眼那刻还没关上"——86 年后它真反过来吃了他的城？\n\n' +
        '说一句话告诉我。\n\n' +
        '然后你可以选：(1) 进 mastery 通关；或 (2) 换视角重玩——同一个 1099，可能是 Roger（拉丁骑士）或 Aisha（耶路撒冷穆斯林女孩）。同一事件不同角度，会发现新东西。',
      en:
        'You have just walked Alexios from the inside — Manzikert reaching Constantinople when he was fourteen; the coup at twenty-four facing an empire that looked finished; the lamplit letter at thirty-eight; Bohemond on one knee at forty-one, both men performing, and Nicaea\'s walls taken by stealth; the choice at forty-two not to march to Antioch; the two days of silence at forty-three when the Jerusalem news arrived; Bohemond\'s head lowered at the Treaty of Devol at fifty-two; the deathbed sentence to Anna at sixty-two — "I opened a door I cannot close before my eyes close" — and then, eighty-six years later, that door coming back to eat his city.\n\n' +
        'Before you move into the mastery check, one question. What made you pause most in this lens?\n\n' +
        'Was it Bohemond on one knee — both men acting, both knowing the other was acting?\n\n' +
        'Was it the morning of May 19 at Nicaea — the Byzantine eagle on the walls instead of a crusader banner — Alexios winning a five-week siege with **one letter and one boat**?\n\n' +
        'Was it the eight months at Antioch when he chose not to march — and the third reason inside his head: "the weaker they get, the better my position"?\n\n' +
        'Was it late July 1099, the silence of two days — the line he knew but never said publicly: "they did what I would never do"?\n\n' +
        'Or the deathbed line to Anna in 1118 — "the door is still open at the moment my eyes close" — and eighty-six years later that door truly came back and ate his city?\n\n' +
        'Tell me in one sentence.\n\n' +
        'Then you can choose: (1) go into mastery, or (2) switch lens and replay — same 1099, different angle. You could try Roger (the Latin knight) or Aisha (the Muslim girl in Jerusalem). Same event, new things to see.',
    },
    deliverGoal:
      '你扮演了 Alexios 9 节——从 14 岁 Manzikert 到 62 岁临终——再到 86 年后他的城被反过来吃掉——' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换视角重玩——比如 Roger（你刚走过的拉丁骑士）或 Aisha（耶路撒冷穆斯林女孩）——' +
      '同一事件不同角度——会发现新东西',
    engagementHook:
      '走完 Alexios 这一生——一个一流的政治家，写了一封信引来 200 年后毁掉自己城市的力量，还在屠杀消息前沉默了两天。你会怎么评价这样一个人？再想一步：他那两天的沉默，你更愿意叫它政治家的隐忍，还是道德上的同谋？',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lenses + default
// ═══════════════════════════════════════════════════
export var lenses = {
  'roger-toulouse': {
    id: 'roger-toulouse',
    icon: '⚔️',
    name: { cn: '罗杰（虚构十字军骑士）', en: 'Roger de Toulouse' },
    role: {
      cn: '南法 21 岁二儿子 / 1095-1099 perpetrator-actor 视角',
      en: '21yo second son from southern France / 1095-1099 perpetrator-actor lens',
    },
    description: {
      cn: '他是南法一个家里没他份的二十一岁二儿子，刚在 Clermont 冻硬的草地上撕下一块红布缝在胸口（一个合成人物，把许多真实十字军骑士的动机和遭遇合到一起）。这一遍让你跟他从那片草地一路走到耶路撒冷城墙下，看一个真心相信自己为上帝流血的年轻人，怎么一步步走进那三天屠城。',
      en: 'He is a twenty-one-year-old second son from southern France with no land of his own, who has just torn a red cross onto his chest in a frozen meadow at Clermont (a composite character drawn from many real Crusader knights). This pass walks you with him from that meadow all the way to the walls of Jerusalem, watching a young man who truly believes he bleeds for God step by step into the three-day sack of the city.',
    },
    // 旧字段 fallback
    nameCn: '罗杰（虚构十字军骑士）',
    storyboard: rogerToulouseStoryboard,
  },
  'aisha-jerusalem': {
    id: 'aisha-jerusalem',
    icon: '🧕',
    name: { cn: 'Aisha（虚构耶路撒冷穆斯林女孩）', en: 'Aisha bint Yusuf' },
    role: {
      cn: '12 岁穆斯林女孩 / 1099 受害方视角',
      en: '12yo Muslim girl in Jerusalem / 1099 receiving-end lens',
    },
    description: {
      cn: '她是耶路撒冷棉布市场后院里一个十二岁的穆斯林女孩，左邻是亚美尼亚铁匠家，右邻是犹太橄榄油商，三家在这条巷子住了八十年（一个合成人物，把耶路撒冷城里千千万万个普通家庭的孩子合到一起）。这一遍让你跟她坐在无花果树下，问父亲那句她不懂的话，再陪她走过接下来六周里这座城被改写的每一天。',
      en: 'She is a twelve-year-old Muslim girl living off the cotton market in Jerusalem, with an Armenian blacksmith on one side and a Jewish olive-oil family on the other, three households who have shared this alley for eighty years (a composite character standing in for countless ordinary families inside the city). This pass sits you under the fig tree with her as she asks her father a question she does not understand, then walks with her through the six weeks that rewrite her city.',
    },
    // 旧字段 fallback
    nameCn: 'Aisha（虚构耶路撒冷穆斯林女孩）',
    storyboard: aishaJerusalemStoryboard,
  },
  'alexios': {
    id: 'alexios',
    icon: '🦅',
    name: { cn: '阿莱克修斯一世（拜占庭皇帝）', en: 'Alexios I Komnenos' },
    role: {
      cn: '拜占庭皇帝 / 1094-1118 lonely mediator 视角',
      en: 'Byzantine emperor / 1094-1118 lonely mediator lens',
    },
    description: {
      cn: '他是一个三十八岁的拜占庭皇帝，坐在 Blachernae 宫的油灯下，反复推敲一条要送往一千五百公里外罗马的口信，他要的只是几千个专业兵。这一遍让你跟他从那盏油灯下出发，看他怎么一句聪明话引来十万乱军，再走完接下来二十四年的钢丝。',
      en: 'He is a thirty-eight-year-old Byzantine emperor, sitting under an oil lamp in the Blachernae Palace, turning over a message he will send fifteen hundred kilometers to Rome, asking for a few thousand professional soldiers. This pass starts you beside that lamp and watches one clever sentence summon a hundred thousand unruly Latins, then walks the next twenty-four years of his tightrope with him.',
    },
    // 旧字段 fallback
    nameCn: '阿莱克修斯一世（拜占庭皇帝）',
    storyboard: alexiosStoryboard,
  },
};

export var defaultLens = 'roger-toulouse';

// ─── 默认 export 兼容老 runtime（取 default lens 的 storyboard）──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'crusades-1099',
  schemaVersion: 2, // v2 = lens-based
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: {
    'roger-toulouse': 32,
    'aisha-jerusalem': 32,
    'alexios': 32,
  },
};
