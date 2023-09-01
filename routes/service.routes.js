import express from 'express';
import { controller } from '../controllers/services.ctrl.js'

const router = express.Router();

router.get('/addService', controller.addService)
router.get('/allServices', controller.addAllServices)
router.get('/:id', controller.getOneService)

router.put('/:id', controller.updateService)
router.delete('/:id', controller.deleteService)

exports = router;