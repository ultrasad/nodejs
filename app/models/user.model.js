var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstname: String,
	lastname: String,
	username: {type: String, unique: true},
	email: {type:String, index: true},
	password: String
});

mongoose.model('User', UserSchema); //model name 'User' form UserDchema