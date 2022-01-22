/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import {
    IFindPostByIdDTO,
    IUpdatePostDTO,
} from 'src/modules/post/dto/ICreatePost.dto';
import { IPostResponseDTO } from 'src/modules/post/dto/IPostResponse.dto';
import { IUpdateOrDeletePostService } from 'src/modules/post/services/interfaces/IUpdateOrDeletePostService.interface';

@ApiTags('Posts')
@Controller('post')
export class UpdatePostController {
    constructor(
        @Inject('UpdatePostService')
        private readonly updatePostService: IUpdateOrDeletePostService,
    ) {}

    //Documentation Swagger
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Update a  Post',
        description: 'This endpoint update a  Post',
    })
    @ApiResponse({
        status: 201,
        description: 'Post is updated',
        type: IPostResponseDTO,
    })
    @ApiResponse({
        status: 404,
        description: 'Post not found',
    })
    //Route
    @Put('update/:id')
    async createPost(
        @Param() { id }: IFindPostByIdDTO,
        @Body() { title, description, category_id }: IUpdatePostDTO,
    ): Promise<IPostResponseDTO> {
        const post = await this.updatePostService.update({
            title,
            description,
            category_id,
            id,
        });

        return post;
    }
}
