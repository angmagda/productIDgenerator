var app = angular.module('productIdGen', ['ui.router', 'ngRoute'])

.config(function($stateProvider, $urlRouterProvider) {
	

	$urlRouterProvider.otherwise('/');

	$stateProvider

	// HOME STATES AND NESTED VIEWS

		.state('home', {
			url: '/',
			templateUrl: 'views/partial-home.html',
			controller: 'MainController'
		})

		// Nested list
	    .state('home.list', {
	        url: '/list',
	        templateUrl: 'views/partial-home-list.html',
	        controller: 'MainController'
	    })


	    // nested list with just some random string data
	    .state('home.paragraph', {
	        url: '/paragraph',
	        template: 'Whaaaaaaaatt?'
	    })



		.state('generator', {
			url:'/generator',
			templateUrl: 'views/generator.html',
			controller: 'MainController'
		})

		.state('products', {
			url:'/products',
			templateUrl: 'views/products.html',
			controller: 'MainController'
		})

		.state('contact',{
			url: '/contact',
			templateUrl: 'views/contact.html',
			controller: 'MainController'

		});

});