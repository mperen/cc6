/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    registro : function(req, res){
        var usuario = req.param('usuario');
        var correo = req.param('correo');
        var password = req.param('password');
        var direccion = req.param('direccion');
        var dip = req.param('dip');
        // var nombre = req.param('nombre');
        // var sexo = req.param('sexo');
        // var fechaNacimiento = req.param('fechaNacimiento');

        var queryI = 'INSERT INTO Usuario(usuario, correo, password, direccion, dip) '
        + 'VALUES("'+ usuario +'", "'+ correo +'", "'+ password +'", "'+ direccion +'", '+dip+')';

        console.log('REGISTRO', queryI);

        Usuario.query(queryI, function(err, result){
            if(err) res.negotiate(err);

            // var usuarioId = result.insertId;
            // var queryIP = 'INSERT INTO Persona(pid, nombre, sexo, fechaNacimiento) '
            // + 'VALUES ("'+ usuarioId +'", "'+ nombre +'", "'+ sexo +'", STR_TO_DATE("'+ fechaNacimiento +'", "%d-%m-%Y"))';

            // Persona.query(queryIP, function(err, result){
            //     if(err) res.negotiate(err);
                res.json({msg: 'Usuario registrado con exito'});
            // });
        });
    }

};

