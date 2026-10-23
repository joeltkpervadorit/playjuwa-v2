// Client side of the checkout request. Never resolves to a success that the server did not confirm.

const CHECKOUT_TIMEOUT_MS = 15000;

// Returns { mode: 'live', url } when a provider redirect is ready,
// or { mode: 'demo', id } when no live provider is configured (or no API exists, e.g. `vite` dev).
export async function createCheckout({ method, pkgIndex }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), CHECKOUT_TIMEOUT_MS);

  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ method, pkgIndex }),
      signal: controller.signal,
    });

    // No API route here (local dev or static hosting): fall back to Demo Mode.
    if (res.status === 404) return { mode: 'demo', id: 'demo_local' };

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Checkout could not start. Please try again.');
    return data;
  } catch (err) {
    if (err && err.name === 'AbortError') {
      throw new Error('Checkout timed out. Check your connection and try again.');
    }
    if (err instanceof TypeError) {
      throw new Error('Could not reach the payment service. Check your connection and try again.');
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
