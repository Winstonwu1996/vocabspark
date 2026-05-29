# Codex 审计 prompt — Step 3 daily-quota + merge 接入

你是独立代码审核员。实施后审计,给 **Go / No-Go**。范围是 Step 3:`lib/daily-quota.js`(双配额纯逻辑)+ 把 `mergeDailyQuota` 接进 `lib/progressMergePolicy.js` 的 `mergeHistoryData`。

**这轮最高风险点**:Step 3 改了 `lib/progressMergePolicy.js` —— 这是 **vocab + history 共用的 mission-critical 合并代码**,vocab 付费用户跑了一年。任何让 vocab 合并语义漂移的改动都可能丢用户进度。请把审计火力集中在「这个改动会不会伤到现有 vocab 同步」。

## 审核范围(精确 commit + 文件)

```bash
git show a28620f  # Step 3: daily-quota.js + test + mergeHistoryData 接入
```

文件清单(实地读 + 跑单测):
- `lib/daily-quota.js`(纯逻辑 · 0 依赖 · ~250 行)
- `scripts/test-daily-quota.mjs`(55 assertions)
- `lib/progressMergePolicy.js`(**只改了 2 处**:顶部 import + mergeHistoryData 末尾加条件分支)

辅助参考(只读):
- `docs/HISTORY_MEMBERSHIP_PLAN.md` v1.2 §2 (配额矩阵) + §6 (机制 + mergeDailyQuota 规则)
- `lib/syncMerge.js` — mergeStates = mergeProgress 的别名,sync-client 用它做 409 合并
- `lib/sync-client.js` — _pushSnapshot 里的 409 merge 路径(mergeStates)
- `pages/vocab.js` — vocab 通过 sync-client 做 409 合并,会走到 mergeHistoryData
- `scripts/test-merge-history-passthrough.mjs` — 现有 historyData passthrough 回归锁
- `scripts/test-progress-merge-policy.mjs` — 现有 vocab merge 回归锁

## 我已经验证过的(不必重复)

- `node --check` 全过
- `npm run build` 全绿
- 6 套单测全绿:test-daily-quota 55/55 · test-progress-merge-policy 全过 · test-merge-history-passthrough 36/36 · test-sync-client 52/52 · test-membership-logic 95/95 · test-history-tiers 130/130
- 改动是条件触发:`if (local.dailyLensUsage || server.dailyLensUsage)` —— history 没写这两字段时 mergeHistoryData 行为应该完全不变
- daily-quota.js 0 依赖(leaf),不构成循环依赖

## 请重点审核(按风险排序)

### P0 — 会伤现有 vocab 同步的回归(最高优先)

**P0-1 mergeHistoryData 改动对 vocab 的影响**
实地读 `lib/progressMergePolicy.js` 的 `mergeHistoryData`(我加的条件分支在函数末尾 `return merged` 之前)。确认:
- vocab 用户的 historyData(如果他们用过 history 模块)在没有 dailyLensUsage 字段时,merge 结果跟改动前**逐字节一致**(条件分支不进入)
- 加进来的 import `import { mergeDailyQuota } from './daily-quota.js'` 有没有可能因为 daily-quota 内部的 `Date` / `toLocaleDateString` 调用产生 SSR / 测试环境副作用(daily-quota 顶层没有立即执行的 Date 调用吧?请确认 todayStr 只在被调用时才 new Date)
- mergeDailyQuota 在 mergeHistoryData 里被调用,但 mergeHistoryData 自己有 `localNewer` 参数 —— mergeDailyQuota 没用 localNewer,它自己按 date 字典序判新旧。这两套"谁更新"的逻辑会不会打架?(比如 updatedAt 显示 local 更新,但 dailyLensUsage.date 显示 server 更新,取哪个?)

→ 输出:vocab 回归风险评估 + 是否需要补「vocab historyData 无 quota 字段时 merge 不变」的显式回归测试

**P0-2 mergeDailyQuota 跨日比较用字符串 `>` 的正确性**
```js
if (local.date !== remote.date) {
  return (local.date > remote.date) ? local : remote;
}
```
date 是 `todayStr()` 产出的 `YYYY-MM-DD`(本地时区 sv-SE locale)。字典序 `>` 对 YYYY-MM-DD 是对的。但请挑边界:
- 跨时区设备:用户在 UTC+8 设备 record 了 `2026-05-27`,飞到 UTC-8 设备此时本地还是 `2026-05-26` —— merge 会判 server(05-27)更新,把本地 05-26 的扣减全丢。这是 bug 还是可接受?(v1.2 §6 说用 device localTime 容忍)
- `date` 字段缺失 / 非法格式(如 undefined)时 `undefined > "2026-05-27"` 的行为
- 两个 date 都缺失时

