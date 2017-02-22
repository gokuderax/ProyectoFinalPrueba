var app = require('../app');
const User = require('../models/user');

function getUser(req, res) {
     app.processRoutePath("./routes/");

     	res.end();

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