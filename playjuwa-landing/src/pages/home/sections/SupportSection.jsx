import React from 'react';

export default function SupportSection({ v }) {
  return (
    <section className="lp-sec lp-why" id="support" aria-labelledby="why-title">
      <div className="lp-why-bg" aria-hidden="true"><img src="/assets/f67f09087ff656474cbaab2c9ecad1bd.webp" alt="" /></div>
      <div className="lp-sh">
      <div><span className="lp-eyebrow">Why Play Juwa</span><h2 className="lp-st" id="why-title">Why <span className="pj-text-gold">Join Us</span></h2></div>
      </div>
      <div className="lp-reasons lp-pop-group" role="list">
      <article className="lp-why-card" role="listitem">
      <span className="lp-why-num" aria-hidden="true">01</span>
      <h3>24/7 Customer Support</h3>
      <p>Get help whenever you need it.</p>
      <span className="lp-why-bar" aria-hidden="true" />
      <span className="lp-why-art" aria-hidden="true"><img src="/assets/4eb6f70efb43a9e3b5de54b8f94edfad.webp" alt="" /></span>
      </article>
      <article className="lp-why-card is-violet" role="listitem">
      <span className="lp-why-num" aria-hidden="true">02</span>
      <h3>Same Day Redemption</h3>
      <p>Fast redemption options.</p>
      <span className="lp-why-bar" aria-hidden="true" />
      <span className="lp-why-art" aria-hidden="true"><img src="/assets/dc6a2d6208eebb76f40391c6e60b21e5.webp" alt="" /></span>
      </article>
      <article className="lp-why-card" role="listitem">
      <span className="lp-why-num" aria-hidden="true">03</span>
      <h3>Safe and Secure</h3>
      <p>Protected transactions and account security.</p>
      <span className="lp-why-bar" aria-hidden="true" />
      <span className="lp-why-art" aria-hidden="true"><img src="/assets/ac1cfc2898107279dc27e40887d4ded8.webp" alt="" /></span>
      </article>
      <article className="lp-why-card is-violet" role="listitem">
      <span className="lp-why-num" aria-hidden="true">04</span>
      <h3>Join Millions of Players</h3>
      <p>Be part of the PlayJuwa gaming community.</p>
      <span className="lp-why-bar" aria-hidden="true" />
      <span className="lp-why-art" aria-hidden="true"><img src="/assets/985d8ac7783d7fa45b8d3c63ef90ce8e.webp" alt="" /></span>
      </article>
      </div>
      </section>
  );
}
