var processOperation = require('../lib/processOperation');
var operations = require('../lib/operations');
var async = require("async");

function analyzeOperationApi(inputId, callback){
    var operationName = operations.analyze;

    processOperation({inputId: inputId}, operationName, callback);	
}

module.exports = analyzeOperationApi;