'use strict';

angular.module('myangularApp')
  .config(function($routeProvider) {
    $routeProvider
	    .when('/', {
	      template: '<main></main>'
	    });
  });
