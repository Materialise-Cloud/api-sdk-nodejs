var uploadFileFromBufferApi = require("../lib/uploadFileFromBufferApi");
var readFile = require('fs').readFile;
const path = require('path');

function uploadFileFromLocalStorageApi(pathToFile, callback) {
	readFile(pathToFile, function(err,data){
			if(err) {
				callback(err);
			}
			else {
				var fileName = path.basename(pathToFile);
				uploadFileFromBufferApi(data, fileName, callback);
			}
		});
}

module.exports = uploadFileFromLocalStorageApi;