import { createClient } from '@supabase/supabase-js';
import { requireUser } from '../../lib/auth-server';

var supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export const config = { api: { bodyParser: { sizeLimit: '4mb' } } };

// ─────────────────────────────────────────────────────────────────────────────
// L1：字段级硬守卫（零容忍只增不减）
// ─────────────────────────────────────────────────────────────────────────────
// 原则（chompcloud 4-30 事件后定型）：
//   除"用户主动操作 wordInput"（intent='user_edit_wordInput' / 'user_upload' /
//   'user_clear'）外，任何关键字段 push 时比云端少 → 该字段保留云端 + 写审计 log。
//   客户端永远不会因为 race condition / mount bug / 游客污染让用户进度丢失。
// ─────────────────────────────────────────────────────────────────────────────

function objKeyCount(o) {
  if (!o || typeof o !== 'object') return 0;
  return Object.keys(o).length;
}

function arrLen(a) {
  return Array.isArray(a) ? a.length : 0;
}

function num(v) {
  var n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

// 返回 { safe: 经过守卫的 progress_data, rejected: 被拒字段列表 }
function applyFieldGuards(incoming, cloud, intent) {
  if (!cloud) return { safe: incoming || {}, rejected: [] };
  if (!incoming || typeof incoming !== 'object') {
    return { safe: cloud, rejected: ['_entire_payload_invalid'] };
  }

  var safe = Object.assign({}, incoming);
  var rejected = [];

  // wordStatusMap: 只增不减（用户主动清不清空也不允许 — 删词只删 wordInput，wsm 状态保留）
  if (objKeyCount(incoming.wordStatusMap) < objKeyCount(cloud.wordStatusMap)) {
    safe.wordStatusMap = cloud.wordStatusMap;
    rejected.push('wordStatusMap');
  }

  // reviewWordData: 只增不减
  if (objKeyCount(incoming.reviewWordData) < objKeyCount(cloud.reviewWordData)) {
    safe.reviewWordData = cloud.reviewWordData;
    rejected.push('reviewWordData');
  }

  // pet: totalFed 单调，unlocked 数组只增（解锁配饰不允许撤回）
  var ip = incoming.pet || {};
  var cp = cloud.pet || {};
  if (cp && (cp.totalFed || cp.unlocked || cp.species)) {
    var petBad = false;
    if (num(ip.totalFed) < num(cp.totalFed)) petBad = true;
    if (arrLen(ip.unlocked) < arrLen(cp.unlocked)) petBad = true;
    if (petBad) {
      // pet 整体保留云端（unlocked 数组取 union 太复杂，整体回退最安全）
      safe.pet = cloud.pet;
      rejected.push('pet');
    }
  }

  // stats: xp / total / correct / bestStreak 单调 max（streak 当前可重置故不守）
  var is = incoming.stats || {};
  var cs = cloud.stats || {};
  if (cs && Object.keys(cs).length > 0) {
    var safeStats = Object.assign({}, is);
    var statsAdjusted = false;
    ['xp', 'total', 'correct', 'bestStreak'].forEach(function (k) {
      var iv = num(is[k]);
      var cv = num(cs[k]);
      if (iv < cv) {
        safeStats[k] = cv;
        statsAdjusted = true;
      }
    });
    if (statsAdjusted) {
      safe.stats = safeStats;
      rejected.push('stats(adjusted)');
    }
  }

  // wordInput：用户主动操作才允许变小
  var iWi = (incoming.wordInput || '');
  var cWi = (cloud.wordInput || '');
  if (iWi.length < cWi.length) {
    var allowedIntents = ['user_edit_wordInput', 'user_upload', 'user_clear'];
    if (!intent || allowedIntents.indexOf(intent) === -1) {
      safe.wordInput = cWi;
      rejected.push('wordInput');
    }
  }

  return { safe: safe, rejected: rejected };
}

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

    var serverVersion = current ? (current.version || 0) : 0;
    var cloudData = current ? current.progress_data : null;

    // ── 版本冲突仍然返回 409，让客户端 mergeStates 后重推 ──
    if (cv !== null && cv < serverVersion) {
      return res.status(409).json({
        error: 'version_conflict',
        serverVersion: serverVersion,
        serverData: cloudData,
      });
    }

    // ── L1：字段级守卫 ──
    var guard = applyFieldGuards(data, cloudData, intent);
    var safe = guard.safe;

    if (guard.rejected.length > 0) {
      console.warn('[sync][guard] rejected fields for user ' + userId + ':', JSON.stringify({
        rejected: guard.rejected,
        intent: intent || null,
        cloudVersion: serverVersion,
        clientVersion: cv,
      }));
    }

    // 版本匹配或新记录 — 接受写入（用 safe 而不是原 data）
    var newVersion = serverVersion + 1;
    var { error } = await supabase.from('user_progress').upsert(
      {
        user_id: userId,
        progress_data: safe,
        version: newVersion,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );
    if (error) return res.status(500).json({ error: error.message });

    // ── L2：历史快照（异步，不阻塞响应）──
    writeHistorySnapshot(userId, newVersion, safe, 'sync').catch(function () {});

    res.status(200).json({
      ok: true,
      version: newVersion,
      // 告诉客户端哪些字段被守卫拒绝了（客户端可显示 toast）
      rejectedFields: guard.rejected.length > 0 ? guard.rejected : undefined,
      serverData: guard.rejected.length > 0 ? safe : undefined, // 被拒时返回服务端权威版本
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
