const express = require('express')
const {getPosts, createPost, postsByUser} = require('../controllers/post')
const { requireSignin } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const { createPostValidator } = require('../validator/index')


const router = express.Router()

router.get('/', getPosts);
router.post('/post/new/:userId', requireSignin, createPost, createPostValidator);
router.get("/posts/by/:userId", requireSignin, postsByUser)
// if route contains userId the app will run userById(Id)
router.param('userId', userById)

module.exports = router;


