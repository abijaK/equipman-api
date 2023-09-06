import express from 'express';
import { controller } from '../controllers/equipments.ctrl.js'

const router = express.Router();

router.post('/equip/create', controller.addEquipment)
router.get('/equip/list', controller.getAllEquipments)
router.get('/equip/:id', controller.getOneEquipment)

router.put('/equip/:id/update', controller.updateEquipment)
router.delete('/equip/:id/delete', controller.deleteEquipment)

exports = router;