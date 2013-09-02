// server.js
// HTTP server module
// 28 Aug 2013: route() now returns string. assign it to variable -- how not to do it
// 29 Aug 2913: push server to content (instaed of the other way round)
// 1st Sept 2013: add data and end events to collect POST data.

//remove postData handling, pass request to route

var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {


		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(handle, pathname, response, request);

	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;

