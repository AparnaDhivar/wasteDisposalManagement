const { text } = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username:  {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  phoneno:{
    type:String,
    required:true,
  },
  shopno:{
    type:String,
    required:true,
  },
  garbage:{
    type:String,
    required:true,
  }
  
},{timestamps:true});


const UserModel = mongoose.model('UserModel',userSchema);

module.exports =  UserModel;