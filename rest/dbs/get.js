
module.exports = {

	handler: function (req, res, params, done) {
	
    	// Use the admin database for the operation
        var adminDb = params.db.admin();

        // List all the available databases
        adminDb.listDatabases(function(err, dbs) {
            if (err) {
                throw err;
            }

            var dbNames = dbs.databases.map(function (db) {
                return db.name;
            })

            res.json(dbNames);

            done();
        });
	},
}