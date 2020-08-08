const mongoose = require('mongoose')
const jwt = requre('jsonwebtoken')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Kindly input a messa'],
        trim:true
    },
    password:{
        type:String,
        required:[true,'Kindly input a messa'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'Kindly input a messa'],
        trim:true
    },
    active:{
        type:Boolean,
        options:[true,false],
        default:false
    },
    activationString:{
        type:String,
        trim:true
    }
})


const User = mongoose.model('User',UserSchema)
module.exports = User