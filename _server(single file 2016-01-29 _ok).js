//var connect = require('connect');
//var app = connect();

var express = require('express');
var app = express();

//app.set(name, value); //set environment variable
//app.get(name); //get environment variable
//app.use([path], callback); //create middleware for handle request with path
//app.get(path, callback); //create middleware for handle get request with path, for get request only
//app.post(path, callback); //create middleware for handle post request with path, for post request only
//app.put(path, callback); //create middleware for handle put request with path, for put request only
//app.delete(path, callback); //create middleware for handle delete request with path, for delete request only

/*
app.route(path) //for multiple request get/post
   .get(callback)
   .post(callback)
*/

/*
	req.query //query string parameter
	req.params //routing param, such as page1/param1/param2
	req.body //body by use middleware bodyParser()
	req.path, req.host, req.ip //request path, host, ip requests
*/

/*
	res.status //set HTTP Status code
	res.set(field, [value]) //set HTTP response header
	res.redirect([status], url); //redirect to url and fix status code

	res.send([body|status], [body]); //response by set auto Content-Type
	res.json([body|status], [body]); //same res.send by send array or object
	res.render(); //render view and send HTML response
*/

var logger = function(req, res, next){
	console.log(req.method, req.url);
	//console.log('logger...');

	next();
};

var helloWorld = function(req, res, next){
	//res.end('Hello World');
	res.send('Hello World'); //express auto check header request
};

var goodbyeWorld = function(req, res, next){
	//res.end('Goodbye World');
	res.send('Goodbye World'); //express auto check header request
};

/*
app.get('/', function (req, res, next) {
   res.send('Hello World /');
});

app.get('/test', function (req, res, next) {
   res.send('Hello Test /test');
});
*/

//app.use(logger);
app.use('/hello',helloWorld);
app.use('/goodbye',goodbyeWorld);

//app.listen(8081);

var server = app.listen(8081, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;

  /*
    Begin accepting connections on the specified port and hostname. If the hostname is omitted, the server will accept connections on any IPv6 address (::) 
    when IPv6 is available, or any IPv4 address (0.0.0.0) otherwise. A port value of zero will assign a random port.
    So, the following code would print running at http://:::3456:
  */

  console.log("Example app listening at http://%s:%s", host, port);
});

module.exports = app; //for common js module
//such as app.js => var server = erequire(./server);
//for another use it.