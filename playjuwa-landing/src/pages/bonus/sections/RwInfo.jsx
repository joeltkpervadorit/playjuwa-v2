import React from 'react';

export default function RwInfo({ v }) {
  return (
    <div className="rw-info">
      <section className="rw-how" aria-labelledby="rw-how-h">
      <span className="rw-eyebrow">How bonuses work</span>
      <h2 id="rw-how-h">Claim in <span className="pj-text-gold">3 steps</span></h2>
      <ol className="rw-steps">
      <li><span className="rw-step-n" aria-hidden="true">1</span><div><b>View offer</b><small>Pick a reward and see exactly what it gives.</small></div></li>
      <li><span className="rw-step-n" aria-hidden="true">2</span><div><b>Check requirements</b><small>Each card lists who can claim it and any conditions.</small></div></li>
      <li><span className="rw-step-n" aria-hidden="true">3</span><div><b>Claim reward</b><small>Tap the button. We confirm it before your balance updates.</small></div></li>
      </ol>
      <p className="rw-npn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg><span><b>No purchase necessary.</b> Free rewards reset every 24 hours.</span></p>
      </section>
      <section className="rw-faq" aria-labelledby="rw-faq-h">
      <span className="rw-eyebrow">Good to know</span>
      <h2 id="rw-faq-h">Bonus <span className="pj-text-gold">FAQ</span></h2>
      <details className="rw-q"><summary>Who can claim a bonus?<i aria-hidden="true" /></summary><p>Each reward shows who it’s for on its card. Some need a signed-in or verified (KYC) account, and some unlock at a VIP level, like CoinBack at Platinum.</p></details>
      <details className="rw-q"><summary>How do I claim a reward?<i aria-hidden="true" /></summary><p>Open the offer, check its requirements, then tap its button. Your balance only updates once the claim is confirmed. If something goes wrong you’ll see an error and can try again.</p></details>
      <details className="rw-q"><summary>What are bonus requirements?<i aria-hidden="true" /></summary><p>Conditions such as a verification step, a VIP level or a once-a-day limit are listed under “View terms” on each card. Playthrough and expiry rules are in the <a href="#sweeps">Sweepstakes Rules</a>.</p></details>
      </section>
      </div>
  );
}
