module.exports = function(app){
	var user = require('../controllers/user.controller');
	app.post('/login', user.login);
	app.post('/logout', user.logout);

	//app.post('/user', user.create); //if post to user, controller user create new user
	app.route('/user')
	.post(user.create) //create
	.get(user.list); //read
	
	//app.get('/user', user.list);

	app.route('/user/:username')
	.get(user.read)
	.put(user.update)
	.delete(user.delete);
	app.param('username', user.userByUsername); //query param username
}