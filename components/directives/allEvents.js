(function(){

    angular.module('app')
        .directive('allEvents', eventFunc);

    function eventFunc(){
        return {
            restrict: 'E',
            templateUrl: '../views/directives/eventAdmin.html',
            controller: "allEventsController",
            controllerAs: "allEventsCtrl",
            scope: {
                titulo: '@',
                fecha: '@',
                descripcion: '@',
                direccion: '@',
                idEvento: '@',
                asistiendo: '=',
                donacion: '=',
                donationFn: '&',
                assistEvent: '&'
            }
        }
    }

})();