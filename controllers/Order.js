const mongoose = require('mongoose')
const Order = require('../models/Order')
const OrderItem = require('../models/OrderItem')
const Product = require('../models/Product')

exports.getOrder = async (req,res) => {
    try{
        const orders = await Order.find()
        console.log(orders.orderItems)
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

exports.postOrder = async(req,res) => {
    try{
        const product = await Product.findById(req.body.products)
        const orderItems = await OrderItem.findOne({products:product})

        if (orderItems){
            // tou = 0
            orderItems.quantity += 1    
            orderItems.save()
            
            total = await  orderItems.generateOrderItemTotal()
            console.log(total)
            const ordeR = new Order({
                orderItems:orderItems
            })
            const create = await ordeR.save()
            // console.log(create)
            res.status(201).json({
                success:true,
                data:create,
                total:total
            })
        } else {
            const OrderItems = new OrderItem({
                products:product
            })
            total = await  orderItems.generateOrderItemTotal()
            console.log(total)
            const newOrderItem = await OrderItems.save()
            // console.log(newOrderItem.products.price)
            const ordeRs = new Order({
                orderItems:orderItems
            })
            const creates = await ordeRs.save()
            // console.log(create)
            res.status(201).json({
                success:true,
                data:creates
            })
        }
    } catch(err){
        console.log(`err:${err}`)
        res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })   
    }
}