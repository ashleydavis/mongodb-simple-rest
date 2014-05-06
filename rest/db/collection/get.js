//
// Get a collection or document from the database.
//

module.exports = {

	route: ':id?',

	handler: function (req, res, params, done) {

		var haveId = req.params.id;
		var query = haveId ?
				{ _id: new BSON.ObjectID(req.params.id) } :
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