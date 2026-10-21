import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Sidebar from './Sidebar.jsx';
import MobileTabBar from '../landing/sections/MobileTabBar.jsx';

function MenuButton({ open, onClick }) {
  return (
    <button
      className="nv-menu-btn pj-global-menu-btn"
      type="button"
      aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={open}
      aria-controls="pj-mobile-sidebar"
      onClick={onClick}
    >
      <svg className="nv-bars" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <rect x="4" y="4" width="6.5" height="6.5" rx="2" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="2" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="2" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2" />
      </svg>
    </button>
  );
}

export default function MobileNavigation({ path }) {
  const [headerTarget, setHeaderTarget] = useState(null);
  const [open, setOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    setHeaderTarget(null);
    const attachMenuButton = () => {
      const target = document.querySelector('.pj-site-header-actions')
        || document.querySelector('.by-top')
        || document.querySelector('.lp-header-bar .nv-right')
        || document.querySelector('.lp-header-bar');
      if (!target) return false;
      setHeaderTarget(target);
      return true;
    };
    if (attachMenuButton()) return undefined;

    const observer = new MutationObserver(() => {
      if (attachMenuButton()) observer.disconnect();
    });
    observer.observe(document.getElementById('root'), { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [path]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const routePath = path.replace(/\/+$/, '') || '/';
  const barValues = {
    global: true,
    nCasino: '/casino',
    nPlatforms: '/platforms',
    nBuy: '/deposit',
    nPromotions: '/bonus',
    nSupport: '/chat',
    tabCasino: routePath === '/' || routePath === '/casino' || routePath === '/link2play' ? 'page' : undefined,
    tabPlat: routePath === '/platforms' ? 'page' : undefined,
    tabDeposit: ['/deposit', '/buy', '/wallet', '/withdraw'].includes(routePath) ? 'page' : undefined,
    tabPromo: routePath === '/bonus' ? 'page' : undefined,
    tabChat: routePath === '/chat' ? 'page' : undefined,
  };

  const sidebarValues = {
    sdPlat: true,
    soundOn,
    soundLabel: soundOn ? 'Turn sound off' : 'Turn sound on',
    toggleSound: () => setSoundOn((value) => !value),
    sbSpin: () => setOpen(false),
  };

  return (
    <>
      {headerTarget ? createPortal(
        <MenuButton open={open} onClick={() => setOpen((value) => !value)} />,
        headerTarget,
      ) : null}
      <div className={`pj-mobile-navigation${open ? ' is-open' : ''}`}>
        <button
          className="pj-mobile-backdrop"
          type="button"
          aria-label="Close navigation menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <div
          className="pj-mobile-drawer"
          id="pj-mobile-sidebar"
          role="dialog"
          aria-modal={open}
          aria-label="Main navigation"
          aria-hidden={!open}
          onClick={(event) => {
            if (event.target.closest('a[href]')) setOpen(false);
          }}
        >
          <button
            className="pj-mobile-drawer-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <Sidebar v={sidebarValues} />
        </div>
      </div>
      <MobileTabBar v={barValues} />
    </>
  );
}
