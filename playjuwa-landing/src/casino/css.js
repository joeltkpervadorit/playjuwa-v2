// Turns an inline CSS string ("transform: rotate(10deg); --x: 2") into a React style object.
const cache = new Map();
export function css(str) {
  if (!str) return undefined;
  if (typeof str === 'object') return str;
  if (cache.has(str)) return cache.get(str);
  const out = {};
  for (const decl of String(str).split(/;(?![^(]*\))/)) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const k = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!k) continue;
    out[k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val;
  }
  if (cache.size > 500) cache.clear();
  cache.set(str, out);
  return out;
}
