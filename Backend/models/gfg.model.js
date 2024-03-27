import mongoose from "mongoose";

const gfgSchema = new mongoose.Schema({
    date:{type:String},
    question:{type:String},
    quesname:{type:String},
    concept:{type:String},
    companies:{type:String},
    level:{type:String},
    solution:{type:String},
})


const gfgModel = mongoose.model("Gfg", gfgSchema);  

export default gfgModel;