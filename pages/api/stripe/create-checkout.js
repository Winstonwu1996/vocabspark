import { getPriceId } from '../../../lib/stripe-prices';

export const config = { maxDuration: 30 };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  var secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: 'STRIPE_SECRET_KEY not set' });
  }

  var { tier, billing, byoKey, userId, userEmail } = req.body || {};
  if (!tier || !billing || !userId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  var priceId = getPriceId(tier, billing, byoKey);
  if (!priceId) {
    return res.status(400).json({ error: 'Invalid plan config' });
  }

  // 直接用 fetch 调用 Stripe API，避免 SDK 连接问题
  var params = new URLSearchParams();
  params.append('mode', 'payment');
  params.append('payment_method_types[0]', 'card');
  params.append('payment_method_types[1]', 'alipay');
  params.append('line_items[0][price]', priceId);
  params.append('line_items[0][quantity]', '1');
  params.append('metadata[userId]', userId);
  params.append('metadata[tier]', tier);
  params.append('metadata[billing]', billing);
  params.append('metadata[byoKey]', byoKey ? 'true' : 'false');
  if (userEmail) params.append('customer_email', userEmail);
  params.append('allow_promotion_codes', 'true');
  params.append('success_url', 'https://knowulearning.com/plan?success=1&session_id={CHECKOUT_SESSION_ID}');
  params.append('cancel_url', 'https://knowulearning.com/plan?canceled=1');

  try {
    var response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + secretKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    var data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error ? data.error.message : 'Stripe API error', detail: data.error });
    }

    return res.status(200).json({ url: data.url });
  } catch (e) {
    return res.status(500).json({ error: 'Network error: ' + e.message });
  }
}
