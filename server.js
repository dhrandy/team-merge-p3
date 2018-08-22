require('dotenv').config()
const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const passport = require("passport")
const mongoose = require("mongoose")
const users = require("./server/routes/api/users")
const prescriptions = require("./server/routes/api/prescriptions")


//CONNECT TO Mongo
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/p3")
    .catch( (err) => {
        console.log( err )
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
const startTimer = () => { 
  new CronJob('0 */30 * * * *', ()  => {
    let newTime = new Date().toLocaleTimeString()
    console.log('TEXT THE CUSTOMERS!',newTime);
    timer()
    // call the data base query to see if there is an event that needs to be triggered
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // axios.get('/user?ID=12345')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    // .catch(function (error) {
    //   console.log(error);
    // });
    ///////////////////////////////////////////////////////////////////////////////////////////////////

  }, null, true, 'America/New_York');
}

// ***** CRONGJOBjs END *****
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// ***** MOMENTjs START *****
const moment = require('moment')


const timer = () => {
  let test = "12:00"
  let now = moment(new Date()).format("HH:mm")
  console.log(now)
  if(test === now) {
    sendTestMessage()
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

const sendTestMessage = () => {
  client.messages.create({
      body: 'Hello from Node',
      to: '+18454221708',  // Text this number
      from: '+19287234758' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid))
}


///////////////////////////////////////////////////////////
// ***** TWILLIO END  ****
//Server is listening
app.listen(PORT, () => {
  startTimer()
  console.log(`Server listening on port ${PORT}!`);
});