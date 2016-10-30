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
        
        this.isUser = (objCookie.tipo === 'Persona');

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


        console.log('cookieObj', document.cookie, objCookie);

        GetUserService.get({userId: objCookie.id, tipo: objCookie.tipo})
            .then((result)=> {
                this.user = result.data;
                var dateDay = _.indexOf(this.day, new Date(this.user.fechaNacimiento).getDate());
                var dateMonth = _.indexOf(this.month, new Date(this.user.fechaNacimiento).getMonth()+1);
                var dateYear = _.indexOf(this.year, new Date(this.user.fechaNacimiento).getFullYear());
                this.date.day = this.day[dateDay];
                this.date.month = this.month[dateMonth];
                this.date.year = this.year[dateYear];
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