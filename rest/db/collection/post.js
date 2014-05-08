//
// Insert a document into the database.
//

module.exports = {

	handler: function (req, res, params, done) {

        params.logger.info("Inserting document: ");
        params.logger.info(req.body);

        params.collection.insert(req.body, {w: 1}, function (err, docs) {
            if (err) {
                throw err;
            }

            params.logger.info("Inserting document with id: " + docs[0]._id);

            var location = '/'+ req.params.db +'/'+ req.params.collection + '/'+ docs[0]._id.toHexString();
            res.header('Location', location);
            res.json(docs[0], 201);
            done();
        });
	},
};