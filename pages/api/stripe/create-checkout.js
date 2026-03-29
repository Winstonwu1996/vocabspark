import Stripe from 'stripe';
import { getPriceId } from '../../../lib/stripe-prices';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  var secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: 'Stripe secret key not configured' });
  }

  var stripe = new Stripe(secretKey);

  var { tier, billing, byoKey, userId, userEmail } = req.body || {};

  if (!tier || !billing || !userId) {
    return res.status(400).json({ error: 'Missing tier, billing, or userId' });
  }

  var priceId = getPriceId(tier, billing, byoKey);
  if (!priceId) {
    return res.status(400).json({ error: 'Invalid plan configuration' });
  }

  try {
    var session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'alipay'],
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: {
        userId: userId,
        tier: tier,
        billing: billing,
        byoKey: byoKey ? 'true' : 'false',
      },
      customer_email: userEmail || undefined,
      success_url: 'https://knowulearning.com/plan?success=1&session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://knowulearning.com/plan?canceled=1',
    });

    res.status(200).json({ url: session.url });
  } catch (e) {
    console.error('Stripe error:', e.type, e.message, e.code);
    res.status(500).json({ error: e.message, code: e.code || 'unknown' });
  }
}
