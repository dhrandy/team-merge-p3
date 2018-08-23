const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const childDay = new Schema({
   day: {
       type: String
   }
})

const childTime = new Schema({
   time: {
       type: String
   }
})

const childRestriction = new Schema({
   description: {
       type: String
   }
})

const childActivity = new Schema({
   description: {
       type: String
   }
})

const PrescriptionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dosage: {
        type: String,
        required: false
    },
    dosageDays: [childDay],
    dosageTime: [childTime],
    timeZone: {
       type: String
    },
    activityRestrictions: [childActivity],
    foodRestrictions: [childRestriction],
    medicationRestrictions: [childRestriction]

})

const Prescription = module.exports = mongoose.model("Prescription", PrescriptionSchema)