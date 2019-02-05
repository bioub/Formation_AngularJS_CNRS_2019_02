(function() {
  'use strict';

  var module = angular.module('contacts/contact-list/contact-list.directive', []);

  function ContactListCtrl() {

  }

  ContactListCtrl.$inject = [];

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
