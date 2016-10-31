(function(){
angular.module('dash', ['ngRoute', require('angular-animate'), 'global']);

})();

require('./controllers/dashboardController');
require('./controllers/profileController');