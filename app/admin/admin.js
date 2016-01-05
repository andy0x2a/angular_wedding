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
    $scope.showGuests = true;
    $scope.isLoading = false;
    $scope.familySelectData = [];
    window.scrollTo(0, 0);
    //$scope.getGuests = function () {

    //    apiService.getAllGuests($scope.adminPassword).then(function (data) {
    //        $scope.guests = data.data;
    //        $scope.getFamilies();
    //    });
    //}

    $scope.getFamilies = function () {
        $scope.isLoading = true;
        $scope.guests = [];
        apiService.getAllFamilies($scope.adminPassword).then(function (data) {
            $scope.families = data.data;
            angular.forEach($scope.families, function (family, index) {
                $scope.familySelectData.push({id:family.id, name:family.name})
                angular.forEach(family.members, function (guest, idx) {
                    guest.familyId = family.id;
                    guest.familyName = family.name;
                    $scope.guests.push(guest);
                });
            });
        }).finally(function () {
            $scope.isLoading = false;
        });;
    }
    $scope.login = function () {

        var task = apiService.doLogin($scope.adminPassword);
        task.then(function () {
            $scope.isAuthorized = true;

            $scope.getFamilies();

        }, function () {
            $scope.isAuthorized = false;
            $scope.adminPassword = "";
            $scope.message = "Invalid password";
            $scope.showMessage = true;
        });
    }

    $scope.deleteGuest = function (guest) {
        $scope.isLoading = true;
        apiService.deleteGuest($scope.adminPassword, guest.id).then(function () {
            $scope.message = "Successfully Deleted guest: " + guest.name;
            $scope.showMessage = true;
        }, function (error) {
            $scope.message = "Error deleting guest: " + error;
            $scope.showMessage = true;
        }).finally(function () {
            $scope.isLoading = false;
        });
    }
    $scope.addFamily = function (family) {
        $scope.isLoading = true;
        apiService.addFamily($scope.adminPassword, family).then(
            function (data) {
                family = data.data;
                $scope.message = "Successfully Deleted guest: " + guest.name;
                $scope.showMessage = true;
            }, function (error) {
                $scope.message = "Error deleting guest: " + error;
                $scope.showMessage = true;
            }).finally(function () {
                $scope.isLoading = false;
                $scope.showAddFamilyForm = false;
            });
    }

    $scope.submit = function () {
        window.scrollTo(0, 0);
        $scope.isLoading = true;
        $scope.showGuests = false;
        apiService.submitGuests($scope.guests).then(function (response) {
            $scope.message = "Success";
            $scope.showMessage = true;
            
        }, function (error) {
            $scope.message = "Error: " + error ;
            $scope.showMessage = true;

        }).finally(function () {
            $scope.isLoading = false;
        }) ;
    }
    $scope.closeModal = function () {
        $scope.showMessage = false;
        $scope.message = undefined;
        $scope.showGuests = true;
    }
}]);