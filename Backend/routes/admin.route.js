import express from 'express'
import { addAdmin, loginAdmin } from '../controllers/admin.controller.js'

const router = express.Router()

router.post('/addadmin', addAdmin)


router.post('/login', loginAdmin)


export default router