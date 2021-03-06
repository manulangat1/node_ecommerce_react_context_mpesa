const mongoose = require('mongoose')
const OrderItem = require('../models/OrderItem')
const Product = require('../models/Product')
exports.getOrderItem = async (req,res,next) => {
    try{
        const orderItems = await OrderItem.find()
        total = 0  
        for (i in orderItems){
            total = orderItems[i].products.price * orderItems[i].quantity
            // console.log(orderItems[i].products)
            const product = await Product.findById(orderItems[i].products)
            console.log(product.price)
            totals = parseInt(product.price * orderItems[i].quantity)
            console.log(totals)
            total = total + totals
        }
        console.log(total)
        // console.log(orderItems)
        res.status(200).json({
            success:true,
            data:orderItems,
            count:orderItems.length,
            // total:total
        })
    } catch (err){
        console.log(`err:${err}`)
        res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })
    }
}

exports.postOrderItem = async (req,res,next) => {
    try{
        console.log(req.body.product)
        const product = await Product.findById(req.body.product)
        // console.log(product)
        if (product){
            const OrderItems = new OrderItem({
                products:product
            })
            const newOrderItem = await OrderItems.save()
            console.log(newOrderItem)
            res.status(201).json({
                success:true,
                data:newOrderItem
            })
        }
        // const orderItem = await Order
    } catch (err) {
        console.log(`err:${err}`)
        res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })
    }
}