import { PrismaCategoryRepository } from '../../data/repositories/Prisma-category.repository';
import { FindAllCategoriesUseCase } from '../../domain/use-case/category/find-all-categories.use-case';
import { CategoryController } from '../../presentation/controllers';

export const makeCategoryController = (): CategoryController => {
  const CategoryRepository = new PrismaCategoryRepository();
  const findAllCategoriesUseCase = new FindAllCategoriesUseCase(CategoryRepository);
  return new CategoryController(findAllCategoriesUseCase);
};
