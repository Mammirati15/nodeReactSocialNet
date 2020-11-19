const express = require('express')
const {getPosts, createPost} = require('../controllers/post')
const { requireSignin } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const { createPostValidator } = require('../validator/index')


const router = express.Router()

router.get('/', requireSignin, getPosts);
router.post('/post', createPostValidator, createPost);

// if route contains userId the app will run userById(Id)
router.param('userId', userById)

module.exports = router;


