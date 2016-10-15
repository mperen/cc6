require('../services/departamentoService');
require('../services/usuarioService');

(function(){

    angular.module('app')
        .controller('RegistroController', registroFunction);

    function registroFunction(GetDepartamentosService, RegistroUsuarioService, $location){
        this.newUser = {};
        this.departments = [];
        this.newUser.dip = {};
        this.error = false;

        this.day = [];
        this.month = [];
        this.year = [];
        for(var i = 1; i<=31; i++){
            this.day.push(i);
            if(i<=12) this.month.push(i);
        }

        var y = new Date().getFullYear();
        for(var j = 1950; j<=y; j++) this.year.push(j);

        this.date={};
        this.date.day = this.day[0];
        this.date.month = this.month[0];
        this.date.year = this.year[0];


        GetDepartamentosService
            .then((result)=>{
                this.departments = result.data.departamentos;
                this.newUser.dip = this.departments[0];
            }, (err)=>{
                console.log("ERROR");
            });
        
        this.registroUsuario = function(){
            this.newUser.dip = this.newUser.dip.dip;
            this.newUser.fechaNacimiento = this.date.day+'-'+this.date.month+'-'+this.date.year;
            console.log('USUARIO', this.newUser);
            RegistroUsuarioService.registro(this.newUser)
                .then((result)=>{
                    console.log('REGISTRADO', result.data)
                    if(result.data.error == 0) $location.path('/login');
                    else this.error = true;
                }, (err)=>{
                    console.log('ERROR');
                });
        }

    }

})();