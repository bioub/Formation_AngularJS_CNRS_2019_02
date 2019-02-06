(function() {
  'use strict';

  var module = angular.module('contacts/contact-list/contact-list.directive', [
    'contacts/contact-http.service'
  ]);

  /**
   * @param {import('angular').IScope} $scope
   */
  function ContactListCtrl($scope, contactHttpService) {
    contactHttpService.getAll()
      .then(function(contacts) {
        $scope.contacts = contacts;
      });
  }

  ContactListCtrl.$inject = ['$scope', 'contactHttpService'];

  /** @type {import('angular').IDirectiveFactory} */
  function abContactListDirectoryFactory() {
    return {
      restrict: 'E',
      controller: ContactListCtrl,
      templateUrl: 'app/contacts/contact-list/contact-list.template.html',
    };
  }

  abContactListDirectoryFactory.$inject = [];

  module.directive('abContactList', abContactListDirectoryFactory);
}());
