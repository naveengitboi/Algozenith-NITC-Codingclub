import mongoose from "mongoose";


const gfg = new mongoose.Schema({
    name:{type:String},
    question:{type:String},
    quesname:{type:String},
    concept:{type:String},
    companies:{type:String},
    level:{type:String},
    solution:{type:String},
})

const lc = new mongoose.Schema({
    name:{type:String},
    question:{type:String},
    quesname:{type:String},
    concept:{type:String},
    companies:{type:String},
    level:{type:String},
    solution:{type:String},
})

const primary = new mongoose.Schema({
    date:{type:String},
    geeksforgeeks:gfg,
    leetcode:lc
})


const potd = mongoose.model("potd",primary);  
 
export default potd;