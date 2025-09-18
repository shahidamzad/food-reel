const foodPartnerModle = require("../models/foodpartner.modle")
const jwt = require("jsonwebtoken")


async function authFoodPartnerWiddleware(req, res, next) {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRATE)
        const foodPartner = await foodPartnerModle.findById(decoded.id);

        req.FoodPartner = foodPartner

        next()

    } catch (error) {
        return res.status(401).json({
            message: 'invalid token '
        })
    }
}


module.exports = {
    authFoodPartnerWiddleware
}