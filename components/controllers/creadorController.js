(function(){

    angular.module('dash')
        .controller('CreadorController', creadorFunc);

    function creadorFunc(){
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
    }

})();