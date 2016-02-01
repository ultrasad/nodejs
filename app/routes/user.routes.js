module.exports = function(app){
	var user = require('../controllers/user.controller');
	app.post('/login', user.login);
	app.post('/logout', user.logout);

	app.post('/user').post(user.create); //if post to user, controller user create new user
}