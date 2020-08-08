const mongoose = require('mongoose')
const Product = require('../models/Product')

exports.getProduct = async(req,res,next) => {
    try{
        const products = await Product.find()
        // console.log(`products:${products}`)
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