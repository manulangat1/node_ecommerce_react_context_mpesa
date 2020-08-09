const express = require('express')
const { logoutUser, registerUser,activateUser,loginUser,loadUser} = require('../controllers/User')
const auth = require('../middlewares/isAuth')
const router = express.Router()

router.route('/').post(registerUser)
router.route('/login/').post(loginUser)
router.route('/user/').get(auth,loadUser)
router.route('/:activationString').get(activateUser)
router.route('/logout/').post(auth,logoutUser)
module.exports = router