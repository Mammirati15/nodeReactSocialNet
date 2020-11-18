const express = require('express')
const { signUp, signin, signout } = require('../controllers/auth')

const { userSignupValidator } = require('../validator/index')


const router = express.Router()


router.post("/signup", userSignupValidator, signUp);
router.post("/signin", signin);
router.get("/signout", signout)

module.exports = router;


