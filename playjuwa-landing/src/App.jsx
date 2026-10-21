import { lazy, Suspense, useEffect, useState, useTransition } from 'react';
import { PATHS } from './routes.js';
import { usePageProps } from './lib/session.js';

const pages = {
  home: lazy(() => import('./pages/home/index.jsx')),
  casino: lazy(() => import('./pages/casino/index.jsx')),
  platforms: lazy(() => import('./pages/platforms/index.jsx')),
  bonus: lazy(() => import('./pages/bonus/index.jsx')),
  deposit: lazy(() => import('./pages/deposit/index.jsx')),
  buy: lazy(() => import('./pages/buy/index.jsx')),
  chat: lazy(() => import('./pages/chat/index.jsx')),
  wallet: lazy(() => import('./pages/wallet/index.jsx')),
  withdraw: lazy(() => import('./pages/withdraw/index.jsx')),
  link2play: lazy(() => import('./pages/link2play/index.jsx')),
  blog: lazy(() => import('./pages/blog/index.jsx')),
};

function PageRoute({ name, authOpen, scrollKey, hash }) {
  const Page = pages[name];
  const props = usePageProps();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [scrollKey, hash]);

  return <Page key={window.location.pathname} {...props} authOpen={authOpen} />;
}

export default function App() {
  const [routeUrl, setRouteUrl] = useState(() => window.location.href);
  const [, startTransition] = useTransition();
  const route = new URL(routeUrl);
  const path = route.pathname.replace(/\/+$/, '') || '/';
  const authRoute = path === '/login' || path === '/signup';
  const name = authRoute
    ? 'home'
    : Object.keys(PATHS).find((key) => PATHS[key] === path) || 'home';
  const authOpen = path === '/login' ? 'login' : path === '/signup' ? 'signup' : '';

  useEffect(() => {
    const handlePopState = () => {
      startTransition(() => setRouteUrl(window.location.href));
    };
    const handleNavigation = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;

      const target = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!target || target.target || target.hasAttribute('download')) return;

      const next = new URL(target.href, window.location.href);
      if (next.origin !== window.location.origin) return;
      if (
        next.pathname === window.location.pathname &&
        next.search === window.location.search
      ) {
        if (next.hash === window.location.hash) event.preventDefault();
        return;
      }

      event.preventDefault();
      window.history.pushState({}, '', next.href);
      startTransition(() => setRouteUrl(next.href));
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleNavigation);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleNavigation);
    };
  }, [startTransition]);

  return (
    <Suspense fallback={null}>
      <PageRoute
        key={route.pathname}
        name={name}
        authOpen={authOpen}
        scrollKey={route.pathname + route.hash}
        hash={route.hash}
      />
    </Suspense>
  );
}
