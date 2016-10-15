(function(){

    angular.module('app')
        .factory('RegistroUsuarioService', registerUser)
        .factory('RegistroEmpresaService', registerEmpUser)
        .factory('RegistroOrgaService', registerOrgUser)
        .factory('LoginService', loginUser);

    function registerUser($http) {
        var registro = {};
        registro.registro = function(usuario){
            return $http.post('/usuario/registro', usuario);
        }
        return registro;
    }

    function registerEmpUser($http){
        var registro = {};
        registro.registro = function(empresa){
            return $http.post('/usuario/registroEmpresa', empresa);
        }
        return registro;
    }

    function registerOrgUser ($http){
        var registro = {};
        registro.registro = function(orga){
            return $http.post('/usuario/registroOrganizacion', orga);
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