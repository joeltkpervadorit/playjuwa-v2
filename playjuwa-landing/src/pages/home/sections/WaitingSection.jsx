import React from 'react';
import { css } from '../css.js';

export default function WaitingSection({ v }) {
  return (
    <section className="lp-sec lp-ww" id="waiting" aria-labelledby="ww-title" data-ww="">
      <div className="lp-ww-hd">
      <span className="lp-ww-crown" aria-hidden="true"><i /><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8l4.5 4 4.5-7 4.5 7L21 8l-2 11H5z" /></svg><i /></span>
      <h2 className="lp-ww-title" id="ww-title">What&rsquo;s Waiting <span className="pj-text-gold">For You?</span></h2>
      </div>
      <div className="lp-ww-grid">
      {(v.wwCards || []).map((c, __i4) => (
      <React.Fragment key={__i4}>
      <article className={`lp-ww-card ${c.cls ?? ""}`} style={css(c.style)}>
      <div className="lp-ww-bg" aria-hidden="true">
      <img className="lp-ww-scene" src="/assets/c9c52d7ca67312a52bdb4c7cbdea1a87.webp" alt="" />
      <i className="lp-ww-spark is-1" /><i className="lp-ww-spark is-2" /><i className="lp-ww-spark is-3" />
      </div>
      <div className="lp-ww-art" aria-hidden="true">
      <img className="lp-ww-deco is-a" src={c.decoA} alt="" />
      <img className="lp-ww-deco is-b" src={c.decoB} alt="" />
      <img className="lp-ww-mascot" src={c.mascot} alt="" />
      <img className="lp-ww-deco is-c" src={c.decoC} alt="" />
      </div>
      <div className="lp-ww-copy">
      <span className="lp-ww-ic" aria-hidden="true"><i /><span className="lp-ww-ic-svg">{c.isCrown ? (
      <><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8l4.5 4 4.5-7 4.5 7L21 8l-2 11H5z" /></svg></>
      ) : null}{c.isGift ? (
      <><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h16v10H4zM3 7h18v4H3z" /><path d="M11 7h2v14h-2z" fill="#1e1244" /><path d="M12 7C10 3 6.5 3.5 7 6c.3 1.3 2.6 1 5 1zm0 0c2-4 5.5-3.5 5-1-.3 1.3-2.6 1-5 1z" /></svg></>
      ) : null}{c.isTrophy ? (
      <><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v6a5 5 0 0 1-10 0z" /><path d="M4 4h3v3a2 2 0 0 1-3-1zM20 4h-3v3a2 2 0 0 0 3-1z" opacity=".75" /><path d="M11 14h2v4h-2zM8 19h8v2H8z" /></svg></>
      ) : null}</span><i /></span>
      <h3><span>{c.t1}</span> <span className="lp-ww-gold">{c.t2}</span></h3>
      <p>{c.text}</p>
      <a className="lp-ww-cta" href={c.href}><span>{c.cta}</span><span className="lp-ww-cta-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></span></a>
      </div>
      </article>
      </React.Fragment>
      ))}
      </div>
      </section>
  );
}
