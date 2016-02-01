var User = require('mongoose').model('User'); //call module mongoose, User model

exports.create = function(req, res, next){
	var user = new User(req.body);
	user.save(function(err){
		if(err){
			return next(err); //send err to next middleware
		} else {
			return res.json(user); //return json user
		}
	});
};

exports.login = function(req, res){
	console.log(req.body);
	console.log('Email: ' + req.body.email); //body parser req.body
	console.log('Password: ' + req.body.password);

	res.render('index', {
		title: 'Logged in as: ' + req.body.email,
		isLoggedIn: true,
	});
};

exports.logout = function(req, res){
	console.log('logout.');
	res.render('index',{
		title: 'See you again later.',
		isLoggedIn:  false,
	});
};