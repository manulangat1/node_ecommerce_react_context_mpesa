const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path:'./config/config.env'})
// import db file
const connectDB = require('./config/db')

//import routes 
const products = require('./routes/Product')
const orderItem = require('./routes/orderItem')
const order = require('./routes/Order')
const user = require('./routes/User')


//load db 
connectDB()


const app = express()

//body parser
app.use(express.json())
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}
//routes here
app.use('/api/v1/products/',products)
app.use('/api/v1/orderItems/',orderItem)
app.use('/api/v1/order/',order)
app.use('/auth/v1/',user)

const PORT = process.env.PORT

app.listen(PORT,console.log(`Amazona running in:${process.env.NODE_ENV} on port:${PORT}`.yellow.underline))