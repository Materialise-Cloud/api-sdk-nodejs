var ApiHttpRequest = require("./ApiHttpRequest"); 
var authTokenApiRequest = require("../lib/authTokenApiRequest");
var async = require("async");

function operationStatusApiRequest(operationId, callback){
	var performRequest = function(token, callback){
		var request = new ApiHttpRequest('/web-api/operation/' + operationId + "/status");
		request.addHeader("Authorization", "Bearer " + token);
		request.addHeader("content-type", "application/json");		

		request.get(function(err,res){
						if(err) {
							callback(err);
						}
						else {
							var result = JSON.parse(res);
							callback(null, result);
						}
				    });
	}

	async.waterfall([authTokenApiRequest, performRequest], callback);

}

module.exports = operationStatusApiRequest;