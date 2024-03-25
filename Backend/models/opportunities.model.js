import mongoose from "mongoose";

const opportunitiesSchema = new mongoose.Schema({
  companyname: { type: String },
  logo: { type: String },
  jobtype: { type: String },
  jobrole: { type: String },
  location: { type: String },
  salary: { type: String },
  batch: { type: String },
  apply: { type: String },
});

const opportunitiesModel = mongoose.model("Opportunitie", opportunitiesSchema);

export default opportunitiesModel;
