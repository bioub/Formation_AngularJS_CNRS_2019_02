(function() {
  'use strict';

  var module = angular.module('contacts/contact-add/contact-add.controller', [
    'contacts/contact-resource.service'
  ]);

  function ContactAddCtrl($scope, $state, Contact) {
    /*
    var contact = new Contact({
      name: 'Romain',
      email: 'romain.bohdanowicz@gmail.com'
    });

    contact.$save()
      .then(function(contact) {
        console.log('DONE')
      });
      */

      /*
    Contact.save({
      name: 'Romain',
      email: 'romain.bohdanowicz@gmail.com'
    }).then(function(contact) {
      console.log('DONE')
    });*/

    /*
    Contact.query().$promise.then((contacts) => {
      console.log(contacts);
      Contact.query().$promise.then((contacts) => {
        console.log(contacts);
      });
    });
    */

    $scope.create = function() {
      Contact.save($scope.contact).$promise.then(function(contact) {
        console.log(contact.id); // id généré par le serveur
        $state.go('contacts'); // redirect to list (contacts ici = nom de la route)
      });
    };

  }

  ContactAddCtrl.$inject = ['$scope', '$state', 'Contact'];

  module.controller('ContactAddCtrl', ContactAddCtrl);
}());
