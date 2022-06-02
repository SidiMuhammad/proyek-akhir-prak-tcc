var express = require('express');
var router = express.Router();
var postController = require('../controllers/postControllers')

router.get('/', postController.readPostPage)
router.get('/create-post-page', postController.createPostPage)
router.get('/update-post-page/:id', postController.updatePostPage)
router.get('/read-post', postController.readPost)
router.post('/create-post', postController.createPost)
router.post('/get-post', postController.getPost)
router.put('/update-post', postController.updatePost)
router.delete('/delete-post', postController.deletePost)

module.exports = router
