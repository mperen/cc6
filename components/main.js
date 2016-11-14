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

require('./controllers/allEventsController');

require('./directives/allEvents');

require('./controllers/eventDetailsController');

require('./directives/eventDetailsDirective');

require('./controllers/attendeesController');

require('./directives/eventAttendeesDirective');