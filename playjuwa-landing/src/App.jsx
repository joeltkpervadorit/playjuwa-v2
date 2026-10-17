import { lazy, Suspense } from 'react';
import Landing from './landing/Landing.jsx';

const Casino = lazy(() => import('./casino/Casino.jsx'));
const PlatformsPage = lazy(() => import('./platforms/PlatformsPage.jsx'));

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/casino') {
    return <Suspense fallback={null}><Casino /></Suspense>;
  }
  if (path === '/platforms') {
    const auth = new URLSearchParams(window.location.search).get('auth') === 'in' ? 'in' : 'out';
    return <Suspense fallback={null}><PlatformsPage auth={auth} /></Suspense>;
  }

  return <Landing />;
}
