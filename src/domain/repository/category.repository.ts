import { Category } from '../entity/Category.entity';

export abstract class CategoryRepository {
  abstract findAll(): Promise<Category[]>;
  abstract findById(categoryId: number): Promise<Category | null>;
}
