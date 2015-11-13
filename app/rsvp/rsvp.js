'use strict';

angular.module('myApp.rsvp', ['ngRoute', 'myApp.startsWith'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rsvp', {
    templateUrl: 'rsvp/rsvp.html',
    controller: 'rsvpController'
  });
}])



    .service('apiService', [function() {

        return {
            getStuff: function() {
                return {
                    guests : [
                        {guestName: 'Emily Heard',family: 'newman'},

                        {guestName: 'Andy Newman',family: 'newman'},

                        {guestName: 'Geny Heard',family: 'JG'},
                        {guestName: 'Jason Heard',family: 'JG'},
                        {guestName: 'Ryley',family: 'JG'},
                        {guestName: 'Pyper',family: 'JG'},

                        {guestName: 'Matt Wallace',family:'wallace'},
                        {guestName: 'Jenn Calabrigo',family:'wallace'},

                        {guestName: 'Kirk Klassen',family:'klassen'},

                        {guestName: 'Merrilee Knowlan-Heard', family: 'Knowlan-heard'},
                        {guestName: 'David Heard', family: 'Knowlan-heard'},

                        {guestName: 'Melissa McComb', family: 'McComb'},
                        {guestName: 'Iain McComb', family: 'McComb'},
                        {guestName: 'James McComb', family: 'McComb'},

                        {guestName: 'Karen Newman', family: 'NC'},
                        {guestName: 'Aaron Coelho', family: 'NC'},

                        {guestName:'Sharon Newman', family: 'rs'},
                        {guestName: 'Reg Newman', family: 'rs'},

                        {guestName: 'Chloe Ellis', family: 'ellis'},
                        {guestName: 'Lee Ellis', family: 'ellis'},

                        {guestName: 'Haena Cho', family: 'cho'},
                        {guestName: 'Richard Fong', family: 'cho'},

                        {guestName: 'Samantha Lindberg', family: 'lindberg'},
                        {guestName: 'Raymond Blackmore', family: 'lindberg'},

                        {guestName: 'Michelle Richards', family: 'mrich'},

                        {guestName: 'Alicia Richards', family: 'richards'},
                        {guestName: 'Desi McEwan', family: 'richards'},

                        {guestName: 'Jeff Newman', family: 'laser'},
                        {guestName: 'Jeff_Date', family: 'laser'},

                        {guestName: 'Matthew Elder', family: 'elder'},
                        {guestName: 'Sarah Elder', family: 'elder'},

                        {guestName: 'Catherine Railton', family: 'railton'},

                        {guestName: 'Craig Pender', family: 'pender'},

                        {guestName: 'Krista Manley', family: 'manley'},
                        {guestName: 'Corbin Pender', family: 'manley'},

                        {guestName: 'Cecilia Newman', family: 'grandma'},
                        {guestName: 'Jennifer Johnston', family: 'grandma'},
                        {guestName: 'Colin Johnston', family: 'grandma'},

                        {guestName: 'Tina Knowlan', family: 'tk'},
                        {guestName: 'Brett Anuik', family: 'tk'},

                        {guestName: 'Rick Knowlan', family: 'rk'},
                        {guestName: 'Shan He', family: 'rk'},

                        {guestName: 'Tammy Knowlan', family: 'tammy'},

                        {guestName: 'Randy Knowlan', family: 'randy'},

                        {guestName: 'Rod Knowlan', family: 'rod'},

                        {guestName: 'Terry Heard', family: 'th'},
                        {guestName: 'Gordon Heard', family: 'th'},

                        {guestName: 'Lynn Obojski', family: 'obojski'},
                        {guestName: 'Eugene Obojski', family: 'obojski'},

                        {guestName: 'Wendy Sinclair-Smith', family: 'ss'},
                        {guestName: 'Elizabeth Sinclair-Smith', family: 'SS'},

                        {guestName: 'Michele Lee', family: 'lee'},

                        {guestName: 'Erin Cox', family: 'cox'},
                        {guestName: 'Eric Larsen', family: 'cox'},

                        {guestName: 'Carmen Cohoe', family: 'cohoe'},

                        {guestName: 'Abhi Ramlugun', family: 'abhi'},
                        {guestName: 'Alison Esau', family: 'abhi'},

                        {guestName: 'Scott McCoach', family: 'mccoach'},
                        {guestName: 'Meghan Laurel', family: 'mccoach'},

                        {guestName: 'Jesse Goodall', family: 'preet'},
                        {guestName: 'Preet Dutt', family: 'preet'},

                        {guestName: 'Laurence Newman', family: 'ln'},
                        {guestName: 'Agnes Newman', family: 'ln'},

                        {guestName: 'Mirand Rowley', family: 'rowley'},
                        {guestName: 'Dustin Rowley', family: 'rowley'},

                        {guestName: 'Chris Newman', family: 'cnewman'},

                        {guestName: 'Peter Newman', family: 'pnewman'},
                        {guestName: 'Brittany', family: 'pnewman'},

                        {guestName: 'Liz Pederson', family: 'pederson'},
                        {guestName: 'Jeff Lockwood', family: 'pederson'},

                        {guestName: 'Amy Cheng', family: 'cheng'},

                        {guestName: 'Chris Beal', family: 'bender'},

                        {guestName: 'Chris Bennett', family: 'bennett'},

                        {guestName: 'Kiel Skriver', family: 'kiel'},

                        {guestName: 'Doug Butters', family: 'dbutters'},
                        {guestName: 'Grace Butters', family: 'dbutters'},
                        {guestName: 'Jacob Butters', family: 'dbutters'},

                        {guestName: 'Greg Butters', family: 'gbutters'},

                        {guestName: 'James Butters', family: 'jbutters'},
                        {guestName: 'Gayle Butters', family: 'jbutters'},

                        {guestName: "Dave O'Sullivan", family: 'osullivan'},
                        {guestName: "Daves wife O'Sullivan", family: 'osullivan'},

                        {guestName: 'Giancarlo Brancati', family: 'giancarlo'},
                        {guestName: 'Erin Brancati', family: 'giancarlo'},

                        {guestName: 'Harry Coster', family: 'coster'},
                        {guestName: 'Melinda Coster', family: 'coster'},

                        {guestName: 'Janine Wittal', family: 'wittal'},

                        {guestName: 'Lynell Anderson', family: 'anderson'},
                        {guestName: 'Rod Anderson', family: 'anderson'},

                        {guestName: 'Matt Anderson', family: 'cowdy'},
                        {guestName: 'Dan Seeton', family: 'cowdy'},

                        {guestName: 'Melanie Anderson', family: 'manderson'},
                        {guestName: 'Taylor Mappins', family:'manderson'},

                        {guestName: 'Ryan Wong', family: 'rwong'},

                        {guestName: 'Mark Newman', family: 'mnew'},
                        {guestName: 'Lolly Newman', family: 'mnew'},
                        {guestName: 'Jasmine Newman', family: 'mnew'},

                        {guestName: 'Kayla Burley', family: 'kayla'},

                        {guestName: 'Lindsey Luckey', family: 'luckey'},
                        {guestName: 'Chris Amond', family: 'luckey'},

                        {guestName: 'Alexis Eapen', family: 'eapen'},
                        {guestName:'Tyler Stevenson', family: 'eapen'},

                        {guestName: "Leah Knowlan", family: 'leah'},

                        {guestName: 'Matthew McCarthy', family: 'mccarthy'},
                        {guestName: 'Isha McCarthy', family: 'mccarthy'},

                        {guestName: 'Melissa Cook', family: 'cook'},
                        {guestName: 'Tyee Cook', family: 'cook'},

                        {guestName: 'Tony Coelho', family: 'coelho'},
                        {guestName: 'Cindy Coelho', family: 'coelho'},
                        {guestName: 'Trevor Coelho', family: 'coelho'},

                        {guestName: 'Taylor Barnard', family: 'tay'},

                        {guestName: 'Zahoor Samji', family: 'zahoor'},
                        {guestName: 'Taslim Samji', family: 'zahoor'}

                    ],

                }
            }
        }
    }])

