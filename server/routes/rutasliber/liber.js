'use strict';
const express = require('express');
const liberController = require('../../controllers/liber');
const api = express.Router();
module.exports=function(app){
  app.get('/liber',liberController.getlibers);
  app.post('/liber',liberController.insertliber);
}
