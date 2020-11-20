const express = require('express')
const { userById, allUsers } = require('../controllers/user')



const router = express.Router()



router.get("/users", allUsers)

// if route contains userId the app will run userById(Id)
router.param('userId', userById)

module.exports = router;


