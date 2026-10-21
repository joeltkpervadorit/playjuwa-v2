import React from 'react';

export default function AuthModal({ v }) {
  return (
    <>{v.authOpen ? (
      <>
      <div className="lp-au" onKeyDown={v.authKey}>
      <button className="lp-au-backdrop" type="button" tabIndex="-1" aria-label="Close" onClick={v.closeAuth} />
      <div className="lp-au-card" role="dialog" aria-modal="true" aria-labelledby="lp-au-title">
      <aside className="lp-au-art" aria-hidden="true">
      <img src="/assets/489c01b077689835861f00573c3e0408.png" alt="" />
      <div className="lp-au-art-copy">
      <img className="lp-au-logo" src="/assets/9048a242fcde0c3b392353f435007399.png" alt="" />
      <b>{v.artA} <span className="pj-text-gold">{v.artB}</span></b>
      <ul><li><img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" />15,000 GC</li><li><img src="/assets/b1551f22a5fce6ec1f9c62af9e8d8675.png" alt="" />0.5 SC</li></ul>
      </div>
      </aside>
      <div className="lp-au-main">
      <button className="lp-au-x" type="button" aria-label="Close" onClick={v.closeAuth}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
      {v.authDone ? (
      <>
      <div className="lp-au-done" role="status">
      <span className="lp-au-done-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
      <h2 id="lp-au-title">{v.doneTitle}</h2>
      <p>{v.doneText}</p>
      <button className="lp-au-submit" type="button" onClick={v.closeAuth}>Start Playing</button>
      </div>
      </>
      ) : null}
      {v.authForm ? (
      <>
      <h2 className="lp-au-title" id="lp-au-title">{v.authTitle}</h2>
      <p className="lp-au-sub">{v.authSub}</p>
      <div className="lp-au-tabs" role="tablist" aria-label="Account">
      <button type="button" role="tab" aria-selected={v.tabLogin} onClick={v.toLogin}>Log In</button>
      <button type="button" role="tab" aria-selected={v.tabSignup} onClick={v.toSignup}>Sign Up</button>
      </div>
      {v.authMessage ? <p className="lp-au-sub" role="status">{v.authMessage}</p> : null}
      {v.isLogin ? (
      <>
      <form className="lp-au-form" noValidate onSubmit={v.submitLogin}>
      <div className="lp-au-field" data-err={v.err.id.on}>
      <label htmlFor="au-id">Username or email</label>
      <div className="lp-au-input"><input id="au-id" name="id" type="text" autoComplete="username" placeholder="Enter your username or email" aria-invalid={v.err.id.on} aria-describedby="au-id-e" /></div>
      <span className="lp-au-err" id="au-id-e">{v.err.id.msg}</span>
      </div>
      <div className="lp-au-field" data-err={v.err.lpw.on}>
      <label htmlFor="au-lpw">Password</label>
      <div className="lp-au-input"><input id="au-lpw" name="lpw" type={v.pwType} autoComplete="current-password" placeholder="Enter your password" aria-invalid={v.err.lpw.on} aria-describedby="au-lpw-e" /><button className="lp-au-eye" type="button" aria-label={v.pwToggleLabel} aria-pressed={v.pwShown} onClick={v.togglePw}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg></button></div>
      <span className="lp-au-err" id="au-lpw-e">{v.err.lpw.msg}</span>
      </div>
      <div className="lp-au-row">
      <label className="lp-au-check"><input type="checkbox" name="remember" /><span className="lp-au-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>Remember me</label>
      <a className="lp-au-link" href="#forgot">Forgot password?</a>
      </div>
      <button className="lp-au-submit" type="submit">Log In</button>
      <p className="lp-au-switch">New to PlayJuwa? <button type="button" onClick={v.toSignup}>Create an account</button></p>
      </form>
      </>
      ) : null}
      {v.isSignup ? (
      <>
      <form className="lp-au-form" noValidate onSubmit={v.submitSignup}>
      <div className="lp-au-grid">
      <div className="lp-au-field" data-err={v.err.user.on}>
      <label htmlFor="au-user">Username</label>
      <div className="lp-au-input"><input id="au-user" name="user" type="text" autoComplete="username" placeholder="3–20 letters or numbers" aria-invalid={v.err.user.on} aria-describedby="au-user-e" /></div>
      <span className="lp-au-err" id="au-user-e">{v.err.user.msg}</span>
      </div>
      <div className="lp-au-field" data-err={v.err.email.on}>
      <label htmlFor="au-email">Email</label>
      <div className="lp-au-input"><input id="au-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={v.err.email.on} aria-describedby="au-email-e" /></div>
      <span className="lp-au-err" id="au-email-e">{v.err.email.msg}</span>
      </div>
      <div className="lp-au-field" data-err={v.err.ref.on}>
      <label htmlFor="au-ref">Referral code <i>(optional)</i></label>
      <div className="lp-au-input"><input id="au-ref" name="ref" type="text" autoComplete="off" placeholder="Enter code" aria-invalid={v.err.ref.on} aria-describedby="au-ref-e" /></div>
      <span className="lp-au-err" id="au-ref-e">{v.err.ref.msg}</span>
      </div>
      <div className="lp-au-field" data-err={v.err.pw.on}>
      <label htmlFor="au-pw">Password</label>
      <div className="lp-au-input"><input id="au-pw" name="pw" type={v.pwType} autoComplete="new-password" placeholder="At least 8 characters" aria-invalid={v.err.pw.on} aria-describedby="au-pw-e" /><button className="lp-au-eye" type="button" aria-label={v.pwToggleLabel} aria-pressed={v.pwShown} onClick={v.togglePw}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg></button></div>
      <span className="lp-au-err" id="au-pw-e">{v.err.pw.msg}</span>
      </div>
      <div className="lp-au-field" data-err={v.err.pw2.on}>
      <label htmlFor="au-pw2">Confirm password</label>
      <div className="lp-au-input"><input id="au-pw2" name="pw2" type={v.pwType} autoComplete="new-password" placeholder="Re-enter password" aria-invalid={v.err.pw2.on} aria-describedby="au-pw2-e" /><button className="lp-au-eye" type="button" aria-label={v.pwToggleLabel} aria-pressed={v.pwShown} onClick={v.togglePw}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg></button></div>
      <span className="lp-au-err" id="au-pw2-e">{v.err.pw2.msg}</span>
      </div>
      </div>
      <div className="lp-au-field" data-err={v.err.terms.on}>
      <label className="lp-au-check is-terms"><input type="checkbox" name="terms" aria-invalid={v.err.terms.on} aria-describedby="au-terms-e" /><span className="lp-au-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span><span>I am 18+ and agree to the <a className="lp-au-link" href="#terms">Terms &amp; Conditions</a> and <a className="lp-au-link" href="#privacy">Privacy Policy</a>.</span></label>
      <span className="lp-au-err" id="au-terms-e">{v.err.terms.msg}</span>
      </div>
      <button className="lp-au-submit" type="submit">Create Account</button>
      <p className="lp-au-switch">Already have an account? <button type="button" onClick={v.toLogin}>Log in</button></p>
      </form>
      </>
      ) : null}
      </>
      ) : null}
      </div>
      </div>
      </div>
      </>
    ) : null}</>
  );
}
