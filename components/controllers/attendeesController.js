require('../services/eventosServices');

(function(){

angular.module('app')
      .controller('attendeesController',  mevFunc);

  function mevFunc(getSuscribedAttendants,$routeParams){
        console.log(typeof getSuscribedAttendants)
        this.myEvents = [];

        var params = {idEvento:  $routeParams.idEvent}

        console.log('PARAMS', params);


        getSuscribedAttendants.attendees(params)
            .then((result)=> {
                this.myEvents = result.data.eventos;
                console.log('RESULTMY', result);
            }, err => console.log(err));
    }    

})();