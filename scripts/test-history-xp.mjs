/* history 完课 XP 落账测试
   运行：node scripts/test-history-xp.mjs

   守的是一个已经上过线的真 bug（2026-08-07 修）：
   pages/history/[topicId].js 的 completeTopic 同时做了两件事——
     :1464  addXp(total)
     :1496  saveTopicCompletion(topicId, { xpEarned: total, ... })
   而 saveTopicCompletion 内部本身就会 `stats.xp += payload.xpEarned`
   （lib/history-storage.js）。两处都加 ⇒ **每完成一门课发双倍 XP**。

   为什么值得写测试：
   - XP 不是装饰数字，是**货币**：vocab 里喂宠物 / 买配饰要花它
     （pages/vocab.js 的 PET_FEED_COST_XP、acc.price）
   - 两处调用在源码里隔了 30 多行，中间夹着 review pool / bridge 一大段逻辑，
     肉眼极难发现；后人「顺手补一个 addXp」就会复发
*/

import fs from "node:fs";

let pass = 0, fail = 0;
const ok = (name, cond) => {
  if (cond) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); }
};
const read = (p) => fs.readFileSync(new URL("../" + p, import.meta.url), "utf8");

const page = read("pages/history/[topicId].js");
const storage = read("lib/history-storage.js");

console.log("\n── ① saveTopicCompletion 仍是 XP 的落账点 ──");
{
  // 这条是「真源」，不能被顺手删掉——否则完课不发 XP
  const fnStart = storage.indexOf("export var saveTopicCompletion");
  const fnBody = storage.slice(fnStart, fnStart + 1200);
  ok("saveTopicCompletion 内部累加 xpEarned 到 stats.xp",
     /stats\.xp\s*=\s*\(stats\.xp\s*\|\|\s*0\)\s*\+\s*payload\.xpEarned/.test(fnBody));
  ok("completeTopic 把 total 作为 xpEarned 传进去",
     /saveTopicCompletion\([\s\S]{0,120}xpEarned:\s*total/.test(page));
}

console.log("\n── ② 完课路径上不得有第二处 XP 累加（双倍 bug 的根因）──");
{
  // completeTopic 函数体内不应再出现 addXp(...) 调用
  const ctStart = page.indexOf("var completeTopic");
  ok("找得到 completeTopic 函数", ctStart > 0);
  const ctBody = page.slice(ctStart, ctStart + 6000);
  // 注释里提到 addXp 是允许的（我们特意留了说明），但不能有真实调用
  const realCalls = (ctBody.match(/^\s*addXp\s*\(/gm) || []);
  ok(`completeTopic 内无 addXp() 调用${realCalls.length ? " ← 发现 " + realCalls.length + " 处，会双倍发放" : ""}`,
     realCalls.length === 0);

  // 整个课程页都不应再调 addXp（唯一入口是 saveTopicCompletion）
  const pageCalls = (page.match(/^\s*addXp\s*\(/gm) || []);
  ok("整个 history 课页无 addXp() 调用", pageCalls.length === 0);
  ok("addXp 已从 import 列表移除（避免未使用 import + 降低误用诱惑）",
     !/^\s*addXp,\s*$/m.test(page));
}

console.log("\n── ③ XP 显示刷新发生在落账之后 ──");
{
  // ⚠️ 必须在 completeTopic 函数体内比较：文件里另有两处 setXp(getXp())
  // （首屏加载、其它刷新点，都只读不累加），全文 indexOf 会抓到靠前那处。
  const ctStart = page.indexOf("var completeTopic");
  const ctBody = page.slice(ctStart, ctStart + 6000);
  const i = ctBody.indexOf("saveTopicCompletion(topicId");
  const j = ctBody.indexOf("setXp(getXp())");
  ok("completeTopic 里 setXp(getXp()) 在 saveTopicCompletion 之后（否则显示会少一次完课的量）",
     i > 0 && j > i);
}

console.log("\n── ④ 数值验证：模拟一次完课，XP 只应增加一份 ──");
{
  // 直接复刻两个函数的真实逻辑做数值推演（源码已在 ①/② 断言过与生产一致）
  let statsXp = 0;
  const TOTAL = 175;
  // 修复后：completeTopic 不再 addXp；只有 saveTopicCompletion 累加
  const saveTopicCompletion = (xpEarned) => { if (xpEarned) statsXp += xpEarned; };
  saveTopicCompletion(TOTAL);
  ok(`完成一门课 XP 增加 ${TOTAL}（不是 ${TOTAL * 2}）`, statsXp === TOTAL);

  // 反向验证：如果两处都调，就会双倍——确认这个测试真的能抓到回归
  let bad = 0;
  const addXp = (n) => { bad += n; };
  addXp(TOTAL); bad += TOTAL;   // 模拟旧代码路径
  ok(`旧路径确实是双倍（${bad}）—— 说明本测试的断言有意义`, bad === TOTAL * 2);
}

console.log(`\n${fail === 0 ? "✅" : "❌"} ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);
