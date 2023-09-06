import express from 'express';
import { controller } from '../controllers/affectation.ctrl.js'

const router = express.Router();

router.get('/addAffectation', controller.addAffectation)
router.get('/allAffectation', controller.addAllAffectations)
router.get('/:id', controller.getOneAffectation)

router.put('/:id', controller.updateAffectation)
router.delete('/:id', controller.deleteAffectation)

exports = router;