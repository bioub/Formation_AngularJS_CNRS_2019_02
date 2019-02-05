
// setTimeout(() => {}, 1000);
function timeout(delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

timeout(1000)
  .then(function() {
    console.log('A')
  });
