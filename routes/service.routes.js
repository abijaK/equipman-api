import express from 'express';
import { controller } from '../controllers/services.ctrl.js'

const router = express.Router();

router.get('/service/create', controller.addService)
router.get('/service/list', controller.getAllServices)
router.get('/service/:id', controller.getOneService)

router.put('/service/:id/update', controller.updateService)
router.delete('/service/:id/delete', controller.deleteService)

exports = router;