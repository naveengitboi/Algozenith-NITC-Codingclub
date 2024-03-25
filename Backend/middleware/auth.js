import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        let token = req.cookies['access-token'];
        // console.log(token)
        if (token) {
            // console.log(token)
            jwt.verify(token, process.env.SECRET_KEY, (err, userId) => {
                if (err) {
                    return res.send('token expired')
                }
                req.adminId = userId.admin
                next()
            })
        } else {
            res.send('unauthorized user').status(401)
        }
    } catch (error) {
        res.send('unauthorized user').status(401)
    }
}


export default auth