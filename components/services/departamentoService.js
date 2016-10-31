(function(){

    angular.module('global')
        .factory('GetDepartamentosService', getDepartamento);

    function getDepartamento($http) {
        return $http.get('/departamento/todos');
    }

})();