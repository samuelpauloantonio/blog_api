import { CategoriesController } from './../../shared/infra/http/controllers/post/categories/categories.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryRepository } from './infra/mongo/mongoose/repositories/CategoriesRepository';

import {
    categories,
    CategorySchema,
} from './infra/mongo/mongoose/schemas/categories.schema';
import { CreateCategoryServices } from './services/categoriesServices/createCategory.service';
import { ListCategoryService } from './services/categoriesServices/ListCategoryService';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: categories.name, schema: CategorySchema },
        ]),
    ],
    controllers: [CategoriesController],
    providers: [
        { useClass: CategoryRepository, provide: 'CategoriesRepository' },
        {
            useClass: CreateCategoryServices,
            provide: 'CreateCategoriesService',
        },

        {
            useClass: ListCategoryService,
            provide: 'ListCategoryService',
        },
    ],
})
export class CategoriesModule {}
