const foodModel = require('../models/food.modle');

async function createFood(req, res) {

    console.log(req.foodPartner)
        console.log(req.body);
        
    

    res.send("food is created")
}









module.exports = {
    createFood
};