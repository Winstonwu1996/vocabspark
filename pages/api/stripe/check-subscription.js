import { createClient } from '@supabase/supabase-js';

var supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
);

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  var userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: 'Missing userId' });

  try {
    // 不用 .single()：0 行和 >1 行都会报 PGRST116，无法和真正的 DB 错误区分。
    // 改用 limit(1) 取数组，自己判空——把"确认无订阅"和"查不了"彻底分开。
    var { data, error } = await supabase
      .from('user_subscriptions')
      .select('tier, billing_cycle, byo_key, status, expires_at')
      .eq('user_id', userId)
      .eq('status', 'active')
      .gte('expires_at', new Date().toISOString())
      .order('expires_at', { ascending: false })
      .limit(1);

    if (error) {
      // 真正的 DB/网络错误 → 503 transient，绝不当作"无订阅"。
      // 否则部署抖动/DB 抽风会把付费用户误降级成 free 并锁在免费墙后（chompcloud Pro 被锁根因）。
      console.warn('[check-subscription] db error, returning transient:', error.message);
      return res.status(503).json({ error: 'tier check unavailable', transient: true });
    }

    if (!data || data.length === 0) {
      // 查询成功且确认无有效订阅 → 真 free
      return res.status(200).json({ tier: 'free', isActive: false });
    }

    var sub = data[0];
    res.status(200).json({
      tier: sub.tier,
      billingCycle: sub.billing_cycle,
      byoKey: sub.byo_key,
      expiresAt: sub.expires_at,
      isActive: true,
    });
  } catch (e) {
    // 异常同样按 transient 处理，不误判 free（付费用户优先不误伤）
    console.warn('[check-subscription] exception, returning transient:', e.message);
    res.status(503).json({ error: 'tier check failed', transient: true });
  }
}
