(function(){
    angular.module('app')
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl : "../views/main.html"
                })
                .when("/test", {
                    templateUrl : "../views/user/add_user.html",
                    controller: 'TestController',
                    controllerAs: 'testCtrl'
                })
        })
})();