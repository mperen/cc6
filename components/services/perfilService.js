(function(){

    angular.module('dash')
        .factory('GetUserService', getUser)
        .factory('UpdateUserService', updateFunc);

    function getUser($http){
        var getUser = {};
        getUser.get = function(userInfo) {
            return $http.post('/usuario/obtener', userInfo);
        }
        return getUser;
    }

    function updateFunc($http){
        var updateObj = {};
        updateObj.update = function(user){
            return $http.post('/usuario/actualizar', user);
        }
        return updateObj;
    }

})();