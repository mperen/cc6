(function(){


    angular.module('app')
        .factory('ApiCallService', apiCallFunc);
    
        function apiCallFunc(){
        var apiObj = {};


        apiObj.callApi = function(apiCalls){


            var serverCallBacks = apiCalls[0].then(res=> res)
                                    .catch(err=>apiCalls[1])
                                    .catch(err=>({err: true})); 


            return Promise.resolve(serverCallBacks);


        }


        return apiObj;
    }



})();


