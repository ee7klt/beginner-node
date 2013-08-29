// requestHandlers.js
// module. defines functions for handle.
// handle objects defined in index.js
// passed as collection of objects to route() in server.js
// 28 Aug 2013: added return values to functions (handling requests) -- how not to do it
// 29 Aug 2013: added sleep() - blocking
// 29 Aug 2013: added child_process

var exec = require("chile_process").exec;

function start() {
	console.log("Request handler 'start' was called.");
	var content = "empty";

	exec("ls -lah", function(error, stdout, stderr) {
		content = stdout;
	});
  
	return content;
}

function upload() {
	console.log("Request hander 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
