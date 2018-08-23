require('dotenv').config()
const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const passport = require("passport")
const mongoose = require("mongoose")
const users = require("./server/routes/api/users")
const prescriptions = require("./server/routes/api/prescriptions")
const moment = require('moment')


//CONNECT TO Mongo
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/p3")
    .catch( (err) => {
        console.log( "ERROR: " + err )
    })

const app = express();

const PORT = process.env.PORT || 3001

//SET STATIC FOLDER 
app.use(express.static(path.join(__dirname, 'public')))

//BODYPARSER CHEAT CODES

app.use(bodyParser.urlencoded({encoded: false}))

app.use(bodyParser.json())
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//PASSPORT
app.use(passport.initialize())
app.use(passport.session())

require("./server/config/passport")(passport)

//USER ROUTES
app.use("/api/users", users)
app.use("/api/prescriptions", prescriptions)

// INDEX ROUTE
app.get("/", (req, res) => {
  res.send("NO PAGE FOR YOU!")
})
///////////////////////////////////////////////////////////
// ***** CRONJOBjs START *****
const CronJob = require("cron").CronJob;

///////////////////////////////////////////////////////////////////////////////////////////////////
// Example that will run at the top and bottom of the hour  ( every 30 minutes )
//
//           new CronJob('0 */30* * * *', ()  => {.......
//
// Test below will run every 1 minute ( at 00:00:00, 00:01:00, 00:02:00, etc...)
///////////////////////////////////////////////////////////////////////////////////////////////////
const startCronJob = () => { 
  new CronJob('0 */30 * * * *', ()  => {
    CheckMeds()
    let newTime = new Date().toLocaleTimeString()
    console.log('TEXT THE CUSTOMERS!',newTime);
  }, null, true, 'America/New_York');
}

// ***** CRONGJOBjs END *****
///////////////////////////////////////////////////////////
const Cust = require("./server/models/user")
const Drugs = require("./server/models/prescription")
///////////////////////////////////////////////////////////
// ***** GET ALL CUSTOMERS AND CHECK TO SEND MESSAGE *****


let Customers = []

const CheckMeds = () => {
  let now = moment(new Date()).format("HH:mm")
  Cust.find({})
    .then(cust => {
      Customers.push(cust)
      Customers.map(x => {
        x.map(y => {                        //y IS EACH CUSTOMER
          let z = y.prescriptions           //z  IS EACH PERSCRIPTION
          for(i=0; i < z.length; i++) {
            Drugs.findById(z[i])
            .then(drug=> {
              drug.dosageTime.map(t =>{     //t IS DOSAGE TIME
                // console.log(t.time)
                // console.log(drug.name)
                // console.log(y.phone)
                // console.log(y.name)
                // console.log("*********************")
                console.log("This ran at " + now)
                if(now === t.time) {
                  sendTextMessage(drug.name, y.phone)
              }
              })
              
            })
          }
        })
      })
    })  
}
///////////////////////////////////////////////////////////

// ***** TWILLIO START ****
//////////////////////////////////////////////////////////
const twilio = require("twilio")

var accountSid = 'ACc119719431b92d82abb828b70d6a8956'  // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_TOKEN    // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken)

const sendTextMessage = (medication, phone) => {
  client.messages.create({
      body: 'Hello it is time to take ' +" " + medication + " " + "medication",
      to: "'+1" + phone + "'",  // Text this number
      from: '+19287234758' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid))
}


const TestMessage = () => {
  client.messages.create({
      body: 'TEST from the server',
      to: '+1',  // Text this number
      from: '+19287234758' // From a valid Twilio number
  })
  .then((message) => {
    console.log(message.sid)
  })
  .catch(e => { console.error('Got an error:', e.code, e.message); })
}


///////////////////////////////////////////////////////////
// ***** TWILLIO END  ****


//Server is listening
app.listen(PORT, () => {
  // CheckMeds() 
  // TestMessage()
  startCronJob()
  console.log(`Server listening on port ${PORT}!`);
});