const mongoose = require('mongoose')
const OrderItem = require('../models/OrderItem')

exports.getOrderItem = async (req,res,next) => {
    try{
        const orderItems = await OrderItem.find()
        total = 0 
        for (i in orderItems){
            total = total +  orderItems.total
        }
        res.status(200).json({
            success:true,
            data:orderItems,
            total:total
        })
    } catch (err){
        console.log(`err:${err}`)
        res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })
    }
}