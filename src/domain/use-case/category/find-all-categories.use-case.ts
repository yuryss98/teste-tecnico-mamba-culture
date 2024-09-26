import { CategoryRepository } from '../../repository/category.repository';

export class FindAllCategoriesUseCase {
  constructor(private categoriesRepository: CategoryRepository) {}

  exec() {
    return this.categoriesRepository.findAll();
  }
}
