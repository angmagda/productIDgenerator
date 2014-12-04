var app = angular.module('productIdGen');

app.service('mainService', function ($http) {
	this.getData = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/generator'
		})

	},

// 	this.addProductId = function(product, $scope) {
// 		return $http({
// 			method: 'POST',
// 			url: 'http://localhost:3000/products',
// 			data: {}
// 		}).then(function(newProductId){
// 			return newProductId.data
// 		});
		
// }

//  this.addProductId = function(product, callback) {
//    console.log('new product function')
//    return $http.post('http://localhost:3000/products', {product: product})
//    .success(function(data, status, headers, config){
//        console.log(data);
//        callback(data);
//    })
//        .error(function(data, status, headers, config) {
//            console.log(status);
//        })
// }

this.addProductId = function(product, callback) {
   return $http( {
   		method: 'POST',
   		url: 'http://localhost:3000/products', 
   		data: {product: product}
   })
   .success(function(data, status, headers, config){
       console.log(data, 'working');
   })
       .error(function(data, status, headers, config) {
           console.log(status);
       })
}

	})