/**
 * EventoController
 *
 * @description :: Server-side logic for managing eventoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http=require('http');
var querystring=require('querystring');

module.exports = {

    createEvent: function (req, res) {
        var nombre = req.param('nombre');
        var fecha = req.param('fecha');
        var descripcion = req.param('descripcion');
        var uid = req.param('uid');
        var lugar = req.param('lugar');

        var query = 'insert into evento(nombreEvento, fechaEvento, descripcionEvento, lugar, activo, uid) '
            + ' values("' + nombre + '", "' + fecha + '", "' + descripcion + '", "' + lugar + '", 1,'+ uid +')';

       /*INICIO*/
        var data = querystring.stringify(req.allParams());
        var options = {
            //host de mi compañero replica
             host: sails.config.url.REPLICATION,
            //nombre del controler createEvent
            path:'/evento/createEvent',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        var reqN = http.request(options, function(resp) {
            resp.setEncoding('utf8');
            resp.on('data', function (chunk) {
                console.log("body: " + chunk);
            });
        });

        reqN.write(data);
        reqN.end();
        /*FINAL*/

        var select = ' select * from evento where nombreEvento = "' + nombre + '"';

        console.log('PARAMETROS', nombre, fecha, descripcion, uid, lugar);
        console.log('CONSULTA', query);

        Evento.query(query, function (err, result) {
            if (err) res.negotiate(err);

            console.log('RESULT', result);
            res.json({ msg: 'Insertado con exito', eventos: result });

        });
 
        // res.json({msg: 'HOla'});
    },

    //este metodo es para cuando alguien quiere consultar todos los eventos activos
    getAllEvents: function (req, res) {

        var query = 'SELECT idEvento, nombreEvento, fechaEvento, descripcionEvento, uid, lugar FROM evento WHERE activo = 1';

        Evento.query(query, function (err, result) {

            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'Consulta de eventos exitosa', eventos: result });

        });

    },

    //este metodo es para que un usuario organizador de eventos mire los eventos que ha creado
    getMyCreatedEvents: function (req, res) {

        var uid = req.param("uid");

        var query = 'SELECT idEvento, nombreEvento, fechaEvento, descripcionEvento, uid, lugar FROM evento WHERE uid =' + uid;

        Evento.query(query, function (err, result) {

            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'Consulta de eventos exitosa', eventos: result });

        });

    },

    //este metodo es para obtener todos los eventos a los que el usuario esta inscrito (y que esta activo)
    getMyUpcomingEvents: function(req, res){

        var uid = req.param("uid");

        var query = 'SELECT a.idEvento, a.nombreEvento, a.fechaEvento, a.descripcionEvento, a.uid, a.lugar ' + 
        'FROM evento a ' + 
        'JOIN asistencia b ON (a.idEvento = b.idEvento) ' + 
        'WHERE b.idUsuario = ' + uid + ' AND a.activo = 1';

        Evento.query(query, function (err, result) {

            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'Consulta de eventos inscritos exitosa', eventos: result });

        });


    },

    getMyPastEvents: function(req, res){

        var uid = req.param("uid");
 
        var query = 'SELECT e.idEvento, e.nombreEvento, e.fechaEvento, e.descripcionEvento, e.uid, e.lugar' + 
        'FROM eventos e' + 
        'JOIN asistencia a ON (e.idEvento = a.idEvento)' + 
        'WHERE a.idUsuario = ' + uid + 'AND e.activo = 0';

        Evento.query(query, function (err, result) {

            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'Consulta de eventos expirados exitosa', eventos: result });

        });

    },

    //obtiene una lista de personas inscritas al evento sin importar si su asistencia fue confirmada
    getSuscribedAttendants: function(req, res){

        console.log('PARAMS', req.allParams());
        var idEvent = req.param("idEvento");

        var query = 'select usuario, correo, uid from Usuario JOIN asistencia ON uid=idUsuario where idEvento=' + idEvent;
        console.log('QUERY', query);
    
            Evento.query(query, function (err, result) {

            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'Consulta de personas inscritas exitosa', eventos: result });

        });



    },

    //este metodo obtiene una lista de las personas que asistieron  y llegaron al evento.
    getConfirmedAttendants: function(req, res){

        var idEvent = req.param("idEvent");

        var query = 'SELECT u.Usuario ' + 
        'FROM Usuario u' +
        'JOIN Asistencia a ON (u.uid = a.idUsuario )' +
        'WHERE a.idEvent = ' + idEvent + 'AND a.asistencia = 1';
    
            Evento.query(query, function (err, result) {

            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'Consulta de personas inscritas y confirmadas exitosa', eventos: result });

        });

    },

    //metodo para inscribirse a un evento
    signUpToEvent: function(req, res){

        var uid = req.param("uid");
        var idEvento = req.param("idEvento");

        var query = 'INSERT INTO asistencia(idEvento, idUsuario) VALUES(' + idEvento + ',' + uid + ')';

        Evento.query(query, function (err, result) {

            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'Inscripcion a evento exitosa', eventos: result });

        });

    },

    searchEvent: function (req, res) {

        var nombreEvento = req.param("nombreEvento");

        var query = 'SELECT idEvento, nombreEvento, fechaEvento, descripcionEvento, uid, lugar FROM evento WHERE nombreEvento LIKE \'%' + nombreEvento + '%\'';

        Evento.query(query, function (err, result) {

            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'Busqueda de evento exitosa', eventos: result });

        });

    },

    getMonthlyEvents: function (req, res) {

        var month = req.param("month");
        var year = req.param("year");

        var query = 'SELECT idEvento, nombreEvento, fechaEvento, descripcionEvento, uid, lugar FROM evento WHERE YEAR(fechaEvento) = ' + year + ' AND MONTH(fechaEvento) = ' + month;

        Evento.query(query, function (err, result) {


            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'Eventos del mes consultados exitosamente', eventos: result });

        });



    },

    getSingleEvent: function (req, res) {

        var idEvent = req.param("idEvent");

        var query = 'SELECT idEvento, nombreEvento, fechaEvento, descripcionEvento, uid, lugar FROM evento WHERE idEvento = ' + idEvent;

        Evento.query(query, function (err, result) {


            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'Detalles de evento consultados exitosamente', eventos: result });

        });

    }
    
    ,
    
    deleteParticipant : function(req,res){
        var idEvent = req.param("idEvent");
        var idParticipant = req.param("idUsuario");
        var query =  'delete from asistencia where idUsuario='+idParticipant+' and idEvento='+idEvent;
        Evento.query(query, function (err, result) {
            if (err) res.negotiate(err);
            console.log('RESULT', result);
            res.json({ msg: 'participante eliminado exitosamente', eventos: result });

        });
    }



};
