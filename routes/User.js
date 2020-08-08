const express = require('express')
const { registerUser,activateUser} = require('../controllers/User')

const router = express.Router()

router.route('/').post(registerUser)
router.route('/:activationString').get(activateUser)
module.exports = router