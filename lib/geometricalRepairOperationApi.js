var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function geometricalRepairOperationApi(inputId, callback){
	var operationName = operations.geometricalRepair;

	processOperation({inputId: inputId}, operationName, callback);	
}

module.exports = geometricalRepairOperationApi;