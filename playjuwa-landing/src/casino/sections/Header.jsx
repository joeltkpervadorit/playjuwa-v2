import React from 'react';

export default function Header({ v }) {
  return (
    <header className="by-top">
      <a className="by-logo" href={v.nHome} aria-label="PlayJuwa home"><img src="/assets/9048a242fcde0c3b392353f435007399.png" alt="PlayJuwa" /></a>
      <a className="by-search" href="#search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" /></svg>Search games, providers…</a>
      <div className="by-right">
      <span className="by-bal"><img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" /><span className="lp-sr">Sweepstakes coins balance: </span>{v.balSc} SC</span>
      <span className="by-bal is-gc"><img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" /><span className="lp-sr">Gold coins balance: </span>{v.balGc} GC</span>
      <button className="by-plus" type="button" aria-label="Buy coins" onClick={v.goBuyBtn}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></button>
      <button className="by-ic" type="button" aria-label="Notifications, 1 unread"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3a6 6 0 0 0-6 6v3.6L4.3 15.4A1 1 0 0 0 5.2 17h13.6a1 1 0 0 0 .9-1.6L18 12.6V9a6 6 0 0 0-6-6zm0 18a2.5 2.5 0 0 0 2.4-2h-4.8A2.5 2.5 0 0 0 12 21z" /></svg><i /></button>
      <button className="by-ava" type="button" aria-label="Account menu" onClick={v.goAcctBtn}><b>J</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button>
      </div>
      </header>
  );
}
