import { Request, Response } from 'express';
import { FindAllCategoriesUseCase } from '../../domain/use-case/category/find-all-categories.use-case';

export class CategoryController {
  constructor(
    private findAllCategoriesUseCase: FindAllCategoriesUseCase,
  ) { }

  findAllCategory = async (_req: Request, res: Response) => {
    const categories = await this.findAllCategoriesUseCase.exec();

    return res.status(200).json({
      body: categories.map((category) => ({
        id: category.id,
        name: category.name,
        createdAt: category.createdAt,
      })),
    });
  };
}
