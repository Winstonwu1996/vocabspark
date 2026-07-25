/* ─── /api/sync 的写入层（版本条件写 / TOCTOU 防护）───────────────────────
 *
 * 为什么单独成文件：这段逻辑原先内联在 pages/api/sync.js 的 handler 里，
 * 测试只能「手抄一份副本」来验证 —— 结果是把生产代码里的守卫整段删掉，
 * npm test 依然全绿（已用变异测试实证）。那种测试是假保护。
 * 抽成纯函数后，测试 import 的就是生产代码本身，改坏了必然挂。
 *
 * 依赖注入：调用方传入一个最小的 db 适配器，测试可以塞内存实现。
 *   db.updateIfVersion({ userId, data, newVersion, expectedVersion })
 *       -> { rows: number, error }        // rows=0 表示版本已被别人改（抢输）
 *   db.insertFirst({ userId, data, newVersion })
 *       -> { error }                      // error.code==='23505' 表示并发插入冲突
 *   db.refetch(userId)
 *       -> { data: { version, progress_data } | null, error }
 */

/** 判断是不是「唯一键冲突」（并发插入同一用户首行）。 */
export function isDuplicateKeyError(error) {
  if (!error) return false;
  return error.code === '23505' || /duplicate key|unique/i.test(error.message || '');
}

/**
 * 执行一次带版本条件的写入。
 *
 * 返回值是「给 handler 的指令」，不直接碰 res：
 *   { status: 200, version }                          写入成功
 *   { status: 409, serverVersion, serverData }        抢输 → 客户端合并后重推
 *   { status: 500, error }                            真失败 / 无法取回云端最新数据
 *
 * ⚠️ 409 必须带非空 serverData：客户端的 409 分支是
 *    `if (conflict.serverData) { merge; repush }` —— serverData 为 null 时
 *    整段合并重推被静默跳过，本地这批改动既没合并也没推上去，且状态卡在 syncing。
 *    所以取不到最新云端数据时宁可返回 500 让客户端重试，也不发空的 409。
 */
export async function performVersionedWrite(db, { userId, current, plan }) {
  if (current) {
    const upd = await db.updateIfVersion({
      userId,
      data: plan.safe,
      newVersion: plan.newVersion,
      expectedVersion: plan.serverVersion,
    });
    if (upd.error) return { status: 500, error: upd.error.message || 'update_failed' };

    if (!upd.rows) {
      // 0 行 = 读到写之间被另一设备/tab 抢先写入
      const fresh = await db.refetch(userId);
      if (fresh.error || !fresh.data || !fresh.data.progress_data) {
        return { status: 500, error: 'conflict_refetch_failed' };
      }
      return {
        status: 409,
        serverVersion: fresh.data.version,
        serverData: fresh.data.progress_data,
        lostRace: true,
      };
    }
    return { status: 200, version: plan.newVersion };
  }

  // 新用户首行
  const ins = await db.insertFirst({ userId, data: plan.safe, newVersion: plan.newVersion });
  if (ins.error) {
    if (!isDuplicateKeyError(ins.error)) {
      return { status: 500, error: ins.error.message || 'insert_failed' };
    }
    // 并发下另一个请求先建了行
    const raced = await db.refetch(userId);
    if (raced.error || !raced.data || !raced.data.progress_data) {
      return { status: 500, error: 'conflict_refetch_failed' };
    }
    return {
      status: 409,
      serverVersion: raced.data.version,
      serverData: raced.data.progress_data,
      lostRace: true,
    };
  }
  return { status: 200, version: plan.newVersion };
}

/** 把 supabase client 包成上面约定的 db 适配器。 */
export function makeSupabaseAdapter(supabase) {
  return {
    async updateIfVersion({ userId, data, newVersion, expectedVersion }) {
      const r = await supabase
        .from('user_progress')
        .update({ progress_data: data, version: newVersion, updated_at: new Date().toISOString() })
        .eq('user_id', userId)
        .eq('version', expectedVersion)
        .select('version');
      return { rows: r.data ? r.data.length : 0, error: r.error };
    },
    async insertFirst({ userId, data, newVersion }) {
      const r = await supabase.from('user_progress').insert({
        user_id: userId,
        progress_data: data,
        version: newVersion,
        updated_at: new Date().toISOString(),
      });
      return { error: r.error };
    },
    async refetch(userId) {
      const r = await supabase
        .from('user_progress').select('version, progress_data')
        .eq('user_id', userId).single();
      return { data: r.data, error: r.error };
    },
  };
}
