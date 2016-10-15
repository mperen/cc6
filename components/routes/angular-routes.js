(function(){
    angular.module('app')
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl : "../views/main.html"
                })
                .when("/tipo-registro", {
                    templateUrl: "../views/user/select_registro.html"
                })
                .when("/registro", {
                    templateUrl : "../views/user/add_user.html",
                    controller: 'RegistroController',
                    controllerAs: 'registroCtrl'
                })
                .when("/login", {
                    templateUrl: "../views/user/login.html",
                    controller: 'LoginController',
                    controllerAs: 'loginCtrl'
                })
                .when("/dashboard", {
                    templateUrl: "../views/dashboard/dashboard.html",
                    controller: 'DashboardController',
                    controllerAs: 'dashCtrl'
                })
        })
})();