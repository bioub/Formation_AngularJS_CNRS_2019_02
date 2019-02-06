

(function() {
  'use strict';

  var module = angular.module('interceptors/base-url.interceptor', [
    'app-params.service'
  ]);

  /**
   * @type {import('angular').IHttpInterceptorFactory}
   */
  function baseUrlInterceptorFactory(appParams) {
    return {
      request: function(config) {
        if (config.url.indexOf('.html') === -1) {
          config.url = appParams.apiBaseUrl + config.url;
        }
        return config;
      }
    };
  }

  baseUrlInterceptorFactory.$inject = ['appParams'];


  /**
   *
   * @param {import('angular').IHttpProvider} $httpProvider
   */
  function config($httpProvider) {
    $httpProvider.interceptors.push(baseUrlInterceptorFactory);
  }

  config.$inject = ['$httpProvider'];

  module.config(config);

}());
