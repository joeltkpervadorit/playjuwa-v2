import React from 'react';

export default function ModalOpenBlock({ v }) {
  return (
    <>{v.modalOpen ? (
      <>
      <div className="dp-modal" role="dialog" aria-modal="true" aria-labelledby="dp-mod-h" onKeyDown={v.modalKey}>
      <button className="dp-modal-bd" type="button" tabIndex="-1" aria-label="Close" onClick={v.closeModal} />
      <div className="dp-sheet">
      <div className="dp-sheet-h">
      <span className="dp-shield is-sm" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" /><path d="M8.8 12.2l2.2 2.2 4.2-4.4" /></svg></span>
      <h2 id="dp-mod-h">Secure payment</h2>
      {v.isDemo ? (<span className="dp-demo-tag">Demo</span>) : null}
      <button className="dp-x" type="button" aria-label="Close secure payment" onClick={v.closeModal}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
      </div>
      <div className="dp-sheet-body">
      {v.isDemo ? (
      <div className="dp-demo" role="note"><b>DEMO MODE</b><span>No real payment is taken and no coins are added. This only previews the outcome screens.</span></div>
      ) : null}
      <div className="dp-warn"><b>Come back to this screen after you pay</b><span>This is the only place your coins can land</span></div>
      <div className="dp-sum-hero">
      <img src={v.selImg} alt="" />
      <div><b>{v.selSc} <small>SWEEPS COINS</small></b>{v.hasFree ? (
      <><span className="dp-free">+{v.saveAmt} free included</span></>
      ) : null}<em>{v.selGc} GC</em></div>
      </div>
      <dl className="dp-rows">
      <div><dt>Paying with</dt><dd className="dp-paywith"><img src={v.selMethodIcon} alt="" />{v.selMethod}</dd></div>
      <div><dt>Package value</dt><dd>{v.pkgValue}</dd></div>
      {v.hasFree ? (
      <>
      <div><dt>Discount</dt><dd className="is-green">− {v.discPct}</dd></div>
      <div><dt>You save</dt><dd className="is-green">{v.saveAmt} ({v.discPct})</dd></div>
      </>
      ) : null}
      <div className="is-total"><dt>You pay today</dt><dd>{v.payAmt}</dd></div>
      </dl>
      </div>
      <div className="dp-sheet-foot">
      {v.isSuccess ? (
      <>
      <div className="dp-result is-ok" role="status">
      <b>{v.isDemo ? 'Demo payment succeeded' : 'Payment successful'}</b>
      <span>{v.isDemo ? 'Simulated only. Your balance was not changed.' : 'Your coins will appear in your balance shortly.'}</span>
      </div>
      <button className="dp-btn is-gold is-lg is-block" type="button" onClick={v.closeModal}>Done</button>
      </>
      ) : v.isFailed ? (
      <>
      <div className="dp-result is-bad" role="alert">
      <b>Payment didn&apos;t go through</b>
      <span>{v.checkoutErr || 'Something went wrong. No charge was made.'}</span>
      </div>
      <button className="dp-btn is-gold is-lg is-block" type="button" onClick={v.pay}>Try again</button>
      <button className="dp-link" type="button" onClick={v.closeModal}>Cancel this payment</button>
      </>
      ) : v.isDemoPhase ? (
      <>
      <p className="dp-demo-note">Choose an outcome to preview its screen. Nothing is charged.</p>
      <button className="dp-btn is-gold is-lg is-block" type="button" onClick={v.simulateSuccess}>Simulate Success</button>
      <button className="dp-btn is-lg is-block" type="button" onClick={v.simulateFailure}>Simulate Failure</button>
      <button className="dp-link" type="button" onClick={v.closeModal}>Cancel this payment</button>
      </>
      ) : (
      <>
      <button className="dp-btn is-gold is-lg is-block" type="button" onClick={v.pay} disabled={v.payBusy} aria-busy={v.payBusyStr}>{v.payBusy ? (
      <><span className="dp-spin" aria-hidden="true" /></>
      ) : null}{v.payLabel}</button>
      <small className="dp-takes">{v.payBusy ? 'Hang tight. This will time out after 15 seconds.' : 'Takes about 60 seconds.'}</small>
      <button className="dp-link" type="button" onClick={v.closeModal}>Cancel this payment</button>
      </>
      )}
      <p className="dp-fine"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>Payments are encrypted · <a href="#terms">Terms &amp; Policy</a></p>
      </div>
      </div>
      </div>
      </>
    ) : null}</>
  );
}
