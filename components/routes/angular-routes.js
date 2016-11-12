(function(){
    angular.module('app')
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl : "../views/main.html"
                })
                .when("/eventosMes", {
                    templateUrl : "../views/dashboard/eventosDelMes.html",
                    controller: 'eventosMesController',
                    controllerAs: 'eventosMesCtrl'
                })
        })
})();