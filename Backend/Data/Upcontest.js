const mongoose = require("mongoose");

const contest = new mongoose.Schema({
  upplatform: { type: String },
  contesttype: { type: String },
  update: { type: String },
  uplink: { type: String },
});

const upcontest = mongoose.model("upcontest", contest);

module.exports = upcontest;
