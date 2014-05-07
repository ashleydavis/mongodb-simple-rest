//
// Update a document into the database.
//

var mongo = require("mongodb");
var BSON = mongo.BSONPure;

module.exports = {

	route: ':id',

	handler: function (req, res, params, done) {

        var criteria = {
            _id: new BSON.ObjectID(req.params.id)
        };

        params.collection.update(criteria, req.body, true, function (err, docs) {
            if (err) {
                throw err;
            }

            res.send(200);
            done();
        });
	},
};