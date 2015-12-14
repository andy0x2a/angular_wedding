'use strict';

angular.module('myApp.admin', ['ngRoute', 'myApp.service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin', {
    templateUrl: 'admin/admin.html',
    controller: 'adminController'
  });
}])

.controller('adminController', ['$scope','apiService' ,function($scope, apiService) {


      window.scrollTo(0,0);
$scope.getGuests = function() {
	
      apiService.getAllGuests().then(function(data) {
      	$scope.guests = data.data;
      });
}

$scope.login = function() {
	$scope.adminPassword
}

$scope.submit = function() {
	apiService.submitGuests($scope.guests).then(function(response){alert("success")}, function(error){ alert("failed" + error);

	});
}

    }]);