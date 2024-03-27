import express from 'express'
import { addMember, deleteMember, getGuides, updateMember } from '../controllers/clubMember.controller.js'
import auth from '../middleware/auth.js'
const router = express.Router()


router.get('/', getGuides)

router.post('/addmember', auth, addMember)
router.delete('/deletemem/:id', auth, deleteMember)
router.put('/updatemem/:id', auth,updateMember)

export default router