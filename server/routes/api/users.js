require('dotenv').config()
const express = require("express")
const router = express.Router()
const passport = require("passport")
const jwt = require("jsonwebtoken")

const User = require("../../models/user")

//Register
router.post("/register", (req, res, next) => {
    let newUser = new User ({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: "Failed to register User"})
        }
        else {
            res.json({success: true, msg: "User registered"})
        }
    })
})

//AUTHENTICATION
router.post("/authenticate", (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    User.getUserByUsername (username, (err, user) => {
        if(err) throw err
        if(!user) {
            return res.json({sucess: false, msg: "User not found"})
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err
            if(isMatch) {
console.log(`DEBUG - users.js - ${process.env.MONGODB_SECRET}`);
                const token = jwt.sign(user.toJSON(), process.env.MONGODB_SECRET, {
                    expiresIn:86400 // ONE DAY WORTH OF SECONDS
                })

                res.json({
                    success: true,
                    toekn: "JWT " + token,
                    user: {
                        id: user.id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                })
            }
            else {
                return res.json({sucess: false, msg: "Password is Invalid"})
            }
        })
    })
})

//profile
router.get("/profile", passport.authenticate("jwt", {session:false}), (req, res, next) => {
    res.json({user: req.user})
})

module.exports = router