var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function shrinkwrapOperationApi(inputId, accuracy, callback){
	var operationName = operations.shrinkwrap;

	var request = {
		inputId: inputId,
		accuracy: accuracy
	};

	processOperation(request, operationName, callback);	
}

module.exports = shrinkwrapOperationApi;