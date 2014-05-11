var mongo = require("mongodb");

module.exports = {

	route: ':db',

	openRoute: function (req, res, params, done) {

		params.logger.info('Opening database ' + req.params.db);

	    var db = new mongo.Db(req.params.db, params.server);
	    db.open(function(err, db) {
	    	if (err) {
	    		throw err;
	    	}

	    	params.db = db;

	    	done(params);
	    });
	},

	closeRoute: function (req, res, params, done) {

		console.log('closing db: ' + req.params.db);

		// Close the database.
		params.db.close();
		delete params.db;
	},
};