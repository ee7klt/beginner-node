// server.js
// HTTP server module
// 28 Aug 2013: route() now returns string. assign it to variable -- how not to do it
// 29 Aug 2913: push server to content (instaed of the other way round)

var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(handle, pathname, response);

		//instead of expecting return value, pass in a third parameter, response object
		//var content = route(handle,pathname);
		
		//remove response methods because now because route will handle that
		//response.writeHead(200, {"Content-Type": "text/plain"});
		//response.write(content);    // replaced "hello world" with content
		//response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;

