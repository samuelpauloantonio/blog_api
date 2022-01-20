/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICreateCategoryDTO } from 'src/modules/post/dto/IcreateCategory.dto';
import { Response } from 'express';
import { ICreateCategoryService } from 'src/modules/post/services/interfaces/ICreateCategoriesService.interface';
import { CategoriesDocument } from 'src/modules/post/infra/mongo/mongoose/schemas/categories.schemas';

@Controller('categories')
export class CategoriesController {
    constructor(
        @Inject('CreateCategoriesService')
        private readonly CreateCategoriesServices: ICreateCategoryService,
    ) {}

    @Post('create')
    async createCategory(
        @Body() { name, description }: ICreateCategoryDTO,
    ): Promise<CategoriesDocument> {
        const categories = await this.CreateCategoriesServices.execute({
            name,
            description,
        });
        return categories;
    }
}
