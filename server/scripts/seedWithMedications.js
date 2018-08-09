//require('dotenv').config();
const mongoose = require("mongoose");
const db = require("../models");
const fs = require("fs")
const sax = require("sax"), 
    strict = true,
    parser = sax.parser(strict);

let recCount = 0;
let writeRecCount = 0;
let currentStruct = [];

let medication = {
    name: "",
    indication: "",
    productNames: [],
    dosages: [],
    foodInteractions: [],
    drugInteractions: []
}

let dosage = {
    form: "",
    route: "",
    strength: ""
}

let foodInteraction = {
    description: ""
}

let drugInteraction = {
    name: "",
    description: ""
}


initMedication = () => {
    medication.name = ""
    medication.indication = ""
    medication.productNames = []
    medication.dosages = []
    medication.foodInteractions = []
    medication.drugInteractions = []
}

initDosage = () => {
    dosage.form = ""
    dosage.route = ""
    dosage.strength = ""
}

initFoodInteraction = () => {
    foodInteraction.description = ""
}

initDrugInteraction = () => {
    drugInteraction.name = ""
    drugInteraction.description = ""
}

// stream usage
// takes the same options as the parser
// const saxStream = require("sax").createStream(strict, options)
const saxStream = require("sax").createStream(strict)
saxStream.on("error", (err) => {
  // unhandled errors will throw, since this is a proper node
  // event emitter.
  console.error("error!", err)
  // clear the error
  this._parser.error = null
  this._parser.resume()
})

///////////////////////////////////////////////////////////////////////////////////////////////////
// XML parser' error handler
///////////////////////////////////////////////////////////////////////////////////////////////////
saxStream.onerror = (err) => {
    console.log('DEBUG saxStream - ERROR =', err)
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// XML txt handler
///////////////////////////////////////////////////////////////////////////////////////////////////
saxStream.ontext = (txt) => {

    //
    // if the text is not all whitespace
    //
    if ( txt.trim().length ) {

        let cStruct = currentStruct.join('.')
        switch (cStruct) {
            case "drugbank.drug.name":
                medication.name = txt
                break
            case "drugbank.drug.indication":
                medication.indication = txt
                break
            case "drugbank.drug.products.product.name":
                medication.productNames.indexOf(txt) === -1 ? medication.productNames.push(txt) : null
                break
            case "drugbank.drug.dosages.dosage.form":
                dosage.form = txt
                break
            case "drugbank.drug.dosages.dosage.route":
                dosage.route = txt
                break
            case "drugbank.drug.dosages.dosage.strength":
                dosage.strength = txt
                break
            case "drugbank.drug.food-interactions":
                foodInteraction.description = txt
                break
            case "drugbank.drug.drug-interactions.drug-interaction.name":
                drugInteraction.name = txt
                break
            case "drugbank.drug.drug-interactions.drug-interaction.description":
                drugInteraction.description = txt
                break
        }

    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// XML open tag handler
///////////////////////////////////////////////////////////////////////////////////////////////////
saxStream.onopentag = (tag) => {
    currentStruct.push(tag.name)
    //if ( tag.name.includes('product') ) console.log( currentStruct )
    switch (tag.name) {
        case "dosage":
            initDosage() 
            break
        case "food-interactions":
            initFoodInteraction() 
            break
        case "drug-interaction":
            initDrugInteraction() 
            break
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// XML close tag handler
///////////////////////////////////////////////////////////////////////////////////////////////////
saxStream.onclosetag = (tag) => {
    currentStruct.pop()
    //
    // record medication and reset to an empty state unpon the close of the "drugbank.drug"
    //
    if ( currentStruct == "drugbank" ) {
        ++recCount;
        writeMedToDB( medication )
        initMedication();
    }
    else if ( tag  == "dosage" ) {
       medication.dosages.push(dosage)
       dosage = {}
    }
    else if ( tag  == "food-interactions" ) {
       medication.foodInteractions.push(foodInteraction)
       foodInteraction = {}
    }
    else if ( tag  == "drug-interaction" ) {
       medication.drugInteractions.push(drugInteraction)
       drugInteraction = {}
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// XML attribute handler
///////////////////////////////////////////////////////////////////////////////////////////////////
saxStream.onattribute = (attr) => {
    //console.log('DEBUG saxStream - Attribute =', attr)
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// XML end
///////////////////////////////////////////////////////////////////////////////////////////////////
saxStream.onend = () => {
    //console.log('DEBUG saxStream - stream end')
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// write a collection
///////////////////////////////////////////////////////////////////////////////////////////////////
writeMedToDB = (med) => {

  db.Medication
      .create(med)
      .then( (dbMed) => {
          ++writeRecCount;
      })
      .catch( (err) => {
          console.log(err.message);
      })
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/p3"
);

fs.createReadStream("./DrugBank/fullDatabase.xml")
  .pipe(saxStream)
  .on("error", (err) => {
      console.log("DEBUG - fs - ERROR =", err.message)
  })
  .on("end", () => {
      console.log( 'END ', recCount, writeRecCount )
  })