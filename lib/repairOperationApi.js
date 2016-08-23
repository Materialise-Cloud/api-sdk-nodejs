var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function repairOperationApi(inputId, callback){
	var operationName = operations.repair;


	processOperation({inputId: inputId}, operationName, callback);	
}

module.exports = repairOperationApi;