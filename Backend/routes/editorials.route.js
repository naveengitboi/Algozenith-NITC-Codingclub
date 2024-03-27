import express from 'express'
import { addEditorial, deleteEditorial, getEditorials, updateEditorial } from '../controllers/editorial.controller.js'
import auth from '../middleware/auth.js'
const router = express.Router()



router.get('/', getEditorials)

router.post('/add',auth,  addEditorial)

router.put('/update/:id',auth, updateEditorial)

router.delete('/delete/:id',auth, deleteEditorial)



export default router