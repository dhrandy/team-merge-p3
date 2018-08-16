require('dotenv').config()
const express = require("express")
const router = express.Router()
const User = require("../../models/user")
const Prescription = require("../../models/prescription")

////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////
router.get("/getUserData/:id", (req,res) => {
    let email = req.params.id;
    User.findOne({email})
		.populate('prescriptions')
		.then( dbUser => {
			res.json(dbUser)
		})
		.catch(err => res.status(422).json(err));
})

////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////
router.put("/createPrescription", (req,res) => {
	console.log(req.body)
    Prescription
        .create(req.body)
        .then( (dbPrescription) => {
            console.log(dbPrescription);
	        res.json(dbPrescription)
        })
		.catch(err => res.status(422).json(err));
})

////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////
router.put("/updatePrescription/:id", (req,res) => {
	console.log(req.body)
    Prescription
        .findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then( (dbPrescription) => {
	        res.json(dbPrescription)
        })
		.catch(err => res.status(422).json(err));
})


////////////////////////////////////////////////////////////////////////////
// Will add a restriction to the prescription
//
// if the ID is not found
//    +his will not insert a document and will return Null
////////////////////////////////////////////////////////////////////////////
router.put("/updatePrescriptionRestriction/:id", (req,res) => {
	console.log(req.body)
    Prescription
        .findByIdAndUpdate(
			req.params.id, 
			{$push: req.body},
			{new: true}
		)
        .then( (dbPrescription) => {
            console.log(dbPrescription);
	        res.json(dbPrescription)
        })
		.catch(err => res.status(422).json(err));
})

////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////
router.put("/addPrescriptionToUser/:email", (req,res) => {
	User
	    .updateOne( 
            {email: req.params.email},
            {$push: {prescriptions: req.body._id} },
            {new: true} )
        .then( (dbUser) => {
            console.log(dbUser);
	        res.json(dbUser)
        })
		.catch(err => res.status(422).json(err));
})

module.exports = router