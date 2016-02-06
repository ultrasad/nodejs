var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//var ValidationError = mongoose.Error.ValidationError;
//var ValidatorError  = mongoose.Error.ValidatorError;

// make sure every value is equal to "something"
function validator (val) {
  return val == 'something';
}

var custom = [validator, 'Uh oh, {PATH} does not equal "something".']

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	username: {
		type: String, 
		unique: true,
		trim: true,
		required: true, //mongoose
	},
	email: {
		type:String, 
		index: true,
		required: true,
		match: /.+\@.+\.+/, //valid email format
	},
	password: {
		type: String,
		required: true,
		/*validate: [
			function(password){
				return password && password.length >= 6;
			},
			'Password must be at least 6 characters'
		]*/
		/*
		validate: {
			validator: function(password){
				return password.length >= 6;
			},
			message: 'Password must be at least 6 characters',
		}*/
		validate: custom
	},
	age: Number,
	interests: String,
	created: {
		type: Date,
		default: Date.now
	},
	/*role: {
		type: String,
		enum: ['Admin', 'Member', 'User'],
	}*/
});

mongoose.model('User', UserSchema); //model name 'User' form UserDchema