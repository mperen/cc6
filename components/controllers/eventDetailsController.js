require('../services/eventosServices');
//añadir call services
//require('../services/apiCallService');

(function(){

angular.module('app')
      .controller('eventDetailsController', ['getSingleEvent', '$routeParams', mevFunc]);
//se tiene que agregar el apicallservice
  function mevFunc(getSingleEvent,$routeParams){
        console.log(typeof getSingleEvent)
        this.myEvents = [];

       var params = {idEvent:  $routeParams.idEvent}
       //var params = {idEvent:  $routeParams.idEvent,idEvento:3}
       
      /* var getDonation = [];
       getDonation.push(getDonaciones.getDonacion(0,params));
       getDonation.push(getDonaciones.getDonacion(1,params));
       
       var donacionPromise = ApiCallService.callApi(getDonation);
       donacionPromise.then(function(result){
           console.log('REsult: ',result);
       }); */

        getSingleEvent.singleEvent(params)
            .then((result)=> {
                this.myEvents = result.data.eventos;
                console.log('RESULTMY', result);
            }, err => console.log(err));
    }    

})();