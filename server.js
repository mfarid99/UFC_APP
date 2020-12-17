require("dotenv").config();
const { PORT, NODE_ENV} = process.env;
const express = require("express");
const app = express();
const mongoose = require("./db/conn");
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = require("./config/cors");
const AuthRouter = require("./controllers/user");
const NoteRouter = require("./controllers/notes")
const auth = require("./auth")




app.use(NODE_ENV === "production" ? cors(corsOptions) : cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("public"));
 

// 
// const NoteRouter = require("./controllers.notes")

//Middleware

//Routers

app.get("/", auth, (req, res)=> {
  res.json(req.payload)
})
app.use("/auth", AuthRouter); 

app.use("/note", NoteRouter);



app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
