const mongoose = require("mongoose");

const oppo = new mongoose.Schema({
  companyname: { type: String },
  logo: { type: String },
  jobtype: { type: String },
  jobrole: { type: String },
  location: { type: String },
  salary: { type: String },
  batch: { type: String },
  apply: { type: String },
});

const opportunities = mongoose.model("oppo", oppo);

module.exports = opportunities;
