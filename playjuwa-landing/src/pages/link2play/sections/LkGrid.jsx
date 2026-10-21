import React from 'react';
import { css } from '../css.js';

export default function LkGrid({ v }) {
  return (
    <div className="lk-grid" id="lk-grid" role="tabpanel" aria-labelledby="lk-h" aria-live="polite">
      {(v.lkGames || []).map((g, __i3) => (
      <React.Fragment key={__i3}>
      <article className="lk-card" style={css(g.style)} aria-label={g.name}>
      <div className={`lk-thumb ${g.thumbCls ?? ""}`} style={css(g.thumbStyle)}>
      {g.hasArt ? (
      <><img className="lk-art" src={g.art} alt="" loading="lazy" /></>
      ) : null}
      {g.hasLogo ? (
      <><span className="lk-logo-bg" aria-hidden="true" style={css(g.logoBg)} /><img className="lk-logo" src={g.logo} alt="" loading="lazy" /></>
      ) : null}
      {g.isMono ? (
      <><span className="lk-mono" aria-hidden="true">{g.mono}</span></>
      ) : null}
      {g.hasBadge ? (
      <><span className={`lk-badge is-${g.badgeKey ?? ""}`}><i aria-hidden="true" />{g.badge}</span></>
      ) : null}
      </div>
      <h3>{g.name}</h3>
      <button className="lk-play" type="button" disabled>Play link unavailable</button>
      <div className="lk-apps">
      <button className="lk-app is-android" type="button" disabled>Android link unavailable</button>
      <button className="lk-app is-ios" type="button" disabled>iPhone link unavailable</button>
      </div>
      </article>
      </React.Fragment>
      ))}
      </div>
  );
}
