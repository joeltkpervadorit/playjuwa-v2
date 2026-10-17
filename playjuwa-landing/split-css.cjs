const fs = require('fs');
const src = 'src/styles/landing.css';
const lines = fs.readFileSync(src, 'utf8').split('\n');

// block -> target file
const BLOCKS = {
  'base.css': [[1, 61], [982, 1092], [1940, 1947], [1417, 1427]],
  'header.css': [[62, 151], [1428, 1428], [1475, 1476], [1980, 2050]],
  'hero.css': [[152, 243], [1429, 1435], [1472, 1472]],
  'quick-actions.css': [[1436, 1440], [1473, 1473]],
  'recent-wins.css': [[244, 258], [1441, 1455], [1468, 1470], [1474, 1474]],
  'platforms.css': [[259, 279], [1456, 1467], [1471, 1471]],
  'browse-games.css': [[280, 328], [1901, 1939]],
  'daily-spin.css': [[329, 402]],
  'how-to-play.css': [[403, 432], [1199, 1281]],
  'weekly-wins.css': [[433, 464], [1326, 1385]],
  'why-join.css': [[465, 486], [2051, 2076]],
  'reviews.css': [[487, 552]],
  'faq.css': [[553, 567]],
  'final-cta.css': [[568, 582], [2077, 2095]],
  'footer.css': [[583, 966]],
  'login-prompt.css': [[967, 981]],
  'sidebar.css': [[1093, 1131]],
  'slot-coverflow.css': [[1132, 1170], [1478, 1483]],
  'no-purchase.css': [[1171, 1198], [1948, 1979]],
  'hottest-games.css': [[1282, 1325]],
  'new-games.css': [[1386, 1416]],
  'auth.css': [[1485, 1699]],
  'mobile-tab-bar.css': [[1700, 1725]],
  'halloween.css': [[1730, 1900]]
};

const outDir = 'src/styles/sections';
fs.mkdirSync(outDir, { recursive: true });
const emitted = {};
for (const [file, ranges] of Object.entries(BLOCKS)) {
  let text = '';
  for (const [a, b] of ranges) {
    for (let i = a - 1; i < b; i++) text += lines[i] + '\n';
  }
  fs.writeFileSync(`${outDir}/${file}`, text);
  emitted[file] = (emitted[file] || 0) + text.length;
}

// verify coverage
const covered = new Set();
for (const ranges of Object.values(BLOCKS)) {
  for (const [a, b] of ranges) for (let i = a; i <= b; i++) covered.add(i);
}
const missing = [];
for (let i = 1; i <= lines.length; i++) if (!covered.has(i)) missing.push(i);
console.log('Emitted files:');
for (const [f, n] of Object.entries(emitted)) console.log('  ' + f + ' (' + n + ' chars)');
console.log('Uncovered lines: ' + (missing.length ? missing.join(', ') : 'none'));
console.log('Total source lines: ' + lines.length);
