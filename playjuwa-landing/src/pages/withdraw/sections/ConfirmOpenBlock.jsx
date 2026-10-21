import React from 'react';

export default function ConfirmOpenBlock({ v }) {
  return (
    <>{v.confirmOpen ? (
      <>
      <div className="wd-modal" role="alertdialog" aria-modal="true" aria-labelledby="wd-cf-h" aria-describedby="wd-cf-p">
      <button className="wl-dr-bg" type="button" aria-label="Cancel" onClick={v.closeConfirm} disabled={v.submitting} />
      <div className="wd-modal-card">
      <span className="wd-modal-ic" aria-hidden="true"><span className="nv-ic ic-withdraw" /></span>
      <h2 id="wd-cf-h">Submit redemption request?</h2>
      <p id="wd-cf-p">You’re requesting to redeem <b>{v.amtShowPlain}</b> to <b>{v.methodName} {v.payoutMaskShort}</b>. Once submitted, the request goes to review and can’t be edited.</p>
      <div className="wd-modal-acts">
      <button className="wl-btn is-line" type="button" onClick={v.closeConfirm} disabled={v.submitting} data-wd-cancel="">Cancel</button>
      <button className="wl-btn is-gold" type="button" onClick={v.submit} disabled={v.submitting}>{v.submitLabel}</button>
      </div>
      </div>
      </div>
      </>
    ) : null}</>
  );
}
