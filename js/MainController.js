var app = angular.module('productIdGen');

app.controller('MainController', function ($scope, mainService) {

	$scope.test = 'This is a test';
	$scope.products = ['Finials', 'Brackets', 'Masters', 'Carriers'];
	$scope.product = {
	
		// productName:
		// manufacturer:
		// manufacturerId
		// material:
		// dimensions:
		// color:
		// newProductId:

	};



	$scope.getData = function() {

		mainService.getData().then(function(res) {
			$scope.categories = res.data.categories;
			$scope.manufacturers = res.data.manufacturers;
			$scope.materials = res.data.materials;
			$scope.colors = res.data.colors;
		})
	}	

	$scope.addProductId = function() {
		// $scope.product.category = $scope.product.category.name;
		// $scope.product.productName = $scope.product.productName;
		// $scope.product.manufacturer = $scope.product.manufacturer.name;
		mainService.addProductId($scope.product, function (data){
			//$scope.product = data.data;
		});
	}


	$scope.getData(); // can put this in my generator state in the resolve

	// $scope.getManufacturers = function() {

	// 	mainService.getManufacturers().then(function(data) {
	// 		$scope.manufacturers = data.data;
	// 		// console.log(data.data)
	// 	})
	// }
	// $scope.getManufacturers();


});