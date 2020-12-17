const { Schema, model } = require("mongoose");

const fightSchema = new Schema({
    username: { type: String, required: true},
    image: String, 
    name: String,
    mainevent: String,
    date: String,
    location: String,
  }, {timestamps: true});

  const Fight = model("fight", noteSchema);

  module.exports = Fight;

