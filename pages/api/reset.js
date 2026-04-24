import { createClient } from '@supabase/supabase-js';

var supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

// 专用重置端点：服务端权威清零 + bump version
// 保留字段：profile / wordInput / settings / tipDismissed
// 清零字段：stats / wordStatusMap / reviewWordData / completedWords / session / dailyNewQuotaState
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  var { userId } = req.body || {};
  if (!userId) return res.status(400).json({ error: 'missing userId' });

  try {
    // 读取当前服务端数据 —— 提取要保留的字段
    var { data: current } = await supabase
      .from('user_progress').select('version, progress_data')
      .eq('user_id', userId).single();

    var oldData = (current && current.progress_data) || {};
    var serverVersion = (current && current.version) || 0;

    var cleared = {
      schemaVersion: 2,
      // 保留的字段
      profile: oldData.profile,
      wordInput: oldData.wordInput,
      settings: oldData.settings,
      tipDismissed: oldData.tipDismissed,
      // 清零的字段
      stats: { correct: 0, total: 0, streak: 0, bestStreak: 0, xp: 0 },
      wordStatusMap: {},
      reviewWordData: {},
      completedWords: [],
      session: null,
      dailyNewQuotaState: null,
      updatedAt: new Date().toISOString(),
    };

    var newVersion = serverVersion + 1;
    var { error } = await supabase.from('user_progress').upsert(
      {
        user_id: userId,
        progress_data: cleared,
        version: newVersion,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );
    if (error) return res.status(500).json({ error: error.message });

    res.status(200).json({ ok: true, version: newVersion, data: cleared });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
