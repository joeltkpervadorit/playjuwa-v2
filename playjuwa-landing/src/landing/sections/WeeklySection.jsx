import React from 'react';

export default function WeeklySection({ v }) {
  return (
    <section className="lp-sec" aria-labelledby="weekly-title">
      <div className="lp-wl">
      <div className="lp-wl-main">
      <div className="lp-wl-head">
      <div><span className="lp-eyebrow lp-wl-eye">Weekly leaderboard</span><h2 className="lp-wl-title" id="weekly-title">Biggest <span className="pj-text-gold">Weekly Wins</span></h2></div>
      <span className="lp-wl-live"><i aria-hidden="true" />This week</span>
      </div>
      <div className="lp-wl-cols" aria-hidden="true"><span>#</span><span>Player</span><span>Multiplier</span><span>Total win</span></div>
      <ol className="lp-wl-list" aria-labelledby="weekly-title">
      <li className="lp-wl-row is-top is-r1"><span className="lp-wl-rank"><span className="lp-sr">Rank </span>1</span><span className="lp-wl-player"><span className="lp-wl-ava" aria-hidden="true">P</span><span className="lp-wl-name">Player****</span><svg className="lp-wl-crown" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="First place"><path d="M4 8l4 4 4-6 4 6 4-4-2 10H6z" /></svg></span><span className="lp-wl-mult"><span className="lp-sr">Multiplier </span>1.2x</span><span className="lp-wl-total"><span className="lp-sr">Total win </span><img className="lp-wl-coin" src="/assets/coin-sc.png" alt="" />1,405.70</span></li>
      <li className="lp-wl-row is-top is-r2"><span className="lp-wl-rank"><span className="lp-sr">Rank </span>2</span><span className="lp-wl-player"><span className="lp-wl-ava" aria-hidden="true">P</span><span className="lp-wl-name">Player****</span></span><span className="lp-wl-mult"><span className="lp-sr">Multiplier </span>1.22x</span><span className="lp-wl-total"><span className="lp-sr">Total win </span><img className="lp-wl-coin" src="/assets/coin-sc.png" alt="" />1,182.89</span></li>
      <li className="lp-wl-row is-top is-r3"><span className="lp-wl-rank"><span className="lp-sr">Rank </span>3</span><span className="lp-wl-player"><span className="lp-wl-ava" aria-hidden="true">P</span><span className="lp-wl-name">Player****</span></span><span className="lp-wl-mult"><span className="lp-sr">Multiplier </span>1.25x</span><span className="lp-wl-total"><span className="lp-sr">Total win </span><img className="lp-wl-coin" src="/assets/coin-sc.png" alt="" />549.17</span></li>
      <li className="lp-wl-row"><span className="lp-wl-rank"><span className="lp-sr">Rank </span>4</span><span className="lp-wl-player"><span className="lp-wl-ava" aria-hidden="true">P</span><span className="lp-wl-name">Player****</span></span><span className="lp-wl-mult"><span className="lp-sr">Multiplier </span>162x</span><span className="lp-wl-total"><span className="lp-sr">Total win </span><img className="lp-wl-coin" src="/assets/coin-sc.png" alt="" />324.00</span></li>
      <li className="lp-wl-row"><span className="lp-wl-rank"><span className="lp-sr">Rank </span>5</span><span className="lp-wl-player"><span className="lp-wl-ava" aria-hidden="true">P</span><span className="lp-wl-name">Player****</span></span><span className="lp-wl-mult"><span className="lp-sr">Multiplier </span>60x</span><span className="lp-wl-total"><span className="lp-sr">Total win </span><img className="lp-wl-coin" src="/assets/coin-sc.png" alt="" />300.00</span></li>
      </ol>
      </div>
      </div>
      </section>
  );
}
