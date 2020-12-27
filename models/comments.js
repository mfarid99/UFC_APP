const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    username: { type: String, required: true},
    comment: String
    
  }, {timestamps: true});

  const Comment = model("comment", commentSchema);

  module.exports = Comment;

