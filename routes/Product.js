const express = require('express')
const { getProduct , postProduct } = require('../controllers/Product')
const router = express.Router()

router.route('/').get(getProduct).post(postProduct)

module.exports = router