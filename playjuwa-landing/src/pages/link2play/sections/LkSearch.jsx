import React from 'react';

export default function LkSearch({ v }) {
  return (
    <div className="lk-search" role="search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
      <label className="lp-sr" htmlFor="lk-q">Find a game</label>
      <input id="lk-q" type="search" placeholder="Find a game…" value={v.lq} onChange={v.onQ} autoComplete="off" enterKeyHint="search" />
      {v.hasQ ? (
      <><button className="lk-clear" type="button" aria-label="Clear search" onClick={v.clearQ}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg></button></>
      ) : null}
      </div>
  );
}
