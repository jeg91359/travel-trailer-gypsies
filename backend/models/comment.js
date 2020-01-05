const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

//This model blueprint ends up getting imported into app.js
module.exports = mongoose.model("Comment", commentSchema);
