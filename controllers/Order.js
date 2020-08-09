const mongoose = require('mongoose')
const Order = require('../models/Order')
const OrderItem = require('../models/OrderItem')
const Product = require('../models/Product')

exports.getOrder = async (req,res) => {
    try{
        const orders = await Order.find({user:req.user})
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
        const user = req.user
        const orderExist = await Order.findOne({user:user,isPaid:false})
        // console.log(orderExist)
        if (!orderExist){
            console.log(" Not Found")
            const product = await Product.findById(req.body.products)

            const OrderItems = new OrderItem({
                products:product
            })
            
            const newOrderItem = await OrderItems.save()
            total = await  newOrderItem.generateOrderItemTotal()
            console.log(total)
            orderExists = new Order({
                user:req.user
            })
            orderExists.orderItems = newOrderItem
            // const 
            const creates = await orderExists.save()
            console.log(creates)
            res.status(201).json({
                success:true,
                total:total,
                count:creates.length,
                data:creates
            })
        } else {
            console.log("Found")
            const product = await Product.findById(req.body.products)
        const orderItems = await OrderItem.findOne({products:product})

        if (orderItems){
            // tou = 0
            orderItems.quantity += 1    
            orderItems.save()
            
            total = await  orderItems.generateOrderItemTotal()
            console.log(total)
            orderExist.orderItems = orderItems
            const create = await orderExist.save()
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
            
            const newOrderItem = await OrderItems.save()
            total = await  newOrderItem.generateOrderItemTotal()
            console.log(total)
            console.log(orderExist)
            const id = newOrderItem._id
            console.log(id)
            // const od = OrderItem.find
            orderExist.orderItems = orderExist.orderItems.concat(`${id}`)
            // const 
            const creates = await orderExist.save()
            // console.log(creates)
            res.status(201).json({
                success:true,
                total:total,
                data:creates
            })
        }
        }
    } catch(err){
        console.log(`err:${err}`)
        res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })   
    }
}