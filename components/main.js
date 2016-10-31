var angular = require('angular');
var angularRoute = require('angular-route');
// var angularAnimate = require('angular-animate');

require('./global.js');

(function(){
angular.module('app', ['ngRoute', require('angular-animate'), 'global']);

})();

require('./dash.js');
require('./routes/angular-routes');
require('./routes/angular-dash-routes');

require('./controllers/registroController');
require('./controllers/loginController');
require('./controllers/registroEmpresaController');
require('./controllers/registroOrganizacionController');