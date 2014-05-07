//
// Delete a document from the database.
//

module.exports = function () {

    var mongo = require("mongodb");

    return {

    	route: ':id',

    	handler: function (req, res, params, done) {

            var criteria = {
                _id: new mongo.BSONPure.ObjectID(req.params.id)
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
};