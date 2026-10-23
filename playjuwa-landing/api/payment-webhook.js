// POST /api/payment-webhook — receives provider events.
// Signature is HMAC-SHA256 of the raw request body, using PAYMENT_WEBHOOK_SECRET.
// The header name is configurable with PAYMENT_SIGNATURE_HEADER (default x-payment-signature).
//
// Coins must only be credited here, after a verified event, never from the browser.
// No database is connected yet, so verified events are acknowledged but not persisted.

import crypto from 'node:crypto';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const secret = process.env.PAYMENT_WEBHOOK_SECRET;
  if (!secret) {
    return res.status(503).json({ error: 'Webhook secret is not configured.' });
  }

  const raw = await readRawBody(req);
  const headerName = (process.env.PAYMENT_SIGNATURE_HEADER || 'x-payment-signature').toLowerCase();
  const signature = req.headers[headerName];
  const expected = crypto.createHmac('sha256', secret).update(raw).digest('hex');

  if (!signature || !safeEqual(String(signature), expected)) {
    return res.status(401).json({ error: 'Invalid signature.' });
  }

  let event;
  try {
    event = JSON.parse(raw.toString('utf8'));
  } catch {
    return res.status(400).json({ error: 'Invalid JSON.' });
  }

  // TODO: persist event.id (idempotency) and credit coins once the database is connected.
  console.info('[payment-webhook] verified event', event && event.type ? event.type : 'unknown');
  return res.status(200).json({ received: true });
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function safeEqual(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB);
}
