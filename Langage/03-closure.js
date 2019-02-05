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
  interne();
}


externe('Hello');
console.log(typeof interne); // undefined

// pile d'appels
// ^
// |log
// |interne
// |externe
// +----------------> temps
