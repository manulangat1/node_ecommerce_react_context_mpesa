const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        })
        console.log(`MongoDB connected at ${conn.connection.host}`.cyan.bold)
    } catch(err){
        console.error(`${err}`)
        process.exit(1)
    }
}
module.exports =  connectDB