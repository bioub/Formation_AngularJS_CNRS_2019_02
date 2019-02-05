const nbs = [3, 4, 5];

// Nouveautés de ES5 (IE9+)
// AngularJS jusqu'à la 1.2 est compatible IE6+
// AngularJS à partir de 1.3 est compatible IE9+
// on retrouve Array.prototype.forEach dans AngularJS
// pour la compatibilité angular.forEach()

// function(nb) { return nb % 2 === 1; };
// En ES6 (Edge minimum; pas IE)
// (nb) => nb % 2 === 1
nbs
  .filter((nb) => nb % 2 === 1)
  .forEach((nb) => console.log(nb));


// pile d'appels
// ^
// |               log  log
// |=> - => - =>   => - =>
// |filter       - forEach
// +----------------------------> temps
