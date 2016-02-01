process.env.NODE_ENV = process.env.NODE_ENV || 'development'; //set default if nil, (production, development)
var mongoose = require('./config/mongoose');
var express = require('./config/express'); //module.exports

/*var mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017';
var db = mongoose.connect(uri);*/

var db = mongoose(); //load first, db
var app = express(); //new express()
app.listen(3000);
module.exports = app;

//console.log('server running....');
console.log('Server running at http://localhost:3000');
