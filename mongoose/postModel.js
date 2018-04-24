var mongoose = require("mongoose");
var { Schema } = require("mongoose");
var schema = new Schema({
  //creating new schema
  userId: { type: Number, required: true },
  id: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true }
});

var postModel = mongoose.model("post", schema);

module.exports = postModel;
