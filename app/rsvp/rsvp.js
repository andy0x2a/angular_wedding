'use strict';

angular.module('myApp.rsvp', ['ngRoute', 'myApp.startsWith', 'myApp.service'])


.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/rsvp', {
        templateUrl: 'rsvp/rsvp.html',
        controller: 'rsvpController'
    });
}])


.controller('rsvpController', ['$scope', '$filter', 'apiService', '$http', function ($scope, $filter, api, $http) {
    $scope.names = [];
    var task = api.getAllFamilies();
    task.then(function (data) {

        $scope.families = data.data;

        angular.forEach($scope.families, function (family) {
            angular.forEach(family.members, function (member) {
                member.familyId = family.id;
                member.familyName = family.name;
                $scope.names.push(member);
            })

        });

    }, function (error) {
        alert("something went wrong, please reload the page and try again. If this problem persists, contact Andy");
    });

    $scope.attendingStatus = function (guest) {
        if (typeof (guest.status) !== "undefined" && guest.status !== null) {
            return guest.status === "attending" ? 1 : 0;
        }
        return 0;
    }

    $scope.guestListClicked = function (guest) {
        var family = $scope.getFamilyForGuest(guest);
        $scope.setGuestDataForFamily(family, guest);
        $scope.guestFound = true;
    }


    $scope.getFamilyForGuest = function (guest) {
        var family;

        angular.forEach($scope.families, function (fam) {

            if (guest.familyId === fam.id) {
                family = fam;

            }
        });
        family.head = guest.name;
        return family;
    };
    $scope.findGuest = function (gName) {
        var result;
         $scope.pruned = $filter('startsWith')($scope.names, gName);
           if ($scope.pruned.length === 1) {
                 result = $scope.pruned[0];
            $scope.guestFound = true;
        }
        return result;

    };

    $scope.searchForGuest = function () {
        var guest = $scope.findGuest($scope.guestSearch);
        if (typeof (guest) !== "undefined") {

            var family = $scope.getFamilyForGuest(guest);
            $scope.setGuestDataForFamily(family, guest);
            $scope.guestFound = true;
        }

    }


    $scope.setGuestDataForFamily = function (family, guest) {

        if (typeof family != "undefined") {
            $scope.pruned = [];
            $scope.guest = guest;
            $scope.guest.name = family.head;
            $scope.guest.members = family.members;
            angular.forEach($scope.guest.members, function (member, index) {
                if (member.name == family.head) {
                    $scope.guest.members.splice(index, 1);
                }
            });
            return true;
        }
        var name = $scope.guest.name;
        $scope.guest = {};
        $scope.guest.name = name;

    }
    $scope.submit = function () {

        var modalGuestMessges = [];

        modalGuestMessges.push($scope.guest.name + " is " + $scope.guest.status);

        angular.forEach($scope.guest.members, function (member) {
            modalGuestMessges.push(member.name + " is " + member.status);
        });
        //window.confirm(message);
        $scope.modalGuestMessges = modalGuestMessges;
        $scope.modalShown = true;
    }

    $scope.submittoapi = function () {
        var allMembersToSubmit = [];
        allMembersToSubmit.push($scope.guest);

        angular.forEach($scope.guest.members, function (member) {
            allMembersToSubmit.push(member);
        });

      
        var task = api.submitGuests(allMembersToSubmit);
        task.then(function () {
            $scope.thankYouMessage = "RSVP confirmed. Thank you"

        }, function () {
            $scope.thankYouMessage = "Uh oh, something went wrong, please reload the page and try again. If the problem persists, please contact Andy";
           
        }).finally(function () {
            $scope.modalShown = false;
            $scope.showThankYou = true;
        });

    };
    window.scrollTo(0, 0);

    $scope.isValid = function (guest) {

        if (typeof (guest) === "undefined") {
            return false;
        }

        var isValidAttending = function (attending) {
            return (typeof (attending) !== "undefined" && attending !== null);
        };
        var isValid = true;

        if (!isValidAttending(guest.status)) {
            return false;
        };
        angular.forEach(guest.members, function (member) {
            console.log(member.name + " " + member.status);
            if (!isValidAttending(member.status)) {
                isValid = false;
            }
        });
        return isValid;

    };

    $scope.closeModal = function () {
        $scope.showThankYou = false;
    }
    
}]);