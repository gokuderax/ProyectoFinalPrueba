'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
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
   password1:{
      type:String,
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
UserSchema.pre('save', function(next){
   var user = this; 
   if(!user.isModified('password1')) return next();//hasheamos si camb
   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
      if(err) return next(err);
      bcrypt.hash(user.password1, salt, function(err, hash){
         if(err) return next(err); 
         user.password1 = hash;
         next();
      });
   });
});
UserSchema.methods.comparePassword = function(candidatePassword,password1, cb){
         console.log(candidatePassword+" "+password1);
   bcrypt.compare(candidatePassword, password1, function(err, isMatch){
     if(err) return cb(err);
    cb(null, isMatch);
   });
};
UserSchema.statics.findByUsername = function(username, cb){
   this.findOne({username: username}, cb);
}

module.exports = mongoose.model('User', UserSchema);