(function() {
  'use strict';

  var module = angular.module('app.module', [
    'ui.bootstrap',
    'ui.router',
    'contacts/contacts.module',
    'interceptors/loading.interceptor',
    'interceptors/base-url.interceptor',
  ]);


  /**
   * @param {import('angular-ui-router').IStateProvider} $stateProvider
   * @param {import('angular-ui-router').IUrlRouterProvider} $urlRouterProvider
   */
  function config($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/not-found');



    /*
    Avec un seul ui-view (sans nom)
    $stateProvider.state('contact-list', {
      url: '/contacts/list',
      template: '<ab-contact-list></ab-contact-list>',
    });

    $stateProvider.state('contact-add', {
      url: '/contacts/add',
      controller: 'ContactAddCtrl',
      templateUrl: 'app/contacts/contact-add/contact-add.template.html',
    });
    */

   $stateProvider.state('home', {
    url: '/',
    views: {
      left: {
        template: '<h2>Home</h2>',
      }
    }
  });

  $stateProvider.state('not-found', {
    url: '/not-found',
    views: {
      left: {
        template: '<h2>Not Found</h2>',
      }
    }
  });

   $stateProvider.state('contacts', {
    url: '/contacts',
    views: {
      left: {
        template: '<ab-contact-list></ab-contact-list>',
      }
    }
  });

  $stateProvider.state('contacts-add', {
   url: '/contacts/add',
   views: {
     left: {
       template: '<ab-contact-list></ab-contact-list>',
     },
     right: {
       controller: 'ContactAddCtrl',
       templateUrl: 'app/contacts/contact-add/contact-add.template.html',
     }
   }
 });

  $stateProvider.state('contacts-show', {
    url: '/contacts/:id',
    views: {
      left: {
        template: '<ab-contact-list></ab-contact-list>',
      },
      right: {
        controller: 'ContactShowCtrl',
        controllerAs: 'test',
        templateUrl: 'app/contacts/contact-show/contact-show.template.html',
        // resolve: {
        //   contact: function(contactHttpService, $stateParams) {
        //     return contactHttpService.getById($stateParams.id);
        //   }
        // },
      }
    }
  });

  // Nested view (imbriquer les ui-view)
  /*
  $stateProvider.state('contacts', {
    url: '/contacts',
    template: '<ab-contact-list></ab-contact-list>',
  });


   $stateProvider.state('contacts.add', {
    url: '/add',
    controller: 'ContactAddCtrl',
    templateUrl: 'app/contacts/contact-add/contact-add.template.html',
  });
  */

  }

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  module.config(config);
}());
