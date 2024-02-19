const mongoose = require('mongoose');


const second = new mongoose.Schema({
    name:{type:String},
    question:{type:String},
    concept:{type:String},
    companies:{type:String},
    level:{type:String},
    solution:{type:String},
})

const primary = new mongoose.Schema({
    date:{type:String},
    details:second,
})


const potd = mongoose.model("po",primary);  

module.exports = potd;