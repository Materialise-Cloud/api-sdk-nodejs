var async = require("async");
var cloudFactory = require("materialisecloud");

var cloud = cloudFactory.create("<<YOUR EMAIL HERE>>", "<<PASSWORD>>", "<<CLIENTID>", "<<CLIENTSECRET>>");


/*named functions flow example: upload file, import it, analyze*/
function uploadFile(callback){
	cloud.uploadFileApi('\\path\\to\\test.stl', callback);
}

function processFileUploadResults(input, callback){
	callback(null, input.fileId);
}

function runImportOperation(input,callback){
	cloud.importOperationApi(input, 'mm', callback);
}

function processImportOperationResults(input,callback){
	callback(null, input.resultId);
}

function displayFlowResults(error,result){
	if(error) {
		console.log("Error: " + error);			
	}
	else {
		console.log("Result " + JSON.stringify(result));
	}
}

/*execute functions sequentially*/
async.waterfall([
		uploadFile,
		processFileUploadResults,
		runImportOperation,
		processImportOperationResults,
		cloud.analyzeOperationApi
	], 
	displayFlowResults);



