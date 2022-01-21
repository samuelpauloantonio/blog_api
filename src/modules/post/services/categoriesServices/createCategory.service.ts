import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { ICreateCategoryDTO } from 'src/modules/post/dto/IcreateCategory.dto';
import { ICategoriesRepository } from 'src/modules/post/repositories/interfaces/ICategoriesRepository';

@Injectable()
export class CreateCategoryServices {
    constructor(
        @Inject('CategoriesRepository')
        private readonly CategoryRepository: ICategoriesRepository,
    ) {}
    async execute({ name, description }: ICreateCategoryDTO): Promise<any> {
        const checkIfExist = await this.CategoryRepository.findOneByName(name);

        if (checkIfExist) {
            throw new ConflictException('Category already exists');
        }
        const categories = await this.CategoryRepository.createCategory({
            name,
            description,
        });

        return categories;
    }
}
