import UpcomingcontestModel from "../models/upcontests.model.js";

export const getUpcoming = async (req, res) => {
    try {
        const queryParams = req.query
        let result;
        
        if (queryParams.platform) {
            result = await UpcomingcontestModel.find(
                { "platformname": queryParams.platform }
            );
        }
        else {
            result = await UpcomingcontestModel.find()
        }


        res.send(result).status(200);
    } catch (error) {
        res.send(error).status(400)
    }
}

export const addUpcoming = async (req, res) => {
    try {
        const newGfg = new UpcomingcontestModel(req.body)
        await newGfg.save()
        res.send('Successfully added')

    } catch (error) {
        res.send('cannot addd')
    }
}

export const deleteUpcoming = async (req, res) => {
    try {
        const { id } = req.params
        await UpcomingcontestModel.findByIdAndDelete({ _id: id }, { new: true })

        res.send('deleted successfully').status(200)
    } catch (error) {
        res.send(error).status(400)
    }
}

export const updateUpcoming = async (req, res) => {
    try {
        const { id } = req.params
        const modified = await UpcomingcontestModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })

        res.send(modified)
    } catch (error) {
        res.send(error).status(400)
    }
}


