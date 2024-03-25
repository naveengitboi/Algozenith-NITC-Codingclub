import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
import adminModel from '../models/admin.model.js'


export const loginAdmin = async (req, res) => {

    const { username, password } = req.body

    const userDetails = await adminModel.findOne({ username })

    const isAdmin = await bcrypt.hash(password, userDetails.password)

    if (isAdmin) {
        const jwtToken = jwt.sign({
            admin: userDetails._id
        }, process.env.SECRET_KEY)

        res.cookie('access-token', jwtToken).send('Success').status(200)

    }else{
        res.send('Unauthorized user').status(401)
    }

}

export const addAdmin = async (req, res) => {
    try {
        console.log(req.body.password)

        const hashedPwd = await bcrypt.hash(req.body.password, 10)

        const admin = new adminModel({
            username: req.body.username,
            password: hashedPwd
        })

        await admin.save()
        res.send('admin saved to db').status(200)

    } catch (error) {
        console.log(error);
        res.send('register failed')
    }
}