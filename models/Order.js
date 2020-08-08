const mongoose = require('mongoose')


const OrderSchema = new  mongoose.Schema({
    orderItems:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "OrderIte,"
          }
    ],
    isPaid:{
        type:Boolean,
        options:[true,false],
        default:false
    }
})
module.exports = mongoose.model('Order',OrderSchema)