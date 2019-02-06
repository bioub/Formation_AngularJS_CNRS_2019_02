(function() {
  'use strict';

  var module = angular.module('contacts/contact-http.service', []);


  function ContactHttpService($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  ContactHttpService.prototype.getAll = function() {
    return this.$http.get('/users')
      .catch(function(err) {
        // TODO mettre le catch dans un intercepteur
        console.log('error', err);
      })
      .then(function(res) {
        return res.data.map(function(contact) {
          return {
            id: contact.id,
            name: contact.name,
          }
        });
      });
  };

  ContactHttpService.prototype.getById = function(id) {
    var that = this;
    return this.$http.get('/users/' + id)
      .catch(function(err) {
        // TODO mettre le catch dans un intercepteur
        console.log('error', err);
        return that.$q.reject(err);
      })
      .then(function(res) {
        return res.data;
      });
  };

  ContactHttpService.$inject = ['$http', '$q'];

  /*
  function contactServiceFactory() {
    return {
      getAll: function() {
        return this.$http.get('/users')...
      }
    }
  }
  module.factory('contactHttpService', ContactHttpService);
  */

  // var contactHttpService = new ContactHttpService();
  // contactHttpService.getById();

  module.service('contactHttpService', ContactHttpService);
}());
