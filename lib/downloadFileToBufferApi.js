var ApiHttpRequest = require("./ApiHttpRequest"); 
var authTokenApiRequest = require("../lib/authTokenApiRequest");
var async = require("async");

function downloadFileToBufferApi(fileId, callback){
	var performRequest = function(token, callback){
		var request = new ApiHttpRequest('/web-api/operation/file/' + fileId);
		request.addHeader("Authorization", "Bearer " + token);
	
		request.get(function(err,res){
			if(err) {
				callback(err);
			}
			else {
				callback(null, res);				
			}
		});
	}

	async.waterfall([authTokenApiRequest, performRequest], callback);
}

module.exports =  downloadFileToBufferApi;