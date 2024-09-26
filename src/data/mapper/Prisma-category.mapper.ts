import { Categories } from '@prisma/client';
import { Category } from '../../domain/entity/Category.entity';

export default class PrismaCategoryMapper {
  static toDomain(categoryLine: Categories): Category {
    return new Category({
      id: categoryLine.id,
      name: categoryLine.name,
      createdAt: categoryLine.createdAt,
    });
  }
}
