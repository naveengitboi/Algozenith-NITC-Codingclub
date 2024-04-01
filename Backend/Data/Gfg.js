const mongoose = require('mongoose');

const gf = new mongoose.Schema({
    date:{type:String},
    question:{type:String},
    quesname:{type:String},
    concept:{type:String},
    companies:{type:String},
    level:{type:String},
    solution:{type:String},
})


const gfg = mongoose.model("gfg",gf);  

module.exports = gfg;