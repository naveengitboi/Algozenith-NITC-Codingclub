import mongoose from "mongoose";

const upComingContestSchema = new mongoose.Schema({
  platform: { type: String },
  contesttype: { type: String },
  date: { type: String },
  link: { type: String },
});

const UpcomingcontestModel = mongoose.model("upcontest", upComingContestSchema);

export default UpcomingcontestModel;
