var User = require('mongoose').model('User'); //call module mongoose, User model

exports.create = function(req, res, next){
	var user = new User(req.body);
	user.save(function(err){
		if(err){
			return next(err); //send err to next middleware
		} else { //save success, return json user object
			//return res.json(user); //return json user
			res.json(user); //return json user
		}
	});
};

exports.list = function(req, res, next){
	//var user = new User(req.body);
	User.find({}, function(err, users){ //{} model User condition find all
			if(err){
				return next(err);
			} else {
				res.json(users);
			}
	});
	
	/*User.find({}, 'firstName lastName', {
		skip: 10,
		limit: 10
	}, function(err, users){ //{condition}, [Fields], [Options], function(err, users){};
			if(err){
				return next(err);
			} else {
				res.json(users);
			}
	});*/

	/*User.find({
		firstName: 'Bundit',
		age: {$gt: 18, $lt: 60},
		interests: {$in: ['reading', 'movies', 'photography']}
	}, 'firstName lastName', {
		skip: 10,
		limit: 10
	}, function(err, users){ //{condition}, [Fields], [Options], function(err, users){};
			if(err){
				return next(err);
			} else {
				res.json(users);
			}
	});*/
	
	//base query
	/*
	User.find({firstName: 'Bundit', lastName: 'Parameesee'})
		.where('age').gt(18).lt(60)
		.where('interests').in(['movies', 'photography'])
		//.skip(10)
		.limit(10)
		.select('firstName lastName')
		.exec(function(err, users){
			if(err){
				return next(err);
			} else {
				res.json(users);
			}
		});
	*/
};

exports.read = function(req, res){
	res.json(req.user);
}

exports.userByUsername = function(req, res, next, username){
	User.findOne({
		username: username
	}, function(err, user){
		if(err){
			return next(err);
		} else {
			req.user = user;
			//new solution for insert, case find user is null in database, set upsert true
			/*if(req.user == null){
				req.user = {"username":username};
				console.log(' req => ' + req.user.username);
			}*/
			next(); //send user for next middleware (read)
		}
	});
};

exports.update = function(req, res, next){
	User.findOneAndUpdate({username: req.user.username}, req.body, //req.user.username is username from userByUsername (param where update by username equal this user), 
		//req.body is only field data for you want update
		{new: true, upsert: false}, //return new data update. //upsert "default false", creates a new document when no document matches the query criteria.
		function(err, user){
			if(err){
				return next(err);
			} else {
				res.json(user);
			}
		});
};

exports.delete = function(req, res, next){
		req.user.remove(function(err){
				if(err){
					return next(err);
				} else {
					res.json(req.user);
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