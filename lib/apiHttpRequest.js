'use strict';
var https = require('https');
var http = require('http');
var config = require('./config');


/*constructor function*/
function ApiHttpRequest(path) {
	var headers = {};

	var httpRequest = config.port.toString() === "443" ? https : http;

	this.addHeader = function(name, value){
		headers[name] = value;
	}

	var makeHttpRequest = function(options, body, callback) {		
		var data = [];
		
		var req = httpRequest.request(options, function(res){			 		
			res.on('data', function (chunk) {						
				data.push(chunk);
			});

			res.on('end', function() {
				if(res.statusCode != "200")
				{					
					callback(Buffer.concat(data), null);
				}
				else {
					callback(null, Buffer.concat(data));	
				}
			})
		});		

		req.on('error', callback);	

		req.end(body);
	};

	var prepareRequestOptions = function(method){
		return {
			host: config.baseUrl,
			path: path,
			port: config.port,
			method: method,
			headers: headers
		};		
	};

	this.postAsPlainText = function(body, callback){
		var options = prepareRequestOptions("POST");

		makeHttpRequest(options, body, callback);
	};

	this.postAsJson = function(body, callback) {
		var options = prepareRequestOptions("POST");
		body = JSON.stringify(body);
		this.addHeader("content-length", Buffer.byteLength(body));		
		makeHttpRequest(options, body, callback);		
	}

	this.get = function(callback){
		var options = prepareRequestOptions("GET");

		makeHttpRequest(options, null, callback);
	}

	this.postMultipartFormData = function(multipart, callback){
		if(!headers['content-type'] 
			|| headers['content-type'].indexOf('boundary=') === -1) {
			throw 'to post multipart/form-data request, please add content-type header with boundary';
		}

		var options = prepareRequestOptions("POST");

		makeHttpRequest(options, multipart, callback);
	};
}

module.exports = ApiHttpRequest;