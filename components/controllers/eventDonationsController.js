require('../services/eventosServices');
//añadir call services
require('../services/apiCallService');

(function(){

angular.module('app')
      .controller('eventDonationsController', mevFunc);
//se tiene que agregar el apicallservice
  function mevFunc($scope,getDonaciones, ApiCallService, $location){
        console.log(typeof getSingleEvent)
        this.myEvents = [];

       
        var path = $location.path();
         console.log('ID', path);
        
       
        var idEvent = parseInt(path.substring(path.length-1,path.length));
        console.log("idevent", idEvent);
       var params = {evento:idEvent}
       console.log("params ",params);
       
       //var params = {idEvent:  $routeParams.idEvent,idEvento:3}
       //var params = {evento:3};
       
      var getDonation = [];
       getDonation.push(getDonaciones.getDonacion(0,params));
       getDonation.push(getDonaciones.getDonacion(1,params));
       
       var donacionPromise = ApiCallService.callApi(getDonation);
           var self = this;
           donacionPromise.then((result) => {
               $scope.$apply(function () {
                   if(!result.err){
                      
                       self.myEvents = result.data; 
                        console.log('RESULT myevents', result);
                   }else{
                       console.log('RESULT', result);
                   }
                   
               })
           }).catch(err => console.log(err));
           

       /* getSingleEvent.singleEvent(params)
            .then((result)=> {
                this.myEvents = result.data.eventos;
                console.log('RESULTMY', result);
            }, err => console.log(err));*/
    }    

})();