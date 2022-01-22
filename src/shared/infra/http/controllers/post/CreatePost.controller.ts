/*
https://docs.nestjs.com/controllers#controllers
*/

import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Post,
    Query,
    Req,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiQuery,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import {
    ICreatePostDTO,
    IFindPostByIdDTO,
    IFindPostByTitleDTO,
} from 'src/modules/post/dto/ICreatePost.dto';
import { ICreatePostService } from 'src/modules/post/services/interfaces/ICreatePostService.interface';
import { IListPostService } from 'src/modules/post/services/interfaces/IListPostServices.interface';
import { IPostResponseDTO } from 'src/modules/post/dto/IPostResponse.dto';

import { Request } from 'express';

@ApiTags('Posts')
@Controller('post')
export class CreatePostController {
    constructor(
        @Inject('CreatePostService')
        private readonly CreatePostService: ICreatePostService,
        @Inject('ListPostServices')
        private readonly ListPostService: IListPostService,
    ) {}

    //Documentation Swagger
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Create a new Post',
        description: 'This endpoint create a new Post',
    })
    @ApiResponse({
        status: 201,
        description: 'Post is created',
        type: IPostResponseDTO,
    })
    @ApiResponse({
        status: 409,
        description: 'conflict post already exists',
    })
    //Route
    @Post('create')
    async createPost(
        @Req() request: Request,
        @Body() { title, description, category_id }: ICreatePostDTO,
    ): Promise<IPostResponseDTO> {
        const { id } = request.user;

        const post = await this.CreatePostService.execute({
            title,
            description,
            category_id,
            author_id: id,
        });

        return post;
    }

    //Documentation Swagger
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'List all Post',
    })
    @ApiResponse({
        status: 200,
        description: 'All post list',
        isArray: true,
        type: IPostResponseDTO,
    })
    //Route
    @Get('list-all')
    async listAllPost(): Promise<IPostResponseDTO[]> {
        return await this.ListPostService.listAll();
    }

    //Documentation Swagger
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Find one Post by title',
    })
    @ApiResponse({
        status: 200,
        description: 'One Post',
        type: IPostResponseDTO,
    })
    @ApiQuery({
        name: 'title',
        required: true,
        schema: {
            description: 'title of post',
            example: {
                title: 'title',
            },
        },
    })
    //Route
    @Get('find-one-by-title')
    async findPostByTitle(
        @Query() { title }: IFindPostByTitleDTO,
    ): Promise<IPostResponseDTO> {
        return await this.ListPostService.findByTitle(title);
    }

    //Documentation Swagger
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Find one Post by Id',
    })
    @ApiResponse({
        status: 200,
        description: 'One Post',
        type: IPostResponseDTO,
    })
    //Route
    @Get('find-one-by-id/:id')
    async findPostById(
        @Param() { id }: IFindPostByIdDTO,
    ): Promise<IPostResponseDTO> {
        return await this.ListPostService.findById(id);
    }
}
