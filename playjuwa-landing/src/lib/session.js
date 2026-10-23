import { useSyncExternalStore } from 'react';

const TEST_SESSION_KEY = 'pj-test-username';
const SESSION_CHANGE_EVENT = 'playjuwa:session-change';

function getTestUser() {
  return isTestLoginEnabled()
    ? window.sessionStorage.getItem(TEST_SESSION_KEY)
    : null;
}

function subscribeToSession(onChange) {
  window.addEventListener(SESSION_CHANGE_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(SESSION_CHANGE_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

function notifySessionChange() {
  window.dispatchEvent(new Event(SESSION_CHANGE_EVENT));
}

export function isTestLoginEnabled() {
  // Demo login: no auth backend is connected yet, so this is on in production too.
  return true;
}

export function startTestSession(username) {
  if (!isTestLoginEnabled()) {
    throw new Error('Test login is not available.');
  }

  window.sessionStorage.setItem(TEST_SESSION_KEY, username);
  notifySessionChange();
}

export function endTestSession() {
  if (!isTestLoginEnabled()) {
    throw new Error('Test logout is not available.');
  }

  window.sessionStorage.removeItem(TEST_SESSION_KEY);
  notifySessionChange();
}

export function useSession() {
  const testUser = useSyncExternalStore(subscribeToSession, getTestUser, () => null);

  return { auth: testUser ? 'in' : 'out', balSc: '—', balGc: '—' };
}

export function usePageProps() {
  const { auth, balSc, balGc } = useSession();
  const query = new URLSearchParams(window.location.search);
  return {
    auth,
    balSc,
    balGc,
    loggedIn: auth === 'in',
    spin: 'unavailable',
    view: query.get('view') || undefined,
  };
}
