var myApp = /**
* todoApp Module
*
* Description
*/
angular.module('searchApp', ['ngAnimate'])

.controller('searchCon', function($scope,$http){
	$scope.gdr = 'male';

	$http.get('http://uinames.com/api/?amount=50')
	.then(function(response){
		$scope.data = response.data;
		// console.log($scope.data);
	})

	console.log($scope.gender);
})



