require("dotenv").config()
const { SECRET } = process.env
const jwt = require("jsonwebtoken");

//This function receives your token payload and contains the logic to verify if the user is genuine.

// const verifyUser = (payload) => {
//   //logic to verify user, return true if the user exists, return false otherwise
//   return true;
// };

//this function is passed in your JWT secret returns the auth middleware so to use it would be app.use(auth(SECRET)) or app.get('/', auth(), (req, res) => {})
const auth = async (req, res, next) => {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const payload = await jwt.verify(token, SECRET);
        if (payload) {
          req.payload = payload;
          next();
        } else {
          res.status(400).json({error: "VERIFICATION FAILED OR NO PAYLOAD" });
        }
      } else {
          res.status(400).json({ error: "NO AUTHORIZATION HEADER" })
      }
    } catch (err) {
      res.status(400).json({err});
    }
  };


module.exports = auth
