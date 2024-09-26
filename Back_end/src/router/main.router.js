const express = require('express');
const authController = require('../controller/auth.controller');
const router = express.Router();



router.get('/api/v1/', userController.getAllUsers);
router.get('/api/v1/getallproduct', userController.getAllProducts);

// router.get('/api/v1/', authController.getAllUsers);




module.exports = router;
