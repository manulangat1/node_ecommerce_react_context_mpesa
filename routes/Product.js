const express = require('express')
const { getProduct , postProduct } = require('../controllers/Product')
const auth = require('../middlewares/isAuth')
const router = express.Router()

router.route('/').get(getProduct).post(auth,postProduct)

module.exports = router