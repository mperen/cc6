/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt');

module.exports = {

    registro : function(req, res){
        var usuario = req.param('usuario');
        var correo = req.param('correo');
        var password = req.param('password');
        var direccion = req.param('direccion');
        var dip = req.param('dip');
        var nombre = req.param('nombre');
        var sexo = req.param('sexo');
        var fechaNacimiento = req.param('fechaNacimiento');

        bcrypt.hash(password, 10, function(err, hash) {
            if(err) return res.json({error: '1'});
            var queryI = 'INSERT INTO Usuario(usuario, correo, password, direccion, dip) '
            + 'VALUES("'+ usuario +'", "'+ correo +'", "'+ hash +'", "'+ direccion +'", '+dip+')';
            console.log('INSERT', queryI);

            Usuario.query(queryI, function(err, result){
                if(err) res.negotiate(err);

                var usuarioId = result.insertId;
                var queryIP = 'INSERT INTO Persona(pid, nombre, sexo, fechaNacimiento) '
                + 'VALUES ("'+ usuarioId +'", "'+ nombre +'", "'+ sexo +'", STR_TO_DATE("'+ fechaNacimiento +'", "%d-%m-%Y"))';

                Persona.query(queryIP, function(err, result){
                    if(err) res.negotiate(err);
                    res.json({error: 0, msg: 'Usuario registrado con exito'});
                });
            });
   
        });

    },

    registroEmpresa: function(req, res){
        var usuario = req.param('usuario');
        var correo = req.param('correo');
        var password = req.param('password');
        var direccion = req.param('direccion');
        var dip = req.param('dip');
        
        var nombre = req.param('nombre');
        var interes = req.param('interes');

        bcrypt.hash(password, 10, function(err, hash) {
            if(err) return res.json({error: '1'});
            var queryI = 'INSERT INTO Usuario(usuario, correo, password, direccion, dip) '
            + 'VALUES("'+ usuario +'", "'+ correo +'", "'+ hash +'", "'+ direccion +'", '+dip+')';

            Usuario.query(queryI, function(err, result){
                if(err) res.negotiate(err);

                var usuarioId = result.insertId;
                var queryIP = 'INSERT INTO Empresa(eid, nombre, interes) '
                + 'VALUES ('+ usuarioId +', "'+ nombre +'", '+ interes +')';

                Empresa.query(queryIP, function(err, result){
                    if(err) res.negotiate(err);
                    res.json({error: 0, msg: 'Empresa registrada con exito'});
                });
            });
   
        });
    },

    registroOrganizacion: function(req, res){
        var usuario = req.param('usuario');
        var correo = req.param('correo');
        var password = req.param('password');
        var direccion = req.param('direccion');
        var dip = req.param('dip');
        
        var nombre = req.param('nombre');
        //TIPO es igual que INTERES
        var tipo = req.param('tipo');

        bcrypt.hash(password, 10, function(err, hash) {
            if(err) return res.json({error: '1'});
            var queryI = 'INSERT INTO Usuario(usuario, correo, password, direccion, dip) '
            + 'VALUES("'+ usuario +'", "'+ correo +'", "'+ hash +'", "'+ direccion +'", '+dip+')';

            Usuario.query(queryI, function(err, result){
                if(err) res.negotiate(err);

                var usuarioId = result.insertId;
                var queryIP = 'INSERT INTO Organizacion(orid, nombre, tipo) '
                + 'VALUES ('+ usuarioId +', "'+ nombre +'", '+ tipo +')';

                Organizacion.query(queryIP, function(err, result){
                    if(err) res.negotiate(err);
                    res.json({error: 0, msg: 'Organizacion registrada con exito'});
                });
            });
   
        });
    },

    login: function (req, res) {
        var usuario = req.param('usuario');
        var password = req.param('password');

        var queryS = 'SELECT password FROM Usuario WHERE usuario = "' + usuario + '"';

        Usuario.query(queryS, function (err, result) {
            if(err) res.negotiate(err);
            if(result[0] && result[0].password){
                bcrypt.compare(password, result[0].password, function(err, cmp) {
                    if(err) res.negotiate(err);

                    if(cmp) return res.json({error:0, msg: 'Login exitoso'});
                    else return res.json({error:1, msg: 'Usuario o contraseña incorrecta'});

                });
            } else {
                return res.json({error:1, msg: 'Usuario o contraseña incorrecta'});
            }
        })
    }

};

