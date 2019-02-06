(function() {
  'use strict';

  var module = angular.module('contacts/contact-show/contact-show.controller', []);

  /**
   *
   * @param {import('angular').IScope} $scope
   * @param {import('angular-ui-router').IStateService} $state
   */
  function ContactShowCtrl($scope, $state, contactHttpService) {
    contactHttpService.getById($state.params.id)
    .then(function(contact) {
      $scope.contact = contact;
    })
    .catch(function(rejection) {
      if (rejection.status === 404) {
        $state.go('not-found');
      }
    });
  }

  ContactShowCtrl.$inject = ['$scope', '$state', 'contactHttpService'];

  module.controller('ContactShowCtrl', ContactShowCtrl);
}());
