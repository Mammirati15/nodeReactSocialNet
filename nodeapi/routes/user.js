const express = require('express')
const { userById, allUsers, getUser, updateUser } = require('../controllers/user')
const { requireSignin } = require('../controllers/auth')


const router = express.Router()



router.get("/users", allUsers)
router.get("/user/:userId", requireSignin, getUser)
router.put("/user/:userId", requireSignin, updateUser)

// if route contains userId the app will run userById(Id)
router.param('userId', userById)

module.exports = router;


