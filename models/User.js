const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
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
        trim:true,
        unique:true
    },
    active:{
        type:Boolean,
        options:[true,false],
        default:false
    },
    activationString:{
        type:String,
        trim:true
    },
    isAdmin:{
        type:Boolean,
        required:[true,"Please input isAdmin"],
        default:false
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

UserSchema.pre('save', async function(next){
//hash the password before saving the user 
    const user = this 
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
})
//generateAuthTokenMethod 
UserSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id,username:user.username},process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token 
}

UserSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email} )
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}

const User = mongoose.model('User',UserSchema)
module.exports = User