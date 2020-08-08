const User = require('../models/User')
const mongoose = require('mongoose')


exports.registerUser = async (req,res) => {
    try{
        console.log("hey")
    } catch (err){
        console.log(`err:${err}`)
        res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })  
    }
}