import express from 'express';
import { makeCategoryController } from '../factories';

const router = express.Router();
const categoryController = makeCategoryController();

router.get('/category/findAll', categoryController.findAllCategory);

export default router;
