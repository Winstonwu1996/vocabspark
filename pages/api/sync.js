import { createClient } from '@supabase/supabase-js';
import { requireUser } from '../../lib/auth-server';

var supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export const config = { api: { bodyParser: { sizeLimit: '4mb' } } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  var { userId: claimedUserId, data, clientVersion } = req.body || {};
  if (!claimedUserId || !data) return res.status(400).json({ error: 'missing userId or data' });

  // 验证：token 必须有效，且 token 用户 = body 里的 userId（防越权改他人数据）
  var { userId, errorResponse } = await requireUser(req, res, claimedUserId);
  if (errorResponse) return errorResponse;

  // clientVersion: 客户端上次拉取时的 version
  // 如果 clientVersion 为 null/undefined（旧客户端），按 LWW 直接写入
  var cv = typeof clientVersion === 'number' ? clientVersion : null;

  try {
    // 读取当前服务端 version
    var { data: current, error: readErr } = await supabase
      .from('user_progress').select('version, progress_data')
      .eq('user_id', userId).single();

    var serverVersion = current ? (current.version || 0) : 0;

    if (cv !== null && cv < serverVersion) {
      // 客户端版本落后 — 服务端有更新的数据
      // 返回冲突，让客户端拉取最新数据
      return res.status(409).json({
        error: 'version_conflict',
        serverVersion: serverVersion,
        serverData: current ? current.progress_data : null,
      });
    }

    // 版本匹配或新记录 — 接受写入
    var newVersion = serverVersion + 1;
    var { error } = await supabase.from('user_progress').upsert(
      {
        user_id: userId,
        progress_data: data,
        version: newVersion,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );
    if (error) return res.status(500).json({ error: error.message });

    res.status(200).json({ ok: true, version: newVersion });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}
