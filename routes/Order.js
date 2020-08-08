const express = require('express')

const { getOrder } = require('../controllers/Order')

const router = express.Router()

router.route('/').get(getOrder)

module.exports = router