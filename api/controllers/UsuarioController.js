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

        var queryI = 'INSERT INTO Usuario(usuario, correo, password, direccion, dip) '
        + 'VALUES("'+ usuario +'", "'+ correo +'", "'+ password +'", "'+ direccion +'", '+dip+')';

        Usuario.query(queryI, function(err, result){
            if(err) res.negotiate(err);
            res.json({msg: 'Usuario registrado con exito'});
        });
    }

};

