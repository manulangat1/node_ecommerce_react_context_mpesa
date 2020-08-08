const mongoose = require('mongoose')

const OrderItemSchema = new mongoose.Schema({
    quantity:{
        type:Number,
        required:[true,'Kindly input value']
    },
    products:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
    }
})
module.exports = mongoose.model('OrderItem',OrderItemSchema)