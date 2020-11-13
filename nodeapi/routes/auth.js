const express = require('express')
const { signUp } = require('../controllers/auth')
//const validator = require('../validator/index')


const router = express.Router()


router.post("/signup", signUp);

module.exports = router;


