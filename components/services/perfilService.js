(function(){

    angular.module('dash')
        .factory('GetUserService', getUser);

    function getUser($http){
        var getUser = {};
        getUser.get = function(userInfo) {
            return $http.post('/usuario/obtener', userInfo);
        }
        return getUser;
    }

})();