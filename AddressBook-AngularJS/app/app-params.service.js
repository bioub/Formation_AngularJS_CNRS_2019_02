(function() {
  'use strict';

  var module = angular.module('app-params.service', []);

  module.constant('appParams', {
    apiBaseUrl: 'https://jsonplaceholder.typicode.com'
  });
}());
