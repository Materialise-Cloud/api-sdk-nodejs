var operationApiRequest = require("../lib/operationApiRequest");
var operationStatusApiRequest = require("../lib/operationStatusApiRequest");
var operationResultApiRequest = require("../lib/operationResultApiRequest");
var async = require("async");

function processOperation(input, operationName, callback){
	async.waterfall([
	    function(callback) { 
	    	operationApiRequest(input, operationName, callback); 
	    },
	    function(input,callback) { 
	    	var isCompleted = false;
	    	
	    	async.whilst(
	    		function(){ return !isCompleted; }, 
	    		
	    		function(callback){ 
	    			setTimeout(function(){
	    				operationStatusApiRequest(input.operationId, function(error,res){
	    				isCompleted = res.isCompleted;
	    				callback(error,res);
	    			})
	    			},500);
	    		},
	    		callback
	    		);
	    	},
	    
	    function(input, callback)	{
	    	operationResultApiRequest(input.operationId, operationName, callback);
	    }]
	    ,callback);
}

module.exports = processOperation;

