var fs = require('fs');
var mkdirp = require('mkdirp');


function rutas(datos)
{
	console.log(datos.dbNombre);
	var dir =__dirname+'/routes/'+datos.dbNombre;

mkdirp(dir,function(err)
	{
		 if (err) console.error(err)
		 else 
		 {
			fs.writeFile(dir+"/"+datos.dbNombre+".js", "\'use strict\';\n const express = require(\'express\');\n const "+ datos.tabla +"= require(\'../controllers/"+datos.tabla+"\');\n const api = express.Router();\n module.exports=function(app){ app.get(\'/"+datos.campo1+"\',"+datos.tabla+".get"+datos.tabla+"s);\n app.post(\'/"+datos.campo1+"\',"+datos.tabla+".insert"+datos.tabla+");\n}", function(err) {
			    if(err)
			    {
			        return console.log(err);
			    }
			
			console.log(dir+"    "+fs);
			});
		}
 	});
}

module.exports.rutas=rutas;