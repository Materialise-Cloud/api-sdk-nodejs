var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function hollowingOperationApi(inputId, wallThicknessMm, callback){
	var operationName = operations.hollowing;

	processOperation({inputId: inputId, wallThicknessMm: wallThicknessMm}, operationName, callback);	
}

module.exports = hollowingOperationApi;