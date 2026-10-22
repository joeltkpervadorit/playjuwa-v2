import React from 'react';

export default function SpinHero({ v }) {
  return (
    <header className="sp-head">
      <div className="sp-deco" aria-hidden="true">
      <img className="sp-fl is-coin-a" src="/assets/11ef8cbb2900a3979b8a2493012e9391.webp" alt="" />
      <img className="sp-fl is-gift-a" src="/assets/96c8e0e9aadd3d69b1e069a0e6fd647e.webp" alt="" />
      <img className="sp-fl is-coin-b" src="/assets/cabf0dbe7572dd0a60753b3e0147bc9b.webp" alt="" />
      <span className="sp-fl is-gift-b"><img src="/assets/96c8e0e9aadd3d69b1e069a0e6fd647e.webp" alt="" /></span>
      <img className="sp-fl is-stack-a" src="/assets/11ef8cbb2900a3979b8a2493012e9391.webp" alt="" />
      <i className="sp-star is-1" /><i className="sp-star is-2" /><i className="sp-star is-3" />
      </div>
      <span className="sp-pill"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8l4.5 4 4.5-7 4.5 7L21 8l-2 11H5z" fill="currentColor" /></svg>Daily Reward</span>
      <h1><span className="sp-h1a">Daily Spin<img className="sp-crown" src="/assets/7fec325bc2590983a0687ec17309f58a.webp" alt="" /></span> <span className="sp-h1b">Wheel</span></h1>
      <p>Spin the wheel for a free reward. One free spin every 24 hours.</p>
      </header>
  );
}
