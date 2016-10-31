require('../services/perfilService');
require('../helpers/cookieService');


var _ = require('lodash');
(function(){

    angular.module('dash')
        .controller('ProfileController', profileFunc);
    
    function profileFunc(GetUserService, CookieService, GetInteresService, GetDepartamentosService, UpdateUserService){
        var objCookie = CookieService.transform(document.cookie);
        
        this.user= {};
        this.userBk = {};
        this.editUser = false;
        
        this.isUser = (objCookie.tipo === 'Persona');

        this.intereses = [];
        this.departamentos = [];
        this.interesDescp = {};
        this.departamentoNmb = '';

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

        GetUserService.get({userId: objCookie.id, tipo: objCookie.tipo})
            .then((result)=> {
                this.user = result.data;
                this.user.dip = this.user.dip.toString();
                if(objCookie.tipo === 'Empresa') this.user.interes = this.user.interes.toString();
                else if(objCookie.tipo === 'Organizacion') this.user.tipo = this.user.tipo.toString();
                this.userBk = Object.assign({}, this.user);
                
                GetDepartamentosService
                    .then((result)=>{
                        this.departamentos = result.data.departamentos;
                        this.departamentoNmb =  _.find(this.departamentos, (o)=> o.dip == this.user.dip).nombre;
                    }, (err)=> console.log('ERR', err));

                if(objCookie.tipo === 'Persona'){
                    var dateDay = _.indexOf(this.day, new Date(this.user.fechaNacimiento).getDate());
                    var dateMonth = _.indexOf(this.month, new Date(this.user.fechaNacimiento).getMonth()+1);
                    var dateYear = _.indexOf(this.year, new Date(this.user.fechaNacimiento).getFullYear());
                    this.date.day = this.day[dateDay];
                    this.date.month = this.month[dateMonth];
                    this.date.year = this.year[dateYear];
                } else {
                    GetInteresService.
                        then((result)=> {
                            this.intereses = result.data;
                            this.interesDescp = this.intereses[_.findIndex(this.intereses, (o)=> o.iid == (this.user.interes || this.user.tipo))].descripcion;
                        }, (err)=> console.log('ERR', err));
                }

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
            if(objCookie.tipo === 'Persona') {
                this.user.fechaNacimiento = this.date.day + "-" + this.date.month + "-" + this.date.year;
            }
            this.user.tipo = objCookie.tipo;
            this.user.id = objCookie.id;
            console.log('UPDATING', this.user, this.userBk);
            UpdateUserService.update(this.user)
                .then((result)=> {
                    console.log(result);
                }, (err)=>console.log('ERR'));
        }

    }

})();