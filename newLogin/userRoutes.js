const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.get('/fetch',userController.getDetails);
router.post('/add',userController.postDetails);
router.post('/login', userController.loginUser);
module.exports = router;