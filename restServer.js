
module.exports = function (config, app) {

	var path = require('path');	
	var routey = require('routey');

	routey({
	    routeConfigPath: path.join(__dirname, "rest"),
	    verbose: true,
	    handlerParams: {
	    	host: config.host,
	    	port: config.port,
	    	logger: config.logger,
	    },
	    parentRoute: config.parentRoute,

	}, app);
};