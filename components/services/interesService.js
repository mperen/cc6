(function(){

    angular.module('global')
        .factory('GetInteresService', interesFunc);

    function interesFunc($http){
        return $http.get('/interes/todos');
    }

})();