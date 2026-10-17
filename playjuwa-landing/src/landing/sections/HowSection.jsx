import React from 'react';

export default function HowSection({ v }) {
  return (
    <section className="lp-sec lp-how" id="how" aria-labelledby="how-title">
      <div className="lp-how-hero">
      <div className="lp-how-art" aria-hidden="true"><img src="/assets/how-hero.webp" alt="" /></div>
      <div className="lp-how-head">
      <h2 id="how-title"><span className="lp-how-l1">How to Play in</span><span className="lp-how-l2 pj-text-gold">3 Easy Steps<img className="lp-how-crown" src="/assets/hot-crown.png" alt="" /></span></h2>
      <p>Play, Win and Redeem — It’s that Simple!</p>
      </div>
      </div>
      <ol className="lp-how-steps">
      <li className="lp-hstep">
      <span className="lp-hstep-num" aria-hidden="true">1</span>
      <div className="lp-hstep-card is-1">
      <div className="lp-hstep-body">
      <h3><span className="lp-sr">Step 1: </span>Sign Up &amp; Get <span className="pj-text-gold">Rewards</span></h3>
      <ul className="lp-hstep-perks">
      <li><img src="/assets/coin-sc.png" alt="" /><b className="is-gold">15,000 GC</b></li>
      <li><img src="/assets/coin-half-sc.png" alt="" /><b className="is-green">0.5 SC</b></li>
      <li><img src="/assets/bonus-100-pct.png" alt="" /><b className="is-gold">+100% Bonus</b><small>(On 1st Purchase)</small></li>
      </ul>
      <a className="lp-hstep-cta" href="#signup">Claim Now<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a>
      </div>
      <img className="lp-hstep-art is-gift" src="/assets/how-gift.png" alt="" />
      </div>
      </li>
      <li className="lp-hstep">
      <span className="lp-hstep-num" aria-hidden="true">2</span>
      <div className="lp-hstep-card is-2">
      <div className="lp-hstep-body">
      <h3><span className="lp-sr">Step 2: </span>Play Slots, <span className="pj-text-gold">Fish, Tables,</span> and More!</h3>
      <p>Use Gold Coins (GC) for fun or SweepStake Coins (SC) to win real cash prizes.</p>
      <div className="lp-hstep-tiles">
      <a href={v.nCasino} aria-label="Slots"><img src="/assets/how-slots.png" alt="" /></a>
      <a href={v.nCasino} aria-label="Fishing"><img src="/assets/how-fishing.png" alt="" /></a>
      <a href={v.nCasino} aria-label="Live Casino"><img src="/assets/how-live-casino.png" alt="" /></a>
      <a href={v.nCasino} aria-label="Table Games"><img src="/assets/how-table-games.png" alt="" /></a>
      </div>
      </div>
      </div>
      </li>
      <li className="lp-hstep">
      <span className="lp-hstep-num" aria-hidden="true">3</span>
      <div className="lp-hstep-card is-3">
      <div className="lp-hstep-body">
      <h3><span className="lp-sr">Step 3: </span>Redeem Your <span className="lp-green">SC</span> Instantly</h3>
      <p>To your Bank Account, Debit Card, or Gift Cards!</p>
      </div>
      <img className="lp-hstep-art is-wallet" src="/assets/how-wallet.png" alt="" />
      </div>
      </li>
      </ol>
      </section>
  );
}
