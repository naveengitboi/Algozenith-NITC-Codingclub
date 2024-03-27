const mongoose = require('mongoose');

const lc = new mongoose.Schema({
    date:{type:String},
    question:{type:String},
    quesname:{type:String},
    concept:{type:String},
    companies:{type:String},
    level:{type:String},
    solution:{type:String},
})


const leetcode = mongoose.model("leetcode",lc);  

module.exports = leetcode;