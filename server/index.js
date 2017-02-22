'use strict';
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const app = require('./app');

//Conect to Mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/gestion_usuarios', (err,res)=>{
	if(err){
		return console.log(`Error al conectar a la BD: ${err}`);
	}
	console.log('Conexion establecida a la BD');
    app.listen(port, ()=>{
        console.log(`Levantado ${port}`);
    });
});

