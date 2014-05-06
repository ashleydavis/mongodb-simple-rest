//
// Insert a document into the database.
//

module.exports = {

	handler: function (req, res, params, done) {

        params.collection.insert(req.body, function (err, docs) {
            if (err) {
                throw err;
            }

            var location = '/'+ req.params.db +'/'+ req.params.collection + '/'+ docs[0]._id.toHexString();
            res.header('Location', location);
            res.json(docs[0], 201);
            done();
        });
	},
};