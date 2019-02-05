# Exercices

## Directives personnalisées

### Créer une directive mri-horloge

On aimerait pouvoir utiliser une directive :

```
<mri-horloge></mri-horloge>
```

Cette directive :

* a son propre scope (non isolé)
* n'est disponible que sous forme d'élément
* a un controlleur qui reçoit `$interval` et `$scope`

Le service `$interval` défini une fonction identique à setInterval, sauf que le callback sera exécuté dans le contexte AngularJS (a accès au scope, intercepte les erreurs, lance un cycle $digest pour détecter les changements)

Voir la doc d'API sur le site AngularJS pour son utilisation.

Dans le template de l'horloge on utilise le filtre date pour formater la date.

### Rendre le scope isolé

Rendre le scope de la directive mri-horloge isolé.

Ajouter la possibilité de paramétrer le format de l'horloge :

```
<mri-horloge format="HH:mm:ss"></mri-horloge>
```

### Créer une directive mri-button-counter

Le scope doit être isolé.

```
<mri-button-counter></mri-button-counter>
```

Cette directive contient un bouton, a chaque clic son contenu s'incrémente :

```
<button>0</button>
// clic
<button>1</button>
```

On aimerait que la valeur du bouton soit défini sous forme de two-way data binding : 

```
<mri-button-counter count="countClick"></mri-button-counter>
```

`countClick` étant une variable qui passe et reçoit les valeur de la directive.

Ajouter la possibilité d'incrémenter de plusieurs valeur à chaque clic :

```
<mri-button-counter count="countClick" increment="3"></mri-button-counter>
```

Pour récupéré la valeur 3 dans cet exemple

Créer une fonction link ou compile, qui ira chercher la valeur dans les attributs : attrs.increment et la convertira en valeur (ici un nombre), grace à la fonction $eval du scope.

