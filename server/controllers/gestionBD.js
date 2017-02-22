var app = require('../app');
var escribirFicheros = require('../escribirFicheros');


function getBDs(req, res) {
     res.send('post /datos called successfully...');


     	res.end();

}
function insertBD(req,res){
     res.send('post /datos called successfully...');
     console.log(req.params);
     console.log(req.body);

     escribirFicheros.rutas(req.body);
     app.processRoutePath("./routes/");
	res.end();

}
module.exports = {getBDs,insertBD};