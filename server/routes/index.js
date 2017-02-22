'use strict';
const express = require('express');
const gestionUsersController = require('../controllers/gestionUsers');
const gestionBD = require('../controllers/gestionBD');

const api = express.Router();

module.exports=function(app){
  app.post('/login',gestionUsersController.getUser);
  app.post('/registrer',gestionUsersController.insertUser);
  app.post('/datos',gestionBD.insertBD);
 /// app.post('/basedatos',gestionBD.insertDB);
}

