var url = require("../constants/urls");

(function(){


    angular.module('app')
        .factory('getMonthlyEvents', getMonthlyEvents)
        .factory('getAllEvents', getAllEvents)
        .factory('getSingleEvent', getSingleEvent)
        .factory('getSuscribedAttendants',getEventAttendees)
        .factory('getDonaciones',getDonaciones)
        .factory('deleteParticipant',deleteParticipant)
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
        return singleEvent;
    }

    function getAllEvents($http){
        var allEvents = {};

        allEvents.allEvents = function(){
            return $http.post('/evento/getAllEvents');
        }

        return allEvents;

    }

    function getEventAttendees($http){
        var attendees = {};
        
        attendees.attendees = function(params){
            return $http.post('/evento/getSuscribedAttendants', params)
        }
        return attendees;
    }
    
    function getDonaciones($http){
        var obj = {};
        obj.getDonacion = function(pos,params){
            return $http.post(url.donationUrl[pos]+'/Donacion/getAllDonacionesEvento',param);
        }
        return obj;
    }
    
    function deleteParticipant($http){
        var obj = {}
        obj.deleteParticipant = function(params){
            return $http.post('/evento/deleteParticipant',params)
        }
        return obj;
    }
    

})();