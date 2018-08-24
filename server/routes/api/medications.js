require('dotenv').config()
const express = require("express")
const router = express.Router()
const Medication = require("../../models/medication")

////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Due to the size of some of the drug interactions we are returning a max of 11
//  ( add message to user that more than 10 interactions were found )
//
////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/getDrugInteractions/:drug", (req,res) => {
    const drug = req.params.drug
    console.log('DEBUG - ', drug)
    let medName = ""
    let results = []

    Medication
        .find({productNames: drug}, {name: 1})
        .then( dbMed1 => {
            console.log(dbMed1)
            if ( dbMed1 ) {
                medName = dbMed1[0].name
                Medication
                    .findOne({name: medName}, {drugInteractions: 1})
                    .then( dbRes => {
                        if (dbRes.drugInteractions.length > 10) results = dbRes.drugInteractions.slice(0,11)
                        else results = dbRes.drugInteractions
                        res.json(results)
                    })
            }
            else {
                Medication
                    .find({name: drug}, {name: 1})
                    .then( dbMed2 )
                        if ( dbMed2 ) {
                            medName = drug
                            res.json(`Medical Name: ${medName}`)
                            Medication
                                .findOne({name: medName}, {drugInteractions: 1})
                                .then( dbRes => {
                                    if (dbRes.drugInteractions.length > 10) results = dbRes.drugInteractions.slice(0,11)
                                    else results = dbRes.drugInteractions
                                    results = dbRes.drugInteractions.slice(0,11)
                                    res.json(results)
                                })
                        }
                        else {
                            res.json(results)
                        }
            }
        })
        .catch(err => res.status(422).json(err))
})

module.exports = router