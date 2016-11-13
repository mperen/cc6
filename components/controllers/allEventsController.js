require('../services/eventosServices');

(function(){

    angular.module('app')
        .controller('allEventsController', mevFunc);

   function mevFunc(getAllEvents){

        this.myEvents = [];

        getAllEvents.allEvents()
            .then((result)=> {
                this.myEvents = result.data.eventos;
                console.log('RESULTMY', result);
            }, err => console.log(err));
    } 

    



})();