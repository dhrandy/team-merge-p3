const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const childRestriction = new Schema({
   description: {
       type: String
   }
})

const childActivity = new Schema({
   description: {
       type: String
   },
   frequency: {
       type: Number
   },
   frequencyUnits: {
       type: String
   }
})

const PrescriptionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dosageStrength: {
        type: Number,
        required: true
    },
    dosageStrengthUnits: {
        type: String,
        required: true
    },
    frequency: {
        type: Number,
        required: true
    },
    frequencyUnits: {
        type: String,
        required: true
    },
    activityRestrictions: [childActivity],
    foodRestrictions: [childRestriction],
    medicationRestrictions: [childRestriction]

})

const Prescription = module.exports = mongoose.model("Prescription", PrescriptionSchema)