var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers')

router.get('/', userController.readUserPage)
router.get('/create-user-page', userController.createUserPage)
router.get('/update-user-page/:id', userController.updateUserPage)
router.get('/read-user', userController.readUser)
router.post('/create-user', userController.createUser)
router.post('/get-user', userController.getUser)
router.put('/update-user', userController.updateUser)
router.delete('/delete-user', userController.deleteUser)

module.exports = router
