const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const foodPartner = require('../models/foodpartner.modle');
const foodPartnerModle = require('../models/foodpartner.modle');
async function registerUser(req, res) {
    const { FullName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });
    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User Already Exists"
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        FullName,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRATE);

    res.cookie("token", token);
    res.status(201).json({
        message: "user registered successfully",
        user: {
            id: user._id,
            email: user.email,
            FullName: user.FullName,
        }
    });
}

async function loginUser(req, res) {

    const { email, password } = req.body;

    const user = await userModel.findOne({
        email
    })

    if (!user) {
        return res.status(400).json({
            message: " Invalid email or password "
        })
    }

    const isPasswordvalid = await bcrypt.compare(password, user.password)

    if (!isPasswordvalid) {
        return res.status(400).json({
            message: "invalid password "
        })
    }

    const token = jwt.sign({
        id: user._id,


    }, process.env.JWT_SECRATE)

    res.cookie("token", token)
    res.status(201).json({
        message: "user registered successfully",
        user: {
            id: user._id,
            email: user.email,
            FullName: user.FullName,
        }
    });

}

function logoutUser(req, res) {
    res.clearCookie("token");

    res.status(200).json({
        message: "logout from user successfully"
    });


}

async function registerFoodPartner(req, res) {

    const { name, email, password } = req.body;

    const isAccountAlreadyExits = await foodPartnerModle.findOne({
        email
    })
    if (isAccountAlreadyExits) {
        return res.status(400).json({
            message: "food partner account already exits"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModle.create({
        name,
        email,
        password: hashedPassword
    })
    const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRATE)

    res.cookie("token", token)
    res.status(200).json({
        message: "food Partner register successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name

        }
    })



}

async function loginFoodPartner(req, res) {
    const { email, password } = req.body;
    const foodPartner = await foodPartnerModle.findOne({
        email
    })
    if (!foodPartner) {
        return res.status(400).json({
            message: " Invalid email or password "
        })
    }

    const isPasswordvalid = await bcrypt.compare(password, foodPartner.password)

    if (!isPasswordvalid) {
        return res.status(400).json({
            message: "invalid password "
        })
    }

    const token = jwt.sign({
        id: foodPartner._id,


    }, process.env.JWT_SECRATE)

    res.cookie("token", token)
    res.status(201).json({
        message: "user login successfully",
        user: {
            id: foodPartner._id,
            email: foodPartner.email,
            Name: foodPartner.name
        }
    });

}


async function logoutFoodPartner(req, res) {
    res.clearCookie("token");

    res.status(200).json({
        message: "logout foodpartner successfully"
    });


}


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}