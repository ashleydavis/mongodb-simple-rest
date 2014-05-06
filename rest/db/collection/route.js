
module.exports = {

	route: ':collection',

	openRoute: function (req, res, params, done) {

		console.log('Opening collection ' + req.params.collection);

		params.db.collection(req.params.collection, function (err, collection) {
			if (err) {
				throw err;
			}

			params.collection = collection;
			done(params);
		});

	},

};