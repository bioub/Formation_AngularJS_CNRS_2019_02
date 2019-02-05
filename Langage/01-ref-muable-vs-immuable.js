var nb1 = 123;    // 1 allocation mémoire : nb1 -> 123
var nb2 = nb1;    // 1 allocation mémoire (recopier le contenu de nb1) : nb2 -> 123
nb2 = 456;        // on ne touche pas à nb1

console.log(nb1); // 123

var obj1 = {nb: 123}; // 2 allocation mémoire : obj1 -> 5335653,  5335653 -> {nb: 123}
var obj2 = obj1;      // 2 allocation mémoire : obj2 -> 5335653
obj2.nb = 456;

console.log(obj1.nb); // 456

var str1 = 'Jean'; // ref donc 2 alloc
var str2 = str1;   // passage par réf
// mais l'objet ne peut pas être modifié

// si je veux le modifier, il faudra créer un nouvel objet et affecter cette nouvelle référence :
str2 = str2.toUpperCase();

// dans AngularJS on a ce qu'on appelle du Data Binding
// data-nb-bind, data-ng-model, {{}}
