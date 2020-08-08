const User = require('../models/User')
const mongoose = require('mongoose')
const { sendmail } = require('../utils/mailer')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')


exports.registerUser = async (req,res) => {
    try{
        console.log("hey")
        
        const user = new User (req.body)
        const acti = jwt.sign({_id:user._id,username:user.username},process.env.JWT_KEY)
        user.activationString = acti
        //
        const link = 'http://locolhost:3000/account/active/'
        + acti;
        const mail = { 
            from:process.env.EMAIL,
            to:req.body.email,
            subject:"Actiovation EMAIl",
            text:`
            <p>Hey there</p>
            <p>To activate your account click <a href="' + link '">here</a></p>
            `
        }
        await user.save()
        sendmail(mail)
        const token = user.generateAuthToken()
        res.status(201).json({
            success:true,
            token:token,
            user:user
        })
    } catch (err){
        console.log(`err:${err}`)
        res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })  
    }
}