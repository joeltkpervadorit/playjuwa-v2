import React from 'react';

export default function BlSearch({ v }) {
  return (
    <div className="bl-search" role="search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
      <label className="lp-sr" htmlFor="bl-q">Search articles</label>
      <input id="bl-q" type="search" placeholder="Search articles…" value={v.bq} onChange={v.onBq} autoComplete="off" enterKeyHint="search" />
      {v.hasBq ? (
      <><button className="bl-clear" type="button" aria-label="Clear search" onClick={v.clearBq}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg></button></>
      ) : null}
      </div>
  );
}
