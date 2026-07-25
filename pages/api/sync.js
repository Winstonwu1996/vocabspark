import { createClient } from '@supabase/supabase-js';
import { requireUser } from '../../lib/auth-server';
import { planSyncOutcome } from '../../lib/progressMergePolicy';

var supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export const config = { api: { bodyParser: { sizeLimit: '4mb' } } };

// ─────────────────────────────────────────────────────────────────────────────
// L1 字段守卫 + 版本冲突 + fail-closed 读 → 统一到 lib/progressMergePolicy.js 的
// planSyncOutcome（纯函数，可单测）。handler 只做 DB 读写 IO。
// 原则（chompcloud 4-30 事件后定型）：除用户主动操作 wordInput
// (intent='user_edit_wordInput'/'user_upload'/'user_clear') 外，关键字段 push
// 比云端少 → 保留云端，防 race/mount/游客污染导致进度丢失。
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// L2：历史快照写入 + 自动清理
// ─────────────────────────────────────────────────────────────────────────────
// 保留策略：最近 20 份完整版本 + 每日 1 份 × 30 天
// 实现：每次 sync 成功后 INSERT，再按规则 DELETE 超出范围的旧版本
// ─────────────────────────────────────────────────────────────────────────────
async function writeHistorySnapshot(userId, version, data, reason) {
  try {
    await supabase.from('user_progress_history').insert({
      user_id: userId,
      version: version,
      progress_data: data,
      reason: reason || 'sync',
    });
    // 自动清理旧版本（异步触发，不阻塞响应）
    pruneHistory(userId).catch(function (e) {
      console.warn('[sync][history] prune failed:', e.message);
    });
  } catch (e) {
    // 历史快照写入失败不阻塞 sync — log 但放行
    console.warn('[sync][history] insert failed:', e.message);
  }
}

async function pruneHistory(userId) {
  // 保留：最近 20 份（不论时间）+ 30 天内每天最早 1 份；其余删
  // 不用 PostgREST NOT IN URL 构造（UUID 转义有坑）— 改"取全集，JS diff 出待删，DELETE IN"
  var { data: recent } = await supabase
    .from('user_progress_history')
    .select('id')
    .eq('user_id', userId)
    .order('snapshotted_at', { ascending: false })
    .limit(20);

  var keepIds = new Set((recent || []).map(function (r) { return r.id; }));

  // 30 天内每天最早 1 份
  var thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  var { data: dailyAll } = await supabase
    .from('user_progress_history')
    .select('id, snapshotted_at')
    .eq('user_id', userId)
    .gte('snapshotted_at', thirtyDaysAgo)
    .order('snapshotted_at', { ascending: true });

  var dailySeen = new Set();
  (dailyAll || []).forEach(function (r) {
    var day = r.snapshotted_at.slice(0, 10);
    if (!dailySeen.has(day)) {
      dailySeen.add(day);
      keepIds.add(r.id);
    }
  });

  if (keepIds.size === 0) return; // 防御：异常情况下绝不全删

  // 取该 user 全部 history id，diff 出待删
  var { data: all } = await supabase
    .from('user_progress_history')
    .select('id')
    .eq('user_id', userId);

  var toDelete = (all || [])
    .map(function (r) { return r.id; })
    .filter(function (id) { return !keepIds.has(id); });

  if (toDelete.length === 0) return;

  // .in() 是标准 supabase-js 语法，安全
  var { error: delErr } = await supabase
    .from('user_progress_history')
    .delete()
    .in('id', toDelete);
  if (delErr) console.warn('[sync][history] delete error:', delErr.message);
}

