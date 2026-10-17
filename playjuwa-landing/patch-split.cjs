const fs = require('fs');
let s = fs.readFileSync('split-css.cjs', 'utf8');
s = s.replace("'header.css': [[62, 151], [1428, 1428], [1475, 1476], [1980, 2050]],", "'header.css': [[62, 151], [1428, 1428], [1476, 1476], [1980, 2050]],");
s = s.replace("'quick-actions.css': [[1436, 1440], [1473, 1473]],", "'quick-actions.css': [[1436, 1440], [1473, 1473], [1475, 1475]],");
fs.writeFileSync('split-css.cjs', s);
console.log('patched split-css.cjs');
