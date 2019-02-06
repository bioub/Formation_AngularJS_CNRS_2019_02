

(function() {
  'use strict';

  var module = angular.module('interceptors/loading.interceptor', []);

  /**
   * @type {import('angular').IHttpInterceptorFactory}
   * @param {import('angular').IRootScopeService} $rootScope
   */
  function loadingInterceptorFactory($rootScope, $q) {
    $rootScope.countRequests = 0;
    return {
      request: function(config) {
        $rootScope.countRequests++;
        return config;
      },
      requestError: function(rejection) {
        $rootScope.countRequests--;
        return $q.reject(rejection);
      },
      response: function(response) {
        $rootScope.countRequests--;
        return response;
      },
      responseError: function(rejection) {
        $rootScope.countRequests--;
        return $q.reject(rejection);
      },
    };
  }

  loadingInterceptorFactory.$inject = ['$rootScope', '$q'];


  /**
   *
   * @param {import('angular').IHttpProvider} $httpProvider
   */
  function config($httpProvider) {
    $httpProvider.interceptors.push(loadingInterceptorFactory);
  }

  config.$inject = ['$httpProvider'];

  module.config(config);

}());
