const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const path = require('path')
// import db file
const connectDB = require('./config/db')
dotenv.config({path:'./config/config.env'})
//load db 
connectDB()


const app = express()


if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

app.get('/', (req,res) => res.send("Hello"))

const PORT = process.env.PORT

app.listen(PORT,console.log(`Amazona running in:${process.env.NODE_ENV} on port:${PORT}`.yellow.underline))