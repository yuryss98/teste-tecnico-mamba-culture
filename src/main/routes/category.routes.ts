import { Router } from 'express';
import { makeCategoryController } from '../factories';

const categoryController = makeCategoryController();

export default (router: Router) => {
  router.get('/category/findAll', categoryController.findAllCategory);
};
