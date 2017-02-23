var app = require('../app');
const User = require('../models/user');
const moment = require('moment');
const jwt = require('jwt-simple');

function getUser(req, res,next) {
   if(req.headers.username && req.headers.password1){
	console.log(req.headers.username );
	console.log(req.headers.password1);
		User.findOne({username: req.headers.username}, function(err, user){
			if(err) res.send('Authentication error - usuario no encontrado'); 
			console.log(user);
			user.comparePassword(req.headers.password1,user.password1, function(err, isMatch){
				if(err) res.send('Error in password'); 	
				if(isMatch){
					var expires = moment().add('days', 7).valueOf();
					var token = jwt.encode({ iss: user.id, exp: expires}, app.get('jwtTokenSecret'));
					res.send(token);
				}else{
					res.send('Contraseña erronea');	
				}
			});
		});
	}else{
		//No username provided, or invalid POST request. For simplicity, just return a 401 code
		res.send('Aunthentication error - No username provided or password - Invalid POST request');
	}
}
function insertUser(req,res){
		let user = new User(req.body);
		console.log(JSON.stringify(req.body));
		user.save((err, userStored) => {
		if(err)
		 res.status(500).send({message:`Error al guardar usuario ${err}`});
		else
		res.status(200).send({user: userStored});
		res.end();
	});

}
module.exports = {getUser,insertUser};