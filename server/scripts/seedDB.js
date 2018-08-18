require('dotenv').config();
const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/p3"
);

const prescriptionSeed = [
  {
    name: "Synthroid",
    dosage: "50 mg",
    dosageDays: [
        {day: "Mon"},
        {day: "Wed"},
        {day: "Thu"}
    ],
    dosageTime: [
        {time: "08:00"},
        {time: "12:00"},
        {time: "18:00"}
    ],
    timezone: "ET",
    foodRestrictions: [
        {description: "Avoid Orange Juice"},
        {description: "Take with food"}
    ],
    medicationRestrictions: [],
    activityRestrictions: [ {description: "Do Not drive for 1 hour"} ]
  },
  {
    name: "Crestor",
    dosage: "100 mg",
    dosageDays: [
        {day: "Mon"},
        {day: "Wed"},
        {day: "Thu"}
    ],
    dosageTime: [
        {time: "08:00"},
        {time: "12:00"},
        {time: "18:00"}
    ],
    timezone: "ET",
    foodRestrictions: [
        {description: "Take with food"}
    ],
    medicationRestrictions: [{description: "Do Not Take with Ibuprofen"}],
    activityRestrictions: []
  },
  {
    name: "Ventolin",
    dosage: "75 mg",
    dosageDays: [
        {day: "Mon"},
        {day: "Wed"},
        {day: "Thu"}
    ],
    dosageTime: [
        {time: "08:00"},
        {time: "12:00"},
        {time: "18:00"}
    ],
    timezone: "ET",
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