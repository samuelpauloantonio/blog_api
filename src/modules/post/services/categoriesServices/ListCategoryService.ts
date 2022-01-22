import { Inject, Injectable } from '@nestjs/common';
import { ICategoriesRepository } from 'src/modules/post/repositories/interfaces/ICategoriesRepository';
import { CategoriesDocument } from '../../infra/mongo/mongoose/schemas/categories.schema';

@Injectable()
export class ListCategoryService {
    constructor(
        @Inject('CategoriesRepository')
        private readonly CategoryRepository: ICategoriesRepository,
    ) {}
    async execute(): Promise<CategoriesDocument[]> {
        const categories = await this.CategoryRepository.listAllCategory();
        return categories;
    }
}
