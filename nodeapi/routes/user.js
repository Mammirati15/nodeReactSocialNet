const express = require('express')
const { userById, allUsers, getUser, updateUser, deleteUser, userPhoto, addFollowing, addFollower } = require('../controllers/user')
const { requireSignin } = require('../controllers/auth')


const router = express.Router()

router.put('/user/follow', requireSignin, addFollowing, addFollower)

router.get("/users", allUsers)
router.get("/user/:userId", requireSignin, getUser)
router.put("/user/:userId", requireSignin, updateUser)
router.delete("/user/:userId", requireSignin, deleteUser)
//photo
router.get("/user/photo/:userId", userPhoto)

// if route contains userId the app will run userById(Id)
router.param('userId', userById)

module.exports = router;


