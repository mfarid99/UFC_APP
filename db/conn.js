require("dotenv").config();
const {MONGODBURI} = process.env;
const mongoose = require("mongoose");
const config = {useNewUrlParser: true, useUnifiedTopology: true };


mongoose.connect(MONGODBURI, config);
// mongoose.set("useCreateIndex", true);

///////////////////////////////////////
// DATABASE EVENTS
///////////////////////////////////////
mongoose.connection
.on("open", () => 
  console.log("YOU ARE CONNECTED TO MONGO"))
.on("close", () => 
    console.log("YOU ARE DISCONNECTED TO MONGO"))
.on("error", (err) => 
    console.log(err));

///////////////////////////////
// EXPORT CONNECTION TO USE IN OTHER SCRIPTS
//////////////////////////////
module.exports = mongoose;
