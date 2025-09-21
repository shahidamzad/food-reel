<<<<<<< HEAD
const express = require("express")
const foodController = require('../controllers/food.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router();


const express = require('express');
const foodController = require("../controllers/food.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const router = express.Router();
const multer = require('multer');


const upload = multer({
    storage: multer.memoryStorage(),
})
>>>>>>> a961b6d (backend complete)


<<<<<<< HEAD
router.post('/', authMiddleware.authFoodPartnerWiddleware, foodController.createFood)
=======
/* POST /api/food/ [protected]*/
router.post('/',
    authMiddleware.authFoodPartnerMiddleware,
    upload.single("mama"),
    foodController.createFood)
>>>>>>> a961b6d (backend complete)


/* GET /api/food/ [protected] */
router.get("/",
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems)


router.post('/like',
    authMiddleware.authUserMiddleware,
    foodController.likeFood)


router.post('/save',
    authMiddleware.authUserMiddleware,
    foodController.saveFood
)


router.get('/save',
    authMiddleware.authUserMiddleware,
    foodController.getSaveFood
)



module.exports = router