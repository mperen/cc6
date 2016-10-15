var angular = require('angular');
var angularRoute = require('angular-route');
// var angularAnimate = require('angular-animate');

(function(){
angular.module('app', ['ngRoute', require('angular-animate')]);

})();

require('./routes/angular-routes');

require('./controllers/registroController');
require('./controllers/dashboardController');
require('./controllers/loginController');
require('./controllers/registroEmpresaController');