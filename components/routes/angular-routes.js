(function () {
    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "../views/main.html"
                })
                .when("/eventosMes", {
                    templateUrl: "../views/dashboard/eventosDelMes.html",
                    controller: 'eventosMesController',
                    controllerAs: 'eventosMesCtrl'
                })
                .when("/allEvents", {
                    templateUrl: "../views/dashboard/allEvents.html",
                    controller: 'allEventsController',
                    controllerAs: 'allEventsCtrl'
                }
                )
                .when("/eventAdmin", {
                    templateUrl: "../views/admin.html"
                })

                .when("/eventDetails/:idEvent?",{
                    templateUrl: "../views/dashboard/eventDetailResult.html",
                    controller: 'eventDetailsController',
                    controllerAs: 'eventDetailsCtrl'
                })
                .when("/attendeesEvent/:idEvent?", {
                    templateUrl: "../views/dashboard/attendeesEvent.html",
                    controller: 'attendeesController',
                    controllerAs: 'attendeesCtrl'
                })
                .when("/eventDonations/:idEvent?", {
                    templateUrl: "../views/dashboard/eventDonations.html",
                    controller: 'eventDonationsController',
                    controllerAs: 'donationsCtrl'
                })

        })
})();