// portée globale
function externe(msg) {
  // portée de closure
  var a = 'local';
  function interne() {
    // portée locale
    // ici on a accès à msg et a
    // qui sont définis dans la portée de Closure
    console.log(msg)
  }
  return interne;
}


const helloFct = externe('Hello');
helloFct();
console.log(typeof interne); // undefined

// pile d'appels
// ^
// |
// |          log
// |externe - interne/helloFct
// +----------------------------> temps

for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Dans 1 sec : 3 3 3

for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1 sec : 0 1 2
