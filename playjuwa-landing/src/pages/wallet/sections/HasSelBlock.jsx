import React from 'react';

export default function HasSelBlock({ v }) {
  return (
    <>{v.hasSel ? (
      <>
      <div className="wl-dr" role="dialog" aria-modal="true" aria-labelledby="dr-h">
      <button className="wl-dr-bg" type="button" aria-label="Close transaction details" onClick={v.closeSel} />
      <aside className="wl-dr-panel">
      <div className="wl-dr-h">
      <span className={`wl-tic is-lg ${v.d.typeCls ?? ""}`} aria-hidden="true"><i /></span>
      <div><small>{v.d.typeLabel}</small><h2 id="dr-h">{v.d.desc}</h2></div>
      <button className="wl-dr-x" type="button" aria-label="Close" onClick={v.closeSel} data-wl-close=""><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
      </div>
      <div className="wl-dr-body">
      <div className="wl-dr-amts">
      <div className="is-gc"><img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" /><span><small>Gold Coins</small><b className={`wl-amt ${v.d.gcCls ?? ""}`}>{v.d.gcFull}</b></span></div>
      <div className="is-sc"><img src="/assets/b1551f22a5fce6ec1f9c62af9e8d8675.png" alt="" /><span><small>Sweepstakes Coins</small><b className={`wl-amt ${v.d.scCls ?? ""}`}>{v.d.scFull}</b></span></div>
      </div>
      <div className={`wl-dr-status ${v.d.stCls ?? ""}`} role="status">
      <span className={v.d.pill}>{v.d.statusLabel}</span>
      <p><b>{v.d.msgTitle}</b>{v.d.msg}</p>
      </div>
      <dl className="wl-dl">
      <div><dt>Transaction ID</dt><dd><code>{v.d.id}</code><button className="wl-copy" type="button" onClick={v.copyId} aria-label="Copy transaction ID">{v.copyLabel}</button></dd></div>
      <div><dt>Date &amp; time</dt><dd>{v.d.dateLong}</dd></div>
      <div><dt>Type</dt><dd>{v.d.typeLabel}</dd></div>
      <div><dt>Description</dt><dd>{v.d.desc}</dd></div>
      {(v.d.extra || []).map((x, __i7) => (
      <React.Fragment key={__i7}>
      <div><dt>{x.k}</dt><dd className={x.cls}>{x.v}</dd></div>
      </React.Fragment>
      ))}
      </dl>
      </div>
      <div className="wl-dr-f">
      {v.d.canRetry ? (
      <><a className="wl-btn is-gold" href={v.nBuy}>Try Purchase Again</a></>
      ) : null}
      <a className="wl-btn is-ghost" href="#support">Contact Support</a>
      <button className="wl-btn is-plain" type="button" onClick={v.closeSel}>Close</button>
      </div>
      </aside>
      </div>
      </>
    ) : null}</>
  );
}
