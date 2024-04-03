import mongoose from "mongoose";

const talksSchema = new mongoose.Schema({
  photo : {type : Buffer},
  
});

const talksModel = mongoose.model("talk", talksSchema);

export default talksModel;
