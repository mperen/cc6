/**
 * DepartamentoController
 *
 * @description :: Server-side logic for managing Departamentoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    crear: function(req, res){
        var name = req.param('nombre');
        var queryI = 'INSERT INTO Departamento(nombre) VALUES ("'+ name +'")';
        Departamento.query(queryI, function(err, result){
                if(err) res.negotiate(err);

                res.json({msg: 'Departamento registrado con exito'});
            }
        )
    },
    todos: function(req, res){
        var queryS = 'SELECT * FROM Departamento';
        Departamento.query(queryS, function(err, result){
            if(err) res.negotiate(err);
            res.json({departamentos: result});
        });
    }

};

