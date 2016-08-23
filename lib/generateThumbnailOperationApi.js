var operations = require('../lib/operations');
var processOperation = require('../lib/processOperation');
var async = require("async");

function generateThumbnailOperationApi(inputId, width, height, cameraAngleX, cameraAngleY, cameraAngleZ, callback){
	var operationName = operations.generateThumbnail;

	var request = {
		inputId: inputId,
		width: width,
		height: height,
		cameraAngleX: cameraAngleX,
		cameraAngleY: cameraAngleY,
		cameraAngleZ: cameraAngleZ
	};

	processOperation(request, operationName, callback);	
}

module.exports = generateThumbnailOperationApi;