import React from 'react';
import { Button } from '../../components/ds.jsx';

export default function LoginPrompt({ v }) {
  return (
    <>{v.loginOpen ? (
      <>
      <div className="lp-modal" onKeyDown={v.onModalKey}>
      <button className="lp-modal-backdrop" type="button" tabIndex="-1" aria-label="Close" onClick={v.closeLogin} />
      <div className="lp-modal-card" role="dialog" aria-modal="true" aria-labelledby="lp-modal-title">
      <button className="lp-modal-x" type="button" aria-label="Close" onClick={v.closeLogin}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
      <span className="lp-modal-ic" aria-hidden="true"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="13" width="22" height="15" rx="3" fill="#ff5fa2" /><rect x="3" y="9" width="26" height="6" rx="2" fill="#ff86bb" /><rect x="14" y="9" width="4" height="19" fill="#ffd21f" /><path d="M16 9c-2-4-7-5-7-2s5 2 7 2zm0 0c2-4 7-5 7-2s-5 2-7 2z" fill="#ffd21f" /></svg></span>
      <h2 className="lp-modal-title" id="lp-modal-title">{v.loginTitle}</h2>
      <p className="lp-modal-text">{v.loginText}</p>
      <div className="lp-modal-actions">
      <Button variant="primary" size="lg" pill={v.yes} href="#signup">Sign Up</Button>
      <Button variant="outline" size="lg" pill={v.yes} href="#login">Login</Button>
      </div>
      </div>
      </div>
      </>
    ) : null}</>
  );
}
