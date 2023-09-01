import express from 'express';
import { controller } from '../controllers/maintenance.ctrl.js'

const router = express.Router();

router.get('/addMaintenance', controller.addMaintenance)
router.get('/allServices', controller.addAllMaintenances)
router.get('/:id', controller.getOneMaintenance)

router.put('/:id', controller.updateMaintenance)
router.delete('/:id', controller.deleteMaintenance)

exports = router;