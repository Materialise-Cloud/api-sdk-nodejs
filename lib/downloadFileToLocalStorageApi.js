var ApiHttpRequest = require("./ApiHttpRequest"); 
var authTokenApiRequest = require("../lib/authTokenApiRequest");
var writeFile = require('fs').writeFile;
var async = require("async");

function downloadFileToLocalStorageApi(fileId, pathToFile, callback){
	var performRequest = function(token, callback){
		var request = new ApiHttpRequest('/web-api/operation/file/' + fileId);
		request.addHeader("Authorization", "Bearer " + token);
	
		request.get(function(err,res){
			if(err) {
				callback(err);
			}
			else {
				writeFile(pathToFile, res, function(err) {
					  if (err){
					  	callback(err);
					  }
					  else {
					  	callback(null, pathToFile);
					  }
					});
			}
		});
	}

	async.waterfall([authTokenApiRequest, performRequest], callback);
}

module.exports =  downloadFileToLocalStorageApi;