(function() {
  'use strict';

  var module = angular.module('app.module', [
    'ui.bootstrap',
    'ui.router',
    'contacts/contacts.module',
  ]);


  /**
   * @param {import('angular-ui-router').IStateProvider} $stateProvider
   * @param {import('angular-ui-router').IUrlRouterProvider} $urlRouterProvider
   */
  function config($stateProvider, $urlRouterProvider) {

    $http.get('/users')

    $urlRouterProvider.otherwise('/not-found');

    $stateProvider.state('home', {
      url: '/',
      template: '<h2>Home</h2>',
    });

    $stateProvider.state('not-found', {
      url: '/not-found',
      template: '<h2>Not Found</h2>',
    });

    $stateProvider.state('contact-list', {
      url: '/contacts/list',
      template: '<ab-contact-list></ab-contact-list>',
    });

    $stateProvider.state('contact-add', {
      url: '/contacts/add',
      controller: 'ContactAddCtrl',
      templateUrl: 'app/contacts/contact-add/contact-add.template.html',
    });

  }

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  module.config(config);
}());
