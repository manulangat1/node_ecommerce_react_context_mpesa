const express = require('express')

const { getOrder,postOrder } = require('../controllers/Order')

const router = express.Router()

router.route('/').get(getOrder).post(postOrder)

module.exports = router