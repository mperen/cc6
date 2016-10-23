(function(){

    angular.module('dash')
        .controller('ProfileControllers', profileFunc);
    
    function profileFunc(){
        this.name= 'meee';
    }

})();