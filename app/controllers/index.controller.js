exports.render = function(req, res){
	//res.send('Hello World'); //no template
	res.render('index', {
		'title':'Welcome.',	
		'message': 'How are things !!',
		'youAreUsingJade': true,
		'isLoggedIn': false,
		'foo':1,
	});
};

exports.test = function(req, res){ //routes test
	res.send('Hello Test');
};

exports.welcome = function(req, res){ //routes welcome
	res.send('Welcome');
};