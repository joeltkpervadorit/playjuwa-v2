export function useSession() {
  // TODO: Connect this to the app's authentication and wallet provider.
  return { auth: 'out', balSc: '—', balGc: '—' };
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
