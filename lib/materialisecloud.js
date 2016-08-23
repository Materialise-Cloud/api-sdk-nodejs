var config = require("./config");
var uploadFileFromLocalStorageApi = require("./uploadFileFromLocalStorageApi");
var analyzeOperationApi	 = require("./analyzeOperationApi");
var importOperationApi	 = require("./importOperationApi");
var exportOperationApi = require("./exportOperationApi");
var hollowingOperationApi = require("./hollowingOperationApi");
var generateThumbnailOperationApi = require("./generateThumbnailOperationApi");
var geometricalRepairOperationApi = require("./geometricalRepairOperationApi");
var hollowingOperationApi = require("./hollowingOperationApi");
var reduceTrianglesOperationApi = require("./reduceTrianglesOperationApi");
var shrinkwrapOperationApi = require("./shrinkwrapOperationApi");
var repairOperationApi = require("./repairOperationApi");
var scaleOperationApi = require("./scaleOperationApi");
var wallThicknessAnalysisOperationApi = require("./wallThicknessAnalysisOperationApi");
var downloadFileToLocalStorageApi = require("./downloadFileToLocalStorageApi");
var downloadFileToBufferApi = require("./downloadFileToBufferApi");
var uploadFileFromBufferApi = require("./uploadFileFromBufferApi");

function MaterialiseCloud(username, password, clientId, clientSecret, url, port) {
	config.baseUrl = url || "api.cloud.materialise.com";
	config.port =  port || "443";
    config.username = username;
    config.password = password;
    config.client = clientId;
    config.secret = clientSecret;

	if(!config.username 
		|| !config.password 
		|| !config.client 
		|| !config.secret 
		|| !config.baseUrl 
		|| !config.port) {
		 throw 'Configuration is incomplete. Please pass your credentials and optionally url/port to create method.';
	}

	this.uploadFileFromLocalStorageApi = uploadFileFromLocalStorageApi;
	this.uploadFileFromBufferApi = uploadFileFromBufferApi;
	this.analyzeOperationApi = analyzeOperationApi;	
	this.importOperationApi = importOperationApi;
	this.exportOperationApi = exportOperationApi;
	this.generateThumbnailOperationApi = generateThumbnailOperationApi;
	this.geometricalRepairOperationApi = geometricalRepairOperationApi;
	this.hollowingOperationApi = hollowingOperationApi;
	this.reduceTrianglesOperationApi = reduceTrianglesOperationApi;
	this.shrinkwrapOperationApi = shrinkwrapOperationApi;
	this.repairOperationApi = repairOperationApi;
	this.scaleOperationApi = scaleOperationApi;
	this.wallThicknessAnalysisOperationApi = wallThicknessAnalysisOperationApi;
	this.downloadFileToLocalStorageApi = downloadFileToLocalStorageApi;
	this.downloadFileToBufferApi = downloadFileToBufferApi;
};

module.exports = { create : function(username, password, clientId, clientSecret, url, port){ 
return new MaterialiseCloud(username, password, clientId, clientSecret, url, port) }}