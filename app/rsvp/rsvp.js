'use strict';

angular.module('myApp.rsvp', ['ngRoute', 'myApp.startsWith', 'myApp.service'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rsvp', {
    templateUrl: 'rsvp/rsvp.html',
    controller: 'rsvpController'
  });
}])


.controller('rsvpController', ['$scope', '$filter' ,'apiService' ,'$http',function($scope, $filter, api, $http) {
        $scope.names = [];
      var task  = api.getAllFamilies();
      task.then(function(data) {
            
            $scope.families = data.data;

            angular.forEach($scope.families, function(family) {
                angular.forEach(family.members, function(member) {
                member.familyId = family.id;
                member.familyName = family.name;
                $scope.names.push(member);
                })

            });

      }, function(error) {
        alert("something went wrong, please reload the page and try again. If this problem persists, contact Andy");
    });

      $scope.attendingStatus = function(guest) {
        if (typeof(guest.status) !=="undefined" && guest.status !== null) {
            return guest.status==="attending"?1:0;
        }
        return 0;
      }
     
        $scope.guestListClicked = function(guest) {
            var family = $scope.getFamilyForGuest(guest);
            $scope.setGuestDataForFamily(family);

        }

       
      $scope.getFamilyForGuest = function(guest) {
          var family ;

          angular.forEach($scope.families, function(fam){

            if (guest.familyId === fam.id) {
                family = fam;

            }
          }); 
            family.head= guest.name;
          return family;
      };
        $scope.findGuest = function(gName) {

            var result;
            //search both names in each family
            //var pruned = $filter('filter')($scope.names, {name :gName }, false);
             $scope.pruned = $filter('startsWith')($scope.names, gName);
            //var starts = $filter('filter')($scope.names, startsWith());
            //
            //$scope.pruned = pruned;

            if($scope.pruned.length ===1) {
                var found= $scope.pruned[0];
              result = $scope.getFamilyForGuest(found);
            }
            return result;

        };

        $scope.updatePlusOne = function() {
            //todo check real response against list from azure search
            var family = $scope.findGuest($scope.guest.name);
            $scope.setGuestDataForFamily(family);
        }
        $scope.setGuestDataForFamily = function(family) {

        if (typeof family != "undefined") {
            $scope.pruned = [];

                $scope.guest.name = family.head;
                $scope.guest.members = family.members;
                angular.forEach($scope.guest.members, function(member, index){
                    if(member.name == family.head) {
                        $scope.guest.members.splice(index,1);
                    }
                });

                $scope.guest.hasPlusOne=true;
                return true;

            }
            var name = $scope.guest.name;
            $scope.guest = {};
            $scope.guest.name = name;
            $scope.guest.hasPlusOne=false;
        }
$scope.submit = function() {

    var modalGuestMessges = [];

    modalGuestMessges.push($scope.guest.name + " is " + $scope.guest.status );

    angular.forEach($scope.guest.members, function(member) {
        modalGuestMessges.push(member.name  + " is " + member.status);
    });
    //window.confirm(message);
    $scope.modalGuestMessges = modalGuestMessges;
    $scope.modalShown = true;
}

$scope.submittoapi = function() {
    console.log("GO");
    var allMembersToSubmit = [];
    allMembersToSubmit.push($scope.guest);

    angular.forEach($scope.guest.members, function(member) {
        allMembersToSubmit.push(member);
    });

    console.log(allMembersToSubmit);
    var task = api.submitGuests(allMembersToSubmit);
    task.then(function() {
        alert("Success");
    }, function() {
        alert("Failed to submit");
    });
    
};
        window.scrollTo(0,0);


//remove this
 // $scope.upload = function() {
 //     var fdata = [];
 //     Object.keys($scope.families).forEach(function (key) {
 //   // do something with obj[key]
 //   var family = $scope.families[key];
 //   family.name = family.family;
 //   fdata.push(family);
 //        });
           
 //           console.log(fdata);
           

 //               var req = {
 //                method: 'POST',
 //                data:fdata,
 //                url: "http://localhost:8080/family/init"
 //                }       
 //                var task = $http(req);
 //                task.then(function() {
 //                    console.log("SUCCESS")
 //                }, console.log("FAIL"));
           
 //        }

    }]);