// POST /api/checkout — starts a payment for one package.
//
// Secrets stay server-side. Configure in Vercel (Project → Settings → Environment Variables):
//   PAYMENT_PROVIDER         name of the live provider adapter to use (unset = demo mode)
//   PAYMENT_API_KEY          provider secret key
//   PAYMENT_WEBHOOK_SECRET   used by /api/payment-webhook to verify provider signatures
//   PUBLIC_SITE_URL          e.g. https://playjuwa-v2-oc3y.vercel.app (return URL base)
//
// With no PAYMENT_PROVIDER set, this returns { mode: 'demo' }. The client then shows the
// Demo Mode UI. Demo payments never create a checkout or touch coin balances.

const METHODS = ['card', 'cashapp', 'chimeauto', 'chimemanual', 'apple', 'gpay', 'crypto'];
const PACKAGE_COUNT = 12;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};
  const { method, pkgIndex } = body;

  if (!METHODS.includes(method) || !Number.isInteger(pkgIndex) || pkgIndex < 0 || pkgIndex >= PACKAGE_COUNT) {
    return res.status(400).json({ error: 'Choose a payment method and package first.' });
  }

  const provider = process.env.PAYMENT_PROVIDER;
  if (!provider) {
    return res.status(200).json({ mode: 'demo', id: `demo_${Date.now().toString(36)}` });
  }

  // Live providers are not wired yet. Fail loudly so the user sees a retry state,
  // rather than leaving the checkout spinning.
  return res.status(503).json({
    error: `Live payments are not available yet (provider "${provider}" is not configured). Please try again later.`,
  });
}

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}
