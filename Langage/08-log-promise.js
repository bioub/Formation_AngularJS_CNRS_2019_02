const fs = require('fs-extra');

function log(file, msg) {
  return fs.appendFile(file, msg + '\n');
}

log('app.log', 'Ligne 1')
  .then(function () { return log('app.log', 'Ligne 2'); })
  .then(function () { return log('app.log', 'Ligne 3'); })
  .then(function () { console.log('DONE'); })
  .catch(function (err) { console.log(err.message); });
