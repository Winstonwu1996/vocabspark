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
} from './progressMergePolicy';

export var mergeStates = mergeProgress;
export var validateMerged = validateProgressMerge;
export var mergeReviewEntry = _mergeReviewEntry;

export default mergeProgress;
