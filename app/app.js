'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'myApp.startsWith',
    'myApp.modal',
  'myApp.rsvp',
  'myApp.view2',
  'myApp.version'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/rsvp'});
}]);
