exports.render = function(req, res){
	//res.send('Hello World'); //no template
	res.render('index', {
		'title':'Hello World',	
		'message': 'How are things !!',
		'youAreUsingJade': true,
		'isLoggedIn': false,
		'foo':1,
	});
};

exports.test = function(req, res){
	res.send('Hello Test');
};