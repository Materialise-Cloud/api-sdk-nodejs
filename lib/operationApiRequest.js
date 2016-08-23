var ApiHttpRequest = require("./ApiHttpRequest"); 
var authTokenApiRequest = require("../lib/authTokenApiRequest");
var async = require("async");

function operationApiRequest(requestBody, operationName, callback){
	var performRequest = function(token, callback){
		var request = new ApiHttpRequest('/web-api/operation/' + operationName);
		request.addHeader("Authorization", "Bearer " + token);
		request.addHeader("content-type", "application/json");		

		request.postAsJson(requestBody, function(err,res){
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

module.exports = operationApiRequest;