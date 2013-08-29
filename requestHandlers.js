// requestHandlers.js
// module. defines functions for handle.
// handle objects defined in index.js
// passed as collection of objects to route() in server.js
// 28 Aug 2013: added return values to functions (handling requests) -- how not to do it
// 29 Aug 2013: added sleep() - blocking
// 29 Aug 2013: added child_process
// 29 Aug 2013: push server to content (instaed of the other way round)

var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");
	//var content = "empty";

	exec("ls -lah", function(error, stdout, stderr) {          // now upload is not blocked.
	//	content = stdout;
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});

	//return content;
  
}

function upload(response) {
	console.log("Request hander 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
	//return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
