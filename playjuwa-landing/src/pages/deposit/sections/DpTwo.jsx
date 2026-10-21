import React from 'react';

export default function DpTwo({ v }) {
  return (
    <div className="dp-two">
      <section className="dp-card" aria-labelledby="dp-r-h">
      <div className="dp-sec-h is-plain">
      <div><h2 id="dp-r-h">Recent purchase activity</h2><p>Purchase activity appears when connected.</p></div>
      </div>
      <ul className="dp-feed">
      {(v.feed || []).map((f, __i5) => (
      <React.Fragment key={__i5}><li><span className="dp-ava" data-c={f.c}>{f.ini}</span><span className="dp-feed-t"><b>{f.name}</b> bought <em>{f.sc} SC</em></span><time>{f.ago}</time></li></React.Fragment>
      ))}
      {!v.feed || v.feed.length === 0 ? <li className="dp-feed-empty">Live purchase activity is unavailable.</li> : null}
      </ul>
      </section>
      <section className="dp-card" aria-labelledby="dp-hst-h">
      <div className="dp-sec-h is-plain">
      <div><h2 id="dp-hst-h">Your purchase history</h2></div>
      <button className="dp-btn is-ghost is-sm" type="button" disabled aria-disabled="true">Refresh unavailable</button>
      </div>
      <div className="dp-empty">
      <img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" />
      <b>Nothing here yet.</b>
      </div>
      <div className="dp-help-box">
      <b>Coins missing?</b>
      <div><a className="dp-btn is-gold is-sm" href="#support">Chat now</a><a className="dp-btn is-ghost is-sm" href="mailto:support@playjuwa.com">Email support</a></div>
      </div>
      </section>
      </div>
  );
}
