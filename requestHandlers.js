// requestHandlers.js
// module. defines functions for handle.
// handle objects defined in index.js
// passed as collection of objects to route() in server.js
// 28 Aug 2013: added return values to functions (handling requests) -- how not to do it
// 29 Aug 2013: added sleep() - blocking


function start() {
	console.log("Request handler 'start' was called.");

	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);    // do nothing
	}

	sleep(10000);   
	return "Hello Start";
}

function upload() {
	console.log("Request hander 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
