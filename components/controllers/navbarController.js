// mis eventos
// Usuario: muestra los eventos en los que participo
// Organizacion: muestra los eventos que cree
// Empresa: muestra los eventos en los que dono

(function(){

    angular.module('dash')
        .controller('NavbarController', navFunc);

    function navFunc(CookieService){
        var objCookie = CookieService.transform(document.cookie);
        this.selectedTab = 1;
        
        this.isUser = (objCookie.tipo === 'Persona');
        this.isEmp = (objCookie.tipo === 'Empresa');
        this.isOrg = (objCookie.tipo === 'Organizacion');

        this.dropOptions = [];

        this.changeTab= function(tab){
            this.selectedTab = tab;
        }

    }

})();