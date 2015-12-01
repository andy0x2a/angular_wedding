
angular.module('myApp.modal', [])
    .directive('modalDialog', function() {
    return {
        restrict: 'E',
        scope: {
            show: '=',
            onSubmitFunction:'=onSubmitFunction'
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function() {
                scope.show = false;
            };

      scope.doSubmit = function() {
            console.log('here');
            if (typeof(scope.onSubmitFunction) !=="undefined") {
            scope.onSubmitFunction();    
            }
            
        }
        },
        templateUrl: 'rsvp/modalDialog.html'// See below
    };
});
