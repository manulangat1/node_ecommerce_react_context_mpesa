const express = require('express')
const { getOrderItem , postOrderItem} = require('../controllers/OrderItem')

const router = express.Router()

router.route('/').get(getOrderItem).post(postOrderItem)

module.exports = router 