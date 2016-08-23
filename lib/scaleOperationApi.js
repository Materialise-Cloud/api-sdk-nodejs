var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function scaleOperationApi(inputId, axis, scaleToSizeMm, callback){
	var operationName = operations.scale;

	var request = {
		inputId: inputId,
		axis: axis,
		scaleToSizeMm: scaleToSizeMm
	};

	processOperation(request, operationName, callback);	
}

module.exports = scaleOperationApi;