const express = require('express')
const { signUp, signin } = require('../controllers/auth')

const { userSignupValidator } = require('../validator/index')


const router = express.Router()


router.post("/signup", userSignupValidator, signUp);
router.post("/signin", signin);
module.exports = router;


