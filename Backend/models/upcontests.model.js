import mongoose from "mongoose";

const upComingContestSchema = new mongoose.Schema({
  upplatform: { type: String },
  contesttype: { type: String },
  update: { type: String },
  uplink: { type: String },
});

const UpcomingcontestModel = mongoose.model("upcontest", upComingContestSchema);

export default UpcomingcontestModel;
