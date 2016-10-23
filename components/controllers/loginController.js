(function(){

    angular.module('app')
        .controller('LoginController', login);

    function login(LoginService, $location, $window){
        this.credentials = {};
        this.loginE = false;
        
        this.login = function(){
            LoginService.login(this.credentials)
                .then((result)=>{
                    console.log('CLICK', result.data);
                    if(result.data.error == 1) this.loginE = true;
                    else{
                        var usuario = result.data.user.usuario;
                        var correo = result.data.user.correo;
                        var tipo = result.data.user.tipo;
                        document.cookie = 'session=;';
                        document.cookie = 'username=;';
                        document.cookie = 'usuario='+ usuario +';';
                        document.cookie = 'correo='+ correo +';';
                        document.cookie = 'tipo='+ tipo +';';
                        $window.location.href = '/nav';
                    } 
                }, (err)=>{
                    console.log('ERROR', err);
                })
        }
    }

})();