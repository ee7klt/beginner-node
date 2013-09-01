// router.js
// 28 Aug 2013: returns handle function, error -- how not to do it
// 29 Aug 2013: push server to content (instaed of the other way round)
// 1st Sept 2013: display postData on upload page

function route(handle, pathname, response, postData) {      // add third parameter, object response from server
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		//return handle[pathname]();     //returns function (value) corresponding to pathname (key) in handle (object)
		//instead of expecting return value from return handlers, pass in response object.
		handle[pathname](response, postData);

	} else {
		console.log("No request handler found for " + pathname);
		//return "404 not found";
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;
