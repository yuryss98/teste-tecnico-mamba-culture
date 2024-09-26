import { Category } from '../entity/Category.entity';

export abstract class CategoryRepository {
  abstract findAll(): Promise<Category[]>;
}
