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
export class ListPostController {
    constructor(
        @Inject('CreatePostService')
        private readonly CreatePostService: ICreatePostService,
        @Inject('ListPostServices')
        private readonly ListPostService: IListPostService,
    ) {}

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
}
