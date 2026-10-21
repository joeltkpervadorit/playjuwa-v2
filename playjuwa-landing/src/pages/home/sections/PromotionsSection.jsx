import React from 'react';

export default function PromotionsSection({ v }) {
  return (
    <section className="lp-sec lp-revsec" id="promotions" aria-labelledby="rev-title">
      <div className="lp-sh">
      <div><span className="lp-eyebrow">Player Reviews</span><h2 className="lp-st" id="rev-title">What Players Say <span className="pj-text-gold">About Play Juwa</span></h2></div>
      <div className="lp-rev-nav">
      <button type="button" aria-label="Previous reviews" onClick={v.revPrev}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg></button>
      <button type="button" aria-label="Next reviews" onClick={v.revNext}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg></button>
      </div>
      </div>
      <div className="lp-revs lp-rail" ref={v.revRef} tabIndex="0" role="list" aria-label="Player reviews">
      {(v.reviews || []).map((r, __i4) => (
      <React.Fragment key={__i4}>
      <figure className={r.cls} role="listitem">
      <svg className="lp-rev-quote" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true"><path d="M8 38V27c0-9 4-15 13-18l2 4c-5 2-7 5-7 9h7v16zm22 0V27c0-9 4-15 13-18l2 4c-5 2-7 5-7 9h7v16z" /></svg>
      <div className="lp-stars" role="img" aria-label="Rated 5 out of 5"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" /></svg><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" /></svg></div>
      <blockquote><q>{r.text}</q></blockquote>
      <figcaption className="lp-rev-who"><span className="lp-rev-ava" aria-hidden="true">{r.initial}</span><span><span className="lp-rev-name">{r.name}</span><span className="lp-rev-city">{r.city}</span></span></figcaption>
      </figure>
      </React.Fragment>
      ))}
      </div>
      </section>
  );
}
