/* ─── Know U. Learning — 跨设备同步合并 (薄 wrapper) ───

   Sync Stabilization v1：实际合并逻辑已统一到 lib/progressMergePolicy.js，
   三处 (本批 409 merge / _applyCloudData / 服务端守卫) 共用同一套语义，
   消除"修一处被另一处还原"。

   本文件仅保留旧 import 兼容：
     import { mergeStates, validateMerged } from '../lib/syncMerge';

   与旧实现的唯一行为差异（有意修复）：reviewWordData 合并从
   "reviewLevel 取 max" 改为 "review event recency wins"，允许 forgot 合法降级。
*/

import {
  mergeProgress,
  validateProgressMerge,
  mergeReviewEntry as _mergeReviewEntry,
} from './progressMergePolicy.js';

export var mergeStates = mergeProgress;
export var validateMerged = validateProgressMerge;
export var mergeReviewEntry = _mergeReviewEntry;

// 不变量清理: 已完成的课不该再有「继续上次」续点。
// 「记住进度」主动同步先拉云再 union 合并, union 无法区分「本地从未有」和「本地学完后清掉」的 inProgress,
// 会把云端残留的过期续点复活。这里只丢弃「续点早于该课完成时间」的项 —— 完成后重学会写更新的 savedAt
// (savedAt > completedAt) → 保留, 不误伤跨设备重学。纯函数, 原地清理传入对象 (调用方传 merged 副本)。
// 仅供主动同步前清理用; 不改全局 union 语义 (那是 deletion-intent 结构专项, 见 STEP_0B_SYNC_REDESIGN.md)。
export function pruneCompletedInProgress(data) {
  if (!data || !data.historyData) return data;
  var hd = data.historyData;
  if (!hd.inProgress || !hd.completedTopics) return data;
  Object.keys(hd.inProgress).forEach(function (topicId) {
    var comp = hd.completedTopics[topicId];
    if (!comp) return; // 未完成 → 续点有效, 保留
    var ip = hd.inProgress[topicId];
    var savedAt = ip && ip.savedAt ? Date.parse(ip.savedAt) : NaN;
    var completedAt = comp.completedAt ? Date.parse(comp.completedAt) : NaN;
    // 仅保留「能证明晚于完成时间」的续点 (重学); 其余 (早于/时间缺失) 视为过期, 丢弃。
    if (!(savedAt > completedAt)) delete hd.inProgress[topicId];
  });
  return data;
}

export default mergeProgress;
