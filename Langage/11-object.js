// 3 façon de créer un objet

// directement avec object literal
// à utiliser si l'objet est créé une seule fois
var config = {
  host: 'localhost',
  port: '3000',
};

// tous les objets sont extensible (on peut leur ajouter des clés
// plus tard)
config.mode = 'production';

// on peut modifier des clés
config.mode = 'development';

// on peut supprimer des clés
delete config.mode;

// 2 opérateurs pour accéder au contenu d'un objet
console.log(config.host);
console['log'](config['host']);
var key = 'host';
console['log'](config[key]);

// on peut boucler sur les clés
for (var key in config) {
  console.log(key); // host post
  console.log(config[key]); // localhost 3000
}

// factory function (fabrique)
// fonction qui retourne un objet
// plutot quand on a besoin de créer plusieurs objets
// ou que l'objet est paramétrable

// attention dans une factory, si l'objet retourné
// contient des fonctions, elles seront dupliquées
// pour chaque appel de la factory
function createCoords(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  return {
    x: x,
    y: y,
    z: z,
    // dans une fabrique appelée plusieurs fois
    // c'est une mauvaise idée de créer des méthodes
    // qui seront dupliquée (dans cet exemple il y
    // aura un objet infos par objet coords)
    // infos() { return 'x: ' + this.x },
  };
}

var coords1 = createCoords(0, 10);
var coords2 = createCoords(10, 10);

// constructor function


function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this.prenom;
};

var romain = new Contact('Romain');
var jean = new Contact('Jean');

console.log(typeof romain); // object
console.log(romain.prenom); // 'Romain' (dans l'objet)
console.log(romain.hello()); // 'Bonjour je m'appelle Romain' (dans Contact.prototype)
console.log(romain.hasOwnProperty('prenom')); // true  (dans Object.prototype)
console.log(romain.hasOwnProperty('hello')); // false  (dans Object.prototype)











