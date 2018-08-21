require('dotenv').config()
const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")
const mongoose = require("mongoose")
const users = require("./server/routes/api/users")
const prescriptions = require("./server/routes/api/prescriptions")

const Cust = require("./server/models/user")


console.log(`DEBUG - server.js - ${process.env.MONGODB_URI} `)
//CONNECT TO Mongo
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/p3")
    .catch( (err) => {
        console.log( err )
    })

const app = express();

const PORT = process.env.PORT || 5000
//BRING IN CORS
app.use(cors())

//SET STATIC FOLDER 
app.use(express.static(path.join(__dirname, 'public')))

//BODYPARSER CHEAT CODES

app.use(bodyParser.urlencoded({encoded: false}))

app.use(bodyParser.json())


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
const startTimer = () => { 
  new CronJob('0 */30 * * * *', ()  => {
    let newTime = new Date().toLocaleTimeString()
    console.log('TEXT THE CUSTOMERS!',newTime);
    timer()
    // call the data base query to see if there is an event that needs to be triggered
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    axios.get('/user?ID=12345')
      .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });
    ///////////////////////////////////////////////////////////////////////////////////////////////////

  }, null, true, 'America/New_York');
}

// ***** CRONGJOBjs END *****
///////////////////////////////////////////////////////////
const findAll = () => {
  Cust.find({})
  .populate("perscriptions")
  .then(users => {
    console.log(users)
  })
}

///////////////////////////////////////////////////////////
// ***** MOMENTjs START *****
const moment = require('moment')


const timer = () => {
  let now = moment(new Date()).format("HH:mm")
  User.find({})
  .populate("perscriptions")
  .then(users => {
    console.log(users)
  })
  if(test === now) {
    sendTestMessage(now, Prescription.name, )
  }
}
  
// ***** MOMENTjs END *****
///////////////////////////////////////////////////////////
// ***** TWILLIO START ****
//////////////////////////////////////////////////////////
const twilio = require("twilio")

var accountSid = 'ACc119719431b92d82abb828b70d6a8956'  // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_TOKEN    // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken)

const sendTestMessage = (now, medication, custPhone) => {
  client.messages.create({
      body: 'Hello it is' + now + "it is time to take" + medication,
      to: custPhone,  // Text this number
      from: '+19287234758' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid))
}


///////////////////////////////////////////////////////////
// ***** TWILLIO END  ****
//Server is listening
app.listen(PORT, () => {
  findAll()
  // startTimer()
  console.log(`Server listening on port ${PORT}!`);
});