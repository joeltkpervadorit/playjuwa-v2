import React from 'react';

export default function HasSelBlock({ v }) {
  return (
    <>{v.hasSel ? (
      <>
      <div className="wl-dr" role="dialog" aria-modal="true" aria-labelledby="wd-dr-h">
      <button className="wl-dr-bg" type="button" aria-label="Close redemption details" onClick={v.closeSel} />
      <aside className="wl-dr-panel">
      <div className="wl-dr-h">
      <span className="wl-tic is-lg t-redemption" aria-hidden="true"><i /></span>
      <div><small>Redemption</small><h2 id="wd-dr-h">{v.d.amt}</h2></div>
      <button className="wl-dr-x" type="button" aria-label="Close" onClick={v.closeSel} data-wl-close=""><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
      </div>
      <div className="wl-dr-body">
      <div className={`wl-dr-status ${v.d.stCls ?? ""}`} role="status">
      <span className={v.d.pill}>{v.d.statusLabel}</span>
      <p><b>{v.d.title}</b>{v.d.msg}</p>
      </div>
      {v.d.hasReason ? (
      <><p className="wd-res-reason"><b>Reason</b>{v.d.reason}</p></>
      ) : null}
      <dl className="wl-dl">
      <div><dt>Transaction ID</dt><dd><code>{v.d.id}</code><button className="wl-copy" type="button" onClick={v.copyId} aria-label="Copy transaction ID">{v.copyLabel}</button></dd></div>
      <div><dt>Reference</dt><dd><code>{v.d.ref}</code></dd></div>
      <div><dt>Date &amp; time</dt><dd>{v.d.dateLong}</dd></div>
      <div><dt>Amount</dt><dd>{v.d.amt}</dd></div>
      <div><dt>Payment method</dt><dd>{v.d.method}</dd></div>
      <div><dt>Status</dt><dd>{v.d.statusLabel}</dd></div>
      </dl>
      </div>
      <div className="wl-dr-f">
      {v.d.canRetry ? (
      <><button className="wl-btn is-gold" type="button" onClick={v.retryFromDetail}>Start New Request</button></>
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
