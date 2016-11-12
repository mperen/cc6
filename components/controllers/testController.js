(function(){

    angular.module('app')
        .controller('TestController', testFunction);

    function testFunction(){
        this.name = 'Pedro';
    }

})();