import { PrismaClient } from '@prisma/client';
import { Category } from '../../domain/entity/Category.entity';
import { CategoryRepository } from '../../domain/repository/category.repository';
import PrismaCategoryMapper from '../mapper/Prisma-category.mapper';

export class PrismaCategoryRepository implements CategoryRepository {
  private _prisma: PrismaClient;

  constructor() {
    this._prisma = new PrismaClient({
      log: ['info'],
    });
  }

  async findAll(): Promise<Category[]> {
    try {
      const categories = await this._prisma.categories.findMany();
      return categories.map((category) => PrismaCategoryMapper.toDomain(category));
    } catch (error) {
      console.error(error);
      return [];
    } finally {
      await this._prisma.$disconnect();
    }
  }
}
