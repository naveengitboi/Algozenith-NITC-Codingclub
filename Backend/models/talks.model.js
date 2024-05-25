import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  qId: { type: Number, required: true },
  que: { type: String, required: true },
  val: { type: String, required: true },
}, { _id: false });

const talksSchema = new mongoose.Schema({
  image: {type: String},
  companylogo: {type: String},
  candidName: {type: String},
  candidCourse: {type: String},
  candidUniversity: {type: String},
  company: {type: String},
  roleInCompany: {type: String},
  ctc: {type: String},
  heading: {type: String},
  description: {type: String},
  type: {type: String},
  overview: {type: String},
  results: [resultSchema],
});

const talksModel = mongoose.model("talk", talksSchema);

export default talksModel;
