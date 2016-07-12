'use strict';

angular.module('myangularApp', ['myangularApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ngRoute'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/user'
    });

    $locationProvider.html5Mode(true);
  });
