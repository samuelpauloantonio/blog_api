import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICreateCategoryDTO } from 'src/modules/post/dto/IcreateCategory.dto';
import { ICategoriesRepository } from 'src/modules/post/repositories/interfaces/ICategoriesRepository';
import { categories, CategoriesDocument } from '../schemas/categories.schema';

@Injectable()
export class CategoryRepository implements ICategoriesRepository {
    constructor(
        @InjectModel(categories.name)
        private readonly CategoriesModel: Model<CategoriesDocument>,
    ) {}

    async createCategory({
        name,
        description,
    }: ICreateCategoryDTO): Promise<CategoriesDocument> {
        const category = await this.CategoriesModel.create({
            name,
            description,
        });

        return await category.save();
    }

    async findOneByName(name: string): Promise<CategoriesDocument> {
        return await this.CategoriesModel.findOne({
            name,
        });
    }
}
