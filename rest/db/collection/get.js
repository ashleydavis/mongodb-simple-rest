//
// Get a collection or document from the database.
//

module.exports = function () {
    var mongo = require("mongodb");

	return {
		route: ':id?',

		handler: function (req, res, params, done) {

			var query;
			var haveId = req.params.id;
			if (haveId) {
		        params.logger.info("Getting single document: " + req.params.id);

				query = { 
					_id: new mongo.BSONPure.ObjectID(req.params.id) 
				};
			} 
			else if (req.query.query) {
				params.logger.info("Querying for documents");	

				query = JSON.parse(req.query.query);
			}
			else {
				params.logger.info("Getting all documents");	

				query = {};
			}

			var query = haveId ?
					 :
					{};
			var options = {};

			params.collection.find(query, options, function(err, cursor) {		
				if (err) {
					throw err;
				}

				cursor.toArray(function(err, docs){
	            	if (err) {
	            		throw err;
	            	}

	            	params.logger.info("Retreived " + docs.length + " from database.");

	                if(req.params.id) {
	                    if(docs.length > 0) {
	                        res.json(docs[0]);
	                    } else {
	                        res.send(404);
	                    }
	                } else {
	                    res.json(docs);
	                }
	                
	                done();
	            });						
			});
		},
	};
};