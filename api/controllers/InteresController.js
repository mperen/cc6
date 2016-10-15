/**
 * InteresController
 *
 * @description :: Server-side logic for managing Interes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear: function(req, res){
        var interes = req.param('interes');

        var queryI = 'INSERT INTO Interes(descripcion) VALUES("'+ interes +'")';

        Interes.query(queryI, function(err, result){
            if(err) res.negotiate(err);
            res.json({msg: 'Interes agregado'});
        });
    },

    todos: function(req, res){
        var queryS = 'SELECT * FROM Interes';

        Interes.query(queryS, function(err, result){
            if(err) res.negotiate;
            res.json(result);
        });
    }
};

