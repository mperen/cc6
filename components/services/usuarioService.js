(function(){

    angular.module('app')
        .factory('RegistroUsuarioService', registerUser);

    function registerUser($http) {
        var registro = {};
        registro.registro = function(usuario){
            return $http.post('/usuario/registro', usuario);
        }
        return registro;
    }

})();