const express = require('express')
const { getProduct } = require('../controllers/Product')
const router = express.Router()

router.route('/').get(getProduct)

module.exports = router