import React from 'react';

export default function LkBar({ v }) {
  return (
    <div className="lk-bar">
      <h2 id="lk-h"><span>{v.lkTitle}</span> <em>({v.lkCount})</em></h2>
      <label className="lk-sort"><span className="lp-sr">Sort games</span><select value={v.lsort} onChange={v.onSort}><option value="featured">Sort: Featured</option><option value="az">Sort: A–Z</option><option value="za">Sort: Z–A</option></select><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></label>
      </div>
  );
}
