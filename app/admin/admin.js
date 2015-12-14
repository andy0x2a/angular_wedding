'use strict';

angular.module('myApp.admin', ['ngRoute', 'myApp.service'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/admin', {
        templateUrl: 'admin/admin.html',
        controller: 'adminController'
    });
}])

.controller('adminController', ['$scope', 'apiService', function ($scope, apiService) {

    $scope.isAuthorized = false;
    window.scrollTo(0, 0);
    $scope.getGuests = function () {

        apiService.getAllGuests($scope.adminPassword).then(function (data) {
            $scope.guests = data.data;
        });
    }

    $scope.login = function () {

        var task = apiService.doLogin($scope.adminPassword);
        task.then(function () {
            $scope.isAuthorized = true;
            $scope.getGuests();

        }, function () {
            $scope.isAuthorized = false;
            $scope.adminPassword = "";
            alert("Invalid Password");
        });
    }

    $scope.submit = function () {
        apiService.submitGuests($scope.guests).then(function (response) { alert("success") }, function (error) {
            alert("failed" + error);

        });
    }

}]);