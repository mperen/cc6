(function(){

    angular.module('app')
        .factory('GetDepartamentosService', getDepartamento);

    function getDepartamento($http) {
        return $http.get('/departamento/todos');
    }

})();