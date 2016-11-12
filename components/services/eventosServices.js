(function(){


    angular.module('app')
        .factory('getMonthlyEvents', getMonthlyEvents);

    function getMonthlyEvents($http) {
        var monthlyEvents = {};
        
        monthlyEvents.monthlyEvents = function(params){
            return $http.post('/evento/getMonthlyEvents', params);
        }
        return monthlyEvents;
    }

})();