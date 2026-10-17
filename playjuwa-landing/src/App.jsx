import { lazy, Suspense } from 'react';
import Landing from './landing/Landing.jsx';

const Casino = lazy(() => import('./casino/Casino.jsx'));

export default function App() {
  if (window.location.pathname.replace(/\/+$/, '') === '/casino') {
    return <Suspense fallback={null}><Casino /></Suspense>;
  }

  return <Landing />;
}
