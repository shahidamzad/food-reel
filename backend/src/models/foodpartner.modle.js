const mongoose = require("mongoose");


const foodPartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

const foodPartnerModle = mongoose.model("foodPartner", foodPartnerSchema)

module.exports = foodPartnerModle