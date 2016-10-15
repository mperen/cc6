require('../services/departamentoService');
require('../services/usuarioService');

(function(){

    angular.module('app')
        .controller('RegistroController', registroFunction);

    function registroFunction(GetDepartamentosService, RegistroUsuarioService){
        this.newUser = {};
        this.newUser.dip = 1;
        this.departments = [];

        this.day = [];
        this.month = [];
        this.year = [];
        for(var i = 1; i<=31; i++){
            this.day.push(i);
            if(i<=12) this.month.push(i);
        }

        var y = new Date().getFullYear();
        for(var j = 1950; j<=y; j++) this.year.push(j);


        GetDepartamentosService
            .then((result)=>{
                this.departments = result.data.departamentos;
            }, (err)=>{
                console.log("ERROR");
            });
        
        this.registroUsuario = function(){
            console.log('USUARIO', this.newUser);
            this.newUser.fechaNacimiento = this.date.day+'-'+this.date.month+'-'+this.date.year;
            RegistroUsuarioService.registro(this.newUser)
                .then((result)=>{
                    console.log('REGISTRADO', result.data)
                }, (err)=>{
                    console.log('ERROR');
                });
        }
        

        
    }

})();