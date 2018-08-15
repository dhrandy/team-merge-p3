require('dotenv').config()
const express = require("express")
const router = express.Router()
const passport = require("passport")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")



const User = require("../../models/user")
const Prescription = require("../../models/prescription")


// **** REGISTER ****
//@route				POST api/users/register
//@description		Register user
//@access			Public
router.post("/register", (req, res) => {
	console.log('DEBUG - routes/api/users.js register', req.body)
	const {errors, isValid} = validateRegisterInput(req.body)
	if(!isValid) {
	    console.log('DEBUG - routes/api/users.js register', errors)
		return res.status(400).json(errors)
	}
	//Check if user exists
	User.findOne({email: req.body.email})
		.then(user => {
			if(user) {
				errors.email = "Email already exists"
				console.log(errors.email)
				return res.status(400).json(errors)
			}
			else {
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password
				})

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if(err) throw err
						newUser.password = hash
						newUser.save()
							.then(user => { res.json(user) })
							.catch(err => { res.json(err) })
					})
				})
			}
		})
})

// **** AUTHENTICATE ****
//@route    		POST api/users/authenticate
//@description		Authenticate user and returns JWT token
//@access			Public
router.post("/authenticate", (req, res, next) => {
	const {errors, isValid} = validateLoginInput(req.body)
	if(!isValid) {
		return res.status(400).json(errors)
	}

	const email = req.body.email
	const password = req.body.password

	//find user
	User.findOne({email})
		.then(user => {
			//Check for user
			if(!user) {
				return res.status(404).json({email: "User email not found"})
			}
			//Check password
			else {
				bcrypt.compare(password, user.password)
					.then(isMatch => {
						if(isMatch) {
							const payload = {id: user.id, name: user.name}

							//Sign Token
							jwt.sign(payload, process.env.MONGODB_SECRET, {expiresIn: 86400}, (err, token) => {
								console.log(token)
								res.json({
									success: true,
									token: "Bearer " + token 
								})
							})
						}
						else {
							return res.status(400).json({password: "Invalid Password"})
						}
					})
			}
		})
})


//profile
router.get("/profile", passport.authenticate("jwt", {session:false}), (req, res, next) => {
    res.json({user: req.user})
})

// **** Current ****
//@route				GET api/users/current
//@description		Return current user
//@access			Private
router.get("/current", passport.authenticate("jwt", {session:false}), (req, res, next) => {
	res.json({
		id: req.user.id,
		name: req.user.name,
		email: req.user.email,
		perscription: req.user.perscriptions
	})
})

////////////////////////////////////////////////////////////////////////////
// Please do not remove
//
//Test user Data pull
// TODO double check that this is the correct location for this code
//
////////////////////////////////////////////////////////////////////////////
router.get("/getUserData/:id", (req,res) => {
	console.log( 'DEBUG - getUserData ', req.params.id );
	let email = req.params.id;
	User.findOne({email})
		.populate('prescriptions')
		.then( dbUser => {
			console.log(dbUser)
			res.json(dbUser)
		})
 })

module.exports = router