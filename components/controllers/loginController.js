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
                    else $window.location.href = '/nav';
                    // $location.path('/nav/#/dashboard');
                }, (err)=>{
                    console.log('ERROR', err);
                })
        }
    }

})();