const express = require('express')
const { registerUser,activateUser,loginUser} = require('../controllers/User')

const router = express.Router()

router.route('/').post(registerUser)
router.route('/login/').post(loginUser)
router.route('/:activationString').get(activateUser)

module.exports = router