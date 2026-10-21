import React from 'react';

export default function DpBar({ v }) {
  return (
    <div className="dp-bar" role="region" aria-label="Deposit progress">
      <div className="dp-bar-in">
      <span className="dp-bar-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h2.2l.5 2H20a1 1 0 0 1 1 1.3l-1.6 6a1 1 0 0 1-1 .7H8.2l.3 1.2H18v2H7.7a1 1 0 0 0-1-.8L4.4 6H3zM9 19.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm8 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" /></svg></span>
      <div className="dp-bar-txt"><small>{v.barStep}</small><b>{v.barTitle}</b>{v.barSub ? (
      <><span>{v.barSub}</span></>
      ) : null}</div>
      <button className="dp-btn is-gold is-lg" type="button" disabled={v.barDisabled} onClick={v.barAction}><span>{v.barCta}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
      </div>
      </div>
  );
}
