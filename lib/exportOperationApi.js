var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function exportOperationApi(inputId, format, callback){
	var operationName = operations.export;

	processOperation({inputId: inputId, exportToFormat: format}, operationName, callback);	
}

module.exports = exportOperationApi;