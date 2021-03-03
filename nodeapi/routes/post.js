const express = require('express')
const {
  getPosts,
  createPost,
  postsByUser,
  postById,
  isPoster,
  deletePost,
  updatePost,
  photo,
  singlePost,
  like,
  unlike,
  comment,
  uncomment
} = require('../controllers/post')
const { requireSignin } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const { createPostValidator } = require('../validator/index')


const router = express.Router()

router.get('/posts', getPosts);

//like unlike
router.put("/post/like", requireSignin, like)
router.put("/post/unlike", requireSignin, unlike)

//comments
router.put("/post/comment", requireSignin, comment)
router.put("/post/uncomment", requireSignin, uncomment)

router.post('/post/new/:userId', requireSignin, createPost, createPostValidator);
router.get("/posts/by/:userId", postsByUser)
router.get("/post/:postId", singlePost)
router.put("/post/:postId", requireSignin, isPoster, updatePost)
router.delete("/post/:postId", requireSignin, isPoster, deletePost)

//photo
router.get("/post/photo/:postId", photo)


// if route contains userId the app will run userById(Id)
router.param('userId', userById)

// if route contains postId the app will run postById(Id)
router.param('postId', postById)

module.exports = router;


