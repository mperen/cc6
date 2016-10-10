(function(){
    angular.module('app')
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl : "../views/main.html"
                })
                .when("/registro", {
                    templateUrl : "../views/user/add_user.html",
                    controller: 'RegistroController',
                    controllerAs: 'registroCtrl'
                })
                .when("/dashboard", {
                    templateUrl: "../views/dashboard/dashboard.html",
                    controller: 'DashboardController',
                    controllerAs: 'dashCtrl'
                })
        })
})();