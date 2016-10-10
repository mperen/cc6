(function(){

    angular.module('app')
        .controller('RegistroController', registroFunction);

    function registroFunction(){
        this.name = 'Pedro';
        this.departments = ['Guatemala', 'El Progreso', 'Zacapa'];
    }

})();