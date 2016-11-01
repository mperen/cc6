(function(){

    angular.module('dash')
        .directive('eventDirective', eventFunc);

    function eventFunc(){
        return {
            restrict: 'E',
            templateUrl: '../views/directives/event.html',
            scope: {
                titulo: '@',
                fecha: '@',
                descripcion: '@',
                asistiendo: '=',
                empresa: '=',
                donacion: '='
            }
        }
    }

})();