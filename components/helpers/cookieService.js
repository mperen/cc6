(function(){

    angular.module('dash')
        .factory('CookieService', cookieFunc);

    function cookieFunc(){
        var cookieFunc = {};
        
        cookieFunc.transform = function(cookieString){
            var userInfo = cookieString;
            var infoSplit = _.split(userInfo, ';');
            var cookieObj = {};
            for(var i = 0; i < infoSplit.length; i++) { 
                var array = _.split(infoSplit[i], '=');
                var trimArray = _.map(array, _.trim);
                cookieObj[trimArray[0]] = trimArray[1];
            }
            return cookieObj;
        }


        return cookieFunc;
    }

})();