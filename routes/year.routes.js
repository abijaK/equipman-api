import express from 'express';
import { controller } from '../controllers/year.ctrl.js'

const router = express.Router();

router.get('/addYear', controller.addYear)
router.get('/allYear', controller.addAllYear)
router.get('/:id', controller.getOneYear)

router.put('/:id', controller.updateYear)
router.delete('/:id', controller.deleteYear)

exports = router;