.controller('rsvpController', ['$scope', '$filter' ,'apiService',function($scope, $filter, api) {

        $scope.searchguests = api.getStuff();
        $scope.guestNames = $scope.searchguests.guests;
        $scope.families = {};

        angular.forEach($scope.guestNames, function(guest){

            var family = $scope.families[guest.family];
            if (typeof(family) ==="undefined") {
                family = {
                    family:guest.family,
                members :[]
                };
            $scope.families[guest.family] = family;
            }

            family.members.push({name: guest.guestName});

        });

        $scope.guestListClicked = function(guest) {
            var family = $scope.getFamilyForGuest(guest);
            $scope.setGuestDataForFamily(family);

        }
      $scope.getFamilyForGuest = function(guest) {
          var family = $scope.families[guest.family];
          family.head= guest.guestName;
          return family;
      };
        $scope.findGuest = function(gName) {

            var result;
            //search both names in each family
            //var pruned = $filter('filter')($scope.guestNames, {guestName :gName }, false);
             $scope.pruned = $filter('startsWith')($scope.guestNames, gName);
            //var starts = $filter('filter')($scope.guestNames, startsWith());
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
    var message = $scope.guest.name + " is " + ($scope.guest.attending ==0? "not " : "")+ "attending";
    angular.forEach($scope.guest.members, function(member) {
        message +="\n <br>"
        message += member.name ;
        message += " is " ;
        message += member.attending ==0? "not " : "";
        message += "attending";

    });
    //window.confirm(message);
    $scope.modalMessage = message;
    $scope.modalShown = true;
}
    }]);