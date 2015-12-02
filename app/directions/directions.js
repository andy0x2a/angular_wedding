'use strict';

angular.module('myApp.directions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/directions', {
    templateUrl: 'directions/directions.html',
    controller: 'directionsController'
  });
}])

.controller('directionsController', [function() {
      window.scrollTo(0,0);

}]);