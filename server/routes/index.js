'use strict';
const express = require('express');
const gestionUsersController = require('../controllers/gestionUsers');
const gestionBD = require('../controllers/gestionBD');
const jwtauth = require('../lib/jwtauth');
const requireAuth = require('../lib/requireAuth');
const api = express.Router();

module.exports=function(app){
  app.post('/login',gestionUsersController.getUser);
  app.post('/registrer',gestionUsersController.insertUser);
  app.post('/datos',jwtauth, requireAuth,gestionBD.insertBD);
 /// app.post('/basedatos',gestionBD.insertDB);
}

