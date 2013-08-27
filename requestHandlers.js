// requestHandlers.js
// module. defines functions for handle.
// handle objects defined in index.js
// passed as collection of objects to route() in server.js


function start() {
	console.log("Request handler 'start' was called.");
}

function upload() {
	console.log("Request hander 'upload' was called.");
}

exports.start = start;
exports.upload = upload;
