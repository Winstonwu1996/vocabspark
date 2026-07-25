/* ─── check-subscription 的鉴权决策（纯函数，供 handler 与测试共用）───────────
 *
 * 单独成文件的原因：这段逻辑原先内联在 handler 里，测试只能手抄一份副本 ——
 * 把生产守卫整段删掉，npm test 依然全绿（变异测试实证）。抽出来后测试 import
 * 的是生产代码本身，改坏必挂。
 *
 * 铁律（chompcloud「付费用户被锁在付费墙后」事故的教训）：
 *   「查不了」≠「没订阅」。任何无法核实身份的情况都不能返回权威的 200-free ——
 *   200-free 与「DB 确认无订阅」字节相同，调用方无法区分，会据以降级并触发
 *   tierLost / 付费课 fail-closed 封锁。一律用 503 + transient:true，
 *   调用方保持上一次已知状态、继续轮询、绝不降级。
 */

/**
 * @param {{verifiedUserId: string|null, queryUserId: string}} input
 * @returns {{allow: boolean, status?: number, body?: object, reason?: string}}
 */
export function decideSubscriptionAccess({ verifiedUserId, queryUserId }) {
  // 无法核实身份：没 token / token 失效 / 验证服务不可达。
  // 都不能证明「此人没订阅」→ transient，不降级。
  if (!verifiedUserId) {
    return {
      allow: false,
      reason: 'unverified',
      status: 503,
      body: { error: 'tier check unavailable', transient: true },
    };
  }

  // 明确越权：拿 A 的 token 查 B 的订阅。
  // 同样返 transient 而非 200-free —— 既不泄漏他人订阅信息，也不会被任何
  // 调用方误当成「已核实无订阅」。正常用户永远走不到这个分支。
  if (verifiedUserId !== queryUserId) {
    return {
      allow: false,
      reason: 'idor',
      status: 503,
      body: { error: 'tier check unavailable', transient: true },
    };
  }

  return { allow: true };
}
