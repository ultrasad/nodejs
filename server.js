process.env.NODE_ENV = process.env.NODE_ENV || 'development'; //set default if nil, (production, development)

var express = require('./config/express'); //module.exports
var app = express(); //new express()
app.listen(3000);
module.exports = app;

//console.log('server running....');
console.log('Server running at http://localhost:3000');
