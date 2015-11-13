'use strict';

angular.module('myApp.service', ['$http'])

.service('apiServices', [function() {


        return {

            postGuest: function() {
            console.log('posting guest');

            },

            putGuest: function() {
                console.log('put guest');
            }

        }
}]);