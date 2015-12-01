'use strict';

angular.module('myApp.service',[])

// .service('apiServices', [function() {


//         return {

//             postGuest: function() {
//             console.log('posting guest');

//             },

//             putGuest: function() {
//                 console.log('put guest');
//             }

//         }
// }]);

.service('apiService', ['constants', '$http', function(constants, $http) {

        return {
            getAllFamilies: function() {
                
            var req = {
                method: 'GET',
                url: constants.config.apiBase + '/family/'
                
            };
            return $http(req);
            },
            submitGuests: function(requestData) {
    
            var req = {
                method: 'POST',
                url: constants.config.apiBase + '/rsvp/updateList',
                data:requestData
                
            };
            return $http(req);
            },

            getStuffOld: function() {
                return {
                    guests : [
                        {name: 'Emily Heard',family: 'newman'},

                        {name: 'Andy Newman',family: 'newman'},

                        {name: 'Geny Heard',family: 'JG'},
                        {name: 'Jason Heard',family: 'JG'},
                        {name: 'Ryley',family: 'JG'},
                        {name: 'Pyper',family: 'JG'},

                        {name: 'Matt Wallace',family:'wallace'},
                        {name: 'Jenn Calabrigo',family:'wallace'},

                        {name: 'Kirk Klassen',family:'klassen'},

                        {name: 'Merrilee Knowlan-Heard', family: 'Knowlan-heard'},
                        {name: 'David Heard', family: 'Knowlan-heard'},

                        {name: 'Melissa McComb', family: 'McComb'},
                        {name: 'Iain McComb', family: 'McComb'},
                        {name: 'James McComb', family: 'McComb'},

                        {name: 'Karen Newman', family: 'NC'},
                        {name: 'Aaron Coelho', family: 'NC'},

                        {name:'Sharon Newman', family: 'rs'},
                        {name: 'Reg Newman', family: 'rs'},

                        {name: 'Chloe Ellis', family: 'ellis'},
                        {name: 'Lee Ellis', family: 'ellis'},

                        {name: 'Haena Cho', family: 'cho'},
                        {name: 'Richard Fong', family: 'cho'},

                        {name: 'Samantha Lindberg', family: 'lindberg'},
                        {name: 'Raymond Blackmore', family: 'lindberg'},

                        {name: 'Michelle Richards', family: 'mrich'},

                        {name: 'Alicia Richards', family: 'richards'},
                        {name: 'Desi McEwan', family: 'richards'},

                        {name: 'Jeff Newman', family: 'laser'},
                        {name: 'Jeff_Date', family: 'laser'},

                        {name: 'Matthew Elder', family: 'elder'},
                        {name: 'Sarah Elder', family: 'elder'},

                        {name: 'Catherine Railton', family: 'railton'},

                        {name: 'Craig Pender', family: 'pender'},

                        {name: 'Krista Manley', family: 'manley'},
                        {name: 'Corbin Pender', family: 'manley'},

                        {name: 'Cecilia Newman', family: 'grandma'},
                        {name: 'Jennifer Johnston', family: 'grandma'},
                        {name: 'Colin Johnston', family: 'grandma'},

                        {name: 'Tina Knowlan', family: 'tk'},
                        {name: 'Brett Anuik', family: 'tk'},

                        {name: 'Rick Knowlan', family: 'rk'},
                        {name: 'Shan He', family: 'rk'},

                        {name: 'Tammy Knowlan', family: 'tammy'},

                        {name: 'Randy Knowlan', family: 'randy'},

                        {name: 'Rod Knowlan', family: 'rod'},

                        {name: 'Terry Heard', family: 'th'},
                        {name: 'Gordon Heard', family: 'th'},

                        {name: 'Lynn Obojski', family: 'obojski'},
                        {name: 'Eugene Obojski', family: 'obojski'},

                        {name: 'Wendy Sinclair-Smith', family: 'ss'},
                        {name: 'Elizabeth Sinclair-Smith', family: 'SS'},

                        {name: 'Michele Lee', family: 'lee'},

                        {name: 'Erin Cox', family: 'cox'},
                        {name: 'Eric Larsen', family: 'cox'},

                        {name: 'Carmen Cohoe', family: 'cohoe'},

                        {name: 'Abhi Ramlugun', family: 'abhi'},
                        {name: 'Alison Esau', family: 'abhi'},

                        {name: 'Scott McCoach', family: 'mccoach'},
                        {name: 'Meghan Laurel', family: 'mccoach'},

                        {name: 'Jesse Goodall', family: 'preet'},
                        {name: 'Preet Dutt', family: 'preet'},

                        {name: 'Laurence Newman', family: 'ln'},
                        {name: 'Agnes Newman', family: 'ln'},

                        {name: 'Mirand Rowley', family: 'rowley'},
                        {name: 'Dustin Rowley', family: 'rowley'},

                        {name: 'Chris Newman', family: 'cnewman'},

                        {name: 'Peter Newman', family: 'pnewman'},
                        {name: 'Brittany', family: 'pnewman'},

                        {name: 'Liz Pederson', family: 'pederson'},
                        {name: 'Jeff Lockwood', family: 'pederson'},

                        {name: 'Amy Cheng', family: 'cheng'},

                        {name: 'Chris Beal', family: 'bender'},

                        {name: 'Chris Bennett', family: 'bennett'},

                        {name: 'Kiel Skriver', family: 'kiel'},

                        {name: 'Doug Butters', family: 'dbutters'},
                        {name: 'Grace Butters', family: 'dbutters'},
                        {name: 'Jacob Butters', family: 'dbutters'},

                        {name: 'Greg Butters', family: 'gbutters'},

                        {name: 'James Butters', family: 'jbutters'},
                        {name: 'Gayle Butters', family: 'jbutters'},

                        {name: "Dave O'Sullivan", family: 'osullivan'},
                        {name: "Daves wife O'Sullivan", family: 'osullivan'},

                        {name: 'Giancarlo Brancati', family: 'giancarlo'},
                        {name: 'Erin Brancati', family: 'giancarlo'},

                        {name: 'Harry Coster', family: 'coster'},
                        {name: 'Melinda Coster', family: 'coster'},

                        {name: 'Janine Wittal', family: 'wittal'},

                        {name: 'Lynell Anderson', family: 'anderson'},
                        {name: 'Rod Anderson', family: 'anderson'},

                        {name: 'Matt Anderson', family: 'cowdy'},
                        {name: 'Dan Seeton', family: 'cowdy'},

                        {name: 'Melanie Anderson', family: 'manderson'},
                        {name: 'Taylor Mappins', family:'manderson'},

                        {name: 'Ryan Wong', family: 'rwong'},

                        {name: 'Mark Newman', family: 'mnew'},
                        {name: 'Lolly Newman', family: 'mnew'},
                        {name: 'Jasmine Newman', family: 'mnew'},

                        {name: 'Kayla Burley', family: 'kayla'},

                        {name: 'Lindsey Luckey', family: 'luckey'},
                        {name: 'Chris Amond', family: 'luckey'},

                        {name: 'Alexis Eapen', family: 'eapen'},
                        {name:'Tyler Stevenson', family: 'eapen'},

                        {name: "Leah Knowlan", family: 'leah'},

                        {name: 'Matthew McCarthy', family: 'mccarthy'},
                        {name: 'Isha McCarthy', family: 'mccarthy'},

                        {name: 'Melissa Cook', family: 'cook'},
                        {name: 'Tyee Cook', family: 'cook'},

                        {name: 'Tony Coelho', family: 'coelho'},
                        {name: 'Cindy Coelho', family: 'coelho'},
                        {name: 'Trevor Coelho', family: 'coelho'},

                        {name: 'Taylor Barnard', family: 'tay'},

                        {name: 'Zahoor Samji', family: 'zahoor'},
                        {name: 'Taslim Samji', family: 'zahoor'}

                    ],

                }
            }
        }
    }]);