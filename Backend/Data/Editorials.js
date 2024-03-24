const mongoose = require("mongoose");

const editorial = new mongoose.Schema({
  platformname: { type: String },
  contestnumber: { type: String },
  date: { type: String },
  contestlink: { type: String },
  solutionlink: { type: String },
});

const editorials = mongoose.model("editorial", editorial);

module.exports = editorials;
