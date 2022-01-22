/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Delete, Inject, Param } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { IFindPostByIdDTO } from 'src/modules/post/dto/ICreatePost.dto';
import { IUpdateOrDeletePostService } from 'src/modules/post/services/interfaces/IUpdateOrDeletePostService.interface';

@ApiTags('Posts')
@Controller('post')
export class DeletePostController {
    constructor(
        @Inject('DeletePostService')
        private readonly deletePostService: IUpdateOrDeletePostService,
    ) {}

    //Documentation Swagger
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Delete a  Post',
        description: 'This endpoint update a  Post',
    })
    @ApiResponse({
        status: 204,
        description: 'Post is deleted',
    })
    @ApiResponse({
        status: 404,
        description: 'Post not found to delete',
    })
    //Route
    @Delete('delete/:id')
    async deletePost(@Param() { id }: IFindPostByIdDTO): Promise<void> {
        await this.deletePostService.delete(id);
    }
}
