var ApiHttpRequest = require("./ApiHttpRequest"); 
var authTokenApiRequest = require("../lib/authTokenApiRequest");
var async = require("async");

function uploadFileFromBufferApi(buffer, fileName, callback){
	var performFileUpload = function(token, callback) {		
		var boundary = "abcdefg";

		var body = [];

	    function add (part) {
	    	if (typeof part === 'number') {
	    		part = part.toString()
	    	}
	    	return body.push(new Buffer(part))
	    }

		add('--' + boundary + '\r\n');
		add('Content-Disposition: form-data; fileName="' + fileName + '"')
		add('\r\n\r\n');

		add(buffer);
		add('\r\n');
		add('--' + boundary + '--' + '\r\n');

		var request = new ApiHttpRequest('/web-api/operation/file');
		request.addHeader("Authorization", "Bearer " + token);
		request.addHeader("content-type", "multipart/form-data; boundary=" + boundary);

		body = new Buffer.concat(body);

		request.addHeader('content-length', body.length);

		request.postMultipartFormData(body, function(err,res){
			if(err) {
				callback(err);
			}
			else {
				var result = JSON.parse(res);
				callback(null, result);
			}
		});		
	};

	async.waterfall([authTokenApiRequest, performFileUpload], callback);
}

module.exports = uploadFileFromBufferApi;