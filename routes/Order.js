const express = require('express')

const { getOrder,postOrder } = require('../controllers/Order')

const auth = require('../middlewares/isAuth')

const router = express.Router()

router.route('/').get(auth,getOrder).post(auth,postOrder)

module.exports = router