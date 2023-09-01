import express from 'express';
import { controller } from '../controllers/user.ctrl.js'

const router = express.Router();

router.get('/addUser', controller.addUser)
router.get('/allUsers', controller.addAllUsers)
router.get('/:id', controller.getOneUser)

router.put('/:id', controller.updateUser)
router.delete('/:id', controller.deleteUser)

exports = router;