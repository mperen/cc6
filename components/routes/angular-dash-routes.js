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
        })
})();