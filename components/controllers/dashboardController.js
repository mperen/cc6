(function(){

    angular.module('dash')
        .controller('DashboardController', dashFunction);

    function dashFunction(){
        this.name = 'fnavarijo';
        console.log('COOKIE', document.cookie);
    }

})();