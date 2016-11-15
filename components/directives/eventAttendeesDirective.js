(function(){

    angular.module('app')
        .directive('eventAttendees', eventFunc);

    function eventFunc(){
        return {
            restrict: 'E',
            templateUrl: '../views/directives/attendee.html',
            controller: "attendeesController",
            controllerAs: "attendeesCtrl",
            scope: {
                nombre: '@',
                username: '@',
                idEvento: '@'
            }
        }
    }

})();