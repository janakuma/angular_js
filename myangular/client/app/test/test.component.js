'use strict';

function testController() {
  this.message = 'World';
}

angular.module('myangularApp')
  .component('test', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: testController
})
.config(function($routeProvider) {
		$routeProvider
	    .when('/test', {
	    	template: '<test></test>'
	    });
	});


