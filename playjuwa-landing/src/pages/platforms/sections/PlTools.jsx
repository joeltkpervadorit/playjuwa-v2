import React from 'react';

export default function PlTools({ v }) {
  return (
    <div className="pl-tools">
      <label className="pl-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" /></svg><span className="lp-sr">Search platforms</span><input type="search" placeholder="Search platforms…" value={v.q} onChange={v.onSearch} onKeyDown={v.onSearchKey} enterKeyHint="search" autoComplete="off" /></label>
      <div className="pl-chips" role="tablist" aria-label="Filter platforms">
      {(v.filters || []).map((f, __i4) => (
      <React.Fragment key={__i4}><button className="pl-chip" type="button" role="tab" aria-selected={f.on} onClick={f.pick}>{f.label}<span className="pl-chip-n">{f.n}</span></button></React.Fragment>
      ))}
      </div>
      </div>
  );
}
