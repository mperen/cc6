(function(){
angular.module('dash', ['ngRoute', require('angular-animate'), 'global']);

})();

require('./controllers/dashboardController');
require('./controllers/navbarController');
require('./controllers/buscadorController');
require('./controllers/misEventosController');
require('./controllers/profileController');