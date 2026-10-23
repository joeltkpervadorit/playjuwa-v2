import { useSyncExternalStore } from 'react';

// Open state of the mobile navigation drawer. Shared between the menu button, which
// renders inside each page's SiteHeader, and the drawer, which lives in App.
let menuOpen = false;
const listeners = new Set();

function subscribe(onChange) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function getMenuOpen() {
  return menuOpen;
}

export function setMenuOpen(next) {
  const value = typeof next === 'function' ? next(menuOpen) : next;
  if (value === menuOpen) return;
  menuOpen = value;
  listeners.forEach((listener) => listener());
}

export function useMenuOpen() {
  return useSyncExternalStore(subscribe, getMenuOpen, getMenuOpen);
}
