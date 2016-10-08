var angular = require('angular');
var angularRoute = require('angular-route');
var materialize = require('materialize-css');

(function(){

angular.module('app', ['ngRoute']);

})();

require('./routes/angular-routes');

require('./controllers/testController');