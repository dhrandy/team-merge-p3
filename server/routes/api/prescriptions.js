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
    Prescription
        .create(req.body)
        .then( (dbPrescription) => {
	        res.json(dbPrescription)
        })
		.catch(err => res.status(422).json(err));
})

////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////
router.put("/updatePrescription/:id", (req,res) => {
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
    Prescription
        .findByIdAndUpdate(
			req.params.id, 
			{$push: req.body},
			{new: true}
		)
        .then( (dbPrescription) => {
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
	        res.json(dbUser)
        })
		.catch(err => res.status(422).json(err));
})

////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////
router.delete("/removePrescriptionFromUser/:email", (req,res) => {
    const email = req.params.email
    const pID = req.body._id

    Prescription
        .remove( {_id: pID} )
        .then( (dbPrescription) => {
            User
            .findOne({email})
            .then( (dbUser) => {
                let index = dbUser.prescriptions.indexOf(pID);
                if (index > -1) {
                    dbUser.prescriptions.splice(index, 1)
                    User
                        .update({email}, dbUser)
                        .then( (uResponse) => res.send(uResponse) )
                }
                else {
                    res.json("Prescription was not found")
                }
            }) 
        })
        .catch(err => res.status(422).json(err))
})

module.exports = router