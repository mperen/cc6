require('../services/departamentoService');
require('../services/usuarioService');
require('../services/interesService');

(function(){

    angular.module('app')
        .controller('RegistroEmpresaController', registroEmpresa);

    function registroEmpresa(GetDepartamentosService, GetInteresService, RegistroEmpresaService, $location){
        this.newUser = {};
        this.departments = [];
        this.intereses = [];
        this.newUser.dip = {};
        this.newUser.interes = {};
        this.error = false;


        GetDepartamentosService
            .then((result)=>{
                this.departments = result.data.departamentos;
                this.newUser.dip = this.departments[0];
            }, (err)=>{
                console.log('ERROR', err);
            });

        GetInteresService.
            then((result)=>{
                this.intereses = result.data;
                this.newUser.interes = this.intereses[0];
            }, (err)=> {
                console.log('ERROR', err);
            });

        this.registroEmpresa = function(){
            this.newUser.dip = this.newUser.dip.dip;
            this.newUser.interes = this.newUser.interes.iid;
            RegistroEmpresaService.registro(this.newUser)
                .then((result)=>{
                    if(result.data.error == 0) $location.path('/login');
                    else this.error = true;
                }, (err)=>console.log('ERROR', err));
            
        }
    }

})();