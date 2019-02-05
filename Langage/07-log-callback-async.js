const fs = require('fs');

function log(file, msg, cb) {
  fs.appendFile(file, msg + '\n', cb)
}

// Callback Hell / Pyramid of doom
log('app.log', 'Ligne 1', (err) => {
  if (err) {
    return console.log(err.message);
  }

  log('app.log', 'Ligne 1', (err) => {
    if (err) {
      return console.log(err.message);
    }

    log('app.log', 'Ligne 1', (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log('DONE');
    });
  });
});

