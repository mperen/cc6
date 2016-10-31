(function(){
    angular.module('dash')
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "../views/dashboard/dashboard.html",
                    controller: 'DashboardController',
                    controllerAs: 'dashCtrl'
                })
                .when("/perfil", {
                    templateUrl: "../views/dashboard/profile.html",
                    controller: 'ProfileController',
                    controllerAs: 'profileCtrl'
                })
                .when("/buscador", {
                    templateUrl: "../views/dashboard/buscador.html",
                    controller: 'BuscadorController',
                    controllerAs: 'buscCtrl'
                })
                .when("/mis-eventos", {
                    templateUrl: "../views/dashboard/mis_eventos.html",
                    controller: 'MisEventosController',
                    controllerAs: 'mevCtrl'
                })
        })
})();