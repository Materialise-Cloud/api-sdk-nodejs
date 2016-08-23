var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function reduceTrianglesOperationApi(inputId, accuracyMm, maxAngle, numberOfIterations, callback){
	var operationName = operations.reduceTriangles;

	var request = {
		inputId: inputId,
		accuracyMm: accuracyMm,
		maxAngle: maxAngle,
		numberOfIterations: numberOfIterations		
	};

	processOperation(request, operationName, callback);	
}

module.exports = reduceTrianglesOperationApi;