(function() {
  'use strict';

  var module = angular.module('contacts/contact-resource.service', [
    'ngResource',
  ]);

  /**
   * @type {import('angular').IServiceProviderFactory}
   * @param {import('angular-resource').} $resource
   */
  function contactResourceServiceFactory($resource) {
    return $resource('/users/:contactId', {contactId: '@id'}, {
      query: {
        method: 'GET', cache: true, isArray: true, // les resultats sont mis en cache (une seule req)
      },
      update: {
        method: 'PATCH', isArray: false
      }
    });
  }

  contactResourceServiceFactory.$inject = ['$resource'];

  module.factory('Contact', contactResourceServiceFactory);
}());
