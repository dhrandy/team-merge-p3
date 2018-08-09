require('dotenv').config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors")
const passport = require("passport")
const mongoose = require("mongoose")
// const routes = require("./server/routes");

const users = require("./server/routes/api/users");

// DB CONFIG
const db = require("./server/config/keys").mongoURI

//CONNECT TO Mongo
mongoose
    // .connect(process.env.MONGODB_URI || "mongodb://localhost/p3")
    .connect(db)
    .catch( (err) => {
        console.log( err );
    });

const app = express();

const PORT = process.env.PORT || 5000;

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

// INDEX ROUTE
app.get("/", (req, res) => {
  res.send("NO PAGE FOR YOU!")
})

//Server is listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});