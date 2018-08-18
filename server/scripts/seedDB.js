require('dotenv').config();
const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/p3"
);

const prescriptionSeed = [
  {
    name: "Synthroid",
    dosageStrength: 50,
    dosageStrengthUnits: "mg",
    frequency: 4,
    frequencyUnits: "hours",
    foodRestrictions: [
        {description: "Avoid Orange Juice"},
        {description: "Take with food"}
    ],
    medicationRestrictions: [{}],
    activityRestrictions: [
        {description: "Do Not drive", frequency: 1, frequencyUnits: "hour"}
    ]
  },
  {
    name: "Crestor",
    dosageStrength: 100,
    dosageStrengthUnits: "mg",
    frequency: 8,
    frequencyUnits: "hours",
    foodRestrictions: [
        {description: "Take with food"}
    ],
    medicationRestrictions: [{description: "Do Not Take with Ibuprofen"}],
    activityRestrictions: []
  },
  {
    name: "Ventolin",
    dosageStrength: 50,
    dosageStrengthUnits: "mg",
    frequency: 3,
    frequencyUnits: "daily",
    foodRestrictions: [],
    medicationRestrictions: [{description: "Do Not Take with Ibuprofen"}],
    activityRestrictions: []
  }
];

for (let i=0; i<prescriptionSeed.length; i++) {
  db.Prescription
      .create(prescriptionSeed[i])
      .then( (dbPrescription) => {
          return db.User.updateMany( 
              {},
              {$push: {prescriptions: dbPrescription._id} },
              {new: true} )
      })
      .then( (dbUser) => {
          console.log(dbUser);
      })
      .catch( (err) => {
          console.log(err.message);
      })
}