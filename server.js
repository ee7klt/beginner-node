// server.js
// HTTP server module
// 28 Aug 2013: route() now returns string. assign it to variable -- how not to do it

var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		var content = route(handle, pathname); // content is a string

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(content);    // replaced "hello world" with content
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;

