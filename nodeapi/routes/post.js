const express = require('express')
const {getPosts, createPost} = require('../controllers/post')
const { requireSignin } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const { createPostValidator } = require('../validator/index')


const router = express.Router()

router.get('/', getPosts);
router.post('/post', requireSignin, createPostValidator, createPost);

// if route contains userId the app will run userById(Id)
router.param('userId', userById)

module.exports = router;


