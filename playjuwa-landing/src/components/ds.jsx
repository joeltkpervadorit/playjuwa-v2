// PlayJuwa design-system components (ported from the design canvas bundle).
import React from 'react';

const cx = (...a) => a.filter(Boolean).join(' ');

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Play() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  );
}

export function Button({ variant = 'primary', size = 'md', pill, arrow, href, className, children, ...rest }) {
  const props = {
    ...rest,
    className: cx('pj-btn', 'pj-btn-' + variant, size !== 'md' && 'pj-btn-' + size, pill && 'pj-btn-pill', className),
  };
  const kids = (
    <>
      {children}
      {arrow ? <Arrow /> : null}
    </>
  );
  if (href) return <a {...props} href={href}>{kids}</a>;
  return <button type="button" {...props}>{kids}</button>;
}

const BADGE_LABELS = { hot: 'Hot', new: 'New', live: 'Live', vip: 'VIP', win: 'Win' };
export function Badge({ tone = 'new', className, children }) {
  return <span className={cx('pj-badge', 'pj-badge-' + tone, className)}>{children || BADGE_LABELS[tone]}</span>;
}

export function CategoryTile({ active, icon, label, onClick, className }) {
  return (
    <button type="button" className={cx('pj-tile', className)} aria-pressed={active ? 'true' : 'false'} onClick={onClick}>
      <span className="pj-tile-icon" aria-hidden>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export function GameCard({ href = '#', title, provider, image, badge, className }) {
  return (
    <a className={cx('pj-game', className)} href={href} aria-label={'Play ' + title + (provider ? ' by ' + provider : '')}>
      <div className="pj-game-art">
        {image ? <img src={image} alt="" loading="lazy" /> : null}
        {badge ? <span className="pj-game-badge"><Badge tone={badge} /></span> : null}
        <span className="pj-game-play" aria-hidden>
          <span className="pj-btn pj-btn-primary pj-btn-sm pj-btn-pill"><Play />Play</span>
        </span>
      </div>
      <div className="pj-game-meta">
        <div className="pj-game-title">{title}</div>
        {provider ? <div className="pj-game-provider">{provider}</div> : null}
      </div>
    </a>
  );
}

export function SectionHeader({ eyebrow, title, actionLabel, actionHref = '#', className }) {
  return (
    <div className={cx('pj-section-head', className)}>
      <div>
        {eyebrow ? <span className="pj-section-eyebrow">{eyebrow}</span> : null}
        <h2 className="pj-section-title">{title}</h2>
      </div>
      {actionLabel ? <a className="pj-link" href={actionHref}>{actionLabel}<Arrow /></a> : null}
    </div>
  );
}
