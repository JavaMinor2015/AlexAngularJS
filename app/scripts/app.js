'use strict';

/**
 * @ngdoc overview
 * @name angularTestsApp
 * @description
 * # angularTestsApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularTestsApp.filters',
    'angularTestsApp.directives',
    'ui-notification'
  ])
  .config(function ($routeProvider, NotificationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

    NotificationProvider.setOptions({
      delay: 10000,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'right',
      positionY: 'bottom'
    });
  });

angular.module('angularTestsApp.filters', []);
angular.module('angularTestsApp.directives', []);
