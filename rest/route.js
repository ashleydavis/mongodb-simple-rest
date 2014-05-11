var mongo = require("mongodb");

module.exports = {

    openRoute: function (req, res, params, done) {

        params.logger.info('Opening database server at ' + params.host + ":" + params.port);

        // Open the database.
        params.server = new mongo.Server(params.host, params.port, {
            auto_reconnect: true
        });
        done(params);
    },

    closeRoute: function (req, res, params, done) {

        delete params.server;
    },
};