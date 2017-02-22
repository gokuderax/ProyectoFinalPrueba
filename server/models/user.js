'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema =new Schema({
   username: {
      type:String,
      required: true,
      minlength:[5,"Nombre muy corto"], 
      maxlength:[20,"Nombre muy largo"]
   },
   email: {
      type:String,
      lowercase:true,
      required: true,
      minlength:[5,"Nombre muy corto"], 
      maxlength:[20,"Nombre muy largo"]
   },
   password:{
      type:String,
      select:false,
      minlength:[5,"Nombre muy corto"], 
      maxlength:[20,"Nombre muy largo"]
   },
   lastLogin:{
      type:Date
   },
   observaciones: {
      type:String,
      minlength:[5,"Nombre muy corto"], 
      maxlength:[20,"Nombre muy largo"]
   },

});

module.exports = mongoose.model('User', UserSchema);