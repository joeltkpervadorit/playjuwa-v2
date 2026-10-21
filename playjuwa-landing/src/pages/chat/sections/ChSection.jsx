import React from 'react';

export default function ChSection({ v }) {
  return (
    <section className="ch-card" aria-labelledby="ch-title">
      <header className="ch-head">
      <span className="ch-head-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="7" rx="2" /><rect x="17" y="13" width="4" height="7" rx="2" /><path d="M19 20a4 4 0 0 1-4 3h-2" /></svg></span>
      <div className="ch-head-txt">
      <h1 id="ch-title">Live Chat</h1>
      <span className="ch-status" data-mode={v.statusMode}><i aria-hidden="true" />{v.statusText}</span>
      </div>
      <div className="ch-more">
      <button className="ch-more-btn" type="button" aria-label="Support options" aria-haspopup="menu" aria-expanded={v.menuOpenStr} onClick={v.toggleMenu}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" /></svg></button>
      {v.menuOpen ? (
      <>
      <div className="ch-menu" role="menu">
      <a role="menuitem" href="mailto:support@playjuwa.com"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M4 7l8 6 8-6" /></svg>Email support</a>
      <a role="menuitem" href="#help"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01" /></svg>Help center</a>
      <button role="menuitem" type="button" onClick={v.resetChat}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" /></svg>Clear demo chat</button>
      </div>
      </>
      ) : null}
      </div>
      </header>
      <div className="ch-tabs" role="tablist" aria-label="Chat rooms">
      <button className="ch-tab" type="button" role="tab" aria-selected={v.tabCommunity} onClick={v.pickCommunity}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="9" r="2.8" /><path d="M2.5 19c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5zM15.5 13.6c3 .1 5.2 1.9 6 5.4h-4.6c-.2-2.1-.7-3.9-1.4-5.4z" /></svg>Community Chat</button>
      <button className="ch-tab" type="button" role="tab" aria-selected={v.tabSupport} onClick={v.pickSupport}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="7" rx="2" /><rect x="17" y="13" width="4" height="7" rx="2" /></svg>Support Chat</button>
      </div>
      <div className="ch-demo" role="note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg><span><b>Demo preview.</b> {v.demoText}</span></div>
      <div className="ch-log" role="log" aria-live="polite" aria-label={v.logLabel} ref={v.logRef}>
      {(v.msgs || []).map((m, __i4) => (
      <React.Fragment key={__i4}>
      <div className={`ch-msg ${m.side ?? ""}`} data-new={m.fresh}>
      <span className={`ch-ava ${m.avaCls ?? ""}`} aria-hidden="true">{m.ini}{m.online ? (
      <><i className="ch-ava-dot" /></>
      ) : null}</span>
      <div className="ch-bwrap">
      <div className="ch-meta"><b>{m.name}</b><time>{m.time}</time>{m.demo ? (
      <><span className="ch-tag">Demo</span></>
      ) : null}</div>
      <p className="ch-bubble">{m.text}</p>
      </div>
      </div>
      </React.Fragment>
      ))}
      {v.typing ? (
      <>
      <div className="ch-msg is-in" aria-label="Support is typing">
      <span className="ch-ava is-sup" aria-hidden="true">PJ</span>
      <div className="ch-bwrap"><p className="ch-bubble ch-typing"><i /><i /><i /></p></div>
      </div>
      </>
      ) : null}
      </div>
      <div className="ch-chips" role="group" aria-label="Quick topics">
      {(v.chips || []).map((c, __i4) => (
      <React.Fragment key={__i4}><button className={`ch-chip is-${c.key ?? ""}`} type="button" onClick={c.pick} disabled={v.busy}><span className="ch-chip-ic" aria-hidden="true"><img src={c.icon} alt="" /></span>{c.label}</button></React.Fragment>
      ))}
      </div>
      <form className="ch-compose" onSubmit={v.send}>
      <button className="ch-ic-btn" type="button" aria-label="Add emoji" aria-expanded={v.emojiOpenStr} onClick={v.toggleEmoji}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01" /></svg></button>
      <label className="ch-input"><span className="lp-sr">Message</span><input type="text" placeholder="Type your message..." value={v.draft} onChange={v.onDraft} onFocus={v.onFocus} maxLength="500" enterKeyHint="send" autoComplete="off" /></label>
      <button className="ch-ic-btn" type="button" aria-label="Attach a file (available when live support is connected)" title="Attachments are available when live support is connected" disabled={v.yes}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11.5l-7.8 7.8a5 5 0 0 1-7.1-7.1l8.2-8.2a3.5 3.5 0 0 1 5 5l-8.1 8.1a2 2 0 0 1-2.9-2.9l7.3-7.3" /></svg></button>
      <button className="ch-send" type="submit" aria-label="Send message" disabled={v.sendDisabled}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.4 2.6 2.9 10.3c-.9.4-.8 1.7.1 2l6.2 1.9 1.9 6.2c.3.9 1.6 1 2 .1l7.7-18.5c.3-.8-.5-1.6-1.4-1.4zM10.6 13.4l6-6" /></svg></button>
      {v.emojiOpen ? (
      <>
      <div className="ch-emoji" role="group" aria-label="Emoji">{(v.emojis || []).map((e, __i6) => (
      <React.Fragment key={__i6}><button type="button" aria-label={e.label} onClick={e.pick}>{e.ch}</button></React.Fragment>
      ))}</div>
      </>
      ) : null}
      </form>
      </section>
  );
}
