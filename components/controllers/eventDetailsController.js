require('../services/eventosServices');

(function(){

    angular.module('app')
        .controller('eventDetailsController', mevFunc);

   function mevFunc(getAllEvents,$scope, $stateParams){

        this.myEvents = [];

        $scope.idEvent = $stateParams.idEvent;

        var params = {idEvent:  $scope.idEvent}

        getSingleEvent.singleEvent(params)
            .then((result)=> {
                this.myEvents = result.data.eventos;
                console.log('RESULTMY', result);
            }, err => console.log(err));
    }    

})();