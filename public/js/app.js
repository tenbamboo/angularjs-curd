var app = angular.module('myApp', ["ngRoute","curd.services","curd.controllers","curd.directive","curd.filters"])

app.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.when('/view/:userId/:flag', {
			templateUrl: 'templates/edit.html',
			controller: 'EditController'
		})
		.when('/update/:userId/:flag', {
			templateUrl: 'templates/edit.html',
			controller: 'EditController'
		})
		.when('/save/:userId/:flag', {
			templateUrl: 'templates/edit.html',
			controller: 'EditController'
		})
		.otherwise({
			redirectTo: '/'
		});
})
