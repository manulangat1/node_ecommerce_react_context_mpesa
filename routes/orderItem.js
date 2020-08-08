const express = require('express')
const { getOrderItem } = require('../controllers/OrderItem')

const router = express.Router()

router.route('/').get(getOrderItem)

module.exports = router 