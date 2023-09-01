import express from 'express';
import { controller } from '../controllers/equipments.ctrl.js'

const router = express.Router();

router.get('/addEquip', controller.addEquipment)
router.get('/allEquip', controller.addAllEquipments)
router.get('/:id', controller.getOneEquipment)

router.put('/:id', controller.updateEquipment)
router.delete('/:id', controller.deleteEquipment)

exports = router;