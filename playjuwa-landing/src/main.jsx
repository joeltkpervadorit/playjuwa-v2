import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/tokens.css';
import './styles/ds.css';
import './styles/layout.css';

// Note: <React.StrictMode> is intentionally not used. Pages install imperative
// animation layers once on mount, and StrictMode would install them twice.
createRoot(document.getElementById('root')).render(<App />);
