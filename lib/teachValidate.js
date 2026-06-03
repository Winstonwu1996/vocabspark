/* ─── Know U. Learning — teach JSON 完整性校验（纯函数，无依赖）─────────────
 *
 * 一把尺三处共用，杜绝"可解析但不完整"的 teach JSON 被当成功：
 *   1. 客户端 loadBatch 最终落库判定（pages/vocab.js）
 *   2. 服务端写缓存前校验（pages/api/chat-stream.js）
 *   3. 服务端读缓存后校验（命中旧污染条目则忽略，pages/api/chat-stream.js）
 *
 * 背景：仅 JSON.parse 通过不够——模型偶尔漏字段、或 parsePartialJSON 自动补全
 * 括号会造出 {opening, teach:{}} 这类"半截但合法"的对象。一旦缓存就对所有命中
 * 同 cacheKey 的用户串原始 JSON / 半截笔记（economical teach 页根因）。
 *
 * 完整门槛（渲染所需的实质内容）：开场白 + 至少一张教学方法卡。
 * 视觉锚 / connect / use.scenarios / closing 缺失时页面仍能优雅降级（不空、不串码），
 * 故不强制，避免门槛过严导致合法 teach 被反复判失败重试。
 * ──────────────────────────────────────────────────────────────────────── */

export var isCompleteTeachJSON = function (p) {
  if (!p || typeof p !== "object") return false;
  if (typeof p.opening !== "string" || !p.opening.trim()) return false;
  if (!p.teach || typeof p.teach !== "object") return false;
  if (!Array.isArray(p.teach.methods) || p.teach.methods.length === 0) return false;
  return true;
};
