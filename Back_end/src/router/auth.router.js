const express = require('express');
const authController = require('../controller/auth.controller');

const router = express.Router();


router.get('/api/v1/', authController.getAllUsers);
router.post('/api/v1/register', authController.registerUser)
router.post('/api/v1/login', authController.loginUser)




module.exports = router;
