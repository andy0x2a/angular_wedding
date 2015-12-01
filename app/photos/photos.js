'use strict';

angular.module('myApp.photos', ['ngRoute', 'myApp.service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photos', {
    templateUrl: 'photos/photos.html',
    controller: 'photosController'
  });
}])

.controller('photosController', ['$scope', '$filter' ,'$window','apiService' ,function($scope, $filter, $window, api) {

$scope.init = function() {
	$scope.getPhotos();
};

$scope.getDocHeight = function() {
   return $($window).height();
};
$scope.showImage = function(photo) {
	$scope.currentPhoto = photo;
	$scope.isFullscreen = true;

} ;

$scope.hideImage = function() {
	console.log("hiding image");
	$scope.isFullscreen = false;
	$scope.currentPhoto = undefined;
};
$scope.getPhotos = function() {
	$scope.photoTemplates = api.getPhotos();
	angular.forEach($scope.photoTemplates.photos, function(photo) {
		photo.thumb = $scope.photoTemplates.path + "thumb/" + photo.name;
		photo.url = $scope.photoTemplates.path + "" + photo.name;


	});
}

$scope.init();
}]);