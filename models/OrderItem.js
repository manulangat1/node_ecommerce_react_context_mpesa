const mongoose = require('mongoose')
const Product = require('./Product')
const OrderItemSchema = new mongoose.Schema({
    quantity:{
        type:Number,
        default:1,
        required:[true,'Kindly input value']
    },
    products:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
    },
    
})
OrderItemSchema.methods.generateOrderItemTotal = async function(){
    //Generate an auth token for the user 
    const orderItem = this 
    total = 0
    const total_no = orderItem.products
    const pro = await Product.findById(total_no)
    tots = pro.price * orderItem.quantity
    console.log(tots)
    return tots
}
const OrderItem = mongoose.model('OrderItem',OrderItemSchema)
module.exports = OrderItem