var async = require("async");
var cloudFactory = require("materialisecloud");

var cloud = cloudFactory.create("<<YOUR EMAIL HERE>>", "<<PASSWORD>>", "<<CLIENTID>", "<<CLIENTSECRET>>");


/*anonymous functions flow example: upload file, import it, run repair operation, export to stl, download result, display result in console*/
async.waterfall([
		function(callback){
			cloud.uploadFileFromLocalStorageApi('path\\to\\test.stl', callback);
		},
		function(input,callback){
			/*upload file returns an object, we need only fileId to run import operation*/
			cloud.importOperationApi(input.fileId, 'mm', callback);
		},
		function(input,callback) {
			cloud.repairOperationApi(input.resultId, callback);
		},
		function(input,callback){
			cloud.exportOperationApi(input.resultId, 'stl', callback);
		},
		function(input,callback){
			cloud.downloadFileToLocalStorageApi(input.fileId, 'path//to//result//file.stl', callback)
		}
	], 
	function(err,res){
		if(err) {
			console.log("Error: " + err);			
		}
		else {
			console.log("Result: " + JSON.stringify(res));
		}
});