var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function convertToStlOperationApi(inputId, measurementUnits, callback){
	var operationName = operations.convertToStl;

	processOperation({inputId: inputId, measurementUnits: measurementUnits}, operationName, callback);	
}

module.exports = convertToStlOperationApi;