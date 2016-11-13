(function(){


    angular.module('app')
        .factory('getMonthlyEvents', getMonthlyEvents)
        .factory('getAllEvents', getAllEvents)
        .factory('getSingleEvent', getSingleEvent)
        ;
//el punto y coma hasta el final del ultimo factory
    function getMonthlyEvents($http) {
        var monthlyEvents = {};
        
        monthlyEvents.monthlyEvents = function(params){
            return $http.post('/evento/getMonthlyEvents', params);
        }
        return monthlyEvents;
    }

    function getSingleEvent($http) {
        var singleEvent = {};

        singleEvent.singleEvent = function (params) {
            return $http.post('/evento/getSingleEvent', params);
        }
        return getSingleEvent;
    }

    function getAllEvents($http){
        var allEvents = {};

        allEvents.allEvents = function(){
            return $http.post('/evento/getAllEvents');
        }

        return allEvents;

    }



})();