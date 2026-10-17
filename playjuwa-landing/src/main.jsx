import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/tokens.css';
import './styles/ds.css';
import './styles/landing.css';

// Note: <React.StrictMode> is intentionally not used. The landing page installs
// imperative animation layers (tap effects, scroll motion, Daily Bonus popup) once
// on mount, and StrictMode's double-mount in development would install them twice.
createRoot(document.getElementById('root')).render(<App />);
