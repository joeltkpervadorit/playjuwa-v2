import React from 'react';
import { css } from '../css.js';

export default function BlGrid({ v }) {
  return (
    <div className="bl-grid" id="bl-grid" role="tabpanel">
      {(v.blArticles || []).map((a, __i3) => (
      <React.Fragment key={__i3}>
      <a className="bl-card" href={a.href} style={css(a.style)}>
      <span className="bl-thumb">
      <img src={a.img} alt="" loading="lazy" />
      <span className={`bl-badge is-${a.catKey ?? ""}`}><span className={`bl-ic is-${a.catKey ?? ""}`} aria-hidden="true" />{a.cat}</span>
      </span>
      <span className="bl-body">
      <h3>{a.title}</h3>
      <span className="bl-meta">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
      <span>{a.read}</span><i className="bl-dot" aria-hidden="true" /><time dateTime={a.iso}>{a.date}</time>
      </span>
      </span>
      </a>
      </React.Fragment>
      ))}
      </div>
  );
}
