var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');

var sass = require('node-sass-middleware');

module.exports = function(){
	var app = express();
	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	} else {
		app.use(compression());
	}
	app.use(bodyParser.urlencoded({ //support url encode
		extended: true
	}));
	app.use(bodyParser.json()); //support json too.

	//view path, run time on server.js
	app.set('views', './app/views');
	app.set('view engine', 'jade');

	//app path, compile time
	require('../app/routes/index.routes')(app); //return function in index.routes and (app) is params
	require('../app/routes/user.routes')(app); //user

	app.use(sass({
			src: './sass',
			dest: './public/css',
			outputStyle: 'compressed', //compressed, compact, expanded
			prefix: '/css',
			debug: true,
			//indentedSyntax: true, //for .sass file, indent css style
	}));

	//public file, put after routing
	app.use(express.static('./public'));

	return app;
};