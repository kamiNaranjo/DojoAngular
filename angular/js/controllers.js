//
var MyApp = angular.module('MyApp', []);

//El controler es una funcion que esta realizando una petición get contra el archivo data.js
MyApp.controller('MyController', ['$scope', '$http', function MyController($scope, $http){
	$http.get('data.json').success(function(data){
		$scope.artists = data;
		$scope.artistsOrder = 'name';
	});
}]);