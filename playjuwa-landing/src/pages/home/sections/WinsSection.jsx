import React from 'react';

export default function WinsSection({ v }) {
  return (
    <section className="lp-sec" aria-labelledby="wins-title">
      <div className="lp-sh">
      <div><span className="lp-eyebrow">Winners</span><h2 className="lp-st" id="wins-title"><svg className="lp-st-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 8l4 4 4-6 4 6 4-4-2 10H6z" /></svg>Recent <span className="pj-text-gold">Big Wins</span></h2></div>
      <a className="lp-viewall lp-dsk-only" href="/casino">View All<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      </div>
      <div className="lp-ticker" tabIndex="0" aria-label="Recent big wins, scrolling. Hover or focus to pause.">
      <div className="lp-track">
      {(v.winsLoop || []).map((w, __i5) => (
      <React.Fragment key={__i5}>
      <div className="lp-win" aria-hidden={w.dup}>
      {w.img ? (
      <><img src={w.img} alt="" /></>
      ) : null}
      {w.noImg ? (
      <><span className="lp-mono" aria-hidden="true">{w.mono}</span></>
      ) : null}
      <div>
      <div className="lp-win-game">{w.game}</div>
      <div className="lp-win-player" title={w.player}>{w.short}</div>
      </div>
      <div className="lp-win-amt"><img className="lp-win-coin" src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" /><b>{w.amountNum}</b><span className="lp-sc" aria-label="SC">SC</span></div>
      </div>
      </React.Fragment>
      ))}
      </div>
      </div>
      </section>
  );
}
