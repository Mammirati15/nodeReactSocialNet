const express = require('express')
const { signUp, signin, signout } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const { userSignupValidator } = require('../validator/index')


const router = express.Router()


router.post("/signup", userSignupValidator, signUp);
router.post("/signin", signin);
router.get("/signout", signout)

// if route contains userId the app will run userById(Id)
router.param('userId', userById)

module.exports = router;


