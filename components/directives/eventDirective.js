(function(){

    angular.module('app')
        .directive('eventDirective', eventFunc);

    function eventFunc(){
        return {
            restrict: 'E',
            templateUrl: '../views/directives/event.html',
            controller: "EventController",
            controllerAs: "eventCtrl",
            scope: {
                titulo: '@',
                fecha: '@',
                descripcion: '@',
                direccion: '@',
                idEvent: '@',
                asistiendo: '=',
                donacion: '=',
                donationFn: '&',
                assistEvent: '&'
            }
        }
    }

})();