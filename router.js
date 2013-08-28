// router.js
// 28 Aug 2013: returns handle function, error -- how not to do it

function route(handle, pathname) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();     //returns function (value) corresponding to pathname (key) in handle (object)
	} else {
		console.log("No request handler found for " + pathname);
		return "404 not found";
	}
}

exports.route = route;
