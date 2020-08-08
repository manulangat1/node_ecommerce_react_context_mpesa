const mongoose = require('mongoose')
const Product = require('../models/Product')

exports.getProduct = async(req,res,next) => {
    try{
        const products = Product.find()
        res.status(200).json({
            success:true,
            data:products
        })
    } catch (err) {
        console.log(`err:${err}`)
        res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })
    }
}