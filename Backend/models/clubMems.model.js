import mongoose from "mongoose";

const clubMemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    inClubePos: {
        type:String,
        default:'member'
    },
    orderIn:{
        type:Number,
        required: false
    }
})


const ClubMember = mongoose.model('ClubMember', clubMemSchema)

export default ClubMember

