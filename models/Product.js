const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    slug:{
        type:String,
        required:[true,'Pass in a value']
    },
    name:{
        type:String,
        required:[true,'Pass in a value']
    },
    price:{
        type:Number,
        required:[true,'Pass in a value']
    },

})
module.exports = new mongoose.model('Product',ProductSchema)