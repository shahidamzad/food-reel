const express = require("express")
const foodController = require('../controllers/food.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router();


/* /api/food */

router.post('/', authMiddleware.authFoodPartnerWiddleware, foodController.createFood)






module.exports = router