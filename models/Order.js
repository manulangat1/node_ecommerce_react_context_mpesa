const mongoose = require('mongoose')


const OrderSchema = new  mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "OrderItem,"
          }
    ],
    isPaid:{
        type:Boolean,
        options:[true,false],
        default:false
    }
})
module.exports = mongoose.model('Order',OrderSchema)