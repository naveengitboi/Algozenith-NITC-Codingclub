import mongoose from "mongoose"
import ClubMember from "../models/clubMems.model.js";


export const getGuides = async (req, res) => {
    try {
        const allMembers = await ClubMember.find();
        res.send(allMembers).status(200)
    } catch (error) {
        res.send('something went wrong').status(400)
    }
}

export const addMember = async (req, res) => {

    try {
        
        const newMember = new ClubMember(req.body);
        await newMember.save();
        res.status(200).send('Successfully added memeber')
    } catch (error) {
        res.send('cannot add member, something went wrong').status(400)
    }
}


export const deleteMember = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        await ClubMember.findByIdAndDelete({ _id: id })
        res.send('deleted')
    } catch (error) {
        res.send('cannot delete selected user').status(400)
    }
}


export const updateMember = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = await ClubMember.findByIdAndUpdate({ _id: id }, req.body, { new: true })

        res.send('update successfully').status(200)

    } catch (error) {
        res.send('failure in updating user').status(400)
    }
}
