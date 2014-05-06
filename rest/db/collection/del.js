//
// Delete a document from the database.
//

var BSON = mongo.BSONPure;

module.exports = {

	route: ':id',

	handler: function (req, res, params, done) {

        var criteria = {
            _id: new BSON.ObjectID(req.params.id)
        };

        params.collection.remote(criteria, function (err, docs) {
            if (err) {
                throw err;
            }

            res.send(200);
            done();
        });
	},
};