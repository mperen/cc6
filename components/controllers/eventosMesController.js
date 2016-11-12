require('../services/eventosServices');

(function(){

    angular.module('app')
        .controller('eventosMesController', mevFunc);

   function mevFunc(getMonthlyEvents){

        this.myEventos = [];


        var params = {year: 2016, month: 10 }


        console.log(params);
        console.log('params', params);
        getMonthlyEvents.monthlyEvents(params)
            .then((result)=> {
                this.myEventos = result.data.eventos;
                console.log('RESULTMY', result);
            }, err => console.log(err));
    }

})();