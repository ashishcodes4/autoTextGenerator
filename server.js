var express = require("express");
var mongoose = require("mongoose");
// var data = require("./data.json");
var app = express();
var postModel = require("./mongoose/postModel");

mongoose.connect("mongodb://localhost/autoTextGenerator");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.get("/data", (req, res) => {
  postModel.find({}, (err, data) => {
    // console.log(data);
    res.json(data);
  });
});

app.listen(3000, () => console.log("server is running on port 3000"));