// ─────────────────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  var { userId: claimedUserId, data, clientVersion, intent } = req.body || {};
  if (!claimedUserId || !data) return res.status(400).json({ error: 'missing userId or data' });

  // 验证：token 必须有效，且 token 用户 = body 里的 userId（防越权改他人数据）
  var { userId, errorResponse } = await requireUser(req, res, claimedUserId);
  if (errorResponse) return errorResponse;

  var cv = typeof clientVersion === 'number' ? clientVersion : null;

  try {
    // 读取当前服务端 version + data
    var { data: current, error: readErr } = await supabase
      .from('user_progress').select('version, progress_data')
      .eq('user_id', userId).single();

    // 决策（纯函数 planSyncOutcome）：fail-closed 读 / 版本冲突 409 / 守卫 + 写入计划。
    // handler 只负责按决策做 DB IO。
    var plan = planSyncOutcome({
      current: current,
      readErr: readErr,
      incoming: data,
      clientVersion: clientVersion,
      intent: intent,
    });

    if (plan.action === 'read_error') {
      console.warn('[sync] cloud read failed for user ' + userId + ':', readErr && readErr.message);
      return res.status(500).json({ error: 'cloud_read_failed' });
    }

    if (plan.action === 'conflict') {
      // 版本冲突 → 409，客户端 mergeStates 后重推
      return res.status(409).json({
        error: 'version_conflict',
        serverVersion: plan.serverVersion,
        serverData: plan.serverData,
      });
    }

    // plan.action === 'write'
    if (plan.rejected.length > 0) {
      console.warn('[sync][guard] rejected fields for user ' + userId + ':', JSON.stringify({
        rejected: plan.rejected,
        intent: intent || null,
        cloudVersion: plan.serverVersion,
        clientVersion: cv,
      }));
    }

    // 接受写入（用 plan.safe，已过字段守卫）
    //
    // ⚠️ 必须是「版本条件写」而不是无条件 upsert（TOCTOU 修复）：
    // 上面的 select 与这里的写之间没有原子性，两个并发请求会同时读到 version=V、
    // 同时通过 cv 检查、同时写 V+1 —— 后落库的整体覆盖先落库的，而先写方收到
    // ok:true 且版本号一致，永远不会触发 409 合并 → 静默丢进度（手机+iPad 同时学）。
    // 加 .eq('version', serverVersion) 后，抢输的一方影响 0 行 → 转 409，
    // 复用客户端既有的 mergeStates 重推路径，不需要客户端改任何代码。
    var writeErr = null;
    if (current) {
      // 已有行：条件更新，版本被人抢改则 0 行
      var upd = await supabase
        .from('user_progress')
        .update({
          progress_data: plan.safe,
          version: plan.newVersion,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', userId)
        .eq('version', plan.serverVersion)
        .select('version');

      writeErr = upd.error;
      if (!writeErr && (!upd.data || upd.data.length === 0)) {
        // 0 行 = 读到写之间被另一设备/tab 抢先写入 → 让客户端合并后重推
        var { data: fresh } = await supabase
          .from('user_progress').select('version, progress_data')
          .eq('user_id', userId).single();
        console.warn('[sync][toctou] lost race for user ' + userId +
          ' (expected v' + plan.serverVersion + ', now v' + (fresh && fresh.version) + ') → 409');
        return res.status(409).json({
          error: 'version_conflict',
          serverVersion: fresh ? fresh.version : plan.serverVersion,
          serverData: fresh ? fresh.progress_data : null,
        });
      }
    } else {
      // 新用户首行：并发插入由主键兜底，冲突同样转 409
      var ins = await supabase.from('user_progress').insert({
        user_id: userId,
        progress_data: plan.safe,
        version: plan.newVersion,
        updated_at: new Date().toISOString(),
      });
      writeErr = ins.error;
      if (writeErr && (writeErr.code === '23505' || /duplicate key|unique/i.test(writeErr.message || ''))) {
        var { data: raced } = await supabase
          .from('user_progress').select('version, progress_data')
          .eq('user_id', userId).single();
        return res.status(409).json({
          error: 'version_conflict',
          serverVersion: raced ? raced.version : 0,
          serverData: raced ? raced.progress_data : null,
        });
      }
    }
    if (writeErr) return res.status(500).json({ error: writeErr.message });

    // ── L2：历史快照（异步，不阻塞响应）──
    writeHistorySnapshot(userId, plan.newVersion, plan.safe, 'sync').catch(function () {});

    res.status(200).json({
      ok: true,
      version: plan.newVersion,
      // 告诉客户端哪些字段被守卫拒绝了（客户端据此应用 serverData + 不显示 synced）
      rejectedFields: plan.rejected.length > 0 ? plan.rejected : undefined,
      serverData: plan.rejected.length > 0 ? plan.safe : undefined,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
