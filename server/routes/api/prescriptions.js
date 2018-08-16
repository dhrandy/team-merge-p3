require('dotenv').config()
const express = require("express")
const router = express.Router()
const User = require("../../models/user")
const Prescription = require("../../models/prescription")

////////////////////////////////////////////////////////////////////////////
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