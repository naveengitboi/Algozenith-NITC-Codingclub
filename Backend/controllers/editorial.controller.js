
import editorialModel from '../models/editorials.model.js'


export const getEditorials = async (req, res) => {
    try {
        const queryParams = req.query
        let result;
        if(queryParams.platform && queryParams.sort){

            result = await editorialModel.find(
                { "platformname": "leetcode" }
            ).sort({"contestnumber":1});
        }
        else if(queryParams.platform){
            result = await editorialModel.find(
                {"platformname": queryParams.platform}
            );
        }
        else{
            result = await editorialModel.find()
        }
        
        
        res.send(result).status(200);
    } catch (error) {
        res.send(error).status(400)
    }
}

export const addEditorial = async (req, res) => {
    try {
        const newGfg = new editorialModel(req.body)
        await newGfg.save()
        res.send('Successfully added')

    } catch (error) {
        res.send('cannot addd')
    }
}

export const deleteEditorial = async (req, res) => {
    try {
        const { id } = req.params
        await editorialModel.findByIdAndDelete({ _id: id }, { new: true })

        res.send('deleted successfully').status(200)
    } catch (error) {
        res.send(error).status(400)
    }
}

export const updateEditorial = async (req, res) => {
    try {
        const { id } = req.params
        const modified = await editorialModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })

        res.send(modified)
    } catch (error) {
        res.send(error).status(400)
    }
}


