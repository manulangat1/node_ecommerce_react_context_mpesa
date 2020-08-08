const mongoose = require('mongoose')
const Order = require('../models/Order')
const OrderItem = require('../models/OrderItem')

exports.getOrder = async (req,res) => {
    try{
        const orders = await Order.find()
        res.status(200).json({
            success:true,
            count:orders.length,
            data:orders
        })
    } catch (err){
        console.log(`err:${err}`)
        res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })
    }
}