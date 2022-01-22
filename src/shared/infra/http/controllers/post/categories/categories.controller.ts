/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ICreateCategoryDTO } from 'src/modules/post/dto/IcreateCategory.dto';
import { ICreateCategoryService } from 'src/modules/post/services/interfaces/ICreateCategoriesService.interface';
import { CategoriesDocument } from 'src/modules/post/infra/mongo/mongoose/schemas/categories.schema';
import {
    ApiBasicAuth,
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiSecurity,
    ApiTags,
} from '@nestjs/swagger';
import { ICategoryResponseDTO } from 'src/modules/post/dto/ICategoryResponse.dto';
import { IListCategoryService } from 'src/modules/post/services/interfaces/ListCategoriesService.interface';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
    constructor(
        @Inject('CreateCategoriesService')
        private readonly CreateCategoriesServices: ICreateCategoryService,
        @Inject('ListCategoryService')
        private readonly listCategoryService: IListCategoryService,
    ) {}

    //Documentation Swagger
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Create a new Category',
        description: 'Create a new Category ',
    })
    @ApiResponse({
        status: 201,
        type: ICategoryResponseDTO,
    })
    @ApiResponse({
        status: 409,
        description: 'Conflict - Category Already exists',
    })
    //Documentation Swagger
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

    @ApiBearerAuth()
    @ApiResponse({
        status: 200,
        isArray: true,
        type: ICategoryResponseDTO,
    })
    @ApiOperation({
        summary: 'list all Category',
    })
    @Get('list-all')
    async listAll(): Promise<CategoriesDocument[]> {
        return await this.listCategoryService.execute();
    }
}
