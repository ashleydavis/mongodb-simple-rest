var mongo = require("mongodb");

module.exports = {

    route: ':db',

    openRoute: function (req, res, params, done) {

        var db = new mongo.Db('none', params.server);
        db.open(function(err, db) {
            if (err) {
                throw err;
            }

            params.db = db;

            done(params);
        });
    },

    closeRoute: function (req, res, params, done) {

        // Close the database.
        params.db.close();
        delete params.db;
    },
};