var mongo = require("mongodb");

module.exports = {

	route: ':db',

	openRoute: function (req, res, params, done) {

		params.logger.info('Opening database ' + req.params.db + ' on host: ' + params.host + ":" + params.port);

		// Open the database.
		var server = new mongo.Server(params.host, params.port, {
			auto_reconnect: true
		});
	    var db = new mongo.Db(req.params.db, server);
	    db.open(function(err, db) {
	    	if (err) {
	    		throw err;
	    	}

	    	params.db = db;

	    	done(params);
	    });
	},

	closeRoute: function (req, res, params, done) {

		console.log('close db');

		// Close the database.
		params.db.close();
		delete params.db;
	},
};