→ 输出:跨时区丢扣减是否需要缓解(还是按 v1.2 容忍),+ 非法 date 防御是否够

**P0-3 同日 union 的字段探测健壮性**
```js
['usedLensIds', 'eventIds'].forEach(function (field) {
  if (Array.isArray(local[field]) || Array.isArray(remote[field])) { ... }
});
```
- 一个 lens usage 对象同时混入 eventIds 字段(数据脏)会怎样?会不会把两个不相干的字段都 union 进同一个 out 对象,产生畸形 `{date, usedLensIds, eventIds}`?
- 如果 local 是 lens usage(usedLensIds),remote 是 sidekick usage(eventIds)—— 调用方不应该这样混调,但万一混了,out 会同时有两个数组。这是否需要防御 / 还是信任 caller?

→ 输出:字段探测是否过于宽松,是否需要 caller 显式指定字段名

### P1 — daily-quota 纯逻辑质量

**P1-1 「第一次有效对话」扣减时机没在 lib 里**
v1.2 §6 硬定义扣减时机 =「第一条非 fallback AI bubble 写入 conversationLog,或用户首次有效输入,先到者扣一次」。这个逻辑现在**完全不在 daily-quota.js**,留给 Step 4-5 UI wiring。
- 这个 trade-off 合理吗?(扣减时机是 runtime 状态判断,确实难纯逻辑化)
- 还是应该提供一个 `shouldChargeLens(conversationLog, hasUserInput)` 之类的纯函数帮 UI 判断,避免 UI 层各处实现不一致?

**P1-2 multi-tab navigator.locks 没在 lib 里**
v1.2 §6 P0-3 要求 multi-tab 用 navigator.locks + CAS + BroadcastChannel 防双扣。现在 daily-quota.js 只提供纯 record/merge,锁机制留给 Step 4-5。
- mergeDailyQuota 的 union 语义其实已经让「双 tab 各扣一次」最终一致(union 后两个 lens 都在)。那 navigator.locks 还需要吗?还是 union 已经够?
- 请判断:有了 union merge,multi-tab 的 P0-3 风险是否已经降级(因为最坏情况是"两个 tab 各以为自己还有配额,各放行一次,但 union 后正确累计")

**P1-3 quota record 返回新对象,caller 必须持久化**
recordLensUsage / recordSidekickEvent 返回新 usage 对象,不改入参。caller 必须 saveAll + sync push。如果 caller 忘了持久化,扣减就丢了(用户白嫖)。
- 这种"返回值必须被消费"的 API 是否够安全?
- 还是应该有更强的约束?

**P1-4 Infinity 作为配额值序列化问题**
`LENS_QUOTA.basic = Infinity`。如果这个值被 JSON.stringify(如塞进某个 API payload / localStorage),`Infinity` → `null`。请确认 Infinity 只用于内存比较,绝不会被序列化进任何持久化层。

### P2 — 长期

**P2-1 daily-quota 与 membership-logic 的 tier 字符串耦合**
daily-quota 的 LENS_QUOTA / SIDEKICK_QUOTA 用 'guest'/'free'/'basic'/'pro' 字符串 key,跟 history-tiers / membership 的 tier 字符串必须一致。没有共享枚举。typo 风险。
→ 是否值得抽一个共享 TIER 常量?

## 输出格式

```md
## VERDICT
[ ] Go — Step 3 可作后续基础,无伤 vocab 回归
[ ] Go with minor adjustments — 改这些点再继续
[ ] No-Go — merge 接入有伤 vocab 风险 / 配额逻辑有结构问题

## P0 必修(若有)
1. [P0-X] <标题>
   - 风险 + 行号:
   - 推荐改法:
   - 回归测试补丁:

## P1 强烈建议
## P2 备注
## 你认为遗漏的角度
```

## 关键提示

- 这轮**最重要的是 P0-1**:确认 mergeHistoryData 改动不伤现有 vocab 同步。vocab 是跑了一年的付费产品,merge 漂移 = 丢用户进度 = 致命。请实地对比改动前后 vocab 路径。
- 如果你判断 merge 接入有任何 vocab 回归风险 → No-Go,我会把 merge 接入拆出来单独处理(Step 3 配额逻辑可以先留着不接 sync)。
- daily-quota 纯逻辑部分如果只有 P1/P2 → 那部分 Go。
- 跨时区丢扣减(P0-2)如果 Codex 判断是 v1.2 已接受的容忍项,不算 P0。
