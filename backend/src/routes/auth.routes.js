const express = require('express');
const authController = require('../controllers/auth.controller.js');

const router = express.Router();

//user auth API
router.post('/user/register', authController.registerUser);
router.post('/user/login', authController.loginUser);
router.get('/user/logout', authController.logoutUser);


//food partner auth API

router.post('/food-Partner/register', authController.registerFoodPartner)
router.post('/food-Partner/login', authController.loginFoodPartner)
router.get('/food-Partner/logout', authController.logoutFoodPartner)
module.exports = router; 