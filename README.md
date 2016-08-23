Materialise Cloud SDK
=====================

The SDK to run operations on Materialise Cloud API. 

Description
-----------

All operations in **materialisecloud** module have the same contracts (input and result) as per [documentation](https://api.cloud.materialise.com/help).

For example, the operation [Reduce Triangles](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-reduce-triangles) has the following parameters: 

```js
accuracyMm (number)
maxAngle (number)
numberOfIterations (number)
inputId (string)
```

which is manifested in the function's signature:

```js
function reduceTrianglesOperationApi(inputId, accuracyMm, maxAngle, numberOfIterations, callback)
```


The operation's results are in JSON format and have the following [structure](https://api.cloud.materialise.com/Help/Api/GET-web-api-operation-operationId-reduce-triangles-result): 

```js
{
  "operationId": "98f499ac-099c-4637-a2d5-f54fed455773",
  "resultId": "ca74d93d-43b7-452b-bf44-1554081d6bac"
}
```

which is exactly the structure of the object returned in the result parameter of the operation's callback function. The callback is a standard node.js style callback function with first arugment 'error' if an error has occured, the second: the resulting object.

```js
cloud.reduceTrianglesOperationApi('<<INPUTID>>', 1, 45, 5, function(error, result) {
	console.log("OperationId: " + result.operationId);
	console.log("ResultId: " + result.resultId);
}
```

Usage
-----

Import the module. It has an entry point function **create** which requires your credentials and (optionally) the base url (without http and slashes) and port (if not supplied, defaults to production values). After calling **create** simply call the operation API functions:


```js
var cloudFactory = require("materialisecloud");

var cloud = cloudFactory.create("<<YOUR EMAIL HERE>>", "<<PASSWORD>>", "<<CLIENTID>", "<<CLIENTSECRET>>", "api-cloudtoolkit-sandbox.materialise.net", "443");

cloud.uploadFileFromLocalStorageApi('\\path\\to\\file.stl', function(error,result){
	if(error){
		console.log('Error: ' + error);
	}
	else {
		console.log('Result file id: ' + result.fileId);

		cloud.importOperationApi(result.fileId, 'mm', function(error,result){
				if(error){
					console.log('Error: ' + error);
				}
				else {
					console.log('Result id: ' + result.resultId);
				}
		});
	}
});


```

You can also use a control flow library like [async.js](https://github.com/caolan/async) to get rid of nested callbacks. See examples for more information. 

Install
-------

```
$ npm install materialisecloud
```


API
---

### uploadFileFromLocalStorageApi(pathToFile, callback) 

```js
cloud.uploadFileFromLocalStorageApi('//path//to//saved//file.stl', function(error, result) {
	console.log(result.fileId); //id of uploaded file
});
```

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-file)

### uploadFileFromBufferApi(buffer, fileName, callback) 

```js
cloud.uploadFileFromLocalStorageApi(bufferWithFileContents, "test.stl", function(error, result) {
	console.log(result.fileId); //id of uploaded file
});
```

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-file)


### downloadFileToLocalStorageApi(fileId, pathToFile, callback) 
in case of success path to downloaded file will be returned in callback's second argument

```js
cloud.downloadFileToLocalStorageApi('<<FILEID>>', "//path//to//saved//file.stl", function(error, result) {
	console.log(result); //logs "//path//to//saved//file.stl"
});
```

[see more](https://api.cloud.materialise.com/Help/Api/GET-web-api-operation-file-fileId)


### downloadFileToBufferApi(fileId, callback) 
in case of success downloaded file buffer will be returned in callback's second argument

```js
cloud.downloadFileToBufferApi('<<FILEID>>', function(error, result) {
	fs.writeFile("\\path\\to\\file.stl", result, function(err) {
			console.log('file saved');
		});
});
```

[see more](https://api.cloud.materialise.com/Help/Api/GET-web-api-operation-file-fileId)


### analyzeOperationApi(inputId, callback)

```js
cloud.analyzeOperationApi('<<INPUTID>>', function(error,result){
	console.log(result); //outputs model analysis data in JSON format
});
```

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-analyze)

### convertToStlOperationApi(inputId, measurementUnits, callback)

```js
cloud.convertToStlOperationApi('<<INPUTID>>', 'mm', function(error,result){
	console.log(result.resultId); //outputs id of result
});
```

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-stl-conversion)

### exportOperationApi(inputId, format, callback)

```js
cloud.exportOperationApi('<<INPUTID>>', 'stl', function(error,result){
	console.log(result.fileId); //id of resulting stl file
});
```

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-export)

### generateThumbnailOperationApi(inputId, width, height, cameraAngleX, cameraAngleY, cameraAngleZ, callback)

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-thumbnail)

### geometricalRepairOperationApi(inputId, callback)

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-geometrical-repair)

### hollowingOperationApi(inputId, wallThicknessMm, callback)

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-hollowing)

### importOperationApi(fileId, measurementUnits, callback)

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-import)

### reduceTrianglesOperationApi(inputId, accuracyMm, maxAngle, numberOfIterations, callback)

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-reduce-triangles)

### repairOperationApi(inputId, callback)

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-repair)

### scaleOperationApi(inputId, axis, scaleToSizeMm, callback)

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-scale)

### shrinkwrapOperationApi(inputId, accuracy, callback)
[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-shrinkwrap-repair)

### wallThicknessAnalysisOperationApi(inputId, accuracyWallThickness, minimalWallThicknessMm, callback)

[see more](https://api.cloud.materialise.com/Help/Api/POST-web-api-operation-wall-thickness-analysis)

