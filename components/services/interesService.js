(function(){

    angular.module('app')
        .factory('GetInteresService', interesFunc);

    function interesFunc($http){
        return $http.get('/interes/todos');
    }

})();