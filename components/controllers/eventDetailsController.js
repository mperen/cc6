require('../services/eventosServices');

(function(){

angular.module('app')
      .controller('eventDetailsController', ['getSingleEvent', '$routeParams', mevFunc]);

  function mevFunc(getSingleEvent,$routeParams){
        console.log(typeof getSingleEvent)
        this.myEvents = [];

        var params = {idEvent:  $routeParams.idEvent}

        getSingleEvent.singleEvent(params)
            .then((result)=> {
                this.myEvents = result.data.eventos;
                console.log('RESULTMY', result);
            }, err => console.log(err));
    }    

})();