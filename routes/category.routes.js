import express from 'express';
import { controller } from '../controllers/category.ctrl.js'

const router = express.Router();

router.get('/addCategory', controller.addCategory)
router.get('/allCategories', controller.addAllCategory)
router.get('/:id', controller.getOneCategory)

router.put('/:id', controller.updateCategory)
router.delete('/:id', controller.deleteCategory)

exports = router;