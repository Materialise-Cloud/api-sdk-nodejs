var ApiHttpRequest = require("./ApiHttpRequest"); 
var config = require('./config');

/*cache token and use while not expired*/
var token = token || "";
var tokenExpirationTimestamp = tokenExpirationTimestamp || null;

function authTokenApiRequest(callback) {
	if(token && tokenExpirationTimestamp > Date.now() + 5000)
	{
		callback(null, token);
	}
	else { 	
		var tokenRequest = new ApiHttpRequest("/Token");

		var base64AuthHeaderValue = new Buffer(config.client + ":"+ config.secret).toString('base64');

		tokenRequest.addHeader("Authorization", "Basic " + base64AuthHeaderValue);
		
		tokenRequest.postAsPlainText("grant_type=password&username=" + config.username + "&password=" + config.password, function(err,res){ 
			if(err){
				callback(err);
			}
			else {
				token = (JSON.parse(res))["access_token"];
				var tokenExpiresInSeconds = (JSON.parse(res))["expires_in"];
				tokenExpirationTimestamp = Date.now() + tokenExpiresInSeconds * 1000;
				callback(null, token);
			}
		});
	}
}

module.exports = authTokenApiRequest;