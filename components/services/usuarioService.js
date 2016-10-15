(function(){

    angular.module('app')
        .factory('RegistroUsuarioService', registerUser)
        .factory('LoginService', loginUser);

    function registerUser($http) {
        var registro = {};
        registro.registro = function(usuario){
            return $http.post('/usuario/registro', usuario);
        }
        return registro;
    }

    function loginUser($http){
        var login = {};
        login.login = function(credentials) {
            return $http.post('/usuario/login', credentials);
        }
        return login
    }



})();