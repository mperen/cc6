require('../services/departamentoService');
require('../services/usuarioService');

(function(){

    angular.module('app')
        .controller('RegistroController', registroFunction);

    function registroFunction(GetDepartamentosService, RegistroUsuarioService){
        this.newUser = {};
        this.newUser.dip = 1;
        this.departments = [];

        GetDepartamentosService
            .then((result)=>{
                this.departments = result.data.departamentos;
            }, (err)=>{
                console.log("ERROR");
            });
        
        this.registroUsuario = function(){
            console.log('USUARIO', this.newUser);
            RegistroUsuarioService.registro(this.newUser)
                .then((result)=>{
                    console.log('REGISTRADO', result.data)
                }, (err)=>{
                    console.log('ERROR');
                });
        }
        

        
    }

})();