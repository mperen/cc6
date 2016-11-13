(function(){

    angular.module('app')
        .directive('eventDetails', eventFunc);

    function eventFunc(){
        return {
            restrict: 'E',
            templateUrl: '../views/directives/eventDetail.html',
            controller: "eventDetailsController",
            controllerAs: "eventDetailsCtrl",
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