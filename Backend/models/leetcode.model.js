import mongoose from "mongoose";

const leetcodeSchema = new mongoose.Schema({
    date:{type:String},
    question:{type:String},
    quesname:{type:String},
    concept:{type:String},
    companies:{type:String},
    level:{type:String},
    solution:{type:String},
})


const leetcodeModel = mongoose.model("Leetcode", leetcodeSchema);  

export default leetcodeModel;