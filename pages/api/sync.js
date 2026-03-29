import { createClient } from '@supabase/supabase-js';

var supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export const config = { api: { bodyParser: { sizeLimit: '1mb' } } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  var { userId, data } = req.body || {};
  if (!userId || !data) return res.status(400).json({ error: 'missing userId or data' });

  try {
    var { error } = await supabase.from('user_progress').upsert(
      { user_id: userId, progress_data: data, updated_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    );
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}
