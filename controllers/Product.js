const mongoose = require('mongoose')
const Product = require('../models/Product')

exports.getProduct = async(req,res,next) => {
    try{
        const products = await Product.find()
        // console.log(`products:${products}`)
        res.status(200).json({
            success:true,
            count:products.length,
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
exports.postProduct = async(req,res) => {
    try{
        const newProduct = new Product({
            name:req.body.name,
            price:req.body.price,
            slug:req.body.name
        })
        const newProductCreated = await newProduct.save()
        res.status(201).json({
            success:true,
            data:newProductCreated
        })
    } catch (err){
        console.log(`err:${err}`)
        res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })
    }
}