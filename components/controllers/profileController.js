require('../services/perfilService');
require('../helpers/cookieService');


var _ = require('lodash');
(function(){

    angular.module('dash')
        .controller('ProfileController', profileFunc);
    
    function profileFunc(GetUserService, CookieService){
        this.user= {};
        this.userBk = {};
        this.editUser = false;

        var objCookie = CookieService.transform(document.cookie);

        console.log('cookieObj', document.cookie, objCookie);

        GetUserService.get({userId: objCookie.id, tipo: objCookie.tipo})
            .then((result)=> {
                this.user = result.data;
                this.userBk = Object.assign({}, this.user);
            }, (err)=>console.log('ERR', err));

        this.enableEdit = function () {
            if(this.editUser) this.user = Object.assign({}, this.userBk);
            this.editUser = !this.editUser;
            console.log('EDITING', this.editUser);
        }

        this.disableEdit = function () {
            this.editUser = false;
            this.user = Object.assign({}, this.userBk);
        }

        this.updateUser = function(){
            console.log('UPDATING', this.user, this.userBk);
        }
    }

})();