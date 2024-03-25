import express from 'express'
import { addUpcoming, deleteUpcoming, getUpcoming, updateUpcoming } from '../controllers/upcoming.controller.js'
import auth from '../middleware/auth.js'


const router = express.Router()



router.get('/', getUpcoming)

router.post('/add',auth, addUpcoming)

router.put('/update/:id', auth, updateUpcoming)

router.delete('/delete/:id', auth, deleteUpcoming)



export default router