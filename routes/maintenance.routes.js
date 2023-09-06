import express from 'express';
import { controller } from '../controllers/maintenance.ctrl.js'

const router = express.Router();

router.get('/maintenance/create', controller.addMaintenance)
router.get('/maintenance/list', controller.getAllMaintenances)
router.get('/maintenance/:id', controller.getOneMaintenance)

router.put('/maintenance/:id/update', controller.updateMaintenance)
router.delete('/maintenance/:id/delete', controller.deleteMaintenance)

exports = router;