var angular = require('angular');
var angularRoute = require('angular-route');

(function(){

angular.module('app', ['ngRoute']);

})();

require('./routes/angular-routes');

require('./controllers/testController');

require('./controllers/eventosMesController');

require('./directives/eventDirective');

require('./controllers/eventController');