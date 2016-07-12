'use strict';

function userController($scope, $http) {
  $scope.message = 'Hello';
  $http.get("/api/things")
  	.then( function(r) {
  		$scope.message = r.data;
  	});
  console.log($http);
}

angular.module('myangularApp')
  .controller('UserController', userController)
.config(function($routeProvider) {
		$routeProvider
	    .when('/user', {
	    	template: '<h1>111{{message}}</h1>',
	    	controller: 'UserController'
	    });
	});
console.log("done")
