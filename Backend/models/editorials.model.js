import mongoose from "mongoose";

const editorialSchema = new mongoose.Schema({
  platformname: { type: String },
  contestnumber: { type: String },
  date: { type: String },
  contestlink: { type: String },
  solutionlink: { type: String },
});

const editorialModel = mongoose.model("Editorial", editorialSchema);

export default editorialModel
