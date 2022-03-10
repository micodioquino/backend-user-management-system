import express from 'express'
import { getAllUsers, getUser, createUser, updateUser, deleteUser, multipleDeleteUser } from '../controllers/User.controller.js'
const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.post('/delete', multipleDeleteUser)

export default router