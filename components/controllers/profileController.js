var _ = require('lodash');
require('../services/perfilService');
(function(){

    angular.module('dash')
        .controller('ProfileController', profileFunc);
    
    function profileFunc(GetUserService){
        this.user= {};
        this.userBk = {};
        this.editUser = false;

        var userInfo = document.cookie;
        var infoSplit = _.split(userInfo, ";"); 

        console.log('SPLITING', infoSplit);

        console.log('COOKIEaa', document.cookie);

        GetUserService.get({userId: '38', tipo: 'Persona'})
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