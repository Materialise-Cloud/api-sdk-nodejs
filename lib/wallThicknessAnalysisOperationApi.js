var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function wallThicknessAnalysisOperationApi(inputId, accuracyWallThickness, minimalWallThicknessMm, callback){
	var operationName = operations.wallThicknessAnalysis;

	var request = {
		inputId: inputId,
		accuracyWallThickness: accuracyWallThickness,
		minimalWallThicknessMm: minimalWallThicknessMm
	};

	processOperation(request, operationName, callback);	
}

module.exports = wallThicknessAnalysisOperationApi;