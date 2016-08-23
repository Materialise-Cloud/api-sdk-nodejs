var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function importOperationApi(fileId, measurementUnits, callback){
	var operationName = operations.import;

	processOperation({fileId: fileId, measurementUnits: measurementUnits}, operationName, callback);	
}

module.exports = importOperationApi;