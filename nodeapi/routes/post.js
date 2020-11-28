const express = require('express')
const {getPosts, createPost, postsByUser, postById, isPoster, deletePost, updatePost} = require('../controllers/post')
const { requireSignin } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const { createPostValidator } = require('../validator/index')


const router = express.Router()

router.get('/', getPosts);
router.post('/post/new/:userId', requireSignin, createPost, createPostValidator);
router.get("/posts/by/:userId", postsByUser)
router.put("/post/:postId", requireSignin, isPoster, updatePost)
router.delete("/post/:postId", requireSignin, isPoster, deletePost)

// if route contains userId the app will run userById(Id)
router.param('userId', userById)

// if route contains userId the app will run postById(Id)
router.param('postId', postById)

module.exports = router;


