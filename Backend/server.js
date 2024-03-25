import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

//routes
import clubmemsroute from './routes/clubMem.route.js'
import editorialRoute from './routes/editorials.route.js'
import upComingRoute from './routes/upcoming.route.js'
import adminRouter from './routes/admin.route.js'
// middlewares
dotenv.config()
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

//mongodb connection

const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URL)
    mongoose.connection.on('connected', () => console.log('Mongodb connected'))
    const connectionPort = process.env.PORT || 8000
    app.listen(connectionPort, () => {
        console.log('connected to server at', connectionPort)
    }) 
}

connectToDb()




app.use('/api/admin', adminRouter)
app.use('/api/clubmember', clubmemsroute)
app.use('/api/editorial', editorialRoute )
app.use('/api/upcoming', upComingRoute)
