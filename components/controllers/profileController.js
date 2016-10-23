require('../services/perfilService');
(function(){

    angular.module('dash')
        .controller('ProfileController', profileFunc);
    
    function profileFunc(GetUserService){
        this.name= 'meee';

        GetUserService.get({userId: '24', tipo: 'Empresa'})
            .then((result)=> {
                console.log('RESULT', result.data)
            }, (err)=>console.log('ERR', err));
    }

})();