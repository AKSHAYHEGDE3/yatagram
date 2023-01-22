const User = require("../models/User")
const jwt = require("jsonwebtoken");
const router = require("../routes/messageRoutes");
const { verifyToken } = require('../middleware/verifyToken')

const maxAge = 5 * 24 * 60 * 60;

const key = process.env.SECRET_KEY
const createJWT = (id, isAdmin) => {
    console.log(key)
    return jwt.sign({ id, isAdmin }, key, {
        expiresIn: maxAge
    })
}

const alertError = (err) => {
    let errors = { name: '', email: '', password: '' }

    if (err.message === 'incorrect email') {
        errors.email = 'This email not found';
    }
    if (err.message === 'incorrect pwd') {
        errors.password = 'The password is incorrect';
    }
    if (err.code === 11000) {
        errors.email = 'This email already registered';
        return errors;
    }
    if (err.message.includes('user validation failed')) {

        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}


module.exports.signin = async (req, res) => {

    const { password, email } = req.body;

    console.log(password, email)

    try {
        const user = await User.login(email, password);

        const token = createJWT(user._id, user.isAdmin)
        console.log('__________')
        console.log(user)
        //   res.cookie("jwt",token,{maxAge:maxAge*1000,httpOnly:true})
        res.status(201).send({ ...user, token })
    }
    catch (err) {

        let errors = alertError(err)
        console.log(errors)
        res.status(400).send({ errors })
    }


}

// module.exports.logout=async (req,res)=>{
// // console.log("logout")
//     res.cookie('jwt', "", { maxAge: 1 })
//     res.status(200).json({ logout: true })

//     }

module.exports.signup = async (req, res) => {


    try {
        const { name, password, email, college_id, isAdmin } = req.body;
        // console.log(req.body)
        const newUser = new User({ name: req.body.name, password: req.body.password, email: req.body.email, college_id: req.body.college_id, isAdmin: req.body.isAdmin })
        const savedUser = await newUser.save()

        const token = createJWT(newUser._id, newUser.isAdmin)
        // res.cookie("jwt",token,{maxAge:maxAge*1000,httpOnly: true,})
        const { ...info } = savedUser._doc
        const data = { ...info, token }
        console.log(data);
        res.status(201).send({ user: data })
    }
    catch (err) {

        let errors = alertError(err)

        res.status(400).json({ errors })
    }


}

module.exports.verifyUser = async (req, res) => {
    console.log("---auth---")
    console.log(req.user)
    if (req.user) {
        try {
            console.log(req.user)
            const user = await User.findById(req.user.id)
            res.status(200).json(user)
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }

    } else {
        // res.status(404).send("no token")
        console.log("no token")
    }
}

module.exports.updateUser = async (req, res) => {

    const user1 = await User.findByIdAndUpdate(req.body.user_id, {
        bio: req.body.bio,
        city: req.body.city,
        department: req.body.department,
        name: req.body.name
    }, { new: true, useFindAndModify: false }, (err, docs) => {
        if (err) {
            console.log(err)
        }


    })

    return res.status(200).send(user1)
}
