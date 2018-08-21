const mongoose = require("mongoose")

const Schema = mongoose.Schema

const childDosage = new Schema({
    form: {
        type: String,
        required: false,
        unique: false
    },
    route: {
        type: String,
        required: false,
        unique: false
    },
    strength: {
        type: String,
        required: false,
        unique: false
    }
})

const childFoodInteraction = new Schema({
    description: {
        type: String
    }
})

const childDrugInteraction = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

const MedicationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    indication: {
        type: String,
        required: false,
        default: "",
        unique: false
    },
    productNames:[{type: String}],
    dosages: [childDosage],
    foodInteractions: [childFoodInteraction],
    drugInteractions: [childDrugInteraction]
})

const Medication = module.exports = mongoose.model("Medication", MedicationSchema)